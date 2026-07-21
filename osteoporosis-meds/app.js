/* --- app.js: Osteoporosis Decision Engine & Clinical Interactions --- */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const profilerForm = document.getElementById('profiler-form');
    const resetBtn = document.getElementById('reset-profiler');
    const resultsContainer = document.getElementById('profiler-results');
    const printBtn = document.getElementById('print-btn');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sideNavLinks = document.querySelectorAll('.nav-link');
    
    // Result DOM fields
    const diagnosisVal = document.getElementById('diagnosis-val');
    const diagnosisCriteria = document.getElementById('diagnosis-criteria');
    const diagnosisBox = document.getElementById('diagnosis-result-box');
    const riskVal = document.getElementById('risk-val');
    const riskCriteria = document.getElementById('risk-criteria');
    const riskBox = document.getElementById('risk-result-box');
    const strategyVal = document.getElementById('strategy-val');
    const strategyDesc = document.getElementById('strategy-desc');
    const strategyBox = document.getElementById('strategy-result-box');
    const suitabilityTbody = document.getElementById('suitability-tbody');
    const screeningAlert = document.getElementById('screening-alert');
    const screeningAlertText = document.getElementById('screening-alert-text');

    // Theme state
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Toggle Theme
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Mobile Sidebar Toggle
    mobileNavToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        mobileNavToggle.textContent = sidebar.classList.contains('open') ? 'Close' : 'Menu';
    });

    // Smooth Scroll Spy for Side Navigation
    sideNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Active link swap
                sideNavLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Close sidebar on mobile
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                    mobileNavToggle.textContent = 'Menu';
                }
            }
        });
    });

    // Scroll Spy Highlight
    window.addEventListener('scroll', () => {
        let currentSection = '';
        const sections = document.querySelectorAll('.content-section');
        const scrollPosition = window.scrollY + 120; // offset header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        if (currentSection) {
            sideNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Print functionality
    printBtn.addEventListener('click', () => {
        window.print();
    });

    // Clear Inputs / Reset
    resetBtn.addEventListener('click', () => {
        profilerForm.reset();
        resultsContainer.classList.add('hidden');
        screeningAlert.classList.add('hidden');
        window.scrollTo({ top: document.getElementById('patient-profiler').offsetTop - 20, behavior: 'smooth' });
    });

    // Recommendation Engine Submit
    profilerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Retrieve inputs
        const demographic = document.getElementById('patient-demographics').value;
        const tScoreInput = document.getElementById('t-score').value;
        const fracture = document.getElementById('fracture-history').value;
        let fraxMofInput = document.getElementById('frax-mof').value;
        let fraxHipInput = document.getElementById('frax-hip').value;
        const renalClInput = document.getElementById('renal-cl').value;
        const glucocorticoids = document.getElementById('glucocorticoids').value;
        
        const hasGiDisorder = document.getElementById('gi-disorder').checked;
        const hasCvEvent = document.getElementById('cv-event').checked;
        const hasCvHighRisk = document.getElementById('cv-high-risk').checked;
        const hasBreastCancerRisk = document.getElementById('breast-cancer-risk').checked;
        const hasPoorAdherence = document.getElementById('poor-adherence').checked;

        // Parse numerical inputs
        const tScore = tScoreInput !== '' ? parseFloat(tScoreInput) : null;
        let fraxMof = fraxMofInput !== '' ? parseFloat(fraxMofInput) : null;
        let fraxHip = fraxHipInput !== '' ? parseFloat(fraxHipInput) : null;
        const renalCl = renalClInput !== '' ? parseFloat(renalClInput) : null;

        // Validation: Need at least T-score OR Fracture OR FRAX to diagnose
        if (tScore === null && fracture === 'none' && fraxMof === null && fraxHip === null) {
            alert('Clinical Evaluation requires at least a T-Score, low-trauma fracture history, or FRAX score.');
            return;
        }

        // --- GLUCOCORTICOID FRAX ADJUSTMENT ---
        // Prednisone > 7.5 mg/day (high-dose) increases FRAX MOF by 15% and Hip by 20%
        let fraxAdjustedMsg = '';
        if (glucocorticoids === 'high-dose') {
            if (fraxMof !== null) {
                fraxMof = Math.round(fraxMof * 1.15 * 10) / 10;
                fraxMofInput = fraxMof;
            }
            if (fraxHip !== null) {
                fraxHip = Math.round(fraxHip * 1.20 * 10) / 10;
                fraxHipInput = fraxHip;
            }
            fraxAdjustedMsg = ' (FRAX scores adjusted +15%/+20% for prednisone >7.5 mg/day)';
        }

        // --- DIAGNOSIS LOGIC ---
        let diagnosis = 'Normal';
        let diagCriteria = 'T-score > -1.0, no fractures.';
        let diagColorClass = 'bg-result-normal';

        if (fracture === 'hip-spine') {
            diagnosis = 'Clinical Osteoporosis';
            diagCriteria = 'Low-trauma hip or vertebral fracture present.';
            diagColorClass = 'bg-result-osteoporosis';
        } else if (tScore !== null && tScore <= -2.5) {
            diagnosis = 'Osteoporosis';
            diagCriteria = `DXA T-score: ${tScore} (T-score ≤ -2.5 threshold).`;
            diagColorClass = 'bg-result-osteoporosis';
        } else if (tScore !== null && tScore > -2.5 && tScore <= -1.0) {
            diagnosis = 'Osteopenia';
            diagCriteria = `DXA T-score: ${tScore} (Osteopenic range: -1.0 to -2.5).`;
            diagColorClass = 'bg-result-osteopenia';
            
            // Check if meets treatment thresholds via FRAX
            const meetsFrax = (fraxMof !== null && fraxMof >= 20) || (fraxHip !== null && fraxHip >= 3);
            if (meetsFrax) {
                diagCriteria += ` Meets BHOF Rx thresholds: FRAX MOF ${fraxMof}% (≥20%) or Hip ${fraxHip}% (≥3%).${fraxAdjustedMsg}`;
            } else {
                diagCriteria += ' Does not meet FRAX thresholds for automatic treatment.';
            }
        } else if (fracture === 'other-fracture') {
            diagnosis = 'Clinical Osteopenia/High Risk';
            diagCriteria = 'Low-trauma non-hip/non-vertebral fracture with osteopenia.';
            diagColorClass = 'bg-result-osteopenia';
        }

        // --- SCREENING RECOMMENDATION ALERT ---
        let showScreeningAlert = false;
        let screeningText = '';
        if (demographic === 'postmenopausal-65') {
            showScreeningAlert = true;
            screeningText = 'USPSTF 2025 recommends screening for all postmenopausal women aged 65 years and older.';
        } else if (demographic === 'postmenopausal-under65') {
            showScreeningAlert = true;
            screeningText = 'USPSTF 2025 recommends screening for postmenopausal women under 65 years who have an increased risk of osteoporosis (e.g. FRAX assessed, clinical risk factors).';
        } else if (demographic === 'man-70') {
            showScreeningAlert = true;
            screeningText = 'Endocrine Society guidelines recommend screening DXA scans for all men aged 70 years and older.';
        }

        // --- RISK STRATIFICATION LOGIC ---
        let riskLevel = 'Low Risk';
        let riskCriteriaText = 'T-score > -1.0, no fractures, no high-dose steroids.';
        let riskColorClass = 'bg-result-risk-low';

        const isVeryHighRisk = 
            (tScore !== null && tScore <= -2.5 && (fracture === 'hip-spine' || fracture === 'multiple-vertebral')) ||
            (fracture === 'multiple-vertebral') ||
            (tScore !== null && tScore <= -3.0) ||
            (fraxMof !== null && fraxMof > 30) ||
            (fraxHip !== null && fraxHip > 4.5) ||
            (glucocorticoids === 'high-dose' && (fracture !== 'none' || (tScore !== null && tScore <= -2.5)));

        const isHighRisk = !isVeryHighRisk && (
            (tScore !== null && tScore <= -2.5) ||
            (fracture === 'hip-spine' || fracture === 'other-fracture') ||
            (tScore !== null && tScore > -2.5 && tScore <= -1.0 && ((fraxMof !== null && fraxMof >= 20) || (fraxHip !== null && fraxHip >= 3))) ||
            (glucocorticoids !== 'no' && tScore !== null && tScore <= -1.0)
        );

        if (isVeryHighRisk) {
            riskLevel = 'Very High Risk';
            riskCriteriaText = 'T-score ≤ -3.0, multiple vertebral fractures, T-score ≤ -2.5 + fracture, high steroid dose, or FRAX >30% MOF / >4.5% Hip.';
            riskColorClass = 'bg-result-risk-veryhigh';
        } else if (isHighRisk) {
            riskLevel = 'High Risk';
            riskCriteriaText = 'T-score ≤ -2.5 without recent fracture, or osteopenia meeting FRAX treatment thresholds.';
            riskColorClass = 'bg-result-risk-high';
        } else if (tScore !== null && tScore > -2.5 && tScore <= -1.0) {
            riskLevel = 'Moderate Risk';
            riskCriteriaText = 'Osteopenia (T-score -1.0 to -2.5) with FRAX risk below BHOF treatment thresholds.';
            riskColorClass = 'bg-result-risk-high'; // Style similarly to high risk caution
        }

        // --- TREATMENT STRATEGY DECISION ---
        let strategy = 'Clinical Monitoring & Preventive Care';
        let strategyDescription = 'Optimize dietary calcium (1,000–1,200 mg/day) and Vitamin D (600–800 IU/day). Encourage weight-bearing exercises and fall-prevention measures. Repeat DXA scan in 2 years to monitor bone mineral density (BMD).';

        if (glucocorticoids !== 'no' && riskLevel === 'Low Risk') {
            strategy = 'Optimize Supplements & Monitor';
            strategyDescription = 'Optimize Calcium & Vitamin D. Since patient is on glucocorticoid therapy (>3 months), reassess fracture risk annually. Initiate active treatment if BMD declines or risk flags increase.';
        }

        if (isVeryHighRisk) {
            if (glucocorticoids !== 'no') {
                strategy = 'Anabolic PTH Analog-First Strategy';
                strategyDescription = 'Glucocorticoid-Induced Osteoporosis (GIOP) with very high risk: PTH analog (Teriparatide) is conditionally recommended over oral bisphosphonate as initial therapy for 2 years, immediately followed by an antiresorptive (bisphosphonate or denosumab) to maintain BMD gains. *Note: Romosozumab and Abaloparatide are not FDA-approved for GIOP.*';
            } else {
                strategy = 'Anabolic-First Strategy (Recommended)';
                strategyDescription = 'Anabolic therapy (Romosozumab, Teriparatide, or Abaloparatide) for 1–2 years produces superior bone gains compared to starting with antiresorptives. MUST transition directly to an antiresorptive (alendronate, zoledronic acid, or denosumab) upon completion to lock in and consolidate BMD gains.';
            }
        } else if (isHighRisk) {
            if (glucocorticoids !== 'no') {
                strategy = 'First-Line Antiresorptive or Anabolic';
                strategyDescription = 'For Moderate-High Risk GIOP: Initiate oral bisphosphonate (Alendronate/Risedronate), IV zoledronic acid, or denosumab. For High Risk GIOP, ACR guidelines conditionally recommend denosumab or PTH analog (Teriparatide) over oral bisphosphonate.';
            } else {
                strategy = 'First-Line Antiresorptive Therapy';
                strategyDescription = 'Initiate Oral Bisphosphonate (Alendronate 70 mg weekly or Risedronate 35 mg weekly) or Denosumab 60 mg SubQ every 6 months. If GI contraindications or compliance issues are present, utilize IV Bisphosphonate (Zoledronic Acid 5 mg IV yearly).';
            }
        } else if (riskLevel === 'Moderate Risk') {
            strategy = 'Preventive Care & Re-evaluate';
            strategyDescription = 'Optimized Calcium & Vitamin D. Pharmacotherapy is not automatically indicated. Check for secondary causes of osteoporosis, assess fall risk, and repeat DXA in 1-2 years.';
        }

        // --- ADD SUPPLEMENT TIP IF GI/PPI ACTIVE ---
        if (hasGiDisorder) {
            strategyDescription += '<br><br><strong>🥛 Calcium Supplementation Tip:</strong> Due to active GI disorders, bariatric/bypass surgery, or potential gastric acid suppression (PPI/H2RA use), recommend <strong>Calcium Citrate</strong> (e.g. Citracal 315 mg, 2-3 times daily) rather than Calcium Carbonate, as citrate does not require gastric acid for absorption. Keep single supplement doses &le;500 mg.';
        }

        // --- DRUG SUITABILITY MATRIX DECISIONS ---
        const drugSuitabilityList = [];

        // 1. Oral Bisphosphonates (Alendronate/Risedronate)
        let oralBisStatus = 'Preferred';
        let oralBisNotes = 'Standard, highly cost-effective first-line agent. Proven fracture reduction at all 3 sites (vertebral, hip, nonvertebral).';
        if (renalCl !== null && renalCl < 35) {
            oralBisStatus = 'Contraindicated';
            oralBisNotes = 'Contraindicated: Clearance falls below safety margin (CrCl < 35 mL/min). Risk of drug accumulation.';
        } else if (hasGiDisorder) {
            oralBisStatus = 'Avoid';
            oralBisNotes = 'Avoid: Active GI disorders (GERD, stricture, Barrett\'s, gastric bypass/malabsorption) create high risk for mucosal irritation or render oral dosing ineffective.';
        } else if (hasPoorAdherence) {
            oralBisStatus = 'Caution';
            oralBisNotes = 'Caution: Requires strict weekly dosing compliance and 30-minute upright fasting protocol. Consider IV or provider-administered subcutaneous regimens.';
        } else if (isVeryHighRisk) {
            oralBisStatus = 'Caution';
            oralBisNotes = 'Anabolic-first strategy preferred for Very High Risk. Use oral bisphosphonate if anabolic is contraindicated or unavailable, or as sequencing follow-up.';
        }
        drugSuitabilityList.push({ class: 'Oral Bisphosphonate', name: 'Alendronate / Risedronate', status: oralBisStatus, notes: oralBisNotes });

        // 2. Oral Bisphosphonate (Ibandronate)
        let ibandronateStatus = 'Not Preferred';
        let ibandronateNotes = 'Only proven to reduce vertebral fractures. Lacks proven hip/nonvertebral fracture reduction. Not recommended as a preferred first-line agent.';
        if (renalCl !== null && renalCl < 30) {
            ibandronateStatus = 'Contraindicated';
            ibandronateNotes = 'Contraindicated: CrCl < 30 mL/min cutoff reached.';
        } else if (hasGiDisorder) {
            ibandronateStatus = 'Avoid';
            ibandronateNotes = 'Avoid due to active esophageal disorders or malabsorption.';
        }
        drugSuitabilityList.push({ class: 'Oral Bisphosphonate', name: 'Ibandronate (Oral)', status: ibandronateStatus, notes: ibandronateNotes });

        // 3. IV Bisphosphonate (Zoledronic Acid)
        let ivBisStatus = 'Preferred';
        let ivBisNotes = 'Excellent yearly dosing. Bypasses compliance and GI issues. Proven fracture reduction at all 3 sites.';
        if (renalCl !== null && renalCl < 35) {
            ivBisStatus = 'Contraindicated';
            ivBisNotes = 'Contraindicated: Do not administer if CrCl < 35 mL/min or in acute renal impairment.';
        } else if (isVeryHighRisk) {
            ivBisStatus = 'Caution';
            ivBisNotes = 'Anabolic-first is preferred. Zoledronic Acid is preferred as the secondary consolidating agent starting 1 year after anabolic treatment.';
        } else if (hasGiDisorder || hasPoorAdherence) {
            ivBisStatus = 'Preferred';
            ivBisNotes = 'Preferred option: Safely bypasses gastrointestinal mucosal irritation and daily/weekly adherence barriers.';
        }
        drugSuitabilityList.push({ class: 'IV Bisphosphonate', name: 'Zoledronic Acid (Reclast)', status: ivBisStatus, notes: ivBisNotes });

        // 4. RANKL Inhibitor (Denosumab)
        let denosumabStatus = 'Preferred';
        let denosumabNotes = 'Highly effective 6-month injection. No renal clearance. Proven fracture reduction at all 3 sites.';
        if (renalCl !== null && renalCl < 15) {
            denosumabStatus = 'Contraindicated';
            denosumabNotes = 'Contraindicated / Severe Hazard: FDA Black Box Warning. Advanced CKD (CrCl < 15 or dialysis) carries extreme risk of severe hypocalcemia. Avoid without specialist management.';
        } else if (renalCl !== null && renalCl < 30) {
            denosumabStatus = 'Caution';
            denosumabNotes = 'BLACK BOX WARNING: eGFR < 30 mL/min. High risk of severe hypocalcemia. Requires specialist oversight, aggressive calcium/Vit D loading, and close lab monitoring.';
        } else if (hasPoorAdherence) {
            denosumabStatus = 'Caution';
            denosumabNotes = 'Caution: Discontinuing or delaying >1 month triggers rapid rebound bone loss and multiple vertebral fractures. Requires strict 6-month office visit adherence.';
        } else if (isVeryHighRisk) {
            denosumabStatus = 'Caution';
            denosumabNotes = 'Anabolic-first preferred. Denosumab is an excellent option for follow-up antiresorptive therapy, but requires a mandatory transition plan.';
        }
        drugSuitabilityList.push({ class: 'RANKL Inhibitor', name: 'Denosumab (Prolia)', status: denosumabStatus, notes: denosumabNotes });

        // 5. Anabolic Agent (Teriparatide)
        let teriparatideStatus = isVeryHighRisk ? 'Preferred' : 'Secondary Option';
        let teriparatideNotes = 'Bone building agent. Daily self-injection pen. Max duration 2 years. Requires antiresorptive follow-up.';
        if (isVeryHighRisk) {
            teriparatideNotes = 'Preferred initial agent for anabolic-first sequencing. Bypasses CV warning of Romosozumab. Approved for GIOP.';
        }
        if (glucocorticoids !== 'no' && isVeryHighRisk) {
            teriparatideStatus = 'Preferred';
            teriparatideNotes = 'Preferred first-line agent for very high risk GIOP. FDA-approved for Glucocorticoid-Induced Osteoporosis.';
        }
        drugSuitabilityList.push({ class: 'Anabolic (PTH)', name: 'Teriparatide (Forteo / Generic)', status: teriparatideStatus, notes: teriparatideNotes });

        // 6. Anabolic Agent (Abaloparatide)
        let abaloparatideStatus = isVeryHighRisk ? 'Preferred' : 'Secondary Option';
        let abaloparatideNotes = 'Bone building agent. Daily periumbilical self-injection pen. Max duration 2 years. Requires antiresorptive follow-up.';
        if (glucocorticoids !== 'no') {
            abaloparatideStatus = 'Avoid';
            abaloparatideNotes = 'Avoid: Not FDA-approved for Glucocorticoid-Induced Osteoporosis (GIOP). Use Teriparatide if anabolic is indicated.';
        } else if (demographic === 'other') {
            abaloparatideStatus = 'Avoid';
            abaloparatideNotes = 'Approved only for PMO and Male Osteoporosis. Not approved for general adult usage.';
        } else if (isVeryHighRisk) {
            abaloparatideNotes = 'Preferred anabolic-first option. Shown to achieve greater hip BMD gains than Teriparatide in head-to-head trials.';
        }
        drugSuitabilityList.push({ class: 'Anabolic (PTHrP)', name: 'Abaloparatide (Tymlos)', status: abaloparatideStatus, notes: abaloparatideNotes });

        // 7. Anabolic Agent (Romosozumab)
        let romosozumabStatus = isVeryHighRisk ? 'Preferred' : 'Secondary Option';
        let romosozumabNotes = 'Dual action bone builder. Monthly office administration. Max duration 12 months. Superior BMD gains.';
        if (hasCvEvent) {
            romosozumabStatus = 'Contraindicated';
            romosozumabNotes = 'Contraindicated (FDA Black Box): Do not initiate if myocardial infarction (MI) or stroke occurred within the preceding year.';
        } else if (hasCvHighRisk) {
            romosozumabStatus = 'Avoid';
            romosozumabNotes = 'Avoid / Use Caution: High baseline cardiovascular risk. Weigh benefits against MACE signal seen in trials.';
        } else if (glucocorticoids !== 'no') {
            romosozumabStatus = 'Avoid';
            romosozumabNotes = 'Avoid: Not FDA-approved for Glucocorticoid-Induced Osteoporosis (GIOP). Use Teriparatide instead.';
        } else if (demographic === 'man' || demographic === 'man-70' || demographic === 'man-under70') {
            romosozumabStatus = 'Avoid';
            romosozumabNotes = 'Avoid: FDA-approved for postmenopausal osteoporosis only. Lacks approval for male osteoporosis.';
        } else if (isVeryHighRisk) {
            romosozumabNotes = 'Preferred bone-builder. Delivers the greatest BMD gains of all agents and proven hip fracture reduction (ARCH Trial).';
        }
        drugSuitabilityList.push({ class: 'Anabolic (Anti-Sclerostin)', name: 'Romosozumab (Evenity)', status: romosozumabStatus, notes: romosozumabNotes });

        // 8. SERM (Raloxifene)
        let raloxifeneStatus = 'Secondary Option';
        let raloxifeneNotes = 'Vertebral fracture prevention only. No hip or nonvertebral fracture efficacy.';
        if (hasBreastCancerRisk && (demographic.includes('postmenopausal') || demographic === 'none')) {
            raloxifeneStatus = 'Preferred';
            raloxifeneNotes = 'Preferred Option: Ideal candidate with vertebral fracture risk + high breast cancer risk. Reduces invasive breast cancer risk by 76%.';
        } else if (hasCvEvent || hasCvHighRisk) {
            raloxifeneStatus = 'Avoid';
            raloxifeneNotes = 'Avoid: Increases risk of fatal stroke and thromboembolic events (VTE).';
        }
        if (demographic.includes('man')) {
            raloxifeneStatus = 'Contraindicated';
            raloxifeneNotes = 'Contraindicated: Approved and researched only in women.';
        }
        drugSuitabilityList.push({ class: 'SERM', name: 'Raloxifene (Evista)', status: raloxifeneStatus, notes: raloxifeneNotes });

        // 9. Calcitonin
        let calcitoninStatus = 'Last-Line';
        let calcitoninNotes = 'Reserved for acute vertebral fracture pain relief (analgesic effect). Lacks nonvertebral or hip fracture reduction data.';
        drugSuitabilityList.push({ class: 'Calcitonin', name: 'Calcitonin Nasal / Injection', status: calcitoninStatus, notes: calcitoninNotes });


        // --- UPDATE DISPLAY ---
        
        // Screening Alert
        if (showScreeningAlert) {
            screeningAlertText.textContent = screeningText;
            screeningAlert.classList.remove('hidden');
        } else {
            screeningAlert.classList.add('hidden');
        }

        // Diagnosis Box
        diagnosisVal.textContent = diagnosis;
        diagnosisCriteria.textContent = diagCriteria;
        diagnosisBox.className = `result-box text-center ${diagColorClass}`;

        // Risk Box
        riskVal.textContent = riskLevel;
        riskCriteria.textContent = riskCriteriaText;
        
        riskBox.className = `result-box text-center`;
        if (riskLevel === 'Very High Risk') {
            riskBox.classList.add('bg-result-risk-veryhigh');
        } else if (riskLevel === 'High Risk' || riskLevel === 'Moderate Risk') {
            riskBox.classList.add('bg-result-risk-high');
        } else {
            riskBox.classList.add('bg-result-risk-low');
        }

        // Strategy Box
        strategyVal.textContent = strategy;
        strategyDesc.textContent = strategyDescription;
        
        strategyBox.className = `result-box col-span-2`;
        if (isVeryHighRisk) {
            strategyBox.classList.add('bg-result-risk-veryhigh');
        } else if (isHighRisk) {
            strategyBox.classList.add('bg-result-risk-high');
        } else {
            strategyBox.classList.add('bg-result-risk-low');
        }

        // Suitability Table Body
        suitabilityTbody.innerHTML = '';
        drugSuitabilityList.forEach(item => {
            const tr = document.createElement('tr');
            
            let badgeClass = 'badge-success';
            if (item.status === 'Contraindicated') badgeClass = 'badge-danger';
            else if (item.status === 'Avoid') badgeClass = 'badge-danger';
            else if (item.status === 'Caution' || item.status === 'Not Preferred' || item.status === 'Last-Line') badgeClass = 'badge-warning';
            else if (item.status === 'Secondary Option') badgeClass = 'badge-warning';

            tr.innerHTML = `
                <td><strong>${item.class}</strong></td>
                <td>${item.name}</td>
                <td><span class="badge ${badgeClass}">${item.status}</span></td>
                <td>${item.notes}</td>
            `;
            suitabilityTbody.appendChild(tr);
        });

        // Show Results container
        resultsContainer.classList.remove('hidden');
        
        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
        updateEHRNote();
    });

    // Drug Holiday Evaluation Form
    const holidayForm = document.getElementById('holiday-form');
    const holidayResult = document.getElementById('holiday-result');

    if (holidayForm) {
        holidayForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const agent = document.getElementById('holiday-agent').value;
            const durationInput = document.getElementById('holiday-duration').value;
            const risk = document.getElementById('holiday-risk').value;

            if (durationInput === '') {
                alert('Please enter the duration of medication use.');
                return;
            }

            const duration = parseFloat(durationInput);
            let resultHtml = '';
            let alertClass = 'alert-info'; // alert-info, alert-warning, alert-danger

            if (agent === 'oral-bis') {
                if (duration < 5) {
                    alertClass = 'alert-warning';
                    resultHtml = `<strong>Drug Holiday Eligible: NO</strong><br>
                                  <em>Current Duration: ${duration} years (Recommended: 5 years for High Risk)</em><br><br>
                                  <strong>Clinical Plan:</strong> Oral bisphosphonates (Alendronate/Risedronate) should generally be continued for at least 5 years before considering a holiday to achieve adequate bone density and skeletal retention. Re-evaluate annually.`;
                } else {
                    if (risk === 'very-high') {
                        alertClass = 'alert-warning';
                        resultHtml = `<strong>Drug Holiday Eligible: NO (Postpone)</strong><br>
                                      <em>Current Duration: ${duration} years (Risk Level: Very High Risk)</em><br><br>
                                      <strong>Clinical Plan:</strong> For patients at very high fracture risk (T-score &le; -3.0 or recent fracture), continue oral bisphosphonates for up to 10 years before considering a holiday. Monitor closely for atypical femoral fracture (AFF) signs (thigh/groin pain) and perform regular dental care to prevent ONJ.`;
                    } else if (risk === 'high') {
                        alertClass = 'alert-info';
                        resultHtml = `<strong>Drug Holiday Eligible: YES</strong><br>
                                      <em>Current Duration: ${duration} years (Risk Level: High Risk)</em><br><br>
                                      <strong>Holiday Duration:</strong> 2–4 years (expert opinion). Oral bisphosphonates accumulate in bone and continue to protect against fractures after discontinuation.<br><br>
                                      <strong>Monitoring Plan:</strong> Check DXA in 2 years. Restart therapy if a fracture occurs, BMD declines significantly, or FRAX 10-year risk increases (MOF &ge;20% / Hip &ge;3%).`;
                    } else {
                        alertClass = 'alert-info';
                        resultHtml = `<strong>Drug Holiday Eligible: YES (Highly Recommended)</strong><br>
                                      <em>Current Duration: ${duration} years (Risk Level: Low/Moderate Risk)</em><br><br>
                                      <strong>Holiday Plan:</strong> Patient is at low/moderate fracture risk. Discontinue therapy and monitor. Optimize dietary Calcium (1000–1200 mg/day) and Vitamin D (600–800 IU/day).`;
                    }
                }
            } else if (agent === 'iv-bis') {
                if (duration < 3) {
                    alertClass = 'alert-warning';
                    resultHtml = `<strong>Drug Holiday Eligible: NO</strong><br>
                                  <em>Current Duration: ${duration} years (Recommended: 3 years for High Risk)</em><br><br>
                                  <strong>Clinical Plan:</strong> Complete a full 3-year course of yearly IV zoledronic acid infusions before evaluating for a drug holiday.`;
                } else {
                    if (risk === 'very-high') {
                        alertClass = 'alert-warning';
                        resultHtml = `<strong>Drug Holiday Eligible: NO (Postpone)</strong><br>
                                      <em>Current Duration: ${duration} years (Risk Level: Very High Risk)</em><br><br>
                                      <strong>Clinical Plan:</strong> Very high risk patients should continue annual IV zoledronic acid for up to 6 years before considering a drug holiday. Monitor renal function (creatinine/eGFR) prior to each infusion.`;
                    } else if (risk === 'high') {
                        alertClass = 'alert-info';
                        resultHtml = `<strong>Drug Holiday Eligible: YES</strong><br>
                                      <em>Current Duration: ${duration} years (Risk Level: High Risk)</em><br><br>
                                      <strong>Holiday Duration:</strong> 2–3 years (expert opinion). Zoledronic acid has strong skeletal retention and continues to inhibit bone resorption after stopping.<br><br>
                                      <strong>Monitoring Plan:</strong> Check DXA in 2 years. Restart if BMD declines significantly, a fracture occurs, or FRAX risk exceeds thresholds.`;
                    } else {
                        alertClass = 'alert-info';
                        resultHtml = `<strong>Drug Holiday Eligible: YES</strong><br>
                                      <em>Current Duration: ${duration} years (Risk Level: Low/Moderate Risk)</em><br><br>
                                      <strong>Holiday Plan:</strong> Discontinue zoledronic acid. Focus on diet and exercise. Re-evaluate DXA in 2 years.`;
                    }
                }
            } else if (agent === 'denosumab') {
                alertClass = 'alert-danger';
                resultHtml = `<strong>Drug Holiday Eligible: ❌ NEVER ELIGIBLE</strong><br><br>
                              <strong>🚨 CRITICAL WARNING:</strong> Denosumab (Prolia) is NOT eligible for a drug holiday. Unlike bisphosphonates, it does not accumulate in bone. Stopping or delaying denosumab by &gt;1 month causes rapid rebound bone resorption, dropping BMD back to baseline and triggering an <strong>8–10% risk of multiple vertebral fractures</strong> within 12 months.<br><br>
                              <strong>Mandatory Transition Plan:</strong> If denosumab must be stopped (e.g. after 5–10 years of use, or due to adverse events), the patient **must** transition directly to a bisphosphonate:<br>
                              1. <em>Preferred:</em> Administer <strong>Zoledronic Acid 5 mg IV</strong> at 6 to 7 months after the final denosumab dose. Check serum CTX at 3-month intervals; a second dose may be required if CTX rebounds.<br>
                              2. <em>Alternative:</em> Start weekly oral <strong>Alendronate 70 mg</strong> starting 6 months after the last dose, though oral therapy may be less reliable at preventing rebound BMD loss.<br>
                              3. <em>Avoid:</em> Do <strong>NOT</strong> switch directly from denosumab to teriparatide or abaloparatide (this causes rapid transient BMD loss).`;
            } else if (agent === 'anabolic') {
                alertClass = 'alert-danger';
                resultHtml = `<strong>Drug Holiday Eligible: N/A (Finite Course Completed)</strong><br><br>
                              <strong>Clinical Plan:</strong> Anabolic agents (Teriparatide, Abaloparatide, Romosozumab) are limited to a finite course (2 years for Teriparatide/Abaloparatide, 12 months for Romosozumab). They are not eligible for a drug holiday.<br><br>
                              <strong>🚨 MANDATORY CONSOLIDATION:</strong> All patients finishing an anabolic agent **must** immediately transition to an antiresorptive (oral/IV bisphosphonate or denosumab) to maintain the BMD gains. Without follow-up antiresorptive therapy, all gained BMD is rapidly lost within 1 year.`;
            } else if (agent === 'other') {
                alertClass = 'alert-warning';
                resultHtml = `<strong>Drug Holiday Eligible: NO (Not Applicable)</strong><br><br>
                              <strong>Clinical Plan:</strong> Raloxifene and calcitonin do not accumulate in bone and are not eligible for drug holidays. Stopping therapy leads to a gradual return of bone resorption to baseline. Re-evaluate treatment necessity periodically based on patient risk profile and breast cancer risk (for raloxifene).`;
            } else if (agent === 'vit-d-calcium') {
                alertClass = 'alert-info';
                resultHtml = `<strong>Drug Holiday Eligible: N/A (Not on Advanced Therapy)</strong><br><br>
                              <strong>Clinical Plan:</strong> Patient is currently managed with Calcium and Vitamin D supplementation only. Ensure daily intakes meet RDA guidelines:<br>
                              - <strong>Elemental Calcium:</strong> 1000–1200 mg/day (preferably via diet; supplement if needed).<br>
                              - <strong>Vitamin D3:</strong> 800–2000 IU/day to maintain serum 25(OH)D levels &gt;30 ng/mL.<br><br>
                              <strong>Re-evaluation Strategy:</strong> Perform annual clinical assessment (loss of height, back pain, or new fractures). Repeat DXA every 2 years. Initiate advanced pharmacotherapy (e.g., bisphosphonates) if:<br>
                              1. T-score falls &le; -2.5 at the femoral neck, total hip, or lumbar spine.<br>
                              2. A fragility fracture occurs (regardless of T-score).<br>
                              3. 10-year FRAX risk reaches thresholds (Major Osteoporotic Fracture &ge;20% or Hip Fracture &ge;3%).`;
            }

            holidayResult.className = `alert ${alertClass}`;
            holidayResult.innerHTML = resultHtml;
            holidayResult.classList.remove('hidden');
            holidayResult.scrollIntoView({ behavior: 'smooth' });
            updateEHRNote();
        });
    }

    function updateEHRNote() {
        const demographic = document.getElementById('patient-demographics').value;
        const tScoreInput = document.getElementById('t-score').value;
        const fracture = document.getElementById('fracture-history').value;
        const fraxMofInput = document.getElementById('frax-mof').value;
        const fraxHipInput = document.getElementById('frax-hip').value;
        const renalClInput = document.getElementById('renal-cl').value;
        const glucocorticoids = document.getElementById('glucocorticoids').value;

        // Check if drug holiday section has values
        const holidayAgent = document.getElementById('holiday-agent') ? document.getElementById('holiday-agent').value : '';
        const holidayRisk = document.getElementById('holiday-risk') ? document.getElementById('holiday-risk').value : '';

        const note = `OSTEOPOROSIS CLINICAL EVALUATION NOTE
--------------------------------------------------
PATIENT CLINICAL PARAMETERS:
- Demographics: ${demographic}
- T-Score: ${tScoreInput || 'Not Entered'}
- Fracture History: ${fracture}
- FRAX Major Osteoporotic Fracture: ${fraxMofInput ? fraxMofInput + '%' : 'Not Entered'}
- FRAX Hip Fracture: ${fraxHipInput ? fraxHipInput + '%' : 'Not Entered'}
- Renal Clearance (eGFR): ${renalClInput ? renalClInput + ' mL/min' : 'Not Entered'}
- Glucocorticoid Use: ${glucocorticoids}
${holidayAgent ? `- Drug Holiday Evaluation: ${holidayAgent.toUpperCase()} (Risk Level: ${holidayRisk.toUpperCase()})` : ''}

CLINICAL RECOMMENDATIONS:
- Screened suitability for bisphosphonates (oral/IV), SERMs, Denosumab, and bone-building anabolic agents.
- Assessed renal impairment cautions (avoid bisphosphonates if CrCl < 30-35).
- Evaluated cardiovascular risks (avoid Romosozumab if MI/stroke in past year).`;

        const noteOutput = document.getElementById('note-output');
        if (noteOutput) {
            noteOutput.textContent = note;
        }
    }

    const btnCopyNote = document.getElementById('btn-copy-note');
    if (btnCopyNote) {
        btnCopyNote.addEventListener('click', () => {
            const noteOutput = document.getElementById('note-output');
            if (noteOutput) {
                navigator.clipboard.writeText(noteOutput.textContent).then(() => {
                    alert('Osteoporosis Clinical Note copied to clipboard!');
                });
            }
        });
    }

    // Initial note generation
    updateEHRNote();
});

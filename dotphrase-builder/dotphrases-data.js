const DOTPHRASES_DATA = {
    "Cardiovascular System": [
        {
            "name": "Chest Pain (Stable Angina / Low Risk)",
            "hx": "Duration, exertional relation, radiation to arm/jaw, relieving factors (rest/NTG).",
            "diff": "Stable Angina > GERD > Musculoskeletal spasm > Anxiety/Panic.",
            "workup": "ECG, CBC, BMP, Troponin (if acute), Lipids, TSH, Cardiac Stress Test.",
            "rx": "Aspirin 81mg QD, Atorvastatin 40mg QD, Metoprolol Succinate 25mg QD. Nitroglycerin 0.4mg SL PRN chest pain.",
            "fu": "F/U in 1-2 weeks or after stress test results.",
            "ed": "Crushing pain, diaphoresis, dyspnea, pain radiating to neck/arm, or unrelieved by 3 NTG doses."
        },
        {
            "name": "Palpitations",
            "hx": "Onset, frequency, triggers (caffeine, stress), associated syncope, lightheadedness.",
            "diff": "Sinus tachycardia / PACs / PVCs > Anxiety > Hyperthyroidism > Arrhythmia (Afib/SVT).",
            "workup": "ECG, CBC, CMP, TSH, Free T4. Holter monitor (24-48h or 14-day patch).",
            "rx": "Avoid triggers (caffeine, nicotine). Metoprolol Succinate 25mg QD if d/t PVCs/symptomatic sinus tachy.",
            "fu": "F/U in 2-4 weeks with Holter results.",
            "ed": "Syncope, near-syncope, chest pain, acute dyspnea, or sustained rapid heart rate."
        },
        {
            "name": "Leg Swelling (Bilateral / Chronic Venous Insufficiency)",
            "hx": "Duration, pitting/non-pitting, worsening at end of day, pain/skin changes.",
            "diff": "Venous Insufficiency > Medication-induced (CCBs) > Heart Failure > Renal/Hepatic failure.",
            "workup": "CMP, Urinalysis, TSH, Echocardiogram (if HF suspected). Venous duplex ultrasound.",
            "rx": "Leg elevation, compression stockings (20-30 mmHg) daily. Discontinue/reduce CCBs if applicable.",
            "fu": "F/U in 4 weeks to review symptoms.",
            "ed": "Sudden worsening, unilateral swelling, chest pain, or acute dyspnea."
        },
        {
            "name": "Leg Swelling (Unilateral / Suspected DVT)",
            "hx": "Onset, calf pain/tenderness, history of immobilization, surgery, travel, or malignancy.",
            "diff": "DVT > Cellulitis > Ruptured Baker's cyst > Muscle strain.",
            "workup": "D-dimer (if low probability), Venous Duplex Ultrasound (gold standard). CBC, CMP, PT/INR.",
            "rx": "If DVT confirmed: Apixaban 10mg BID x7 days, then 5mg BID x3-6 months. Direct to ED if unstable.",
            "fu": "F/U in 1 week to check compliance and bleeding.",
            "ed": "Acute shortness of breath, chest pain, hemoptysis (suspected PE), or severe limb pain."
        },
        {
            "name": "Claudication / Peripheral Artery Disease (PAD)",
            "hx": "Walking distance before pain onset, site of pain (calf/thigh), relief with rest.",
            "diff": "PAD > Lumbar spinal stenosis > Venous claudication > Osteoarthritis.",
            "workup": "Ankle-Brachial Index (ABI) bilateral, fasting lipids, HbA1c, CMP.",
            "rx": "Aspirin 81mg QD, Atorvastatin 80mg QD, Cilostazol 100mg BID (if no HF). Structured walking program.",
            "fu": "F/U in 4-8 weeks to monitor walking capacity.",
            "ed": "Rest pain, cold/pale extremity, paresthesia, or non-healing ulcers (acute limb ischemia)."
        },
        {
            "name": "Hypertension (Essential / Controlled)",
            "hx": "Home BP readings, adherence, diet/exercise, check for secondary causes or drug side effects.",
            "diff": "Essential hypertension > Secondary hypertension (renal artery stenosis, OSA, aldosteronism).",
            "workup": "Basic annual labs: BMP (potassium/creatinine), Lipids, HbA1c, TSH, Urinalysis (microalbumin).",
            "rx": "Continue current regimen (e.g., Lisinopril 10mg QD or Amlodipine 5mg QD). DASH diet, reduce sodium.",
            "fu": "F/U in 3-6 months for BP check and routine labs.",
            "ed": "BP >180/120 with headache, vision changes, chest pain, or shortness of breath."
        },
        {
            "name": "Hypertension (Urgency / Asymptomatic Severe)",
            "hx": "BP >180/120 without symptoms of end-organ damage (chest pain, dyspnea, neuro changes).",
            "diff": "Non-adherence/medication withdrawal > Anxiety/Pain > Chronic uncontrolled HTN.",
            "workup": "ECG, BMP (potassium, creatinine), Urinalysis (hematuria/proteinuria).",
            "rx": "Resume missed meds or increase dose. Amlodipine 5-10mg QD or Clonidine 0.1mg BID (avoid acute drops).",
            "fu": "F/U in 24-48 hours for BP recheck.",
            "ed": "Chest pain, dyspnea, severe headache, vision changes, back pain, or focal neuro deficits."
        },
        {
            "name": "Orthostatic Hypotension",
            "hx": "Dizziness/lightheadedness upon standing, syncopal episodes, review of active medications.",
            "diff": "Volume depletion > Autonomic neuropathy (DM, Parkinson's) > Medication side effect.",
            "workup": "Bilateral orthostatic vitals, CBC, CMP (hydration/electrolytes), TSH, morning cortisol.",
            "rx": "Increase fluid/sodium intake, compression stockings. Midodrine 2.5-5mg TID or Fludrocortisone 0.1mg QD.",
            "fu": "F/U in 2 weeks for orthostatic vitals recheck.",
            "ed": "Recurrent syncope, chest pain, severe dyspnea, or focal neuro signs."
        },
        {
            "name": "Syncope / Near-syncope",
            "hx": "Prodrome (warmth, nausea), posture, duration of LOC, seizure-like activity, postictal state.",
            "diff": "Vasovagal (neurocardiogenic) > Orthostatic > Cardiac (arrhythmia, structural) > Neurological.",
            "workup": "ECG (mandatory), CBC, CMP, TSH, Orthostatic vitals. Echocardiogram if cardiac suspected.",
            "rx": "Discontinue offending antihypertensives. Counter-pressure maneuvers, increased salt/fluids for vasovagal.",
            "fu": "F/U in 1-2 weeks or refer to Cardiology if cardiac etiology suspected.",
            "ed": "Chest pain, exertional syncope, palpitations prior to LOC, abnormal ECG, or focal neuro deficits."
        },
        {
            "name": "Bradycardia (Asymptomatic)",
            "hx": "Heart rate <60 bpm, athletic status, medication review (beta-blockers, CCBs, digoxin).",
            "diff": "Physiological (athletes) > Medication-induced > Sinus node dysfunction > AV block.",
            "workup": "ECG, TSH, Free T4, BMP (electrolytes). Holter monitor if symptoms develop.",
            "rx": "Reduce/stop beta-blockers/non-dihydropyridine CCBs if clinically feasible.",
            "fu": "F/U in 4 weeks or sooner if symptoms (dizziness, fatigue, syncope) occur.",
            "ed": "Syncope, chest pain, acute dyspnea, lightheadedness, or confusion."
        },
        {
            "name": "Tachycardia (Sinus / Inappropriate)",
            "hx": "Heart rate >100 bpm, triggers (fever, pain, anxiety, thyroid symptoms, caffeine/stimulants).",
            "diff": "Reactive (fever, anemia, dehydration) > Hyperthyroidism > POTS > Inappropriate sinus tachy.",
            "workup": "ECG, CBC, CMP, TSH, Free T4, urine drug screen.",
            "rx": "Treat underlying cause (hydration, rest). Metoprolol Succinate 25-50mg QD or Ivabradine 5mg BID PRN.",
            "fu": "F/U in 2 weeks to assess heart rate control.",
            "ed": "Chest pain, syncope, severe dyspnea, or palpitations associated with dizziness."
        },
        {
            "name": "Dyspnea on Exertion (Cardiac)",
            "hx": "Duration, orthopnea, paroxysmal nocturnal dyspnea (PND), pedal edema, weight gain.",
            "diff": "Heart Failure (HFpEF/HFrEF) > Coronary Artery Disease > Valvular disease > Deconditioning.",
            "workup": "ECG, BNP/NT-proBNP, Chest X-ray, CBC, CMP, TSH, Echocardiogram.",
            "rx": "If HF confirmed: Furosemide 20-40mg QD (PRN volume status), Lisinopril 5mg QD, Metoprolol Succinate 25mg QD.",
            "fu": "F/U in 1 week to check weight, BP, and electrolytes.",
            "ed": "Shortness of breath at rest, chest pain, pink frothy sputum, or severe orthopnea."
        }
    ],
    "Respiratory System": [
        {
            "name": "Acute Cough",
            "hx": "Duration (<3 weeks), sputum color, fever, upper respiratory symptoms, contact history.",
            "diff": "Viral URI > Acute Bronchitis > Pneumonia > Asthma/COPD flare.",
            "workup": "None routinely. CXR if fever, tachycardia, tachypnea, hypoxia, or focal lung findings.",
            "rx": "Symptomatic care (honey, benzonatate 100mg TID PRN). If pneumonia suspected: Doxycycline 100mg BID x5-7d.",
            "fu": "F/U in 2 weeks if cough persistent or worsening.",
            "ed": "High fever, dyspnea, hemoptysis, hypoxia (O2 sat <92%), or altered mental status."
        },
        {
            "name": "Chronic Cough",
            "hx": "Duration (>8 weeks), smoking history, ACE-I use, heartburn, post-nasal drip.",
            "diff": "UACS (Post-nasal drip) > Cough-variant asthma > GERD > ACE-I induced cough.",
            "workup": "Stop ACE-I. Chest X-ray (mandatory). Spirometry if asthma suspected.",
            "rx": "Fluticasone nasal spray 2 sprays QD (UACS), Omeprazole 20mg QD (GERD), Albuterol HFA 2 puffs Q4-6h PRN (Asthma).",
            "fu": "F/U in 4 weeks to assess response to empiric therapy.",
            "ed": "Hemoptysis, unexplained weight loss, night sweats, progressive dyspnea, or hoarseness >3 weeks."
        },
        {
            "name": "Dyspnea (Acute)",
            "hx": "Onset, triggers, chest tightness, cough, fever, leg pain, history of asthma/COPD.",
            "diff": "Asthma/COPD exacerbation > Pneumonia > Pulmonary Embolism > Pneumothorax.",
            "workup": "Pulse oximetry, Chest X-ray, ECG. CBC, D-dimer (if PE suspected).",
            "rx": "Albuterol/Ipratropium (Duoneb) inhaler 2 puffs Q4-6h PRN, Prednisone 40mg QD x5 days (asthma/COPD flare).",
            "fu": "F/U in 24-48 hours.",
            "ed": "Oxygen sat <90%, accessory muscle use, stridor, inability to speak in full sentences, or severe pleuritic pain."
        },
        {
            "name": "Wheezing",
            "hx": "Onset, personal/family history of atopy, association with URI, tobacco smoke, occupational exposures.",
            "diff": "Asthma > COPD > Acute Bronchitis > Vocal cord dysfunction.",
            "workup": "Spirometry (pre/post-bronchodilator), Chest X-ray (if first presentation or atypical).",
            "rx": "Albuterol HFA 2 puffs Q4-6h PRN. Fluticasone/Salmeterol (Advair) 100/50 mcg 1 puff BID (if asthma confirmed).",
            "fu": "F/U in 2-4 weeks to assess asthma/COPD control.",
            "ed": "Silent chest (no air movement), severe dyspnea, cyanosis, or accessory muscle use."
        },
        {
            "name": "Sore Throat / Pharyngitis",
            "hx": "Fever, cough, rhinorrhea, hoarseness, dysphagia, exposure history.",
            "diff": "Viral pharyngitis > Group A Strep pharyngitis > Mononucleosis > GERD.",
            "workup": "Centor criteria score. Rapid Strep Test (throat swab), reflex throat culture if negative in children.",
            "rx": "Symptomatic (NSAIDs, lozenges). If Strep positive: Amoxicillin 1000mg QD or Penicillin V 500mg BID x10 days.",
            "fu": "None needed if resolving. F/U in 1 week if symptoms persist.",
            "ed": "Inability to swallow saliva (drooling), muffled voice ('hot potato' voice), trismus, or stridor."
        },
        {
            "name": "Sinus Congestion/Pain",
            "hx": "Duration, facial pain/pressure (worse bending forward), nasal discharge color, double sickening.",
            "diff": "Viral rhinosinusitis > Acute bacterial rhinosinusitis > Allergic rhinitis.",
            "workup": "Clinical diagnosis. Sinus imaging not recommended unless chronic or complications suspected.",
            "rx": "Nasal saline irrigation, Fluticasone nasal spray 2 sprays QD. If bacterial (>10 days): Augmentin 875/125mg BID x5-7d.",
            "fu": "F/U in 10-14 days if no response to antibiotics.",
            "ed": "Periorbital swelling/redness, vision changes (diplopia), severe headache, meningismus, or high fever."
        },
        {
            "name": "Hemoptysis",
            "hx": "Volume of blood, frequency, duration, smoking history, weight loss, anticoagulants.",
            "diff": "Acute bronchitis > Bronchiectasis > Lung Malignancy > Pneumonia > Pulmonary Embolism.",
            "workup": "Chest X-ray (mandatory), CBC, BMP, PT/INR, Urinalysis. Pulmonology Referral.",
            "rx": "Treat underlying infection (antibiotics). Stop anticoagulants/antiplatelets if safe.",
            "fu": "Urgent Pulmonology referral. F/U in PCP in 1 week.",
            "ed": "Massive hemoptysis (>100mL in 24h), dyspnea, hypoxia, or chest pain."
        },
        {
            "name": "Snoring / Suspected Sleep Apnea",
            "hx": "Witnessed apneas, daytime somnolence (Epworth Sleepiness Scale), morning headaches, hypertension.",
            "diff": "OSA > Primary snoring > Upper airway resistance syndrome.",
            "workup": "Home sleep apnea test (HSAT) or Polysomnography (PSG). CBC, TSH.",
            "rx": "CPAP therapy (if OSA confirmed), weight loss, avoid alcohol/sedatives before sleep.",
            "fu": "F/U in 4 weeks after sleep study to discuss results/CPAP adherence.",
            "ed": "Falling asleep while driving, severe arrhythmias, or refractory nocturnal chest pain."
        },
        {
            "name": "Hoarseness",
            "hx": "Duration (cutoff 3 weeks), smoking history, vocal strain, GERD symptoms, dysphagia.",
            "diff": "Acute laryngitis (viral) > Gastroesophageal reflux > Vocal cord nodules/polyps > Laryngeal cancer.",
            "workup": "Laryngoscopy (refer to ENT) mandatory if hoarseness persists >3-4 weeks.",
            "rx": "Voice rest, hydration. Omeprazole 20mg QD if GERD-related. Avoid tobacco/alcohol.",
            "fu": "Refer to ENT if hoarseness lasts >3 weeks.",
            "ed": "Stridor, acute dyspnea, dysphagia/odynophagia, neck mass, or hemoptysis."
        },
        {
            "name": "Pleuritic Chest Pain",
            "hx": "Sharp pain worse with deep breath/cough, onset, associated dyspnea, leg swelling, URI history.",
            "diff": "Pleurisy (viral/bacterial) > Musculoskeletal wall pain > PE > Pericarditis > Pneumothorax.",
            "workup": "ECG, Chest X-ray. CBC, D-dimer (if PE suspected), Troponin.",
            "rx": "Ibuprofen 400-600mg TID x5-7 days (for pleurisy/musculoskeletal pain).",
            "fu": "F/U in 1 week.",
            "ed": "Sudden dyspnea, chest pain radiating to arm/jaw, hypoxia, or syncope."
        },
        {
            "name": "Seasonal Allergies (Allergic Rhinitis)",
            "hx": "Sneezing, rhinorrhea, nasal congestion, itchy/watery eyes, seasonal patterns.",
            "diff": "Allergic Rhinitis > Non-allergic rhinitis > Viral URI > Sinusitis.",
            "workup": "Clinical diagnosis. Allergy testing (skin prick or IgE) if refractory to standard therapy.",
            "rx": "Fluticasone nasal spray 1-2 sprays per nostril QD, Cetirizine 10mg QD, Olopatadine ophthalmic 1 drop BID.",
            "fu": "F/U in 4 weeks if symptoms are uncontrolled.",
            "ed": "Anaphylaxis symptoms (facial swelling, throat tightness, dyspnea, hives)."
        },
        {
            "name": "Asthma Flare (Mild-Moderate)",
            "hx": "Peak flow readings, triggers, frequency of rescue inhaler use, nocturnal awakenings.",
            "diff": "Asthma exacerbation > Viral URI > Bronchitis > Vocal cord dysfunction.",
            "workup": "Pulse oximetry, peak flow measurement. CXR only if pneumonia or pneumothorax suspected.",
            "rx": "Albuterol HFA 2-4 puffs Q4h PRN, Prednisone 40mg QD x5 days. Continue ICS/LABA maintenance.",
            "fu": "F/U in 3-5 days to confirm resolution.",
            "ed": "Peak flow <50% personal best, inability to speak, chest tightness/retractions, or hypoxia."
        }
    ],
    "Gastrointestinal System": [
        {
            "name": "Acute Abdominal Pain (Epigastric)",
            "hx": "Relation to food, radiating to back, nausea/vomiting, NSAID use, alcohol history.",
            "diff": "GERD/Gastritis > Peptic Ulcer Disease (PUD) > Acute Pancreatitis > Biliary colic.",
            "workup": "CBC, CMP, Lipase, H. pylori stool antigen. Abdominal ultrasound if biliary suspected.",
            "rx": "Omeprazole 20mg QD, Famotidine 20mg QHS. Avoid NSAIDs, alcohol, caffeine.",
            "fu": "F/U in 2 weeks or after H. pylori results.",
            "ed": "Severe radiating back pain, hematemesis, melena, peritoneal signs, or high fever."
        },
        {
            "name": "Acute Abdominal Pain (RUQ)",
            "hx": "Colicky pain after fatty meals, duration, radiation to right scapula, fever, jaundice.",
            "diff": "Biliary colic > Acute Cholecystitis > Choledocholithiasis > Hepatitis.",
            "workup": "Abdominal Ultrasound (RUQ). CBC, LFTs, Lipase, Amylase.",
            "rx": "NPO/low-fat diet, Acetaminophen 500-1000mg Q8h PRN. Refer to surgery if cholelithiasis confirmed.",
            "fu": "F/U in 1 week or sooner depending on ultrasound findings.",
            "ed": "Fever, shaking chills, jaundice, vomiting, or severe unremitting pain (Charcot's triad)."
        },
        {
            "name": "Acute Abdominal Pain (RLQ)",
            "hx": "Periumbilical pain migrating to RLQ, anorexia, nausea, fever, duration.",
            "diff": "Acute Appendicitis > Mesenteric adenitis > Cecal diverticulitis > Ovarian cyst rupture/torsion.",
            "workup": "CBC, CMP, Urinalysis, Pregnancy test (mandatory). CT abdomen/pelvis with contrast.",
            "rx": "NPO, direct referral to ED for surgical evaluation. No outpatient antibiotics prior to surgery.",
            "fu": "Post-op F/U in 2 weeks.",
            "ed": "High fever, severe peritoneal pain, repeated vomiting, or syncope (go to ED immediately)."
        },
        {
            "name": "Acute Abdominal Pain (LLQ)",
            "hx": "Fever, constipation/diarrhea, duration, history of diverticulosis.",
            "diff": "Acute Diverticulitis > Irritable Bowel Syndrome > Colitis > Epiploic appendagitis.",
            "workup": "CBC, CMP, Urinalysis. CT abdomen/pelvis with contrast (if first episode or severe).",
            "rx": "Clear liquid diet. Ciprofloxacin 500mg BID + Metronidazole 500mg TID x7-10 days (or Augmentin 875/125mg BID).",
            "fu": "F/U in 2-3 days for clinical re-evaluation.",
            "ed": "Peritoneal signs (rebound/guarding), high fever, inability to tolerate liquids, or rectorrhagia."
        },
        {
            "name": "Chronic Abdominal Pain / IBS",
            "hx": "Duration (>6 months), relation to bowel movements, bloating, alarm symptoms (weight loss, bleeding).",
            "diff": "IBS > Celiac disease > IBD > Chronic mesenteric ischemia.",
            "workup": "CBC, CMP, TSH, Celiac serology (tTG-IgA), fecal calprotectin (r/o IBD).",
            "rx": "High-fiber diet, Low-FODMAP trial. Dicyclomine 10-20mg QID PRN spasms. Polyethylene glycol PRN.",
            "fu": "F/U in 4 weeks to assess dietary/drug response.",
            "ed": "Hematochezia, unexplained weight loss, night sweats, nocturnal diarrhea, or fever."
        },
        {
            "name": "Nausea & Vomiting",
            "hx": "Duration, frequency, relation to food, bowel habits, pregnancy risk, neurologic symptoms.",
            "diff": "Viral gastroenteritis > Medication side effect > Gastroparesis > Bowel obstruction.",
            "workup": "BMP (electrolytes), CBC, Pregnancy test. Abdominal X-ray if obstruction suspected.",
            "rx": "Ondansetron 4-8mg Q8h PRN nausea. Oral rehydration solutions (Gatorade/Pedialyte).",
            "fu": "F/U in 3-5 days if persistent.",
            "ed": "Inability to keep liquids down for 24h, severe abdominal pain, hematemesis, or confusion."
        },
        {
            "name": "Acute Diarrhea (Non-bloody)",
            "hx": "Duration (<14 days), travel, sick contacts, food history, antibiotic use, frequency.",
            "diff": "Viral gastroenteritis > Food poisoning > C. difficile infection > Parasitic diarrhea.",
            "workup": "None routinely. Stool C. diff PCR & GI PCR panel if history of antibiotic use or travel.",
            "rx": "Loperamide 2mg after each loose stool (max 8mg/day, avoid if bacterial suspected), oral hydration.",
            "fu": "F/U in 1 week if unresolved.",
            "ed": "Severe dehydration, high fever, severe abdominal pain, or inability to tolerate oral fluids."
        },
        {
            "name": "Acute Diarrhea (Bloody)",
            "hx": "Duration, severity, fever, travel history, recent raw food ingestion, contact history.",
            "diff": "Infectious Colitis (EHEC, Salmonella, Shigella, Campylobacter) > IBD flare > Ischemic colitis.",
            "workup": "Stool culture, Shiga toxin assay, C. diff PCR, CBC, BMP. Avoid empiric antimotility agents.",
            "rx": "Hydration. Empiric Azithromycin 500mg QD x3 days if febrile/severe travel diarrhea. Avoid Loperamide.",
            "fu": "F/U in 2-3 days with lab results.",
            "ed": "High fever, signs of hemolytic uremic syndrome (oliguria, bruising), severe abdominal pain."
        },
        {
            "name": "Chronic Diarrhea",
            "hx": "Duration (>4 weeks), nocturnal stools, stool character (fatty, watery), weight loss.",
            "diff": "IBS-D > Celiac disease > IBD > Lactose intolerance > Microscopic colitis.",
            "workup": "CBC, CMP, TSH, Celiac screen, stool culture, fecal calprotectin, stool ova & parasites.",
            "rx": "Avoid triggers (dairy, gluten). Loperamide 2-4mg PRN. Refer to GI for colonoscopy if workup negative.",
            "fu": "F/U in 2-4 weeks with lab results.",
            "ed": "Unintentional weight loss, nocturnal diarrhea, blood in stool, or high fever."
        },
        {
            "name": "Constipation (Acute)",
            "hx": "Duration, bowel frequency, stool consistency, dietary fiber, fluid intake, medication review.",
            "diff": "Functional constipation > Medication-induced > Bowel obstruction > Hypothyroidism.",
            "workup": "None routinely. Thyroid panel (TSH) and BMP if metabolic cause suspected.",
            "rx": "Increase dietary fiber and fluids. Senna 8.6mg 1-2 tabs QHS or Polyethylene glycol 17g daily.",
            "fu": "F/U in 2 weeks.",
            "ed": "Severe abdominal pain, vomiting, inability to pass flatus, obstipation, or weight loss."
        },
        {
            "name": "Constipation (Chronic)",
            "hx": "Duration (>3 months), laxative dependency, digital evacuation history, alarm symptoms.",
            "diff": "Chronic idiopathic constipation > IBS-C > Pelvic floor dyssynergia > Colon cancer.",
            "workup": "CBC, TSH, CMP, colonoscopy screening (if age >45 or alarm symptoms present).",
            "rx": "Polyethylene glycol 17g daily. Lubiprostone 24mcg BID or Linaclotide 145mcg QD if refractory.",
            "fu": "F/U in 4 weeks.",
            "ed": "Melena, hematochezia, unexplained weight loss, or sudden change in stool caliber."
        },
        {
            "name": "Heartburn / GERD",
            "hx": "Postprandial regurgitation, relation to position/meals, dysphagia, duration, chest pain correlation.",
            "diff": "GERD > Gastritis/Esophagitis > Coronary Artery Disease > Esophageal spasm.",
            "workup": "Clinical diagnosis. Refer to GI for EGD if dysphagia, weight loss, or age >60 with chronic symptoms.",
            "rx": "Omeprazole 20mg QD x8 weeks (take 30 min before breakfast). Elevate head of bed, avoid late meals.",
            "fu": "F/U in 4-8 weeks to assess resolution.",
            "ed": "Dysphagia, odynophagia, weight loss, hematemesis, or chest pain radiating to arm/jaw."
        },
        {
            "name": "Dyspepsia",
            "hx": "Early satiety, postprandial fullness, epigastric pain/burning, duration, NSAID use.",
            "diff": "Functional dyspepsia > Gastritis > PUD > Gastric malignancy.",
            "workup": "H. pylori stool antigen or urea breath test. EGD if age >60 or alarm features present.",
            "rx": "H. pylori eradication (if positive). Otherwise, Omeprazole 20mg QD x4 weeks.",
            "fu": "F/U in 4 weeks.",
            "ed": "Persistent vomiting, progressive dysphagia, unexplained weight loss, or melena."
        },
        {
            "name": "Dysphagia",
            "hx": "Difficulty with solids vs. liquids, localization, onset, progressive vs. intermittent, pain.",
            "diff": "Esophageal stricture > Esophageal motility disorder > Eosinophilic esophagitis > Esophageal cancer.",
            "workup": "EGD (mandatory to r/o mass), Barium swallow (if motility suspected). CBC, CMP.",
            "rx": "Omeprazole 40mg QD (empiric). Referral to Gastroenterology for endoscopy.",
            "fu": "GI referral completed. F/U in PCP in 2 weeks.",
            "ed": "Complete esophageal obstruction (inability to swallow liquids or saliva), choking, or aspiration."
        },
        {
            "name": "Rectal Bleeding (Bright Red)",
            "hx": "Blood mixed with stool vs. on toilet paper, pain with defecation, constipation history.",
            "diff": "Hemorrhoids > Anal fissures > Diverticulosis > Colon cancer / polyps > IBD.",
            "workup": "Digital rectal exam, CBC (check for anemia), Anoscopy. Colonoscopy if age >45 or family history.",
            "rx": "High-fiber diet, stool softeners (Docusate 100mg BID), Hydrocortisone 1% cream or suppositories BID.",
            "fu": "F/U in 2-4 weeks or refer to GI/General Surgery.",
            "ed": "Large volume bleeding, hemodynamic instability (syncope, orthostatic dizziness), or severe pain."
        },
        {
            "name": "Jaundice (Mild/Incidental)",
            "hx": "Onset, history of gallstones, alcohol use, drug exposures, pruritus, abdominal pain.",
            "diff": "Gilbert's syndrome > Choledocholithiasis > Viral/Drug-induced Hepatitis > Cirrhosis.",
            "workup": "Comprehensive metabolic panel, CBC, fractionated bilirubin, viral hepatitis panel, abdominal ultrasound.",
            "rx": "Avoid hepatotoxic agents (acetaminophen, alcohol). Refer to Hepatology if LFTs persistently abnormal.",
            "fu": "F/U in 1-2 weeks with lab/ultrasound results.",
            "ed": "Altered mental status, severe RUQ pain, vomiting, or fever with jaundice."
        }
    ],
    "Neurological System": [
        {
            "name": "Tension Headache",
            "hx": "Dull ache, band-like distribution, bilateral, lack of nausea/vomiting or photophobia.",
            "diff": "Tension Headache > Migraine > Medication overuse headache > Cervicogenic headache.",
            "workup": "Clinical diagnosis. Neuroimaging not indicated unless atypical features or abnormal exam.",
            "rx": "Acetaminophen 500-1000mg PRN, Ibuprofen 400mg PRN (limit to <15 days/month). Amitriptyline 10mg QHS for prevention.",
            "fu": "F/U in 4 weeks to evaluate headache log.",
            "ed": "Sudden onset 'thunderclap' headache, fever, neck stiffness, confusion, or focal neuro deficits."
        },
        {
            "name": "Migraine Headache",
            "hx": "Unilateral, throbbing, nausea/vomiting, photophobia/phonophobia, presence of aura.",
            "diff": "Migraine > Tension headache > Cluster headache > Sinus headache.",
            "workup": "Clinical diagnosis. Brain MRI if atypical, progressive, or new onset after age 50.",
            "rx": "Sumatriptan 50-100mg at onset (max 200mg/day). Propranolol 40mg BID or Topiramate 25-50mg BID for prevention.",
            "fu": "F/U in 4 weeks to assess response and abortive frequency.",
            "ed": "First/worst headache, fever, meningismus, papilledema, or focal neurological deficits."
        },
        {
            "name": "Cluster Headache",
            "hx": "Severe unilateral orbital/temporal pain, autonomic symptoms (lacrimation, rhinorrhea, miosis).",
            "diff": "Cluster Headache > Migraine > Trigeminal neuralgia > Acute angle-closure glaucoma.",
            "workup": "Brain MRI with/without contrast (mandatory for first presentation to r/o secondary causes).",
            "rx": "Sumatriptan 6mg SC at onset, 100% Oxygen 12 L/min via non-rebreather mask x15m. Verapamil 80mg TID for prevention.",
            "fu": "F/U in 2 weeks or refer to Neurology.",
            "ed": "Sudden change in headache character, fever, confusion, neck stiffness, or vision loss."
        },
        {
            "name": "Dizziness (Lightheadedness)",
            "hx": "Sensation of fainting vs. spinning, relation to standing up, hydration status, medication review.",
            "diff": "Orthostatic hypotension > Dehydration > Medication side effect > Vasovagal.",
            "workup": "Bilateral orthostatic vitals, CBC, CMP, ECG.",
            "rx": "Increase fluid intake (2-3L/day). Adjust or taper offending antihypertensives.",
            "fu": "F/U in 2 weeks.",
            "ed": "Syncope, chest pain, dyspnea, focal neurological deficits, or severe occipital headache."
        },
        {
            "name": "Vertigo (BPPV)",
            "hx": "Sensation of spinning, duration (seconds vs. hours), triggers (head turning), hearing loss, tinnitus.",
            "diff": "BPPV > Vestibular Neuritis > Meniere's Disease > Cerebellar stroke.",
            "workup": "Dix-Hallpike maneuver. Brain MRI only if central signs (nystagmus that doesn't exhaust).",
            "rx": "Epley maneuver (for BPPV). Meclizine 12.5-25mg Q6-8h PRN (use short-term only, max 3 days).",
            "fu": "F/U in 2 weeks if symptoms do not resolve with physical therapy.",
            "ed": "Sudden onset with ataxia, dysarthria, diplopia, dysphagia, or focal neuro deficits (r/o stroke)."
        },
        {
            "name": "Numbness/Tingling (Bilateral Feet)",
            "hx": "Stocking-glove distribution, pain character (burning/shooting), balance issues, history of DM.",
            "diff": "Diabetic Neuropathy > Vitamin B12 deficiency > Idiopathic neuropathy > Alcohol-induced.",
            "workup": "Fasting blood glucose/HbA1c, Vitamin B12, TSH, CMP, CBC.",
            "rx": "Gabapentin 300mg QHS (titrate to TID as needed) or Amitriptyline 10-25mg QHS. Tight glycemic control.",
            "fu": "F/U in 4 weeks to evaluate neuropathic pain control.",
            "ed": "Rapidly ascending numbness, acute lower extremity weakness, or bowel/bladder incontinence."
        },
        {
            "name": "Numbness/Tingling (Unilateral Arm)",
            "hx": "Specific fingers affected, pain worse at night vs. neck movements, history of repetitive work.",
            "diff": "Carpal Tunnel Syndrome > Cervical Radiculopathy > Thoracic outlet syndrome.",
            "workup": "Phalen's and Tinel's tests. EMG/NCS (Electromyography/Nerve Conduction Study).",
            "rx": "Wrist splint at night. Naproxen 500mg BID PRN. Refer to Orthopedics/Neurology if refractory.",
            "fu": "F/U in 4 weeks.",
            "ed": "Acute progressive hand weakness (clumsiness, dropping objects) or neck pain with bowel/bladder changes."
        },
        {
            "name": "Tremor (Essential vs. Parkinsonian)",
            "hx": "Tremor at rest vs. action, asymmetry, family history, improvement with alcohol.",
            "diff": "Essential Tremor > Parkinson's Disease > Physiological tremor > Drug-induced.",
            "workup": "TSH, Free T4, CMP. Clinical neuro examination (gait, rigidity, bradykinesia).",
            "rx": "Propranolol 40mg BID or Primidone 25-50mg QHS for ET. Refer to Neurology for Parkinson's.",
            "fu": "F/U in 4 weeks to monitor treatment efficacy.",
            "ed": "Rapidly progressive gait instability, frequent falls, or severe cognitive decline."
        },
        {
            "name": "Transient Ischemic Attack (Suspected/Follow-up)",
            "hx": "Duration of neuro deficits (<24h), facial droop, arm weakness, speech difficulty, vision loss.",
            "diff": "TIA > Migraine aura > Focal seizure > Hypoglycemia.",
            "workup": "Brain MRI/CT, Carotid Duplex Ultrasound, Echocardiogram, Holter monitor, Lipids, HbA1c, PT/INR.",
            "rx": "Aspirin 81-325mg QD + Clopidogrel 75mg QD (dual antiplatelet for 21-90 days), Atorvastatin 80mg QD.",
            "fu": "Urgent Neurology referral. F/U in PCP in 1 week.",
            "ed": "Recurrent stroke symptoms (FAST: Face droop, Arm weakness, Speech difficulty - call 911)."
        },
        {
            "name": "Memory Loss / Dementia Workup",
            "hx": "Onset, progression, functional impairment (ADLs/IADLs), psychiatric symptoms, history of strokes.",
            "diff": "Alzheimer's Dementia > Vascular Dementia > Lewy Body Dementia > Pseudodementia (Depression).",
            "workup": "Mini-Mental State Exam (MMSE) or MoCA. TSH, Vitamin B12, CBC, CMP, Brain MRI (without contrast).",
            "rx": "Donepezil 5mg QD (if Alzheimer's confirmed). Support family, refer to social work.",
            "fu": "F/U in 4 weeks with lab and MRI results.",
            "ed": "Sudden behavioral changes, severe confusion/delirium, or acute focal weakness."
        },
        {
            "name": "Sciatica / Radiculopathy",
            "hx": "Sharp radiating pain down leg (past knee), numbness, weakness, history of heavy lifting.",
            "diff": "Herniated disc with radiculopathy > Spinal stenosis > Piriformis syndrome > Sacroiliitis.",
            "workup": "Straight leg raise test. Lumbar spine MRI (only if symptoms fail to improve in 6 weeks or red flags).",
            "rx": "Naproxen 500mg BID, Gabapentin 300mg QHS (titrate BID/TID). Physical therapy referral.",
            "fu": "F/U in 2-4 weeks.",
            "ed": "Bowel/bladder dysfunction (urinary retention), saddle anesthesia, or bilateral progressive motor weakness."
        },
        {
            "name": "Facial Numbness/Droop (Bell's Palsy)",
            "hx": "Onset, involvement of forehead (cannot wrinkle forehead), taste changes, ear pain.",
            "diff": "Bell's Palsy (CN VII neuropathy) > Acute Ischemic Stroke (spares forehead) > Lyme disease.",
            "workup": "Clinical exam. Lyme serology (if endemic area).",
            "rx": "Prednisone 60mg QD x7 days, Valacyclovir 1000mg TID x7 days. Artificial tears & eye patch at night.",
            "fu": "F/U in 1 week.",
            "ed": "Forehead sparing (suspect stroke), double vision, difficulty swallowing, or limb weakness."
        },
        {
            "name": "Restless Legs Syndrome",
            "hx": "Urge to move legs, worse at rest/night, relieved by movement, sleep quality.",
            "diff": "Primary RLS > Iron deficiency anemia > Peripheral neuropathy > Medication-induced (antihistamines).",
            "workup": "Serum Ferritin (goal >75 mcg/L), Iron panel, BMP (kidney function).",
            "rx": "Iron supplementation (Ferrous Sulfate 325mg daily with Vit C if ferritin <75). Pramipexole 0.125mg QHS or Gabapentin 300mg QHS.",
            "fu": "F/U in 4 weeks.",
            "ed": "Severe, sudden-onset motor weakness or intractable leg pain."
        },
        {
            "name": "Insomnia",
            "hx": "Sleep onset vs. maintenance, duration, caffeine/alcohol use, sleep hygiene, snoring.",
            "diff": "Primary Insomnia > Anxiety/Depression > Sleep apnea > Restless legs syndrome.",
            "workup": "Epworth Sleepiness Scale, TSH, iron panel (if restless legs suspected).",
            "rx": "Cognitive Behavioral Therapy for Insomnia (CBT-I) first line. Trazodone 25-50mg QHS or Melatonin 3mg QHS.",
            "fu": "F/U in 4 weeks.",
            "ed": "Severe daytime sleepiness leading to accidents, or suicidal ideation d/t sleep deprivation."
        }
    ],
    "Musculoskeletal System": [
        {
            "name": "Acute Low Back Pain",
            "hx": "Onset, triggers (lifting), radiation, numbness/weakness, bowel/bladder symptoms.",
            "diff": "Musculoskeletal strain > Disc herniation > Spondylolisthesis > Spinal stenosis.",
            "workup": "None routinely. Lumbar X-ray/MRI not indicated in first 6 weeks unless red flags present.",
            "rx": "Ibuprofen 400-600mg TID PRN, Cyclobenzaprine 5-10mg TID PRN (max 5 days). Stay active.",
            "fu": "F/U in 2 weeks if pain is not improving.",
            "ed": "Fever, saddle anesthesia, urinary retention, bowel incontinence, or progressive leg weakness."
        },
        {
            "name": "Chronic Low Back Pain",
            "hx": "Duration (>12 weeks), impact on function, prior treatments, occupational stressors.",
            "diff": "Lumbar spondylosis > Spinal stenosis > Degenerative disc disease > Ankylosing spondylitis.",
            "workup": "Lumbar spine X-ray. Lumbar MRI if considering intervention or focal neuro deficit.",
            "rx": "Naproxen 500mg BID. Duloxetine 30-60mg QD. Referral to Physical Therapy and pain management.",
            "fu": "F/U in 4-6 weeks.",
            "ed": "New onset bowel/bladder dysfunction, saddle anesthesia, or sudden foot drop."
        },
        {
            "name": "Neck Pain",
            "hx": "Onset, association with trauma (whiplash), radiation to arms, numbness/weakness.",
            "diff": "Cervical strain > Cervical spondylosis > Cervical radiculopathy > Myofascial pain.",
            "workup": "Cervical Spine X-ray (if trauma, follow Canadian C-spine rules). MRI if radiculopathy.",
            "rx": "Ibuprofen 400mg TID, Cyclobenzaprine 5mg TID PRN. Heat/ice, physical therapy.",
            "fu": "F/U in 2-4 weeks.",
            "ed": "Radicular pain with progressive arm weakness, clumsiness of hands, or gait instability."
        },
        {
            "name": "Shoulder Pain (Rotator Cuff)",
            "hx": "Pain with overhead activity, sleeping on shoulder, onset, trauma.",
            "diff": "Rotator Cuff Tendinopathy/Tear > Adhesive Capsulitis > Acromioclavicular arthritis > Referred neck pain.",
            "workup": "Shoulder X-ray (r/o bone pathology). Shoulder Ultrasound or MRI if tear suspected.",
            "rx": "Naproxen 500mg BID, Physical Therapy. Subacromial corticosteroid injection if refractory.",
            "fu": "F/U in 4 weeks.",
            "ed": "Inability to actively abduct arm (suspect large acute tear), or sudden swelling and erythema."
        },
        {
            "name": "Elbow Pain (Epicondylitis)",
            "hx": "Repetitive hand/wrist movements, site of tenderness (lateral = tennis, medial = golfer's).",
            "diff": "Lateral Epicondylitis > Medial Epicondylitis > Olecranon bursitis > Radial tunnel syndrome.",
            "workup": "Clinical diagnosis. X-ray only if trauma or chronic refractory.",
            "rx": "Counterforce brace, topical Diclofenac 1% gel QID. Ibuprofen 400mg TID PRN. Activity modification.",
            "fu": "F/U in 4 weeks.",
            "ed": "Severe swelling, redness, joint locking, or inability to extend elbow."
        },
        {
            "name": "Wrist Pain (Carpal Tunnel)",
            "hx": "Numbness/tingling in thumb/index/middle fingers, worse at night, dropping objects.",
            "diff": "Carpal Tunnel Syndrome > De Quervain's tenosynovitis > Cervical radiculopathy (C6).",
            "workup": "Positive Phalen's/Tinel's. EMG/NCS if considering surgery or weakness present.",
            "rx": "Wrist splint in neutral position at night, Naproxen 500mg BID. Local steroid injection.",
            "fu": "F/U in 4-6 weeks.",
            "ed": "Thenar muscle wasting, or rapid progression of hand weakness/numbness."
        },
        {
            "name": "Hip Pain (Trochanteric Bursitis)",
            "hx": "Lateral hip pain, tender to palpation over greater trochanter, pain sleeping on affected side.",
            "diff": "Trochanteric Bursitis > Hip Osteoarthritis > Referred lumbar pain > Avascular necrosis.",
            "workup": "Hip X-ray (AP/Lateral) to check for osteoarthritis.",
            "rx": "Ibuprofen 600mg TID, Physical Therapy (IT band stretching). Lateral trochanteric steroid injection.",
            "fu": "F/U in 4 weeks.",
            "ed": "Inability to bear weight, fever with joint pain, or shortened/externally rotated leg (fracture)."
        },
        {
            "name": "Knee Pain (Osteoarthritis)",
            "hx": "Age, mechanical pain (worse with use, better with menses/rest), morning stiffness <30 mins, crepitus.",
            "diff": "Knee Osteoarthritis > Meniscal tear > Anserine bursitis > Patellofemoral syndrome.",
            "workup": "Bilateral weight-bearing knee X-rays (AP, Lateral, Sunrise).",
            "rx": "Acetaminophen 650mg TID, Topical Diclofenac 1% gel QID, weight loss, Physical Therapy. Intra-articular steroid injection.",
            "fu": "F/U in 4-8 weeks to review function.",
            "ed": "Inability to bear weight, lock of joint, sudden severe swelling with redness and fever."
        },
        {
            "name": "Knee Pain (Acute Trauma)",
            "hx": "Mechanism of injury (twisting, pivoting, direct blow), hearing a 'pop', immediate swelling.",
            "diff": "ACL tear > Meniscal tear > MCL/LCL sprain > Patellar subluxation.",
            "workup": "Lachman's, McMurray's tests. Knee X-ray (Ottawa knee rules). Knee MRI if ligament tear suspected.",
            "rx": "RICE (Rest, Ice, Compression, Elevation), knee immobilizer, crutches. Referral to Orthopedics.",
            "fu": "F/U in 1 week or with Ortho.",
            "ed": "Cold/pale foot, loss of distal pulses (suspect popliteal artery injury), or inability to actively extend knee."
        },
        {
            "name": "Ankle Sprain",
            "hx": "Inversion injury, immediate swelling, weight-bearing ability at time of injury.",
            "diff": "Lateral ankle ligament sprain (ATFL) > Syndesmotic (high) sprain > Ankle fracture.",
            "workup": "Ottawa Ankle Rules to determine need for ankle/foot X-rays.",
            "rx": "RICE protocol. Ibuprofen 400mg TID PRN. Ankle brace support, early progressive weight-bearing.",
            "fu": "F/U in 2 weeks if unable to bear weight.",
            "ed": "Deformity, skin tenting, cold/pale foot, or loss of sensation in foot."
        },
        {
            "name": "Plantar Fasciitis",
            "hx": "Sharp heel pain, worse with first steps in morning, pain improves with walking then worsens later.",
            "diff": "Plantar Fasciitis > Calcaneal stress fracture > Achilles tendinopathy > Tarsal tunnel syndrome.",
            "workup": "Clinical diagnosis. Foot X-ray only if recalcitrant (r/o bone spur/fracture).",
            "rx": "Stretching exercises (calf/fascia), supportive footwear, night splint, Ibuprofen 400mg TID PRN.",
            "fu": "F/U in 6-8 weeks if no improvement.",
            "ed": "Inability to bear weight, sudden severe calf/heel pain with felt 'pop' (Achilles tendon rupture)."
        },
        {
            "name": "Gout Flare (Acute)",
            "hx": "Sudden onset of severe joint pain, swelling, erythema (first MTP joint common), diet/alcohol.",
            "diff": "Acute Gouty Arthritis > Pseudogout > Septic arthritis > Cellulitis.",
            "workup": "Serum uric acid (may be normal in acute flare), BMP, CBC. Joint aspiration (gold standard) if joint accessible.",
            "rx": "Indomethacin 50mg TID x3-5 days or Colchicine 1.2mg load, then 0.6mg 1h later, then 0.6mg daily/BID.",
            "fu": "F/U in 2 weeks to discuss uric acid lowering therapy (Allopurinol).",
            "ed": "Fever, chills, severe systemic symptoms, or joint swelling in multiple large joints."
        },
        {
            "name": "Generalized Joint Pain / Myalgia",
            "hx": "Duration, symmetric vs. asymmetric, fever, morning stiffness duration, rash, tick bite history.",
            "diff": "Viral polyarthritis > Rheumatoid Arthritis > SLE > Fibromyalgia > Lyme disease.",
            "workup": "CBC, CMP, TSH, CRP, ESR, ANA, RF, Anti-CCP, Lyme serology.",
            "rx": "Naproxen 500mg BID PRN. Gentle exercise, warm baths.",
            "fu": "F/U in 2 weeks with lab results. Refer to Rheumatology if autoimmune markers positive.",
            "ed": "High fever, severe joint swelling/erythema, difficulty breathing, or new-onset profound weakness."
        },
        {
            "name": "Fibromyalgia Joint/Muscle Pain",
            "hx": "Chronic widespread pain (>3 months), fatigue, unrefreshing sleep, cognitive difficulties.",
            "diff": "Fibromyalgia > Hypothyroidism > Polymyalgia Rheumatica > Sleep apnea.",
            "workup": "TSH, CBC, CMP, ESR, CRP, Vitamin D. Diagnostic exclusion of autoimmune diseases.",
            "rx": "Amitriptyline 10-25mg QHS or Duloxetine 30-60mg QD or Pregabalin 75mg BID. Low-impact aerobic exercise.",
            "fu": "F/U in 4 weeks to assess medication tolerance.",
            "ed": "Severe suicidal ideation, or development of focal neurological signs."
        },
        {
            "name": "Osteoporosis / Osteopenia",
            "hx": "Postmenopausal status, fracture history, steroid use, calcium/vitamin D intake, family history.",
            "diff": "Primary osteoporosis > Secondary osteoporosis (hyperthyroidism, hyperparathyroidism, vitamin D deficiency).",
            "workup": "DEXA Scan (T-score <-2.5 = Osteoporosis, -1.0 to -2.5 = Osteopenia). TSH, Calcium, Vitamin D, PTH.",
            "rx": "Alendronate 70mg PO weekly (take with full glass of water, stand upright for 30m). Calcium 1200mg + Vit D3 1000 IU daily.",
            "fu": "Repeat DEXA scan in 2 years. F/U in clinic in 6 months to check compliance.",
            "ed": "Sudden onset of severe back pain (suspect vertebral compression fracture) or hip pain after minor fall."
        },
        {
            "name": "Trigger Finger",
            "hx": "Finger catching/locking in flexed position, pain over A1 pulley, morning stiffness.",
            "diff": "Trigger Finger > Dupuytren's contracture > MCP joint arthritis > Flexor tendon rupture.",
            "workup": "Clinical diagnosis.",
            "rx": "Finger splinting, Topical Diclofenac 1% gel QID. Referral for corticosteroid injection if refractory.",
            "fu": "F/U in 4 weeks.",
            "ed": "Finger becomes hot, red, swollen, or unable to be extended passively (infection risk)."
        }
    ],
    "Endocrine & Metabolic": [
        {
            "name": "Fatigue / Chronic Fatigue",
            "hx": "Duration, sleep quality, snoring, mood symptoms, weight changes, cold/heat intolerance.",
            "diff": "Anemia/Thyroid dysfunction > Sleep apnea > Depression > Chronic Fatigue Syndrome.",
            "workup": "CBC, CMP, TSH, Free T4, Ferritin, Vitamin D, B12, HbA1c.",
            "rx": "Improve sleep hygiene, structured exercise. Treat identified deficiency (e.g., Levothyroxine for hypothyroidism).",
            "fu": "F/U in 4 weeks with lab results.",
            "ed": "Unexplained weight loss, night sweats, lymphadenopathy, or suicidal ideation."
        },
        {
            "name": "Weight Loss (Unintentional)",
            "hx": "Pounds lost, duration, appetite change, fever, night sweats, bowel habit changes, smoking.",
            "diff": "Malignancy > Hyperthyroidism > Malabsorption/Celiac > Depression.",
            "workup": "CBC, CMP, TSH, LDH, HbA1c, ESR, CRP, Urinalysis, Chest X-ray. Age-appropriate cancer screenings.",
            "rx": "High-calorie dietary supplements. Refer to Gastroenterology/Oncology based on workup.",
            "fu": "F/U in 2-4 weeks with initial labs.",
            "ed": "Severe anemia, dysphagia, persistent vomiting, melena, or palpable abdominal mass."
        },
        {
            "name": "Weight Gain / Obesity",
            "hx": "Onset, dietary patterns, physical activity, snoring, medication review (steroids, atypicals).",
            "diff": "Primary obesity > Hypothyroidism > Cushing's syndrome > Fluid overload (HF/Renal).",
            "workup": "TSH, HbA1c, Lipids, CMP.",
            "rx": "Caloric restriction (500 kcal deficit), 150m exercise/week. Semaglutide 0.25mg subq weekly (titrate) if eligible.",
            "fu": "F/U in 4 weeks.",
            "ed": "Rapid weight gain with dyspnea, orthopnea, and bilateral lower extremity edema (fluid overload)."
        },
        {
            "name": "Polyuria / Polydipsia (New DM)",
            "hx": "Duration, nocturia, blurry vision, weight loss, family history of diabetes.",
            "diff": "Type 2 Diabetes Mellitus > Type 1 Diabetes Mellitus > Diabetes Insipidus > Psychogenic polydipsia.",
            "workup": "Fasting Plasma Glucose, HbA1c, BMP (basic metabolic panel), Urinalysis (glucose/ketones).",
            "rx": "If type 2 confirmed: Metformin 500mg BID (titrate). Low carbohydrate diet, exercise. Refer to ED if ketones positive.",
            "fu": "F/U in 1-2 weeks with lab results.",
            "ed": "Vomiting, tachypnea (Kussmaul breathing), abdominal pain, confusion, or glucose >250 with ketones (DKA)."
        },
        {
            "name": "Diabetes Mellitus (Controlled)",
            "hx": "Home glucose log, medication adherence, hypoglycemic episodes, foot care.",
            "diff": "Controlled Type 2 Diabetes Mellitus.",
            "workup": "Every 3-6 months: HbA1c. Annual: BMP, urine microalbumin/creatinine ratio, lipid panel, diabetic foot exam.",
            "rx": "Continue current regimen (e.g., Metformin 1000mg BID). Annual eye exam (ophthalmology), annual podiatry.",
            "fu": "F/U in 3-6 months.",
            "ed": "Severe hypoglycemia (unresponsive, seizure - use glucagon) or severe hyperglycemia with confusion."
        },
        {
            "name": "Diabetes Mellitus (Uncontrolled / Referral)",
            "hx": "HbA1c persistently >9% despite dual oral therapy, compliance, symptoms of hyperglycemia.",
            "diff": "Refractory Type 2 DM > LADA / Type 1 DM > Medication non-adherence.",
            "workup": "HbA1c, CMP, urine microalbumin, C-peptide (if suspecting insulin deficiency).",
            "rx": "Initiate Basal Insulin (e.g., Glargine 10 units QHS, titrate). Refer to Endocrinology for refractory management.",
            "fu": "Refer to Endocrinology. F/U in PCP in 2 weeks for insulin titration check.",
            "ed": "Ketones in urine, altered mental status, vomiting, deep rapid breathing, or dehydration."
        },
        {
            "name": "Hypothyroidism (New/Follow-up)",
            "hx": "Fatigue, weight gain, constipation, dry skin, cold intolerance, hair loss.",
            "diff": "Hashimoto's Thyroiditis > Post-ablative/surgical > Central hypothyroidism.",
            "workup": "TSH, Free T4. (Anti-TPO antibodies optional).",
            "rx": "Levothyroxine 1.6 mcg/kg/day (take on empty stomach 1h before breakfast). Lower starting dose (25-50mcg) in elderly.",
            "fu": "Recheck TSH in 6-8 weeks to adjust dose.",
            "ed": "Hypothermia, bradycardia, severe lethargy, or facial edema (myxedema coma)."
        },
        {
            "name": "Hyperthyroidism (Suspected)",
            "hx": "Weight loss, palpitations, heat intolerance, tremors, anxiety, diarrhea, neck swelling.",
            "diff": "Graves' Disease > Toxic Multinodular Goiter > Thyroiditis.",
            "workup": "TSH (suppressed), Free T4, Free T3. Thyroid ultrasound and Radioactive Iodine Uptake scan.",
            "rx": "Methimazole 10-20mg QD. Propranolol 40mg BID-TID for symptom/tachycardia control. Refer to Endocrinology.",
            "fu": "F/U in 2 weeks or refer to Endocrinology.",
            "ed": "High fever, tachycardia, delirium, vomiting (thyroid storm - go to ED)."
        },
        {
            "name": "Hyperlipidemia",
            "hx": "Diet, cardiovascular family history, smoking, diabetes, prior muscle aches with statins.",
            "diff": "Primary hypercholesterolemia > Familial hypercholesterolemia > Secondary d/t hypothyroidism/diet.",
            "workup": "Fasting Lipid Panel, TSH (r/o hypothyroidism), ALT/AST (baseline). Calculate PREVENT 10-year risk.",
            "rx": "Atorvastatin 20mg QD (moderate intensity) or 40-80mg QD (high intensity if PREVENT >7.5% or DM). DASH diet.",
            "fu": "Recheck lipid panel in 8-12 weeks to assess efficacy/adherence.",
            "ed": "Acute severe muscle pain/dark urine (rhabdomyolysis - stop statin immediately and go to ED)."
        },
        {
            "name": "Hot Flashes / Menopause",
            "hx": "Age, duration, frequency, sleep disruption, mood changes, contraindications to estrogen (breast cancer, DVT).",
            "diff": "Menopause > Hyperthyroidism > Medication side effect.",
            "workup": "TSH (to r/o hyperthyroidism). FSH/LH not routinely indicated if age >45.",
            "rx": "Estradiol 0.5mg QD + Progesterone 100mg QHS (if uterus intact). Venlafaxine 37.5mg QD if HRT contraindicated.",
            "fu": "F/U in 4-6 weeks to assess relief.",
            "ed": "New calf swelling/pain, sudden shortness of breath, chest pain, or focal neuro deficits (HRT risks)."
        }
    ],
    "Genitourinary & Renal": [
        {
            "name": "Dysuria / Acute UTI (Female)",
            "hx": "Frequency, urgency, hematuria, back pain, vaginal discharge, pregnancy risk.",
            "diff": "Acute Cystitis > Vaginitis/Candidiasis > Urethritis (Chlamydia/Gonorrhea) > Pyelonephritis.",
            "workup": "Urine dipstick/microscopy. Urine culture if recurrent, pregnant, or atypical.",
            "rx": "Nitrofurantoin (Macrobid) 100mg BID x5 days OR Phenazopyridine 200mg TID x2 days (symptom relief).",
            "fu": "None needed if resolved. F/U in 1 week if persistent.",
            "ed": "Fever, chills, flank pain, nausea/vomiting (pyelonephritis)."
        },
        {
            "name": "Dysuria / Suspected UTI (Male)",
            "hx": "Urethral discharge, frequency, perineal pain, fever, obstructive symptoms.",
            "diff": "Prostatitis > Urethritis (STI) > Cystitis > BPH.",
            "workup": "Urine analysis & culture (mandatory in males). Gonorrhea/Chlamydia NAAT (first-catch urine).",
            "rx": "Bactrim DS 1 tab BID x7-14 days. If prostatitis suspected, extend therapy to 4 weeks.",
            "fu": "F/U in 1 week with culture results.",
            "ed": "Fever, urinary retention, severe perineal/scrotal pain, or systemic symptoms."
        },
        {
            "name": "Urinary Frequency/Urgency",
            "hx": "Onset, nocturia, fluid intake (caffeine, alcohol), dysuria, incontinence.",
            "diff": "Overactive Bladder (OAB) > UTI > BPH (males) > Diabetes Mellitus.",
            "workup": "Urinalysis, urine culture, post-void residual (PVR) volume via ultrasound. HbA1c.",
            "rx": "Bladder training, limit caffeine. Oxybutynin ER 5-10mg QD or Mirabegron 25-50mg QD (avoid oxybutynin in elderly).",
            "fu": "F/U in 4 weeks.",
            "ed": "Acute urinary retention (unable to void), fever, hematuria, or sudden lower extremity weakness."
        },
        {
            "name": "Hematuria (Microscopic)",
            "hx": "Incidental finding on UA, smoking history, occupation, anticoagulants, history of kidney stones.",
            "diff": "UTI > Nephrolithiasis > Benign prostatic hyperplasia > Bladder/Renal malignancy.",
            "workup": "Repeat UA to confirm. Urine culture. Refer to Urology for cystoscopy and CT Urogram if persistent and >3 RBC/hpf.",
            "rx": "Treat UTI if present. Otherwise, referral to Urology.",
            "fu": "Referral to Urology. F/U in PCP in 4 weeks.",
            "ed": "Gross hematuria with blood clots, acute flank pain, fever, or inability to void."
        },
        {
            "name": "Hematuria (Macroscopic)",
            "hx": "Painless vs. painful, blood throughout stream vs. terminal, blood clots, smoking history.",
            "diff": "Bladder/Urothelial Cancer > Kidney stone > UTI > Hemorrhagic cystitis.",
            "workup": "Urinalysis, urine culture, CMP (GFR), CBC. CT Urogram and Urology referral for cystoscopy (urgent).",
            "rx": "Hydration. Referral to Urology. Avoid antiplatelets/anticoagulants if safe.",
            "fu": "Urgent Urology referral. F/U in 1-2 weeks.",
            "ed": "Inability to void (clot retention), severe flank pain, or hemodynamic instability."
        },
        {
            "name": "Urinary Incontinence (Stress/Urge)",
            "hx": "Leakage with coughing/laughing/sneezing (stress) vs. leakage with sudden urge (urge).",
            "diff": "Stress Incontinence > Urge Incontinence > Mixed Incontinence > Overflow Incontinence.",
            "workup": "Urinalysis (r/o infection), post-void residual (PVR) measurement, voiding diary.",
            "rx": "Pelvic floor muscle training (Kegels). Duloxetine (off-label for stress). Oxybutynin 5mg BID for urge.",
            "fu": "F/U in 4-6 weeks.",
            "ed": "Saddle anesthesia, sudden bowel incontinence, or bilateral lower limb weakness (cauda equina)."
        },
        {
            "name": "Flank Pain / Suspected Nephrolithiasis",
            "hx": "Sudden onset severe colicky pain radiating to groin, hematuria, nausea, vomiting.",
            "diff": "Nephrolithiasis > Pyelonephritis > Musculoskeletal strain > Renal infarction.",
            "workup": "Urinalysis (check for hematuria), BMP (creatinine). Non-contrast CT Abdomen/Pelvis (gold standard) or renal ultrasound.",
            "rx": "Tamsulosin 0.4mg QD (expulsive therapy), Ibuprofen 600mg TID, Ondansetron 4mg Q8h PRN. Push fluids.",
            "fu": "F/U in 1 week.",
            "ed": "Fever/chills with pain (infected stone - emergency), intractable vomiting, or anuria."
        },
        {
            "name": "Erectile Dysfunction",
            "hx": "Onset, morning erections present (psychogenic), cardiovascular risk factors, medications (beta-blockers).",
            "diff": "Vasculogenic ED > Psychogenic > Neurogenic/Endocrine > Drug-induced.",
            "workup": "Fasting lipids, glucose/HbA1c, total Testosterone (morning), Prolactin, TSH.",
            "rx": "Sildenafil 25-50mg PO 1h before intercourse (contraindicated with Nitrates). Cardiovascular risk factor reduction.",
            "fu": "F/U in 4 weeks to evaluate treatment efficacy.",
            "ed": "Priapism (erection lasting >4 hours - seek emergency care immediately)."
        },
        {
            "name": "Benign Prostatic Hyperplasia (BPH)",
            "hx": "Weak stream, hesitancy, nocturia, frequency, sensation of incomplete emptying.",
            "diff": "BPH > Prostate cancer > OAB > Urethral stricture.",
            "workup": "Digital rectal exam (DRE), PSA (prostate-specific antigen) after discussion, Urinalysis, BMP.",
            "rx": "Tamsulosin 0.4mg QD (alpha-blocker) and/or Finasteride 5mg QD (5-alpha-reductase inhibitor).",
            "fu": "F/U in 4 weeks to assess symptom score (IPSS).",
            "ed": "Acute urinary retention (inability to urinate with severe lower abdominal pain)."
        },
        {
            "name": "Scrotal/Testicular Pain",
            "hx": "Onset, duration, sexual history, swelling, fever, urinary symptoms.",
            "diff": "Epididymitis > Varicocele/Hydrocele > Testicular Torsion (ruled out if subacute/chronic) > Malignancy.",
            "workup": "Urinalysis, urine culture, Chlamydia/Gonorrhea NAAT. Scrotal Ultrasound with Doppler.",
            "rx": "If epididymitis suspected (<35 yo): Ceftriaxone 500mg IM once + Doxycycline 100mg BID x10 days. Scrotal support.",
            "fu": "F/U in 1 week or sooner if ultrasound shows pathology.",
            "ed": "Sudden onset severe testicular pain, nausea/vomiting, high-riding testicle (suspect torsion - go to ED)."
        },
        {
            "name": "Chronic Kidney Disease (Stage 3 Follow-up)",
            "hx": "Medication compliance, OTC NSAID use, dietary protein/sodium, fluid intake.",
            "diff": "CKD Stage 3a/3b d/t DM/HTN > Glomerulonephritis > Chronic interstitial nephritis.",
            "workup": "Every 3-6 months: BMP (electrolytes, creatinine/eGFR). Annual: Urine microalbumin/creatinine ratio.",
            "rx": "Lisinopril 10mg QD (if proteinuria present). Avoid NSAIDs. Manage BP target <130/80.",
            "fu": "F/U in 3-6 months. Refer to Nephrology if eGFR <30 or rapid decline.",
            "ed": "Severe dyspnea, generalized edema, confusion, vomiting (signs of uremia or fluid overload)."
        },
        {
            "name": "Proteinuria",
            "hx": "Foamy urine, edema, diabetes, hypertension, NSAID use.",
            "diff": "Diabetic nephropathy > Hypertensive nephrosclerosis > Glomerulonephritis > Orthostatic proteinuria.",
            "workup": "Urinalysis, random urine protein-to-creatinine ratio (UPCR), BMP, HbA1c.",
            "rx": "Lisinopril 5-10mg QD or Losartan 25-50mg QD (titrate to control proteinuria/BP). Strict glycemic control.",
            "fu": "F/U in 4 weeks with lab results. Refer to Nephrology if UPCR >1000mg/g.",
            "ed": "Sudden severe generalized swelling (anasarca), severe shortness of breath."
        }
    ],
    "Gynecological & Obstetric": [
        {
            "name": "Abnormal Uterine Bleeding (AUB)",
            "hx": "Cycle regularity, flow volume, intermenstrual bleeding, postcoital bleeding, thyroid symptoms.",
            "diff": "Anovulatory bleeding (PCOS) > Uterine fibroids/polyps > Endometrial hyperplasia/cancer > Thyroid dysfunction.",
            "workup": "Pregnancy test (essential), CBC (r/o anemia), TSH, Prolactin. Pelvic Ultrasound.",
            "rx": "Medroxyprogesterone 10mg QD x10-14 days or Combined Oral Contraceptive (Monophasic).",
            "fu": "F/U in 2-4 weeks with pelvic ultrasound results.",
            "ed": "Severe menorrhagia with orthostasis, syncope, shortness of breath, or severe pelvic pain."
        },
        {
            "name": "Vaginal Discharge / Vaginitis",
            "hx": "Color, consistency, odor, pruritus, sexual history, use of douching/soaps.",
            "diff": "Bacterial Vaginosis > Vulvovaginal Candidiasis > Trichomoniasis > Chlamydia/Gonorrhea.",
            "workup": "Vaginal swab for wet mount, pH, KOH prep (whiff test), STI NAAT panel.",
            "rx": "Metronidazole 500mg BID x7d (BV) OR Fluconazole 150mg PO once (Candidiasis). Avoid douching.",
            "fu": "F/U in 2 weeks if symptoms do not resolve.",
            "ed": "Severe lower abdominal pain, fever, chills, vomiting (suspected PID)."
        },
        {
            "name": "Pelvic Pain (Acute)",
            "hx": "LMP, sexual history, unilateral vs. bilateral, fever, vaginal discharge.",
            "diff": "PID > Ruptured ovarian cyst > Ectopic pregnancy > Appendicitis.",
            "workup": "Pregnancy test (mandatory), Urinalysis, Gonorrhea/Chlamydia NAAT. Pelvic ultrasound.",
            "rx": "If PID suspected: Ceftriaxone 500mg IM x1 + Doxycycline 100mg BID x14 days + Metronidazole 500mg BID x14 days.",
            "fu": "F/U in 48-72 hours for clinical recheck.",
            "ed": "Positive pregnancy test with acute pain, high fever, repeated vomiting, peritoneal signs."
        },
        {
            "name": "Pelvic Pain (Chronic/Endometriosis)",
            "hx": "Dysmenorrhea, dyspareunia, dyschezia, duration (>6 months), relation to menses.",
            "diff": "Endometriosis > Adenomyosis > Pelvic congestion syndrome > Chronic PID.",
            "workup": "Pelvic ultrasound (frequently normal in early endometriosis), CBC, Urinalysis.",
            "rx": "Naproxen 500mg BID. Monophasic COC (continuous) or Norethindrone 5mg QD. Refer to Gynecology.",
            "fu": "F/U in 4-6 weeks to assess response to hormonal suppression.",
            "ed": "Sudden onset of severe, sharp unilateral pain (suspect ovarian torsion)."
        },
        {
            "name": "Amenorrhea (Secondary)",
            "hx": "Duration (no menses >3 months), pregnancy risk, exercise, stress, weight changes, hirsutism, galactorrhea.",
            "diff": "Pregnancy > PCOS > Hypothalamic amenorrhea > Hyperprolactinemia > Thyroid disorder.",
            "workup": "Urine/Serum hCG, TSH, Prolactin, FSH, LH. Progesterone challenge test (Medroxyprogesterone 10mg x10d).",
            "rx": "Treat underlying cause. If PCOS, cyclic progesterone or COCs. Refer to social work/nutrition for eating disorders.",
            "fu": "F/U in 4 weeks with lab results.",
            "ed": "Severe headache with vision changes (r/o prolactinoma/pituitary apoplexy)."
        },
        {
            "name": "Breast Pain (Mastalgia)",
            "hx": "Cyclic vs. non-cyclic, unilateral vs. bilateral, relationship to menses, caffeine intake.",
            "diff": "Cyclic mastalgia > Fibrocystic breast changes > Chest wall pain > Breast abscess/cancer.",
            "workup": "Clinical breast exam. Bilateral mammogram +/- ultrasound if age >30 and focal pain/lump.",
            "rx": "Reassurance (if normal exam/imaging), supportive bra, NSAIDs (Ibuprofen 400mg TID PRN), reduce caffeine.",
            "fu": "F/U in 4-8 weeks.",
            "ed": "Redness, warmth, swelling of breast with fever (mastitis/abscess), or bloody nipple discharge."
        },
        {
            "name": "Breast Lump (Suspected)",
            "hx": "Onset, changes with menstrual cycle, family history of breast/ovarian cancer, nipple discharge.",
            "diff": "Fibroadenoma > Breast cyst > Fibrocystic change > Breast carcinoma.",
            "workup": "Clinical breast exam. If age <30: Breast ultrasound. If age >=30: Mammogram and ultrasound.",
            "rx": "Referral to Breast Surgery/Oncology if imaging is suspicious (BI-RADS 4/5).",
            "fu": "F/U in 1-2 weeks to review imaging results.",
            "ed": "Skin tethering/dimpling ('peau d'orange'), nipple retraction, or bloody nipple discharge."
        },
        {
            "name": "Contraception Counseling/Request",
            "hx": "LMP, sexual history, future pregnancy plans, compliance preference, contraindications to estrogen (HTN, migraines).",
            "diff": "Contraception selection (LARC, COC, POP, barrier).",
            "workup": "Blood pressure check (vital before prescribing estrogen-containing methods). Pregnancy test.",
            "rx": "Sprintec (COC) 1 tab PO daily or Norethindrone 0.35mg PO daily (POP) or Nexplanon/IUD referral.",
            "fu": "F/U in 3 months to check blood pressure and satisfaction.",
            "ed": "Severe leg swelling, sudden shortness of breath, chest pain, or severe headache (clot risk with estrogen)."
        },
        {
            "name": "Pregnancy Confirmation/Initial Visit",
            "hx": "LMP (calculate EDD), gravidity/parity, prior pregnancy complications, chronic medical conditions.",
            "diff": "Intrauterine pregnancy > Ectopic pregnancy > Molar pregnancy.",
            "workup": "Urine hCG, CBC, Blood Type/Rh factor, Antibody screen, Rubella, HIV, RPR, HBsAg, Urinalysis & culture.",
            "rx": "Prenatal vitamin daily. Discontinue teratogenic medications (ACE-inhibitors, statins).",
            "fu": "Refer to OB/GYN. F/U in OB clinic at 8 weeks gestation.",
            "ed": "Vaginal bleeding, severe lower abdominal pain, or severe vomiting (hyperemesis)."
        },
        {
            "name": "Dysmenorrhea",
            "hx": "Onset with menses, crampy pelvic pain, absence of dyspareunia or intermenstrual bleeding.",
            "diff": "Primary Dysmenorrhea > Secondary Dysmenorrhea (Endometriosis, Adenomyosis, Fibroids).",
            "workup": "Clinical diagnosis. Pelvic ultrasound if secondary causes suspected.",
            "rx": "Ibuprofen 400-600mg Q6h starting 1-2 days before menses. Combined oral contraceptives (continuous trial).",
            "fu": "F/U in 8 weeks to assess response.",
            "ed": "Severe, sudden onset pelvic pain with fever, chills, or dizziness."
        },
        {
            "name": "Postmenopausal Bleeding",
            "hx": "Time since last normal menses (>12 months), vaginal bleeding duration, HRT use, tamoxifen use.",
            "diff": "Endometrial atrophy > Endometrial hyperplasia > Endometrial carcinoma > Cervical polyps.",
            "workup": "Transvaginal Ultrasound (TVUS) to assess endometrial stripe thickness. Endometrial biopsy.",
            "rx": "Refer to Gynecology for endometrial biopsy. Stop HRT if applicable.",
            "fu": "Urgent Gynecology referral. F/U in 2 weeks to review biopsy.",
            "ed": "Heavy hemorrhage, severe abdominal pain, or signs of hemodynamic instability."
        },
        {
            "name": "Dyspareunia",
            "hx": "Superficial vs. deep pain, duration, relationship to cycle, vaginal dryness, vaginal discharge.",
            "diff": "Vulvovaginal atrophy (menopause) > Vaginitis > Endometriosis / Pelvic adhesions > Vaginismus.",
            "workup": "Pelvic exam, speculum exam, vaginal pH, wet mount, STI screening. Pelvic ultrasound if deep pain.",
            "rx": "Vaginal moisturizers/lubricants. Conjugated Estrogen vaginal cream 0.5g daily x2 weeks, then twice weekly.",
            "fu": "F/U in 4 weeks.",
            "ed": "Severe postcoital bleeding, acute severe pelvic pain, or fever."
        }
    ],
    "Dermatological": [
        {
            "name": "Pruritus (Generalized)",
            "hx": "Duration, primary skin lesions, dry skin, hot showers, new medications, systemic symptoms.",
            "diff": "Xerosis (dry skin) > Atopic/Contact dermatitis > Scabies > Uremia/Cholestasis/Hematologic malignancy.",
            "workup": "If no primary lesions: CBC with diff, CMP (renal/hepatic), TSH, Ferritin, CXR (r/o lymphoma).",
            "rx": "Gentle skin care, thick emollient (CeraVe) post-shower. Hydroxyzine 10-25mg QHS PRN itching.",
            "fu": "F/U in 4 weeks.",
            "ed": "Jaundice, unexplained weight loss, night sweats, or difficulty breathing."
        },
        {
            "name": "Atopic Dermatitis / Eczema",
            "hx": "Pruritic rash in flexural distributions, personal/family history of asthma/allergies.",
            "diff": "Atopic Dermatitis > Contact Dermatitis > Seborrheic Dermatitis > Psoriasis.",
            "workup": "Clinical diagnosis.",
            "rx": "Triamcinolone acetonide 0.1% ointment BID to affected areas (limit to 2 weeks on body). Hydrocortisone 2.5% for face.",
            "fu": "F/U in 2-4 weeks.",
            "ed": "Severe pain, weeping lesions, yellow crusts (suspect eczema herpeticum or secondary staph infection)."
        },
        {
            "name": "Acne Vulgaris",
            "hx": "Comedones vs. inflammatory papules/pustules vs. nodulocystic, scarring, treatments tried.",
            "diff": "Acne Vulgaris > Rosacea > Perioral dermatitis > Folliculitis.",
            "workup": "Clinical diagnosis. Check hormone levels (Free/Total Testosterone, DHEAS) if hirsutism present.",
            "rx": "Tretinoin 0.025% cream QHS + Benzoyl Peroxide 5% wash QD. Add Doxycycline 100mg QD x3 months if inflammatory.",
            "fu": "F/U in 8-12 weeks (acne treatments take 2-3 months to show effect).",
            "ed": "Severe cystic lesions with fever, joint pain (acne fulminans - rare emergency)."
        },
        {
            "name": "Rosacea",
            "hx": "Facial flushing, triggers (spicy food, alcohol, heat), papules/pustules, eye irritation.",
            "diff": "Erythematotelangiectatic/Papulopustular Rosacea > Acne Vulgaris > SLE (malar rash) > Contact dermatitis.",
            "workup": "Clinical diagnosis. ANA titer if SLE suspected.",
            "rx": "Metronidazole 0.75% gel BID. Avoid triggers, daily sunscreen. Low-dose Doxycycline 40mg QD (Oracea).",
            "fu": "F/U in 6-8 weeks.",
            "ed": "Severe ocular symptoms (grittiness, photophobia, vision loss - suspect ocular rosacea, refer to Ophtho)."
        },
        {
            "name": "Suspected Tinea Pedis/Corporis",
            "hx": "Pruritic, scaling, annular plaques with active border (corporis) or interdigital scaling (pedis).",
            "diff": "Dermatophytosis > Contact dermatitis > Eczema > Psoriasis.",
            "workup": "Clinical diagnosis. KOH prep of skin scrapings (septate hyphae) if diagnosis uncertain.",
            "rx": "Clotrimazole 1% cream or Terbinafine 1% cream BID x2-4 weeks. Keep skin dry, avoid sharing towels.",
            "fu": "F/U in 4 weeks if no improvement.",
            "ed": "Spreading erythema, warmth, pain, or fever (secondary bacterial cellulitis)."
        },
        {
            "name": "Onycomychosis (Nail Fungus)",
            "hx": "Thickened, yellow, dystrophic nails, cosmetic concern, pain with footwear.",
            "diff": "Onychomycosis > Nail psoriasis > Trauma/Onycholysis > Lichen planus.",
            "workup": "Fungal culture or PAS stain of nail clipping (required before initiating oral therapy). LFTs.",
            "rx": "Terbinafine 250mg PO QD x6 weeks (fingernails) or x12 weeks (toenails). Check ALT/AST at baseline & 6 weeks.",
            "fu": "F/U at 6 weeks for LFT check.",
            "ed": "Right upper quadrant pain, dark urine, pale stools, severe fatigue (hepatic injury d/t terbinafine)."
        },
        {
            "name": "Cellulitis (Suspected)",
            "hx": "Acute spreading erythema, warmth, pain, swelling, systemic symptoms, history of skin trauma.",
            "diff": "Cellulitis > Stasis dermatitis > DVT > Contact dermatitis.",
            "workup": "Clinical diagnosis. CBC, BMP. Culture any purulent drainage.",
            "rx": "Cephalexin 500mg QID x5-7 days (non-purulent). If MRSA risk: Bactrim DS 1-2 tabs BID x5-7 days.",
            "fu": "F/U in 48 hours to assess boundaries (mark margins with pen).",
            "ed": "Fever, chills, hypotension, rapidly spreading borders, crepitus, or severe pain out of proportion."
        },
        {
            "name": "Abscess / Furuncle",
            "hx": "Painful fluctuant nodule, duration, history of MRSA, diabetes, immunosuppression.",
            "diff": "Cutaneous Abscess > Epidermal inclusion cyst (infected) > Hidradenitis suppurativa.",
            "workup": "Wound culture (post-incision and drainage).",
            "rx": "Incision and drainage (primary treatment). Bactrim DS 1-2 tabs BID x5 days (add if systemic signs/cellulitis).",
            "fu": "F/U in 24-48 hours for packing change/check.",
            "ed": "High fever, chills, spreading redness around abscess, or facial abscess (risk of cavernous sinus thrombosis)."
        },
        {
            "name": "Contact Dermatitis (Poison Ivy, etc.)",
            "hx": "Exposure history (plants, soaps, nickel, cosmetics), linear distribution (poison ivy).",
            "diff": "Contact Dermatitis > Eczema > Herpes zoster > Cellulitis.",
            "workup": "Clinical diagnosis. Patch testing if chronic and allergen unidentified.",
            "rx": "Triamcinolone 0.1% ointment BID x10-14 days. Avoid allergen. Prednisone taper if >20% body surface area.",
            "fu": "F/U in 2 weeks.",
            "ed": "Erythema/swelling of eyes/mouth, or difficulty breathing (anaphylaxis/severe systemic reaction)."
        },
        {
            "name": "Psoriasis",
            "hx": "Symmetric, silver-scaled erythematous plaques on extensor surfaces (elbows, knees, scalp), joint pain.",
            "diff": "Psoriasis Vulgaris > Seborrheic Dermatitis > Eczema > Tinea corporis.",
            "workup": "Clinical diagnosis. Check joint symptoms (r/o psoriatic arthritis).",
            "rx": "Clobetasol propionate 0.05% cream BID x2 weeks, then transition to Triamcinolone 0.1% BID.",
            "fu": "F/U in 4 weeks.",
            "ed": "Generalized erythroderma (redness over >90% BSA), fever, chills (erythrodermic psoriasis - go to ED)."
        },
        {
            "name": "Alopecia (Hair Loss)",
            "hx": "Pattern (diffuse vs. focal), onset, stress, diet, family history of baldness.",
            "diff": "Androgenetic Alopecia > Telogen effluvium > Alopecia areata > Tinea capitis.",
            "workup": "TSH, Ferritin, Vitamin D, RPR (syphilis), CBC. Scalp biopsy if scarring alopecia suspected.",
            "rx": "Minoxidil 5% topical solution QD. Finasteride 1mg QD (for male pattern baldness).",
            "fu": "F/U in 3-6 months.",
            "ed": "Rapidly progressive systemic hair loss with fever, weight loss, or joint pain."
        },
        {
            "name": "Seborrheic Dermatitis",
            "hx": "Greasy, yellowish scaling on erythematous base on scalp (dandruff), eyebrows, nasolabial folds.",
            "diff": "Seborrheic Dermatitis > Psoriasis > Atopic Dermatitis > Rosacea.",
            "workup": "Clinical diagnosis.",
            "rx": "Ketoconazole 2% shampoo 2-3x weekly. Hydrocortisone 1% cream BID for face (limit to 5-7 days).",
            "fu": "F/U in 4 weeks PRN.",
            "ed": "Superimposed bacterial infection (exudate, severe pain) or erythroderma."
        },
        {
            "name": "Actinic Keratosis / Mole Check",
            "hx": "Sun exposure history, changing moles (ABCDE criteria), bleeding/non-healing lesions.",
            "diff": "Dysplastic Nevus > Melanoma / Basal Cell Carcinoma / Squamous Cell Carcinoma > Actinic Keratosis.",
            "workup": "Dermoscopy. Biopsy (shave or punch) of suspicious lesions.",
            "rx": "Cryotherapy with liquid nitrogen (for actinic keratosis). Refer to Dermatology for suspicious ABCDE moles.",
            "fu": "F/U in 6-12 months for routine skin check.",
            "ed": "Rapidly growing, bleeding, black or multicolored lesion with irregular borders."
        },
        {
            "name": "Urticaria (Hives)",
            "hx": "Duration (acute <6 weeks), triggers (food, meds, infections, cold), associated angioedema.",
            "diff": "Acute Urticaria > Chronic idiopathic urticaria > Urticarial vasculitis.",
            "workup": "Clinical diagnosis. Allergen testing only if clear trigger suspected.",
            "rx": "Cetirizine 10-20mg QD, Famotidine 20mg BID. Prednisone 40mg QD x3-5 days if severe.",
            "fu": "F/U in 1-2 weeks.",
            "ed": "Dyspnea, wheezing, throat tightness, lip/tongue swelling, or dizziness (anaphylaxis - use EpiPen)."
        },
        {
            "name": "Herpes Zoster (Shingles)",
            "hx": "Unilateral dermatomal vesicular rash, pain preceding rash (prodrome), fever.",
            "diff": "Herpes Zoster > Herpes simplex > Contact dermatitis > Cellulitis.",
            "workup": "Clinical diagnosis. PCR swab of vesicle fluid if uncertain.",
            "rx": "Valacyclovir 1000mg TID x7 days (must start within 72h of rash onset). Gabapentin 300mg QHS for pain.",
            "fu": "F/U in 2 weeks or refer to Ophthalmology immediately if V1 (ophthalmicus) branch involved.",
            "ed": "V1 involvement (lesions on tip of nose - Hutchinson's sign), severe facial weakness, or meningismus."
        },
        {
            "name": "Warts (Verruca Vulgaris)",
            "hx": "Location (hands, feet), duration, painful with pressure, treatments tried.",
            "diff": "Verruca Vulgaris > Callus/Corn > Molluscum contagiosum > Squamous cell carcinoma (rare).",
            "workup": "Clinical diagnosis. Shave to expose black dots (thrombosed capillaries) if unsure.",
            "rx": "Salicylic acid 17% daily (OTC). Cryotherapy (liquid nitrogen) in clinic every 2-3 weeks.",
            "fu": "F/U in 2-3 weeks for repeat cryotherapy.",
            "ed": "Rapidly growing, bleeding, or ulcerating lesions, especially in immunocompromised patients."
        }
    ],
    "Psychiatric & Mental Health": [
        {
            "name": "Anxiety (Generalized)",
            "hx": "Excessive worry >6 months, muscle tension, fatigue, irritability, sleep disturbance.",
            "diff": "GAD > Panic disorder > PTSD > Hyperthyroidism.",
            "workup": "GAD-7 screening score. TSH, Free T4, CBC, BMP.",
            "rx": "Escitalopram 10mg QD or Sertraline 50mg QD (titrate). Hydroxyzine 25mg Q6h PRN. Refer to therapy.",
            "fu": "F/U in 2-4 weeks to monitor response/suicidality.",
            "ed": "Suicidal ideation with intent, panic attacks with severe chest pain/shortness of breath."
        },
        {
            "name": "Depression / MDD",
            "hx": "Depressed mood, anhedonia, sleep changes, guilt, energy loss, concentration, appetite, suicidal ideation.",
            "diff": "MDD > Bipolar disorder > Hypothyroidism > Adjustment disorder.",
            "workup": "PHQ-9 screening score. TSH, Vitamin D, B12, CMP, CBC.",
            "rx": "Sertraline 50mg QD or Fluoxetine 20mg QD. Refer to psychotherapy (CBT).",
            "fu": "F/U in 2 weeks to check adherence, side effects, and safety.",
            "ed": "Suicidal ideation with active plan/intent, self-harm, or psychotic symptoms."
        },
        {
            "name": "Panic Attacks",
            "hx": "Sudden onset intense fear, palpitations, chest pain, dyspnea, choking sensation, fear of dying.",
            "diff": "Panic Disorder > Coronary Artery Disease > Hyperthyroidism > Pheochromocytoma.",
            "workup": "ECG, TSH, Free T4, BMP.",
            "rx": "CBT referral (first line). Sertraline 25mg QD (titrate). Clonazepam 0.25-0.5mg PRN (short-term, max 10 pills).",
            "fu": "F/U in 2-4 weeks.",
            "ed": "Chest pain radiating to arm/jaw, hypoxia, syncope, or persistent suicidal thoughts."
        },
        {
            "name": "ADHD Evaluation Request",
            "hx": "Symptoms present before age 12, impact in multiple settings (school, work, home), distractibility.",
            "diff": "ADHD > GAD/MDD > Sleep apnea > Substance use disorder.",
            "workup": "Vanderbilt or ASRS v1.1 rating scale. Refer for formal neuropsychological testing.",
            "rx": "Behavioral coaching. If diagnosed: Methylphenidate ER 18-27mg QD or Atomoxetine 40mg QD (non-stimulant).",
            "fu": "F/U in 2-4 weeks when initiating stimulants to check BP, HR, and sleep.",
            "ed": "Severe chest pain, palpitations, or psychotic/manic symptoms on stimulants."
        },
        {
            "name": "Alcohol Misuse / Counseling",
            "hx": "Drinking frequency/amount, withdrawal symptoms (tremors, seizures, DTs), impact on life.",
            "diff": "Alcohol Use Disorder > Social drinking.",
            "workup": "AUDIT or CAGE questionnaire. CBC (MCV), LFTs, GGT, BMP.",
            "rx": "Brief intervention/counseling. Naltrexone 50mg QD or Acamprosate 666mg TID (if liver disease). Refer to AA.",
            "fu": "F/U in 2-4 weeks.",
            "ed": "Confusion, severe tremors, hallucinations, seizures, or vomiting blood (signs of withdrawal/cirrhosis)."
        },
        {
            "name": "Smoking Cessation Request",
            "hx": "Packs per day, duration, readiness to quit, prior attempts, contraindications to meds.",
            "diff": "Tobacco Use Disorder.",
            "workup": "None routinely. Low-dose CT chest if eligible for lung cancer screening (age 50-80, 20 pack-years).",
            "rx": "Varenicline 0.5mg QD x3d, then 0.5mg BID x4d, then 1mg BID x11 weeks OR Nicotine patch + gum. behavioral counseling.",
            "fu": "F/U in 1-2 weeks (set a quit date).",
            "ed": "Suicidal ideation, severe mood swings, or chest pain."
        },
        {
            "name": "Stress/Burnout",
            "hx": "Work/home stressors, physical symptoms (headache, GI distress), sleep, coping strategies.",
            "diff": "Adjustment Disorder > GAD > MDD > Chronic Fatigue.",
            "workup": "PHQ-9, GAD-7, TSH.",
            "rx": "Workplace/life accommodations, mindfulness. Refer to psychotherapy (CBT). Melatonin 3mg QHS PRN.",
            "fu": "F/U in 4 weeks.",
            "ed": "Suicidal ideation, severe neglect of ADLs, or severe panic attacks."
        },
        {
            "name": "Bipolar Disorder (Stable/Follow-up)",
            "hx": "Medication compliance, mood log (depressive vs. manic symptoms), sleep patterns.",
            "diff": "Bipolar I / II Disorder.",
            "workup": "Lithium level (target 0.6-1.2), Valproic acid level, TSH, BMP, CBC (depending on active meds).",
            "rx": "Continue current regimen (e.g., Quetiapine 150mg QHS or Lithium 300mg BID). Refer to Psychiatry if unstable.",
            "fu": "F/U in 4 weeks or refer to Psychiatry.",
            "ed": "Active suicidal ideation, manic episode (no sleep, grandiosity, risky behavior), or drug toxicity symptoms."
        },
        {
            "name": "PTSD Follow-up",
            "hx": "Intrusive memories, hyperarousal, avoidance, sleep, nightmares, trauma history.",
            "diff": "PTSD > GAD > MDD > Borderline Personality Disorder.",
            "workup": "PCL-5 screening questionnaire.",
            "rx": "Prazosin 1mg QHS (for nightmares, titrate to 5mg). Sertraline 50-100mg QD. Refer for trauma-focused therapy.",
            "fu": "F/U in 2-4 weeks.",
            "ed": "Suicidal ideation with intent, self-harm, or severe dissociation/psychosis."
        },
        {
            "name": "Grief/Bereavement Support",
            "hx": "Time since loss, coping mechanism, sleep, function, presence of suicidal thoughts.",
            "diff": "Normal Bereavement > Prolonged Grief Disorder > MDD.",
            "workup": "PHQ-9.",
            "rx": "Supportive listening, reassurance. Refer to grief counseling/support groups. Avoid routine benzodiazepines.",
            "fu": "F/U in 4 weeks.",
            "ed": "Active suicidal ideation, severe self-neglect, or hallucinations (other than transiently hearing/seeing deceased)."
        }
    ],
    "ENT & Ophthalmology": [
        {
            "name": "Ear Pain (Otitis Media/Externa)",
            "hx": "Duration, hearing changes, swimming history, fever, discharge.",
            "diff": "Otitis Externa (swimmer's ear) > Acute Otitis Media > Temporomandibular Joint (TMJ) syndrome.",
            "workup": "Otoscopy. Culture ear discharge if chronic or unresponsive to treatment.",
            "rx": "Ofloxacin 0.3% otic drops 5 drops BID x7d (externa). Amoxicillin 875mg BID x5-7 days (media if bacterial).",
            "fu": "F/U in 2 weeks.",
            "ed": "Mastoid tenderness, severe retroauricular swelling, high fever, facial nerve palsy, or vertigo."
        },
        {
            "name": "Tinnitus",
            "hx": "Unilateral vs. bilateral, pulsatile vs. non-pulsatile, duration, noise exposure, hearing loss.",
            "diff": "Subjective tinnitus (noise-induced) > Presbycusis > Eustachian tube dysfunction > Acoustic neuroma.",
            "workup": "Audiometry (mandatory if unilateral or persistent >6 months).",
            "rx": "Reassurance, sound therapy (white noise). Avoid ototoxic medications (aspirin, NSAIDs).",
            "fu": "Refer to ENT/Audiology if unilateral or associated with sudden hearing loss.",
            "ed": "Pulsatile tinnitus (suspect vascular etiology), focal neurological signs, or sudden hearing loss."
        },
        {
            "name": "Hearing Loss (Gradual)",
            "hx": "Duration, asymmetry, history of noise exposure, ototoxic medications, tinnitus.",
            "diff": "Cerumen impaction > Presbycusis (age-related) > Otosclerosis > Acoustic neuroma.",
            "workup": "Otoscopic exam (check for wax). Audiogram.",
            "rx": "Cerumen removal (if impaction). Referral for hearing aids/Audiology.",
            "fu": "F/U in 4 weeks with audiogram results.",
            "ed": "Sudden onset hearing loss (requires urgent evaluation and high-dose oral steroids)."
        },
        {
            "name": "Vertigo / Labyrinthitis",
            "hx": "Spinning sensation, constant vs. episodic, associated hearing loss, recent viral infection.",
            "diff": "Labyrinthitis > Vestibular Neuritis > Meniere's Disease > BPPV.",
            "workup": "Clinical exam (nystagmus, HINTS exam if acute), Audiogram.",
            "rx": "Prednisone 60mg taper x7-10 days (if acute labyrinthitis). Meclizine 25mg Q8h PRN (max 3 days).",
            "fu": "F/U in 1-2 weeks. Refer to ENT/Neurology if persistent.",
            "ed": "Sudden hearing loss, ataxia, dysarthria, diplopia, or focal neurological deficits."
        },
        {
            "name": "Nasal Congestion (Chronic)",
            "hx": "Duration, season, allergy symptoms, nasal steroid/nasal spray abuse (rhinitis medicamentosa).",
            "diff": "Allergic Rhinitis > Chronic Sinusitis > Rhinitis medicamentosa > Nasal polyps.",
            "workup": "Clinical exam. Sinus CT if suspecting chronic bacterial sinusitis.",
            "rx": "Fluticasone nasal spray 2 sprays QD. Stop oxymetazoline (Afrin). Saline nasal rinses.",
            "fu": "F/U in 4 weeks.",
            "ed": "Unilateral congestion with recurrent epistaxis, facial deformity, or cranial nerve deficits."
        },
        {
            "name": "Blurry Vision / Vision Changes (Referral)",
            "hx": "Onset (acute vs. gradual), unilateral vs. bilateral, pain, redness, floaters, flashing lights.",
            "diff": "Refractive error > Cataracts > Macular degeneration > Diabetic retinopathy > Acute glaucoma.",
            "workup": "Visual acuity test (Snellen chart). Check pupillary response.",
            "rx": "Refer to Ophthalmology for complete evaluation. Do not prescribe ophthalmic steroids.",
            "fu": "Follow up in Ophthalmology.",
            "ed": "Sudden vision loss, severe eye pain with nausea/vomiting, halos around lights, or eye trauma."
        },
        {
            "name": "Red Eye (Conjunctivitis)",
            "hx": "Discharge character (purulent vs. watery/itchy), unilateral vs. bilateral, pain, vision changes.",
            "diff": "Viral Conjunctivitis > Bacterial Conjunctivitis > Allergic Conjunctivitis > Keratitis.",
            "workup": "Visual acuity (must document), fluorescein stain to r/o corneal abrasion/ulcer.",
            "rx": "Erythromycin 0.5% ophthalmic ointment 4x daily x5-7 days (bacterial). Warm compresses (viral).",
            "fu": "F/U in 2-3 days if no improvement.",
            "ed": "Severe eye pain, photophobia, reduced visual acuity, corneal cloudiness, or contact lens wearer."
        },
        {
            "name": "Dry Eyes",
            "hx": "Sensation of grittiness, burning, tearing, contact lens use, Sjogren's symptoms.",
            "diff": "Keratoconjunctivitis sicca > Blepharitis > Sjogren's Syndrome > Meibomian gland dysfunction.",
            "workup": "Fluorescein stain (check for corneal lesions). ANA, SSA, SSB if Sjogren's suspected.",
            "rx": "Artificial tears 4x daily PRN. Warm compresses, lid hygiene (diluted baby shampoo) for blepharitis.",
            "fu": "F/U in 4 weeks.",
            "ed": "Severe ocular pain, vision changes, or corneal ulceration."
        },
        {
            "name": "Foreign Body Sensation in Eye (Referral)",
            "hx": "Mechanism (high-speed metal-on-metal work?), duration, use of safety glasses.",
            "diff": "Corneal Abrasion > Intraocular/Corneal Foreign Body > Keratitis.",
            "workup": "Visual acuity, Fluorescein staining under blue light, lid eversion.",
            "rx": "Erythromycin ophthalmic ointment QID. If high-speed metal-on-metal or rust ring: Refer to Ophthalmology.",
            "fu": "F/U with Ophthalmology in 24 hours.",
            "ed": "Visible intraocular foreign body, pupillary distortion, or sudden drop in visual acuity."
        },
        {
            "name": "Epistaxis (Acute/Recurrent)",
            "hx": "Onset, frequency, duration, unilateral vs. bilateral, anticoagulant use, trauma.",
            "diff": "Anterior bleeding (Kiesselbach's plexus) > Hypertension > Anticoagulant-induced > Posterior bleed.",
            "workup": "Inspect nasal cavity, CBC, PT/INR (if on warfarin).",
            "rx": "Direct pressure x15m leaning forward. Oxymetazoline spray. Bacitracin ointment BID (lubrication).",
            "fu": "F/U in 1-2 weeks. Refer to ENT for cauterization if recurrent.",
            "ed": "Bleeding lasting >30m despite pressure, posterior bleeding (blood dripping down throat), or hematemesis."
        }
    ],
    "Infectious Disease": [
        {
            "name": "Fever of Unknown Origin (Initial)",
            "hx": "Duration (>3 weeks), temperature log, travel, tick/animal exposure, night sweats.",
            "diff": "Occult Infection (abscess, endocarditis, UTI) > Autoimmune > Malignancy > Drug fever.",
            "workup": "CBC, CMP, Blood cultures x2, Urinalysis & culture, TSH, ESR, CRP, HIV, Chest X-ray.",
            "rx": "Avoid empiric antibiotics. Acetaminophen 500mg Q6h PRN fever.",
            "fu": "F/U in 2-3 days with initial labs.",
            "ed": "Hypotension, confusion, stiff neck, severe headache, or inability to tolerate oral intake."
        },
        {
            "name": "Lyme Disease (Suspected/Bite)",
            "hx": "Tick attachment duration (>36h), rash (erythema migrans), headache, joint pain.",
            "diff": "Lyme Disease (Borrelia burgdorferi) > Southern Tick-Associated Rash Illness (STARI) > Cellulitis.",
            "workup": "Lyme ELISA with Western Blot reflex (often negative in first 2-4 weeks; treat clinically if EM rash present).",
            "rx": "Doxycycline 100mg BID x10-14 days. (Doxycycline 200mg once if asymptomatic tick bite <72h after removal).",
            "fu": "F/U in 2 weeks.",
            "ed": "Facial droop (facial nerve palsy), syncope, palpitations, chest pain (Lyme carditis/AV block), or meningismus."
        },
        {
            "name": "Influenza-like Illness",
            "hx": "Onset, fever, myalgias, cough, sore throat, duration, high-risk status (elderly, comorbid).",
            "diff": "Influenza > COVID-19 > RSV > Adenovirus pharyngitis.",
            "workup": "Rapid Influenza swab, Rapid COVID-19 swab.",
            "rx": "Symptomatic (hydration, NSAIDs). Oseltamivir (Tamiflu) 75mg BID x5 days (if started within 48h of onset or high risk).",
            "fu": "None needed if resolving. F/U in 1 week if worsening.",
            "ed": "Dyspnea, hypoxia, chest pain, confusion, or inability to keep fluids down."
        },
        {
            "name": "COVID-19 (Mild-Moderate)",
            "hx": "Onset, vaccination status, dyspnea, fever, taste/smell loss, risk factors for progression.",
            "diff": "COVID-19 > Influenza > Common Cold > Acute Bronchitis.",
            "workup": "Rapid COVID-19 antigen/PCR swab. Pulse oximetry.",
            "rx": "Nirmatrelvir/Ritonavir (Paxlovid) 300/100mg BID x5 days (if high risk, start within 5d). Hydration, NSAIDs.",
            "fu": "F/U in 3-5 days via telehealth.",
            "ed": "Hypoxia (O2 sat <92%), severe shortness of breath, chest pain, or confusion."
        },
        {
            "name": "Mononucleosis (Suspected)",
            "hx": "Duration, fever, sore throat, severe fatigue, splenomegaly risk (contact sports).",
            "diff": "Infectious Mononucleosis (EBV) > Strep Pharyngitis > Acute HIV > CMV infection.",
            "workup": "Monospot test, CBC with differential (atypical lymphocytes), LFTs. Throat culture.",
            "rx": "Symptomatic care. Avoid contact sports x4 weeks d/t splenic rupture risk.",
            "fu": "F/U in 1-2 weeks.",
            "ed": "Difficulty breathing/swallowing (airway obstruction d/t tonsillar hypertrophy), severe LUQ pain."
        }
    ],
    "Preventive, Wellness & Administrative": [
        {
            "name": "Annual Wellness Visit / Health Maintenance",
            "hx": "Family history, lifestyle, diet/exercise, vaccination history, update screenings.",
            "diff": "Preventive exam.",
            "workup": "Screening: Lipids (every 5y), HbA1c (every 3y), colonoscopy (age 45-75), mammogram (age 40-74), Pap (age 21-65).",
            "rx": "Tdap vaccine, Influenza vaccine (annual), Shingrix (age >=50), Prevnar 20 (age >=65).",
            "fu": "F/U in 1 year.",
            "ed": "N/A for wellness visits. Direct to clinic/ED for acute symptoms."
        },
        {
            "name": "Pre-operative Clearance",
            "hx": "Type of surgery, anesthesia history, exercise tolerance (METs >=4), active medical issues.",
            "diff": "Perioperative risk assessment.",
            "workup": "ECG (if cardiac disease or high risk), CBC, BMP, PT/INR (depending on surgery/comorbidities).",
            "rx": "Instructions on holding meds (e.g., hold ACE-I/ARBs morning of surgery, hold anticoagulants per protocol).",
            "fu": "Send clearance note to surgeon. F/U with PCP post-operatively.",
            "ed": "Chest pain, severe dyspnea, or palpitations prior to surgery."
        },
        {
            "name": "Vaccine Request / Hesitancy",
            "hx": "Concerns/fears regarding vaccines, allergies, history of vaccine reactions.",
            "diff": "Health education.",
            "workup": "None routinely. Serum titers if history of infection is uncertain.",
            "rx": "Counseling on vaccine benefits/risks. Administer indicated vaccines (e.g., Tdap, HPV, COVID-19).",
            "fu": "F/U at next scheduled health maintenance visit.",
            "ed": "Anaphylaxis (hives, wheezing, throat swelling) within hours of vaccination."
        },
        {
            "name": "Cancer Screening Discussion",
            "hx": "Age, smoking history, family history of cancer, screening preferences.",
            "diff": "Shared decision making.",
            "workup": "Colorectal (Cologuard vs Colonoscopy), Breast (Mammography), Cervical (Pap/HPV), Lung (LDCT if eligible).",
            "rx": "Referral for screening colonoscopy, mammography, or LDCT chest.",
            "fu": "F/U in 4 weeks to review screening results.",
            "ed": "Acute changes: rectal bleeding, breast lump, postmenopausal bleeding (go to clinic/ED)."
        },
        {
            "name": "Travel Medicine Consultation",
            "hx": "Destination, duration, activities, departure date, vaccine history, chronic diseases.",
            "diff": "Pre-travel prophylaxis.",
            "workup": "Review CDC Yellow Book guidelines for specific destination.",
            "rx": "Hepatitis A/B booster, Typhoid vaccine. Malarone (atovaquone/proguanil) 1 tab daily (start 1-2d pre-travel).",
            "fu": "F/U post-travel only if febrile or symptomatic.",
            "ed": "High fever, severe diarrhea with dehydration, or confusion during/after travel."
        }
    ]
};

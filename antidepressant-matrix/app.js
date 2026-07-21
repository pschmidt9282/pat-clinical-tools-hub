// Antidepressant Master Prescribing Reference — Clinical Decision Logic
document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // 1. DATASETS
  // ==========================================

  const ANTIDEPRESSANTS = [
    // --- SSRIs ---
    {
      id: "fluoxetine",
      name: "Fluoxetine",
      class: "ssri",
      classFull: "Selective Serotonin Reuptake Inhibitor (SSRI)",
      brands: "Prozac, Prozac Weekly, Sarafem",
      formulations: "Caps: 10, 20, 40 mg; Tabs: 10, 20 mg; Liquid: 20 mg/5 mL; Weekly Cap: 90 mg",
      startingDose: "20 mg/day",
      titration: "↑ after several weeks if needed",
      targetDose: "20 mg/day",
      maxDose: "80 mg/day",
      frequency: "QD (AM) or BID (AM + noon) if >20 mg",
      food: "± food",
      timing: "Morning",
      elderlyHepatic: "Lower starting doses; consider every-other-day dosing",
      renal: "None required",
      cost: "$4–10",
      se: { sexual: 3, weight: 0, gi: 1, insomnia: 2, sedation: 0, qtc: 1, anticholinergic: 0, orthostatic: 1, discontinuation: 1 },
      seDetails: "Sexual dysfunction (~58%), Insomnia/agitation (low but activating), GI upset (slight)",
      cyp: { cyp2d6: "Strong", cyp1a2: "Mild", cyp2c19: "Moderate", cyp3a4: "Moderate" },
      contraindications: [
        "Concurrent MAOI use (14-day washout required both directions; wait 5 weeks after stopping fluoxetine)",
        "Concurrent thioridazine (wait 5 weeks after stopping fluoxetine)",
        "Concurrent pimozide",
        "Hypersensitivity to fluoxetine"
      ],
      warnings: "FDA Black Box: Suicidality in children, adolescents, and young adults (18-24). Monitor for activating side effects (agitation, insomnia) or mania induction. Tamoxifen users: Avoid fluoxetine (reduces endoxifen conversion).",
      clinicalNotes: "Long half-life (t½ of 4-16 days for active metabolite norfluoxetine) makes it self-tapering and carries the lowest risk of discontinuation syndrome. Excellent choice for patients with poor adherence. Activating agent, take in the morning.",
      references: "[1][8][11]"
    },
    {
      id: "sertraline",
      name: "Sertraline",
      class: "ssri",
      classFull: "Selective Serotonin Reuptake Inhibitor (SSRI)",
      brands: "Zoloft",
      formulations: "Tabs: 25, 50, 100 mg; Caps: 150, 200 mg; Oral Concentrate: 20 mg/mL (12% alcohol)",
      startingDose: "50 mg/day",
      titration: "↑ 25–50 mg q1 week",
      targetDose: "50–200 mg/day",
      maxDose: "200 mg/day",
      frequency: "QD",
      food: "± food (oral concentrate must be diluted in specified juices/water)",
      timing: "AM or PM",
      elderlyHepatic: "Mild hepatic: half starting dose; Moderate/Severe hepatic: avoid",
      renal: "None required",
      cost: "$4–15",
      se: { sexual: 3, weight: 1, gi: 2, insomnia: 2, sedation: 0, qtc: 1, anticholinergic: 0, orthostatic: 1, discontinuation: 2 },
      seDetails: "Sexual dysfunction (~63%), GI (highest rate of diarrhea among SSRIs), Insomnia/agitation (low)",
      cyp: { cyp2d6: "Moderate", cyp1a2: "Mild", cyp2c19: "Mild", cyp3a4: "Moderate" },
      contraindications: [
        "Concurrent MAOI use (14-day washout)",
        "Concurrent pimozide",
        "Oral concentrate is contraindicated with disulfiram (contains 12% alcohol)"
      ],
      warnings: "FDA Black Box: Suicidality. Oral concentrate must be diluted immediately before use in 4 oz of water, ginger ale, lemon/lime soda, lemonade, or orange juice only.",
      clinicalNotes: "First-line antidepressant with excellent cardiovascular safety profile (supported by SADHART trial). Preferred in pregnancy and breastfeeding due to extensive safety database. Inhibits CYP2D6 only at higher doses (≥150 mg/day).",
      references: "[7][8][9][12]"
    },
    {
      id: "paroxetine-ir",
      name: "Paroxetine IR",
      class: "ssri",
      classFull: "Selective Serotonin Reuptake Inhibitor (SSRI)",
      brands: "Paxil",
      formulations: "Tabs: 10, 20, 30, 40 mg; Suspension: 10 mg/5 mL",
      startingDose: "20 mg/day",
      titration: "↑ 10 mg q ≥1 week",
      targetDose: "20–40 mg/day",
      maxDose: "50 mg/day",
      frequency: "QD (AM)",
      food: "± food",
      timing: "Morning",
      elderlyHepatic: "Start 10 mg; Max 40 mg/day",
      renal: "Severe renal (GFR <30): start 10 mg; Max 40 mg/day",
      cost: "$4–10",
      se: { sexual: 4, weight: 2, gi: 1, insomnia: 1, sedation: 1, qtc: 1, anticholinergic: 1, orthostatic: 2, discontinuation: 4 },
      seDetails: "Highest rate of sexual dysfunction (~71%), weight gain (worst long-term), sedation, mild anticholinergic effects",
      cyp: { cyp2d6: "Strong", cyp1a2: "Mild", cyp2c19: "Mild", cyp3a4: "Mild" },
      contraindications: [
        "Concurrent MAOI use (14-day washout)",
        "Concurrent thioridazine or pimozide",
        "Pregnancy Category D (embryofetal toxicity — cardiovascular malformations with 1st trimester exposure)"
      ],
      warnings: "FDA Black Box: Suicidality. High risk of discontinuation syndrome (due to short half-life and no active metabolites). Avoid in tamoxifen users (strong CYP2D6 inhibitor). Avoid in elderly (Beers list due to anticholinergic side effects).",
      clinicalNotes: "Most sedating and anticholinergic SSRI. Short half-life makes tapering slow and mandatory. Associated with the highest rate of weight gain and sexual side effects in the class.",
      references: "[8][9][10][13]"
    },
    {
      id: "paroxetine-cr",
      name: "Paroxetine CR",
      class: "ssri",
      classFull: "Selective Serotonin Reuptake Inhibitor (SSRI)",
      brands: "Paxil CR",
      formulations: "Tabs: 12.5, 25, 37.5 mg",
      startingDose: "25 mg/day",
      titration: "↑ 12.5 mg q ≥1 week",
      targetDose: "25–62.5 mg/day",
      maxDose: "62.5 mg/day",
      frequency: "QD (AM)",
      food: "± food",
      timing: "Morning (swallow whole)",
      elderlyHepatic: "Start 12.5 mg; Max 50 mg/day",
      renal: "Severe renal (GFR <30): start 12.5 mg; Max 50 mg/day",
      cost: "$15–30",
      se: { sexual: 4, weight: 2, gi: 1, insomnia: 1, sedation: 1, qtc: 1, anticholinergic: 1, orthostatic: 2, discontinuation: 4 },
      seDetails: "Highest rate of sexual dysfunction (~71%), weight gain (worst long-term), sedation, mild anticholinergic effects",
      cyp: { cyp2d6: "Strong", cyp1a2: "Mild", cyp2c19: "Mild", cyp3a4: "Mild" },
      contraindications: [
        "Concurrent MAOI use (14-day washout)",
        "Concurrent thioridazine or pimozide",
        "Pregnancy Category D (embryofetal toxicity)"
      ],
      warnings: "FDA Black Box: Suicidality. Do not crush or chew tablets. High risk of discontinuation syndrome.",
      clinicalNotes: "Controlled-release formulation designed to reduce acute GI side effects compared to the IR formulation. Otherwise shares the same clinical profile.",
      references: "[8][9][13]"
    },
    {
      id: "citalopram",
      name: "Citalopram",
      class: "ssri",
      classFull: "Selective Serotonin Reuptake Inhibitor (SSRI)",
      brands: "Celexa",
      formulations: "Tabs: 10, 20, 40 mg; Caps: 30 mg; Liquid: 10 mg/5 mL",
      startingDose: "20 mg/day",
      titration: "↑ to 40 mg after ≥1 week",
      targetDose: "20–40 mg/day",
      maxDose: "40 mg/day",
      frequency: "QD",
      food: "± food",
      timing: "AM or PM",
      elderlyHepatic: "Max 20 mg/day if >60 years or hepatic impairment",
      renal: "None required (caution in severe)",
      cost: "$4–10",
      se: { sexual: 3, weight: 1, gi: 1, insomnia: 1, sedation: 0, qtc: 2, anticholinergic: 0, orthostatic: 1, discontinuation: 2 },
      seDetails: "Dose-dependent QTc prolongation (prominent), Sexual dysfunction (~73%)",
      cyp: { cyp2d6: "Mild", cyp1a2: "None", cyp2c19: "Mild", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use (14-day washout)",
        "Concurrent pimozide",
        "Congenital long QT syndrome"
      ],
      warnings: "FDA Black Box: Suicidality. Hard ceiling of 40 mg/day (20 mg/day in elderly >60, hepatic impairment, CYP2C19 poor metabolizers, or concurrent CYP2C19 inhibitors/cimetidine) due to dose-dependent QTc prolongation.",
      clinicalNotes: "Very clean drug interaction profile (fewest CYP interactions alongside escitalopram). Avoid in patients with baseline cardiac conduction issues, hypokalemia, hypomagnesemia, or concurrent QTc-prolonging agents.",
      references: "[5][6][8][9]"
    },
    {
      id: "escitalopram",
      name: "Escitalopram",
      class: "ssri",
      classFull: "Selective Serotonin Reuptake Inhibitor (SSRI)",
      brands: "Lexapro",
      formulations: "Tabs: 5, 10, 20 mg; Caps: 15 mg; Liquid: 5 mg/5 mL",
      startingDose: "10 mg/day",
      titration: "↑ to 20 mg after ≥1 week",
      targetDose: "10–20 mg/day",
      maxDose: "20 mg/day",
      frequency: "QD",
      food: "± food",
      timing: "AM or PM",
      elderlyHepatic: "10 mg/day recommended max",
      renal: "None required (caution in severe)",
      cost: "$4–10",
      se: { sexual: 3, weight: 1, gi: 1, insomnia: 1, sedation: 0, qtc: 1, anticholinergic: 0, orthostatic: 1, discontinuation: 2 },
      seDetails: "Sexual dysfunction, GI upset (slight), QTc prolongation (mild, lower risk than citalopram)",
      cyp: { cyp2d6: "Mild", cyp1a2: "None", cyp2c19: "Mild", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use (14-day washout)",
        "Concurrent pimozide",
        "Do not co-administer with citalopram"
      ],
      warnings: "FDA Black Box: Suicidality. Cleanest profile, but watch for QTc and typical SSRI class effects.",
      clinicalNotes: "Active S-enantiomer of citalopram. Highly selective for SERT. Definitive meta-analyses (Cipriani 2018) rank escitalopram in the top tier for both efficacy and acceptability/tolerability. Extremely clean drug interaction profile.",
      references: "[8][14][47]"
    },
    {
      id: "fluvoxamine-ir",
      name: "Fluvoxamine IR",
      class: "ssri",
      classFull: "Selective Serotonin Reuptake Inhibitor (SSRI - FDA approved for OCD only in US)",
      brands: "Luvox",
      formulations: "Tabs: 25, 50, 100 mg",
      startingDose: "50 mg/day",
      titration: "↑ 50 mg q4–7 days",
      targetDose: "100–300 mg/day",
      maxDose: "300 mg/day",
      frequency: "QD (≤100 mg) or BID (>100 mg, larger dose at bedtime)",
      food: "± food",
      timing: "Bedtime",
      elderlyHepatic: "Lower starting dose, slower titration",
      renal: "Lower starting dose, slower titration",
      cost: "$10–25",
      se: { sexual: 3, weight: 1, gi: 1, insomnia: 1, sedation: 1, qtc: 0, anticholinergic: 0, orthostatic: 1, discontinuation: 4 },
      seDetails: "Sexual dysfunction (~62%), mild sedation, high discontinuation risk (short t1/2)",
      cyp: { cyp2d6: "Mild", cyp1a2: "Strong", cyp2c19: "Strong", cyp3a4: "Moderate" },
      contraindications: [
        "Concurrent MAOI use (14-day washout)",
        "Concurrent tizanidine, thioridazine, alosetron, or pimozide"
      ],
      warnings: "FDA Black Box: Suicidality. Extreme CYP450 inhibitor. Increases tizanidine levels 33-fold (severe hypotension risk). Increases clozapine, theophylline, and warfarin levels.",
      clinicalNotes: "FDA approved ONLY for OCD in the United States, not MDD. High rate of drug interactions. Short half-life requires BID dosing at doses >100 mg/day.",
      references: "[4][8][9][45]"
    },
    {
      id: "fluvoxamine-er",
      name: "Fluvoxamine ER",
      class: "ssri",
      classFull: "Selective Serotonin Reuptake Inhibitor (SSRI - FDA approved for OCD only in US)",
      brands: "Luvox CR",
      formulations: "Caps: 100, 150 mg",
      startingDose: "100 mg/day",
      titration: "↑ 50 mg q1 week",
      targetDose: "100–300 mg/day",
      maxDose: "300 mg/day",
      frequency: "QD (HS)",
      food: "± food",
      timing: "Bedtime (swallow whole)",
      elderlyHepatic: "Lower starting dose, slower titration",
      renal: "Lower starting dose, slower titration",
      cost: "$25–50",
      se: { sexual: 3, weight: 1, gi: 1, insomnia: 1, sedation: 1, qtc: 0, anticholinergic: 0, orthostatic: 1, discontinuation: 4 },
      seDetails: "Same as Fluvoxamine IR",
      cyp: { cyp2d6: "Mild", cyp1a2: "Strong", cyp2c19: "Strong", cyp3a4: "Moderate" },
      contraindications: [
        "Concurrent MAOI use (14-day washout)",
        "Concurrent tizanidine, thioridazine, alosetron, pimozide, or ramelteon (ER specifically contraindicated with ramelteon)"
      ],
      warnings: "FDA Black Box: Suicidality. Extreme CYP450 inhibitor. Do not open, crush, or chew capsules.",
      clinicalNotes: "Extended-release formulation allowing once-daily bedtime dosing up to 300 mg/day. Approved only for OCD.",
      references: "[4][8]"
    },

    // --- SNRIs ---
    {
      id: "venlafaxine-ir",
      name: "Venlafaxine IR",
      class: "snri",
      classFull: "Serotonin-Norepinephrine Reuptake Inhibitor (SNRI)",
      brands: "Effexor",
      formulations: "Tabs: 25, 37.5, 50, 75, 100 mg",
      startingDose: "75 mg/day (divided BID-TID)",
      titration: "↑ 75 mg q ≥4 days",
      targetDose: "75–225 mg/day",
      maxDose: "225 mg/day (outpatient); 375 mg/day (inpatient)",
      frequency: "BID–TID",
      food: "Must be taken with food",
      timing: "Divided doses",
      elderlyHepatic: "Decrease dose 50% for mild-mod; >50% for cirrhosis",
      renal: "Decrease dose 25-50% for GFR <30; decrease 50% in hemodialysis",
      cost: "$4–10",
      se: { sexual: 3, weight: 0, gi: 2, insomnia: 1, sedation: 1, qtc: 1, anticholinergic: 0, orthostatic: 1, discontinuation: 4 },
      seDetails: "Sustained hypertension (>300 mg/day), Dose-dependent nausea (~67% sexual dysfunction), Tachycardia, severe discontinuation syndrome",
      cyp: { cyp2d6: "Mild", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use (14-day washout required)",
        "Cross-sensitivity with desvenlafaxine"
      ],
      warnings: "FDA Black Box: Suicidality. Class effect of sustained hypertension (dose-dependent, monitor BP). High discontinuation risk (FINISH symptoms) due to short half-life (t½ ~5 hr).",
      clinicalNotes: "Acts primarily as an SSRI at low doses (<150 mg/day); norepinephrine reuptake inhibition becomes clinically significant at higher doses (>150 mg/day). Must take with food.",
      references: "[8][20][21][22]"
    },
    {
      id: "venlafaxine-xr",
      name: "Venlafaxine XR",
      class: "snri",
      classFull: "Serotonin-Norepinephrine Reuptake Inhibitor (SNRI)",
      brands: "Effexor XR",
      formulations: "ER Caps: 37.5, 75, 150 mg; ER Tabs: 75, 112.5 mg",
      startingDose: "37.5–75 mg/day",
      titration: "↑ 75 mg q ≥4 days",
      targetDose: "75 mg/day",
      maxDose: "225 mg/day",
      frequency: "QD",
      food: "Must be taken with food",
      timing: "AM or PM (swallow whole or sprinkle capsule on applesauce)",
      elderlyHepatic: "Decrease dose 50% for mild-mod; ≥50% for severe",
      renal: "Decrease dose 25-50% for GFR <30; ≥50% for severe/HD",
      cost: "$4–15",
      se: { sexual: 3, weight: 0, gi: 2, insomnia: 1, sedation: 1, qtc: 1, anticholinergic: 0, orthostatic: 1, discontinuation: 4 },
      seDetails: "Same as Venlafaxine IR",
      cyp: { cyp2d6: "Mild", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use (14-day washout required)",
        "Cross-sensitivity with desvenlafaxine"
      ],
      warnings: "FDA Black Box: Suicidality. Monitor blood pressure closely. Do not crush/chew ER tablets or capsules.",
      clinicalNotes: "Once-daily formulation of venlafaxine. Improves adherence and tolerability compared to IR. Still has high discontinuation risk, requiring careful tapering.",
      references: "[8][20][21]"
    },
    {
      id: "desvenlafaxine",
      name: "Desvenlafaxine",
      class: "snri",
      classFull: "Serotonin-Norepinephrine Reuptake Inhibitor (SNRI)",
      brands: "Pristiq",
      formulations: "ER Tabs: 50, 100 mg",
      startingDose: "50 mg/day",
      titration: "No titration needed (starting dose is therapeutic)",
      targetDose: "50 mg/day",
      maxDose: "400 mg/day (50 mg/day is recommended; no added benefit >50 mg)",
      frequency: "QD",
      food: "± food",
      timing: "Any time (swallow whole)",
      elderlyHepatic: "Hepatic: 50 mg/day recommended; max 100 mg/day",
      renal: "Moderate (GFR 30-50): max 50 mg/day; Severe/ESRD (GFR <30): 50 mg every other day (QOD)",
      cost: "$15–30",
      se: { sexual: 1, weight: 0, gi: 2, insomnia: 1, sedation: 0, qtc: 0, anticholinergic: 0, orthostatic: 1, discontinuation: 4 },
      seDetails: "GI (nausea), Insomnia, mild blood pressure elevation, severe discontinuation syndrome",
      cyp: { cyp2d6: "Mild", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use (MAOI washout: 7 days after stopping desvenlafaxine — shorter than standard 14 days)",
        "Cross-sensitivity with venlafaxine"
      ],
      warnings: "FDA Black Box: Suicidality. High discontinuation risk. Empty capsule shell may appear in stool (non-absorbable matrix). Monitor blood pressure.",
      clinicalNotes: "Primary active metabolite of venlafaxine. Easiest SNRI to prescribe due to flat dosing (50 mg is starting and therapeutic dose). Bypasses CYP2D6 metabolism, reducing drug interactions in poor metabolizers.",
      references: "[8][18]"
    },
    {
      id: "duloxetine",
      name: "Duloxetine",
      class: "snri",
      classFull: "Serotonin-Norepinephrine Reuptake Inhibitor (SNRI)",
      brands: "Cymbalta",
      formulations: "DR Caps: 20, 30, 40, 60 mg (also 80, 90, 120 mg)",
      startingDose: "30–60 mg/day",
      titration: "May start 30 mg QD × 1 week, then increase to 60 mg QD",
      targetDose: "60 mg/day",
      maxDose: "120 mg/day",
      frequency: "QD",
      food: "± food (20–60 mg caps); Empty stomach (80–120 mg caps)",
      timing: "Any time (swallow whole - do not open, crush or chew)",
      elderlyHepatic: "Avoid in liver disease, cirrhosis, or substantial alcohol use",
      renal: "Avoid in severe renal impairment (GFR <30)",
      cost: "$4–15",
      se: { sexual: 1, weight: 1, gi: 2, insomnia: 1, sedation: 0, qtc: 0, anticholinergic: 0, orthostatic: 1, discontinuation: 3 },
      seDetails: "Nausea, dry mouth, urinary hesitation (4-6%), hyperhidrosis",
      cyp: { cyp2d6: "Moderate", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use (14-day washout)",
        "Severe renal impairment (GFR <30)",
        "Chronic liver disease, cirrhosis, or substantial alcohol use"
      ],
      warnings: "FDA Black Box: Suicidality. Avoid in liver disease (risk of hepatotoxicity, increases AUC 5-fold in cirrhosis). Watch for orthostatic hypotension. Can cause urinary retention.",
      clinicalNotes: "Excellent option for patients with comorbid chronic pain, fibromyalgia, diabetic neuropathy, or osteoarthritis due to dual mechanism. Avoid in patients with high alcohol intake.",
      references: "[8][19]"
    },
    {
      id: "levomilnacipran",
      name: "Levomilnacipran",
      class: "snri",
      classFull: "Serotonin-Norepinephrine Reuptake Inhibitor (SNRI)",
      brands: "Fetzima",
      formulations: "ER Caps: 20, 40, 80, 120 mg; Titration Pack available",
      startingDose: "20 mg/day × 2 days, then 40 mg/day",
      titration: "↑ 40 mg q ≥2 days",
      targetDose: "40–120 mg/day",
      maxDose: "120 mg/day",
      frequency: "QD",
      food: "± food",
      timing: "Any time (swallow whole)",
      elderlyHepatic: "No dosage adjustment required (any severity)",
      renal: "Moderate (GFR 30-59): Max 80 mg/day; Severe (GFR 15-29): Max 40 mg/day; ESRD: Avoid",
      cost: "$300+ (brand only)",
      se: { sexual: 1, weight: 0, gi: 2, insomnia: 1, sedation: 0, qtc: 0, anticholinergic: 0, orthostatic: 1, discontinuation: 2 },
      seDetails: "Erectile dysfunction (4-6%), Mean SBP increase of 3 mmHg, Mean HR increase of 7.4 bpm, urinary hesitation (4-6%)",
      cyp: { cyp2d6: "None", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use (MAOI washout: 7 days after stopping levomilnacipran)",
        "Cross-sensitivity with milnacipran"
      ],
      warnings: "FDA Black Box: Suicidality. Avoid alcohol (risk of rapid release of drug/dose-dumping). Max 80 mg/day with strong CYP3A4 inhibitors. Watch for tachycardia and urinary hesitation.",
      clinicalNotes: "Only SNRI requiring no hepatic adjustment. Has 2-fold higher selectivity for norepinephrine vs. serotonin reuptake inhibition compared to venlafaxine and duloxetine. Brand only, expensive.",
      references: "[15][16]"
    },
    {
      id: "milnacipran",
      name: "Milnacipran",
      class: "snri",
      classFull: "Serotonin-Norepinephrine Reuptake Inhibitor (FDA approved only for Fibromyalgia)",
      brands: "Savella",
      formulations: "IR Tabs: 12.5, 25, 50, 100 mg",
      startingDose: "12.5 mg QD (Day 1)",
      titration: "Days 2-3: 12.5 mg BID; Days 4-7: 25 mg BID; After Day 7: 50 mg BID",
      targetDose: "100 mg/day (50 mg BID)",
      maxDose: "200 mg/day",
      frequency: "BID",
      food: "± food (food improves tolerability)",
      timing: "Divided doses",
      elderlyHepatic: "No adjustment (caution in severe hepatic)",
      renal: "Severe (GFR <30): Reduce dose 50% to 50 mg/day; ESRD: Avoid",
      cost: "$30–60",
      se: { sexual: 1, weight: 0, gi: 2, insomnia: 1, sedation: 0, qtc: 0, anticholinergic: 0, orthostatic: 1, discontinuation: 2 },
      seDetails: "Nausea, headache, tachycardia, urinary hesitation, hyperhidrosis",
      cyp: { cyp2d6: "None", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use (14-day washout)",
        "Severe renal impairment (ESRD)",
        "Uncontrolled narrow-angle glaucoma"
      ],
      warnings: "FDA Black Box: Suicidality. Approved ONLY for fibromyalgia in the US, not for MDD. Monitor heart rate and blood pressure closely.",
      clinicalNotes: "Racemic mixture of levomilnacipran. Must be dosed twice daily. Excellent for fibromyalgia-related pain and fatigue, but not technically FDA approved for depression.",
      references: "[17]"
    },

    // --- Atypicals ---
    {
      id: "bupropion-sr",
      name: "Bupropion SR",
      class: "atypical",
      classFull: "Norepinephrine-Dopamine Reuptake Inhibitor (NDRI)",
      brands: "Wellbutrin SR",
      formulations: "SR Tabs: 100, 150, 200 mg",
      startingDose: "150 mg/day",
      titration: "↑ to 300 mg/day (150 mg BID) after 3 days",
      targetDose: "300 mg/day",
      maxDose: "400 mg/day (max 200 mg single dose)",
      frequency: "BID (at least 8 hours apart)",
      food: "± food",
      timing: "Morning and early afternoon (swallow whole)",
      elderlyHepatic: "Moderate-severe hepatic: max 100 mg/day or 150 mg every other day (QOD)",
      renal: "Consider reducing dose and/or frequency",
      cost: "$4–15",
      se: { sexual: 0, weight: 0, gi: 1, insomnia: 2, sedation: 0, qtc: 1, anticholinergic: 0, orthostatic: 0, discontinuation: 1 },
      seDetails: "Zero sexual side effects, weight loss (~14-19% lose >5 lbs), Insomnia/agitation, dose-dependent seizure risk",
      cyp: { cyp2d6: "Strong", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Seizure disorder",
        "History of bulimia or anorexia nervosa (associated with higher seizure risk)",
        "Abrupt discontinuation of alcohol, benzodiazepines, barbiturates, or antiepileptics",
        "Concurrent MAOI use (14-day washout)"
      ],
      warnings: "FDA Black Box: Suicidality. Dose-dependent seizure risk (avoid exceeding max single dose of 200 mg). Avoid in patients with active eating disorders. Avoid tamoxifen users (strong CYP2D6 inhibitor).",
      clinicalNotes: "Activating agent. Completely lacks sexual dysfunction and weight gain (often promotes weight loss). Excellent for patients with fatigue, hypersomnia, ADHD, or comorbid nicotine dependence (smoking cessation). Avoid at bedtime.",
      references: "[8][12][23][24]"
    },
    {
      id: "bupropion-xl",
      name: "Bupropion XL",
      class: "atypical",
      classFull: "Norepinephrine-Dopamine Reuptake Inhibitor (NDRI)",
      brands: "Wellbutrin XL, Forfivo XL (450 mg)",
      formulations: "XL Tabs: 150, 300 mg (450 mg tab available as separate brand)",
      startingDose: "150 mg/day",
      titration: "↑ to 300 mg after 4 days (MDD) or 7 days (SAD)",
      targetDose: "300 mg/day",
      maxDose: "450 mg/day",
      frequency: "QD (AM)",
      food: "± food",
      timing: "Morning (swallow whole)",
      elderlyHepatic: "Moderate-severe hepatic: max 150 mg every other day (QOD)",
      renal: "Consider reducing dose and/or frequency",
      cost: "$10–25",
      se: { sexual: 0, weight: 0, gi: 1, insomnia: 2, sedation: 0, qtc: 1, anticholinergic: 0, orthostatic: 0, discontinuation: 1 },
      seDetails: "Same as Bupropion SR",
      cyp: { cyp2d6: "Strong", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Seizure disorder",
        "History of bulimia or anorexia",
        "Abrupt withdrawal of alcohol/benzodiazepines",
        "Concurrent MAOI use"
      ],
      warnings: "FDA Black Box: Suicidality. Seizure risk. Do not open, crush, or chew tablets.",
      clinicalNotes: "Once-daily formulation of bupropion. Minimizes peak-dose seizure risk and improves patient compliance. Activating; should be taken in the morning to prevent insomnia.",
      references: "[8][24]"
    },
    {
      id: "mirtazapine",
      name: "Mirtazapine",
      class: "atypical",
      classFull: "Noradrenergic and Specific Serotonergic Antidepressant (NaSSA)",
      brands: "Remeron, Remeron SolTab",
      formulations: "Tabs: 7.5, 15, 30, 45 mg; ODT (Orally Disintegrating): 15, 30, 45 mg",
      startingDose: "15 mg/day",
      titration: "↑ q1–2 weeks",
      targetDose: "15–45 mg/day",
      maxDose: "45 mg/day",
      frequency: "QD (HS)",
      food: "± food (ODT should be placed on tongue to dissolve)",
      timing: "Bedtime (highly sedating)",
      elderlyHepatic: "Lower starting doses/slow titration in moderate-severe impairment",
      renal: "Lower starting doses/slow titration in moderate-severe impairment",
      cost: "$4–10",
      se: { sexual: 1, weight: 4, gi: 0, insomnia: 0, sedation: 4, qtc: 1, anticholinergic: 0, orthostatic: 0, discontinuation: 1 },
      seDetails: "Significant weight gain / appetite stimulation, High sedation (inverse relationship: lower doses are more antihistaminergic/sedating), dry mouth",
      cyp: { cyp2d6: "Mild", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use (14-day washout)"
      ],
      warnings: "FDA Black Box: Suicidality. Monitor for agranulocytosis (fever, sore throat, check CBC if symptomatic). ODT contains phenylalanine (caution in phenylketonuria - PKU).",
      clinicalNotes: "Blocks α2-autoreceptors and 5-HT2/3 receptors. Highly sedating at low doses (7.5-15 mg) due to H1 blockade; higher doses (30-45 mg) are more noradrenergic and less sedating. Promotes weight gain. Safe in tamoxifen users.",
      references: "[8][12][25]"
    },
    {
      id: "trazodone",
      name: "Trazodone",
      class: "atypical",
      classFull: "Serotonin Antagonist and Reuptake Inhibitor (SARI)",
      brands: "Desyrel",
      formulations: "Tabs: 50, 100, 150, 300 mg (scored/trisected)",
      startingDose: "150 mg/day (divided)",
      titration: "↑ 50 mg/day q3–4 days",
      targetDose: "150–400 mg/day",
      maxDose: "400 mg/day (outpatient); 600 mg/day (inpatient)",
      frequency: "Divided BID-TID (or single dose at HS if for sleep)",
      food: "Must be taken with food (meal or snack)",
      timing: "Bedtime (usually prescribed as low-dose bedtime adjunct)",
      elderlyHepatic: "Initiate at lower dose and titrate slowly",
      renal: "Initiate at lower dose and titrate slowly",
      cost: "$4–10",
      se: { sexual: 1, weight: 1, gi: 1, insomnia: 0, sedation: 4, qtc: 3, anticholinergic: 0, orthostatic: 3, discontinuation: 1 },
      seDetails: "Extreme sedation (used primarily for sleep), high risk of orthostatic hypotension, QTc prolongation, priapism (rare but severe)",
      cyp: { cyp2d6: "Mild", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use"
      ],
      warnings: "FDA Black Box: Suicidality. Priapism (instruct patients to seek emergency care for erections lasting >4 hours). QTc prolongation. High orthostasis risk in elderly.",
      clinicalNotes: "Weak SRI. Primarily used at low doses (25-100 mg QHS) as a non-addictive sleep aid alongside other antidepressants. Full antidepressant doses (150-400 mg) are poorly tolerated due to severe orthostasis and daytime sedation.",
      references: "[8][26]"
    },
    {
      id: "vilazodone",
      name: "Vilazodone",
      class: "atypical",
      classFull: "Selective Serotonin Reuptake Inhibitor and 5-HT1A Partial Agonist",
      brands: "Viibryd",
      formulations: "Tabs: 10, 20, 40 mg; Starter Kits available",
      startingDose: "10 mg/day × 7 days",
      titration: "↑ to 20 mg × 7 days, then to 40 mg/day",
      targetDose: "20–40 mg/day",
      maxDose: "40 mg/day",
      frequency: "QD",
      food: "Must be taken with food (absorption drops by 50-60% if fasting)",
      timing: "Any time (with a meal)",
      elderlyHepatic: "No dosage adjustment required",
      renal: "No dosage adjustment required",
      cost: "$300+ (brand only)",
      se: { sexual: 1, weight: 0, gi: 3, insomnia: 1, sedation: 0, qtc: 0, anticholinergic: 0, orthostatic: 0, discontinuation: 2 },
      seDetails: "Prominent GI side effects (severe diarrhea, nausea), mild insomnia",
      cyp: { cyp2d6: "None", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use"
      ],
      warnings: "FDA Black Box: Suicidality. Max 20 mg/day with strong CYP3A4 inhibitors. Max 80 mg/day with strong CYP3A4 inducers. Dose must be taken with food to ensure efficacy.",
      clinicalNotes: "SSRI + 5-HT1A partial agonist. Designed to have faster onset and lower rates of sexual dysfunction compared to standard SSRIs. Prominent initial diarrhea and nausea require strict titration.",
      references: "[27]"
    },
    {
      id: "vortioxetine",
      name: "Vortioxetine",
      class: "atypical",
      classFull: "Multimodal Antidepressant (SRI + 5-HT Receptor Modulator)",
      brands: "Trintellix",
      formulations: "Tabs: 5, 10, 20 mg",
      startingDose: "10 mg/day",
      titration: "↑ to 20 mg/day as tolerated; ↓ to 5 mg/day if needed",
      targetDose: "10–20 mg/day",
      maxDose: "20 mg/day (max 10 mg/day in CYP2D6 poor metabolizers)",
      frequency: "QD",
      food: "± food",
      timing: "Any time",
      elderlyHepatic: "No dosage adjustment required",
      renal: "No dosage adjustment required",
      cost: "$300+ (brand only)",
      se: { sexual: 1, weight: 0, gi: 2, insomnia: 0, sedation: 0, qtc: 0, anticholinergic: 0, orthostatic: 0, discontinuation: 2 },
      seDetails: "Nausea (most common side effect), constipation, mild pruritus",
      cyp: { cyp2d6: "None", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use (21-day washout required after stopping vortioxetine due to long half-life)"
      ],
      warnings: "FDA Black Box: Suicidality. Reduce dose by 50% with concurrent strong CYP2D6 inhibitors. May increase dose up to 3x with strong CYP inducers.",
      clinicalNotes: "Inhibits SERT and has complex agonist/antagonist activity at 5-HT1A, 1B, 1D, 3, and 7 receptors. Shows positive clinical evidence for improving cognitive symptoms of depression. Low rate of sexual dysfunction.",
      references: "[8][28]"
    },
    {
      id: "nefazodone",
      name: "Nefazodone",
      class: "atypical",
      classFull: "Serotonin Antagonist and Reuptake Inhibitor (SARI)",
      brands: "N/A (Generic)",
      formulations: "Tabs: 50, 100, 150, 200, 250 mg",
      startingDose: "200 mg/day (100 mg BID)",
      titration: "↑ 100–200 mg/day q1 week",
      targetDose: "300–600 mg/day",
      maxDose: "600 mg/day",
      frequency: "BID",
      food: "± food (food decreases bioavailability ~20%)",
      timing: "Divided doses",
      elderlyHepatic: "Use caution; avoid in active liver disease or abnormal LFTs",
      renal: "No specific adjustments",
      cost: "$30–60",
      se: { sexual: 1, weight: 1, gi: 2, insomnia: 0, sedation: 2, qtc: 0, anticholinergic: 0, orthostatic: 2, discontinuation: 1 },
      seDetails: "Nausea, constipation, sedation, orthostatic hypotension, xerostomia",
      cyp: { cyp2d6: "Mild", cyp1a2: "None", cyp2c19: "None", cyp3a4: "Strong" },
      contraindications: [
        "Active liver disease or baseline elevated transaminases",
        "Concurrent MAOI use (7-day washout required)",
        "Co-administration with triazolam, alprazolam, pimozide, carbamazepine, cisapride"
      ],
      warnings: "FDA Black Box: Hepatotoxicity (cases of liver failure requiring transplant or causing death). Strong CYP3A4 inhibitor: Contraindicated with several medications; avoid statins metabolized by CYP3A4.",
      clinicalNotes: "Low rate of sexual dysfunction. However, rarely prescribed due to the Black Box warning for life-threatening hepatotoxicity, requiring routine LFT monitoring.",
      references: "[8][29]"
    },

    // --- TCAs ---
    {
      id: "nortriptyline",
      name: "Nortriptyline",
      class: "tca",
      classFull: "Tricyclic Antidepressant (Secondary Amine)",
      brands: "Pamelor",
      formulations: "Caps: 10, 25, 50, 75 mg; Liquid: 10 mg/5 mL",
      startingDose: "25 mg QHS",
      titration: "↑ 25 mg q1 week",
      targetDose: "50–75 mg QHS",
      maxDose: "150 mg/day",
      frequency: "QD (HS)",
      food: "± food",
      timing: "Bedtime",
      elderlyHepatic: "Start 10–25 mg/day; titrate cautiously",
      renal: "No specific adjustments",
      cost: "$4–7",
      se: { sexual: 3, weight: 3, gi: 1, insomnia: 0, sedation: 3, qtc: 3, anticholinergic: 3, orthostatic: 2, discontinuation: 3 },
      seDetails: "Anticholinergic (dry mouth, constipation, urinary retention), sedation, orthostatic hypotension, QRS/QTc prolongation, weight gain",
      cyp: { cyp2d6: "None (substrate)", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use (14-day washout required)",
        "Acute recovery phase post-Myocardial Infarction (post-MI)",
        "Known cardiac arrhythmias or heart block"
      ],
      warnings: "FDA Black Box: Suicidality. Overdose lethality: Low therapeutic index; cardiotoxic in overdose (arrhythmias, QRS widening ≥0.10s is critical). ECG monitoring required before start in >40 years or heart disease.",
      clinicalNotes: "Preferred over tertiary amines (amitriptyline) due to lower anticholinergic, orthostatic, and sedative side effects. Therapeutic window is well-defined (50–150 ng/mL); levels above 150 ng/mL are actually less effective.",
      references: "[31][32][33][34][36]"
    },
    {
      id: "desipramine",
      name: "Desipramine",
      class: "tca",
      classFull: "Tricyclic Antidepressant (Secondary Amine)",
      brands: "Norpramin",
      formulations: "Tabs: 10, 25, 50, 75, 100, 150 mg",
      startingDose: "25–50 mg/day",
      titration: "↑ 25–50 mg q1 week",
      targetDose: "100–150 mg/day",
      maxDose: "300 mg/day (150 mg/day max in elderly)",
      frequency: "QD (HS) or divided",
      food: "± food",
      timing: "Bedtime or divided",
      elderlyHepatic: "Start 10–25 mg/day; Max 150 mg/day",
      renal: "No specific adjustments",
      cost: "$10–20",
      se: { sexual: 3, weight: 2, gi: 1, insomnia: 1, sedation: 2, qtc: 3, anticholinergic: 2, orthostatic: 2, discontinuation: 3 },
      seDetails: "Mild anticholinergic effects, sedation, orthostatic hypotension, QTc/QRS prolongation",
      cyp: { cyp2d6: "None (substrate)", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use",
        "Acute post-MI recovery phase",
        "Cardiac arrhythmias"
      ],
      warnings: "FDA Black Box: Suicidality. Cardiotoxicity in overdose. Monitor baseline ECG and drug levels (therapeutic threshold ≥116 ng/mL).",
      clinicalNotes: "Highly selective for norepinephrine reuptake inhibition. Least sedative and least anticholinergic of all TCAs. Good option when a TCA is indicated but sedation must be avoided.",
      references: "[31][32]"
    },
    {
      id: "amitriptyline",
      name: "Amitriptyline",
      class: "tca",
      classFull: "Tricyclic Antidepressant (Tertiary Amine)",
      brands: "Elavil",
      formulations: "Tabs: 10, 25, 50, 75, 100, 150 mg",
      startingDose: "25 mg QHS",
      titration: "↑ 25–50 mg q1 week",
      targetDose: "100–150 mg/day",
      maxDose: "300 mg/day",
      frequency: "QD (HS) or divided",
      food: "± food",
      timing: "Bedtime (highly sedating)",
      elderlyHepatic: "Start: 10 mg TID + 20 mg QHS; titrate very slowly",
      renal: "No specific adjustments",
      cost: "$4–12",
      se: { sexual: 3, weight: 4, gi: 1, insomnia: 0, sedation: 4, qtc: 4, anticholinergic: 4, orthostatic: 3, discontinuation: 3 },
      seDetails: "Severe anticholinergic side effects, strong sedation, significant weight gain, high orthostatic hypotension, QTc prolongation",
      cyp: { cyp2d6: "None (substrate)", cyp1a2: "None", cyp2c19: "None (substrate)", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use",
        "Acute post-MI phase",
        "Narrow-angle glaucoma, severe urinary retention"
      ],
      warnings: "FDA Black Box: Suicidality. High risk in elderly (Beers list). Highly toxic in overdose; cardiotoxic. Widens QRS and prolongs QTc.",
      clinicalNotes: "Terrible tolerability profile due to strong blockade of H1, M1, and α1 receptors. Often used off-label at low doses (10-50 mg QHS) for migraine prophylaxis, chronic pain, or severe insomnia rather than full depression doses.",
      references: "[31][33][36][37]"
    },
    {
      id: "imipramine",
      name: "Imipramine",
      class: "tca",
      classFull: "Tricyclic Antidepressant (Tertiary Amine)",
      brands: "Tofranil",
      formulations: "Tabs: 10, 25, 50 mg",
      startingDose: "25 mg QHS",
      titration: "↑ 25–50 mg q1 week",
      targetDose: "100–150 mg/day",
      maxDose: "300 mg/day",
      frequency: "QD (HS) or divided",
      food: "± food",
      timing: "Bedtime or divided",
      elderlyHepatic: "Start 10–25 mg QHS; titrate cautiously",
      renal: "No specific adjustments",
      cost: "$4–10",
      se: { sexual: 3, weight: 4, gi: 1, insomnia: 0, sedation: 4, qtc: 4, anticholinergic: 4, orthostatic: 3, discontinuation: 3 },
      seDetails: "Severe anticholinergic, high sedation, orthostatic hypotension, weight gain, cardiac conduction risks",
      cyp: { cyp2d6: "None (substrate)", cyp1a2: "None", cyp2c19: "None (substrate)", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use",
        "Acute post-MI recovery phase",
        "Urinary retention or glaucoma"
      ],
      warnings: "FDA Black Box: Suicidality. Cardiovascular toxicity. Check combined imipramine + desipramine plasma levels (therapeutic level: 150-300 ng/mL).",
      clinicalNotes: "One of the prototype tricyclics. High rates of side effects. Metabolized to desipramine. Monitor ECG baseline and post dose titration.",
      references: "[31][33]"
    },
    {
      id: "clomipramine",
      name: "Clomipramine",
      class: "tca",
      classFull: "Tricyclic Antidepressant (Tertiary Amine - FDA approved for OCD only)",
      brands: "Anafranil",
      formulations: "Caps: 25, 50, 75 mg",
      startingDose: "12.5–25 mg QHS",
      titration: "↑ 25–50 mg q few days to 100 mg in 2 weeks, then gradually",
      targetDose: "100–150 mg/day",
      maxDose: "250 mg/day",
      frequency: "QD (HS) after titration is complete",
      food: "± food",
      timing: "Bedtime",
      elderlyHepatic: "Start low, titrate very slowly and cautiously",
      renal: "Start low, titrate cautiously",
      cost: "$15–30",
      se: { sexual: 4, weight: 4, gi: 2, insomnia: 0, sedation: 4, qtc: 4, anticholinergic: 4, orthostatic: 3, discontinuation: 3 },
      seDetails: "Ejaculatory failure (42%), dry mouth, constipation, high sedation, increased seizure risk at high doses",
      cyp: { cyp2d6: "None (substrate)", cyp1a2: "None", cyp2c19: "None (substrate)", cyp3a4: "None" },
      contraindications: [
        "Concurrent MAOI use",
        "Acute post-MI phase",
        "Seizure disorder history (clomipramine has highest seizure risk among TCAs)"
      ],
      warnings: "FDA Black Box: Suicidality. Seizure risk increases dose-dependently. Highest rate of sexual dysfunction (especially ejaculatory failure) among all TCAs. Approved only for OCD in the US.",
      clinicalNotes: "Extremely strong serotonin reuptake inhibitor relative to other TCAs. Gold standard for treatment-resistant OCD, but side effect profile makes it difficult to tolerate.",
      references: "[35]"
    },

    // --- MAOIs ---
    {
      id: "phenelzine",
      name: "Phenelzine",
      class: "maoi",
      classFull: "Monoamine Oxidase Inhibitor (MAOI - Irreversible, Non-selective)",
      brands: "Nardil",
      formulations: "Tabs: 15 mg",
      startingDose: "15 mg TID (45 mg/day)",
      titration: "Increase rapidly to 60–90 mg based on tolerance",
      targetDose: "60 mg/day",
      maxDose: "90 mg/day (60 mg/day in elderly)",
      frequency: "TID",
      food: "Requires Tyramine-Restricted Diet",
      timing: "Divided doses",
      elderlyHepatic: "Start 7.5 mg QD; Max 60 mg/day",
      renal: "Avoid in severe renal impairment",
      cost: "$30–60",
      se: { sexual: 3, weight: 4, gi: 1, insomnia: 3, sedation: 2, qtc: 1, anticholinergic: 2, orthostatic: 4, discontinuation: 4 },
      seDetails: "Orthostatic hypotension (severe), weight gain, sexual dysfunction, insomnia, hypertensive crisis (dietary/drug interaction)",
      cyp: { cyp2d6: "None", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent serotonergic drugs (SSRIs, SNRIs, TCAs, triptans, tramadol, fentanyl, meperidine, dextromethorphan, buspirone, St. John's Wort)",
        "Sympathomimetic drugs (amphetamines, methylphenidate, cocaine, pseudoephedrine, dopamine, epinephrine)",
        "Pheochromocytoma, Congestive Heart Failure (CHF), severe renal impairment, active liver disease",
        "High-tyramine foods (aged cheese, salami, tap beer, fava beans, soy sauce)"
      ],
      warnings: "FDA Black Box: Suicidality. Tyramine reaction (hypertensive crisis) can cause fatal intracranial hemorrhage. Serotonin syndrome. Discontinue ≥10 days before elective surgery.",
      clinicalNotes: "Irreversible block of MAO-A and MAO-B. Third-line agent reserved for treatment-resistant depression, particularly with atypical features (hypersomnia, leaden paralysis, rejection sensitivity). Phenelzine is highly sedating and promotes weight gain.",
      references: "[31][39][40][41]"
    },
    {
      id: "tranylcypromine",
      name: "Tranylcypromine",
      class: "maoi",
      classFull: "Monoamine Oxidase Inhibitor (MAOI - Irreversible, Non-selective)",
      brands: "Parnate",
      formulations: "Tabs: 10 mg",
      startingDose: "30 mg/day (divided, e.g. 10 mg BID-TID)",
      titration: "↑ 10 mg/day q1–3 weeks",
      targetDose: "30–50 mg/day",
      maxDose: "60 mg/day",
      frequency: "BID–TID",
      food: "Requires Tyramine-Restricted Diet",
      timing: "Divided doses",
      elderlyHepatic: "10 mg BID starting; titrate very cautiously",
      renal: "Use caution",
      cost: "$30–80",
      se: { sexual: 3, weight: 1, gi: 1, insomnia: 3, sedation: 1, qtc: 1, anticholinergic: 2, orthostatic: 4, discontinuation: 4 },
      seDetails: "Severe orthostatic hypotension, insomnia/stimulation, hypertensive crisis (dietary/drug interaction)",
      cyp: { cyp2d6: "None", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent serotonergic or sympathomimetic drugs",
        "Pheochromocytoma, liver disease, cardiovascular disease, cerebrovascular disease",
        "High-tyramine foods"
      ],
      warnings: "FDA Black Box: Suicidality. Hypertensive crisis (treatment: phentolamine 5 mg IV). Serotonin syndrome. Insomnia is highly common.",
      clinicalNotes: "More activating/stimulating than phenelzine (resembles amphetamine structurally). Does not cause weight gain. Excellent for treatment-resistant cases before considering ECT.",
      references: "[39][42]"
    },
    {
      id: "selegiline-patch",
      name: "Selegiline Patch",
      class: "maoi",
      classFull: "Monoamine Oxidase Inhibitor (MAOI - Transdermal)",
      brands: "Emsam",
      formulations: "Transdermal Patch: 6 mg/24 hr, 9 mg/24 hr, 12 mg/24 hr",
      startingDose: "6 mg/24 hr",
      titration: "↑ 3 mg/24 hr q ≥2 weeks",
      targetDose: "6 mg/24 hr",
      maxDose: "12 mg/24 hr",
      frequency: "QD (apply to skin, replace every 24 hr)",
      food: "NO tyramine restrictions required at 6 mg/24 hr; YES at 9 & 12 mg/24 hr",
      timing: "Apply to dry, intact skin on upper torso, upper thigh, or outer upper arm",
      elderlyHepatic: "Start 6 mg/24 hr; monitor closely",
      renal: "Start 6 mg/24 hr; monitor closely",
      cost: "$300+ (brand only)",
      se: { sexual: 1, weight: 0, gi: 1, insomnia: 2, sedation: 0, qtc: 0, anticholinergic: 1, orthostatic: 2, discontinuation: 3 },
      seDetails: "Application site reaction (24%), insomnia, orthostatic hypotension (moderate)",
      cyp: { cyp2d6: "None", cyp1a2: "None", cyp2c19: "None", cyp3a4: "None" },
      contraindications: [
        "Concurrent serotonergic or sympathomimetic drugs",
        "High-tyramine foods (AT 9 AND 12 MG/24 HR ONLY)",
        "Pheochromocytoma"
      ],
      warnings: "FDA Black Box: Suicidality. Dietary restrictions are mandatory at 9 mg/24 hr and 12 mg/24 hr doses, but NOT at 6 mg/24 hr (transdermal delivery bypasses intestinal MAO-A inhibition). Rotate patch sites daily.",
      clinicalNotes: "Selective for MAO-B at low doses, but loses selectivity and inhibits MAO-A at higher doses. The 6 mg/24 hr patch is the easiest MAOI to use as it eliminates the tyramine food restriction.",
      references: "[43][44]"
    }
  ];

  const COMORBIDITIES = [
    { id: "pain", name: "Chronic Pain / Neuropathy", desc: "Prefers SNRIs (Duloxetine) or TCAs." },
    { id: "obesity", name: "Obesity / Weight Concerns", desc: "Prefers Bupropion, Fluoxetine. Avoids Mirtazapine, Paroxetine, TCAs." },
    { id: "insomnia", name: "Insomnia", desc: "Prefers Mirtazapine, Trazodone. Avoids Bupropion, Fluoxetine, Sertraline." },
    { id: "sexual", name: "Sexual Dysfunction Concerns", desc: "Prefers Bupropion, Mirtazapine, Vortioxetine. Avoids Paroxetine, Citalopram, Venlafaxine." },
    { id: "smoking", name: "Smoking Cessation", desc: "Prefers Bupropion (FDA approved)." },
    { id: "seizures", name: "Seizure Disorder", desc: "Avoids Bupropion, Clomipramine (seizure threshold lowering)." },
    { id: "cardio", name: "Cardiovascular Disease", desc: "Prefers Sertraline (best data), Escitalopram. Avoids TCAs, Nefazodone." },
    { id: "liver", name: "Liver Disease", desc: "Avoids Duloxetine (cirrhosis contraindication), Nefazodone (hepatotoxic), TCAs." },
    { id: "ckd", name: "CKD (GFR < 30)", desc: "Avoids Duloxetine (contraindicated), Desvenlafaxine, Levomilnacipran." },
    { id: "tamoxifen", name: "Tamoxifen Use", desc: "Avoids Fluoxetine, Paroxetine, Bupropion (strong CYP2D6 inhibitors)." },
    { id: "migraine", name: "Migraine Prophylaxis", desc: "Prefers Amitriptyline, Nortriptyline, Venlafaxine." },
    { id: "adhd", name: "ADHD Comorbidity", desc: "Prefers Bupropion." },
    { id: "elderly", name: "Elderly (> 65)", desc: "Prefers Escitalopram, Sertraline. Avoids Paroxetine, TCAs, Citalopram >20 mg." },
    { id: "pregnancy", name: "Pregnancy", desc: "Prefers Sertraline. Avoids Paroxetine (cardiac defects), MAOIs." }
  ];

  const comorbidityRules = {
    pain: { preferred: ['duloxetine', 'nortriptyline', 'amitriptyline', 'desipramine', 'imipramine', 'clomipramine'], avoid: [] },
    obesity: { preferred: ['bupropion-sr', 'bupropion-xl', 'fluoxetine'], avoid: ['mirtazapine', 'paroxetine-ir', 'paroxetine-cr', 'amitriptyline', 'nortriptyline', 'desipramine', 'imipramine', 'clomipramine'] },
    insomnia: { preferred: ['mirtazapine', 'trazodone'], avoid: ['bupropion-sr', 'bupropion-xl', 'fluoxetine', 'sertraline'] },
    sexual: { preferred: ['bupropion-sr', 'bupropion-xl', 'mirtazapine', 'vortioxetine', 'vilazodone'], avoid: ['paroxetine-ir', 'paroxetine-cr', 'citalopram', 'venlafaxine-ir', 'venlafaxine-xr'] },
    smoking: { preferred: ['bupropion-sr', 'bupropion-xl'], avoid: [] },
    seizures: { preferred: [], avoid: ['bupropion-sr', 'bupropion-xl', 'clomipramine'] },
    cardio: { preferred: ['sertraline', 'escitalopram'], avoid: ['amitriptyline', 'nortriptyline', 'desipramine', 'imipramine', 'clomipramine', 'nefazodone'] },
    liver: { preferred: ['escitalopram', 'desvenlafaxine', 'levomilnacipran'], avoid: ['duloxetine', 'nefazodone', 'amitriptyline', 'nortriptyline', 'desipramine', 'imipramine', 'clomipramine'] },
    ckd: { preferred: ['escitalopram', 'sertraline', 'mirtazapine'], avoid: ['duloxetine', 'desvenlafaxine', 'levomilnacipran'] },
    tamoxifen: { preferred: ['venlafaxine-ir', 'venlafaxine-xr', 'desvenlafaxine', 'citalopram', 'escitalopram', 'mirtazapine'], avoid: ['fluoxetine', 'paroxetine-ir', 'paroxetine-cr', 'bupropion-sr', 'bupropion-xl'] },
    migraine: { preferred: ['venlafaxine-ir', 'venlafaxine-xr', 'amitriptyline', 'nortriptyline'], avoid: [] },
    adhd: { preferred: ['bupropion-sr', 'bupropion-xl'], avoid: [] },
    elderly: { preferred: ['escitalopram', 'sertraline'], avoid: ['paroxetine-ir', 'paroxetine-cr', 'amitriptyline', 'nortriptyline', 'desipramine', 'imipramine', 'clomipramine', 'citalopram'] },
    pregnancy: { preferred: ['sertraline'], avoid: ['paroxetine-ir', 'paroxetine-cr', 'phenelzine', 'tranylcypromine', 'selegiline-patch'] }
  };

  // ==========================================
  // 2. STATE VARIABLES
  // ==========================================

  let currentTab = "all";
  let searchWord = "";
  let viewMode = "grid"; // 'grid' or 'table'
  let activeComorbidities = new Set();
  let pgx2d6 = "normal";
  let pgx2c19 = "normal";

  // ==========================================
  // 3. UI ELEMENT REFERENCES
  // ==========================================

  const comorbiditiesContainer = document.getElementById("comorbiditiesContainer");
  const mainDisplayArea = document.getElementById("mainDisplayArea");
  const searchInput = document.getElementById("searchInput");
  const viewToggleBtn = document.getElementById("viewToggleBtn");
  const themeBtn = document.getElementById("themeBtn");
  const tabButtons = document.querySelectorAll(".tabs-container .tab");
  const clearComorbiditiesBtn = document.getElementById("clearComorbiditiesBtn");
  const clearPGxBtn = document.getElementById("clearPGxBtn");
  const cyp2d6Select = document.getElementById("cyp2d6Select");
  const cyp2c19Select = document.getElementById("cyp2c19Select");

  // Modal references
  const modalOverlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalContent = document.getElementById("modalContent");
  const modalClassBadge = document.getElementById("modalClassBadge");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  // ==========================================
  // 4. EVENT LISTENERS
  // ==========================================

  searchInput.addEventListener("input", (e) => {
    searchWord = e.target.value.toLowerCase().trim();
    renderMainDisplay();
  });

  viewToggleBtn.addEventListener("click", () => {
    viewMode = viewMode === "grid" ? "table" : "grid";
    viewToggleBtn.innerHTML = viewMode === "grid" ? '<i class="fas fa-list"></i>' : '<i class="fas fa-th-large"></i>';
    viewToggleBtn.setAttribute("title", viewMode === "grid" ? "Switch to Table/List View" : "Switch to Grid View");
    renderMainDisplay();
  });

  themeBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");
    themeBtn.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    themeBtn.setAttribute("title", isLight ? "Toggle Dark Theme" : "Toggle Light Theme");
  });

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTab = btn.getAttribute("data-target");
      renderMainDisplay();
    });
  });

  clearComorbiditiesBtn.addEventListener("click", () => {
    activeComorbidities.clear();
    const checkboxes = comorbiditiesContainer.querySelectorAll("input");
    checkboxes.forEach(cb => cb.checked = false);
    renderMainDisplay();
  });

  clearPGxBtn.addEventListener("click", () => {
    cyp2d6Select.value = "normal";
    cyp2c19Select.value = "normal";
    pgx2d6 = "normal";
    pgx2c19 = "normal";
    renderMainDisplay();
  });

  cyp2d6Select.addEventListener("change", (e) => {
    pgx2d6 = e.target.value;
    renderMainDisplay();
  });

  cyp2c19Select.addEventListener("change", (e) => {
    pgx2c19 = e.target.value;
    renderMainDisplay();
  });

  modalCloseBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });

  // ==========================================
  // 5. DATA LOGIC & COMPUTATIONS
  // ==========================================

  function getMedicationCompatibility(med) {
    let prefReasons = [];
    let avoidReasons = [];
    
    // Evaluate comorbidities
    activeComorbidities.forEach(comorbidityId => {
      const rule = comorbidityRules[comorbidityId];
      if (rule) {
        if (rule.preferred.includes(med.id)) {
          const comorbName = COMORBIDITIES.find(c => c.id === comorbidityId).name;
          prefReasons.push(comorbName);
        }
        if (rule.avoid.includes(med.id)) {
          const comorbName = COMORBIDITIES.find(c => c.id === comorbidityId).name;
          avoidReasons.push(comorbName);
        }
      }
    });

    // Special PGx Overrides
    if (pgx2d6 === "poor" && med.cyp.cyp2d6 === "Strong") {
      avoidReasons.push("CYP2D6 Poor Metabolizer (high side effects/decreased conversion)");
    }
    if (pgx2d6 === "ultrarapid" && med.cyp.cyp2d6 === "Strong" && med.class === "tca") {
      avoidReasons.push("CYP2D6 Ultrarapid Metabolizer (reduced efficacy)");
    }
    if (pgx2c19 === "poor" && med.id === "citalopram") {
      avoidReasons.push("CYP2C19 Poor Metabolizer (QTc prolongation risk, max dose 20 mg)");
    }
    if (pgx2c19 === "poor" && med.id === "escitalopram") {
      avoidReasons.push("CYP2C19 Poor Metabolizer (high drug levels, max dose 10 mg)");
    }
    if (pgx2c19 === "ultrarapid" && (med.id === "citalopram" || med.id === "escitalopram")) {
      avoidReasons.push("CYP2C19 Ultrarapid Metabolizer (rapid clearance/decreased efficacy)");
    }

    let status = "neutral";
    if (avoidReasons.length > 0) {
      status = "avoid";
    } else if (prefReasons.length > 0) {
      status = "pref";
    }

    return { status, prefReasons, avoidReasons };
  }

  // ==========================================
  // 6. UI RENDERERS
  // ==========================================

  // Populate Sidebar Comorbidities
  function renderSidebar() {
    comorbiditiesContainer.innerHTML = "";
    COMORBIDITIES.forEach(c => {
      const container = document.createElement("label");
      container.className = "checkbox-container";
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = c.id;
      checkbox.checked = activeComorbidities.has(c.id);
      
      checkbox.addEventListener("change", (e) => {
        if (e.target.checked) {
          activeComorbidities.add(c.id);
        } else {
          activeComorbidities.delete(c.id);
        }
        renderMainDisplay();
      });

      const span = document.createElement("span");
      span.innerHTML = `<strong>${c.name}</strong><br><small style="color:var(--text-muted)">${c.desc}</small>`;

      container.appendChild(checkbox);
      container.appendChild(span);
      comorbiditiesContainer.appendChild(container);
    });
  }

  // Render main panel based on tab and state
  function renderMainDisplay() {
    mainDisplayArea.innerHTML = "";
    
    // Tab redirects
    if (currentTab === "switching") {
      renderSwitchingTool();
      updateEHRNote();
      return;
    }
    if (currentTab === "efficacy") {
      renderEfficacyDashboard();
      updateEHRNote();
      return;
    }

    // Normal meds filtering
    let baseFiltered = ANTIDEPRESSANTS;
    
    // Filter out avoid/contraindicated medications if any comorbidity/PGx override results in "avoid"
    const avoidedMeds = ANTIDEPRESSANTS.filter(m => getMedicationCompatibility(m).status === "avoid");
    const avoidedCount = avoidedMeds.length;
    
    let filtered = baseFiltered.filter(m => getMedicationCompatibility(m).status !== "avoid");
    
    if (avoidedCount > 0) {
      const banner = document.createElement("div");
      banner.className = "alert alert-warning";
      banner.style.marginBottom = "1.5rem";
      banner.style.padding = "0.75rem 1rem";
      banner.style.borderRadius = "8px";
      banner.style.fontSize = "0.85rem";
      banner.style.display = "flex";
      banner.style.alignItems = "center";
      banner.style.gap = "0.5rem";
      banner.style.border = "1px solid var(--color-avoid-border)";
      banner.style.backgroundColor = "var(--color-avoid-bg)";
      banner.style.color = "var(--color-avoid)";
      banner.innerHTML = `<i class="fas fa-eye-slash"></i> <span><strong>Note:</strong> ${avoidedCount} medication(s) contraindicated or marked as "avoid" have been filtered out of the selection pool.</span>`;
      mainDisplayArea.appendChild(banner);
    }

    // Filter by class
    if (currentTab !== "all") {
      filtered = filtered.filter(m => m.class === currentTab);
    }

    // Filter by search query
    if (searchWord !== "") {
      filtered = filtered.filter(m => 
        m.name.toLowerCase().includes(searchWord) ||
        m.brands.toLowerCase().includes(searchWord) ||
        m.classFull.toLowerCase().includes(searchWord) ||
        m.clinicalNotes.toLowerCase().includes(searchWord) ||
        m.seDetails.toLowerCase().includes(searchWord)
      );
    }

    if (filtered.length === 0) {
      mainDisplayArea.innerHTML = `<div class="stat-box" style="padding: 3rem;"><i class="fas fa-exclamation-triangle" style="font-size:2rem;color:var(--color-tca)"></i><p style="margin-top:1rem;">No medications match the current filters or search term.</p></div>`;
      return;
    }

    if (viewMode === "grid") {
      renderGridView(filtered);
    } else {
      renderTableView(filtered);
    }
    updateEHRNote();
  }

  // Grid View Rendering
  function renderGridView(meds) {
    const grid = document.createElement("div");
    grid.className = "meds-grid";

    meds.forEach(med => {
      const comp = getMedicationCompatibility(med);
      const card = document.createElement("div");
      card.className = `med-card class-${med.class}`;
      
      // Apply comorbidity styling highlights
      if (comp.status === "pref") {
        card.classList.add("card-highlight-pref");
      } else if (comp.status === "avoid") {
        card.classList.add("card-highlight-avoid");
      }

      // Sidebar warning details
      let compHTML = "";
      if (comp.status === "pref") {
        compHTML = `<div class="compatibility-banner pref"><i class="fas fa-check-circle"></i> Preferred: ${comp.prefReasons.join(", ")}</div>`;
      } else if (comp.status === "avoid") {
        compHTML = `<div class="compatibility-banner avoid"><i class="fas fa-exclamation-circle"></i> Avoid: ${comp.avoidReasons.join(", ")}</div>`;
      }

      card.innerHTML = `
        <div>
          <div class="card-header">
            <div class="card-title">
              <h3>${med.name}</h3>
              <div class="brand-names">${med.brands}</div>
            </div>
            <span class="class-pill badge-${med.class}">${med.class.toUpperCase()}</span>
          </div>
          
          ${compHTML}

          <div class="card-details">
            <div class="detail-row">
              <span class="detail-label">Starting:</span>
              <span class="detail-val">${med.startingDose}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Target:</span>
              <span class="detail-val">${med.targetDose}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Cost/mo:</span>
              <span class="detail-val" style="color: var(--color-pref)">${med.cost}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Food/Time:</span>
              <span class="detail-val">${med.food} / ${med.timing}</span>
            </div>
          </div>
        </div>

        <div class="card-se-indicators">
          <span class="se-mini-tag se-score-${med.se.sexual}" title="Sexual Dysfunction: ${med.se.sexual}/4"><i class="fas fa-heart-broken"></i> Sex: ${med.se.sexual}</span>
          <span class="se-mini-tag se-score-${med.se.weight}" title="Weight Gain: ${med.se.weight}/4"><i class="fas fa-weight"></i> Wt: ${med.se.weight}</span>
          <span class="se-mini-tag se-score-${med.se.sedation}" title="Sedation: ${med.se.sedation}/4"><i class="fas fa-bed"></i> Bed: ${med.se.sedation}</span>
          <span class="se-mini-tag se-score-${med.se.qtc}" title="QTc Prolongation: ${med.se.qtc}/4"><i class="fas fa-heartbeat"></i> QTc: ${med.se.qtc}</span>
        </div>
      `;

      card.addEventListener("click", () => showMedModal(med));
      grid.appendChild(card);
    });

    mainDisplayArea.appendChild(grid);
  }

  // Table View Rendering
  function renderTableView(meds) {
    const container = document.createElement("div");
    container.className = "table-container";

    const table = document.createElement("table");
    table.className = "meds-table";

    table.innerHTML = `
      <thead>
        <tr>
          <th>Medication</th>
          <th>Class</th>
          <th>Starting</th>
          <th>Max Dose</th>
          <th>Frequency</th>
          <th>Cost/mo</th>
          <th>Status Highlight</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;

    const tbody = table.querySelector("tbody");

    meds.forEach(med => {
      const comp = getMedicationCompatibility(med);
      const row = document.createElement("tr");

      if (comp.status === "pref") {
        row.className = "row-highlight-pref";
      } else if (comp.status === "avoid") {
        row.className = "row-highlight-avoid";
      }

      let statusBadge = `<span class="badge" style="color:var(--text-muted)">Neutral</span>`;
      if (comp.status === "pref") {
        statusBadge = `<span class="badge badge-pref">Preferred</span>`;
      } else if (comp.status === "avoid") {
        statusBadge = `<span class="badge badge-avoid">Avoid</span>`;
      }

      row.innerHTML = `
        <td><strong>${med.name}</strong><br><small style="color:var(--text-secondary)">${med.brands}</small></td>
        <td><span class="class-pill badge-${med.class}">${med.class.toUpperCase()}</span></td>
        <td>${med.startingDose}</td>
        <td>${med.maxDose}</td>
        <td>${med.frequency}</td>
        <td style="font-weight:600;color:var(--color-pref)">${med.cost}</td>
        <td>${statusBadge}</td>
      `;

      row.addEventListener("click", () => showMedModal(med));
      tbody.appendChild(row);
    });

    container.appendChild(table);
    mainDisplayArea.appendChild(container);
  }

  // Modal Detail Renderer
  function showMedModal(med) {
    modalClassBadge.className = `class-pill badge-${med.class}`;
    modalClassBadge.textContent = med.class.toUpperCase();
    modalTitle.textContent = med.name;
    modalSubtitle.textContent = `Brands: ${med.brands} | Cost: ${med.cost} / mo`;

    // Render HTML in modal content
    modalContent.innerHTML = `
      <div class="modal-grid-2">
        <div>
          <div class="modal-section">
            <h4 class="modal-section-title"><i class="fas fa-capsules"></i> Dosing & Formulations</h4>
            <div class="modal-info-block">
              <strong>Formulations:</strong> ${med.formulations}
            </div>
            <div class="modal-info-block">
              <strong>Starting:</strong> ${med.startingDose} | <strong>Titration:</strong> ${med.titration}
            </div>
            <div class="modal-info-block">
              <strong>Target Dosing:</strong> ${med.targetDose} | <strong>Max Dose:</strong> ${med.maxDose}
            </div>
            <div class="modal-info-block">
              <strong>Administration:</strong> Take ${med.frequency} | Timing: ${med.timing} (${med.food})
            </div>
          </div>
          
          <div class="modal-section">
            <h4 class="modal-section-title"><i class="fas fa-sliders-h"></i> Hepatic / Renal Adjustments</h4>
            <div class="modal-info-block">
              <strong>Hepatic / Elderly:</strong> ${med.elderlyHepatic}
            </div>
            <div class="modal-info-block">
              <strong>Renal Dosing:</strong> ${med.renal}
            </div>
          </div>
        </div>

        <div>
          <div class="modal-section">
            <h4 class="modal-section-title"><i class="fas fa-heart-broken"></i> Side-Effect Ratings (NCCN 0-4)</h4>
            <table class="modal-se-table">
              <tr>
                <td><strong>Sexual Dysfunction:</strong></td>
                <td><span class="se-mini-tag se-score-${med.se.sexual}">${med.se.sexual} / 4</span></td>
              </tr>
              <tr>
                <td><strong>Weight Gain:</strong></td>
                <td><span class="se-mini-tag se-score-${med.se.weight}">${med.se.weight} / 4</span></td>
              </tr>
              <tr>
                <td><strong>GI Nausea/Diarrhea:</strong></td>
                <td><span class="se-mini-tag se-score-${med.se.gi}">${med.se.gi} / 4</span></td>
              </tr>
              <tr>
                <td><strong>Insomnia/Agitation:</strong></td>
                <td><span class="se-mini-tag se-score-${med.se.insomnia}">${med.se.insomnia} / 4</span></td>
              </tr>
              <tr>
                <td><strong>Sedation/Somnolence:</strong></td>
                <td><span class="se-mini-tag se-score-${med.se.sedation}">${med.se.sedation} / 4</span></td>
              </tr>
              <tr>
                <td><strong>QTc Prolongation:</strong></td>
                <td><span class="se-mini-tag se-score-${med.se.qtc}">${med.se.qtc} / 4</span></td>
              </tr>
              <tr>
                <td><strong>Anticholinergic:</strong></td>
                <td><span class="se-mini-tag se-score-${med.se.anticholinergic}">${med.se.anticholinergic} / 4</span></td>
              </tr>
              <tr>
                <td><strong>Orthostatic Hypotension:</strong></td>
                <td><span class="se-mini-tag se-score-${med.se.orthostatic}">${med.se.orthostatic} / 4</span></td>
              </tr>
              <tr>
                <td><strong>Discontinuation Risk:</strong></td>
                <td><span class="se-mini-tag se-score-${med.se.discontinuation}">${med.se.discontinuation} / 4</span></td>
              </tr>
            </table>
            <p style="font-size:0.75rem;color:var(--text-secondary);margin-top:0.5rem"><em>Details: ${med.seDetails}</em></p>
          </div>
        </div>
      </div>

      <div class="modal-section border-top" style="padding-top:1rem">
        <h4 class="modal-section-title" style="color:var(--color-avoid)"><i class="fas fa-exclamation-triangle"></i> Contraindications & Warnings</h4>
        <div class="modal-info-block" style="border-left: 3px solid var(--color-avoid)">
          <ul style="padding-left:1.25rem">
            ${med.contraindications.map(c => `<li>${c}</li>`).join("")}
          </ul>
        </div>
        <div class="modal-info-block" style="border-left: 3px solid var(--color-tca)">
          <strong>Prescribing Warnings:</strong> ${med.warnings}
        </div>
      </div>

      <div class="modal-section border-top" style="padding-top:1rem">
        <h4 class="modal-section-title"><i class="fas fa-dna"></i> CYP450 Interactions</h4>
        <div class="modal-info-block">
          <strong>CYP2D6:</strong> ${med.cyp.cyp2d6} | 
          <strong>CYP1A2:</strong> ${med.cyp.cyp1a2} | 
          <strong>CYP2C19:</strong> ${med.cyp.cyp2c19} | 
          <strong>CYP3A4:</strong> ${med.cyp.cyp3a4}
        </div>
      </div>

      <div class="modal-section border-top" style="padding-top:1rem">
        <h4 class="modal-section-title"><i class="fas fa-info-circle"></i> Clinical Practice Insights</h4>
        <p style="line-height:1.5;margin-bottom:0.5rem">${med.clinicalNotes}</p>
        <p style="font-size:0.75rem;color:var(--text-muted)">References: ${med.references}</p>
      </div>
    `;

    modalOverlay.classList.add("active");
  }

  // Efficacy and rankings tab renderer
  function renderEfficacyDashboard() {
    mainDisplayArea.innerHTML = `
      <div class="efficacy-dashboard content-fade">
        <div class="efficacy-header">
          <h2>Cipriani et al. 2018 Lancet Efficacy rankings</h2>
          <p style="color:var(--text-secondary)">Definitive comparative network meta-analysis of 21 antidepressants (522 RCTs, 116,477 patients).</p>
        </div>

        <div class="stats-container">
          <div class="stat-box">
            <div class="stat-num">50%</div>
            <div class="stat-desc">Antidepressant Response Rate (vs. ~30% placebo)</div>
          </div>
          <div class="stat-box">
            <div class="stat-num">37%</div>
            <div class="stat-desc">First-trial Remission Rate (STAR*D Level 1)</div>
          </div>
          <div class="stat-box">
            <div class="stat-num">7</div>
            <div class="stat-desc">NNT for SSRIs (SNRIs = 6, TCAs = 9)</div>
          </div>
          <div class="stat-box">
            <div class="stat-num">4</div>
            <div class="stat-desc">NNT for Severe Depression (Mild-Mod = 16)</div>
          </div>
        </div>

        <div class="efficacy-grid">
          <div class="efficacy-card tier-top">
            <h3><i class="fas fa-trophy"></i> Tier 1: Top Efficacy</h3>
            <div class="efficacy-item-list">
              <div class="efficacy-list-row"><span>Amitriptyline</span> <strong>OR: 2.13</strong></div>
              <div class="efficacy-list-row"><span>Mirtazapine</span> <strong>OR: ~1.89</strong></div>
              <div class="efficacy-list-row"><span>Escitalopram</span> <strong>OR: ~1.68</strong></div>
              <div class="efficacy-list-row"><span>Venlafaxine</span> <strong>OR: ~1.66</strong></div>
              <div class="efficacy-list-row"><span>Paroxetine</span> <strong>OR: ~1.65</strong></div>
            </div>
            <p style="font-size:0.75rem;color:var(--text-secondary);margin-top:1rem"><em>Amitriptyline and Venlafaxine show high efficacy but also higher discontinuation rates. Escitalopram has the top acceptability ranking.</em></p>
          </div>

          <div class="efficacy-card tier-upper-mid">
            <h3><i class="fas fa-check-circle"></i> Tier 2: Upper-Middle</h3>
            <div class="efficacy-item-list">
              <div class="efficacy-list-row"><span>Bupropion</span> <strong>OR: ~1.58</strong></div>
              <div class="efficacy-list-row"><span>Duloxetine</span> <strong>OR: ~1.55</strong></div>
              <div class="efficacy-list-row"><span>Sertraline</span> <strong>OR: ~1.54</strong></div>
              <div class="efficacy-list-row"><span>Citalopram</span> <strong>OR: ~1.52</strong></div>
              <div class="efficacy-list-row"><span>Fluoxetine</span> <strong>OR: ~1.52</strong></div>
            </div>
            <p style="font-size:0.75rem;color:var(--text-secondary);margin-top:1rem"><em>Sertraline, citalopram, and fluoxetine show the highest acceptability (lowest trial dropout rates) alongside escitalopram.</em></p>
          </div>

          <div class="efficacy-card tier-lower-mid">
            <h3><i class="fas fa-info-circle"></i> Tier 3: Lower-Middle</h3>
            <div class="efficacy-item-list">
              <div class="efficacy-list-row"><span>Desvenlafaxine</span> <strong>OR: ~1.49</strong></div>
              <div class="efficacy-list-row"><span>Vilazodone</span> <strong>OR: ~1.48</strong></div>
              <div class="efficacy-list-row"><span>Levomilnacipran</span> <strong>OR: ~1.44</strong></div>
              <div class="efficacy-list-row"><span>Nefazodone</span> <strong>OR: ~1.43</strong></div>
            </div>
            <p style="font-size:0.75rem;color:var(--text-secondary);margin-top:1rem"><em>Mid-range efficacy with standard clinical profiles.</em></p>
          </div>

          <div class="efficacy-card tier-lower">
            <h3><i class="fas fa-exclamation-triangle"></i> Tier 4: Lower Efficacy</h3>
            <div class="efficacy-item-list">
              <div class="efficacy-list-row"><span>Fluvoxamine</span> <strong>OR: ~1.42</strong></div>
              <div class="efficacy-list-row"><span>Trazodone</span> <strong>OR: ~1.38</strong></div>
              <div class="efficacy-list-row"><span>Reboxetine (non-US)</span> <strong>OR: 1.37</strong></div>
            </div>
            <p style="font-size:0.75rem;color:var(--text-secondary);margin-top:1rem"><em>Fluvoxamine has high dropouts in depression studies; trazodone is rarely used as monotherapy due to sedation.</em></p>
          </div>
        </div>

        <div class="efficacy-card" style="margin-top: 1rem">
          <h3><i class="fas fa-arrow-up"></i> Augmentation Strategy Reference (STAR*D Guided)</h3>
          <div style="font-size:0.85rem;line-height:1.6">
            <p>If a patient demonstrates a partial response to monotherapy, consider these evidence-based augmentation steps:</p>
            <ul style="padding-left:1.5rem;margin-top:0.5rem">
              <li><strong>Add atypical antipsychotic:</strong> Aripiprazole (2.5–15 mg/day) or Brexpiprazole (0.5–3 mg/day) has the strongest evidence base. Watch for akathisia and weight gain.</li>
              <li><strong>Add bupropion:</strong> Add Bupropion SR/XL (150–300 mg/day). This is highly useful for offsetting SSRI-induced sexual dysfunction.</li>
              <li><strong>Add mirtazapine:</strong> Mirtazapine (15–45 mg QHS) added to an SNRI (e.g., Venlafaxine) is colloquially known as "California Rocket Fuel" for TRD.</li>
              <li><strong>Add lithium:</strong> Lithium (300–600 mg/day, target blood level 0.4–0.8 mEq/L) has moderate augmentation evidence. Requires thyroid and renal monitoring.</li>
              <li><strong>Add thyroid hormone:</strong> Liothyronine (T3) at 25–50 μg/day can benefit even euthyroid patients.</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // Interactive cross-tapering/switching calculator
  function renderSwitchingTool() {
    mainDisplayArea.innerHTML = `
      <div class="switching-dashboard content-fade">
        <div class="efficacy-header" style="border:none;padding:0">
          <h2>Interactive Drug Switching Calculator</h2>
          <p style="color:var(--text-secondary)">Select the patient's current medication and target medication to calculate clinically guided titration & washout strategies.</p>
        </div>

        <div class="switching-selectors">
          <div class="switching-box">
            <label for="switchFrom">Switch From (Current Drug):</label>
            <select id="switchFrom" class="styled-select" style="padding:0.75rem">
              ${ANTIDEPRESSANTS.map(m => `<option value="${m.id}">${m.name} (${m.class.toUpperCase()})</option>`).join("")}
            </select>
          </div>

          <div class="switching-arrow">
            <i class="fas fa-exchange-alt"></i>
          </div>

          <div class="switching-box">
            <label for="switchTo">Switch To (Target Drug):</label>
            <select id="switchTo" class="styled-select" style="padding:0.75rem">
              ${ANTIDEPRESSANTS.map(m => `<option value="${m.id}">${m.name} (${m.class.toUpperCase()})</option>`).join("")}
            </select>
          </div>
        </div>

        <div class="switching-result" id="switchingResult" style="display:block">
          <!-- Computed dynamically -->
        </div>
      </div>
    `;

    const switchFrom = document.getElementById("switchFrom");
    const switchTo = document.getElementById("switchTo");
    const switchingResult = document.getElementById("switchingResult");

    function computeSwitchingGuidance() {
      const fromId = switchFrom.value;
      const toId = switchTo.value;

      if (fromId === toId) {
        switchingResult.innerHTML = `
          <div class="switching-alert no-washout">
            <i class="fas fa-info-circle"></i> Same medication selected. Please select a different drug to compute switching advice.
          </div>
        `;
        return;
      }

      const fromDrug = ANTIDEPRESSANTS.find(m => m.id === fromId);
      const toDrug = ANTIDEPRESSANTS.find(m => m.id === toId);

      let washout = "None required";
      let alertClass = "no-washout";
      let strategyTitle = "Cross-Taper Guidelines";
      let steps = [];

      // MAOI Rule 1: Switch from anything TO an MAOI
      if (toDrug.class === "maoi") {
        strategyTitle = "Washout Required (Mandatory Safety Delay)";
        alertClass = "";
        
        if (fromDrug.id === "fluoxetine") {
          washout = "5 Weeks (35 days)";
          steps = [
            "Stop Fluoxetine immediately.",
            "Wait exactly 5 weeks (35 days) for active metabolite norfluoxetine to clear from the body.",
            "Do NOT initiate the MAOI during this time. Serotonergic drugs combined with MAOIs can cause fatal serotonin syndrome.",
            "After 5 weeks, initiate the MAOI at the starting dose (e.g. Selegiline patch 6 mg/24hr or Phenelzine 15 mg TID)."
          ];
        } else if (fromDrug.id === "vortioxetine") {
          washout = "3 Weeks (21 days)";
          steps = [
            "Stop Vortioxetine.",
            "Wait exactly 21 days due to the long half-life and complex receptor blockade of Vortioxetine.",
            "After 21 days, initiate the MAOI at a standard starting dose."
          ];
        } else {
          washout = "2 Weeks (14 days)";
          steps = [
            "Gradually taper and stop the current drug over 1–2 weeks.",
            "Wait exactly 14 days after the final dose of the antidepressant before starting the MAOI.",
            "Do NOT use triptans, tramadol, fentanyl, or OTC dextromethorphan/pseudoephedrine during this washout period."
          ];
        }
      }
      // MAOI Rule 2: Switch from MAOI TO anything else
      else if (fromDrug.class === "maoi") {
        strategyTitle = "Washout Required (Mandatory Safety Delay)";
        alertClass = "";
        washout = "2 Weeks (14 days)";
        steps = [
          "Stop the MAOI (e.g. Phenelzine, Tranylcypromine, or Emsam patch).",
          "Wait exactly 14 days (2 weeks). This allows the body to regenerate new monoamine oxidase enzymes.",
          "Do NOT start the new antidepressant during this 14-day window. Doing so carries a high risk of hypertensive crisis and serotonin syndrome.",
          "Maintain tyramine dietary restrictions for the entire 14-day washout period (unless on selegiline 6 mg patch).",
          "After 14 days, start the new antidepressant at a conservative starting dose."
        ];
      }
      // Fluoxetine Rule: Switch from Fluoxetine to non-MAOI
      else if (fromDrug.id === "fluoxetine") {
        if (toDrug.id === "paroxetine-ir" || toDrug.id === "paroxetine-cr") {
          strategyTitle = "Cautioned Direct Switch";
          washout = "1 Week";
          steps = [
            "Stop Fluoxetine.",
            "Wait 7 days due to Fluoxetine's long half-life and strong CYP2D6 inhibition (which would elevate paroxetine levels significantly).",
            "Initiate Paroxetine at a low starting dose (e.g., 10 mg IR or 12.5 mg CR)."
          ];
        } else {
          strategyTitle = "Direct Switch / Minimal Taper";
          steps = [
            "Fluoxetine self-tapers due to its extremely long half-life (~4-16 days for norfluoxetine).",
            "Simply stop Fluoxetine.",
            "The following day, start the new antidepressant at its low starting dose.",
            "No active cross-tapering is required for most agents due to the long clearance profile."
          ];
        }
      }
      // Standard same class rule (SSRI -> SSRI or SNRI -> SNRI)
      else if (fromDrug.class === toDrug.class) {
        strategyTitle = "Cross-Taper (Same Drug Class)";
        steps = [
          `Gradually reduce the dose of ${fromDrug.name} by ~25-50% every 3–7 days.`,
          `Simultaneously start ${toDrug.name} at a low dose (e.g., half starting dose) and titrate up.`,
          `Example titration: Reduce ${fromDrug.name} to minimum clinical dose for 4 days, then stop and start ${toDrug.name} at therapeutic starting dose.`
        ];
      }
      // Standard cross-class rule (SSRI -> SNRI / Atypical / TCA)
      else {
        strategyTitle = "Cross-Taper Guidelines";
        
        if (toDrug.id === "mirtazapine") {
          steps = [
            `Mirtazapine can be added safely to a tapering dose of ${fromDrug.name}.`,
            `Reduce ${fromDrug.name} dose by 50% for 1 week.`,
            `On day 1 of the taper, add Mirtazapine 15 mg at bedtime.`,
            `After 1 week, stop ${fromDrug.name} completely and increase Mirtazapine to target dose (30 mg) if clinically indicated.`
          ];
        } else if (toDrug.class === "tca") {
          steps = [
            `Taper ${fromDrug.name} slowly. Note that SSRIs/SNRIs can inhibit CYP2D6 and increase TCA levels.`,
            `Start the TCA at a very low dose (e.g., Nortriptyline 10-25 mg QHS) while tapering the ${fromDrug.name}.`,
            `Avoid rapid increases in the TCA dose until the ${fromDrug.name} has cleared. Consider checking plasma TCA levels if toxicity is suspected.`
          ];
        } else {
          steps = [
            `Taper the dose of ${fromDrug.name} by 25–50% every 4–7 days.`,
            `Once ${fromDrug.name} is at its lowest dose, introduce ${toDrug.name} at its starting dose.`,
            `Gradually titrate ${toDrug.name} to target while completing the discontinuation of ${fromDrug.name}.`
          ];
        }
      }

      switchingResult.innerHTML = `
        <div class="switching-alert ${alertClass}">
          <i class="fas fa-exclamation-triangle"></i> <strong>Washout Required:</strong> ${washout}
        </div>
        <div class="switching-steps">
          <h4>${strategyTitle}</h4>
          <ol>
            ${steps.map(s => `<li>${s}</li>`).join("")}
          </ol>
          <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 1rem; line-height:1.3">
            <em>Disclaimer: Clinical judgment must guide all switching strategies. Watch for signs of antidepressant discontinuation syndrome (FINISH mnemonic: Flu-like, Insomnia, Nausea, Imbalance, Sensory, Hyperarousal) or serotonin toxicity during cross-tapering.</em>
          </p>
        </div>
      `;
    }

    switchFrom.addEventListener("change", computeSwitchingGuidance);
    switchTo.addEventListener("change", computeSwitchingGuidance);

    // Initial computation
    computeSwitchingGuidance();
  }

  function updateEHRNote() {
    const comorbiditiesArr = Array.from(activeComorbidities);
    const note = `ANTIDEPRESSANT CLINICAL DECISION NOTE
--------------------------------------------------
ACTIVE PATIENT CLINICAL FACTORS:
- Comorbidities/Syms Selected: ${comorbiditiesArr.length > 0 ? comorbiditiesArr.join(', ') : 'None'}
- CYP2D6 Status: ${pgx2d6.toUpperCase()}
- CYP2C19 Status: ${pgx2c19.toUpperCase()}
- Current View/Tab: ${currentTab.toUpperCase()}

CLINICAL RECOMMENDATIONS:
- Screened preferred vs. avoid antidepressant options based on comorbidity profile and PGx metabolizer guidelines.
- Checked drug safety thresholds and drug-drug interactions.
- Tapering and cross-titration instructions checked if switching was simulated.`;

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
          alert('Antidepressant Clinical Note copied to clipboard!');
        });
      }
    });
  }

  // ==========================================
  // 7. INITIALIZATION
  // ==========================================

  renderSidebar();
  renderMainDisplay();

});

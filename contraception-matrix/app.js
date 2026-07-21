// Clinical Decision Matrix Data & Safety Engine

const RISK_FACTORS = [
  { id: 'age_35_smoker_15', label: 'Age \u226535 & Smoke \u226515 cigs/day', category: 'Habits / Age' },
  { id: 'postpartum_lt_21', label: 'Postpartum < 21 days', category: 'Pregnancy / Postpartum' },
  { id: 'dvt_pe_history', label: 'History / Current DVT or PE', category: 'Cardiovascular' },
  { id: 'thrombogenic_mutations', label: 'Known Thrombogenic Mutation (Factor V, etc.)', category: 'Cardiovascular' },
  { id: 'stroke_history', label: 'History of Stroke / CVA', category: 'Cardiovascular' },
  { id: 'ischemic_heart_disease', label: 'Ischemic Heart Disease / CAD', category: 'Cardiovascular' },
  { id: 'migraine_aura', label: 'Migraine with Aura (any age)', category: 'Neurological' },
  { id: 'migraine_no_aura_gt35', label: 'Migraine without Aura (Age \u226535)', category: 'Neurological' },
  { id: 'htn_controlled', label: 'Hypertension (Controlled or Mild/Moderate: SBP 140\u2013159 or DBP 90\u201399)', category: 'Cardiovascular' },
  { id: 'sbp_gt160_dbp_gt100', label: 'Severe Hypertension (SBP \u2265160 or DBP \u2265100, or with vascular disease)', category: 'Cardiovascular' },
  { id: 'cardio_valvular', label: 'Complicated Valvular Heart Disease', category: 'Cardiovascular' },
  { id: 'cardio_risk_factors', label: 'Multiple Cardiovascular Risk Factors', category: 'Cardiovascular' },
  { id: 'sickle_cell', label: 'Sickle Cell Disease', category: 'Hematological' },
  { id: 'nephrotic_dialysis', label: 'Nephrotic Syndrome, Hemodialysis, or Peritoneal Dialysis', category: 'Renal' },
  { id: 'breast_cancer', label: 'Current / History of Breast Cancer', category: 'Oncology' },
  { id: 'cervical_uterine_cancer', label: 'Uterine / Cervical Malignancy', category: 'Oncology' },
  { id: 'liver_disease', label: 'Severe Cirrhosis, Hepatocellular Adenoma, or Hepatoma', category: 'Hepatic' },
  { id: 'sle_antiphospholipid', label: 'SLE with Positive/Unknown Antiphospholipid Antibodies', category: 'Immunological' },
  { id: 'uterine_anomaly', label: 'Uterine Cavity Anomaly (Distorting cavity)', category: 'Gynecological' },
  { id: 'pid_acute_or_history', label: 'Acute PID or Postpartum Endometritis in past 3 months', category: 'Gynecological' },
  { id: 'untreated_cervicitis_vaginitis', label: 'Untreated Cervicitis or Vaginitis (incl. GC/CT)', category: 'Gynecological' },
  { id: 'wilson_disease', label: "Wilson's Disease", category: 'Other Medical' },
  { id: 'copper_allergy', label: 'Copper Allergy', category: 'Other Medical' },
  { id: 'renal_impairment', label: 'Renal Impairment / Insufficiency', category: 'Renal' },
  { id: 'hyperkalemia', label: 'Hyperkalemia', category: 'Other Medical' },
  { id: 'diabetes_microvascular', label: 'Diabetes with Microvascular Disease > 20 yrs', category: 'Endocrine' },
];

const INTERACTING_DRUGS = [
  { id: 'rifampin', label: 'Rifampin / Rifabutin', category: 'CYP3A4 Inducer' },
  { id: 'antiepileptics', label: 'Anticonvulsants (Phenytoin, Carbamazepine, Topiramate, Oxcarbazepine, Phenobarbital, Felbamate)', category: 'CYP3A4 Inducer' },
  { id: 'lamotrigine', label: 'Lamotrigine', category: 'Mood Stabilizer / Antiepileptic' },
  { id: 'efavirenz', label: 'Efavirenz', category: 'HIV Medication' },
  { id: 'st_johns_wort', label: "St. John's Wort", category: 'Herbal Supplement' },
  { id: 'ppis', label: 'Proton Pump Inhibitors (PPIs, e.g. Esomeprazole)', category: 'GI Medication' },
];

const CONTRACEPTIVES = [
  // SECTION I: COMBINED HORMONAL CONTRACEPTIVES (CHCs)
  {
    id: 'chc_coc_ee30_lng',
    section: 1,
    name: 'EE 30 \u03bcg / levonorgestrel 0.15 mg',
    type: 'Combined Oral Contraceptive (COC)',
    hormoneType: 'Estrogen + 2nd-gen progestin',
    dosing: 'Fixed daily pill',
    regimen: '21/7 or 84/7 (extended) or 365-day continuous',
    cost: '$9\u2013$30',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Most studied; lowest VTE risk among CHCs; extended-cycle option reduces withdrawal bleeds to 4/year.',
    chcRules: true
  },
  {
    id: 'chc_coc_ee20_lng',
    section: 1,
    name: 'EE 20 \u03bcg / levonorgestrel 0.1 mg',
    type: 'Combined Oral Contraceptive (COC)',
    hormoneType: 'Estrogen + 2nd-gen progestin',
    dosing: 'Fixed daily pill',
    regimen: '21/7',
    cost: '$9\u2013$30',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Lower estrogen; more breakthrough bleeding; no proven VTE reduction vs. 30 \u03bcg formulation.',
    chcRules: true
  },
  {
    id: 'chc_coc_ee35_norethindrone',
    section: 1,
    name: 'EE 35 \u03bcg / norethindrone 0.5\u20131 mg',
    type: 'Combined Oral Contraceptive (COC)',
    hormoneType: 'Estrogen + 1st-gen progestin',
    dosing: 'Fixed daily pill',
    regimen: '21/7',
    cost: '$9\u2013$25',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Mildly androgenic; good for patients with low libido.',
    chcRules: true
  },
  {
    id: 'chc_coc_ee20_norethindrone_ac',
    section: 1,
    name: 'EE 20 \u03bcg / norethindrone acetate 1 mg',
    type: 'Combined Oral Contraceptive (COC)',
    hormoneType: 'Estrogen + 1st-gen progestin',
    dosing: 'Fixed daily pill',
    regimen: '21/7 or 24/4',
    cost: '$15\u2013$35',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Lower estrogen dose; 24/4 regimen may improve cycle control.',
    chcRules: true
  },
  {
    id: 'chc_coc_ee35_norgestimate_mono',
    section: 1,
    name: 'EE 35 \u03bcg / norgestimate 0.25 mg',
    type: 'Combined Oral Contraceptive (COC)',
    hormoneType: 'Estrogen + 3rd-gen progestin',
    dosing: 'Fixed daily pill',
    regimen: '21/7',
    cost: '$9\u2013$30',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Low androgenicity; FDA-approved for acne treatment.',
    chcRules: true
  },
  {
    id: 'chc_coc_ee35_norgestimate_tri',
    section: 1,
    name: 'EE 35 \u03bcg / norgestimate 0.18/0.215/0.25 mg',
    type: 'Combined Oral Contraceptive (COC)',
    hormoneType: 'Estrogen + 3rd-gen progestin',
    dosing: 'Triphasic daily pill',
    regimen: '21/7',
    cost: '$9\u2013$35',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'No proven clinical advantage over monophasic; FDA-approved for acne.',
    chcRules: true
  },
  {
    id: 'chc_coc_ee30_desogestrel',
    section: 1,
    name: 'EE 30 \u03bcg / desogestrel 0.15 mg',
    type: 'Combined Oral Contraceptive (COC)',
    hormoneType: 'Estrogen + 3rd-gen progestin',
    dosing: 'Fixed daily pill',
    regimen: '21/7',
    cost: '$15\u2013$35',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Low androgenicity; may have slightly higher VTE risk than 2nd generation (clinical studies conflicting).',
    chcRules: true
  },
  {
    id: 'chc_coc_ee30_drospirenone',
    section: 1,
    name: 'EE 30 \u03bcg / drospirenone 3 mg',
    type: 'Combined Oral Contraceptive (COC)',
    hormoneType: 'Estrogen + anti-androgenic progestin',
    dosing: 'Fixed daily pill',
    regimen: '21/7',
    cost: '$15\u2013$40',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Anti-mineralocorticoid (equivalent to ~25 mg spironolactone); monitor K\u207a if taken with ACEi/ARB/K\u207a-sparing diuretics; anti-androgenic - good for acne and PCOS.',
    chcRules: true,
    drospirenoneRules: true
  },
  {
    id: 'chc_coc_ee20_drospirenone',
    section: 1,
    name: 'EE 20 \u03bcg / drospirenone 3 mg',
    type: 'Combined Oral Contraceptive (COC)',
    hormoneType: 'Estrogen + anti-androgenic progestin',
    dosing: 'Fixed daily pill',
    regimen: '24/4',
    cost: '$15\u2013$40',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Same drospirenone potassium cautions; shorter hormone-free interval improves typical use efficacy.',
    chcRules: true,
    drospirenoneRules: true
  },
  {
    id: 'chc_coc_estradiol_dienogest',
    section: 1,
    name: 'Estradiol valerate / dienogest',
    type: 'Combined Oral Contraceptive (COC)',
    hormoneType: 'Bioidentical estrogen + anti-androgenic progestin',
    dosing: 'Quadriphasic daily pill',
    regimen: '26 active + 2 inert days',
    cost: '$30\u2013$60',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Days 1-2: E2V 3mg; Days 3-7: E2V 2mg + DNG 2mg; Days 8-24: E2V 2mg + DNG 3mg; Days 25-26: E2V 1mg; Days 27-28: inert. Also FDA-approved for heavy menstrual bleeding. Start Day 1 + 9 days backup.',
    chcRules: true
  },
  {
    id: 'chc_coc_estetrol_drospirenone',
    section: 1,
    name: 'Estetrol 15 mg / drospirenone 3 mg',
    type: 'Combined Oral Contraceptive (COC)',
    hormoneType: 'Novel estrogen (E4) + anti-androgenic progestin',
    dosing: 'Fixed daily pill',
    regimen: '24/4',
    cost: '$30\u2013$50',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Newest COC (FDA 2021); Pearl Index 2.65; potentially lower thrombotic impact based on neutral hemostasis markers (large Phase 4 VTE safety studies pending).',
    chcRules: true,
    drospirenoneRules: true
  },
  {
    id: 'chc_coc_ee35_ethynodiol',
    section: 1,
    name: 'EE 35 \u03bcg / ethynodiol diacetate 1 mg',
    type: 'Combined Oral Contraceptive (COC)',
    hormoneType: 'Estrogen + 1st-gen progestin',
    dosing: 'Fixed daily pill',
    regimen: '21/7',
    cost: '$15\u2013$30',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Mildly androgenic formulation.',
    chcRules: true
  },
  {
    id: 'chc_coc_ee30_norgestrel',
    section: 1,
    name: 'EE 30 \u03bcg / norgestrel 0.3 mg',
    type: 'Combined Oral Contraceptive (COC)',
    hormoneType: 'Estrogen + 2nd-gen progestin',
    dosing: 'Fixed daily pill',
    regimen: '21/7',
    cost: '$9\u2013$25',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Moderately androgenic formulation.',
    chcRules: true
  },
  {
    id: 'chc_patch_norelgestromin',
    section: 1,
    name: 'Norelgestromin / ethinyl estradiol',
    type: 'Transdermal Patch',
    hormoneType: 'Estrogen + progestin (NGMN 150 \u03bcg + EE 35 \u03bcg/day)',
    dosing: 'Apply 1 patch/week \u00d7 3 weeks, then 1 week off',
    regimen: 'Abdomen, buttock, upper outer arm, upper torso',
    cost: '$30\u2013$150',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: '~60% higher total EE exposure than 35 \u03bcg pill; reduced efficacy if BMI \u226530; do NOT apply to breast.',
    chcRules: true,
    patchRules: true
  },
  {
    id: 'chc_patch_levonorgestrel',
    section: 1,
    name: 'Levonorgestrel / ethinyl estradiol',
    type: 'Transdermal Patch',
    hormoneType: 'Estrogen + progestin (LNG 120 \u03bcg + EE 30 \u03bcg/day)',
    dosing: 'Apply 1 patch/week \u00d7 3 weeks, then 1 week off',
    regimen: 'Abdomen, buttock, upper torso',
    cost: '$50\u2013$150',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Reduced efficacy if BMI \u226530.',
    chcRules: true,
    patchRules: true
  },
  {
    id: 'chc_ring_etonogestrel',
    section: 1,
    name: 'Etonogestrel / ethinyl estradiol',
    type: 'Vaginal Ring',
    hormoneType: 'Estrogen + progestin (ENG 120 \u03bcg + EE 15 \u03bcg/day)',
    dosing: 'Single-use ring inserted for 21 days, removed for 7 days',
    regimen: 'Insert vaginal ring 21 days \u2192 remove 7 days \u2192 new ring',
    cost: '$30\u2013$75',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Lowest EE dose of any CHC; better cycle control and fewer systemic side effects (nausea, mood) than COCs; more vaginal discharge.',
    chcRules: true
  },
  {
    id: 'chc_ring_segesterone',
    section: 1,
    name: 'Segesterone acetate / ethinyl estradiol',
    type: 'Vaginal Ring',
    hormoneType: 'Estrogen + progestin (SA 150 \u03bcg + EE 13 \u03bcg/day)',
    dosing: '1 ring reusable for 13 cycles (1 year)',
    regimen: 'Insert 21 days \u2192 remove 7 days \u2192 wash and reinsert same ring',
    cost: '$200\u2013$250/year',
    efficacy: { perfect: '0.3%', typical: '7\u20139%' },
    specialNotes: 'Store in protective case during ring-free week; do NOT use oil-based lubricants; highly cost-effective over a full year.',
    chcRules: true
  },

  // SECTION II: PROGESTIN-ONLY CONTRACEPTIVES
  {
    id: 'pop_norethindrone',
    section: 2,
    name: 'Norethindrone 0.35 mg',
    type: 'Progestin-Only Pill (POP)',
    hormoneType: 'Progestin-only',
    dosing: '1 tablet daily at exactly the same time',
    regimen: '28 active pills, continuous (no placebo)',
    cost: '$9\u2013$25',
    efficacy: { perfect: '0.5%', typical: '5\u20139%' },
    specialNotes: 'Most established POP; strict timing required (3-hour late window). Thickens cervical mucus; does NOT reliably suppress ovulation.',
    popRules: true
  },
  {
    id: 'pop_norgestrel',
    section: 2,
    name: 'Norgestrel 0.075 mg (Opill)',
    type: 'Progestin-Only Pill (POP)',
    hormoneType: 'Progestin-only',
    dosing: '1 tablet daily at exactly the same time',
    regimen: '28 active pills, continuous',
    cost: '$20\u2013$50 OTC',
    efficacy: { perfect: '2.0%', typical: '7\u20139%' },
    specialNotes: 'OTC - no prescription required, no age restrictions (available since March 2024). Thickens cervical mucus; may prevent ovulation.',
    popRules: true
  },
  {
    id: 'pop_drospirenone',
    section: 2,
    name: 'Drospirenone 4 mg',
    type: 'Progestin-Only Pill (POP)',
    hormoneType: 'Anti-androgenic progestin',
    dosing: '1 tablet daily',
    regimen: '24 active + 4 placebo pills',
    cost: '$30\u2013$90',
    efficacy: { perfect: 'Pearl 0.73', typical: '\u2248 COCs' },
    specialNotes: 'Most forgiving POP (24-hour missed pill window); reliably suppresses ovulation. Contraindicated in renal impairment, adrenal insufficiency, hepatic disease/tumors, and hyperkalemia.',
    popRules: true,
    drospirenonePopRules: true
  },
  {
    id: 'injectable_dmpa_im',
    section: 2,
    name: 'DMPA 150 mg/mL (Depot Injection IM)',
    type: 'Injectable',
    hormoneType: 'Progestin-only',
    dosing: 'Deep IM injection every 13 weeks (gluteal or deltoid)',
    regimen: 'Every 13 weeks (up to 15 weeks allowed without backup)',
    cost: '$25\u2013$75 (generic)',
    efficacy: { perfect: '0.2%', typical: '4\u20136%' },
    specialNotes: 'Irregular bleeding progressing to amenorrhea (55% at 1yr, 68% at 2yr). Average weight gain 5.4 lbs at 1yr, 8.1 lbs at 2yr. FDA black box for BMD loss (reversible). Delayed return to fertility up to 12-18 months.',
    dmpaRules: true
  },
  {
    id: 'injectable_dmpa_sc',
    section: 2,
    name: 'DMPA 104 mg/0.65 mL (Depot Injection SC)',
    type: 'Injectable',
    hormoneType: 'Progestin-only',
    dosing: 'Subcutaneous injection every 13 weeks',
    regimen: 'Every 13 weeks (can be self-administered after clinical training)',
    cost: '$50\u2013$100',
    efficacy: { perfect: '0.2%', typical: '4\u20136%' },
    specialNotes: 'Subcutaneous version. Allows self-administration. Similar bleeding, weight gain, BMD, and return-to-fertility profiles as DMPA IM.',
    dmpaRules: true
  },
  {
    id: 'implant_etonogestrel',
    section: 2,
    name: 'Etonogestrel 68 mg subdermal implant',
    type: 'Subdermal Implant',
    hormoneType: 'Progestin-only (68 mg etonogestrel)',
    dosing: 'Single subdermal rod in inner non-dominant upper arm',
    regimen: 'FDA-approved up to 5 years (updated from 3 years)',
    cost: '$0\u2013$1,300 (device + insertion; ACA-covered)',
    efficacy: { perfect: '0.05%', typical: '0.05%' },
    specialNotes: 'Most effective reversible contraceptive. Requires trained provider for insertion (REMS). Efficacy reduced by hepatic enzyme inducers (e.g., rifampin, antiepileptics). Return to fertility within 1 cycle of removal.',
    implantRules: true
  },
  {
    id: 'iud_mirena',
    section: 2,
    name: 'Mirena (52 mg LNG IUD)',
    type: 'Intrauterine Device (IUD)',
    hormoneType: 'Local progestin (initial release ~21 \u03bcg/day)',
    dosing: 'Intrauterine insertion',
    regimen: 'FDA duration 8 years (also FDA-approved for HMB up to 5 years)',
    cost: '$0\u2013$1,100 (ACA-covered)',
    efficacy: { perfect: '0.1\u20130.2%', typical: '0.1\u20130.2%' },
    specialNotes: 'Standard T frame. Best for longest duration, HMB treatment, and achieving amenorrhea (~50% at 2 years). local action means efficacy NOT reduced by CYP3A4 inducers.',
    iudRules: true
  },
  {
    id: 'iud_liletta',
    section: 2,
    name: 'Liletta (52 mg LNG IUD)',
    type: 'Intrauterine Device (IUD)',
    hormoneType: 'Local progestin (initial release ~20.4 \u03bcg/day)',
    dosing: 'Intrauterine insertion',
    regimen: 'FDA duration 8 years (also FDA-approved for HMB up to 5 years)',
    cost: '$0\u2013$850 (highly cost-effective)',
    efficacy: { perfect: '0.1\u20130.2%', typical: '0.1\u20130.2%' },
    specialNotes: 'Standard T frame. Amenorrhea rate: ~26% at 2 yr, 39% at yr 7-8. Highly cost-effective choice.',
    iudRules: true
  },
  {
    id: 'iud_kyleena',
    section: 2,
    name: 'Kyleena (19.5 mg LNG IUD)',
    type: 'Intrauterine Device (IUD)',
    hormoneType: 'Local progestin (initial release ~17.5 \u03bcg/day)',
    dosing: 'Intrauterine insertion',
    regimen: 'FDA duration 5 years',
    cost: '$0\u2013$1,100 (ACA-covered)',
    efficacy: { perfect: '0.1\u20130.2%', typical: '0.1\u20130.2%' },
    specialNotes: 'Smaller T frame, narrower inserter. Ideal for nulliparous patients, smaller uterine cavities, or those preferring a lower hormone dose. Amenorrhea rate ~12% at 1 year.',
    iudRules: true
  },
  {
    id: 'iud_skyla',
    section: 2,
    name: 'Skyla (13.5 mg LNG IUD)',
    type: 'Intrauterine Device (IUD)',
    hormoneType: 'Local progestin (initial release ~14 \u03bcg/day)',
    dosing: 'Intrauterine insertion',
    regimen: 'FDA duration 3 years',
    cost: '$0\u2013$800 (ACA-covered)',
    efficacy: { perfect: '0.1\u20130.2%', typical: '0.1\u20130.2%' },
    specialNotes: 'Smallest T frame and inserter tube. Best for short commitments or adolescents/nulliparous patients who want minimal frame sizes. Amenorrhea rate ~6% at 1 year.',
    iudRules: true
  },

  // SECTION III: NON-HORMONAL CONTRACEPTIVES
  {
    id: 'iud_copper',
    section: 3,
    name: 'Copper IUD (Paragard T380A)',
    type: 'Intrauterine Device (IUD)',
    hormoneType: 'None (Copper only)',
    dosing: 'Intrauterine insertion',
    regimen: 'FDA duration 10 years',
    cost: '$0\u2013$900 (ACA-covered)',
    efficacy: { perfect: '0.6%', typical: '0.8%' },
    specialNotes: 'Copper ions are spermicidal; creates hostile environment. Does NOT affect ovulation or cause amenorrhea; causes heavier/longer menses and dysmenorrhea (treat with NSAIDs). Immediate return to fertility. Most effective oral-free EC.',
    copperIudRules: true
  },
  {
    id: 'barrier_male_condom',
    section: 3,
    name: 'External (male) condom',
    type: 'Barrier Method',
    hormoneType: 'None',
    dosing: 'Apply before intercourse',
    regimen: 'Single-use',
    cost: '$0.50\u2013$2.00 each',
    efficacy: { perfect: '2%', typical: '13%' },
    specialNotes: 'Only method that protects against STIs. Latex, polyurethane, or lambskin (note: lambskin does NOT protect against STIs/HIV).',
    barrierRules: true
  },
  {
    id: 'barrier_female_condom',
    section: 3,
    name: 'Internal (female) condom',
    type: 'Barrier Method',
    hormoneType: 'None',
    dosing: 'Insert before intercourse',
    regimen: 'Single-use',
    cost: '$2.00\u2013$4.00 each',
    efficacy: { perfect: '\u2014', typical: '21%' },
    specialNotes: 'Provides some STI protection (limited clinical data available).',
    barrierRules: true
  },
  {
    id: 'barrier_diaphragm',
    section: 3,
    name: 'Diaphragm + spermicide',
    type: 'Barrier Method',
    hormoneType: 'None',
    dosing: 'Insert with spermicide before sex',
    regimen: 'Leave in place for \u22656 hours after intercourse',
    cost: '$50\u2013$100 (Caya is one-size-fits-most; others require fitting)',
    efficacy: { perfect: '\u2014', typical: '17%' },
    specialNotes: 'Caya is a one-size-fits-most contoured diaphragm. Others require clinical fitting. Reusable.',
    barrierRules: true
  },
  {
    id: 'barrier_cervical_cap',
    section: 3,
    name: 'Cervical cap',
    type: 'Barrier Method',
    hormoneType: 'None',
    dosing: 'Insert before sex, fits over cervix',
    regimen: 'Leave in place for \u22656 hours after intercourse; requires fitting',
    cost: '$60\u2013$90 (requires fitting)',
    efficacy: { perfect: '\u2014', typical: '17\u201323%' },
    specialNotes: 'Higher failure rate observed in parous women. Requires custom clinical fitting.',
    barrierRules: true
  },
  {
    id: 'barrier_sponge',
    section: 3,
    name: 'Contraceptive sponge',
    type: 'Barrier Method + Spermicide',
    hormoneType: 'None',
    dosing: 'Insert before sex, moisten to activate spermicide',
    regimen: 'Leave in place for \u22656 hours after sex; single-use',
    cost: '$15\u2013$25 for pack of 3',
    efficacy: { perfect: '9% (nulli) / 20% (parous)', typical: '14% (nulli) / 27% (parous)' },
    specialNotes: 'Contains nonoxynol-9. Single-use only. Do not leave in longer than 24-30 hours due to TSS risk.',
    barrierRules: true
  },
  {
    id: 'chemical_spermicide',
    section: 3,
    name: 'Spermicide alone (nonoxynol-9)',
    type: 'Chemical Spermicide',
    hormoneType: 'None',
    dosing: 'Insert vaginal gel/film/foam before sex',
    regimen: 'Apply within 1 hour before intercourse; single-use',
    cost: '$10\u2013$20 OTC',
    efficacy: { perfect: '\u2014', typical: '21%' },
    specialNotes: 'OTC. Does NOT protect against STIs. Frequent use can cause vaginal irritation/lesions, potentially increasing HIV risk.',
    barrierRules: true
  },
  {
    id: 'behavioral_fam',
    section: 3,
    name: 'Fertility awareness methods',
    type: 'Behavioral Method',
    hormoneType: 'None',
    dosing: 'Track fertile window (cervical mucus, temperature, calendar)',
    regimen: 'Abstinence or barrier use during fertile days',
    cost: '$0\u2013$100 (for apps or thermometers)',
    efficacy: { perfect: 'Varies', typical: 'Up to 22\u201323%' },
    specialNotes: 'Requires structured clinical training, highly regular menstrual cycles, and high daily commitment.',
    behavioralRules: true
  },
  {
    id: 'behavioral_withdrawal',
    section: 3,
    name: 'Withdrawal',
    type: 'Behavioral Method',
    hormoneType: 'None',
    dosing: 'Withdrawal prior to ejaculation',
    regimen: 'Every act of intercourse',
    cost: '$0',
    efficacy: { perfect: '4%', typical: '20\u201322%' },
    specialNotes: 'Highly user-dependent; requires high self-control. No STI protection.',
    behavioralRules: true
  }
];

const EMERGENCY_CONTRACEPTIONS = [
  {
    id: 'ec_copper_iud',
    name: 'Copper IUD (Paragard)',
    hormoneType: 'Non-hormonal',
    dose: 'IUD insertion by clinician',
    timeWindow: '\u2264 120 hours (5 days) post-intercourse',
    efficacy: '0.09\u20130.1% (Most effective method)',
    bmiEffect: 'None (efficacy fully preserved at higher weights)',
    rxRequired: 'Yes (requires clinician insertion)',
    continuation: 'Already in place as highly effective ongoing contraception (10 years)',
    cost: '$0\u2013$900 (covered by ACA)',
    notes: [
      'Gold standard for emergency contraception.',
      'Acts as immediate long-term contraception.',
      'Can be inserted at any point in the cycle if pregnancy is ruled out.'
    ]
  },
  {
    id: 'ec_ulipristal',
    name: 'Ulipristal acetate 30 mg (ella)',
    hormoneType: 'Selective progesterone receptor modulator (SPRM)',
    dose: '30 mg oral tablet \u00d7 1 dose',
    timeWindow: '\u2264 120 hours (5 days); efficacy is maintained across the full 5-day window',
    efficacy: '1.3\u20131.9% pregnancy rate',
    bmiEffect: 'Possibly reduced efficacy if BMI >30 (data conflicting); effective up to ~89 kg (195 lbs)',
    rxRequired: 'Yes (prescription only)',
    continuation: 'CRITICAL: Wait \u2265 5 days before starting/resuming progestin-containing hormonal contraception, as they impair ulipristal\'s ability to delay ovulation. Use backup barrier method until next menses.',
    cost: '$40\u2013$65',
    notes: [
      'Take with or without food. If vomiting occurs within 3 hours, consider repeating the dose.',
      'CYP3A4 inducers (e.g., rifampin, phenytoin, carbamazepine, St. John\'s Wort) significantly reduce drug levels.',
      'PPIs: esomeprazole reduces Cmax by 65% but clinical significance is likely minimal as overall absorption (AUC) is preserved.',
      'No medical contraindications per ACOG/NEJM. Safe in CVD, migraine, liver disease, prior ectopic, and breastfeeding.'
    ]
  },
  {
    id: 'ec_levonorgestrel',
    name: 'Levonorgestrel 1.5 mg (Plan B One-Step, generics)',
    hormoneType: 'Progestin-only',
    dose: '1.5 mg oral tablet \u00d7 1 dose (or 0.75 mg \u00d7 2 doses 12 hours apart)',
    timeWindow: '\u2264 72 hours preferred (some efficacy up to 120 hours, but ~2\u00d7 more effective within 72 hours)',
    efficacy: '2.2\u20132.5% pregnancy rate',
    bmiEffect: 'Reduced efficacy at BMI \u226530 (OR 4.4); may lose efficacy if weight \u226575 kg (data conflicting)',
    rxRequired: 'No (OTC), no age or gender restrictions',
    continuation: 'Can start or resume ongoing hormonal contraception on the same day.',
    cost: '$10\u2013$50 OTC',
    notes: [
      'Delays or inhibits ovulation when given before the LH surge. Has no effect once LH surge has started. Not abortifacient.',
      'No recognized contraindications. Can be used more than once, even within the same menstrual cycle.',
      'CYP3A4 inducers may reduce efficacy. Safe during breastfeeding.'
    ]
  },
  {
    id: 'ec_yuzpe',
    name: 'Yuzpe Method (COCs)',
    hormoneType: 'Combined estrogen + progestin',
    dose: 'Ethinyl Estradiol 0.1 mg + Levonorgestrel 0.5 mg, repeated 12 hours later',
    timeWindow: '\u2264 72 hours post-intercourse',
    efficacy: '2.5\u20132.9% pregnancy rate (least effective)',
    bmiEffect: 'Not studied specifically',
    rxRequired: 'Requires access to regular combined oral contraceptive pills',
    continuation: 'Can resume regular hormonal contraception on the same day.',
    cost: 'Cost of COC pill pack',
    notes: [
      'Specific pill counts: Ovral (2 white pills/dose), Nordette/Levlen (2 light-orange/dose), Lo/Ovral (4 white/dose), Alesse (5 pink/dose).',
      'Pre-treat with antiemetic (e.g., meclizine) as it causes severe nausea (~50%) and vomiting (~20%).'
    ]
  },
  {
    id: 'ec_lng_iud',
    name: 'LNG 52-mg IUD (off-label EC)',
    hormoneType: 'Progestin',
    dose: 'IUD insertion by clinician',
    timeWindow: '\u2264 120 hours (5 days) post-intercourse',
    efficacy: '0.3% pregnancy rate (based on RCT data)',
    bmiEffect: 'None (efficacy preserved at higher weights)',
    rxRequired: 'Yes (requires clinician insertion)',
    continuation: 'Already in place as ongoing contraception (8 years)',
    cost: '$0\u2013$1,100 (covered by ACA)',
    notes: [
      'Highly effective off-label emergency option.',
      'Provides immediate 8-year contraception.'
    ]
  }
];

const HIV_PEP = {
  duration: '28 days',
  efficacy: '80\u201390% reduction in HIV acquisition',
  initiation: 'ASAP, ideally within 24 hours, no later than 72 hours post-exposure. Do NOT delay for pending lab results.',
  regimens: [
    {
      name: 'Option 1 (Preferred Single-Tablet): BIC/FTC/TAF',
      components: 'Bictegravir 50 mg + emtricitabine 200 mg + tenofovir alafenamide 25 mg',
      dose: '1 tablet daily',
      frequency: 'Once daily',
      food: 'With or without food',
      sideEffects: 'Nausea/vomiting (15%), fatigue (10%), diarrhea (8%); completion rate ~90\u201396%',
      contraindications: 'Contraindicated with dofetilide and rifampin. Not recommended if eCrCl <30. Caution with HBV (flare risk on discontinuation). May increase serum creatinine without affecting true GFR.',
      cost: '~$3,500\u2013$4,000 (28-day list price)'
    },
    {
      name: 'Option 2: DTG + NRTI Backbone',
      components: 'Dolutegravir 50 mg + [FTC 200 mg/TAF 25 mg OR FTC 200 mg/TDF 300 mg OR 3TC 300 mg/TDF 300 mg]',
      dose: 'DTG: 1 tablet daily + Backbone: 1 tablet daily',
      frequency: 'Once daily each',
      food: 'DTG: With or without food',
      sideEffects: 'Fatigue (26%), nausea (25%), diarrhea (21%), headache (10%); completion rate 64\u201394%',
      contraindications: 'DTG contraindicated with dofetilide. Separate DTG from polyvalent cations (Ca\u00b2\u207a, Mg\u00b2\u207a, Fe\u00b2\u207a, Al\u00b3\u207a) by 2 hours before or 6 hours after. TDF backbone requires CrCl >60.',
      cost: '~$1,500\u2013$2,500 (with generic TDF/FTC backbone)'
    },
    {
      name: 'Alternative: DRV/COBI/FTC/TAF',
      components: 'Darunavir 800 mg + cobicistat 150 mg + emtricitabine 200 mg + TAF 10 mg',
      dose: '1 tablet daily',
      frequency: 'Once daily',
      food: 'With food (required)',
      sideEffects: 'GI symptoms, CYP3A inhibition - extensive drug interactions',
      contraindications: 'Not recommended in pregnancy. Caution with sulfonamide allergy; risk of Stevens-Johnson syndrome. Extensive CYP3A drug interactions.',
      cost: '~$3,500\u2013$4,000'
    }
  ],
  monitoring: [
    { timepoint: 'Baseline (initial visit)', tests: 'Rapid HIV test and/or lab-based HIV Ag/Ab; serum creatinine; ALT/AST; HBsAg; pregnancy test (if applicable); STI testing (GC/CT/syphilis) as indicated; HCV as indicated' },
    { timepoint: '24 hours', tests: 'Follow-up (remote or in-person) - assess tolerability and adherence' },
    { timepoint: '4\u20136 weeks post-exposure', tests: 'Lab-based HIV Ag/Ab + diagnostic HIV NAT' },
    { timepoint: '12 weeks post-exposure', tests: 'Lab-based HIV Ag/Ab + diagnostic HIV NAT (final test to rule out HIV)' }
  ]
};

const HIV_PREP = {
  recommendation: 'USPSTF Grade A recommendation - mandates insurance coverage without cost-sharing under the ACA.',
  regimens: [
    {
      name: 'Daily TDF/FTC (Generic Truvada)',
      dose: 'TDF 300 mg + FTC 200 mg (1 tab daily)',
      frequency: 'Once daily (can double-dose Day 1 for rectal exposure)',
      approvedPopulations: 'All populations including pregnancy/breastfeeding, PWID',
      timeToProtection: '~24 hours (rectal); ~7 days (vaginal)',
      renal: 'CrCl >60 required',
      sideEffects: 'Nausea/diarrhea (diminish over time); renal (elevated Cr, reversible); modest BMD decline; weight-suppressive',
      limitations: 'Monitor renal function; HBV flare risk on discontinuation',
      cost: '~$360/year (generic)'
    },
    {
      name: 'TDF/FTC "2-1-1" (On-Demand)',
      dose: '2 tabs 2\u201324 hrs before sex \u2192 1 tab at 24 hrs \u2192 1 tab at 48 hrs after pre-sex dose',
      frequency: 'Event-driven',
      approvedPopulations: 'Cisgender men (receptive anal sex ONLY)',
      timeToProtection: '2\u201324 hours pre-exposure',
      renal: 'CrCl >60 required',
      sideEffects: 'Same as daily TDF/FTC',
      limitations: 'NOT for vaginal exposures or IDU; if additional sex occurs, continue daily dosing until 2 doses after last sexual activity',
      cost: '~$360/year (generic, variable)'
    },
    {
      name: 'TAF/FTC (Descovy)',
      dose: 'TAF 25 mg + FTC 200 mg (1 tab daily)',
      frequency: 'Once daily',
      approvedPopulations: 'Adults and adolescents \u226535 kg; EXCLUDES receptive vaginal sex risk',
      timeToProtection: 'Similar to TDF/FTC',
      renal: 'CrCl >30 (preferred if CrCl 30\u201360 or patient has osteopenia)',
      sideEffects: 'Better bone profile than TDF; more weight gain (median 1.7 kg vs 0.5 kg); less favorable lipids',
      limitations: 'Not approved for receptive vaginal sex; not for IDU-only risk; no on-demand data; no generic available',
      cost: '~$22,000/year (brand)'
    },
    {
      name: 'Cabotegravir Injectable (Apretude)',
      dose: '600 mg IM injection (gluteal)',
      frequency: 'First 2 injections 4 weeks apart, then every 8 weeks',
      approvedPopulations: 'Sexual acquisition prevention (MSM, TGW, cisgender women)',
      timeToProtection: 'After loading doses completed',
      renal: 'No renal restriction',
      sideEffects: 'Injection site reactions (most common, usually mild); weight gain (<1 kg more than TDF/FTC)',
      limitations: 'Insufficient data for IDU-only; long PK tail after discontinuation (detectable 3-4 years) - needs oral PrEP bridge; must receive negative HIV test results before each injection; INSTI resistance risk if HIV acquired during tail',
      cost: '~$24,000\u2013$26,000/year (list price)'
    }
  ],
  monitoring: [
    {
      timepoint: 'Baseline',
      oral: 'HIV Ag/Ab \u00b1 HIV RNA; creatinine; HBsAg, HBsAb; HCV IgG; HAV IgG (MSM/PWID); GC/CT NAAT (all sites); syphilis; pregnancy test; lipid profile (TAF/FTC)',
      injectable: 'HIV Ag/Ab + HIV RNA; HBsAg; HCV IgG; HAV IgG; GC/CT NAAT; syphilis; pregnancy test'
    },
    {
      timepoint: '1 month',
      oral: 'HIV Ag/Ab',
      injectable: 'HIV Ag/Ab + HIV RNA'
    },
    {
      timepoint: 'Every 2 months',
      oral: '\u2014',
      injectable: 'HIV Ag/Ab + HIV RNA (at each injection visit)'
    },
    {
      timepoint: 'Every 3 months',
      oral: 'HIV Ag/Ab; creatinine (quarterly \u2192 annually); GC/CT NAAT; syphilis; pregnancy test',
      injectable: 'GC/CT NAAT; syphilis; pregnancy test'
    },
    {
      timepoint: 'Annually',
      oral: 'Creatinine; HCV IgG',
      injectable: 'HCV IgG'
    }
  ]
};

// USMEC Clinical Screening Engine
function screenMethod(method, activeRisks, activeDrugs) {
  const alerts = [];

  // 1. COMBINED HORMONAL CONTRACEPTIVE RULES
  if (method.chcRules) {
    if (activeRisks.includes('age_35_smoker_15')) {
      alerts.push({ category: 4, condition: 'Age \u226535 & Smoker (\u226515 cigs/day)', reason: 'High risk of arterial cardiovascular events (stroke, MI).' });
    }
    if (activeRisks.includes('postpartum_lt_21')) {
      alerts.push({ category: 4, condition: 'Postpartum < 21 days', reason: 'Significantly elevated thromboembolism (VTE) risk.' });
    }
    if (activeRisks.includes('dvt_pe_history')) {
      alerts.push({ category: 4, condition: 'History of DVT/PE', reason: 'High risk of recurrent venous thromboembolism.' });
    }
    if (activeRisks.includes('thrombogenic_mutations')) {
      alerts.push({ category: 4, condition: 'Known Thrombogenic Mutation', reason: 'Factor V Leiden, Prothrombin mutation, etc. dramatically increase VTE risk.' });
    }
    if (activeRisks.includes('stroke_history')) {
      alerts.push({ category: 4, condition: 'Stroke History', reason: 'Ischemic stroke risk is heightened by estrogen.' });
    }
    if (activeRisks.includes('ischemic_heart_disease')) {
      alerts.push({ category: 4, condition: 'Ischemic Heart Disease', reason: 'Estrogen increases risk of cardiovascular events.' });
    }
    if (activeRisks.includes('migraine_aura')) {
      alerts.push({ category: 4, condition: 'Migraine with Aura', reason: 'Stroke risk increases synergistically with estrogen.' });
    }
    if (activeRisks.includes('migraine_no_aura_gt35')) {
      alerts.push({ category: 4, condition: 'Migraine without Aura (Age \u226535)', reason: 'Category 4 for age \u226535 due to elevated stroke risk.' });
    }
    if (activeRisks.includes('sbp_gt160_dbp_gt100')) {
      alerts.push({ category: 4, condition: 'Severe Hypertension (\u2265160/100)', reason: 'Risk of stroke and cardiovascular collapse.' });
    }
    if (activeRisks.includes('htn_controlled')) {
      alerts.push({ category: 3, condition: 'Hypertension (Controlled or Mild/Moderate)', reason: 'USMEC Category 3. Estrogen increases cardiovascular and stroke risks; progestin-only methods (except DMPA) or IUDs are preferred.' });
    }
    if (activeRisks.includes('cardio_valvular')) {
      alerts.push({ category: 4, condition: 'Complicated Valvular Heart Disease', reason: 'Increased thromboembolic risk.' });
    }
    if (activeRisks.includes('cardio_risk_factors')) {
      alerts.push({ category: 4, condition: 'Multiple CV Risk Factors', reason: 'Synergistic risk of major cardiovascular events.' });
    }
    if (activeRisks.includes('breast_cancer')) {
      alerts.push({ category: 4, condition: 'Current/History of Breast Cancer', reason: 'Hormone-sensitive tumor; avoids all estrogen/progestins.' });
    }
    if (activeRisks.includes('liver_disease')) {
      alerts.push({ category: 4, condition: 'Severe Hepatic Disease', reason: 'Hepatocellular adenoma, malignant hepatoma, or severe cirrhosis impair steroid clearance.' });
    }
    if (activeRisks.includes('sle_antiphospholipid')) {
      alerts.push({ category: 4, condition: 'SLE + Antiphospholipid Antibodies', reason: 'Extremely high risk of arterial/venous thrombosis.' });
    }
    if (activeRisks.includes('sickle_cell')) {
      alerts.push({ category: 4, condition: 'Sickle Cell Disease (2024 update)', reason: 'Upgraded to Category 4 due to vaso-occlusive and thromboembolic risk.' });
    }
    if (activeRisks.includes('nephrotic_dialysis')) {
      alerts.push({ category: 4, condition: 'Nephrotic Syndrome / Dialysis (2024 update)', reason: 'Category 4 due to complex cardiovascular and fluid states.' });
    }

    // CHC Drug Interactions
    if (activeDrugs.includes('rifampin')) {
      alerts.push({ category: 3, condition: 'Rifampin Co-administration', reason: 'CYP3A4 induction reduces estrogen/progestin levels by \u226540% (efficacy lost).' });
    }
    if (activeDrugs.includes('antiepileptics')) {
      alerts.push({ category: 3, condition: 'Anticonvulsants', reason: 'Phenytoin, carbamazepine, topiramate, etc. induce CYP3A4, reducing contraceptive efficacy.' });
    }
    if (activeDrugs.includes('lamotrigine')) {
      alerts.push({ category: 3, condition: 'Lamotrigine Co-administration', reason: 'Ethinyl estradiol reduces lamotrigine serum levels by ~50%, risking seizure control breakthrough.' });
    }
    if (activeDrugs.includes('efavirenz')) {
      alerts.push({ category: 3, condition: 'Efavirenz Co-administration', reason: 'Significantly reduces progestin steroid levels.' });
    }
    if (activeDrugs.includes('st_johns_wort')) {
      alerts.push({ category: 3, condition: 'St. John\'s Wort', reason: 'Reduces contraceptive steroid levels via CYP3A4 induction.' });
    }
  }

  // 2. PROGESTIN-ONLY PILL (POP) RULES
  if (method.popRules) {
    if (activeRisks.includes('breast_cancer')) {
      alerts.push({ category: 4, condition: 'Current/History of Breast Cancer', reason: 'Progestin-sensitive tumor.' });
    }
    
    // POP Interactions
    if (activeDrugs.includes('rifampin') || activeDrugs.includes('antiepileptics') || activeDrugs.includes('efavirenz') || activeDrugs.includes('st_johns_wort')) {
      alerts.push({ category: 3, condition: 'CYP3A4 Inducers', reason: 'Reduces serum progestin levels, potentially decreasing oral contraceptive efficacy.' });
    }
  }

  // Drospirenone-specific POP rules
  if (method.drospirenonePopRules) {
    if (activeRisks.includes('renal_impairment')) {
      alerts.push({ category: 4, condition: 'Renal Impairment', reason: 'Drospirenone has anti-mineralocorticoid properties; risk of hyperkalemia.' });
    }
    if (activeRisks.includes('hyperkalemia')) {
      alerts.push({ category: 4, condition: 'Hyperkalemia', reason: 'Exacerbates potassium elevation risk.' });
    }
    if (activeRisks.includes('liver_disease')) {
      alerts.push({ category: 4, condition: 'Severe Hepatic Disease', reason: 'Impaired clearance.' });
    }
  }

  // Drospirenone-containing (COC or POP) warnings
  if (method.drospirenoneRules) {
    if (activeRisks.includes('renal_impairment') || activeRisks.includes('hyperkalemia') || activeRisks.includes('liver_disease')) {
      alerts.push({ category: 4, condition: 'Drospirenone Contraindications', reason: 'Contraindicated in renal impairment, adrenal insufficiency, hyperkalemia, or hepatic disease.' });
    }
  }

  // 3. DMPA (INJECTABLE) RULES
  if (method.dmpaRules) {
    if (activeRisks.includes('breast_cancer')) {
      alerts.push({ category: 4, condition: 'Current/History of Breast Cancer', reason: 'Progestin-sensitive malignancy.' });
    }
    if (activeRisks.includes('liver_disease')) {
      alerts.push({ category: 4, condition: 'Severe Hepatic Disease', reason: 'Impaired drug clearance.' });
    }
    if (activeRisks.includes('ischemic_heart_disease')) {
      alerts.push({ category: 3, condition: 'Ischemic Heart Disease', reason: 'USMEC Category 3.' });
    }
    if (activeRisks.includes('stroke_history')) {
      alerts.push({ category: 3, condition: 'Stroke History', reason: 'USMEC Category 3.' });
    }
    if (activeRisks.includes('sbp_gt160_dbp_gt100')) {
      alerts.push({ category: 3, condition: 'Severe Hypertension', reason: 'USMEC Category 3.' });
    }
    if (activeRisks.includes('htn_controlled')) {
      alerts.push({ category: 2, condition: 'Hypertension (Controlled or Mild/Moderate)', reason: 'USMEC Category 2. Advantages of DMPA generally outweigh clinical risks.' });
    }
    if (activeRisks.includes('diabetes_microvascular')) {
      alerts.push({ category: 3, condition: 'Diabetes with Microvascular Disease', reason: 'USMEC Category 3 for diabetes >20 years duration or microvascular pathology.' });
    }
    if (activeRisks.includes('sickle_cell')) {
      alerts.push({ category: 3, condition: 'Sickle Cell Disease (2024 update)', reason: 'USMEC Category 3.' });
    }
  }

  // 4. IMPLANT RULES
  if (method.implantRules) {
    if (activeRisks.includes('breast_cancer')) {
      alerts.push({ category: 4, condition: 'Current/History of Breast Cancer', reason: 'Progestin-sensitive tumor.' });
    }
    if (activeRisks.includes('dvt_pe_history')) {
      alerts.push({ category: 4, condition: 'Active Thrombosis / DVT / PE', reason: 'Implant is contraindicated during active thromboembolic disorders.' });
    }
    if (activeRisks.includes('liver_disease')) {
      alerts.push({ category: 4, condition: 'Severe Hepatic Disease / Tumors', reason: 'Contraindicated in active liver disease.' });
    }
    
    // Implant Interactions (Vulnerable because levels are near therapeutic floor)
    if (activeDrugs.includes('rifampin') || activeDrugs.includes('antiepileptics') || activeDrugs.includes('efavirenz') || activeDrugs.includes('st_johns_wort')) {
      alerts.push({ category: 3, condition: 'Hepatic Enzyme Inducers', reason: 'Implants are highly vulnerable to enzyme inducers as levels hover near the therapeutic threshold; efficacy is significantly impaired.' });
    }
  }

  // 5. LNG-IUD RULES
  if (method.iudRules) {
    if (activeRisks.includes('breast_cancer')) {
      alerts.push({ category: 4, condition: 'Current/History of Breast Cancer', reason: 'Progestin-sensitive tumor.' });
    }
    if (activeRisks.includes('uterine_anomaly')) {
      alerts.push({ category: 4, condition: 'Uterine Anomaly', reason: 'Distorts cavity, hindering correct placement or increasing expulsion risk.' });
    }
    if (activeRisks.includes('pid_acute_or_history')) {
      alerts.push({ category: 4, condition: 'Acute PID / Endometritis', reason: 'Contraindicated if active infection or postpartum endometritis in past 3 months.' });
    }
    if (activeRisks.includes('cervical_uterine_cancer')) {
      alerts.push({ category: 4, condition: 'Uterine/Cervical Malignancy', reason: 'Do not insert in presence of active uterine/cervical cancer.' });
    }
    if (activeRisks.includes('untreated_cervicitis_vaginitis')) {
      alerts.push({ category: 4, condition: 'Untreated Cervicitis/Vaginitis', reason: 'High risk of ascending pelvic infection (PID).' });
    }
    if (activeRisks.includes('liver_disease')) {
      alerts.push({ category: 4, condition: 'Active Liver Disease / Tumor', reason: 'Contraindicated for levonorgestrel release.' });
    }
  }

  // 6. COPPER IUD RULES
  if (method.copperIudRules) {
    if (activeRisks.includes('uterine_anomaly')) {
      alerts.push({ category: 4, condition: 'Uterine Anomaly', reason: 'Distorted cavity prevents correct insertion.' });
    }
    if (activeRisks.includes('pid_acute_or_history')) {
      alerts.push({ category: 4, condition: 'Acute PID / Endometritis', reason: 'Contraindicated if infection within past 3 months.' });
    }
    if (activeRisks.includes('cervical_uterine_cancer')) {
      alerts.push({ category: 4, condition: 'Uterine/Cervical Malignancy', reason: 'Do not insert.' });
    }
    if (activeRisks.includes('untreated_cervicitis_vaginitis')) {
      alerts.push({ category: 4, condition: 'Untreated Cervicitis/Vaginitis', reason: 'Ascending infection risk.' });
    }
    if (activeRisks.includes('wilson_disease')) {
      alerts.push({ category: 4, condition: "Wilson's Disease", reason: 'Exacerbates copper overload.' });
    }
    if (activeRisks.includes('copper_allergy')) {
      alerts.push({ category: 4, condition: 'Copper Allergy', reason: 'Severe localized and systemic allergic reaction risk.' });
    }
  }

  return alerts;
}

// UI MANAGER & CONTROLLER
document.addEventListener('DOMContentLoaded', () => {
  // Toggle states
  let activeRisks = [];
  let activeDrugs = [];
  let activeTab = 'all';
  let searchQuery = '';

  // Theme Management
  const body = document.body;
  const themeBtn = document.getElementById('themeBtn');
  const storedTheme = localStorage.getItem('theme') || 'dark';

  if (storedTheme === 'light') {
    body.classList.add('light-theme');
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    body.classList.remove('light-theme');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }

  themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeBtn.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
  });

  // Populate Profiler Checkboxes
  const riskContainer = document.getElementById('riskFactorsContainer');
  const drugContainer = document.getElementById('interactingDrugsContainer');

  // Helper to group items by category
  function populateCheckboxes(data, container, stateArray, type) {
    container.innerHTML = '';
    
    // Group by category
    const categories = [...new Set(data.map(item => item.category))];
    
    categories.forEach(cat => {
      const catDiv = document.createElement('div');
      catDiv.className = 'category-label';
      catDiv.textContent = cat;
      container.appendChild(catDiv);
      
      const groupDiv = document.createElement('div');
      groupDiv.className = 'factor-group';
      
      data.filter(item => item.category === cat).forEach(item => {
        const label = document.createElement('label');
        label.className = 'checkbox-container';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.value = item.id;
        
        input.addEventListener('change', (e) => {
          if (e.target.checked) {
            stateArray.push(item.id);
          } else {
            const idx = stateArray.indexOf(item.id);
            if (idx > -1) stateArray.splice(idx, 1);
          }
          updateDashboard();
        });
        
        const span = document.createElement('span');
        span.textContent = item.label;
        
        label.appendChild(input);
        label.appendChild(span);
        groupDiv.appendChild(label);
      });
      
      container.appendChild(groupDiv);
    });
  }

  populateCheckboxes(RISK_FACTORS, riskContainer, activeRisks, 'risk');
  populateCheckboxes(INTERACTING_DRUGS, drugContainer, activeDrugs, 'drug');

  // DOM Elements
  const searchInput = document.getElementById('searchInput');
  const clearRisksBtn = document.getElementById('clearRisksBtn');
  const clearDrugsBtn = document.getElementById('clearDrugsBtn');
  const tabButtons = document.querySelectorAll('.tab');
  const dynamicContainer = document.getElementById('dynamicContainer');

  // Modal DOM
  const modalOverlay = document.getElementById('modalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalContent = document.getElementById('modalContent');

  // Clear Event Listeners
  clearRisksBtn.addEventListener('click', () => {
    activeRisks.length = 0;
    document.querySelectorAll('#riskFactorsContainer input[type="checkbox"]').forEach(cb => cb.checked = false);
    updateDashboard();
  });

  clearDrugsBtn.addEventListener('click', () => {
    activeDrugs.length = 0;
    document.querySelectorAll('#interactingDrugsContainer input[type="checkbox"]').forEach(cb => cb.checked = false);
    updateDashboard();
  });

  // Search Event Listener
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    updateDashboard();
  });

  // Tab Buttons Listener
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      activeTab = button.getAttribute('data-target');
      updateDashboard();
    });
  });

  // Modal functions
  function openModal(item, type) {
    if (type === 'contraceptive') {
      const alerts = screenMethod(item, activeRisks, activeDrugs);
      const isContraindicated = alerts.some(a => a.category === 4);
      const isCaution = alerts.some(a => a.category === 3);

      modalTitle.textContent = item.name;
      modalSubtitle.textContent = item.type;
      
      let safetyHeader = '';
      if (isContraindicated) {
        safetyHeader = `
          <div class="modal-alert-box">
            <strong><i class="fas fa-ban"></i> USMEC Category 4 \u2014 CONTRAINDICATED</strong>
            ${alerts.map(a => `<div class="modal-alert-item"><span>\u2022 <strong>${a.condition}</strong>: ${a.reason}</span></div>`).join('')}
          </div>
        `;
      } else if (isCaution) {
        safetyHeader = `
          <div class="modal-alert-box" style="background-color: rgba(245, 158, 11, 0.08); border-color: rgba(245, 158, 11, 0.25); color: #f59e0b;">
            <strong><i class="fas fa-exclamation-triangle"></i> USMEC Category 3 \u2014 CAUTION / RISK EXCEEDS BENEFIT</strong>
            ${alerts.map(a => `<div class="modal-alert-item"><span>\u2022 <strong>${a.condition}</strong>: ${a.reason}</span></div>`).join('')}
          </div>
        `;
      } else {
        safetyHeader = `
          <div class="modal-alert-box" style="background-color: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.25); color: #10b981;">
            <strong><i class="fas fa-check-circle"></i> USMEC Category 1/2 \u2014 SUITABLE</strong>
            <span>This method is safe for initiation based on selected patient factors.</span>
          </div>
        `;
      }

      modalContent.innerHTML = `
        ${safetyHeader}
        <div class="modal-grid-2">
          <div class="modal-section">
            <span class="modal-section-title">Efficacy (Failure Rates)</span>
            <div>Perfect Use: <strong>${item.efficacy.perfect}</strong></div>
            <div>Typical Use: <strong>${item.efficacy.typical}</strong></div>
          </div>
          <div class="modal-section">
            <span class="modal-section-title">Approximate Cost</span>
            <div><strong>${item.cost}</strong></div>
          </div>
        </div>
        
        <div class="modal-grid-2">
          <div class="modal-section">
            <span class="modal-section-title">Formulation Dosing</span>
            <div>${item.dosing}</div>
          </div>
          <div class="modal-section">
            <span class="modal-section-title">Regimen Cycle</span>
            <div>${item.regimen}</div>
          </div>
        </div>

        <div class="modal-section">
          <span class="modal-section-title">Special Clinical Notes</span>
          <div>${item.specialNotes}</div>
        </div>

        ${item.chcRules ? `
          <div class="modal-section">
            <span class="modal-section-title">Important CHC Instructions & Side Effects</span>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">
              <strong>Instructions:</strong> Start Day 1 of menses (no backup) or "quick start" any day with 7 days backup. Missed 1 pill: take ASAP and continue pack. Missed \u22652 pills: take most recent, use backup \u00d7 7 days.<br><br>
              <strong>Common Side Effects:</strong> Nausea, breast tenderness, headaches, breakthrough bleeding (esp. first 3 months), mood changes, bloating, chloasma. VTE risk increases to ~7-10/10,000 women-years (lower than pregnancy rate of 20-114).
            </div>
          </div>
        ` : ''}

        ${item.popRules ? `
          <div class="modal-section">
            <span class="modal-section-title">POP Clinical Guidance</span>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">
              <strong>Missed Dose Rules:</strong> If >3 hours late (norethindrone/norgestrel), take ASAP and use backup \u00d7 48 hours. If >24 hours late (drospirenone), take ASAP and use backup \u00d7 7 days.<br><br>
              <strong>Side Effects:</strong> Irregular/unpredictable bleeding (most common, main reason for discontinuation), headaches, breast tenderness, nausea, acne.
            </div>
          </div>
        ` : ''}
      `;
    } else if (type === 'ec') {
      modalTitle.textContent = item.name;
      modalSubtitle.textContent = 'Emergency Contraception';
      modalContent.innerHTML = `
        <div class="modal-grid-2">
          <div class="modal-section">
            <span class="modal-section-title">Efficacy</span>
            <div><strong>${item.efficacy}</strong></div>
          </div>
          <div class="modal-section">
            <span class="modal-section-title">Approximate Cost</span>
            <div><strong>${item.cost}</strong></div>
          </div>
        </div>

        <div class="modal-grid-2">
          <div class="modal-section">
            <span class="modal-section-title">Time Window</span>
            <div>${item.timeWindow}</div>
          </div>
          <div class="modal-section">
            <span class="modal-section-title">Rx Requirement</span>
            <div>${item.rxRequired}</div>
          </div>
        </div>

        <div class="modal-section">
          <span class="modal-section-title">BMI Effect</span>
          <div>${item.bmiEffect}</div>
        </div>

        <div class="modal-section">
          <span class="modal-section-title">When to start ongoing contraception</span>
          <div>${item.continuation}</div>
        </div>

        <div class="modal-section">
          <span class="modal-section-title">Clinical Notes</span>
          <ul style="padding-left: 1.2rem; font-size: 0.85rem; color: var(--text-secondary); display:flex; flex-direction:column; gap:4px;">
            ${item.notes.map(n => `<li>${n}</li>`).join('')}
          </ul>
        </div>
      `;
    }
    
    modalOverlay.classList.add('active');
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Render Dashboard
  function updateDashboard() {
    dynamicContainer.innerHTML = '';

    function matchesSearch(c, query) {
      if (!query) return true;
      return c.name.toLowerCase().includes(query) ||
             c.type.toLowerCase().includes(query) ||
             c.hormoneType.toLowerCase().includes(query) ||
             c.specialNotes.toLowerCase().includes(query);
    }

    // EFFICACY TAB (Section VI View)
    if (activeTab === 'efficacy') {
      renderEfficacyTiersView();
      updateEHRNote();
      return;
    }

    // EMERGENCY CONTRACEPTION TAB
    if (activeTab === 'ec') {
      renderECView();
      updateEHRNote();
      return;
    }

    // HIV PEP & PrEP TAB
    if (activeTab === 'hiv') {
      renderHIVView();
      updateEHRNote();
      return;
    }

    // STANDARD CONTRACEPTIVE TABS
    let showSec1 = activeTab === 'all' || activeTab === 'chc';
    let showSec2 = activeTab === 'all' || activeTab === 'pop';
    let showSec3 = activeTab === 'all' || activeTab === 'nonhormonal';

    if (showSec1) {
      const chcItems = CONTRACEPTIVES.filter(c => c.section === 1 && matchesSearch(c, searchQuery));
      if (chcItems.length > 0 || activeTab !== 'all') {
        renderContraceptiveSection(1, 'Combined Hormonal Contraceptives (Estrogen + Progestin)', 'chc-header', chcItems);
      }
    }

    if (showSec2) {
      const popItems = CONTRACEPTIVES.filter(c => c.section === 2 && matchesSearch(c, searchQuery));
      if (popItems.length > 0 || activeTab !== 'all') {
        renderContraceptiveSection(2, 'Progestin-Only Contraceptives', 'pop-header', popItems);
      }
    }

    if (showSec3) {
      const nonHormonalItems = CONTRACEPTIVES.filter(c => c.section === 3 && matchesSearch(c, searchQuery));
      if (nonHormonalItems.length > 0 || activeTab !== 'all') {
        renderContraceptiveSection(3, 'Non-Hormonal Contraceptives', 'nonhormonal-header', nonHormonalItems);
      }
    }

    if (activeTab === 'all') {
      renderECView();
      renderHIVView();
    }
    updateEHRNote();
  }

  // Render a section of contraceptives
  function renderContraceptiveSection(sectionNumber, title, headerClass, items) {
    const sectionElement = document.createElement('section');
    sectionElement.className = 'dashboard-section';

    // Build the section head
    let sharedAlertsHtml = '';
    
    // Add shared alerts block if applicable
    if (sectionNumber === 1) {
      const sharedAlerts = [];
      if (activeRisks.length > 0) {
        // Evaluate shared contraindications for CHCs
        const dummyCHC = { chcRules: true };
        const dummyAlerts = screenMethod(dummyCHC, activeRisks, activeDrugs);
        dummyAlerts.forEach(a => {
          if (a.category === 4) {
            sharedAlerts.push(`<strong>USMEC 4 \u2014 ${a.condition}</strong>: ${a.reason}`);
          }
        });
      }
      if (sharedAlerts.length > 0) {
        sharedAlertsHtml = `
          <div class="shared-alert-bar">
            <strong><i class="fas fa-exclamation-circle"></i> absolute contraindications detected for all Combined Hormonal methods:</strong>
            ${sharedAlerts.map(sa => `<span>\u2022 ${sa}</span>`).join('')}
          </div>
        `;
      }
    }

    sectionElement.innerHTML = `
      <div class="section-head ${headerClass}">
        <h2><i class="fas fa-heartbeat"></i> ${title}</h2>
        <span class="section-badge">Section ${sectionNumber}</span>
      </div>
      ${sharedAlertsHtml}
      <div class="matrix-grid" id="grid-section-${sectionNumber}"></div>
    `;

    dynamicContainer.appendChild(sectionElement);
    const grid = document.getElementById(`grid-section-${sectionNumber}`);

    items.forEach(item => {
      const alerts = screenMethod(item, activeRisks, activeDrugs);
      const isContraindicated = alerts.some(a => a.category === 4);
      const isCaution = alerts.some(a => a.category === 3);

      let safetyBadgeText = 'USMEC 1/2 Suitable';
      let safetyBadgeClass = 'badge-suitable';
      let borderClass = '';

      if (isContraindicated) {
        safetyBadgeText = 'USMEC 4 Contraindicated';
        safetyBadgeClass = 'badge-contraindicated';
      } else if (isCaution) {
        safetyBadgeText = 'USMEC 3 Caution';
        safetyBadgeClass = 'badge-caution';
      }

      if (item.section === 1) borderClass = 'chc-border';
      else if (item.section === 2) borderClass = 'pop-border';
      else borderClass = 'nonhormonal-border';

      const card = document.createElement('div');
      card.className = `method-card ${borderClass}`;
      
      let alertsHtml = '';
      if (alerts.length > 0) {
        alertsHtml = `
          <div class="card-alerts ${isContraindicated ? 'danger-alert' : 'caution-alert'}">
            ${alerts.map(a => `<div><strong>${a.condition}</strong>: ${a.reason}</div>`).join('')}
          </div>
        `;
      }

      card.innerHTML = `
        <div class="card-top">
          <div>
            <h3 class="method-title">${item.name}</h3>
            <span class="method-sub">${item.type}</span>
          </div>
          <span class="safety-badge ${safetyBadgeClass}">${safetyBadgeText}</span>
        </div>
        <div class="card-metrics">
          <div class="metric-item">
            <span class="metric-label">Typical Efficacy</span>
            <span class="metric-val">${item.efficacy.typical}</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Est. Cost/mo</span>
            <span class="metric-val">${item.cost}</span>
          </div>
        </div>
        <div class="card-footer-notes">${item.specialNotes}</div>
        ${alertsHtml}
      `;

      card.addEventListener('click', () => openModal(item, 'contraceptive'));
      grid.appendChild(card);
    });
  }

  // Render Emergency Contraception View
  function renderECView() {
    const sectionElement = document.createElement('section');
    sectionElement.className = 'dashboard-section';
    sectionElement.innerHTML = `
      <div class="section-head ec-header">
        <h2><i class="fas fa-exclamation-triangle"></i> Section IV \u2014 Emergency Contraception ("Morning After")</h2>
        <span class="section-badge">Emergency</span>
      </div>
      <div class="info-banner">
        <i class="fas fa-info-circle"></i>
        <div>
          <strong>Key clinical principles:</strong> All EC should be initiated as soon as possible after unprotected intercourse. No clinical examination or pregnancy test is required before providing oral EC. Oral EC should not be withheld from overweight/obese patients, but the <strong>Copper IUD</strong> should be discussed as the most effective alternative.
        </div>
      </div>
      <div class="ec-table-container">
        <table>
          <thead>
            <tr>
              <th style="width: 20%;">Agent</th>
              <th style="width: 15%;">Efficacy</th>
              <th style="width: 15%;">Time Window</th>
              <th style="width: 15%;">BMI Limitations</th>
              <th style="width: 10%;">Rx?</th>
              <th style="width: 25%;">Key Continuation Dosing</th>
            </tr>
          </thead>
          <tbody id="ecTableBody"></tbody>
        </table>
      </div>
    `;

    dynamicContainer.appendChild(sectionElement);
    const tableBody = document.getElementById('ecTableBody');

    EMERGENCY_CONTRACEPTIONS.forEach(item => {
      const tr = document.createElement('tr');
      tr.style.cursor = 'pointer';
      tr.innerHTML = `
        <td class="ec-row-name">${item.name}</td>
        <td><span class="safety-badge badge-suitable" style="font-size:0.75rem;">${item.efficacy}</span></td>
        <td>${item.timeWindow}</td>
        <td>${item.bmiEffect}</td>
        <td><strong>${item.rxRequired}</strong></td>
        <td style="font-size: 0.8rem; color: var(--text-secondary);">${item.continuation}</td>
      `;
      tr.addEventListener('click', () => openModal(item, 'ec'));
      tableBody.appendChild(tr);
    });
  }

  // Render HIV PEP & PrEP View
  function renderHIVView() {
    const sectionElement = document.createElement('section');
    sectionElement.className = 'dashboard-section';
    sectionElement.innerHTML = `
      <div class="section-head hiv-header">
        <h2><i class="fas fa-shield-alt"></i> Section V \u2014 HIV Post-Exposure (PEP) & Pre-Exposure Prophylaxis (PrEP)</h2>
        <span class="section-badge">PEP & PrEP</span>
      </div>
      
      <!-- PEP REGIMENS -->
      <h3 style="font-size: 1.25rem; margin-top: 1rem; border-left: 4px solid var(--color-hiv-light); padding-left: 8px;">HIV PEP (Post-Exposure Prophylaxis)</h3>
      <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
        <strong>Dose initiation:</strong> First dose ASAP, ideally within 24 hours, no later than 72 hours post-exposure. Do NOT delay for pending labs. Duration: <strong>28 days</strong>. Efficacy: <strong>~80\u201390% reduction</strong>.
      </p>
      
      <div class="ec-table-container">
        <table>
          <thead>
            <tr>
              <th style="width: 25%;">PEP Regimen</th>
              <th style="width: 20%;">Components / Dosing</th>
              <th style="width: 10%;">Food?</th>
              <th style="width: 25%;">Key Contraindications / Interactions</th>
              <th style="width: 20%;">Approx. Cost</th>
            </tr>
          </thead>
          <tbody id="pepTableBody"></tbody>
        </table>
      </div>

      <!-- PrEP REGIMENS -->
      <h3 style="font-size: 1.25rem; margin-top: 1.5rem; border-left: 4px solid var(--color-pop-light); padding-left: 8px;">HIV PrEP (Pre-Exposure Prophylaxis)</h3>
      <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
        USPSTF Grade A recommendation mandates full insurance coverage without cost-sharing under the Affordable Care Act.
      </p>

      <div class="ec-table-container">
        <table>
          <thead>
            <tr>
              <th style="width: 20%;">PrEP Regimen</th>
              <th style="width: 20%;">Dose & Frequency</th>
              <th style="width: 15%;">Renal Requirement</th>
              <th style="width: 25%;">Side Effects & Limitations</th>
              <th style="width: 20%;">Approx. Cost</th>
            </tr>
          </thead>
          <tbody id="prepTableBody"></tbody>
        </table>
      </div>

      <!-- PEP / PrEP Monitoring Schedules -->
      <div class="hiv-grid">
        <!-- PEP Schedule -->
        <div class="schedule-card">
          <div class="schedule-header">
            <span>PEP Monitoring Schedule</span>
            <span style="font-size: 0.75rem; color: var(--text-secondary);">CDC 2025 Guidelines</span>
          </div>
          <div class="timeline" id="pepTimeline"></div>
        </div>

        <!-- PrEP Schedule -->
        <div class="schedule-card">
          <div class="schedule-header">
            <span>PrEP Monitoring Schedule</span>
            <span style="font-size: 0.75rem; color: var(--text-secondary);">Oral vs. Injectable</span>
          </div>
          <div class="timeline" id="prepTimeline"></div>
        </div>
      </div>
    `;

    dynamicContainer.appendChild(sectionElement);

    // Populate PEP table
    const pepTable = document.getElementById('pepTableBody');
    HIV_PEP.regimens.forEach(r => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="ec-row-name">${r.name}</td>
        <td>${r.components}<br><small style="color:var(--text-secondary);">${r.frequency}</small></td>
        <td>${r.food}</td>
        <td style="font-size: 0.8rem; color: var(--text-secondary);">${r.contraindications}</td>
        <td><strong>${r.cost}</strong></td>
      `;
      pepTable.appendChild(tr);
    });

    // Populate PrEP table
    const prepTable = document.getElementById('prepTableBody');
    HIV_PREP.regimens.forEach(r => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="ec-row-name">${r.name}</td>
        <td>${r.dose}<br><small style="color:var(--text-secondary);">${r.frequency}</small></td>
        <td><span class="safety-badge badge-suitable" style="background-color:rgba(37,99,235,0.1); color:var(--color-hiv-light); border-color:rgba(37,99,235,0.2);">${r.renal}</span></td>
        <td style="font-size: 0.8rem; color: var(--text-secondary);">
          <strong>SE:</strong> ${r.sideEffects}<br>
          <strong>Limits:</strong> ${r.limitations}
        </td>
        <td><strong>${r.cost}</strong></td>
      `;
      prepTable.appendChild(tr);
    });

    // Populate PEP Timeline
    const pepTimeline = document.getElementById('pepTimeline');
    HIV_PEP.monitoring.forEach(m => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <div class="timeline-time">${m.timepoint}</div>
        <div class="timeline-desc">${m.tests}</div>
      `;
      pepTimeline.appendChild(item);
    });

    // Populate PrEP Timeline
    const prepTimeline = document.getElementById('prepTimeline');
    HIV_PREP.monitoring.forEach(m => {
      const item = document.createElement('div');
      item.className = 'timeline-item prep-item';
      item.innerHTML = `
        <div class="timeline-time">${m.timepoint}</div>
        <div class="timeline-desc">
          <strong>Oral:</strong> ${m.oral}<br>
          <strong>Injectable:</strong> ${m.injectable}
        </div>
      `;
      prepTimeline.appendChild(item);
    });
  }

  // Render Efficacy Tiers view (CDC Framework)
  function renderEfficacyTiersView() {
    const sectionElement = document.createElement('section');
    sectionElement.className = 'dashboard-section';
    sectionElement.innerHTML = `
      <div class="section-head" style="background: linear-gradient(90deg, #10b981 0%, #047857 100%);">
        <h2><i class="fas fa-layer-group"></i> CDC Tiered Effectiveness Framework</h2>
        <span class="section-badge">Efficacy Tiers</span>
      </div>
      
      <div class="efficacy-tier-section">
        <!-- Tier 1 -->
        <div class="tier-container">
          <div class="tier-title-container">
            <div class="tier-num-badge tier-1-color">1</div>
            <div class="tier-header-info">
              <h3>Tier 1 \u2014 Most Effective</h3>
              <p>Typical-Use Failure Rate: <strong>&lt; 1%</strong> | User Dependence: <strong>None ("Set and forget")</strong></p>
            </div>
          </div>
          <div class="tier-methods-list">
            <div class="tier-method-pill">Etonogestrel implant (0.05%)</div>
            <div class="tier-method-pill">Mirena LNG-IUD (0.1\u20130.2%)</div>
            <div class="tier-method-pill">Liletta LNG-IUD (0.1\u20130.2%)</div>
            <div class="tier-method-pill">Kyleena LNG-IUD (0.1\u20130.2%)</div>
            <div class="tier-method-pill">Skyla LNG-IUD (0.1\u20130.2%)</div>
            <div class="tier-method-pill">Copper IUD (Paragard) (0.8%)</div>
          </div>
        </div>

        <!-- Tier 2 -->
        <div class="tier-container">
          <div class="tier-title-container">
            <div class="tier-num-badge tier-2-color">2</div>
            <div class="tier-header-info">
              <h3>Tier 2 \u2014 Very Effective</h3>
              <p>Typical-Use Failure Rate: <strong>4\u20136%</strong> | User Dependence: <strong>Requires quarterly visit/injection</strong></p>
            </div>
          </div>
          <div class="tier-methods-list">
            <div class="tier-method-pill">DMPA Depot injection IM (4\u20136%)</div>
            <div class="tier-method-pill">DMPA Depot injection SC (4\u20136%)</div>
          </div>
        </div>

        <!-- Tier 3 -->
        <div class="tier-container">
          <div class="tier-title-container">
            <div class="tier-num-badge tier-3-color">3</div>
            <div class="tier-header-info">
              <h3>Tier 3 \u2014 Effective</h3>
              <p>Typical-Use Failure Rate: <strong>7\u20139%</strong> | User Dependence: <strong>Daily, weekly, or monthly compliance</strong></p>
            </div>
          </div>
          <div class="tier-methods-list">
            <div class="tier-method-pill">Combined Oral Contraceptives (COCs) (7\u20139%)</div>
            <div class="tier-method-pill">Transdermal Patch (7\u20139%)</div>
            <div class="tier-method-pill">Vaginal Ring (7\u20139%)</div>
            <div class="tier-method-pill">Progestin-Only Pills (POPs) (5\u20139%)</div>
          </div>
        </div>

        <!-- Tier 4 -->
        <div class="tier-container">
          <div class="tier-title-container">
            <div class="tier-num-badge tier-4-color">4</div>
            <div class="tier-header-info">
              <h3>Tier 4 \u2014 Less Effective</h3>
              <p>Typical-Use Failure Rate: <strong>13\u201328%</strong> | User Dependence: <strong>Adherence required with every act of intercourse</strong></p>
            </div>
          </div>
          <div class="tier-methods-list">
            <div class="tier-method-pill">External (male) condom (13%)</div>
            <div class="tier-method-pill">Internal (female) condom (21%)</div>
            <div class="tier-method-pill">Diaphragm + spermicide (17%)</div>
            <div class="tier-method-pill">Cervical cap (17\u201323%)</div>
            <div class="tier-method-pill">Contraceptive sponge (14\u201327%)</div>
            <div class="tier-method-pill">Spermicide alone (21%)</div>
            <div class="tier-method-pill">Fertility awareness methods (Up to 22\u201323%)</div>
            <div class="tier-method-pill">Withdrawal (20\u201322%)</div>
          </div>
        </div>
      </div>
    `;
    dynamicContainer.appendChild(sectionElement);
    updateEHRNote();
  }

  function updateEHRNote() {
    const risksMapped = activeRisks.map(rId => {
      const factor = RISK_FACTORS.find(f => f.id === rId);
      return factor ? factor.label : rId;
    });
    const drugsMapped = activeDrugs.map(dId => {
      const drug = INTERACTING_DRUGS.find(d => d.id === dId);
      return drug ? drug.label : dId;
    });

    const note = `CONTRACEPTION & HIV PREV CLINICAL DECISION NOTE
--------------------------------------------------
ACTIVE PATIENT CLINICAL FACTORS:
- Risk Factors: ${risksMapped.length > 0 ? risksMapped.join(', ') : 'None'}
- Interacting Meds: ${drugsMapped.length > 0 ? drugsMapped.join(', ') : 'None'}

CLINICAL RECOMMENDATIONS:
- Evaluated birth control selections against USMEC criteria.
- Screened for drug-drug interactions (CYP3A4 inducers/lamotrigine).
- Confirmed safety criteria checked. Refer to selected patient cards for individual USMEC classifications.`;

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
          alert('Contraception Clinical Note copied to clipboard!');
        });
      }
    });
  }

  // Initial dashboard load
  updateDashboard();
});

/* ════════════════════════════════════════════════════════════════════════
 *  nutrient-info-data.js
 *
 *  NUTRIENT_INFO      — display labels + reference text for every nutrient
 *                        (macros, vitamins, minerals, amino acids, fiber,
 *                        hydration & extras) used by the nutrition detail
 *                        overlay.
 *  NUTRITION_SECTIONS — nav structure + field lists for the overlay.
 *
 *  display  — formatted name shown in UI: "Vitamin B6 | Pyridoxine"
 *             or "Mg | Magnesium" for minerals. Falls back to key.
 *  role     — what the nutrient does physiologically.
 *  fitness  — specific relevance for athletes / active people.
 * ════════════════════════════════════════════════════════════════════════ */

const NUTRIENT_INFO = {

  /* ── Macros ──────────────────────────────────────────────────────────── */
  'Protein': {
    display: 'Protein | Amino acid chains',
    role: 'Proteins are chains of amino acids — the structural and functional building blocks of every cell. They drive enzyme activity, hormonal signalling, and immune defence, and are synthesised and broken down continuously throughout the day.',
    fitness: 'The primary driver of muscle protein synthesis. Aim for 1.6–2.2 g per kg of bodyweight daily for hypertrophy. Distribute across 3–5 meals of roughly 0.4 g/kg each, with emphasis on leucine-rich sources post-training.'
  },
  'Fat': {
    display: 'Fat | Dietary lipids',
    role: 'Dietary fats are a dense energy substrate (9 kcal/g), the structural backbone of every cell membrane, and essential for absorbing fat-soluble vitamins (A, D, E, K). They include saturated, monounsaturated, and polyunsaturated forms — each with distinct metabolic roles.',
    fitness: 'Low-fat diets can suppress testosterone and fat-soluble vitamin absorption. Omega-3 fatty acids (EPA/DHA) reduce exercise-induced inflammation and support joint health. Minimum ~20% of daily calories from fat for hormonal function.'
  },
  'Carbs': {
    display: 'Carbs | Carbohydrates',
    role: 'Carbohydrates are the body\'s preferred fuel for high-intensity work. Digested into glucose, they are stored as glycogen in muscle (~400 g) and liver (~80–100 g). The brain runs almost exclusively on glucose under normal conditions.',
    fitness: 'Glycogen is rate-limiting for efforts above ~70% VO₂ max. Carbs around training (30–60 min pre, within 30 min post) accelerate performance and recovery. Lower-carb approaches may suit aerobic-only athletes but impair high-intensity output.'
  },

  /* ── Fat-soluble vitamins ─────────────────────────────────────────────── */
  'Vitamin A': {
    display: 'Vitamin A | Retinol',
    role: 'Fat-soluble vitamin essential for vision (especially low-light), skin and mucous membrane integrity, immune defence, and gene regulation via retinoic acid receptors. Found preformed as retinol in animal foods and as provitamin-A carotenoids (beta-carotene) in plants.',
    fitness: 'Supports epithelial repair after training-induced tissue damage and helps sustain immune function during heavy blocks. Excess supplemental retinol is toxic — prefer food sources.',
    rda: '700 µg/day (women) · 900 µg/day (men)',
    sources: [
      { food: 'Beef Liver', amount: '4,968 µg / 100 g', emoji: '🥩' },
      { food: 'Sweet Potato', amount: '961 µg / 100 g', emoji: '🍠' },
      { food: 'Carrots', amount: '835 µg / 100 g', emoji: '🥕' },
      { food: 'Spinach', amount: '469 µg / 100 g', emoji: '🥬' },
      { food: 'Eggs', amount: '149 µg / egg', emoji: '🥚' },
    ],
    deficiency: 'Night blindness, dry skin and mucous membranes, increased frequency of infections, slow wound healing.',
  },
  'Vitamin D': {
    display: 'Vitamin D | Calciferol',
    role: 'Steroid-like hormone synthesised in skin from UVB light (D3) or consumed from fatty fish and fortified foods (D2/D3). Regulates calcium and phosphorus absorption, bone mineralisation, and expression of hundreds of genes involved in immune and muscle function.',
    fitness: 'Critical for muscle strength, testosterone biosynthesis, and stress-fracture prevention. Deficiency is extremely common in athletes training indoors or in northern latitudes. Target serum 25(OH)D of 40–60 ng/mL.',
    rda: '600 IU/day (general) · 1,000–2,000 IU/day (athletes, especially low-sun climates)',
    sources: [
      { food: 'Salmon', amount: '526 IU / 100 g', emoji: '🐟' },
      { food: 'Sardines', amount: '272 IU / 100 g', emoji: '🐠' },
      { food: 'Egg Yolk', amount: '37 IU / yolk', emoji: '🥚' },
      { food: 'Fortified Milk', amount: '~120 IU / cup', emoji: '🥛' },
      { food: 'Sunlight (UVB)', amount: '~1,000 IU / 15–20 min', emoji: '☀️' },
    ],
    deficiency: 'Muscle weakness and pain, bone loss, stress fractures, fatigue, low mood, suppressed immune function, low testosterone.',
  },
  'Vitamin E': {
    display: 'Vitamin E | Tocopherol',
    role: 'Family of eight fat-soluble compounds (alpha-tocopherol is most bioactive); primary lipid-soluble antioxidant protecting cell membranes from peroxidation. Also modulates immune signalling and prostaglandin synthesis.',
    fitness: 'Helps limit exercise-induced oxidative damage to muscle membranes. Mega-dose supplementation (>400 IU/day) may blunt mitochondrial adaptations to training — food sources (nuts, seeds, oils) are preferred.',
    rda: '15 mg/day',
    sources: [
      { food: 'Sunflower Seeds', amount: '26 mg / 100 g', emoji: '🌻' },
      { food: 'Almonds', amount: '25 mg / 100 g', emoji: '🥜' },
      { food: 'Hazelnuts', amount: '15 mg / 100 g', emoji: '🌰' },
      { food: 'Avocado', amount: '2.1 mg / 100 g', emoji: '🥑' },
      { food: 'Spinach', amount: '2.0 mg / 100 g', emoji: '🥬' },
    ],
    deficiency: 'Nerve and muscle damage, immune suppression, impaired vision. Rare in healthy adults eating varied diets.',
  },
  'Vitamin K': {
    display: 'Vitamin K | Phylloquinone / Menaquinone',
    role: 'K1 (phylloquinone, found in leafy greens) is essential for blood clotting via carboxylation of clotting factors. K2 (menaquinone, found in fermented foods and animal products) activates osteocalcin for bone mineralisation and matrix Gla protein for arterial calcium clearance.',
    fitness: 'K2 MK-7 in particular supports bone density and reduces arterial calcification — relevant for longevity-focused athletes. Synergises with Vitamin D for calcium utilisation.',
    rda: '90 µg/day (women) · 120 µg/day (men)',
    sources: [
      { food: 'Kale', amount: '817 µg / 100 g (K1)', emoji: '🥬' },
      { food: 'Spinach', amount: '483 µg / 100 g (K1)', emoji: '🥬' },
      { food: 'Natto', amount: '1,103 µg / 100 g (K2)', emoji: '🫘' },
      { food: 'Broccoli', amount: '102 µg / 100 g (K1)', emoji: '🥦' },
      { food: 'Aged Cheese', amount: '10–75 µg / 100 g (K2)', emoji: '🧀' },
    ],
    deficiency: 'Easy bruising, prolonged bleeding, weakened bone density, increased fracture risk.',
  },
  'Vitamin K1': {
    display: 'Vitamin K1 | Phylloquinone',
    role: 'The plant form of Vitamin K found predominantly in leafy greens (kale, spinach, broccoli). Acts as co-factor for hepatic gamma-carboxylation of coagulation factors II, VII, IX, and X, enabling blood clotting. Also carboxylates osteocalcin for bone mineralisation, though less potently than K2.',
    fitness: 'Adequate K1 ensures functional blood clotting — practically relevant for athletes managing contact-sport injuries. Widely available through vegetables; isolated deficiency in adults is uncommon on a varied diet.',
    rda: '90 µg/day (women) · 120 µg/day (men)',
    sources: [
      { food: 'Kale', amount: '817 µg / 100 g', emoji: '🥬' },
      { food: 'Spinach', amount: '483 µg / 100 g', emoji: '🥬' },
      { food: 'Broccoli', amount: '102 µg / 100 g', emoji: '🥦' },
      { food: 'Brussels Sprouts', amount: '177 µg / 100 g', emoji: '🥦' },
      { food: 'Parsley', amount: '1,640 µg / 100 g', emoji: '🌿' },
    ],
    deficiency: 'Impaired blood clotting, easy bruising, prolonged wound bleeding.',
  },
  'Vitamin K2': {
    display: 'Vitamin K2 | Menaquinone (MK-4 / MK-7)',
    role: 'Animal and fermentation-derived form of Vitamin K (MK-4 from meat/eggs; MK-7 from natto and aged cheeses). More potent than K1 at activating osteocalcin (bone density) and matrix Gla protein (arterial calcium clearance), and has a significantly longer half-life (MK-7 ~72 hours vs K1 ~1 hour).',
    fitness: 'MK-7 (90–360 µg/day) is the most relevant form for bone density and cardiovascular protection in athletes. Synergises strongly with Vitamin D3 and calcium for optimal musculoskeletal function. Particularly important for athletes with low dairy/fermented food intake.',
    rda: '90–120 µg/day (no separate DRI; included in total K)',
    sources: [
      { food: 'Natto (fermented soy)', amount: '1,103 µg / 100 g', emoji: '🫘' },
      { food: 'Hard Cheese', amount: '76 µg / 100 g', emoji: '🧀' },
      { food: 'Egg Yolk', amount: '32 µg / 100 g', emoji: '🥚' },
      { food: 'Chicken (dark meat)', amount: '35 µg / 100 g', emoji: '🍗' },
      { food: 'Butter', amount: '15 µg / 100 g', emoji: '🧈' },
    ],
    deficiency: 'Poor bone mineralisation, arterial calcification, reduced osteocalcin activity.',
  },

  /* ── Water-soluble vitamins (B-complex + C) ───────────────────────────── */
  'Vitamin C': {
    display: 'Vitamin C | Ascorbic acid',
    role: 'Potent water-soluble antioxidant required for collagen hydroxylation (tendons, ligaments, skin), iron absorption enhancement, carnitine synthesis, and catecholamine production. Cannot be stored in large amounts — daily intake is essential.',
    fitness: 'Taking 500–1000 mg around training accelerates collagen synthesis in connective tissue. Excessive doses (>2 g/day) may blunt some hormetic adaptations. Particularly important for injury recovery.',
    rda: '75 mg/day (women) · 90 mg/day (men) · +35 mg for smokers',
    sources: [
      { food: 'Bell Pepper (red)', amount: '128 mg / 100 g', emoji: '🫑' },
      { food: 'Kiwi', amount: '93 mg / 100 g', emoji: '🥝' },
      { food: 'Broccoli', amount: '89 mg / 100 g', emoji: '🥦' },
      { food: 'Strawberries', amount: '59 mg / 100 g', emoji: '🍓' },
      { food: 'Orange', amount: '53 mg / 100 g', emoji: '🍊' },
    ],
    deficiency: 'Fatigue, slow wound healing, joint and muscle pain, frequent colds, bleeding gums. Severe deficiency causes scurvy.',
  },
  'Vitamin B1': {
    display: 'Vitamin B1 | Thiamine',
    role: 'Co-enzyme (as TPP) in pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase — both rate-limiting steps of ATP production from carbohydrates. Also essential for nerve impulse transmission and branched-chain amino acid catabolism.',
    fitness: 'Athletes with high carbohydrate throughput have elevated thiamine needs. Deficiency causes fatigue, reduced power output, and peripheral neuropathy. Needs scale with total energy intake.',
    rda: '1.1 mg/day (women) · 1.2 mg/day (men)',
    sources: [
      { food: 'Pork Loin', amount: '0.74 mg / 100 g', emoji: '🥩' },
      { food: 'Sunflower Seeds', amount: '1.48 mg / 100 g', emoji: '🌻' },
      { food: 'Lentils (cooked)', amount: '0.53 mg / 100 g', emoji: '🫘' },
      { food: 'Oats', amount: '0.46 mg / 100 g', emoji: '🌾' },
      { food: 'Brown Rice', amount: '0.20 mg / 100 g', emoji: '🍚' },
    ],
    deficiency: 'Fatigue, muscle cramps, poor carbohydrate metabolism, nerve tingling, weakness. Severe deficiency causes beriberi.',
  },
  'Vitamin B2': {
    display: 'Vitamin B2 | Riboflavin',
    role: 'Precursor to FAD and FMN — essential electron carriers in the mitochondrial electron transport chain and in fatty-acid beta-oxidation. Also involved in the recycling of glutathione, the body\'s primary antioxidant.',
    fitness: 'Supports both aerobic energy production and antioxidant capacity. Needs increase with training volume. Dairy and eggs are rich sources; vegans may need to monitor intake.',
    rda: '1.1 mg/day (women) · 1.3 mg/day (men)',
    sources: [
      { food: 'Beef Liver', amount: '2.9 mg / 100 g', emoji: '🥩' },
      { food: 'Almonds', amount: '1.0 mg / 100 g', emoji: '🥜' },
      { food: 'Eggs', amount: '0.46 mg / egg', emoji: '🥚' },
      { food: 'Greek Yogurt', amount: '0.27 mg / 100 g', emoji: '🥛' },
      { food: 'Mushrooms', amount: '0.45 mg / 100 g', emoji: '🍄' },
    ],
    deficiency: 'Cracked lips and corners of the mouth, sore throat, sensitivity to light, skin inflammation.',
  },
  'Vitamin B3': {
    display: 'Vitamin B3 | Niacin',
    role: 'Precursor to NAD+ and NADP+ — universal electron acceptors in glycolysis, the citric acid cycle, fatty-acid synthesis, and DNA repair. The body can synthesise limited niacin from tryptophan (60:1 ratio).',
    fitness: 'Adequate NAD+ levels support mitochondrial biogenesis and aerobic capacity. High-dose niacin supplementation (pharmacological doses) causes flushing, may raise blood sugar, and can impair fat oxidation during exercise.',
    rda: '14 mg/day (women) · 16 mg/day (men)',
    sources: [
      { food: 'Chicken Breast', amount: '13.7 mg / 100 g', emoji: '🍗' },
      { food: 'Tuna', amount: '13.3 mg / 100 g', emoji: '🐟' },
      { food: 'Peanuts', amount: '13.1 mg / 100 g', emoji: '🥜' },
      { food: 'Salmon', amount: '8.7 mg / 100 g', emoji: '🐟' },
      { food: 'Brown Rice', amount: '3.0 mg / 100 g', emoji: '🍚' },
    ],
    deficiency: 'Fatigue, dermatitis, diarrhoea, confusion. Severe deficiency causes pellagra.',
  },
  'Vitamin B5': {
    display: 'Vitamin B5 | Pantothenic acid',
    role: 'Core structural component of Coenzyme A (CoA), which is required for the activation of acetyl groups in the citric acid cycle, fatty-acid synthesis and oxidation, and steroid hormone production. Widely distributed in food — isolated deficiency is rare.',
    fitness: 'CoA-dependent pathways underpin energy metabolism at every intensity. Adequate B5 supports sustained output during long sessions and adrenal hormone synthesis under chronic training stress.',
    rda: '5 mg/day',
    sources: [
      { food: 'Chicken Liver', amount: '6.7 mg / 100 g', emoji: '🥩' },
      { food: 'Sunflower Seeds', amount: '6.7 mg / 100 g', emoji: '🌻' },
      { food: 'Avocado', amount: '1.4 mg / 100 g', emoji: '🥑' },
      { food: 'Mushrooms', amount: '1.5 mg / 100 g', emoji: '🍄' },
      { food: 'Sweet Potato', amount: '1.0 mg / 100 g', emoji: '🍠' },
    ],
    deficiency: 'Rare. Fatigue, numbness, muscle cramps, irritability, digestive issues.',
  },
  'Vitamin B6': {
    display: 'Vitamin B6 | Pyridoxine',
    role: 'Co-factor (as pyridoxal-5-phosphate, PLP) in over 100 enzymatic reactions — principally amino acid transamination and decarboxylation, glycogen phosphorylase (glycogen breakdown), haemoglobin synthesis, and neurotransmitter production (serotonin, dopamine, GABA).',
    fitness: 'High protein intake increases B6 requirements. Important for mood, sleep quality, and glycogen mobilisation during training. Low B6 blunts haemoglobin production and aerobic capacity.',
    rda: '1.3 mg/day (adults) · 1.5–1.7 mg/day (50+)',
    sources: [
      { food: 'Salmon', amount: '0.94 mg / 100 g', emoji: '🐟' },
      { food: 'Chicken Breast', amount: '0.90 mg / 100 g', emoji: '🍗' },
      { food: 'Banana', amount: '0.37 mg / 100 g', emoji: '🍌' },
      { food: 'Sweet Potato', amount: '0.33 mg / 100 g', emoji: '🍠' },
      { food: 'Spinach', amount: '0.24 mg / 100 g', emoji: '🥬' },
    ],
    deficiency: 'Irritability, confusion, weak immune function, poor recovery, low mood, anaemia.',
  },
  'Vitamin B7': {
    display: 'Vitamin B7 | Biotin',
    role: 'Co-factor for five carboxylase enzymes involved in fatty-acid synthesis, gluconeogenesis, amino acid catabolism, and the citric acid cycle. Also plays a structural role in histone modification affecting gene expression.',
    fitness: 'Underpins energy metabolism pathways active during high-volume training. True dietary deficiency is rare but can occur with excessive raw-egg-white consumption (avidin binds biotin). Hair/nail claims for supplementation are not well supported.',
    rda: '30 µg/day',
    sources: [
      { food: 'Beef Liver', amount: '49 µg / 75 g', emoji: '🥩' },
      { food: 'Eggs (cooked)', amount: '10 µg / egg', emoji: '🥚' },
      { food: 'Salmon', amount: '5 µg / 75 g', emoji: '🐟' },
      { food: 'Sunflower Seeds', amount: '2.6 µg / 30 g', emoji: '🌻' },
      { food: 'Sweet Potato', amount: '2.4 µg / 100 g', emoji: '🍠' },
    ],
    deficiency: 'Hair thinning, brittle nails, skin rashes, fatigue, neurological symptoms. Very rare without raw egg white overconsumption.',
  },
  'Vitamin B8': {
    display: 'Vitamin B8 | Inositol',
    role: 'Polyol involved in cell membrane phospholipids (phosphatidylinositol) and second-messenger signalling cascades (IP3/DAG). Also plays roles in serotonin and insulin signalling. Not a true vitamin (the body synthesises it from glucose), but often grouped with B-complex.',
    fitness: 'May support insulin sensitivity, improving glucose uptake into muscle. Some evidence for reducing anxiety and improving sleep quality during high-stress training phases.'
  },
  'Vitamin B9': {
    display: 'Vitamin B9 | Folate',
    role: 'Co-factor (as tetrahydrofolate) in one-carbon transfer reactions essential for DNA synthesis, repair, and methylation; red blood cell maturation; and amino acid inter-conversions (serine↔glycine, homocysteine↔methionine). Found as folate in food; folic acid is the synthetic supplemental form.',
    fitness: 'Supports red blood cell production and thus oxygen-carrying capacity. Elevated homocysteine (marker of low folate/B12) is associated with cardiovascular risk. Particularly important during growth phases and for female athletes of reproductive age.',
    rda: '400 µg/day · 600 µg/day during pregnancy',
    sources: [
      { food: 'Edamame', amount: '311 µg / 100 g', emoji: '🫛' },
      { food: 'Lentils (cooked)', amount: '181 µg / 100 g', emoji: '🫘' },
      { food: 'Asparagus', amount: '149 µg / 100 g', emoji: '🌿' },
      { food: 'Spinach (cooked)', amount: '146 µg / 100 g', emoji: '🥬' },
      { food: 'Avocado', amount: '81 µg / 100 g', emoji: '🥑' },
    ],
    deficiency: 'Megaloblastic anaemia, fatigue, mouth sores, poor cellular repair, elevated homocysteine.',
  },
  'Vitamin B12': {
    display: 'Vitamin B12 | Cobalamin',
    role: 'Co-factor for two human enzymes: methionine synthase (DNA methylation, homocysteine recycling) and methylmalonyl-CoA mutase (odd-chain fatty-acid and amino-acid catabolism). Required for myelin sheath synthesis and red blood cell formation. Stored in the liver; deficiency takes years to develop but is irreversible if neurological damage occurs.',
    fitness: 'Deficiency causes megaloblastic anaemia, fatigue, weakness, and peripheral neuropathy — all directly limiting athletic performance. Exclusively found in animal products; supplementation is essential for plant-based athletes.',
    rda: '2.4 µg/day',
    sources: [
      { food: 'Beef Liver', amount: '70 µg / 100 g', emoji: '🥩' },
      { food: 'Salmon', amount: '3.2 µg / 100 g', emoji: '🐟' },
      { food: 'Greek Yogurt', amount: '1.3 µg / 100 g', emoji: '🥛' },
      { food: 'Eggs', amount: '1.1 µg / egg', emoji: '🥚' },
      { food: 'Fortified plant milk', amount: '~1.0 µg / cup', emoji: '🌱' },
    ],
    deficiency: 'Fatigue, weakness, anaemia, tingling extremities, poor coordination, memory issues, mood changes. Only found in animal products — vegans must supplement.',
  },
  'Biotin': {
    display: 'Vitamin B7 | Biotin',
    role: 'Co-factor for five carboxylase enzymes involved in fatty-acid synthesis, gluconeogenesis, amino acid catabolism, and the citric acid cycle. Also plays a structural role in histone modification affecting gene expression.',
    fitness: 'Underpins energy metabolism pathways active during high-volume training. True dietary deficiency is rare. Hair and nail supplement claims are not well evidenced beyond correcting actual deficiency.',
    rda: '30 µg/day',
    sources: [
      { food: 'Beef Liver', amount: '49 µg / 75 g', emoji: '🥩' },
      { food: 'Eggs (cooked)', amount: '10 µg / egg', emoji: '🥚' },
      { food: 'Salmon', amount: '5 µg / 75 g', emoji: '🐟' },
      { food: 'Sunflower Seeds', amount: '2.6 µg / 30 g', emoji: '🌻' },
    ],
    deficiency: 'Hair thinning, brittle nails, skin rashes, fatigue. Very rare without raw egg white overconsumption.',
  },
  'Folate': {
    display: 'Vitamin B9 | Folate',
    role: 'Co-factor in one-carbon transfer reactions essential for DNA synthesis, repair, and methylation; red blood cell maturation; and amino acid inter-conversions. Found naturally as folate in food; folic acid is the synthetic form used in supplements and fortification.',
    fitness: 'Supports red blood cell production and oxygen-carrying capacity. Low folate raises homocysteine, increasing cardiovascular risk. Especially important during rapid growth phases and for female athletes.',
    rda: '400 µg/day · 600 µg/day during pregnancy',
    sources: [
      { food: 'Edamame', amount: '311 µg / 100 g', emoji: '🫛' },
      { food: 'Lentils (cooked)', amount: '181 µg / 100 g', emoji: '🫘' },
      { food: 'Spinach (cooked)', amount: '146 µg / 100 g', emoji: '🥬' },
      { food: 'Asparagus', amount: '149 µg / 100 g', emoji: '🌿' },
    ],
    deficiency: 'Megaloblastic anaemia, fatigue, mouth sores, elevated homocysteine.',
  },
  'Choline': {
    display: 'Choline | Acetylcholine precursor',
    role: 'Essential nutrient (not strictly a vitamin but often grouped with B-complex) that is the precursor to acetylcholine (neuromuscular transmission and memory), phosphatidylcholine (cell membranes), and betaine (methylation donor). The liver can synthesise limited amounts.',
    fitness: 'Plasma choline drops during prolonged endurance exercise; depletion contributes to fatigue. Adequate intake supports cognitive performance, neuromuscular efficiency, and liver fat export under high caloric load.',
    rda: '425 mg/day (women) · 550 mg/day (men)',
    sources: [
      { food: 'Beef Liver', amount: '418 mg / 100 g', emoji: '🥩' },
      { food: 'Eggs', amount: '147 mg / egg', emoji: '🥚' },
      { food: 'Salmon', amount: '90 mg / 100 g', emoji: '🐟' },
      { food: 'Edamame', amount: '56 mg / 100 g', emoji: '🫛' },
      { food: 'Broccoli', amount: '40 mg / 100 g', emoji: '🥦' },
    ],
    deficiency: 'Liver damage (fatty liver), muscle damage, poor memory, fatigue.',
  },

  /* ── Minerals — major ─────────────────────────────────────────────────── */
  'Calcium': {
    display: 'Ca | Calcium',
    role: 'Most abundant mineral in the body (99% in bone and teeth). Circulating calcium triggers muscle contraction (all muscle types), nerve impulse transmission via action potentials, hormone secretion, and blood clotting cascades. Bone continuously remodels in response to mechanical load.',
    fitness: 'Essential for preventing stress fractures, especially in female athletes and those with low energy availability. Post-exercise calcium intake (with Vitamin D and K2) aids bone remodelling. Absorption is impaired by excessive sodium and caffeine.',
    rda: '1,000 mg/day (adults) · 1,200 mg/day (women 51+, men 71+)',
    sources: [
      { food: 'Greek Yogurt', amount: '200 mg / 170 g', emoji: '🥛' },
      { food: 'Milk', amount: '300 mg / cup', emoji: '🥛' },
      { food: 'Sardines (w/ bones)', amount: '382 mg / 100 g', emoji: '🐠' },
      { food: 'Kale (cooked)', amount: '94 mg / 100 g', emoji: '🥬' },
      { food: 'Tofu (calcium-set)', amount: '350 mg / 100 g', emoji: '🧈' },
    ],
    deficiency: 'Muscle cramps, brittle nails, low bone density, increased stress-fracture risk. Severe deficiency causes osteoporosis.',
  },
  'Iron': {
    display: 'Fe | Iron',
    role: 'Central atom of the haem group in haemoglobin (oxygen transport) and myoglobin (oxygen storage in muscle). Also integral to cytochromes in the mitochondrial electron transport chain and to numerous enzymes in energy metabolism. Haem iron (from animal sources) is absorbed ~25%; non-haem (plant) iron ~5–15%.',
    fitness: 'Iron-deficiency anaemia directly caps VO₂ max and causes fatigue, breathlessness, and impaired cognition. Runners and female athletes are at highest risk. Vitamin C consumed alongside plant iron improves absorption.',
    rda: '18 mg/day (women 19–50) · 8 mg/day (men, women 51+)',
    sources: [
      { food: 'Beef Liver', amount: '6.5 mg / 100 g', emoji: '🥩' },
      { food: 'Beef (lean)', amount: '2.6 mg / 100 g', emoji: '🥩' },
      { food: 'Lentils (cooked)', amount: '3.3 mg / 100 g', emoji: '🫘' },
      { food: 'Spinach (cooked)', amount: '3.6 mg / 100 g', emoji: '🥬' },
      { food: 'Pumpkin Seeds', amount: '3.3 mg / 28 g', emoji: '🎃' },
    ],
    deficiency: 'Fatigue, pale skin, breathlessness on exertion, poor concentration, brittle nails. Severe deficiency causes iron-deficiency anaemia.',
  },
  'Magnesium': {
    display: 'Mg | Magnesium',
    role: 'Co-factor in over 300 enzymatic reactions including all ATP-utilising steps (ATP must bind magnesium to be active), protein synthesis, DNA replication and repair, and regulation of muscle and nerve excitability. Competes with calcium to regulate contraction–relaxation cycles.',
    fitness: 'Low magnesium is one of the most common micronutrient shortfalls in athletes. Manifests as muscle cramps, poor sleep quality, elevated resting heart rate, and blunted recovery. Losses increase significantly with heavy sweating.',
    rda: '310–320 mg/day (women) · 400–420 mg/day (men)',
    sources: [
      { food: 'Pumpkin Seeds', amount: '156 mg / 28 g', emoji: '🎃' },
      { food: 'Almonds', amount: '76 mg / 28 g', emoji: '🥜' },
      { food: 'Spinach (cooked)', amount: '78 mg / 100 g', emoji: '🥬' },
      { food: 'Black Beans (cooked)', amount: '60 mg / 100 g', emoji: '🫘' },
      { food: 'Dark Chocolate (70%+)', amount: '64 mg / 28 g', emoji: '🍫' },
    ],
    deficiency: 'Muscle cramps and twitches, fatigue, poor sleep, irritability, elevated resting heart rate. Severe deficiency causes arrhythmias and tremor.',
  },
  'Phosphorus': {
    display: 'P | Phosphorus',
    role: 'Second most abundant mineral in the body after calcium. Structural component of hydroxyapatite (bone and teeth), phospholipid bilayers (cell membranes), nucleotides (DNA/RNA), and the high-energy phosphate bonds in ATP and phosphocreatine (PCr) — the immediate energy currency for explosive effort.',
    fitness: 'Directly fuels maximal-intensity efforts via PCr resynthesis. Rarely deficient in people consuming adequate protein. Phosphate loading protocols have limited but real ergogenic support for endurance athletes.',
    rda: '700 mg/day (adults)',
    sources: [
      { food: 'Chicken Breast', amount: '228 mg / 100 g', emoji: '🍗' },
      { food: 'Salmon', amount: '252 mg / 100 g', emoji: '🐟' },
      { food: 'Greek Yogurt', amount: '210 mg / 170 g', emoji: '🥛' },
      { food: 'Lentils (cooked)', amount: '180 mg / 100 g', emoji: '🫘' },
      { food: 'Pumpkin Seeds', amount: '180 mg / 28 g', emoji: '🎃' },
    ],
    deficiency: 'Rare on adequate protein intake. Muscle weakness, bone pain, fatigue, loss of appetite.',
  },
  'Potassium': {
    display: 'K | Potassium',
    role: 'Primary intracellular cation (major positive ion inside cells). Maintains resting membrane potential in partnership with sodium, enabling action potentials in nerve and muscle. Drives sodium-potassium ATPase pumps that set cellular electrochemical gradients and regulate fluid volume.',
    fitness: 'Crucial for preventing exercise cramps and arrhythmias during prolonged sessions. Sweat potassium losses are substantial — replace through whole foods (bananas, sweet potato, coconut water) rather than isolated supplements.',
    rda: '2,600 mg/day (women) · 3,400 mg/day (men)',
    sources: [
      { food: 'Sweet Potato', amount: '475 mg / 100 g', emoji: '🍠' },
      { food: 'Banana', amount: '422 mg / 100 g', emoji: '🍌' },
      { food: 'White Beans (cooked)', amount: '561 mg / 100 g', emoji: '🫘' },
      { food: 'Coconut Water', amount: '600 mg / cup', emoji: '🥥' },
      { food: 'Potato (w/ skin)', amount: '425 mg / 100 g', emoji: '🥔' },
    ],
    deficiency: 'Muscle weakness, cramps, fatigue, constipation, irregular heartbeat. Severe deficiency causes dangerous cardiac arrhythmias.',
  },
  'Sodium': {
    display: 'Na | Sodium',
    role: 'Primary extracellular cation — governs plasma osmolality, blood volume, and blood pressure. Essential for initiating action potentials in nerve and muscle, intestinal nutrient absorption (sodium-coupled transporters), and kidney acid-base regulation.',
    fitness: 'Requirements scale sharply with sweat rate and environmental heat. Under-replacing sodium during prolonged endurance events (>2 hours) risks hyponatraemia, a potentially fatal dilution of blood sodium. Sports drinks with 500–700 mg/L sodium outperform water alone.',
    rda: '1,500 mg/day (adequate intake) · up to 2,300 mg/day (upper limit)',
    sources: [
      { food: 'Table Salt', amount: '2,325 mg / tsp', emoji: '🧂' },
      { food: 'Electrolyte Drink', amount: '~300–700 mg / L', emoji: '🥤' },
      { food: 'Pickles', amount: '~870 mg / 100 g', emoji: '🥒' },
      { food: 'Bread', amount: '~130 mg / slice', emoji: '🍞' },
      { food: 'Cheese', amount: '~370 mg / 28 g', emoji: '🧀' },
    ],
    deficiency: 'Headache, nausea, muscle cramps, fatigue, confusion. Severe deficiency causes hyponatraemia — dangerous during prolonged endurance events.',
  },
  'Zinc': {
    display: 'Zn | Zinc',
    role: 'Structural and catalytic component of over 300 enzymes spanning all major metabolic classes. Essential for immune cell development and function, wound healing, protein synthesis (ribosome structure), DNA transcription (zinc-finger proteins), taste and smell, and testosterone biosynthesis.',
    fitness: 'Intense training increases zinc losses via sweat, urine, and muscle damage repair. Low zinc measurably suppresses testosterone and growth hormone, slows wound healing, and impairs immune defence. Absorption is inhibited by phytates in grains and legumes.',
    rda: '8 mg/day (women) · 11 mg/day (men)',
    sources: [
      { food: 'Oysters', amount: '32 mg / 100 g', emoji: '🦪' },
      { food: 'Beef (lean)', amount: '4.8 mg / 100 g', emoji: '🥩' },
      { food: 'Pumpkin Seeds', amount: '2.2 mg / 28 g', emoji: '🎃' },
      { food: 'Chickpeas (cooked)', amount: '1.5 mg / 100 g', emoji: '🫘' },
      { food: 'Eggs', amount: '0.6 mg / egg', emoji: '🥚' },
    ],
    deficiency: 'Slow wound healing, hair loss, impaired taste/smell, frequent infections, low testosterone, poor recovery.',
  },
  'Selenium': {
    display: 'Se | Selenium',
    role: 'Trace mineral incorporated into the amino acid selenocysteine, found in selenoproteins including glutathione peroxidase (antioxidant defence), thioredoxin reductase (DNA repair, cell redox), and iodothyronine deiodinases (thyroid hormone conversion from T4 to active T3).',
    fitness: 'Protects muscle from oxidative damage during heavy training and supports thyroid function, which sets metabolic rate and energy availability. Toxic at supplemental doses above 400 µg/day — highly bioavailable from Brazil nuts (1–2 nuts = full daily requirement).',
    rda: '55 µg/day (adults)',
    sources: [
      { food: 'Brazil Nuts', amount: '~95 µg / nut', emoji: '🌰' },
      { food: 'Tuna', amount: '92 µg / 100 g', emoji: '🐟' },
      { food: 'Sardines', amount: '45 µg / 100 g', emoji: '🐠' },
      { food: 'Eggs', amount: '15 µg / egg', emoji: '🥚' },
      { food: 'Sunflower Seeds', amount: '19 µg / 28 g', emoji: '🌻' },
    ],
    deficiency: 'Muscle weakness, fatigue, impaired immune function, low thyroid output. Severe deficiency causes Keshan disease (cardiomyopathy).',
  },

  /* ── Minerals — trace ─────────────────────────────────────────────────── */
  'Manganese': {
    display: 'Mn | Manganese',
    role: 'Essential co-factor for manganese superoxide dismutase (MnSOD) — the primary mitochondrial antioxidant enzyme. Also required for enzymes involved in carbohydrate metabolism (pyruvate carboxylase), bone matrix protein synthesis, and wound healing.',
    fitness: 'Supports mitochondrial antioxidant defence and bone integrity in high-volume athletes. Widespread in plant foods; isolated deficiency is uncommon. Excessive manganese (industrial exposure) is neurotoxic.',
    rda: '1.8 mg/day (women) · 2.3 mg/day (men)',
    sources: [
      { food: 'Mussels', amount: '5.8 mg / 100 g', emoji: '🦪' },
      { food: 'Brown Rice (cooked)', amount: '1.1 mg / 100 g', emoji: '🍚' },
      { food: 'Pineapple', amount: '0.9 mg / 100 g', emoji: '🍍' },
      { food: 'Chickpeas (cooked)', amount: '1.0 mg / 100 g', emoji: '🫘' },
      { food: 'Almonds', amount: '0.6 mg / 28 g', emoji: '🥜' },
    ],
    deficiency: 'Very rare. May present as poor bone growth, impaired glucose tolerance, skin rash.',
  },
  'Copper': {
    display: 'Cu | Copper',
    role: 'Co-factor for enzymes including cytochrome c oxidase (the final step of electron transport chain — critical for aerobic ATP production), ceruloplasmin (iron metabolism and mobilisation), lysyl oxidase (collagen and elastin cross-linking), and superoxide dismutase (Cu/Zn-SOD).',
    fitness: 'Deficiency impairs iron mobilisation (causing anaemia even with adequate iron), weakens collagen in tendons and ligaments, and reduces aerobic efficiency. High-dose zinc supplementation competes with copper absorption.',
    rda: '900 µg/day (adults)',
    sources: [
      { food: 'Beef Liver', amount: '4,100 µg / 100 g', emoji: '🥩' },
      { food: 'Oysters', amount: '4,850 µg / 100 g', emoji: '🦪' },
      { food: 'Cashews', amount: '622 µg / 28 g', emoji: '🥜' },
      { food: 'Mushrooms', amount: '318 µg / 100 g', emoji: '🍄' },
      { food: 'Dark Chocolate (70%+)', amount: '500 µg / 28 g', emoji: '🍫' },
    ],
    deficiency: 'Fatigue, anaemia unresponsive to iron, frequent infections, weakened connective tissue. Rare in healthy adults.',
  },
  'Iodine': {
    display: 'I | Iodine',
    role: 'Trace mineral exclusively required for synthesis of thyroid hormones T3 (triiodothyronine) and T4 (thyroxine), which regulate basal metabolic rate, protein synthesis, bone growth, neurological development, and cardiac function.',
    fitness: 'Thyroid hormones set the metabolic baseline for athletic performance — inadequate iodine reduces energy availability, body temperature regulation, and rate of recovery. Iodised salt and seafood are primary sources; athletic populations restricting processed food may under-consume.',
    rda: '150 µg/day (adults)',
    sources: [
      { food: 'Seaweed (dried)', amount: '~1,000+ µg / g', emoji: '🌊' },
      { food: 'Cod', amount: '99 µg / 85 g', emoji: '🐟' },
      { food: 'Iodised Salt', amount: '75 µg / ¼ tsp', emoji: '🧂' },
      { food: 'Greek Yogurt', amount: '75 µg / 230 g', emoji: '🥛' },
      { food: 'Eggs', amount: '24 µg / egg', emoji: '🥚' },
    ],
    deficiency: 'Fatigue, weight gain, cold intolerance, goitre (enlarged thyroid). Severe deficiency impairs neurological development in pregnancy.',
  },
  'Chromium': {
    display: 'Cr | Chromium',
    role: 'Trace element that potentiates insulin signalling by facilitating glucose transporter (GLUT4) translocation to cell membranes, improving glucose uptake into muscle and adipose tissue. Essential at trace amounts; dietary requirement is in micrograms.',
    fitness: 'Adequate chromium enhances insulin sensitivity — relevant for body composition and post-exercise glycogen replenishment. Evidence for chromium picolinate supplementation beyond correcting deficiency is weak.',
    rda: '25 µg/day (women) · 35 µg/day (men)',
    sources: [
      { food: 'Broccoli', amount: '11 µg / 91 g', emoji: '🥦' },
      { food: 'Grape Juice', amount: '8 µg / cup', emoji: '🍇' },
      { food: 'Whole Wheat Bread', amount: '~2 µg / slice', emoji: '🍞' },
      { food: 'Potato (w/ skin)', amount: '~2 µg / 100 g', emoji: '🥔' },
      { food: 'Green Beans', amount: '~1 µg / 100 g', emoji: '🫛' },
    ],
    deficiency: 'Exceptionally rare; theorised to impair glucose tolerance. No well-established clinical deficiency syndrome in healthy adults.',
  },
  'Molybdenum': {
    display: 'Mo | Molybdenum',
    role: 'Essential co-factor for four human enzymes — xanthine oxidase (purine catabolism and uric acid production), sulfite oxidase (sulphur amino acid metabolism), aldehyde oxidase, and mitochondrial amidoxime reductase. Required in trace amounts.',
    fitness: 'Supports sulphur amino acid (methionine, cysteine) processing important in high-protein diets. Deficiency is exceptionally rare given its abundance in legumes, grains, and nuts.',
    rda: '45 µg/day (adults)',
    sources: [
      { food: 'Lentils (cooked)', amount: '148 µg / 100 g', emoji: '🫘' },
      { food: 'Black Beans (cooked)', amount: '129 µg / 100 g', emoji: '🫘' },
      { food: 'Brown Rice (cooked)', amount: '27 µg / 100 g', emoji: '🍚' },
      { food: 'Oats', amount: '32 µg / 100 g', emoji: '🌾' },
      { food: 'Peanuts', amount: '40 µg / 28 g', emoji: '🥜' },
    ],
    deficiency: 'Essentially unreported in humans eating a normal diet given widespread availability in legumes and grains.',
  },
  'Fluoride': {
    display: 'F | Fluoride',
    role: 'Trace mineral that incorporates into tooth enamel and bone as fluorapatite, significantly increasing hardness and resistance to acid dissolution. Not classified as essential for life, but strongly protective for dental health.',
    fitness: 'Dental health is a practical concern for athletes consuming high-sugar sports drinks and gels. Adequate fluoride through water and toothpaste limits enamel erosion and cavities that can affect performance and quality of life.',
    rda: '3 mg/day (women) · 4 mg/day (men) — adequate intake',
    sources: [
      { food: 'Fluoridated Tap Water', amount: '~0.7 mg / L', emoji: '🚰' },
      { food: 'Black Tea (brewed)', amount: '~0.3 mg / cup', emoji: '🍵' },
      { food: 'Fish (canned, w/ bones)', amount: '~0.2 mg / 100 g', emoji: '🐟' },
      { food: 'Fluoride Toothpaste (incidental)', amount: '~0.1–0.3 mg / brushing', emoji: '🪥' },
      { food: 'Raisins', amount: '~0.2 mg / 100 g', emoji: '🍇' },
    ],
    deficiency: 'Increased susceptibility to dental caries (cavities). No systemic deficiency syndrome beyond dental health.',
  },

  /* ── Amino acids ──────────────────────────────────────────────────────── */
  'Leucine': {
    display: 'Leucine | BCAA — mTOR trigger',
    role: 'Branched-chain amino acid (BCAA) and the most potent dietary activator of the mTORC1 signalling complex, which drives ribosomal protein synthesis. Leucine is catabolised directly in muscle tissue (unlike most amino acids processed in the liver) and acts as a nutritional sensor of protein availability.',
    fitness: '2–3 g leucine per meal maximally stimulates muscle protein synthesis (MPS). High-leucine sources: whey, eggs, beef, dairy. Particularly critical for older athletes where the leucine threshold for MPS rises.',
    requirement: '39 mg/kg/day (WHO/FAO/UNU, 2007)'
  },
  'Isoleucine': {
    display: 'Isoleucine | BCAA — glucose uptake',
    role: 'Branched-chain amino acid catabolised in muscle; involved in haemoglobin synthesis and stimulates glucose transporter (GLUT4) translocation, enhancing glucose uptake into muscle independently of insulin signalling.',
    fitness: 'Supports carbohydrate utilisation during exercise and contributes to secondary muscle protein synthesis signalling. Works synergistically with leucine and valine in BCAA supplements.',
    requirement: '20 mg/kg/day (WHO/FAO/UNU, 2007)'
  },
  'Valine': {
    display: 'Valine | BCAA — energy substrate',
    role: 'Branched-chain amino acid that serves as an alternative energy substrate in muscle during prolonged exercise. Involved in nitrogen balance and in sparing leucine and isoleucine from oxidation during catabolic states.',
    fitness: 'Contributes to the endurance fuel mix at high training volumes and during energy restriction. Least anabolic of the three BCAAs but important for nitrogen retention during caloric deficit.',
    requirement: '26 mg/kg/day (WHO/FAO/UNU, 2007)'
  },
  'Lysine': {
    display: 'Lysine | Collagen & carnitine',
    role: 'Essential amino acid (cannot be synthesised) required for collagen and elastin cross-linking (via hydroxylysine), calcium absorption enhancement, carnitine biosynthesis (fat transport into mitochondria), and immune antibody production.',
    fitness: 'Collagen synthesis for tendon and ligament health makes lysine particularly valuable for strength and power athletes. Carnitine production supports fat oxidation during lower-intensity training. Lysine is the limiting amino acid in most grain-based diets.',
    requirement: '30 mg/kg/day (WHO/FAO/UNU, 2007)'
  },
  'Methionine': {
    display: 'Methionine | Sulphur & methylation',
    role: 'Sulphur-containing essential amino acid; precursor to cysteine (antioxidant glutathione), taurine (bile conjugation, cardiac function), and the universal methyl donor S-adenosylmethionine (SAMe), which drives methylation reactions across epigenetics, neurotransmitters, and phospholipids.',
    fitness: 'Supports liver detoxification pathways stressed by high supplement and medication loads. Glutathione synthesis from methionine is a key antioxidant mechanism during heavy training. High intakes elevate homocysteine — ensure adequate B6, B9, B12 for recycling.',
    requirement: '15 mg/kg/day combined with cysteine (WHO/FAO/UNU, 2007) — methionine alone is largely sparable when cysteine intake is adequate'
  },
  'Threonine': {
    display: 'Threonine | Collagen & gut integrity',
    role: 'Essential amino acid integral to collagen and elastin structure (as hydroxyproline precursor), mucin glycoproteins forming the intestinal mucus barrier, and inter-conversion to glycine and serine for one-carbon metabolism and creatine synthesis.',
    fitness: 'Gut lining integrity from adequate threonine improves nutrient absorption efficiency — particularly relevant during caloric surplus or deficit phases. Supports structural collagen turnover in high-impact athletes.',
    requirement: '15 mg/kg/day (WHO/FAO/UNU, 2007)'
  },
  'Tryptophan': {
    display: 'Tryptophan | Serotonin & sleep',
    role: 'Essential amino acid and sole dietary precursor to serotonin (mood, gut motility, satiety) and melatonin (sleep-wake cycle regulation). Also converts to niacin (B3) at low efficiency (~60:1 ratio), and to the neuromodulator kynurenine under inflammatory conditions.',
    fitness: 'Evening consumption (e.g., from dairy, turkey) may improve sleep architecture and next-day recovery quality. Central tryptophan availability is depleted by prolonged exercise, contributing to central fatigue. Low tryptophan impairs mood and motivation during training blocks.',
    requirement: '4 mg/kg/day (WHO/FAO/UNU, 2007) — the lowest requirement of any essential amino acid'
  },
  'Phenylalanine': {
    display: 'Phenylalanine | Catecholamine precursor',
    role: 'Essential aromatic amino acid converted to tyrosine, then sequentially to the catecholamines dopamine, noradrenaline, and adrenaline — the primary excitatory neurotransmitters and stress hormones. Also incorporated directly into structural proteins.',
    fitness: 'Supports catecholamine synthesis required for motivation, focus, and the fight-or-flight response to intense training. Low availability under prolonged stress or caloric restriction may impair drive and pain tolerance.',
    requirement: '25 mg/kg/day combined with tyrosine (WHO/FAO/UNU, 2007) — phenylalanine alone is largely sparable when tyrosine intake is adequate'
  },
  'Histidine': {
    display: 'Histidine | Carnosine & histamine',
    role: 'Semi-essential amino acid (essential in infants and for buffer synthesis in adults). Precursor to histamine (immune and gastric acid signalling) and, critically, the dipeptide carnosine (with beta-alanine) — concentrated in muscle and brain, functioning as a pH buffer and antioxidant.',
    fitness: 'Carnosine synthesis from histidine buffers lactic acid accumulation during high-intensity efforts, delaying fatigue. Beta-alanine supplementation increases carnosine, but adequate histidine intake is the often-overlooked partner requirement.',
    requirement: '10 mg/kg/day (WHO/FAO/UNU, 2007)'
  },
  'Cysteine': {
    display: 'Cysteine | Glutathione & keratin',
    role: 'Conditionally essential sulphur amino acid synthesised from methionine. Precursor to the tripeptide glutathione (the body\'s master antioxidant), taurine, and the structural protein keratin (skin, hair, nails). Forms disulphide bridges critical to protein tertiary structure.',
    fitness: 'Glutathione depletion occurs under heavy oxidative stress from training; adequate cysteine (and N-acetylcysteine supplementally) helps maintain antioxidant capacity and supports immune function during competition periods.'
  },
  'Glycine': {
    display: 'Glycine | Collagen & creatine',
    role: 'Smallest and simplest amino acid; conditionally essential under high anabolic demand. Major constituent of collagen (~33% of residues), creatine (with arginine and methionine), and glutathione. Acts as an inhibitory neurotransmitter in the spinal cord and brain stem.',
    fitness: 'High-collagen demands in strength athletes may outpace synthesis capacity. Glycine supplementation (5–10 g with Vitamin C around training) accelerates connective tissue repair. Creatine synthesis at training loads may require exogenous glycine for optimal output.'
  },
  'Arginine': {
    display: 'Arginine | Nitric oxide & creatine',
    role: 'Semi-essential amino acid; the primary substrate for nitric oxide (NO) synthesis via nitric oxide synthase enzymes, which vasodilates blood vessels. Also a precursor to creatine, polyamines (cell growth), and urea-cycle waste nitrogen elimination.',
    fitness: 'Nitric oxide vasodilation increases muscle blood flow and nutrient delivery during exercise — the basis for "pump"-focused pre-workouts. Citrulline (which converts to arginine in the kidney) is more effective than direct arginine supplementation due to better bioavailability.'
  },
  'Glutamine': {
    display: 'Glutamine | Immune fuel & gut',
    role: 'Most abundant amino acid in plasma and muscle; conditionally essential under stress. Primary fuel source for rapidly dividing immune cells (lymphocytes, macrophages) and intestinal enterocytes. Also involved in nitrogen shuttling between tissues and acid-base regulation in the kidney.',
    fitness: 'Plasma glutamine is depleted after prolonged high-intensity training — a proposed mechanism underlying exercise-induced immunosuppression (the "open window" effect). Gut integrity during heavy training blocks benefits from adequate glutamine availability. Evidence for direct performance enhancement is modest.'
  },
  'Tyrosine': {
    display: 'Tyrosine | Dopamine & thyroid',
    role: 'Non-essential aromatic amino acid synthesised from phenylalanine. Precursor to catecholamines (dopamine, noradrenaline, adrenaline), melanin (skin pigment), and thyroid hormones T3 and T4 via iodination of thyroglobulin.',
    fitness: 'Supplemental tyrosine (500–2000 mg pre-session) may blunt cognitive decline during sleep deprivation or extreme physical stress. Supports thyroid hormone production underpinning metabolic rate and training adaptation.'
  },

  /* ── Fiber ────────────────────────────────────────────────────────────── */
  'Total Fiber': {
    display: 'Total Fiber | Dietary fibre',
    role: 'Sum of all non-digestible carbohydrate polymers: soluble (fermentable, gel-forming) and insoluble (structural, bulking). Fermented by colonic bacteria into short-chain fatty acids (SCFAs — acetate, propionate, butyrate) that fuel colonocytes and modulate inflammation systemically.',
    fitness: 'Adequate fibre promotes satiety on a controlled-calorie diet, stabilises blood glucose around training, and supports the gut microbiome that modulates immunity and systemic inflammation. Aim for 25–38 g/day depending on bodyweight.'
  },
  'Soluble Fiber': {
    display: 'Soluble Fiber | Fermentable fibre',
    role: 'Dissolves in water to form a viscous gel (e.g., oat beta-glucan, psyllium, pectin). Slows gastric emptying, blunts post-meal glucose and insulin spikes, feeds beneficial Bifidobacterium and Lactobacillus species, and lowers LDL cholesterol via bile acid sequestration.',
    fitness: 'Useful for managing energy levels and insulin around training without large blood-sugar swings. Prebiotic effect supports gut microbiome diversity linked to better recovery and immune resilience.'
  },
  'Insoluble Fiber': {
    display: 'Insoluble Fiber | Structural fibre',
    role: 'Does not dissolve; adds mechanical bulk to intestinal contents (e.g., cellulose, lignin, wheat bran). Speeds colonic transit, reduces constipation, dilutes potential carcinogens, and supports healthy bowel regularity.',
    fitness: 'Important for gut regularity under high-protein diets common in strength athletes. Prevents constipation-related discomfort that can impair training quality. Excessive insoluble fibre close to training can cause bloating and GI distress.'
  },

  /* ── Hydration & electrolytes ─────────────────────────────────────────── */
  'Water': {
    display: 'Water | Hydration',
    role: 'Universal biological solvent in which all metabolic reactions occur. Regulates core body temperature via sweat evaporation, transports nutrients and oxygen through blood and lymph, lubricates joints via synovial fluid, and maintains blood volume and pressure.',
    fitness: 'Even 2% body-mass dehydration measurably reduces strength (~10%), endurance, and cognitive performance. Pre-hydration is more effective than reactive drinking. Monitor urine colour (pale yellow = adequate). Needs vary from 2–8 L/day depending on body size, heat, and training load.'
  },
  'Electrolytes': {
    display: 'Electrolytes | Ionic minerals',
    role: 'Collective term for the minerals that carry electrical charge in solution: sodium, potassium, chloride, magnesium, calcium, and phosphate. Together they regulate osmotic pressure, nerve impulse transmission, muscle contraction, and acid-base balance.',
    fitness: 'Electrolyte balance — not water alone — governs athletic hydration. Replacing water without electrolytes during prolonged effort dilutes plasma sodium, risking hyponatraemia. Complete electrolyte replacement is critical for events exceeding 60–90 minutes.'
  },

  /* ── Carotenoids & other bioactives ───────────────────────────────────── */
  'Lutein + Zeaxanthin': {
    display: 'Lutein + Zeaxanthin | Macular carotenoids',
    role: 'Xanthophyll carotenoids selectively concentrated in the macular pigment of the retina, where they filter high-energy blue and UV light and act as antioxidants against photo-oxidative damage. Also found in the brain where they may support cognitive function.',
    fitness: 'Relevant for athletes with high screen exposure during recovery. Indirect benefit from reducing systemic oxidative load. Long-term intake is associated with reduced risk of macular degeneration and cataracts.'
  },
  'Cholesterol': {
    display: 'Cholesterol | Sterol lipid',
    role: 'Structural component of all animal cell membranes (modulating fluidity and rigidity). Precursor to all steroid hormones (testosterone, oestrogen, cortisol, aldosterone), vitamin D (via 7-dehydrocholesterol in skin), and bile acids required for fat digestion.',
    fitness: 'Dietary cholesterol has minimal impact on blood LDL-C for most people (~70% are "hypo-responders"). Supports testosterone and adrenal hormone production critical for training adaptations and stress resilience. Cardiovascular risk is more strongly linked to saturated and trans fat intake than to dietary cholesterol itself.'
  },
  'Omega-3': {
    display: 'Omega-3 | EPA / DHA',
    role: 'Long-chain polyunsaturated fatty acids (PUFAs): EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) from marine sources; ALA (alpha-linolenic acid) from plants. EPA/DHA are incorporated into cell membranes, reducing membrane rigidity, and serve as substrates for anti-inflammatory eicosanoids (resolvins, protectins).',
    fitness: '2–4 g EPA+DHA/day reduces exercise-induced muscle soreness, supports joint health, enhances muscle protein synthesis sensitisation in older athletes, and may improve reaction time via DHA\'s role in neuronal membrane fluidity. ALA conversion to EPA/DHA is <10% — fish or algae oil is necessary for therapeutic doses.'
  },
  'CoQ10': {
    display: 'CoQ10 | Ubiquinone / Ubiquinol',
    role: 'Fat-soluble quinone synthesised endogenously; essential electron carrier between complexes I/II and III in the mitochondrial electron transport chain. Also functions as the primary lipid-soluble antioxidant in the inner mitochondrial membrane, protecting against oxidative damage during electron transfer.',
    fitness: 'Synthesis decreases with age and is inhibited by statin drugs. Supplementation (100–300 mg/day as ubiquinol) may support energy production in older athletes or those on statins. Evidence for ergogenic benefit in healthy young athletes is modest.'
  },
  'Creatine': {
    display: 'Creatine | Phosphocreatine precursor',
    role: 'Naturally occurring nitrogenous compound synthesised from glycine, arginine, and methionine (primarily in liver and kidney). Stored in muscle as phosphocreatine (PCr) — the most rapidly available high-energy phosphate buffer, regenerating ATP during maximal-intensity efforts lasting 1–10 seconds.',
    fitness: 'The most extensively studied and evidence-based performance supplement. Loading phase: 20 g/day ×5 days; maintenance: 3–5 g/day. Increases maximal strength, power output, and high-intensity repeat-sprint capacity by ~5–15%. Also supports muscle hypertrophy by promoting satellite cell activity and intracellular water retention.'
  },
  /* ── Fat subtypes ────────────────────────────────────────────────────── */
  'Saturated Fat': {
    display: 'Saturated Fat | SFA',
    role: 'Fatty acids with no double bonds in their carbon chain, solid or semi-solid at room temperature. Found in animal products (dairy, meat, eggs) and tropical oils (coconut, palm). Primary dietary determinant of LDL cholesterol via downregulation of hepatic LDL receptor expression.',
    fitness: 'Some saturated fat is necessary for testosterone production and fat-soluble vitamin absorption. Excess palmitic and myristic acids raise cardiovascular risk markers. Generally keep below 10% of total calories while prioritising unsaturated fats.'
  },
  'Monounsaturated Fat': {
    display: 'Monounsaturated Fat | MUFA',
    role: 'Fatty acids with one double bond (oleic acid predominates). Found predominantly in olive oil, avocado, and nuts. MUFAs improve lipid profiles by lowering LDL while maintaining or raising HDL cholesterol, and have anti-inflammatory signalling properties.',
    fitness: 'The primary fat in the Mediterranean diet — associated with reduced cardiovascular risk and sustained energy. Supports cell membrane fluidity and hormone production without the inflammatory risks of excess saturated or trans fat.'
  },
  'Polyunsaturated Fat': {
    display: 'Polyunsaturated Fat | PUFA',
    role: 'Fatty acids with two or more double bonds — subdivided into omega-3 (EPA, DHA, ALA) and omega-6 (linoleic acid, arachidonic acid). Serve as essential structural lipids in cell membranes and as precursors to eicosanoids that modulate inflammation and immune signalling.',
    fitness: 'Essential for joint health, brain function, and hormonal signalling. The modern diet\'s omega-6:omega-3 ratio is often 15:1 vs the ideal ~4:1, driving chronic inflammation. Prioritising omega-3 rich PUFAs over refined omega-6 seed oils improves recovery.'
  },
  'CLA': {
    display: 'CLA | Conjugated linoleic acid',
    role: 'A family of naturally occurring positional trans fatty acids (c9,t11 and t10,c12 isomers) found in dairy fat and ruminant meat. Unlike industrial trans fats, dietary CLA has anti-obesogenic and potentially anti-carcinogenic properties, modulating PPARγ activity and fat storage signals.',
    fitness: 'The t10,c12 isomer shows modest fat-mass reduction and lean-mass retention in some dose-dependent studies (3–6 g/day). Effects are most pronounced in overweight populations. Grass-fed dairy contains 3–5× more CLA than grain-fed.'
  },
  'MCT Fat': {
    display: 'MCT Fat | Medium-chain triglycerides',
    role: 'Triglycerides with fatty acids of 6–12 carbons (caproic, caprylic, capric, lauric acids). Unlike long-chain fats, MCTs absorb directly into portal circulation without lymphatic packaging, and are rapidly oxidised in the liver to ketone bodies.',
    fitness: 'Provide fast-acting fuel and support ketone production for fat-adapted athletes. May spare glycogen and support cognitive clarity during endurance efforts. Excessive intake (>30 g/day) can cause GI distress. Caprylic acid (C8) is the most ketogenic subtype.'
  },
  'Omega-3 ALA': {
    display: 'Omega-3 ALA | Alpha-linolenic acid',
    role: 'The short-chain plant-derived omega-3 essential fatty acid found in flaxseeds, chia seeds, walnuts, and hemp. Acts as a substrate for EPA and DHA synthesis, though human conversion is inefficient (<10% for EPA, <1% for DHA due to competing delta-6-desaturase demand from linoleic acid).',
    fitness: 'Contributes to omega-3 status but cannot replace marine EPA/DHA for anti-inflammatory and neurocognitive effects. Valuable for vegan athletes as the dietary omega-3 foundation; algae-derived DHA supplementation is recommended alongside it to achieve therapeutic omega-3 levels.'
  },
  'Omega-3 DHA': {
    display: 'Omega-3 DHA | Docosahexaenoic acid',
    role: 'The longest-chain omega-3 PUFA (22 carbons); the dominant structural fatty acid in neuronal membranes and retinal photoreceptors — ~40% of total brain PUFA content. Supports membrane fluidity, synaptic transmission, and resolution of neuroinflammation.',
    fitness: 'Critical for cognitive function, reaction time, and visual acuity. Supports resolution of exercise-induced inflammation. Particularly important for contact-sport athletes due to its role in neuronal membrane integrity and neuroprotection.'
  },
  'Omega-3 EPA': {
    display: 'Omega-3 EPA | Eicosapentaenoic acid',
    role: '20-carbon marine omega-3 PUFA that serves as the primary substrate for anti-inflammatory eicosanoids (series-3 prostaglandins, resolvins, protectins). Competes with arachidonic acid at cyclooxygenase enzymes, shifting systemic prostaglandin balance away from pro-inflammatory mediators.',
    fitness: 'Most effective omega-3 for reducing DOMS and exercise-induced inflammation. Also shown to reduce depressive symptoms and support mood under high-load training. Combined EPA+DHA target is 2–4 g/day for athletes.'
  },
  'Omega-3 EPA/DHA': {
    display: 'Omega-3 EPA/DHA | Marine omega-3 combination',
    role: 'Combined long-chain marine omega-3 fatty acids from fish oil or algae oil. EPA drives anti-inflammatory eicosanoid production while DHA provides structural membrane integrity in neurons and cell membranes throughout the body. Both are necessary for optimal effect.',
    fitness: 'The active therapeutic combination — 2–4 g/day reduces muscle soreness, supports joint health, enhances mood, and may increase muscle protein synthesis sensitivity in older athletes. Algae oil provides vegan-accessible EPA+DHA with equivalent bioavailability to fish oil.'
  },
  'Linoleic Acid': {
    display: 'Linoleic Acid | Omega-6 essential fatty acid',
    role: 'The primary dietary omega-6 essential fatty acid (18 carbons, 2 double bonds). Precursor to arachidonic acid (AA), which drives pro-inflammatory eicosanoid synthesis, and also to GLA (anti-inflammatory when delta-6-desaturase is functioning). Found abundantly in seed oils, nuts, and whole grains.',
    fitness: 'Essential in small amounts but over-consumed in modern diets relative to omega-3. The linoleic acid:EPA+DHA ratio drives systemic inflammatory tone. Athletes should obtain linoleic acid from whole-food sources (walnuts, sunflower seeds) rather than heavily processed seed oils.'
  },
  'Palmitoleic Acid': {
    display: 'Palmitoleic Acid | Omega-7 MUFA lipokine',
    role: 'Omega-7 monounsaturated fatty acid (16 carbons, 1 double bond) synthesised endogenously from palmitate and found in macadamia nuts, sea buckthorn, and some fish. Uniquely functions as a lipokine — a fatty acid hormone — signalling between adipose tissue, liver, muscle, and pancreas to influence insulin sensitivity and inflammation.',
    fitness: 'Emerging research suggests palmitoleic acid may improve insulin sensitivity and reduce inflammatory markers. Acts as a satiety signal and a biomarker of metabolic health. Currently found mainly in whole-food sources; isolated supplementation evidence is limited.'
  },

  /* ── Protein types & structural derivatives ──────────────────────────── */
  'Whey Protein': {
    display: 'Whey Protein | Fast-absorbing dairy protein',
    role: 'Water-soluble fraction of milk protein (~20% of total milk protein), separated during cheese making. Rich in branched-chain amino acids — particularly leucine (~10–11%) — and rapidly digested, producing sharp plasma amino acid peaks within 60–90 minutes of ingestion.',
    fitness: 'Gold-standard post-workout protein for maximally stimulating muscle protein synthesis. 20–40 g post-training provides sufficient leucine (~2–3 g) to saturate mTORC1 signalling. Whey isolate (~90% protein) suits lactose-intolerant athletes; concentrate (~70–80%) is more economical.'
  },
  'Casein Protein': {
    display: 'Casein Protein | Slow-release dairy protein',
    role: 'The dominant milk protein (~80%), forming a gel-like clot in stomach acid that creates a slow, sustained amino acid release over 5–7 hours. Provides anti-catabolic protection by maintaining elevated plasma amino acids during prolonged fasting periods.',
    fitness: 'Ideal pre-sleep protein source — 40 g before bed increases overnight muscle protein synthesis without disrupting sleep. Slower absorption makes it less acutely anabolic than whey post-workout, but superior for overnight recovery and muscle retention during caloric restriction.'
  },
  'Casein + Whey Protein': {
    display: 'Casein + Whey | Blended dairy protein',
    role: 'Combines the rapid anabolic spike of whey with the sustained amino acid release of casein, smoothing the plasma amino acid profile. Provides both immediate post-workout stimulation of muscle protein synthesis and extended anti-catabolic protection across several hours.',
    fitness: 'A pragmatic all-in-one protein solution — particularly useful for meal replacement contexts or when timing multiple protein sources is impractical. Evidence shows blended proteins outperform either alone for net muscle gain over 24-hour windows.'
  },
  'Whey + Casein': {
    display: 'Whey + Casein | Blended dairy protein',
    role: 'Blend of fast-absorbing whey and slow-release casein providing complementary amino acid kinetics: an initial anabolic spike from whey followed by sustained plasma amino acid elevation from casein across several hours.',
    fitness: 'Useful for covering both the acute post-training window and the prolonged overnight fast in a single serving. Studies on blended proteins show enhanced 24-hour muscle protein balance compared to single-source protein.'
  },
  'Complete Protein': {
    display: 'Complete Protein | All essential amino acids',
    role: 'A protein source containing all nine essential amino acids (EAAs) in sufficient quantities: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine. Animal proteins and a few plant proteins (soy, quinoa, buckwheat) qualify as naturally complete.',
    fitness: 'Complete proteins are the most efficient dietary building blocks for muscle protein synthesis. Animal-source complete proteins typically have higher leucine content and DIAAS digestibility scores than plant sources, though strategic combinations of plant proteins can achieve completeness.'
  },
  'Complete Plant Protein': {
    display: 'Complete Plant Protein | Vegan complete protein',
    role: 'Plant-derived proteins that provide all nine essential amino acids — primarily soy, quinoa, buckwheat, hemp, and strategically blended legume+grain pairs. Generally lower in leucine and DIAAS digestibility than animal proteins, often requiring larger serving sizes to deliver equivalent EAA flux.',
    fitness: 'Critical for plant-based athletes. Soy protein is the closest plant equivalent to whey in leucine content and digestibility. Pea+rice blends (70:30) closely match whey\'s amino acid profile. Aim for 20–30% more total protein daily to compensate for lower digestibility scores.'
  },
  'Pure Protein': {
    display: 'Pure Protein | Isolated protein fraction',
    role: 'Protein isolates or concentrates with minimal fat, carbohydrate, and micronutrient content — typically achieving 85–95%+ protein by weight after filtration or ion-exchange processing. Maximises protein delivery per gram of supplement consumed.',
    fitness: 'Useful during caloric restriction when every gram and calorie is managed tightly. The purity advantage is marginal for most athletes in caloric surplus; the amino acid profile and leucine content matter more than isolation purity.'
  },
  'BCAAs': {
    display: 'BCAAs | Branched-chain amino acids',
    role: 'The three branched-chain amino acids — leucine, isoleucine, and valine — which bypass hepatic first-pass metabolism and are catabolised directly in muscle tissue. Represent ~35% of the essential amino acids in muscle protein. Leucine is the primary mTORC1 activator; isoleucine stimulates GLUT4; valine serves as an alternative fuel substrate.',
    fitness: 'Stimulate muscle protein synthesis via leucine\'s mTORC1 activation, reduce DOMS, and provide direct fuel during prolonged exercise. Most effective when total protein intake is low (<1.4 g/kg/day); benefits are attenuated when dietary protein is already adequate (>1.6 g/kg/day).'
  },
  'Collagen': {
    display: 'Collagen | Connective tissue protein',
    role: 'The most abundant protein in the body (~30% of total protein mass), forming the fibrous scaffold of tendons, ligaments, cartilage, bone, and skin. Composed primarily of glycine (~33%), proline, and hydroxyproline in a right-handed triple-helix. Vitamin C-dependent prolyl hydroxylase is required for hydroxylating proline into the stable helical form.',
    fitness: '15–25 g hydrolysed collagen with 50 mg Vitamin C, 60 minutes before connective-tissue-loading exercise, measurably increases collagen synthesis markers in tendons. Well evidenced for injury prevention and rehabilitation. Does not substitute for complete protein for muscle hypertrophy due to its very low leucine content.'
  },
  'Proline': {
    display: 'Proline | Collagen structural amino acid',
    role: 'Non-essential amino acid (conditionally essential under high connective tissue demand) that constitutes ~12–15% of collagen residues. Its unique cyclic pyrrolidine ring structure imparts rigidity to the collagen triple helix. Converted to hydroxyproline by vitamin C-dependent prolyl hydroxylase in the endoplasmic reticulum.',
    fitness: 'Adequate proline supports tendon, ligament, and cartilage structural integrity under high mechanical loading. Vitamin C co-administration is essential for the prolyl hydroxylase reaction — making collagen or bone broth + Vitamin C a synergistic connective-tissue intervention.'
  },
  'Hydroxyproline': {
    display: 'Hydroxyproline | Post-translational collagen marker',
    role: 'Modified amino acid formed from proline via vitamin C-dependent hydroxylation — found almost exclusively in collagen and elastin. Functions as the cross-linking residue that stabilises the collagen triple helix. Urinary hydroxyproline is a clinical marker of collagen breakdown and bone resorption.',
    fitness: 'Elevated urinary hydroxyproline in athletes indicates connective tissue breakdown exceeding synthesis — a cue for recovery or collagen nutritional support. Dietary hydroxyproline from collagen-rich foods (bone broth, gelatin) directly supports connective tissue remodelling.'
  },
  'Carnosine': {
    display: 'Carnosine | Intramuscular pH buffer',
    role: 'Dipeptide of beta-alanine and histidine concentrated in skeletal muscle (type II fibres) and brain tissue. Functions primarily as an intracellular pH buffer, accepting H⁺ ions produced during high-intensity anaerobic glycolysis. Also has antioxidant and anti-glycation properties at physiological concentrations.',
    fitness: 'Muscle carnosine content directly determines resistance to acidosis-driven fatigue during repeated high-intensity efforts. Increased by beta-alanine supplementation (3.2–6.4 g/day), which raises muscle carnosine 40–80% over 4–10 weeks. The transient tingling (paraesthesia) is harmless — split doses or sustained-release formulas eliminate it.'
  },
  'Gelatin': {
    display: 'Gelatin | Heat-processed collagen',
    role: 'Partially hydrolysed collagen produced by heating connective tissue (bones, skin, cartilage). Provides the same amino acid profile as collagen (glycine, proline, hydroxyproline) in a water-soluble, readily absorbed form. Further enzymatic hydrolysis produces collagen peptides with even faster absorption kinetics.',
    fitness: '15 g gelatin with 50 mg Vitamin C taken 60 minutes before tendon-loading exercise measurably increases collagen synthesis in tendons and ligaments. A cost-effective alternative to collagen peptide supplements with equivalent connective-tissue support and a long history of use in joint rehabilitation protocols.'
  },
  'Ketones': {
    display: 'Ketones | Endogenous lipid-derived fuel',
    role: 'Water-soluble lipid-derived molecules — beta-hydroxybutyrate (BHB), acetoacetate, and acetone — produced in hepatic mitochondria from fatty acid oxidation during carbohydrate restriction or fasting. BHB is the primary circulating ketone used by brain, heart, and muscle as an alternative to glucose.',
    fitness: 'Fat-adapted athletes use ketones as a primary aerobic fuel, reducing glycogen dependency at moderate intensities. Exogenous ketone supplements (BHB salts or esters) may spare glycogen in some contexts, though performance enhancement evidence in carb-fed athletes is mixed. Ketones also signal AMPK activation and NLRP3 inflammasome inhibition — anti-inflammatory beyond fuel value.'
  },

  /* ── Carbohydrate categories & aliases ───────────────────────────────── */
  'Complex Carbs': {
    display: 'Complex Carbs | Polysaccharides',
    role: 'Long-chain carbohydrates (starches, glycogen, and some fibres) requiring multi-step enzymatic digestion before absorption as glucose. Provide a more sustained glycaemic response than simple sugars, modulated by food matrix, particle size, cooking method, and amylose:amylopectin ratio.',
    fitness: 'Backbone of the pre-training meal — consumed 2–3 hours before exercise to sustain muscle glycogen without blood sugar spikes or GI distress. Whole-grain, legume, and root vegetable sources combine complex carbs with micronutrients, fibre, and phytonutrients absent from refined alternatives.'
  },
  'Fast Carbs': {
    display: 'Fast Carbs | High-GI carbohydrates',
    role: 'Simple or highly processed carbohydrates rapidly digested and absorbed, producing a sharp blood glucose and insulin rise. Include glucose, maltose, white rice, white bread, sports drinks, and gels. Gastric emptying is fast and intestinal absorption nearly complete within 30–60 minutes.',
    fitness: 'Strategically valuable during exercise (30–60 g/hour for efforts >60 min to maintain blood glucose and spare glycogen) and within 30–45 minutes post-exercise to rapidly spike insulin for glycogen resynthesis and protein anabolism. Avoid outside these windows when managing body composition.'
  },
  'Fast Sugars': {
    display: 'Fast Sugars | Rapidly absorbed monosaccharides',
    role: 'Monosaccharides (glucose, fructose) and disaccharides (sucrose, lactose, maltose) requiring no digestion — absorbed directly across the intestinal epithelium via SGLT1 (glucose) and GLUT5 (fructose) transporters, rapidly raising blood glucose.',
    fitness: 'Intra-workout glucose delivery (during events >60 min) is a well-established performance strategy. Post-workout fructose+glucose combinations (2:1 ratio) replenish both liver glycogen (fructose) and muscle glycogen (glucose) simultaneously — particularly useful after extended endurance sessions depleting both stores.'
  },
  'Fast-Release Carbs': {
    display: 'Fast-Release Carbs | Rapid glycaemic carbohydrates',
    role: 'Carbohydrates with fast gastric emptying and intestinal absorption kinetics — encompassing both simple sugars and highly gelatinised or finely milled starches (waxy maize, dextrose, maltodextrin). Characterised by GI >70 and rapid insulin response.',
    fitness: 'The peri-workout carbohydrate of choice — high-GI carbs consumed before, during, or immediately post-training accelerate glycogen loading, blunt cortisol, and initiate anabolic insulin signalling faster than low-GI alternatives. Avoid in excess outside the training window.'
  },
  'Slow Carbs': {
    display: 'Slow Carbs | Low-GI carbohydrates',
    role: 'Carbohydrates with slow digestion and absorption kinetics — whole grains, legumes, vegetables, and intact fruits. Characterised by GI <55 and low glycaemic load, producing gradual blood glucose and insulin rises due to intact cell walls, fibre content, protein co-occurrence, and resistant starch.',
    fitness: 'Preferred for general daily carbohydrate intake and pre-training meals (2–3+ hours before exercise). Reduce insulin variability, sustain energy during lower-intensity training, and support body composition goals by limiting excessive insulin exposure and improving satiety.'
  },
  'Resistant Starch': {
    display: 'Resistant Starch | Prebiotic fermentable starch',
    role: 'Starch that resists small intestinal digestion and ferments in the colon, where microbiome bacteria produce short-chain fatty acids — primarily butyrate, the main colonocyte fuel. Found in raw or cooled starchy foods (green bananas, cooked-and-cooled rice or potato, legumes, high-amylose corn).',
    fitness: 'Feeds beneficial Bifidobacterium and Lactobacillus, increasing butyrate that improves gut lining integrity and reduces systemic inflammation. Has a low glycaemic impact while still providing prebiotic substrate. Cooking and then cooling starches increases resistant starch content 2–4× versus eating hot.'
  },
  'Fibre': {
    display: 'Fibre | Dietary fibre (alias)',
    role: 'Non-digestible carbohydrate polymers (soluble and insoluble) that pass through the small intestine intact and are partially or fully fermented in the colon. Modulate gut motility, blunt postprandial glucose, reduce cholesterol absorption, and support microbiome diversity via SCFA production.',
    fitness: 'Adequate fibre promotes satiety, stabilises blood glucose around training, and supports the gut microbiome that modulates immunity and systemic inflammation. Aim for 25–38 g/day. Avoid large fibre doses immediately before exercise to prevent GI distress from fermentation gas.'
  },
  'Minimal Fibre': {
    display: 'Minimal Fibre | Low-residue carbohydrates',
    role: 'Carbohydrate sources with very low dietary fibre content — refined grains, white rice, sports gels, bananas, and fruit juices. Minimal fibre accelerates gastric emptying, reduces GI bulk, and minimises fermentation-related gas and bloating during digestion.',
    fitness: 'Strategically used peri-workout — especially pre-race or before high-intensity sessions — to reduce the risk of GI distress. White rice, ripe bananas, and sports gels are classic low-fibre training fuels. A chronically low-fibre diet has significant microbiome and metabolic costs outside the training context.'
  },

  /* ── Minerals (missing) ───────────────────────────────────────────────── */
  'Chloride': {
    display: 'Cl⁻ | Chloride',
    role: 'Dominant extracellular anion, functioning as the counterion to sodium in plasma and interstitial fluid to maintain electroneutrality. Essential for gastric acid production (HCl), chloride-bicarbonate exchange in red blood cells for CO₂ transport, and renal acid-base regulation via tubular exchange.',
    fitness: 'Lost in proportion to sodium in sweat — standard electrolyte replacement (sodium chloride in sports drinks) covers both simultaneously. Isolated deficiency is rare. Relevant for athletes in extreme heat or performing ultra-endurance events where large NaCl sweat losses reduce plasma volume and raise cramping risk.',
    rda: '2,300 mg/day (adequate intake)',
    sources: [
      { food: 'Table Salt', amount: '3,550 mg / tsp', emoji: '🧂' },
      { food: 'Electrolyte Drink', amount: '~500–900 mg / L', emoji: '🥤' },
      { food: 'Olives', amount: '~1,500 mg / 100 g', emoji: '🫒' },
      { food: 'Celery', amount: '~100 mg / 100 g', emoji: '🥬' },
      { food: 'Tomatoes', amount: '~25 mg / 100 g', emoji: '🍅' },
    ],
    deficiency: 'Rare in isolation; tracks with sodium loss. Muscle weakness, lethargy, and (with severe loss) metabolic alkalosis.',
  },

  /* ── Phytonutrients & pigment bioactives ─────────────────────────────── */
  'Anthocyanins': {
    display: 'Anthocyanins | Red-blue flavonoid pigments',
    role: 'Water-soluble polyphenolic flavonoids producing red, purple, and blue pigmentation in berries, cherries, red cabbage, and purple grapes. Inhibit LDL oxidation and free-radical chain reactions and modulate NF-κB, COX-2, and iNOS inflammatory signalling pathways.',
    fitness: 'Montmorency cherry anthocyanins (30 mL tart cherry concentrate, twice daily) reduce DOMS, accelerate strength recovery between sessions, and improve sleep quality via melatonin co-content. Blueberry anthocyanins similarly attenuate post-exercise muscle damage markers. One of the most athletically validated plant compounds.'
  },
  'Antioxidants': {
    display: 'Antioxidants | Broad free-radical defence',
    role: 'Broad category of compounds that donate electrons to neutralise reactive oxygen species (ROS) and reactive nitrogen species (RNS), interrupting oxidative chain reactions that damage cell membranes, proteins, and DNA. Includes enzymatic antioxidants (SOD, catalase, glutathione peroxidase) and dietary compounds (vitamins C/E, polyphenols, carotenoids).',
    fitness: 'Exercise generates controlled ROS that serve as adaptive signals — excessive supplemental antioxidants (particularly vitamins C and E at high doses) can blunt training adaptations by quenching these signals. Food-derived antioxidants are safe and beneficial; megadose supplementation during hard training blocks warrants caution.'
  },
  'Astaxanthin': {
    display: 'Astaxanthin | Marine ketocarotenoid antioxidant',
    role: 'Ketocarotenoid pigment responsible for the pink-red colour of salmon, shrimp, and flamingos. Uniquely spans the full cell membrane bilayer, protecting both the hydrophilic surface and lipophilic core simultaneously. Singlet oxygen quenching capacity is ~550× greater than Vitamin E in vitro.',
    fitness: 'Emerging evidence (4–12 mg/day) for reduced exercise-induced oxidative stress, attenuated muscle damage markers, and potential endurance performance improvement via mitochondrial protection. Also protects retinal tissue from UV-induced oxidative stress — relevant for outdoor athletes.'
  },
  'Beta-Carotene': {
    display: 'Beta-Carotene | Provitamin A carotenoid',
    role: 'The most abundant dietary provitamin A — an orange-yellow carotenoid cleaved by intestinal beta-carotene-15,15\'-dioxygenase to retinal (Vitamin A). Also functions independently as a lipid-soluble antioxidant and singlet oxygen quencher. Conversion efficiency is ~12 µg dietary beta-carotene per 1 µg retinol activity equivalent.',
    fitness: 'Unlike preformed retinol, beta-carotene is non-toxic in excess (reversible carotenodermia). Supports immune function and epithelial repair during hard training. High-dose isolate supplements showed harm in smokers; colourful vegetable sources are safe and preferred for athletic populations.'
  },
  'Betalains': {
    display: 'Betalains | Beetroot nitrogen pigments',
    role: 'Water-soluble nitrogen-containing pigments exclusive to plants of the Caryophyllales order — beetroot being the most nutritionally significant source. Subdivided into betacyanins (red-purple) and betaxanthins (yellow-orange). Structurally unrelated to anthocyanins. Have antioxidant, anti-inflammatory, and cytoprotective properties.',
    fitness: 'Beetroot betalains co-occur with high dietary nitrate — together they support vasodilation and reduced oxygen cost of exercise. Betalain antioxidant activity contributes to the post-exercise recovery benefits of beetroot. Betanin (main betacyanin) causes harmless red urine/stool (beeturia) in ~10–14% of people.'
  },
  'Beta-Glucan': {
    display: 'Beta-Glucan | Soluble immune-modulating fibre',
    role: 'Soluble polysaccharide composed of glucose units linked by beta-1,3/1,4 glycosidic bonds — found most abundantly in oats and barley. Medicinal mushrooms contain beta-1,3/1,6 variants. Forms viscous gel in the gut, slowing glucose absorption. Activates innate immunity via Dectin-1 receptors on macrophages and neutrophils.',
    fitness: 'Oat beta-glucan (3 g/day) significantly reduces LDL cholesterol and blunts the postprandial glycaemic response — relevant for body composition management. Mushroom beta-glucans (reishi, shiitake, turkey tail) may attenuate exercise-induced immunosuppression in the 3–72 hours after heavy training.'
  },
  'Bromelain': {
    display: 'Bromelain | Pineapple anti-inflammatory protease',
    role: 'Mixture of cysteine proteases extracted from pineapple stem and fruit that hydrolyses proteins at physiological pH. Also reduces pro-inflammatory prostaglandins via COX inhibition, inhibits platelet aggregation, and degrades fibrin, contributing to resolution of soft-tissue swelling.',
    fitness: 'May accelerate resolution of bruising, oedema, and soft-tissue trauma post-injury or surgery. Anti-inflammatory activity could reduce acute DOMS — most efficacious when taken away from meals (fasting absorption favours systemic rather than digestive use). Evidence is mechanistically strong but clinical trials are limited in athletes.'
  },
  'Butyrate': {
    display: 'Butyrate | Short-chain fatty acid & colonocyte fuel',
    role: 'Four-carbon short-chain fatty acid (SCFA) produced by colonic fermentation of dietary fibre (particularly resistant starch and inulin) by Clostridiales bacteria. Primary energy source for colonocytes (~70% of their caloric needs). Also acts as an HDAC inhibitor regulating gene expression and directly strengthens tight junctions in the intestinal epithelium.',
    fitness: 'Supports gut lining integrity — particularly relevant for high-volume athletes where repeated stress increases intestinal permeability ("leaky gut"). Adequate butyrate production reduces systemic endotoxin translocation and associated systemic inflammation. Resistant starch and diverse high-fibre diets are the most reliable strategy for supporting butyrate-producing bacteria.'
  },
  'Ellagic Acid': {
    display: 'Ellagic Acid | Pomegranate polyphenol & urolithin precursor',
    role: 'Polyphenol found in pomegranate, strawberries, raspberries, and walnuts. Converted by gut microbiome bacteria (Gordonibacter spp.) to urolithins — particularly urolithin A, a potent mitophagy inducer that selectively clears dysfunctional mitochondria, improving mitochondrial quality in muscle cells.',
    fitness: 'Urolithin A (the bioactive gut metabolite) shows clinical evidence for improving muscle endurance and mitochondrial function in older adults in phase II trials. Pomegranate juice also reduces DOMS and inflammatory markers in some athletic trials. Conversion efficiency to urolithins varies widely by individual microbiome composition.'
  },
  'Flavanols': {
    display: 'Flavanols | Cocoa & green tea bioactives',
    role: 'Subclass of flavonoids including catechins and epicatechins, concentrated in cocoa, dark chocolate, green tea, and some berries. Stimulate endothelial nitric oxide synthase (eNOS), increasing NO production and vasodilation. Also activate AMPK, the master cellular energy sensor, stimulating mitochondrial biogenesis.',
    fitness: 'Dark chocolate and cocoa flavanols (200–600 mg epicatechin/day) improve blood flow and lower blood pressure at rest and during exercise. May enhance oxygen delivery to muscle and support mitochondrial adaptation. Green tea catechins (EGCG) improve fat oxidation at low-to-moderate intensities and support body composition.'
  },
  'GLA': {
    display: 'GLA | Gamma-linolenic acid',
    role: 'Omega-6 PUFA (18 carbons, 3 double bonds) formed from linoleic acid by delta-6-desaturase. Unlike arachidonic acid — the downstream pro-inflammatory omega-6 — GLA is preferentially converted to DGLA, which produces anti-inflammatory series-1 prostaglandins and competes with arachidonic acid at COX enzymes.',
    fitness: 'Found in evening primrose, borage, and hemp seed oils. May reduce systemic inflammatory burden — particularly relevant for athletes with high dietary omega-6:omega-3 ratios. Conversion from linoleic acid to GLA is impaired by stress, alcohol, ageing, and trans fat — making direct GLA sources valuable in these contexts.'
  },
  'Glucosamine': {
    display: 'Glucosamine | Cartilage glycosaminoglycan substrate',
    role: 'Amino sugar and primary substrate for glycosaminoglycan biosynthesis — the structural polysaccharides (chondroitin sulphate, hyaluronic acid, keratan sulphate) forming the hydrated viscoelastic matrix of articular cartilage and synovial fluid. Endogenously synthesised from glucose, but potentially rate-limiting under high mechanical demand.',
    fitness: 'Glucosamine sulphate (1500 mg/day for 3+ months) has modest but replicated evidence for reducing knee osteoarthritis symptoms and potentially slowing cartilage loss. Most useful as a long-term preventive strategy for high-impact athletes. Often combined with chondroitin, collagen, and Vitamin C for synergistic connective tissue support.'
  },
  'Hesperidin': {
    display: 'Hesperidin | Citrus flavanone & vascular bioactive',
    role: 'Flavanone glycoside (flavanone + rutinose) predominantly found in the white pith and membranes of citrus fruits (oranges, lemons). Anti-inflammatory via NF-κB inhibition; antioxidant; and vasoprotective by improving capillary membrane integrity, reducing capillary permeability and fragility.',
    fitness: 'May reduce exercise-induced inflammatory markers and support vascular recovery. The diosmin+hesperidin combination is clinically approved for chronic venous insufficiency — potentially relevant to athletes managing post-exercise lower-limb oedema. Whole orange consumption retains significantly more hesperidin than juice alone.'
  },
  'Isoflavones': {
    display: 'Isoflavones | Soy phytooestrogens',
    role: 'Diphenolic polyphenols structurally similar to 17β-oestradiol, found predominantly in soy, red clover, and legumes (genistein, daidzein, glycitein). Bind weakly to oestrogen receptors (ERα and ERβ) with tissue-selective agonist or antagonist effects depending on endogenous oestrogen levels and local receptor subtypes.',
    fitness: 'No clear negative effect on testosterone in men at normal food-derived doses — extensively evaluated in multiple clinical trials. May provide modest bone density protection in low-oestrogen female athletes. Their anti-inflammatory and antioxidant properties may support recovery. Dietary soy in whole-food form is consistently safe at population doses.'
  },
  'L-Citrulline': {
    display: 'L-Citrulline | Nitric oxide precursor',
    role: 'Non-essential amino acid found abundantly in watermelon rind. Converted to arginine in the kidney, bypassing hepatic first-pass catabolism that limits oral arginine effectiveness. Elevated plasma arginine drives endothelial nitric oxide synthase (eNOS) activity, producing NO and vasodilating blood vessels.',
    fitness: '6–8 g L-citrulline malate (2:1) 60 minutes pre-workout improves blood flow, delays fatigue, reduces DOMS, and increases resistance exercise repetitions by ~5–10% vs placebo. Substantially superior to direct arginine supplementation for raising NO due to far better oral bioavailability.'
  },
  'Lauric Acid': {
    display: 'Lauric Acid | C12 saturated fatty acid',
    role: '12-carbon saturated fatty acid comprising ~50% of coconut oil\'s fatty acid content. Behaves intermediately between medium- and long-chain fats — partially absorbed via portal circulation and partially via lymphatics. Has potent in vitro antimicrobial properties, disrupting lipid-enveloped viruses and bacterial cell membranes. Raises both HDL and LDL cholesterol.',
    fitness: 'The primary fatty acid in coconut oil/MCT products. Cardiovascular risk relative to other saturated fats remains debated — it raises LDL-C but also substantially raises HDL-C and shifts LDL toward larger, less atherogenic particles. Less effective than C8 (caprylic acid) for ketone production but provides antimicrobial effects in the gut.'
  },
  'Lecithin': {
    display: 'Lecithin | Phosphatidylcholine emulsifier',
    role: 'Commercial name for a mixture of phospholipids (predominantly phosphatidylcholine, phosphatidylinositol, and phosphatidylethanolamine) extracted from soy or sunflower seeds. Major dietary source of choline. Acts as a natural emulsifier, facilitating lipid digestion by dispersing dietary fat into bile-acid micelles.',
    fitness: 'A plant-based dietary choline source supporting acetylcholine synthesis for neuromuscular function and cognitive performance. Also supports hepatic fat export (as VLDL), relevant for athletes on high-calorie bulking phases. Sunflower lecithin is soy-free; both provide ~13% choline by weight.'
  },
  'Lignans': {
    display: 'Lignans | Plant cell-wall phytooestrogens',
    role: 'Polyphenolic compounds bound to plant cell walls — found in highest concentrations in flaxseeds, sesame, whole grains, and some berries. Converted by gut bacteria to enterolactone and enterodiol — weak phytooestrogens with tissue-selective oestrogen receptor-modulating activity. Also have intrinsic antioxidant properties.',
    fitness: 'Flaxseed lignans are the most bioavailable dietary source. May offer mild bone protection in postmenopausal female athletes with low oestrogen. Anti-inflammatory and antioxidant activity contributes to general recovery support. No adverse effects at food-derived doses; extremely high supplemental doses may interfere with endogenous oestrogen signalling.'
  },
  'Lutein': {
    display: 'Lutein | Macular xanthophyll',
    role: 'Xanthophyll carotenoid selectively accumulated in the macular pigment of the retina, where it filters high-energy blue and UV light and quenches photo-oxidative free radicals to protect photoreceptors. Cannot be synthesised by the body — obtained exclusively from diet (leafy greens, kale, spinach, egg yolk).',
    fitness: 'Protects retinal cells from oxidative damage from high outdoor UV exposure — relevant for endurance and outdoor sport athletes. Egg yolk lutein is more bioavailable than that from leafy greens due to the surrounding fat matrix. Also accumulates in brain tissue where emerging evidence suggests support for processing speed and cognitive resilience. Pairs with zeaxanthin for synergistic macular protection.'
  },
  'Lycopene': {
    display: 'Lycopene | Tomato red carotenoid',
    role: 'Bright-red acyclic carotenoid responsible for the colour of tomatoes, watermelon, and grapefruit. The most potent singlet oxygen quencher among dietary carotenoids — approximately 2× more effective than beta-carotene. Bioavailability is dramatically enhanced by cooking (cell wall rupture releases lycopene) and fat co-consumption (lycopene from cooked tomatoes in oil is ~5× more bioavailable than raw).',
    fitness: 'Strong epidemiological association with reduced prostate cancer risk. Antioxidant properties may reduce exercise-induced oxidative damage to cell membranes during high-volume training. Tomato paste or sauce with olive oil maximises lycopene bioavailability and combines synergistic antioxidant compounds.'
  },
  'Melatonin': {
    display: 'Melatonin | Circadian sleep hormone',
    role: 'Indolamine hormone synthesised from tryptophan (via serotonin) by the pineal gland. Secretion is triggered by darkness and suppressed by blue-wavelength light. Entrains the circadian pacemaker (suprachiasmatic nucleus), lowering core body temperature, suppressing cortisol, and preparing the immune system for nocturnal repair.',
    fitness: 'Sleep is the primary recovery intervention for athletes. Melatonin (0.5–1 mg, 30–60 min before bed) aids sleep onset without suppressing natural endogenous production at low doses. Particularly useful for shift workers, trans-meridian travellers, and athletes training late under artificial light. Has additional antioxidant properties relevant to overnight tissue recovery.'
  },
  'Nitrates': {
    display: 'Nitrates | Dietary NO₃⁻ precursors',
    role: 'Inorganic anions (NO₃⁻) found concentrated in leafy and root vegetables — beetroot, spinach, rocket, celery, radishes. Reduced by oral bacteria to nitrite (NO₂⁻) — the conversion requiring the natural salivary microbiome — then to nitric oxide (NO) in the stomach and tissues via non-enzymatic reduction, independent of the arginine/NOS pathway.',
    fitness: '~6.4 mmol dietary nitrate (400 mL beetroot juice or ~200 g beetroot) 2–3 hours pre-exercise reduces oxygen cost of submaximal exercise by 3–5%, improves time to exhaustion, and enhances high-intensity performance. Effects are greatest at altitude and in moderately trained individuals. Antibacterial mouthwash eliminates salivary bacteria needed for NO₃⁻→NO₂⁻ conversion — avoid on competition days.'
  },
  'Phycocyanin': {
    display: 'Phycocyanin | Spirulina biliprotein antioxidant',
    role: 'Blue biliprotein pigment that gives spirulina (Arthrospira platensis) its characteristic blue-green colour. Functions as a potent antioxidant (scavenging hydroxyl and peroxyl radicals), anti-inflammatory agent (inhibiting COX-2 and NF-κB), and selective cyclooxygenase inhibitor distinct from spirulina\'s protein and micronutrient content.',
    fitness: 'Emerging clinical evidence that spirulina phycocyanin (at 2–7 g/day total spirulina) reduces exercise-induced oxidative stress markers, inflammatory cytokines, and DOMS. Some trials show modest VO₂ max and endurance performance improvement. One of the most pharmacologically active fractions in spirulina.'
  },
  'Phytosterols': {
    display: 'Phytosterols | Plant cholesterol analogues',
    role: 'Sterol compounds in plant cell membranes structurally analogous to cholesterol — differing only in their side chain (campesterol, beta-sitosterol, stigmasterol). Competitively inhibit intestinal cholesterol absorption by displacing cholesterol from bile acid micelles, reducing micellarisation and uptake.',
    fitness: 'Clinically proven to reduce LDL cholesterol by 10–15% at 2 g/day — most effective when consumed at the largest fatty meal. Relevant for athletes managing cardiovascular risk. No adverse effects on anabolic hormone levels at dietary doses. Excessive supplementation may marginally impair fat-soluble vitamin absorption.'
  },
  'Pinolenic Acid': {
    display: 'Pinolenic Acid | Pine nut omega-6 appetite suppressant',
    role: 'Unusual PUFA (18 carbons, 3 double bonds) found almost exclusively in Scots and Korean pine nut oil (15–20% of total fatty acids). Potently stimulates release of cholecystokinin (CCK) and glucagon-like peptide-1 (GLP-1) — satiety hormones that signal fullness to the hypothalamus and delay gastric emptying.',
    fitness: 'Pine nut oil (3–6 g pinolenic acid) taken before meals demonstrates significant appetite suppression in clinical trials — relevant for athletes during caloric restriction phases for body composition goals. A natural, stimulant-free appetite modulation strategy without thermogenic or cardiovascular side effects.'
  },
  'Plant Sterols': {
    display: 'Plant Sterols | Phytosterols (functional alias)',
    role: 'Collective term for phytosterols and phytostanols — plant-derived cholesterol structural analogues that block intestinal cholesterol absorption by competing for space in bile acid micelles. Naturally present in vegetable oils, whole grains, nuts, and seeds; added to functional foods (margarines, yoghurts, orange juice).',
    fitness: 'Evidence-based non-pharmaceutical LDL reduction strategy (10–15% at 2 g/day), clinically endorsed for cardiovascular risk management. Best consumed with meals containing fat for maximum cholesterol-displacement efficacy. Long-term safety is established; plant sterol-enriched foods are widely available.'
  },
  'Polyphenols': {
    display: 'Polyphenols | Plant bioactive superfamily',
    role: 'The largest and most chemically diverse class of plant secondary metabolites — over 8,000 compounds, including flavonoids, phenolic acids, stilbenes, and lignans. Primary dietary antioxidants and anti-inflammatory agents. Modulate NF-κB, AMPK, Nrf2, mTOR, and other major cellular signalling pathways at physiologically achievable concentrations.',
    fitness: 'Collectively responsible for much of the recovery and health benefit attributed to fruits, vegetables, and whole-plant foods. Individual members (anthocyanins, flavanols, resveratrol, curcumin) are studied separately, but dietary variety ensures complementary pathway coverage. The richest food sources: cloves, dark chocolate, dried berries, olives, coffee, and tea.'
  },
  'Probiotics': {
    display: 'Probiotics | Beneficial live microorganisms',
    role: 'Live bacteria and yeasts (primarily Lactobacillus, Bifidobacterium, and Saccharomyces species) that confer health benefits when consumed in adequate amounts. Colonise the gut transiently, competing with pathogens, modulating mucosal immune responses, producing bacteriocins, and fermenting fibre to short-chain fatty acids.',
    fitness: 'Reduce the incidence and duration of upper respiratory tract infections — the most common training-disrupting illness in athletes. Also reduce GI distress during endurance events and may improve protein absorption. Multi-strain formulas with 10⁹–10¹⁰ CFU/day taken consistently for ≥4 weeks have the strongest athlete-specific evidence base.'
  },
  'Quercetin': {
    display: 'Quercetin | Broad-spectrum flavonoid',
    role: 'One of the most abundant dietary flavonoids found in onions, capers, apples, and berries. Inhibits COX and LOX inflammatory enzymes, acts as a broad antioxidant, activates AMPK and Nrf2 (stimulating mitochondrial biogenesis and antioxidant gene upregulation), and has antiviral activity against rhinovirus and influenza.',
    fitness: 'Meta-analyses support modest VO₂ max improvements (~3%) and reduced upper respiratory infection incidence with 1000 mg/day. AMPK/Nrf2 activation suggests potential for enhancing mitochondrial training adaptations. Bioavailability is poor from food alone; quercetin phytosome (with lecithin) or co-ingestion with bromelain significantly improves absorption.'
  },
  'Rutin': {
    display: 'Rutin | Quercetin glycoside & vascular flavonoid',
    role: 'Flavonol glycoside (quercetin + rutinose disaccharide) found in buckwheat, capers, asparagus, and citrus peel. Strengthens capillary walls by inhibiting hyaluronidase, which degrades the extracellular matrix surrounding capillaries. Also reduces capillary permeability, platelet aggregation, and LDL oxidation.',
    fitness: 'Clinically used for chronic venous insufficiency and capillary fragility — may benefit athletes prone to bruising or petechiae during high-impact training. Gut bacteria convert rutin to quercetin, providing quercetin\'s anti-inflammatory benefits in a more bioavailable form. Buckwheat is the richest common dietary source.'
  },
  'Sesamin': {
    display: 'Sesamin | Sesame lignan & desaturase inhibitor',
    role: 'Furofuran lignan found in sesame seeds and sesame oil. Inhibits delta-5-desaturase, reducing conversion of DGLA to arachidonic acid (the pro-inflammatory omega-6 endpoint). Also inhibits cytochrome P450 enzymes involved in Vitamin E oxidation, raising plasma gamma-tocopherol and extending circulating EPA/DHA half-life.',
    fitness: 'By limiting arachidonic acid formation, sesamin may reduce the inflammatory substrate pool — relevant for athletes with high omega-6 intake. Elevates gamma-tocopherol (a nitrogen-reactive species quencher) and extends EPA/DHA bioavailability. Evidence is largely mechanistic and animal-based; sesame-rich diets likely provide modest anti-inflammatory benefit.'
  },
  'Squalene': {
    display: 'Squalene | Olive oil triterpene antioxidant',
    role: 'Naturally occurring polyunsaturated triterpene hydrocarbon found abundantly in extra-virgin olive oil (~500 mg/100 g), shark liver oil, and amaranth. An obligate intermediate in the biosynthesis of cholesterol and all steroid hormones. Also functions as a lipid-soluble antioxidant and is the primary hydrocarbon in human sebum.',
    fitness: 'Antioxidant and anti-inflammatory properties are among the bioactive contributors to olive oil\'s cardiovascular and recovery benefits. Squalene also shows immunomodulatory and hepatoprotective properties at higher intakes. Used as an adjuvant in vaccines. No performance-specific supplementation data; extra-virgin olive oil remains the practical dietary source.'
  },

  /* ── Vitamin aliases & group labels ──────────────────────────────────── */
  'B Vitamins': {
    display: 'B Vitamins | Water-soluble energy co-factors',
    role: 'Group of eight water-soluble vitamins (B1/Thiamine, B2/Riboflavin, B3/Niacin, B5/Pantothenic acid, B6/Pyridoxine, B7/Biotin, B9/Folate, B12/Cobalamin) collectively serving as co-factors in ATP metabolism, DNA synthesis, red blood cell formation, and neurological function. Cannot be stored in large quantities — regular dietary supply is essential.',
    fitness: 'Requirements scale with energy expenditure — athletes training at high volume have elevated B vitamin needs. Insufficient B vitamins impair ATP production, reduce oxygen-carrying capacity, disrupt neurotransmitter synthesis, and impair recovery. A varied diet covering whole grains, legumes, dairy, meat, and leafy greens typically meets needs; vegan athletes should monitor B12, B2, and B6 specifically.'
  },
  'Fat-Soluble Vitamins': {
    display: 'Fat-Soluble Vitamins | A, D, E, K',
    role: 'Vitamins A, D, E, and K dissolve in dietary fat and are absorbed via the lymphatic system alongside fat-containing meals. Stored in adipose tissue and the liver — depleting more slowly than water-soluble vitamins but carrying greater toxicity risk from supplemental overdose of preformed forms.',
    fitness: 'Dietary fat is required for absorption — low-fat diets risk fat-soluble vitamin deficiency regardless of dietary intake. Vitamin D is the most commonly deficient in athletes (critical for bone integrity, muscle function, and immunity). K2 and D3 synergise for calcium utilisation; E protects membrane lipids from peroxidation; A supports immune function and epithelial repair post-training.'
  },
  'Vitamin E Gamma': {
    display: 'Vitamin E γ | Gamma-tocopherol',
    role: 'The most abundant Vitamin E form in the American diet (from seed oils), but less biologically potent than alpha-tocopherol at binding the hepatic Vitamin E transfer protein. Unlike alpha-tocopherol, gamma-tocopherol efficiently traps and neutralises reactive nitrogen species (peroxynitrite, nitrogen dioxide) — a form of oxidative damage alpha-tocopherol cannot quench.',
    fitness: 'High-dose alpha-tocopherol supplementation competitively displaces gamma-tocopherol from plasma, potentially reducing nitrogen-reactive species quenching capacity. Mixed tocopherol intake from whole foods (nuts, seeds, vegetable oils) provides broader antioxidant coverage than isolated alpha-tocopherol supplements, particularly during inflammatory training phases.'
  },

  /* ── B vitamin aliases ────────────────────────────────────────────────── */
  'B12': {
    display: 'Vitamin B12 | Cobalamin',
    role: 'Co-factor for two human enzymes: methionine synthase (DNA methylation, homocysteine recycling) and methylmalonyl-CoA mutase (odd-chain fatty-acid and amino-acid catabolism). Required for myelin sheath synthesis and red blood cell formation. Hepatic stores last 2–5 years; deficiency progresses insidiously but neurological damage can be irreversible.',
    fitness: 'Deficiency causes megaloblastic anaemia, fatigue, weakness, and peripheral neuropathy — all directly limiting athletic performance. Exclusively found in animal products; daily supplementation (≥25 µg cyanocobalamin or ≥250 µg methylcobalamin) is essential for plant-based athletes.'
  },
  'B3 Niacin': {
    display: 'Vitamin B3 | Niacin',
    role: 'Precursor to NAD+ and NADP+ — universal electron acceptors in glycolysis, the citric acid cycle, fatty-acid synthesis, and DNA repair. The body can synthesise limited niacin from tryptophan at approximately a 60:1 ratio, but dietary supply is required for adequate NAD+ pools.',
    fitness: 'Adequate NAD+ supports mitochondrial biogenesis and aerobic capacity. Pharmacological niacin doses cause flushing and may raise blood glucose and blunt fat oxidation during exercise — relevant if used as a cardiovascular supplement.'
  },
  'B6': {
    display: 'Vitamin B6 | Pyridoxine',
    role: 'Co-factor (as pyridoxal-5-phosphate, PLP) in over 100 enzymatic reactions — principally amino acid transamination and decarboxylation, glycogen phosphorylase (glycogen breakdown), haemoglobin synthesis, and neurotransmitter production (serotonin, dopamine, GABA).',
    fitness: 'High protein intake increases B6 requirements. Important for mood, sleep quality, and glycogen mobilisation during training. Low B6 blunts haemoglobin production and impairs aerobic capacity.'
  },
  'Niacin': {
    display: 'Vitamin B3 | Niacin',
    role: 'Precursor to NAD+ and NADP+ — universal electron acceptors in glycolysis, the citric acid cycle, fatty-acid synthesis, and DNA repair. The body can synthesise limited niacin from tryptophan at approximately a 60:1 ratio, but dietary supply is required for adequate NAD+ pools.',
    fitness: 'Adequate NAD+ supports mitochondrial biogenesis and aerobic capacity. Pharmacological niacin doses cause flushing and may raise blood glucose and blunt fat oxidation during exercise — relevant if used as a cardiovascular supplement.'
  },
  'Niacin B3': {
    display: 'Vitamin B3 | Niacin',
    role: 'Precursor to NAD+ and NADP+ — universal electron acceptors in glycolysis, the citric acid cycle, fatty-acid synthesis, and DNA repair. The body can synthesise limited niacin from tryptophan at approximately a 60:1 ratio, but dietary supply is required for adequate NAD+ pools.',
    fitness: 'Adequate NAD+ supports mitochondrial biogenesis and aerobic capacity. Pharmacological niacin doses cause flushing and may raise blood glucose and blunt fat oxidation during exercise — relevant if used as a cardiovascular supplement.'
  },
  'Riboflavin B2': {
    display: 'Vitamin B2 | Riboflavin',
    role: 'Precursor to FAD and FMN — essential electron carriers in the mitochondrial electron transport chain and in fatty-acid beta-oxidation. Also required for recycling of oxidised glutathione back to its active reduced form via glutathione reductase.',
    fitness: 'Supports both aerobic energy production and antioxidant capacity. Needs increase proportionally with training volume and intensity. Dairy and eggs are rich sources; vegan athletes may need to monitor riboflavin intake or supplement.'
  },
  'Thiamine': {
    display: 'Vitamin B1 | Thiamine',
    role: 'Co-enzyme (as thiamine pyrophosphate, TPP) in pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase — both rate-limiting steps of aerobic ATP production from carbohydrates. Also essential for nerve impulse transmission and branched-chain amino acid catabolism via the BCKDH complex.',
    fitness: 'Athletes with high carbohydrate throughput have elevated thiamine requirements that scale with total energy intake. Deficiency causes progressive fatigue, reduced power output, and peripheral neuropathy. Refined grain-based diets may be marginal in thiamine despite high carbohydrate intake.'
  },
  'Thiamine B1': {
    display: 'Vitamin B1 | Thiamine',
    role: 'Co-enzyme (as thiamine pyrophosphate, TPP) in pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase — both rate-limiting steps of aerobic ATP production from carbohydrates. Also essential for nerve impulse transmission and branched-chain amino acid catabolism via the BCKDH complex.',
    fitness: 'Athletes with high carbohydrate throughput have elevated thiamine requirements that scale with total energy intake. Deficiency causes progressive fatigue, reduced power output, and peripheral neuropathy. Refined grain-based diets may be marginal in thiamine despite high carbohydrate intake.'
  },

  /* ── Meal Timing (Meal Timing Library) ──────────────────────────────── */
  'Meal Timing Fundamentals': {
    display: 'Meal Timing | Overview',
    category: 'Foundations',
    role: 'Meal timing is the strategic scheduling of food intake relative to training, sleep, and daily activity to maximise energy, performance, recovery, and body composition. While total daily calorie and macronutrient intake is the primary driver of results, timing provides a measurable additional edge — especially for athletes training twice a day or competing.',
    fitness: 'The rigid "30-minute anabolic window" is largely overstated for recreational athletes in single-session days. What does consistently show benefit: distributing protein evenly across 3–5 meals, consuming carbohydrates around training, and not training in a prolonged fasted state when performance or muscle retention is the goal.',
    tags: ['Meal Timing', 'Foundations', 'Strategy']
  },
  'Pre-Workout Meal': {
    display: 'Pre-Workout Meal | 2–4 hours before',
    category: 'Pre-Workout',
    role: 'A meal 2–4 hours before training is the primary fuelling window. It should be balanced: carbohydrates to top up glycogen stores, moderate protein to reduce muscle breakdown, and low fat and fibre to ensure the stomach is empty and blood is directed to working muscle — not digestion — during the session.',
    fitness: 'Practical example for a 75 kg athlete: 75–100 g complex carbs (rice, oats, sweet potato) + 30–35 g protein (chicken, Greek yogurt, eggs) + minimal fat. This combination consistently improves training quality, endurance, and perceived exertion. The larger and fattier the meal, the earlier it needs to be — aim for 3+ hours if eating a full mixed meal.',
    tags: ['Meal Timing', 'Pre-Workout', 'Fuel']
  },
  'Pre-Workout Snack': {
    display: 'Pre-Workout Snack | 30–60 min before',
    category: 'Pre-Workout',
    role: 'A light, fast-digesting snack 30–60 minutes before training is useful when a full meal is not practical or appetite is low. It should be high in simple carbohydrates and very low in fat, fibre, and protein — all of which slow gastric emptying and can cause discomfort under physical exertion.',
    fitness: 'Good options: banana · rice cake + honey · white toast + jam · dates · energy gel. Avoid high-fat, high-fibre, or dairy-heavy choices in this window. Even 20–30 g of fast carbs can sharpen focus and delay fatigue onset during a strength or conditioning session. This window is about fast fuel, not a balanced meal.',
    tags: ['Meal Timing', 'Pre-Workout', 'Snack']
  },
  'Intra-Workout Fuel': {
    display: 'Intra-Workout Fuel | During training',
    category: 'During Training',
    role: 'For sessions under 60–75 minutes at moderate intensity, no additional food is needed if pre-workout nutrition was adequate. For sessions over 75 minutes, high-intensity intervals, or two-a-day training, consuming fast-digesting carbohydrates during the session delays glycogen depletion, sustains power output, and reduces perceived effort in the later stages.',
    fitness: 'Guideline: 30–60 g of carbohydrate per hour for sustained efforts over 75 min. Sources: sports drink (adds electrolytes too) · banana · dates · raisins · energy gels. No solid protein or fat during training — digestion diverts blood from working muscle. For very long sessions (90+ min), combining glucose + fructose sources raises carbohydrate absorption beyond the ~60 g/hour glucose ceiling.',
    tags: ['Meal Timing', 'During Training', 'Fuel']
  },
  'Post-Workout Meal': {
    display: 'Post-Workout Meal | Within 2 hours',
    category: 'Post-Workout',
    role: 'The post-workout period is when muscle protein synthesis is most responsive to nutrition. Muscle damage and glycogen depletion from training signal the body to uptake amino acids and glucose at above-normal rates. A well-timed post-workout meal takes full advantage of this elevated uptake window.',
    fitness: 'Target: 0.4–0.5 g/kg protein + 0.8–1.2 g/kg carbohydrates within 2 hours of finishing. Example for 75 kg: 30–37 g protein + 60–90 g carbs. Best protein sources: whey (fastest digestion) · chicken · eggs · Greek yogurt. Best carbs: white rice · potato · fruit · white bread. Keep fat low in this meal — it slows amino acid delivery when speed of absorption matters most.',
    tags: ['Meal Timing', 'Post-Workout', 'Recovery']
  },
  'Post-Workout Protein Window': {
    display: 'The Protein Window | How urgent is it really?',
    category: 'Post-Workout',
    role: 'The classic "30-minute anabolic window" suggests that missing immediate post-workout protein leads to significant muscle loss. Research now shows this is substantially overstated. If a protein-containing meal was eaten 2–3 hours before training, amino acid levels remain elevated well into the post-workout period — reducing the urgency of immediate re-feeding.',
    fitness: 'The window matters most when training fasted or when the last protein meal was more than 4–5 hours ago. For everyone else, total daily protein (1.6–2.2 g/kg/day) distributed across 3–5 meals matters far more than hitting an exact minute post-workout. Stressing over a 45-minute delay undermines the recovery it was meant to support.',
    tags: ['Meal Timing', 'Post-Workout', 'Protein']
  },
  'Daily Meal Frequency': {
    display: 'Meal Frequency | How often to eat',
    category: 'Daily Rhythm',
    role: 'Muscle protein synthesis (MPS) peaks and subsides roughly every 3–5 hours after a protein-rich meal regardless of portion size. Eating too infrequently — 1–2 large meals — leaves long periods between MPS peaks. Eating too frequently makes hitting meaningful protein doses per meal impractical.',
    fitness: '3–5 protein-containing meals per day is the evidence-backed range for muscle-building athletes. Each should contain at least 0.3 g/kg protein (≥20 g for most adults) to reliably trigger MPS. Skipping breakfast or compressing all eating into a 4-hour window significantly reduces total daily MPS output — even if the same total protein and calories are consumed.',
    tags: ['Meal Timing', 'Daily Rhythm', 'Frequency']
  },
  'Calorie Distribution': {
    display: 'Calorie Distribution | When to eat your biggest meals',
    category: 'Daily Rhythm',
    role: 'When calories land across the day influences insulin sensitivity, fat oxidation, and alignment with circadian metabolic rhythms. Front-loading calories earlier (larger breakfast and lunch, smaller dinner) consistently shows advantages in blood glucose control and fat utilisation. Back-loading (eating most calories at night) produces poorer metabolic markers at identical calorie totals.',
    fitness: 'Practical guideline: place your largest meal within 1–2 hours of your main training session. Evening meals should be moderate in carbohydrates and calories but higher in slow-digesting protein (casein, cottage cheese, Greek yogurt) to sustain overnight MPS. If you train in the evening, a proper post-workout meal is justified regardless of how late it is — skipping it in the name of calorie restriction is a poor trade-off during a training block.',
    tags: ['Meal Timing', 'Daily Rhythm', 'Calories']
  },
  'Intermittent Fasting': {
    display: 'Intermittent Fasting | IF & athletic performance',
    category: 'Daily Rhythm',
    role: 'Intermittent fasting (IF) restricts eating to a daily window — most commonly 16:8 (eating within 8 hours) or 18:6. For fat loss and general metabolic health, IF shows outcomes equivalent to conventional meal plans when total calories and protein are matched. The mechanism is primarily that it makes calorie restriction easier for some people by removing decision-making around certain meals.',
    fitness: 'Athletic performance on IF is schedule-dependent. Training late in the eating window (e.g. eating 12:00–20:00, training at 16:00) is reasonably well tolerated. Training fasted or at the very start of the eating window consistently shows reduced power output and higher perceived exertion in trained athletes with meaningful muscle mass. If using IF, consume at minimum 10–15 g of leucine-rich protein before fasted training sessions to blunt muscle breakdown.',
    tags: ['Meal Timing', 'Daily Rhythm', 'Fasting']
  },
  'Sleep & Overnight Nutrition': {
    display: 'Sleep & Overnight | Casein & overnight MPS',
    category: 'Daily Rhythm',
    role: 'Muscle protein synthesis continues during sleep but is rate-limited by amino acid availability. The overnight fast (typically 7–9 hours) is the longest period each day without dietary protein. Pre-sleep protein intake directly addresses this gap by keeping amino acids available through the night without disrupting sleep architecture.',
    fitness: '40 g of slow-digesting casein protein consumed 30–60 minutes before sleep has been shown in multiple trials to increase overnight MPS by 20–30% vs. placebo and to improve next-day muscle soreness and readiness — without increasing fat storage. Best sources: cottage cheese · Greek yogurt · casein shake. Particularly valuable during high-volume training blocks or when eating in a calorie deficit, where overnight catabolism is a greater risk.',
    tags: ['Meal Timing', 'Sleep', 'Recovery', 'Protein']
  },

  /* ── Hydration & Fluid Strategy (Hydration Library) ─────────────────── */
  'Water': {
    display: 'Water | Daily baseline',
    category: 'Hydration Basics',
    role: 'Water is the body\'s primary transport medium — comprising ~60% of bodyweight in adult men and ~55% in adult women. It regulates core temperature via sweating, carries nutrients to cells, removes waste via urine, lubricates joints, and maintains blood volume for oxygen delivery to working muscle.',
    fitness: 'Even 2% dehydration measurably impairs aerobic performance, strength, coordination, and cognitive function. Practical baseline: 35 ml per kg bodyweight per day. Athletes add ~500–750 ml for every hour of moderate training. Hot environments, altitude, and high-protein diets all increase needs further.',
    rda: '~2.7 L/day (women) · ~3.7 L/day (men) including food-sourced fluid',
    sources: [
      { food: 'Drinking Water', amount: 'Primary source', emoji: '💧' },
      { food: 'Watermelon', amount: '92% water content', emoji: '🍉' },
      { food: 'Cucumber', amount: '97% water content', emoji: '🥒' },
      { food: 'Milk', amount: '88% water content', emoji: '🥛' },
      { food: 'Orange', amount: '87% water content', emoji: '🍊' },
    ],
    deficiency: 'Thirst (delayed signal), dark urine, headache, fatigue, reduced strength and endurance, muscle cramps. Severe dehydration causes dangerous drops in blood pressure and cardiac output.',
    tags: ['Hydration', 'Baseline']
  },
  'Electrolytes': {
    display: 'Electrolytes | Ionic minerals',
    category: 'Electrolytes',
    role: 'Electrolytes are dissolved minerals carrying an electrical charge — sodium (Na⁺), potassium (K⁺), magnesium (Mg²⁺), calcium (Ca²⁺), chloride (Cl⁻), bicarbonate (HCO₃⁻), and phosphate (PO₄³⁻). Together they govern fluid distribution between body compartments, enable nerve transmission and muscle contraction, and regulate acid-base balance.',
    fitness: 'Sweat contains significant electrolytes — primarily sodium (300–1,000 mg/L), chloride, and potassium. Replacing fluid without replacing electrolytes during sessions over 60–90 minutes dilutes blood sodium, impairing muscle contraction and risking hyponatraemia in extreme cases.',
    tags: ['Hydration', 'Electrolytes', 'Performance']
  },
  'Chloride': {
    display: 'Cl | Chloride',
    category: 'Electrolytes',
    role: 'Primary extracellular anion — pairs with sodium to maintain plasma osmolality and blood volume. Essential component of hydrochloric acid in the stomach for protein digestion and pathogen defence. Participates in the chloride shift in red blood cells for CO₂ transport from tissues to the lungs.',
    fitness: 'Lost in sweat alongside sodium. Athletes consuming adequate sodium from food or electrolyte drinks will generally cover chloride without additional tracking. Rarely isolated as a deficiency in practice.',
    rda: '2,300 mg/day (as part of total sodium chloride intake)',
    tags: ['Hydration', 'Electrolytes']
  },
  'Daily Water Needs': {
    display: 'Daily Water Needs | Intake formula',
    category: 'Hydration Basics',
    role: 'Individual water needs depend on bodyweight, activity level, sweat rate, climate, altitude, and diet composition. A practical starting formula: 35 ml × bodyweight in kg = daily baseline. Add 500–750 ml per hour of moderate training, more in heat or at altitude.',
    fitness: 'For a 75 kg athlete training 1 hour daily: baseline 2,625 ml + 500 ml = ~3.1 L minimum. High-intensity or two-a-day sessions, altitude above 2,500 m, or temperatures above 30 °C each add 500–1,000 ml. Spread intake across the day — the small intestine absorbs approximately 250 ml every 15 minutes at rest.',
    tags: ['Hydration', 'Planning', 'Formula']
  },
  'Urine Colour Check': {
    display: 'Urine Colour Check | Hydration status',
    category: 'Hydration Basics',
    role: 'Urine colour is the simplest real-time hydration marker. Pale yellow (lemonade colour) indicates adequate hydration. Dark yellow indicates mild to moderate dehydration. Amber or brown indicates significant dehydration requiring immediate fluid intake.',
    fitness: 'Check first-morning urine — darker than pale yellow means you went to bed underhydrated. Caveat: B-vitamin supplements (B2/riboflavin) turn urine bright fluorescent yellow regardless of hydration status, masking the signal. Beetroot, asparagus, and certain medications also affect urine colour.',
    tags: ['Hydration', 'Assessment', 'Monitoring']
  },
  'Sweat Rate': {
    display: 'Sweat Rate | Personal fluid loss',
    category: 'Hydration Basics',
    role: 'Sweat rate varies significantly between individuals (0.5–2.5 L/hour) and conditions. Estimate your own: weigh in kg before and after a 1-hour session without drinking. Each 1 kg of bodyweight lost ≈ 1 L of sweat. Use this figure to set session-specific fluid targets.',
    fitness: 'Replace 1.25–1.5× the fluid lost over the following hours to account for ongoing losses. A moderate exerciser losing 0.8 kg needs ~1.0–1.2 L rehydration fluid post-session. High-sweat-rate individuals (>1.5 L/hour) likely need sodium supplementation during sessions over 90 minutes to prevent performance decline and cramping.',
    tags: ['Hydration', 'Assessment', 'Sweat']
  },
  'Pre-Workout Hydration': {
    display: 'Pre-Workout Hydration | 2–4 h before',
    category: 'Timing',
    role: 'Starting exercise well-hydrated directly determines endurance capacity, power output, and core temperature management. Pre-hydration must begin hours before training — not minutes. Drinking large volumes immediately before a session is ineffective and can cause gastrointestinal discomfort during effort.',
    fitness: '2–4 hours before: 5–7 ml/kg bodyweight (350–490 ml for a 70 kg athlete). If urine is still dark 2 hours before training, add a further 100–200 ml. Avoid alcohol the night before peak-output sessions — alcohol is a powerful diuretic and disrupts sleep-based rehydration. Including sodium in the pre-session meal enhances fluid retention.',
    tags: ['Hydration', 'Timing', 'Pre-Workout']
  },
  'During Training Hydration': {
    display: 'During Training | Fluid during session',
    category: 'Timing',
    role: 'The goal during training is to prevent dehydration exceeding 2% bodyweight loss — not to fully match sweat losses in real time. Drinking too aggressively, especially plain water, can dilute blood sodium to dangerous levels during events lasting over 2–3 hours.',
    fitness: 'General guideline: 150–250 ml every 15–20 minutes for moderate exercise. Sessions over 60 minutes in heat or high intensity: use an electrolyte drink with 300–600 mg sodium per litre. For strength sessions under 60 minutes in cool environments, adequate pre-hydration often suffices. The small intestine absorbs ~1 L/hour maximum — sip steadily, do not chug.',
    tags: ['Hydration', 'Timing', 'During Training']
  },
  'Post-Workout Rehydration': {
    display: 'Post-Workout Rehydration | Recovery fluid',
    category: 'Timing',
    role: 'Rehydration after training requires replacing both fluid and electrolytes. Plain water alone drives excessive urination and slows complete rehydration — sodium must be present to stimulate thirst and promote fluid retention in the body\'s compartments.',
    fitness: 'Target: 1.25–1.5× the estimated fluid lost (weigh before and after). Include sodium via salted meals or electrolyte drinks. Milk is highly effective — it provides fluid, sodium, protein, and carbohydrates simultaneously. Allow 2–4 hours of active rehydration before a second session or competition that same day.',
    tags: ['Hydration', 'Timing', 'Recovery']
  },
  'Electrolyte Drinks': {
    display: 'Electrolyte Drinks | When & which',
    category: 'Hydration Sources',
    role: 'Electrolyte drinks include commercial sports drinks, hydration tablets (e.g. Nuun, LMNT), and homemade mixes. Key metrics: sodium content (300–700 mg/L is optimal for most athletes), potassium, and osmolality (isotonic solutions ~280–320 mOsm/L are absorbed fastest relative to hypo- or hypertonic alternatives).',
    fitness: 'Justified for sessions over 60 minutes in heat, two-a-day training, or competition. For general gym sessions under 1 hour in normal conditions, water and food are sufficient. Most commercial sports drinks contain excessive sugar — check the sodium-to-sugar ratio and prioritise sodium over sweetness for performance use. Low-carb electrolyte tabs suit strength athletes not requiring glycogen support.',
    tags: ['Hydration', 'Sources', 'Electrolytes']
  },
  'Coconut Water': {
    display: 'Coconut Water | Natural electrolyte source',
    category: 'Hydration Sources',
    role: 'Natural fluid with high potassium (~600 mg/cup), modest sodium (~252 mg/cup), small amounts of magnesium and calcium, and natural sugars (~9 g/cup). Low in sodium relative to sweat losses, but useful as part of a recovery protocol when dietary sodium intake is adequate.',
    fitness: 'Practical for post-workout rehydration when combined with a sodium-containing meal. Somewhat less effective than sodium-fortified sports drinks for electrolyte replacement in heavy sweaters. A good natural alternative for athletes who sweat moderately. Avoid flavoured or sweetened varieties with additives — read labels.',
    tags: ['Hydration', 'Sources', 'Natural']
  },
  'Food Hydration': {
    display: 'Food Hydration | ~20% of daily fluid',
    category: 'Hydration Sources',
    role: 'Approximately 20% of daily fluid intake comes from food, not beverages. Fruits and vegetables are 85–97% water and simultaneously deliver potassium, magnesium, and antioxidants. High-protein or high-sodium diets increase water requirements for urea and electrolyte excretion.',
    fitness: 'Eating hydrating foods reduces total drinking needed and packages electrolytes with nutrients. Useful for athletes who struggle to hit fluid targets via drinks alone. Watermelon, cucumber, strawberries, oranges, and Greek yogurt are standouts. Conversely, high-sodium processed foods pull water from cells — balance dietary sodium to total fluid intake.',
    tags: ['Hydration', 'Sources', 'Food']
  },
  'Dehydration Signs': {
    display: 'Dehydration Signs | Warning markers',
    category: 'Warning Signs',
    role: 'Progressive dehydration produces predictable symptoms by loss percentage. 1–2%: thirst, reduced sweating, slightly elevated heart rate. 2–3%: measurable performance decline (strength −2–3%, endurance −5–10%). 3–5%: muscle cramps, headache, dizziness, nausea. Above 5%: heat exhaustion risk, severely impaired cognition, dangerously elevated core temperature.',
    fitness: 'Train awareness of early signals (dry mouth, reduced urine output, darkening urine, mild headache) rather than waiting for thirst — thirst appears after 1.5–2% dehydration and is already too late for optimal performance. In competition and endurance events, dehydration is a primary cause of dropouts and medical interventions. Prevention is always faster than mid-session rehydration.',
    tags: ['Hydration', 'Warning Signs', 'Dehydration']
  },
  'Hyponatremia': {
    display: 'Hyponatremia | Overhydration danger',
    category: 'Warning Signs',
    role: 'Hyponatraemia is dangerously low blood sodium (<135 mmol/L), caused by drinking excessive fluid — usually plain water — during prolonged exercise, diluting plasma sodium faster than the kidneys can excrete the excess. Most common in endurance events (marathons, ultras, triathlons) when athletes drink to schedule rather than to thirst.',
    fitness: 'Symptoms mirror dehydration (nausea, fatigue, confusion, headache) — making mid-race diagnosis difficult without blood testing. Severe hyponatraemia causes cerebral oedema and seizures and is potentially fatal. Prevention: drink to thirst rather than to schedule during events >3 hours; use sodium-containing drinks rather than plain water; avoid NSAIDs during events (they impair renal sodium handling). At a medical tent: demand blood sodium testing before any IV fluid is administered.',
    tags: ['Hydration', 'Warning Signs', 'Safety', 'Overhydration']
  },

};

/* ── Navigation structure for the overlay side panel ── */
const NUTRITION_SECTIONS = [
  { key:'macro',     label:'Macro',       icon:'pie',   fields:['Protein','Fat','Carbs','Calories'] },
  { key:'vitamins',  label:'Vitamins',    icon:'pill',  fields:['Vitamin A','Vitamin C','Vitamin D','Vitamin E','Vitamin K1','Vitamin K2','Vitamin B1','Vitamin B2','Vitamin B3','Vitamin B5','Vitamin B6','Vitamin B7','Vitamin B9','Vitamin B12','Biotin','Folate','Choline'] },
  { key:'minerals',  label:'Minerals',    icon:'leaf',  fields:['Calcium','Iron','Magnesium','Phosphorus','Potassium','Sodium','Zinc','Selenium','Manganese','Copper','Iodine','Chromium','Molybdenum','Fluoride'] },
  { key:'amino',     label:'Amino Acids', icon:'nodes', fields:['Leucine','Isoleucine','Valine','Lysine','Methionine','Threonine','Tryptophan','Phenylalanine','Histidine','Cysteine','Glycine','Arginine','Glutamine','Tyrosine'] },
  { key:'fiber',     label:'Fiber',       icon:'leaf',  fields:['Total Fiber','Soluble Fiber','Insoluble Fiber'] },
  { key:'hydration', label:'Hydration',   icon:'drop',  fields:['Water','Electrolytes','Sodium','Potassium'] },
  { key:'extras',    label:'Other',       icon:'pie',   fields:['Cholesterol','Lutein + Zeaxanthin','Omega-3','CoQ10','Creatine'] },
];

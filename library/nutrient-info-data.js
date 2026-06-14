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
    fitness: 'Supports epithelial repair after training-induced tissue damage and helps sustain immune function during heavy blocks. Excess supplemental retinol is toxic — prefer food sources.'
  },
  'Vitamin D': {
    display: 'Vitamin D | Calciferol',
    role: 'Steroid-like hormone synthesised in skin from UVB light (D3) or consumed from fatty fish and fortified foods (D2/D3). Regulates calcium and phosphorus absorption, bone mineralisation, and expression of hundreds of genes involved in immune and muscle function.',
    fitness: 'Critical for muscle strength, testosterone biosynthesis, and stress-fracture prevention. Deficiency is extremely common in athletes training indoors or in northern latitudes. Target serum 25(OH)D of 40–60 ng/mL.'
  },
  'Vitamin E': {
    display: 'Vitamin E | Tocopherol',
    role: 'Family of eight fat-soluble compounds (alpha-tocopherol is most bioactive); primary lipid-soluble antioxidant protecting cell membranes from peroxidation. Also modulates immune signalling and prostaglandin synthesis.',
    fitness: 'Helps limit exercise-induced oxidative damage to muscle membranes. Mega-dose supplementation (>400 IU/day) may blunt mitochondrial adaptations to training — food sources (nuts, seeds, oils) are preferred.'
  },
  'Vitamin K': {
    display: 'Vitamin K | Phylloquinone / Menaquinone',
    role: 'K1 (phylloquinone, found in leafy greens) is essential for blood clotting via carboxylation of clotting factors. K2 (menaquinone, found in fermented foods and animal products) activates osteocalcin for bone mineralisation and matrix Gla protein for arterial calcium clearance.',
    fitness: 'K2 MK-7 in particular supports bone density and reduces arterial calcification — relevant for longevity-focused athletes. Synergises with Vitamin D for calcium utilisation.'
  },
  'Vitamin K1': {
    display: 'Vitamin K1 | Phylloquinone',
    role: 'The plant form of Vitamin K found predominantly in leafy greens (kale, spinach, broccoli). Acts as co-factor for hepatic gamma-carboxylation of coagulation factors II, VII, IX, and X, enabling blood clotting. Also carboxylates osteocalcin for bone mineralisation, though less potently than K2.',
    fitness: 'Adequate K1 ensures functional blood clotting — practically relevant for athletes managing contact-sport injuries. Widely available through vegetables; isolated deficiency in adults is uncommon on a varied diet.'
  },
  'Vitamin K2': {
    display: 'Vitamin K2 | Menaquinone (MK-4 / MK-7)',
    role: 'Animal and fermentation-derived form of Vitamin K (MK-4 from meat/eggs; MK-7 from natto and aged cheeses). More potent than K1 at activating osteocalcin (bone density) and matrix Gla protein (arterial calcium clearance), and has a significantly longer half-life (MK-7 ~72 hours vs K1 ~1 hour).',
    fitness: 'MK-7 (90–360 µg/day) is the most relevant form for bone density and cardiovascular protection in athletes. Synergises strongly with Vitamin D3 and calcium for optimal musculoskeletal function. Particularly important for athletes with low dairy/fermented food intake.'
  },

  /* ── Water-soluble vitamins (B-complex + C) ───────────────────────────── */
  'Vitamin C': {
    display: 'Vitamin C | Ascorbic acid',
    role: 'Potent water-soluble antioxidant required for collagen hydroxylation (tendons, ligaments, skin), iron absorption enhancement, carnitine synthesis, and catecholamine production. Cannot be stored in large amounts — daily intake is essential.',
    fitness: 'Taking 500–1000 mg around training accelerates collagen synthesis in connective tissue. Excessive doses (>2 g/day) may blunt some hormetic adaptations. Particularly important for injury recovery.'
  },
  'Vitamin B1': {
    display: 'Vitamin B1 | Thiamine',
    role: 'Co-enzyme (as TPP) in pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase — both rate-limiting steps of ATP production from carbohydrates. Also essential for nerve impulse transmission and branched-chain amino acid catabolism.',
    fitness: 'Athletes with high carbohydrate throughput have elevated thiamine needs. Deficiency causes fatigue, reduced power output, and peripheral neuropathy. Needs scale with total energy intake.'
  },
  'Vitamin B2': {
    display: 'Vitamin B2 | Riboflavin',
    role: 'Precursor to FAD and FMN — essential electron carriers in the mitochondrial electron transport chain and in fatty-acid beta-oxidation. Also involved in the recycling of glutathione, the body\'s primary antioxidant.',
    fitness: 'Supports both aerobic energy production and antioxidant capacity. Needs increase with training volume. Dairy and eggs are rich sources; vegans may need to monitor intake.'
  },
  'Vitamin B3': {
    display: 'Vitamin B3 | Niacin',
    role: 'Precursor to NAD+ and NADP+ — universal electron acceptors in glycolysis, the citric acid cycle, fatty-acid synthesis, and DNA repair. The body can synthesise limited niacin from tryptophan (60:1 ratio).',
    fitness: 'Adequate NAD+ levels support mitochondrial biogenesis and aerobic capacity. High-dose niacin supplementation (pharmacological doses) causes flushing, may raise blood sugar, and can impair fat oxidation during exercise.'
  },
  'Vitamin B5': {
    display: 'Vitamin B5 | Pantothenic acid',
    role: 'Core structural component of Coenzyme A (CoA), which is required for the activation of acetyl groups in the citric acid cycle, fatty-acid synthesis and oxidation, and steroid hormone production. Widely distributed in food — isolated deficiency is rare.',
    fitness: 'CoA-dependent pathways underpin energy metabolism at every intensity. Adequate B5 supports sustained output during long sessions and adrenal hormone synthesis under chronic training stress.'
  },
  'Vitamin B6': {
    display: 'Vitamin B6 | Pyridoxine',
    role: 'Co-factor (as pyridoxal-5-phosphate, PLP) in over 100 enzymatic reactions — principally amino acid transamination and decarboxylation, glycogen phosphorylase (glycogen breakdown), haemoglobin synthesis, and neurotransmitter production (serotonin, dopamine, GABA).',
    fitness: 'High protein intake increases B6 requirements. Important for mood, sleep quality, and glycogen mobilisation during training. Low B6 blunts haemoglobin production and aerobic capacity.'
  },
  'Vitamin B7': {
    display: 'Vitamin B7 | Biotin',
    role: 'Co-factor for five carboxylase enzymes involved in fatty-acid synthesis, gluconeogenesis, amino acid catabolism, and the citric acid cycle. Also plays a structural role in histone modification affecting gene expression.',
    fitness: 'Underpins energy metabolism pathways active during high-volume training. True dietary deficiency is rare but can occur with excessive raw-egg-white consumption (avidin binds biotin). Hair/nail claims for supplementation are not well supported.'
  },
  'Vitamin B8': {
    display: 'Vitamin B8 | Inositol',
    role: 'Polyol involved in cell membrane phospholipids (phosphatidylinositol) and second-messenger signalling cascades (IP3/DAG). Also plays roles in serotonin and insulin signalling. Not a true vitamin (the body synthesises it from glucose), but often grouped with B-complex.',
    fitness: 'May support insulin sensitivity, improving glucose uptake into muscle. Some evidence for reducing anxiety and improving sleep quality during high-stress training phases.'
  },
  'Vitamin B9': {
    display: 'Vitamin B9 | Folate',
    role: 'Co-factor (as tetrahydrofolate) in one-carbon transfer reactions essential for DNA synthesis, repair, and methylation; red blood cell maturation; and amino acid inter-conversions (serine↔glycine, homocysteine↔methionine). Found as folate in food; folic acid is the synthetic supplemental form.',
    fitness: 'Supports red blood cell production and thus oxygen-carrying capacity. Elevated homocysteine (marker of low folate/B12) is associated with cardiovascular risk. Particularly important during growth phases and for female athletes of reproductive age.'
  },
  'Vitamin B12': {
    display: 'Vitamin B12 | Cobalamin',
    role: 'Co-factor for two human enzymes: methionine synthase (DNA methylation, homocysteine recycling) and methylmalonyl-CoA mutase (odd-chain fatty-acid and amino-acid catabolism). Required for myelin sheath synthesis and red blood cell formation. Stored in the liver; deficiency takes years to develop but is irreversible if neurological damage occurs.',
    fitness: 'Deficiency causes megaloblastic anaemia, fatigue, weakness, and peripheral neuropathy — all directly limiting athletic performance. Exclusively found in animal products; supplementation is essential for plant-based athletes.'
  },
  'Biotin': {
    display: 'Vitamin B7 | Biotin',
    role: 'Co-factor for five carboxylase enzymes involved in fatty-acid synthesis, gluconeogenesis, amino acid catabolism, and the citric acid cycle. Also plays a structural role in histone modification affecting gene expression.',
    fitness: 'Underpins energy metabolism pathways active during high-volume training. True dietary deficiency is rare. Hair and nail supplement claims are not well evidenced beyond correcting actual deficiency.'
  },
  'Folate': {
    display: 'Vitamin B9 | Folate',
    role: 'Co-factor in one-carbon transfer reactions essential for DNA synthesis, repair, and methylation; red blood cell maturation; and amino acid inter-conversions. Found naturally as folate in food; folic acid is the synthetic form used in supplements and fortification.',
    fitness: 'Supports red blood cell production and oxygen-carrying capacity. Low folate raises homocysteine, increasing cardiovascular risk. Especially important during rapid growth phases and for female athletes.'
  },
  'Choline': {
    display: 'Choline | Acetylcholine precursor',
    role: 'Essential nutrient (not strictly a vitamin but often grouped with B-complex) that is the precursor to acetylcholine (neuromuscular transmission and memory), phosphatidylcholine (cell membranes), and betaine (methylation donor). The liver can synthesise limited amounts.',
    fitness: 'Plasma choline drops during prolonged endurance exercise; depletion contributes to fatigue. Adequate intake supports cognitive performance, neuromuscular efficiency, and liver fat export under high caloric load.'
  },

  /* ── Minerals — major ─────────────────────────────────────────────────── */
  'Calcium': {
    display: 'Ca | Calcium',
    role: 'Most abundant mineral in the body (99% in bone and teeth). Circulating calcium triggers muscle contraction (all muscle types), nerve impulse transmission via action potentials, hormone secretion, and blood clotting cascades. Bone continuously remodels in response to mechanical load.',
    fitness: 'Essential for preventing stress fractures, especially in female athletes and those with low energy availability. Post-exercise calcium intake (with Vitamin D and K2) aids bone remodelling. Absorption is impaired by excessive sodium and caffeine.'
  },
  'Iron': {
    display: 'Fe | Iron',
    role: 'Central atom of the haem group in haemoglobin (oxygen transport) and myoglobin (oxygen storage in muscle). Also integral to cytochromes in the mitochondrial electron transport chain and to numerous enzymes in energy metabolism. Haem iron (from animal sources) is absorbed ~25%; non-haem (plant) iron ~5–15%.',
    fitness: 'Iron-deficiency anaemia directly caps VO₂ max and causes fatigue, breathlessness, and impaired cognition. Runners and female athletes are at highest risk. Vitamin C consumed alongside plant iron improves absorption.'
  },
  'Magnesium': {
    display: 'Mg | Magnesium',
    role: 'Co-factor in over 300 enzymatic reactions including all ATP-utilising steps (ATP must bind magnesium to be active), protein synthesis, DNA replication and repair, and regulation of muscle and nerve excitability. Competes with calcium to regulate contraction–relaxation cycles.',
    fitness: 'Low magnesium is one of the most common micronutrient shortfalls in athletes. Manifests as muscle cramps, poor sleep quality, elevated resting heart rate, and blunted recovery. Losses increase significantly with heavy sweating.'
  },
  'Phosphorus': {
    display: 'P | Phosphorus',
    role: 'Second most abundant mineral in the body after calcium. Structural component of hydroxyapatite (bone and teeth), phospholipid bilayers (cell membranes), nucleotides (DNA/RNA), and the high-energy phosphate bonds in ATP and phosphocreatine (PCr) — the immediate energy currency for explosive effort.',
    fitness: 'Directly fuels maximal-intensity efforts via PCr resynthesis. Rarely deficient in people consuming adequate protein. Phosphate loading protocols have limited but real ergogenic support for endurance athletes.'
  },
  'Potassium': {
    display: 'K | Potassium',
    role: 'Primary intracellular cation (major positive ion inside cells). Maintains resting membrane potential in partnership with sodium, enabling action potentials in nerve and muscle. Drives sodium-potassium ATPase pumps that set cellular electrochemical gradients and regulate fluid volume.',
    fitness: 'Crucial for preventing exercise cramps and arrhythmias during prolonged sessions. Sweat potassium losses are substantial — replace through whole foods (bananas, sweet potato, coconut water) rather than isolated supplements.'
  },
  'Sodium': {
    display: 'Na | Sodium',
    role: 'Primary extracellular cation — governs plasma osmolality, blood volume, and blood pressure. Essential for initiating action potentials in nerve and muscle, intestinal nutrient absorption (sodium-coupled transporters), and kidney acid-base regulation.',
    fitness: 'Requirements scale sharply with sweat rate and environmental heat. Under-replacing sodium during prolonged endurance events (>2 hours) risks hyponatraemia, a potentially fatal dilution of blood sodium. Sports drinks with 500–700 mg/L sodium outperform water alone.'
  },
  'Zinc': {
    display: 'Zn | Zinc',
    role: 'Structural and catalytic component of over 300 enzymes spanning all major metabolic classes. Essential for immune cell development and function, wound healing, protein synthesis (ribosome structure), DNA transcription (zinc-finger proteins), taste and smell, and testosterone biosynthesis.',
    fitness: 'Intense training increases zinc losses via sweat, urine, and muscle damage repair. Low zinc measurably suppresses testosterone and growth hormone, slows wound healing, and impairs immune defence. Absorption is inhibited by phytates in grains and legumes.'
  },
  'Selenium': {
    display: 'Se | Selenium',
    role: 'Trace mineral incorporated into the amino acid selenocysteine, found in selenoproteins including glutathione peroxidase (antioxidant defence), thioredoxin reductase (DNA repair, cell redox), and iodothyronine deiodinases (thyroid hormone conversion from T4 to active T3).',
    fitness: 'Protects muscle from oxidative damage during heavy training and supports thyroid function, which sets metabolic rate and energy availability. Toxic at supplemental doses above 400 µg/day — highly bioavailable from Brazil nuts (1–2 nuts = full daily requirement).'
  },

  /* ── Minerals — trace ─────────────────────────────────────────────────── */
  'Manganese': {
    display: 'Mn | Manganese',
    role: 'Essential co-factor for manganese superoxide dismutase (MnSOD) — the primary mitochondrial antioxidant enzyme. Also required for enzymes involved in carbohydrate metabolism (pyruvate carboxylase), bone matrix protein synthesis, and wound healing.',
    fitness: 'Supports mitochondrial antioxidant defence and bone integrity in high-volume athletes. Widespread in plant foods; isolated deficiency is uncommon. Excessive manganese (industrial exposure) is neurotoxic.'
  },
  'Copper': {
    display: 'Cu | Copper',
    role: 'Co-factor for enzymes including cytochrome c oxidase (the final step of electron transport chain — critical for aerobic ATP production), ceruloplasmin (iron metabolism and mobilisation), lysyl oxidase (collagen and elastin cross-linking), and superoxide dismutase (Cu/Zn-SOD).',
    fitness: 'Deficiency impairs iron mobilisation (causing anaemia even with adequate iron), weakens collagen in tendons and ligaments, and reduces aerobic efficiency. High-dose zinc supplementation competes with copper absorption.'
  },
  'Iodine': {
    display: 'I | Iodine',
    role: 'Trace mineral exclusively required for synthesis of thyroid hormones T3 (triiodothyronine) and T4 (thyroxine), which regulate basal metabolic rate, protein synthesis, bone growth, neurological development, and cardiac function.',
    fitness: 'Thyroid hormones set the metabolic baseline for athletic performance — inadequate iodine reduces energy availability, body temperature regulation, and rate of recovery. Iodised salt and seafood are primary sources; athletic populations restricting processed food may under-consume.'
  },
  'Chromium': {
    display: 'Cr | Chromium',
    role: 'Trace element that potentiates insulin signalling by facilitating glucose transporter (GLUT4) translocation to cell membranes, improving glucose uptake into muscle and adipose tissue. Essential at trace amounts; dietary requirement is in micrograms.',
    fitness: 'Adequate chromium enhances insulin sensitivity — relevant for body composition and post-exercise glycogen replenishment. Evidence for chromium picolinate supplementation beyond correcting deficiency is weak.'
  },
  'Molybdenum': {
    display: 'Mo | Molybdenum',
    role: 'Essential co-factor for four human enzymes — xanthine oxidase (purine catabolism and uric acid production), sulfite oxidase (sulphur amino acid metabolism), aldehyde oxidase, and mitochondrial amidoxime reductase. Required in trace amounts.',
    fitness: 'Supports sulphur amino acid (methionine, cysteine) processing important in high-protein diets. Deficiency is exceptionally rare given its abundance in legumes, grains, and nuts.'
  },
  'Fluoride': {
    display: 'F | Fluoride',
    role: 'Trace mineral that incorporates into tooth enamel and bone as fluorapatite, significantly increasing hardness and resistance to acid dissolution. Not classified as essential for life, but strongly protective for dental health.',
    fitness: 'Dental health is a practical concern for athletes consuming high-sugar sports drinks and gels. Adequate fluoride through water and toothpaste limits enamel erosion and cavities that can affect performance and quality of life.'
  },

  /* ── Amino acids ──────────────────────────────────────────────────────── */
  'Leucine': {
    display: 'Leucine | BCAA — mTOR trigger',
    role: 'Branched-chain amino acid (BCAA) and the most potent dietary activator of the mTORC1 signalling complex, which drives ribosomal protein synthesis. Leucine is catabolised directly in muscle tissue (unlike most amino acids processed in the liver) and acts as a nutritional sensor of protein availability.',
    fitness: '2–3 g leucine per meal maximally stimulates muscle protein synthesis (MPS). High-leucine sources: whey, eggs, beef, dairy. Particularly critical for older athletes where the leucine threshold for MPS rises.'
  },
  'Isoleucine': {
    display: 'Isoleucine | BCAA — glucose uptake',
    role: 'Branched-chain amino acid catabolised in muscle; involved in haemoglobin synthesis and stimulates glucose transporter (GLUT4) translocation, enhancing glucose uptake into muscle independently of insulin signalling.',
    fitness: 'Supports carbohydrate utilisation during exercise and contributes to secondary muscle protein synthesis signalling. Works synergistically with leucine and valine in BCAA supplements.'
  },
  'Valine': {
    display: 'Valine | BCAA — energy substrate',
    role: 'Branched-chain amino acid that serves as an alternative energy substrate in muscle during prolonged exercise. Involved in nitrogen balance and in sparing leucine and isoleucine from oxidation during catabolic states.',
    fitness: 'Contributes to the endurance fuel mix at high training volumes and during energy restriction. Least anabolic of the three BCAAs but important for nitrogen retention during caloric deficit.'
  },
  'Lysine': {
    display: 'Lysine | Collagen & carnitine',
    role: 'Essential amino acid (cannot be synthesised) required for collagen and elastin cross-linking (via hydroxylysine), calcium absorption enhancement, carnitine biosynthesis (fat transport into mitochondria), and immune antibody production.',
    fitness: 'Collagen synthesis for tendon and ligament health makes lysine particularly valuable for strength and power athletes. Carnitine production supports fat oxidation during lower-intensity training. Lysine is the limiting amino acid in most grain-based diets.'
  },
  'Methionine': {
    display: 'Methionine | Sulphur & methylation',
    role: 'Sulphur-containing essential amino acid; precursor to cysteine (antioxidant glutathione), taurine (bile conjugation, cardiac function), and the universal methyl donor S-adenosylmethionine (SAMe), which drives methylation reactions across epigenetics, neurotransmitters, and phospholipids.',
    fitness: 'Supports liver detoxification pathways stressed by high supplement and medication loads. Glutathione synthesis from methionine is a key antioxidant mechanism during heavy training. High intakes elevate homocysteine — ensure adequate B6, B9, B12 for recycling.'
  },
  'Threonine': {
    display: 'Threonine | Collagen & gut integrity',
    role: 'Essential amino acid integral to collagen and elastin structure (as hydroxyproline precursor), mucin glycoproteins forming the intestinal mucus barrier, and inter-conversion to glycine and serine for one-carbon metabolism and creatine synthesis.',
    fitness: 'Gut lining integrity from adequate threonine improves nutrient absorption efficiency — particularly relevant during caloric surplus or deficit phases. Supports structural collagen turnover in high-impact athletes.'
  },
  'Tryptophan': {
    display: 'Tryptophan | Serotonin & sleep',
    role: 'Essential amino acid and sole dietary precursor to serotonin (mood, gut motility, satiety) and melatonin (sleep-wake cycle regulation). Also converts to niacin (B3) at low efficiency (~60:1 ratio), and to the neuromodulator kynurenine under inflammatory conditions.',
    fitness: 'Evening consumption (e.g., from dairy, turkey) may improve sleep architecture and next-day recovery quality. Central tryptophan availability is depleted by prolonged exercise, contributing to central fatigue. Low tryptophan impairs mood and motivation during training blocks.'
  },
  'Phenylalanine': {
    display: 'Phenylalanine | Catecholamine precursor',
    role: 'Essential aromatic amino acid converted to tyrosine, then sequentially to the catecholamines dopamine, noradrenaline, and adrenaline — the primary excitatory neurotransmitters and stress hormones. Also incorporated directly into structural proteins.',
    fitness: 'Supports catecholamine synthesis required for motivation, focus, and the fight-or-flight response to intense training. Low availability under prolonged stress or caloric restriction may impair drive and pain tolerance.'
  },
  'Histidine': {
    display: 'Histidine | Carnosine & histamine',
    role: 'Semi-essential amino acid (essential in infants and for buffer synthesis in adults). Precursor to histamine (immune and gastric acid signalling) and, critically, the dipeptide carnosine (with beta-alanine) — concentrated in muscle and brain, functioning as a pH buffer and antioxidant.',
    fitness: 'Carnosine synthesis from histidine buffers lactic acid accumulation during high-intensity efforts, delaying fatigue. Beta-alanine supplementation increases carnosine, but adequate histidine intake is the often-overlooked partner requirement.'
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
    fitness: 'Lost in proportion to sodium in sweat — standard electrolyte replacement (sodium chloride in sports drinks) covers both simultaneously. Isolated deficiency is rare. Relevant for athletes in extreme heat or performing ultra-endurance events where large NaCl sweat losses reduce plasma volume and raise cramping risk.'
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

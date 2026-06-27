/* ════════════════════════════════════════════════════════════════
   GRND // Nutrition Food Library
   Single unified food array consumed by the Nutrition section.
   Each food can carry multiple type tags (e.g. fish + omega-3) —
   the filter row in index.html filters by tag, not by array.
   Follows the same pattern as every other library/*-data.js.
   ════════════════════════════════════════════════════════════════ */

const foods = [
  {
    id: 1, name: "Chicken Breast", alt: "Skinless, boneless",
    desc: "The gold standard of lean protein. Chicken breast delivers a very high protein-to-calorie ratio with minimal fat, making it ideal for both muscle gain and fat loss phases. Mild flavour absorbs marinades easily and it's widely available and affordable.",
    muscles: [{n:"Protein",p:true},{n:"B3 Niacin",p:false},{n:"Selenium",p:false},{n:"Phosphorus",p:false}],
    tags: ["poultry","lean","high-protein"],
    diff: 2,
    str: {suit:true,  eff:5, sets:null, reps:null, note:"150–200 g per meal optimises MPS (muscle protein synthesis)"},
    vol: {suit:true,  eff:3, sets:null, reps:null, note:"Combine with carbs for glycogen replenishment"},
    end: {suit:true,  eff:5, sets:null, reps:null, note:"Low fat content supports a calorie deficit"},
    risk: 1, cues: "Pound to even thickness before cooking for uniform doneness. Rest 3–5 min after cooking. Marinate 30 min minimum for best flavour. Internal temp: 75 °C / 165 °F.",
    equipment: "Pan · Grill · Oven · Air Fryer",
    position: "Post-workout · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 165,
      macros: [
        { key:"protein", label:"Protein", grams:"31.0g", percent:75, kcal:124, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"3.6g", percent:25, kcal:41, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"6 mcg RAE", daily:1, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0.1 mcg", daily:1, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.3 mg", daily:2, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.3 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.12 mg", daily:9, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.3 mcg", daily:13, color:"#e26d5a" },
          { label:"Folate", amount:"4 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.9 mg", daily:18, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked chicken breast.",
        items: [
          { label:"Calcium", amount:"15 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.4 mg", daily:2, color:"#e26d5a" },
          { label:"Magnesium", amount:"29 mg", daily:7, color:"#4fb66f" },
          { label:"Phosphorus", amount:"228 mg", daily:18, color:"#8f74ff" },
          { label:"Potassium", amount:"256 mg", daily:5, color:"#f6b23b" },
          { label:"Zinc", amount:"1.0 mg", daily:9, color:"#25b9a7" },
          { label:"Selenium", amount:"22.5 mcg", daily:41, color:"#d982d0" },
          { label:"Sodium", amount:"74 mg", daily:3, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"2.43 g", daily:99, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.40 g", daily:100, color:"#4fb66f" },
          { label:"Valine", amount:"1.55 g", daily:74, color:"#f6b23b" },
          { label:"Lysine", amount:"2.81 g", daily:108, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"1.18 g", daily:84, color:"#e26d5a" },
          { label:"Threonine", amount:"1.32 g", daily:89, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.36 g", daily:127, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.42 g", daily:87, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Chicken breast contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"65.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"74 mg", daily:3, color:"#72a6d8" },
          { label:"Potassium", amount:"256 mg", daily:5, color:"#f6b23b" },
          { label:"Magnesium", amount:"29 mg", daily:7, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key chicken-specific nutrients",
        note: "These are important chicken-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Cholesterol", amount:"85 mg", daily:28, color:"#e26d5a" },
          { label:"Vitamin B6", amount:"0.6 mg", daily:35, color:"#f6b23b" },
          { label:"B3 Niacin", amount:"13.7 mg", daily:86, color:"#4fb66f" }
        ]
      },
      note: "Values are approximate and may vary based on cut, cooking method and whether skin is included."
    },
    youtube: null, joints: {}
  },
  {
    id: 2, name: "Whole Eggs", alt: "Free-range preferred",
    desc: "One of the most complete protein sources available — eggs contain all nine essential amino acids and a near-perfect leucine profile for triggering muscle protein synthesis. The yolk provides cholesterol for testosterone production, choline for neural health and fat-soluble vitamins A, D, E and K.",
    muscles: [{n:"Complete Protein",p:true},{n:"Choline",p:true},{n:"Vitamin D",p:false},{n:"B12",p:false},{n:"Zinc",p:false}],
    tags: ["egg","complete","high-protein","keto"],
    diff: 1,
    str: {suit:true,  eff:5, note:"2–3 whole eggs with 3–4 whites is a practical high-protein meal. Leucine content triggers MPS at each serving."},
    vol: {suit:true,  eff:4, note:"Eggs with toast or oats = fast glycogen + slow protein combination."},
    end: {suit:true,  eff:3, note:"Moderate calorie density — portion awareness needed in a deficit."},
    risk: 3, cues: "Soft-boil 6 min for runny yolk; hard-boil 10 min. Scramble on low heat to keep protein intact. Don't skip yolks — nutrient density is highest there.",
    equipment: "Pot · Pan — no equipment needed raw",
    position: "Breakfast · Pre-workout · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g (approx. 2 large eggs)",
      calories: 143,
      macros: [
        { key:"protein", label:"Protein", grams:"13.0g", percent:39, kcal:52, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"11.0g", percent:37, kcal:50, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"1.1g", percent:24, kcal:14, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g.",
        items: [
          { label:"Vitamin A", amount:"160 mcg RAE", daily:18, color:"#4f8df7" },
          { label:"Vitamin D", amount:"2.0 mcg", daily:10, color:"#f6b23b" },
          { label:"Vitamin E", amount:"1.1 mg", daily:7, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.3 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.45 mg", daily:35, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"1.1 mcg", daily:46, color:"#e26d5a" },
          { label:"Folate", amount:"47 mcg DFE", daily:12, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"1.5 mg", daily:30, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g whole egg.",
        items: [
          { label:"Calcium", amount:"56 mg", daily:4, color:"#4f8df7" },
          { label:"Iron", amount:"1.8 mg", daily:10, color:"#e26d5a" },
          { label:"Magnesium", amount:"12 mg", daily:3, color:"#4fb66f" },
          { label:"Phosphorus", amount:"198 mg", daily:16, color:"#8f74ff" },
          { label:"Potassium", amount:"138 mg", daily:3, color:"#f6b23b" },
          { label:"Zinc", amount:"1.3 mg", daily:12, color:"#25b9a7" },
          { label:"Selenium", amount:"30.7 mcg", daily:56, color:"#d982d0" },
          { label:"Sodium", amount:"142 mg", daily:6, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.08 g", daily:44, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.67 g", daily:48, color:"#4fb66f" },
          { label:"Valine", amount:"0.86 g", daily:41, color:"#f6b23b" },
          { label:"Lysine", amount:"0.91 g", daily:35, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.65 g", daily:46, color:"#e26d5a" },
          { label:"Threonine", amount:"0.56 g", daily:38, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.17 g", daily:60, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.12 g", daily:40, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Whole eggs contain no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"76.2 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"142 mg", daily:6, color:"#72a6d8" },
          { label:"Potassium", amount:"138 mg", daily:3, color:"#f6b23b" },
          { label:"Magnesium", amount:"12 mg", daily:3, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key egg-specific nutrients",
        note: "These are important egg-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Choline", amount:"294 mg", daily:53, color:"#4f8df7" },
          { label:"Cholesterol", amount:"372 mg", daily:124, color:"#e26d5a" },
          { label:"Lutein + Zeaxanthin", amount:"503 mcg", daily:0, color:"#f6b23b" },
          { label:"Biotin", amount:"20 mcg", daily:67, color:"#4fb66f" }
        ]
      },
      note: "Values are approximate and may vary based on egg size and preparation."
    },
    youtube: null, joints: {}
  },
  {
    id: 3, name: "Salmon", alt: "Atlantic / Pacific wild-caught",
    desc: "Salmon is one of the few foods that delivers high-quality complete protein alongside anti-inflammatory omega-3 fatty acids (EPA and DHA). The combination supports muscle repair, reduces exercise-induced inflammation and improves joint health — a uniquely valuable recovery food for athletes.",
    muscles: [{n:"Protein",p:true},{n:"Omega-3 EPA/DHA",p:true},{n:"Vitamin D",p:false},{n:"B12",p:false},{n:"Selenium",p:false}],
    tags: ["fish","omega-3","anti-inflammatory","high-protein"],
    diff: 3,
    str: {suit:true,  eff:5, note:"High leucine content + omega-3 synergistically enhance MPS beyond protein alone."},
    vol: {suit:true,  eff:4, note:"Calorie-dense enough to support high training volumes. EPA/DHA reduce delayed-onset muscle soreness."},
    end: {suit:true,  eff:4, note:"Moderate fat aids sustained energy. Anti-inflammatory effects support consecutive training days."},
    risk: 3, cues: "Pan-sear skin-side down for 4 min, flip 2 min. Or bake at 200 °C for 12–15 min. Internal temp 60 °C / 140 °F. Don't overcook — flesh should flake easily.",
    equipment: "Pan · Oven · Grill",
    position: "Post-workout · Dinner",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 200,
      macros: [
        { key:"protein", label:"Protein", grams:"22.0g", percent:44, kcal:88, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"12.4g", percent:56, kcal:112, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"41 mcg RAE", daily:5, color:"#4f8df7" },
          { label:"Vitamin D", amount:"11.0 mcg", daily:55, color:"#f6b23b" },
          { label:"Vitamin E", amount:"1.1 mg", daily:7, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.5 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.49 mg", daily:38, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"3.2 mcg", daily:133, color:"#e26d5a" },
          { label:"Folate", amount:"26 mcg DFE", daily:7, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"1.66 mg", daily:33, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked salmon.",
        items: [
          { label:"Calcium", amount:"9 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.34 mg", daily:2, color:"#e26d5a" },
          { label:"Magnesium", amount:"27 mg", daily:6, color:"#4fb66f" },
          { label:"Phosphorus", amount:"240 mg", daily:19, color:"#8f74ff" },
          { label:"Potassium", amount:"384 mg", daily:8, color:"#f6b23b" },
          { label:"Zinc", amount:"0.43 mg", daily:4, color:"#25b9a7" },
          { label:"Selenium", amount:"36.5 mcg", daily:66, color:"#d982d0" },
          { label:"Sodium", amount:"59 mg", daily:3, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.83 g", daily:74, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.13 g", daily:81, color:"#4fb66f" },
          { label:"Valine", amount:"1.45 g", daily:69, color:"#f6b23b" },
          { label:"Lysine", amount:"1.54 g", daily:59, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"1.10 g", daily:78, color:"#e26d5a" },
          { label:"Threonine", amount:"0.95 g", daily:64, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.29 g", daily:101, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.89 g", daily:68, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Salmon contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"64.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"59 mg", daily:3, color:"#72a6d8" },
          { label:"Potassium", amount:"384 mg", daily:8, color:"#f6b23b" },
          { label:"Magnesium", amount:"27 mg", daily:6, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key salmon-specific nutrients",
        note: "These are important salmon-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Omega-3 (EPA + DHA)", amount:"2.3 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"63 mg", daily:21, color:"#e26d5a" },
          { label:"Vitamin B6", amount:"0.6 mg", daily:35, color:"#f6b23b" }
        ]
      },
      note: "Values are approximate and may vary based on cut, farmed vs. wild origin and cooking method."
    },
    youtube: null, joints: {}
  },
  {
    id: 4, name: "Greek Yoghurt", alt: "Plain, 0–2% fat",
    desc: "Greek yoghurt is strained to concentrate protein — typically 15–20 g per 200 g serving — while providing casein, a slow-digesting protein ideal before sleep for overnight muscle repair. It also contains probiotics that support gut health and nutrient absorption.",
    muscles: [{n:"Casein Protein",p:true},{n:"Calcium",p:true},{n:"Probiotics",p:false},{n:"B12",p:false}],
    tags: ["dairy","casein","slow-release","gut-health"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Best consumed before bed — casein releases amino acids slowly through the night, supporting overnight MPS."},
    vol: {suit:true,  eff:3, note:"Good base for a high-protein snack between sessions."},
    end: {suit:true,  eff:4, note:"Low calorie, high satiety. Easy to track macros. Pairs well with fruit or oats."},
    risk: 4, cues: "Choose plain — flavoured varieties can contain 15–25 g of added sugar per serving. Add your own fruit or honey. Full-fat version adds ~5 g fat and significantly better flavour.",
    equipment: "None — ready to eat",
    position: "Pre-sleep · Snack · Breakfast",
    nutritionProfile: {
      servingLabel: "Amount per 100g (plain, low-fat)",
      calories: 73,
      macros: [
        { key:"protein", label:"Protein", grams:"10.0g", percent:55, kcal:40, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1.9g", percent:24, kcal:17, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"3.9g", percent:21, kcal:16, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g.",
        items: [
          { label:"Vitamin A", amount:"27 mcg RAE", daily:3, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.02 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.1 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.28 mg", daily:22, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.75 mcg", daily:31, color:"#e26d5a" },
          { label:"Folate", amount:"7 mcg DFE", daily:2, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.39 mg", daily:8, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g.",
        items: [
          { label:"Calcium", amount:"110 mg", daily:8, color:"#4f8df7" },
          { label:"Iron", amount:"0.04 mg", daily:0, color:"#e26d5a" },
          { label:"Magnesium", amount:"11 mg", daily:3, color:"#4fb66f" },
          { label:"Phosphorus", amount:"135 mg", daily:11, color:"#8f74ff" },
          { label:"Potassium", amount:"141 mg", daily:3, color:"#f6b23b" },
          { label:"Zinc", amount:"0.52 mg", daily:5, color:"#25b9a7" },
          { label:"Selenium", amount:"9.7 mcg", daily:18, color:"#d982d0" },
          { label:"Sodium", amount:"36 mg", daily:2, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"0.83 g", daily:34, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.52 g", daily:37, color:"#4fb66f" },
          { label:"Valine", amount:"0.66 g", daily:32, color:"#f6b23b" },
          { label:"Lysine", amount:"0.70 g", daily:27, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.50 g", daily:35, color:"#e26d5a" },
          { label:"Threonine", amount:"0.43 g", daily:29, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.13 g", daily:46, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.86 g", daily:31, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Greek yoghurt contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"85.0 g", daily:4, color:"#4f8df7" },
          { label:"Sodium", amount:"36 mg", daily:2, color:"#72a6d8" },
          { label:"Potassium", amount:"141 mg", daily:3, color:"#f6b23b" },
          { label:"Magnesium", amount:"11 mg", daily:3, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key yoghurt-specific nutrients",
        note: "These are important yoghurt-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Vitamin B6", amount:"0.06 mg", daily:4, color:"#4f8df7" },
          { label:"Iodine", amount:"21 mcg", daily:14, color:"#f6b23b" },
          { label:"Probiotic Cultures", amount:"Live strains", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Values are approximate and vary with fat % and brand. Flavoured varieties add significant sugar not reflected here."
    },
    youtube: null, joints: {}
  },
  {
    id: 5, name: "Cottage Cheese", alt: "Low-fat curd cheese",
    desc: "Often overlooked, cottage cheese is one of the highest-protein dairy foods per calorie. Like Greek yoghurt it is rich in casein and also provides a meaningful amount of whey protein, making it a dual-release protein source. High in calcium and very filling.",
    muscles: [{n:"Casein Protein",p:true},{n:"Whey Protein",p:false},{n:"Calcium",p:false},{n:"Selenium",p:false}],
    tags: ["dairy","casein","high-protein","low-fat"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Dual protein release (whey + casein). Excellent pre-sleep protein source."},
    vol: {suit:true,  eff:3, note:"Very high satiety for the calories. Easy to portion."},
    end: {suit:true,  eff:5, note:"Low calorie density. Typically 80–100 kcal per 150 g serving with 15–18 g protein."},
    risk: 4, cues: "Eat plain or blend smooth for a creamy texture. Combine with pineapple, peaches or berries for a complete snack. Works well as a savoury dip base too.",
    equipment: "None — ready to eat",
    position: "Pre-sleep · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g (1% low-fat)",
      calories: 72,
      macros: [
        { key:"protein", label:"Protein", grams:"12.4g", percent:69, kcal:50, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1.0g", percent:13, kcal:9, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"4.3g", percent:18, kcal:13, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g.",
        items: [
          { label:"Vitamin A", amount:"23 mcg RAE", daily:3, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.1 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.16 mg", daily:12, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.4 mcg", daily:17, color:"#e26d5a" },
          { label:"Folate", amount:"12 mcg DFE", daily:3, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.2 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g low-fat cottage cheese.",
        items: [
          { label:"Calcium", amount:"83 mg", daily:6, color:"#4f8df7" },
          { label:"Iron", amount:"0.1 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"5 mg", daily:1, color:"#4fb66f" },
          { label:"Phosphorus", amount:"134 mg", daily:11, color:"#8f74ff" },
          { label:"Potassium", amount:"104 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"0.4 mg", daily:4, color:"#25b9a7" },
          { label:"Selenium", amount:"9.7 mcg", daily:18, color:"#d982d0" },
          { label:"Sodium", amount:"364 mg", daily:16, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.10 g", daily:45, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.65 g", daily:46, color:"#4fb66f" },
          { label:"Valine", amount:"0.73 g", daily:35, color:"#f6b23b" },
          { label:"Lysine", amount:"0.97 g", daily:37, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.40 g", daily:29, color:"#e26d5a" },
          { label:"Threonine", amount:"0.55 g", daily:37, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.14 g", daily:49, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.12 g", daily:40, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Cottage cheese contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"80.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"364 mg", daily:16, color:"#72a6d8" },
          { label:"Potassium", amount:"104 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"5 mg", daily:1, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key cottage-cheese-specific nutrients",
        note: "These are important cottage-cheese-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Cholesterol", amount:"4 mg", daily:1, color:"#e26d5a" },
          { label:"Casein (approx.)", amount:"~9.7 g", daily:0, color:"#4f8df7" },
          { label:"Vitamin B6", amount:"0.1 mg", daily:6, color:"#f6b23b" }
        ]
      },
      note: "Values are approximate and vary by fat percentage (low-fat vs full-fat) and brand."
    },
    youtube: null, joints: {}
  },
  {
    id: 6, name: "Lean Beef", alt: "Mince (5% fat) / Steak (sirloin)",
    desc: "Beef provides complete protein alongside creatine, zinc, iron and B12 — nutrients with strong evidence for supporting strength, power and red blood cell production. The natural creatine content (~5 g per kg) is small but meaningful over time. Red meat has one of the highest bioavailabilities for iron.",
    muscles: [{n:"Protein",p:true},{n:"Creatine",p:true},{n:"Iron",p:true},{n:"Zinc",p:false},{n:"B12",p:false}],
    tags: ["meat","red-meat","high-protein","iron"],
    diff: 2,
    str: {suit:true,  eff:5, note:"Natural creatine + high leucine make beef one of the best foods for strength athletes."},
    vol: {suit:true,  eff:4, note:"Iron supports haemoglobin and oxygen transport — key for high-volume training."},
    end: {suit:true,  eff:3, note:"Higher calorie density than chicken. Choose leaner cuts in a deficit."},
    risk: 1, cues: "Rest steak at room temp 20 min before cooking. Sear on very high heat 2 min each side for medium-rare. Mince: brown on medium-high, drain excess fat. Internal temp: 63 °C / 145 °F for steak.",
    equipment: "Cast iron pan · Grill",
    position: "Post-workout · Dinner",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked (95% lean)",
      calories: 215,
      macros: [
        { key:"protein", label:"Protein", grams:"26.1g", percent:51, kcal:104, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"11.8g", percent:49, kcal:106, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0.1 mcg", daily:1, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"1.6 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.18 mg", daily:14, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"2.6 mcg", daily:108, color:"#e26d5a" },
          { label:"Folate", amount:"9 mcg DFE", daily:2, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.4 mg", daily:8, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked lean beef.",
        items: [
          { label:"Calcium", amount:"15 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"2.6 mg", daily:14, color:"#e26d5a" },
          { label:"Magnesium", amount:"21 mg", daily:5, color:"#4fb66f" },
          { label:"Phosphorus", amount:"196 mg", daily:16, color:"#8f74ff" },
          { label:"Potassium", amount:"318 mg", daily:7, color:"#f6b23b" },
          { label:"Zinc", amount:"5.7 mg", daily:52, color:"#25b9a7" },
          { label:"Selenium", amount:"19.0 mcg", daily:35, color:"#d982d0" },
          { label:"Sodium", amount:"66 mg", daily:3, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"2.05 g", daily:83, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.16 g", daily:83, color:"#4fb66f" },
          { label:"Valine", amount:"1.27 g", daily:60, color:"#f6b23b" },
          { label:"Lysine", amount:"2.24 g", daily:86, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.94 g", daily:67, color:"#e26d5a" },
          { label:"Threonine", amount:"1.10 g", daily:74, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.29 g", daily:101, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.98 g", daily:71, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Beef contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"60.0 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"66 mg", daily:3, color:"#72a6d8" },
          { label:"Potassium", amount:"318 mg", daily:7, color:"#f6b23b" },
          { label:"Magnesium", amount:"21 mg", daily:5, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key beef-specific nutrients",
        note: "These are important beef-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Creatine (approx.)", amount:"~0.35 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"80 mg", daily:27, color:"#e26d5a" },
          { label:"Vitamin B6", amount:"0.4 mg", daily:24, color:"#f6b23b" }
        ]
      },
      note: "Values are approximate and vary considerably with cut, fat trim percentage and cooking method."
    },
    youtube: null, joints: {}
  },
  {
    id: 7, name: "Tuna (Canned)", alt: "In water, drained",
    desc: "Canned tuna is arguably the most convenient high-protein food available — no cooking required, long shelf life, cheap and highly portable. A single 185 g can provides ~40 g protein at under 200 kcal. It's low in fat when packed in water and an excellent source of omega-3 ALA.",
    muscles: [{n:"Protein",p:true},{n:"Omega-3 ALA",p:false},{n:"Selenium",p:false},{n:"B3 Niacin",p:false}],
    tags: ["fish","convenient","lean","high-protein"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Excellent leucine source. Easy to hit protein targets on the go."},
    vol: {suit:true,  eff:3, note:"Combine with rice or pasta for a complete meal."},
    end: {suit:true,  eff:5, note:"One of the highest protein-to-calorie ratios of any food."},
    risk: 2, cues: "Drain well before use. Mix with Greek yoghurt instead of mayo for a high-protein tuna salad. Limit to 2–3 cans per week due to mercury content. Choose skipjack over albacore for lower mercury.",
    equipment: "None — ready to eat",
    position: "Any meal · On the go",
    nutritionProfile: {
      servingLabel: "Amount per 100g, drained (canned in water)",
      calories: 116,
      macros: [
        { key:"protein", label:"Protein", grams:"25.5g", percent:88, kcal:102, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.8g", percent:6, kcal:7, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g drained.",
        items: [
          { label:"Vitamin A", amount:"17 mcg RAE", daily:2, color:"#4f8df7" },
          { label:"Vitamin D", amount:"1.0 mcg", daily:5, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.6 mg", daily:4, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.1 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.06 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"2.4 mcg", daily:100, color:"#e26d5a" },
          { label:"Folate", amount:"3 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.2 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g canned tuna in water, drained.",
        items: [
          { label:"Calcium", amount:"11 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"1.3 mg", daily:7, color:"#e26d5a" },
          { label:"Magnesium", amount:"26 mg", daily:6, color:"#4fb66f" },
          { label:"Phosphorus", amount:"179 mg", daily:14, color:"#8f74ff" },
          { label:"Potassium", amount:"237 mg", daily:5, color:"#f6b23b" },
          { label:"Zinc", amount:"0.6 mg", daily:5, color:"#25b9a7" },
          { label:"Selenium", amount:"80.4 mcg", daily:146, color:"#d982d0" },
          { label:"Sodium", amount:"247 mg", daily:11, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"2.00 g", daily:81, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.18 g", daily:84, color:"#4fb66f" },
          { label:"Valine", amount:"1.31 g", daily:62, color:"#f6b23b" },
          { label:"Lysine", amount:"2.34 g", daily:90, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.97 g", daily:69, color:"#e26d5a" },
          { label:"Threonine", amount:"1.10 g", daily:74, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.28 g", daily:98, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.98 g", daily:71, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Tuna contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"72.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"247 mg", daily:11, color:"#72a6d8" },
          { label:"Potassium", amount:"237 mg", daily:5, color:"#f6b23b" },
          { label:"Magnesium", amount:"26 mg", daily:6, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key tuna-specific nutrients",
        note: "These are important tuna-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Omega-3 ALA/DHA", amount:"0.3 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"30 mg", daily:10, color:"#e26d5a" },
          { label:"Mercury (context)", amount:"low–moderate", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Values are for tuna canned in water, drained. Oil-packed tuna has notably higher fat and calories."
    },
    youtube: null, joints: {}
  },
  {
    id: 8, name: "Tempeh", alt: "Fermented soy block",
    desc: "Tempeh is fermented whole soybean — not only a complete plant protein but also a probiotic food with better digestibility than tofu. It has a firm texture that absorbs marinades and takes on a meaty bite when pan-fried. Provides isoflavones and the full amino acid spectrum including leucine.",
    muscles: [{n:"Complete Protein",p:true},{n:"Probiotics",p:false},{n:"Iron",p:false},{n:"Calcium",p:false},{n:"Isoflavones",p:false}],
    tags: ["plant","soy","complete","fermented","vegan"],
    diff: 3,
    str: {suit:true,  eff:4, note:"One of the few plant proteins with a leucine content close to animal sources. Fermentation improves amino acid absorption."},
    vol: {suit:true,  eff:3, note:"Pair with rice for a complete carb + protein meal."},
    end: {suit:true,  eff:4, note:"Higher protein and lower fat than most plant protein sources. Moderate calorie density."},
    risk: 2, cues: "Slice thin and marinate 1 hour before cooking. Steam first for 10 min to reduce bitterness. Pan-fry on medium-high until crisp. Works well in stir-fries, bowls and wraps.",
    equipment: "Steamer · Pan",
    position: "Any meal · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g",
      calories: 192,
      macros: [
        { key:"protein", label:"Protein", grams:"20.3g", percent:42, kcal:81, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"11.4g", percent:53, kcal:103, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"7.6g", percent:5, kcal:8, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.5 mg", daily:3, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.36 mg", daily:28, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"24 mcg DFE", daily:6, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.4 mg", daily:8, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g tempeh.",
        items: [
          { label:"Calcium", amount:"111 mg", daily:9, color:"#4f8df7" },
          { label:"Iron", amount:"2.7 mg", daily:15, color:"#e26d5a" },
          { label:"Magnesium", amount:"81 mg", daily:19, color:"#4fb66f" },
          { label:"Phosphorus", amount:"266 mg", daily:21, color:"#8f74ff" },
          { label:"Potassium", amount:"412 mg", daily:9, color:"#f6b23b" },
          { label:"Zinc", amount:"1.1 mg", daily:10, color:"#25b9a7" },
          { label:"Selenium", amount:"7.5 mcg", daily:14, color:"#d982d0" },
          { label:"Sodium", amount:"9 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Plant proteins are typically lower in leucine relative to total protein than animal sources.",
        items: [
          { label:"Leucine", amount:"1.45 g", daily:59, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.93 g", daily:66, color:"#4fb66f" },
          { label:"Valine", amount:"0.97 g", daily:46, color:"#f6b23b" },
          { label:"Lysine", amount:"1.07 g", daily:41, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.53 g", daily:38, color:"#e26d5a" },
          { label:"Threonine", amount:"0.79 g", daily:53, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.25 g", daily:88, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.66 g", daily:60, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"4.0 g", daily:14, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.8 g", daily:3, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"3.2 g", daily:11, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"58.0 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"9 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"412 mg", daily:9, color:"#f6b23b" },
          { label:"Magnesium", amount:"81 mg", daily:19, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key tempeh-specific nutrients",
        note: "These are important tempeh-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Isoflavones", amount:"~12.5 mg", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Manganese", amount:"1.4 mg", daily:61, color:"#4fb66f" }
        ]
      },
      note: "Values are approximate and may vary by brand, soybean variety and fermentation method."
    },
    youtube: null, joints: {}
  },
  {
    id: 9, name: "White Fish", alt: "Cod / Haddock / Tilapia",
    desc: "White fish is the leanest animal protein source available — often under 100 kcal per 150 g fillet while providing 25–30 g protein. This makes it uniquely valuable during calorie deficit phases. Lower in omega-3 than salmon but still provides a meaningful amount of B12, iodine and selenium.",
    muscles: [{n:"Protein",p:true},{n:"Iodine",p:false},{n:"B12",p:false},{n:"Selenium",p:false}],
    tags: ["fish","ultra-lean","low-calorie","high-protein"],
    diff: 3,
    str: {suit:true,  eff:4, note:"Very high protein density per calorie. Useful when calorie allowance is limited."},
    vol: {suit:false, eff:2, note:"Too low in calories for very high training volumes — supplement with carbs."},
    end: {suit:true,  eff:5, note:"Lowest calorie protein source of all animal proteins. Ideal for aggressive cuts."},
    risk: 3, cues: "Pat dry before cooking — moisture causes steaming instead of searing. Season simply: salt, pepper, lemon. Pan-fry 3–4 min per side on medium-high. Do not overcook — fish firms and dries quickly.",
    equipment: "Pan · Oven · Steamer",
    position: "Lunch · Dinner",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked (cod)",
      calories: 105,
      macros: [
        { key:"protein", label:"Protein", grams:"23.0g", percent:90, kcal:92, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.9g", percent:8, kcal:8, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"12 mcg RAE", daily:1, color:"#4f8df7" },
          { label:"Vitamin D", amount:"1.0 mcg", daily:5, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.6 mg", daily:4, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.1 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.06 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"1.0 mcg", daily:42, color:"#e26d5a" },
          { label:"Folate", amount:"7 mcg DFE", daily:2, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.2 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked white fish (cod).",
        items: [
          { label:"Calcium", amount:"16 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.4 mg", daily:2, color:"#e26d5a" },
          { label:"Magnesium", amount:"32 mg", daily:8, color:"#4fb66f" },
          { label:"Phosphorus", amount:"209 mg", daily:17, color:"#8f74ff" },
          { label:"Potassium", amount:"244 mg", daily:5, color:"#f6b23b" },
          { label:"Zinc", amount:"0.5 mg", daily:5, color:"#25b9a7" },
          { label:"Selenium", amount:"32.4 mcg", daily:59, color:"#d982d0" },
          { label:"Sodium", amount:"78 mg", daily:3, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.78 g", daily:72, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.05 g", daily:75, color:"#4fb66f" },
          { label:"Valine", amount:"1.18 g", daily:56, color:"#f6b23b" },
          { label:"Lysine", amount:"2.10 g", daily:81, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.86 g", daily:61, color:"#e26d5a" },
          { label:"Threonine", amount:"0.99 g", daily:67, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.25 g", daily:88, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.78 g", daily:64, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "White fish contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"76.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"78 mg", daily:3, color:"#72a6d8" },
          { label:"Potassium", amount:"244 mg", daily:5, color:"#f6b23b" },
          { label:"Magnesium", amount:"32 mg", daily:8, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key white-fish-specific nutrients",
        note: "These are important white-fish-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Iodine", amount:"~99 mcg", daily:66, color:"#4f8df7" },
          { label:"Cholesterol", amount:"55 mg", daily:18, color:"#e26d5a" },
          { label:"Omega-3 (total)", amount:"0.2 g", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Values reflect cod as a representative white fish; tilapia and haddock are similar but iodine and omega-3 vary by species."
    },
    youtube: null, joints: {}
  },
  {
    id: 10, name: "Lentils", alt: "Red / Green / Puy",
    desc: "Lentils are exceptional for athletes on a plant-based diet — providing protein, complex carbohydrates, iron and folate in a single ingredient. They're one of the richest plant sources of leucine and have a low glycaemic index, giving sustained energy. Also a significant source of dietary fibre for gut health.",
    muscles: [{n:"Protein",p:true},{n:"Complex Carbs",p:true},{n:"Iron",p:true},{n:"Folate",p:false},{n:"Fibre",p:false}],
    tags: ["plant","legume","iron","high-protein","vegan"],
    diff: 2,
    str: {suit:true,  eff:3, note:"Combine with a rice or grain to complete the amino acid profile. Leucine content is meaningful but lower than animal protein."},
    vol: {suit:true,  eff:4, note:"Dual carb + protein source makes this excellent for high-volume training days."},
    end: {suit:true,  eff:4, note:"Low GI carbs fuel extended training. High fibre improves gut health and satiety."},
    risk: 1, cues: "Red lentils: rinse, simmer 15–20 min. Green/puy: 25–30 min. No soaking needed for red lentils. Add acid (lemon/tomato) at end — adding early prevents softening. Season generously.",
    equipment: "Pot",
    position: "Lunch · Dinner · Pre-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 116,
      macros: [
        { key:"protein", label:"Protein", grams:"9.0g", percent:31, kcal:36, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.4g", percent:3, kcal:4, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"20.1g", percent:66, kcal:76, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"1 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.1 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"1.7 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.07 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"181 mcg DFE", daily:45, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.2 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked lentils.",
        items: [
          { label:"Calcium", amount:"19 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"3.3 mg", daily:18, color:"#e26d5a" },
          { label:"Magnesium", amount:"36 mg", daily:9, color:"#4fb66f" },
          { label:"Phosphorus", amount:"180 mg", daily:14, color:"#8f74ff" },
          { label:"Potassium", amount:"369 mg", daily:8, color:"#f6b23b" },
          { label:"Zinc", amount:"1.3 mg", daily:12, color:"#25b9a7" },
          { label:"Selenium", amount:"2.8 mcg", daily:5, color:"#d982d0" },
          { label:"Sodium", amount:"2 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Plant proteins are typically lower in leucine relative to total protein than animal sources.",
        items: [
          { label:"Leucine", amount:"0.65 g", daily:26, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.40 g", daily:29, color:"#4fb66f" },
          { label:"Valine", amount:"0.46 g", daily:22, color:"#f6b23b" },
          { label:"Lysine", amount:"0.62 g", daily:24, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.16 g", daily:11, color:"#e26d5a" },
          { label:"Threonine", amount:"0.32 g", daily:22, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.08 g", daily:28, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.78 g", daily:28, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"7.9 g", daily:28, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.5 g", daily:5, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"6.4 g", daily:23, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"69.6 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"2 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"369 mg", daily:8, color:"#f6b23b" },
          { label:"Magnesium", amount:"36 mg", daily:9, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key lentil-specific nutrients",
        note: "These are important lentil-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Folate", amount:"181 mcg DFE", daily:45, color:"#d982d0" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Manganese", amount:"0.5 mg", daily:22, color:"#4fb66f" }
        ]
      },
      note: "Values are for cooked lentils and vary slightly by variety (red, green, puy/French)."
    },
    youtube: null, joints: {}
  },
  {
    id: 11, name: "Turkey Breast", alt: "Skinless, whole or mince",
    desc: "Turkey breast is the closest rival to chicken breast in terms of lean protein content, often matching or slightly exceeding it. It's especially rich in tryptophan, a precursor to serotonin and melatonin — making it a strategic choice for evening meals when recovery and sleep quality matter.",
    muscles: [{n:"Protein",p:true},{n:"Tryptophan",p:true},{n:"B6",p:false},{n:"Selenium",p:false},{n:"Zinc",p:false}],
    tags: ["poultry","lean","high-protein","recovery"],
    diff: 2,
    str: {suit:true,  eff:5, note:"Matches chicken breast gram-for-gram on protein. Slightly higher tryptophan which supports recovery."},
    vol: {suit:true,  eff:3, note:"Lean enough for high-volume diets. Easy to batch cook."},
    end: {suit:true,  eff:5, note:"One of the leanest animal proteins available. Excellent for cutting phases."},
    risk: 1, cues: "Ground turkey: cook thoroughly — unlike beef, medium-rare is not safe. Whole breast: brine in salt water 4 hours before roasting to retain moisture. Internal temp: 75 °C / 165 °F.",
    equipment: "Pan · Oven",
    position: "Dinner · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 150,
      macros: [
        { key:"protein", label:"Protein", grams:"30.0g", percent:80, kcal:120, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"3.2g", percent:19, kcal:29, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0.1 mcg", daily:1, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.1 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.11 mg", daily:8, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.3 mcg", daily:13, color:"#e26d5a" },
          { label:"Folate", amount:"6 mcg DFE", daily:2, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.9 mg", daily:18, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked turkey breast.",
        items: [
          { label:"Calcium", amount:"11 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"1.0 mg", daily:6, color:"#e26d5a" },
          { label:"Magnesium", amount:"28 mg", daily:7, color:"#4fb66f" },
          { label:"Phosphorus", amount:"213 mg", daily:17, color:"#8f74ff" },
          { label:"Potassium", amount:"259 mg", daily:6, color:"#f6b23b" },
          { label:"Zinc", amount:"1.0 mg", daily:9, color:"#25b9a7" },
          { label:"Selenium", amount:"24.5 mcg", daily:45, color:"#d982d0" },
          { label:"Sodium", amount:"63 mg", daily:3, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"2.35 g", daily:95, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.34 g", daily:96, color:"#4fb66f" },
          { label:"Valine", amount:"1.49 g", daily:71, color:"#f6b23b" },
          { label:"Lysine", amount:"2.72 g", daily:105, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"1.14 g", daily:81, color:"#e26d5a" },
          { label:"Threonine", amount:"1.27 g", daily:86, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.38 g", daily:133, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.32 g", daily:83, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Turkey breast contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"66.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"63 mg", daily:3, color:"#72a6d8" },
          { label:"Potassium", amount:"259 mg", daily:6, color:"#f6b23b" },
          { label:"Magnesium", amount:"28 mg", daily:7, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key turkey-specific nutrients",
        note: "These are important turkey-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Tryptophan", amount:"0.38 g", daily:133, color:"#d982d0" },
          { label:"Cholesterol", amount:"70 mg", daily:23, color:"#e26d5a" },
          { label:"Vitamin B6", amount:"0.7 mg", daily:41, color:"#f6b23b" }
        ]
      },
      note: "Values are approximate and may vary based on whether the cut is whole breast or mince, and cooking method."
    },
    youtube: null, joints: {}
  },
  {
    id: 12, name: "Edamame", alt: "Young green soybeans",
    desc: "Edamame are immature soybeans harvested before hardening — retaining the highest moisture content and a distinctive sweet flavour. One of the most protein-dense plant snacks available: a 200 g serving delivers ~17 g protein and 8 g fibre. Complete amino acid profile makes them a reliable plant protein source.",
    muscles: [{n:"Complete Protein",p:true},{n:"Fibre",p:false},{n:"Folate",p:false},{n:"Vitamin K",p:false}],
    tags: ["plant","soy","snack","complete","vegan"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Complete protein in a snack-sized format. Useful as a protein-boosting side."},
    vol: {suit:true,  eff:3, note:"High fibre aids gut health in high-training periods."},
    end: {suit:true,  eff:4, note:"Low calorie, high satiety. Easy to eat and track."},
    risk: 2, cues: "Boil or steam from frozen 5 min. Shell to eat (pods not edible). Season with flaky sea salt, chilli flakes or sesame oil. Ready-shelled frozen edamame are also available and require minimal prep.",
    equipment: "Pot or microwave",
    position: "Snack · Pre-workout · Side dish",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked, shelled",
      calories: 121,
      macros: [
        { key:"protein", label:"Protein", grams:"11.9g", percent:39, kcal:48, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"5.2g", percent:39, kcal:47, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"8.9g", percent:22, kcal:26, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"6 mcg RAE", daily:1, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.4 mg", daily:3, color:"#8f74ff" },
          { label:"Vitamin K", amount:"21 mcg", daily:18, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.14 mg", daily:11, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"311 mcg DFE", daily:78, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.2 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked edamame.",
        items: [
          { label:"Calcium", amount:"63 mg", daily:5, color:"#4f8df7" },
          { label:"Iron", amount:"2.3 mg", daily:13, color:"#e26d5a" },
          { label:"Magnesium", amount:"64 mg", daily:15, color:"#4fb66f" },
          { label:"Phosphorus", amount:"169 mg", daily:14, color:"#8f74ff" },
          { label:"Potassium", amount:"436 mg", daily:9, color:"#f6b23b" },
          { label:"Zinc", amount:"1.4 mg", daily:13, color:"#25b9a7" },
          { label:"Selenium", amount:"1.5 mcg", daily:3, color:"#d982d0" },
          { label:"Sodium", amount:"6 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Soy protein is one of few plant proteins considered functionally complete.",
        items: [
          { label:"Leucine", amount:"0.95 g", daily:38, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.56 g", daily:40, color:"#4fb66f" },
          { label:"Valine", amount:"0.58 g", daily:28, color:"#f6b23b" },
          { label:"Lysine", amount:"0.76 g", daily:29, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.32 g", daily:23, color:"#e26d5a" },
          { label:"Threonine", amount:"0.49 g", daily:33, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.16 g", daily:56, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.09 g", daily:39, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"5.2 g", daily:19, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.0 g", daily:4, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"4.2 g", daily:15, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"71.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"6 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"436 mg", daily:9, color:"#f6b23b" },
          { label:"Magnesium", amount:"64 mg", daily:15, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key edamame-specific nutrients",
        note: "These are important edamame-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Folate", amount:"311 mcg DFE", daily:78, color:"#d982d0" },
          { label:"Isoflavones", amount:"~16 mg", daily:0, color:"#4f8df7" },
          { label:"Vitamin K", amount:"21 mcg", daily:18, color:"#4fb66f" }
        ]
      },
      note: "Values are for shelled, cooked edamame. Pods themselves are not edible and excluded from these figures."
    },
    youtube: null, joints: {}
  },
  {
    id: 13, name: "Whey Protein", alt: "Concentrate / Isolate / Hydrolysate",
    desc: "Whey is the fastest-absorbing protein available, derived from the liquid by-product of cheese production. It has the highest leucine content of any protein source — typically 10–11% by weight — which makes it unmatched for triggering muscle protein synthesis in the post-workout window. Whey isolate is 90%+ protein by weight with minimal lactose, suitable for most lactose-sensitive individuals.",
    muscles: [{n:"Complete Protein",p:true},{n:"Leucine",p:true},{n:"BCAAs",p:true},{n:"Calcium",p:false}],
    tags: ["supplement","dairy","fast-absorbing","post-workout","high-protein"],
    diff: 1,
    str: {suit:true,  eff:5, note:"Highest leucine concentration of any protein source. Consume within 30–60 min post-workout for optimal MPS."},
    vol: {suit:true,  eff:5, note:"Easiest way to hit daily protein targets during high-volume phases. Add to oats, yoghurt or smoothies."},
    end: {suit:true,  eff:4, note:"Fast absorption aids recovery between sessions. Useful for athletes with high protein requirements."},
    risk: 2, cues: "Isolate has minimal lactose — preferred for sensitive individuals. Shake with cold water for fastest absorption; milk slows absorption but improves flavour. Don't exceed 30–40 g per serving — excess won't enhance MPS further.",
    equipment: "Shaker bottle",
    position: "Post-workout · Breakfast · Between meals",
    nutritionProfile: {
      servingLabel: "Amount per 30g scoop (concentrate/isolate blend)",
      calories: 120,
      macros: [
        { key:"protein", label:"Protein", grams:"24.0g", percent:80, kcal:96, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1.5g", percent:11, kcal:14, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"2.5g", percent:8, kcal:10, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values. Whey is not a significant vitamin source unless fortified — check the label as many commercial products add vitamins.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.5 mg", daily:38, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.3 mcg", daily:13, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 30g scoop; unflavoured concentrate/isolate blend.",
        items: [
          { label:"Calcium", amount:"120 mg", daily:9, color:"#4f8df7" },
          { label:"Iron", amount:"0.2 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"20 mg", daily:5, color:"#4fb66f" },
          { label:"Phosphorus", amount:"180 mg", daily:14, color:"#8f74ff" },
          { label:"Potassium", amount:"180 mg", daily:4, color:"#f6b23b" },
          { label:"Zinc", amount:"0.6 mg", daily:5, color:"#25b9a7" },
          { label:"Selenium", amount:"3.0 mcg", daily:5, color:"#d982d0" },
          { label:"Sodium", amount:"100 mg", daily:4, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Whey has the highest leucine concentration of any common protein source.",
        items: [
          { label:"Leucine", amount:"2.50 g", daily:101, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.40 g", daily:100, color:"#4fb66f" },
          { label:"Valine", amount:"1.30 g", daily:62, color:"#f6b23b" },
          { label:"Lysine", amount:"2.10 g", daily:81, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"1.05 g", daily:75, color:"#e26d5a" },
          { label:"Threonine", amount:"1.20 g", daily:81, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.40 g", daily:140, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.90 g", daily:68, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Whey protein contains negligible dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe the powder's electrolyte contribution per 30g scoop, mixed with water.",
        items: [
          { label:"Water", amount:"~1.0 g (dry powder)", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"100 mg", daily:4, color:"#72a6d8" },
          { label:"Potassium", amount:"180 mg", daily:4, color:"#f6b23b" },
          { label:"Magnesium", amount:"20 mg", daily:5, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key whey-specific nutrients",
        note: "These are important whey-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"BCAAs (total)", amount:"~5.2 g", daily:0, color:"#4f8df7" },
          { label:"Lactose (concentrate)", amount:"~1–2 g", daily:0, color:"#f6b23b" },
          { label:"Cholesterol", amount:"10 mg", daily:3, color:"#e26d5a" }
        ]
      },
      note: "Values vary substantially by brand and form (concentrate vs isolate vs hydrolysate) — always check the specific product label."
    },
    youtube: null, joints: {}
  },
  {
    id: 14, name: "Casein Protein", alt: "Micellar casein powder",
    desc: "Casein is the slow-digesting counterpart to whey — it forms a gel in the stomach and releases amino acids steadily over 5–7 hours. This sustained release makes it ideal before sleep, where it supports overnight muscle protein synthesis without a protein breakdown period. It also creates a strong satiety effect, useful during calorie restriction.",
    muscles: [{n:"Casein Protein",p:true},{n:"Calcium",p:true},{n:"Phosphorus",p:false}],
    tags: ["supplement","dairy","slow-release","pre-sleep","high-protein"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Best consumed pre-sleep to maintain positive protein balance through the night."},
    vol: {suit:true,  eff:3, note:"Anti-catabolic during long training blocks. Keeps protein synthesis elevated overnight."},
    end: {suit:true,  eff:4, note:"High satiety supports calorie deficit phases. Slow release prevents muscle catabolism."},
    risk: 2, cues: "Mix with minimal liquid for a thick pudding-like texture — more satisfying than a thin shake. Avoid post-workout use; whey is superior then. Micellar casein is superior to calcium caseinate as a protein source.",
    equipment: "Shaker bottle or bowl",
    position: "Pre-sleep · Last meal of the day",
    nutritionProfile: {
      servingLabel: "Amount per 30g scoop (micellar casein)",
      calories: 115,
      macros: [
        { key:"protein", label:"Protein", grams:"24.0g", percent:84, kcal:96, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.5g", percent:4, kcal:5, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"3.0g", percent:10, kcal:12, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values. Casein is not a significant vitamin source unless fortified.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.3 mg", daily:23, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.4 mcg", daily:17, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.2 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 30g scoop of micellar casein.",
        items: [
          { label:"Calcium", amount:"180 mg", daily:14, color:"#4f8df7" },
          { label:"Iron", amount:"0.1 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"15 mg", daily:4, color:"#4fb66f" },
          { label:"Phosphorus", amount:"220 mg", daily:18, color:"#8f74ff" },
          { label:"Potassium", amount:"150 mg", daily:3, color:"#f6b23b" },
          { label:"Zinc", amount:"0.5 mg", daily:5, color:"#25b9a7" },
          { label:"Selenium", amount:"2.5 mcg", daily:5, color:"#d982d0" },
          { label:"Sodium", amount:"90 mg", daily:4, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Casein's micellar structure releases amino acids slowly over 5–7 hours.",
        items: [
          { label:"Leucine", amount:"2.10 g", daily:85, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.20 g", daily:86, color:"#4fb66f" },
          { label:"Valine", amount:"1.35 g", daily:64, color:"#f6b23b" },
          { label:"Lysine", amount:"1.95 g", daily:75, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.85 g", daily:61, color:"#e26d5a" },
          { label:"Threonine", amount:"1.05 g", daily:71, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.30 g", daily:105, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.20 g", daily:79, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Casein protein contains negligible dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe the powder's electrolyte contribution per 30g scoop, mixed with water.",
        items: [
          { label:"Water", amount:"~1.0 g (dry powder)", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"90 mg", daily:4, color:"#72a6d8" },
          { label:"Potassium", amount:"150 mg", daily:3, color:"#f6b23b" },
          { label:"Magnesium", amount:"15 mg", daily:4, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key casein-specific nutrients",
        note: "These are important casein-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Digestion time", amount:"5–7 hours (slow release)", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"8 mg", daily:3, color:"#e26d5a" },
          { label:"Calcium", amount:"180 mg", daily:14, color:"#4f8df7" }
        ]
      },
      note: "Values vary by brand and form — calcium caseinate has a slightly different profile to micellar casein."
    },
    youtube: null, joints: {}
  },
  {
    id: 15, name: "Sardines", alt: "Canned in water or olive oil",
    desc: "Sardines are among the most nutrient-dense foods on earth — delivering complete protein, omega-3 EPA/DHA, vitamin D, vitamin B12, calcium (from the edible bones) and selenium in a single small can. The small size means they accumulate virtually no mercury unlike larger fish. One of the best cost-to-nutrient foods available.",
    muscles: [{n:"Protein",p:true},{n:"Omega-3 EPA/DHA",p:true},{n:"Vitamin D",p:true},{n:"Calcium",p:true},{n:"B12",p:false}],
    tags: ["fish","omega-3","anti-inflammatory","calcium","high-protein"],
    diff: 1,
    str: {suit:true,  eff:5, note:"Complete amino acid profile + omega-3 for enhanced MPS and reduced inflammation."},
    vol: {suit:true,  eff:4, note:"Anti-inflammatory EPA/DHA support recovery in high-volume blocks."},
    end: {suit:true,  eff:5, note:"One of the safest, most sustainable fish. No mercury concerns. Outstanding micronutrient density."},
    risk: 1, cues: "Eat directly from the can — no prep required. Mash on toast with lemon, mustard or hot sauce. Bones are completely edible and a significant source of calcium. In olive oil = better flavour. In water = fewer calories.",
    equipment: "None — ready to eat",
    position: "Any meal · Quick snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g, canned in water, drained",
      calories: 208,
      macros: [
        { key:"protein", label:"Protein", grams:"24.6g", percent:48, kcal:98, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"11.5g", percent:50, kcal:104, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g drained.",
        items: [
          { label:"Vitamin A", amount:"32 mcg RAE", daily:4, color:"#4f8df7" },
          { label:"Vitamin D", amount:"4.8 mcg", daily:24, color:"#f6b23b" },
          { label:"Vitamin E", amount:"2.0 mg", daily:13, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.23 mg", daily:18, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"8.9 mcg", daily:371, color:"#e26d5a" },
          { label:"Folate", amount:"11 mcg DFE", daily:3, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.6 mg", daily:12, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g canned sardines with bones, drained.",
        items: [
          { label:"Calcium", amount:"382 mg", daily:29, color:"#4f8df7" },
          { label:"Iron", amount:"2.9 mg", daily:16, color:"#e26d5a" },
          { label:"Magnesium", amount:"39 mg", daily:9, color:"#4fb66f" },
          { label:"Phosphorus", amount:"490 mg", daily:39, color:"#8f74ff" },
          { label:"Potassium", amount:"397 mg", daily:8, color:"#f6b23b" },
          { label:"Zinc", amount:"1.4 mg", daily:13, color:"#25b9a7" },
          { label:"Selenium", amount:"52.7 mcg", daily:96, color:"#d982d0" },
          { label:"Sodium", amount:"307 mg", daily:13, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.92 g", daily:78, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.14 g", daily:81, color:"#4fb66f" },
          { label:"Valine", amount:"1.26 g", daily:60, color:"#f6b23b" },
          { label:"Lysine", amount:"2.26 g", daily:87, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.93 g", daily:66, color:"#e26d5a" },
          { label:"Threonine", amount:"1.05 g", daily:71, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.27 g", daily:95, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.91 g", daily:69, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Sardines contain no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"60.0 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"307 mg", daily:13, color:"#72a6d8" },
          { label:"Potassium", amount:"397 mg", daily:8, color:"#f6b23b" },
          { label:"Magnesium", amount:"39 mg", daily:9, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key sardine-specific nutrients",
        note: "These are important sardine-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Omega-3 (EPA + DHA)", amount:"~1.5 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"142 mg", daily:47, color:"#e26d5a" },
          { label:"Mercury (context)", amount:"very low", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Values are for sardines canned in water with bones included, which is how most of the calcium is delivered. Oil-packed varieties are higher in calories."
    },
    youtube: null, joints: {}
  },
  {
    id: 16, name: "Shrimp / Prawns", alt: "Peeled, cooked or raw",
    desc: "Shrimp deliver one of the highest protein-to-calorie ratios of any animal food — approximately 24 g protein per 100 g at only 100 kcal. They are very low in fat and carbohydrates, making them an almost pure protein source. Also rich in iodine, selenium and astaxanthin, a potent antioxidant that gives shrimp their pink colour.",
    muscles: [{n:"Protein",p:true},{n:"Iodine",p:true},{n:"Selenium",p:false},{n:"Astaxanthin",p:false},{n:"B12",p:false}],
    tags: ["shellfish","ultra-lean","high-protein","low-calorie"],
    diff: 2,
    str: {suit:true,  eff:4, note:"Extremely high protein per calorie. Ideal when calorie headroom is limited."},
    vol: {suit:true,  eff:3, note:"Easy to add to rice dishes, stir-fries and salads for a protein boost."},
    end: {suit:true,  eff:5, note:"Among the lowest calorie protein sources. Iodine supports thyroid function and metabolism."},
    risk: 3, cues: "Cook from raw 2–3 min each side on high heat — they turn pink and curl when done. Overcooking makes them rubbery. Frozen raw shrimp defrost in 15 min in cold water. Pre-cooked shrimp only need warming.",
    equipment: "Pan · Grill · Wok",
    position: "Lunch · Dinner · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 99,
      macros: [
        { key:"protein", label:"Protein", grams:"24.0g", percent:97, kcal:96, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.3g", percent:3, kcal:3, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0.2g", percent:1, kcal:1, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"30 mcg RAE", daily:3, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0.2 mcg", daily:1, color:"#f6b23b" },
          { label:"Vitamin E", amount:"1.0 mg", daily:7, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.3 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.04 mg", daily:3, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"1.4 mcg", daily:58, color:"#e26d5a" },
          { label:"Folate", amount:"3 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked shrimp.",
        items: [
          { label:"Calcium", amount:"70 mg", daily:5, color:"#4f8df7" },
          { label:"Iron", amount:"0.5 mg", daily:3, color:"#e26d5a" },
          { label:"Magnesium", amount:"39 mg", daily:9, color:"#4fb66f" },
          { label:"Phosphorus", amount:"237 mg", daily:19, color:"#8f74ff" },
          { label:"Potassium", amount:"259 mg", daily:6, color:"#f6b23b" },
          { label:"Zinc", amount:"1.6 mg", daily:15, color:"#25b9a7" },
          { label:"Selenium", amount:"40.0 mcg", daily:73, color:"#d982d0" },
          { label:"Sodium", amount:"111 mg", daily:5, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.88 g", daily:76, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.10 g", daily:79, color:"#4fb66f" },
          { label:"Valine", amount:"1.16 g", daily:55, color:"#f6b23b" },
          { label:"Lysine", amount:"2.20 g", daily:85, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.94 g", daily:67, color:"#e26d5a" },
          { label:"Threonine", amount:"1.00 g", daily:68, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.27 g", daily:95, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.85 g", daily:66, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Shrimp contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"75.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"111 mg", daily:5, color:"#72a6d8" },
          { label:"Potassium", amount:"259 mg", daily:6, color:"#f6b23b" },
          { label:"Magnesium", amount:"39 mg", daily:9, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key shrimp-specific nutrients",
        note: "These are important shrimp-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Iodine", amount:"~35 mcg", daily:23, color:"#4f8df7" },
          { label:"Cholesterol", amount:"189 mg", daily:63, color:"#e26d5a" },
          { label:"Astaxanthin", amount:"trace", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Shellfish allergy is common — avoid if sensitive. Cholesterol content is higher than most seafood but has minimal impact on blood cholesterol for most people."
    },
    youtube: null, joints: {}
  },
  {
    id: 17, name: "Pork Tenderloin", alt: "Lean pork fillet",
    desc: "Pork tenderloin is one of the leanest cuts of meat available — often comparable to skinless chicken breast in fat content — while providing complete protein, thiamine (vitamin B1), zinc and selenium. Thiamine is essential for carbohydrate metabolism and energy production, making pork tenderloin a particularly good pairing with carbohydrate-heavy meals.",
    muscles: [{n:"Protein",p:true},{n:"Thiamine B1",p:true},{n:"Zinc",p:false},{n:"Selenium",p:false},{n:"B6",p:false}],
    tags: ["meat","lean","high-protein","B-vitamins"],
    diff: 3,
    str: {suit:true,  eff:4, note:"High zinc supports testosterone and immune function. Competitive protein content with chicken."},
    vol: {suit:true,  eff:4, note:"Thiamine B1 supports carbohydrate conversion to ATP — important for high-volume training."},
    end: {suit:true,  eff:4, note:"Lean profile suitable for cutting phases. Selenium supports thyroid and antioxidant defence."},
    risk: 2, cues: "Sear on high heat 2 min all sides then roast at 200 °C for 15–18 min. Internal temp: 63 °C / 145 °F. Rest 5 min before cutting. Do not overcook — unlike chicken, pork tenderloin is safe at medium-doneness.",
    equipment: "Pan · Oven",
    position: "Dinner · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 143,
      macros: [
        { key:"protein", label:"Protein", grams:"26.0g", percent:73, kcal:104, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"3.5g", percent:22, kcal:32, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"2 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0.5 mcg", daily:3, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.31 mg", daily:24, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.6 mcg", daily:25, color:"#e26d5a" },
          { label:"Folate", amount:"5 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.8 mg", daily:16, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked pork tenderloin.",
        items: [
          { label:"Calcium", amount:"5 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"1.1 mg", daily:6, color:"#e26d5a" },
          { label:"Magnesium", amount:"26 mg", daily:6, color:"#4fb66f" },
          { label:"Phosphorus", amount:"246 mg", daily:20, color:"#8f74ff" },
          { label:"Potassium", amount:"353 mg", daily:8, color:"#f6b23b" },
          { label:"Zinc", amount:"2.0 mg", daily:18, color:"#25b9a7" },
          { label:"Selenium", amount:"35.0 mcg", daily:64, color:"#d982d0" },
          { label:"Sodium", amount:"50 mg", daily:2, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"2.04 g", daily:82, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.18 g", daily:84, color:"#4fb66f" },
          { label:"Valine", amount:"1.30 g", daily:62, color:"#f6b23b" },
          { label:"Lysine", amount:"2.30 g", daily:88, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.96 g", daily:69, color:"#e26d5a" },
          { label:"Threonine", amount:"1.10 g", daily:74, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.30 g", daily:105, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.00 g", daily:72, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Pork tenderloin contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"68.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"50 mg", daily:2, color:"#72a6d8" },
          { label:"Potassium", amount:"353 mg", daily:8, color:"#f6b23b" },
          { label:"Magnesium", amount:"26 mg", daily:6, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key pork-specific nutrients",
        note: "These are important pork-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Thiamine B1", amount:"0.8 mg", daily:67, color:"#4f8df7" },
          { label:"Cholesterol", amount:"62 mg", daily:21, color:"#e26d5a" },
          { label:"Vitamin B6", amount:"0.6 mg", daily:35, color:"#f6b23b" }
        ]
      },
      note: "Values are for pork tenderloin specifically — fattier cuts (belly, shoulder) differ considerably."
    },
    youtube: null, joints: {}
  },
  {
    id: 18, name: "Chicken Thighs", alt: "Bone-in or boneless, skin-on or off",
    desc: "Chicken thighs are the more flavourful, more forgiving and more affordable counterpart to breast. With slightly more fat (mostly unsaturated when skin is removed), they remain a high-protein food while providing more zinc, iron and B12 than breast meat. The higher fat content means they stay moist far more easily — making them the preferred choice for batch cooking.",
    muscles: [{n:"Protein",p:true},{n:"Zinc",p:false},{n:"Iron",p:false},{n:"B12",p:false},{n:"Niacin",p:false}],
    tags: ["poultry","high-protein","batch-cooking","iron"],
    diff: 2,
    str: {suit:true,  eff:4, note:"Higher zinc content than breast. More forgiving to cook, less likely to dry out."},
    vol: {suit:true,  eff:5, note:"Ideal for batch cooking. Higher calorie density than breast supports high-volume eating phases."},
    end: {suit:true,  eff:4, note:"Good lean option when skin is removed. Slightly higher calorie than breast — account for in deficit."},
    risk: 1, cues: "Bone-in: roast at 200 °C 35–40 min, skin-side up for crispy skin. Boneless skinless: pan-fry 5–6 min each side. Internal temp: 75 °C / 165 °F. Much more resistant to overcooking than breast.",
    equipment: "Pan · Oven · Air Fryer",
    position: "Any main meal · Meal prep",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked, boneless skinless",
      calories: 209,
      macros: [
        { key:"protein", label:"Protein", grams:"26.0g", percent:50, kcal:104, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"10.9g", percent:47, kcal:98, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"22 mcg RAE", daily:2, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0.2 mcg", daily:1, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.4 mg", daily:3, color:"#8f74ff" },
          { label:"Vitamin K", amount:"1.7 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.19 mg", daily:15, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.4 mcg", daily:17, color:"#e26d5a" },
          { label:"Folate", amount:"8 mcg DFE", daily:2, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"1.1 mg", daily:22, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked boneless skinless chicken thigh.",
        items: [
          { label:"Calcium", amount:"12 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"1.3 mg", daily:7, color:"#e26d5a" },
          { label:"Magnesium", amount:"23 mg", daily:5, color:"#4fb66f" },
          { label:"Phosphorus", amount:"188 mg", daily:15, color:"#8f74ff" },
          { label:"Potassium", amount:"240 mg", daily:5, color:"#f6b23b" },
          { label:"Zinc", amount:"2.0 mg", daily:18, color:"#25b9a7" },
          { label:"Selenium", amount:"19.5 mcg", daily:35, color:"#d982d0" },
          { label:"Sodium", amount:"82 mg", daily:4, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"2.04 g", daily:82, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.17 g", daily:84, color:"#4fb66f" },
          { label:"Valine", amount:"1.30 g", daily:62, color:"#f6b23b" },
          { label:"Lysine", amount:"2.35 g", daily:90, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.99 g", daily:71, color:"#e26d5a" },
          { label:"Threonine", amount:"1.11 g", daily:75, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.30 g", daily:105, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.03 g", daily:73, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Chicken thigh contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"63.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"82 mg", daily:4, color:"#72a6d8" },
          { label:"Potassium", amount:"240 mg", daily:5, color:"#f6b23b" },
          { label:"Magnesium", amount:"23 mg", daily:5, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key chicken-thigh-specific nutrients",
        note: "These are important chicken-thigh-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Cholesterol", amount:"105 mg", daily:35, color:"#e26d5a" },
          { label:"Vitamin B6", amount:"0.3 mg", daily:18, color:"#f6b23b" },
          { label:"B3 Niacin", amount:"6.5 mg", daily:41, color:"#4fb66f" }
        ]
      },
      note: "Skin-on thighs add roughly 30–40 more kcal and 4–5g more fat per 100g than skinless figures shown here."
    },
    youtube: null, joints: {}
  },
  {
    id: 19, name: "Tofu (Firm)", alt: "Firm or extra-firm block",
    desc: "Firm tofu is the most versatile plant-based protein food — it takes on the flavour of whatever it is cooked with, can be baked, pan-fried, crumbled or blended, and provides a complete amino acid profile from soy. A 200 g serving delivers 16–18 g protein. It is also a significant source of calcium and iron when made with calcium sulfate.",
    muscles: [{n:"Complete Protein",p:true},{n:"Calcium",p:true},{n:"Iron",p:false},{n:"Magnesium",p:false},{n:"Isoflavones",p:false}],
    tags: ["plant","soy","complete","vegan","versatile"],
    diff: 2,
    str: {suit:true,  eff:3, note:"Complete protein profile. Press and marinate for best texture and flavour absorption."},
    vol: {suit:true,  eff:3, note:"Easy to add large volumes of tofu to stir-fries, curries and noodle dishes."},
    end: {suit:true,  eff:4, note:"Iron and calcium are meaningful in plant-based diets. Low in fat and calories."},
    risk: 2, cues: "Press firm tofu 30 min (wrap in towel, place something heavy on top) to remove excess moisture before cooking — this is the key step. Marinate after pressing. Pan-fry cubed on medium-high heat 4–5 min each side until golden.",
    equipment: "Pan · Oven · Tofu press",
    position: "Any meal · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g firm tofu",
      calories: 144,
      macros: [
        { key:"protein", label:"Protein", grams:"15.5g", percent:43, kcal:62, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"8.7g", percent:54, kcal:78, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"2.8g", percent:8, kcal:11, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"2.4 mcg", daily:2, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.05 mg", daily:4, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"19 mcg DFE", daily:5, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.1 mg", daily:2, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g firm tofu made with calcium sulfate.",
        items: [
          { label:"Calcium", amount:"350 mg", daily:27, color:"#4f8df7" },
          { label:"Iron", amount:"2.7 mg", daily:15, color:"#e26d5a" },
          { label:"Magnesium", amount:"30 mg", daily:7, color:"#4fb66f" },
          { label:"Phosphorus", amount:"190 mg", daily:15, color:"#8f74ff" },
          { label:"Potassium", amount:"121 mg", daily:3, color:"#f6b23b" },
          { label:"Zinc", amount:"1.6 mg", daily:15, color:"#25b9a7" },
          { label:"Selenium", amount:"8.9 mcg", daily:16, color:"#d982d0" },
          { label:"Sodium", amount:"14 mg", daily:1, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Soy protein is functionally complete among plant proteins.",
        items: [
          { label:"Leucine", amount:"1.16 g", daily:47, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.68 g", daily:49, color:"#4fb66f" },
          { label:"Valine", amount:"0.71 g", daily:34, color:"#f6b23b" },
          { label:"Lysine", amount:"0.93 g", daily:36, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.40 g", daily:29, color:"#e26d5a" },
          { label:"Threonine", amount:"0.60 g", daily:41, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.20 g", daily:70, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.33 g", daily:48, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"1.9 g", daily:7, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.4 g", daily:1, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.5 g", daily:5, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"70.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"14 mg", daily:1, color:"#72a6d8" },
          { label:"Potassium", amount:"121 mg", daily:3, color:"#f6b23b" },
          { label:"Magnesium", amount:"30 mg", daily:7, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key tofu-specific nutrients",
        note: "These are important tofu-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Isoflavones", amount:"~20 mg", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Manganese", amount:"0.6 mg", daily:26, color:"#4fb66f" }
        ]
      },
      note: "Calcium content depends heavily on whether the tofu is set with calcium sulfate (high calcium) or nigari (lower calcium) — check the label."
    },
    youtube: null, joints: {}
  },
  {
    id: 21, name: "Black Beans", alt: "Cooked or canned",
    desc: "Black beans are a nutritional powerhouse for plant-based athletes — providing protein, complex carbohydrates, iron, folate, magnesium and antioxidant anthocyanins in a single ingredient. The protein is not complete alone (low in methionine) but pairs perfectly with rice to provide all essential amino acids. One of the best-value foods available.",
    muscles: [{n:"Protein",p:true},{n:"Complex Carbs",p:true},{n:"Iron",p:true},{n:"Folate",p:false},{n:"Magnesium",p:false}],
    tags: ["plant","legume","iron","vegan","slow-release"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Combine with rice for a complete amino acid profile. Magnesium supports muscle function."},
    vol: {suit:true,  eff:4, note:"Dual protein + carb source. High fibre promotes gut health under training load."},
    end: {suit:true,  eff:4, note:"Low GI carbs sustain energy. Iron supports oxygen transport."},
    risk: 1, cues: "Canned: rinse thoroughly to remove excess sodium. Dry: soak overnight, then boil 60–90 min. Add cumin, garlic and lime. Mash for burritos, toss into salads or mix with rice. Resistant starch improves after refrigeration.",
    equipment: "Pot — or canned (no equipment)",
    position: "Any main meal · Pre-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 132,
      macros: [
        { key:"protein", label:"Protein", grams:"8.9g", percent:27, kcal:36, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.5g", percent:3, kcal:5, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"23.7g", percent:70, kcal:91, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"3.3 mcg", daily:3, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.06 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"149 mcg DFE", daily:37, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.2 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked black beans.",
        items: [
          { label:"Calcium", amount:"27 mg", daily:2, color:"#4f8df7" },
          { label:"Iron", amount:"2.1 mg", daily:12, color:"#e26d5a" },
          { label:"Magnesium", amount:"70 mg", daily:17, color:"#4fb66f" },
          { label:"Phosphorus", amount:"140 mg", daily:11, color:"#8f74ff" },
          { label:"Potassium", amount:"355 mg", daily:8, color:"#f6b23b" },
          { label:"Zinc", amount:"1.1 mg", daily:10, color:"#25b9a7" },
          { label:"Selenium", amount:"1.2 mcg", daily:2, color:"#d982d0" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Pair with rice or a grain to cover the methionine gap.",
        items: [
          { label:"Leucine", amount:"0.72 g", daily:29, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.40 g", daily:29, color:"#4fb66f" },
          { label:"Valine", amount:"0.46 g", daily:22, color:"#f6b23b" },
          { label:"Lysine", amount:"0.59 g", daily:23, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.13 g", daily:9, color:"#e26d5a" },
          { label:"Threonine", amount:"0.33 g", daily:22, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.10 g", daily:35, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.74 g", daily:27, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"8.7 g", daily:31, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"2.2 g", daily:8, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"6.5 g", daily:23, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"65.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"355 mg", daily:8, color:"#f6b23b" },
          { label:"Magnesium", amount:"70 mg", daily:17, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key black-bean-specific nutrients",
        note: "These are important black-bean-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Folate", amount:"149 mcg DFE", daily:37, color:"#d982d0" },
          { label:"Anthocyanins", amount:"present (skin)", daily:0, color:"#4f8df7" },
          { label:"Resistant Starch", amount:"increases on cooling", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Canned black beans typically have much higher sodium (200–400mg/100g) unless rinsed — figures above reflect unsalted cooked beans."
    },
    youtube: null, joints: {}
  },
  {
    id: 22, name: "Chickpeas", alt: "Cooked / canned / roasted",
    desc: "Chickpeas are one of the most versatile legumes — eaten warm as a curry, cold in salads, blended into hummus or roasted as a crunchy snack. They provide protein, complex carbohydrates, iron, manganese and significant fibre. The protein is incomplete but pairs with any grain or seed to fill the amino acid gaps. Chickpea liquid (aquafaba) is also a useful egg-white substitute.",
    muscles: [{n:"Protein",p:true},{n:"Complex Carbs",p:true},{n:"Iron",p:false},{n:"Manganese",p:false},{n:"Fibre",p:false}],
    tags: ["plant","legume","versatile","vegan","fibre"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Good protein base for plant-based athletes. Manganese supports bone health."},
    vol: {suit:true,  eff:4, note:"High carb + protein makes this useful for fuelling high-volume training days."},
    end: {suit:true,  eff:4, note:"Low GI. High satiety. Great for body composition maintenance."},
    risk: 1, cues: "Canned: drain and rinse. Roast at 200 °C 25–30 min with olive oil and spices for a crunchy high-protein snack. Blend with tahini, lemon and garlic for homemade hummus. Dry chickpeas need overnight soaking and 1–2 hrs cooking.",
    equipment: "Oven · Pot · Blender",
    position: "Any meal · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 164,
      macros: [
        { key:"protein", label:"Protein", grams:"8.9g", percent:22, kcal:36, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"2.6g", percent:14, kcal:23, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"27.4g", percent:64, kcal:105, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"1 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.4 mg", daily:3, color:"#8f74ff" },
          { label:"Vitamin K", amount:"4.0 mcg", daily:3, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.06 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"172 mcg DFE", daily:43, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked chickpeas.",
        items: [
          { label:"Calcium", amount:"49 mg", daily:4, color:"#4f8df7" },
          { label:"Iron", amount:"2.9 mg", daily:16, color:"#e26d5a" },
          { label:"Magnesium", amount:"48 mg", daily:11, color:"#4fb66f" },
          { label:"Phosphorus", amount:"168 mg", daily:13, color:"#8f74ff" },
          { label:"Potassium", amount:"291 mg", daily:6, color:"#f6b23b" },
          { label:"Zinc", amount:"1.5 mg", daily:14, color:"#25b9a7" },
          { label:"Selenium", amount:"3.7 mcg", daily:7, color:"#d982d0" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Pair with a grain or seed to complete the profile.",
        items: [
          { label:"Leucine", amount:"0.67 g", daily:27, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.38 g", daily:27, color:"#4fb66f" },
          { label:"Valine", amount:"0.40 g", daily:19, color:"#f6b23b" },
          { label:"Lysine", amount:"0.61 g", daily:23, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.20 g", daily:14, color:"#e26d5a" },
          { label:"Threonine", amount:"0.32 g", daily:22, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.09 g", daily:32, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.81 g", daily:29, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"7.6 g", daily:27, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.7 g", daily:6, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"5.9 g", daily:21, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"60.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"291 mg", daily:6, color:"#f6b23b" },
          { label:"Magnesium", amount:"48 mg", daily:11, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key chickpea-specific nutrients",
        note: "These are important chickpea-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Manganese", amount:"1.0 mg", daily:43, color:"#4f8df7" },
          { label:"Folate", amount:"172 mcg DFE", daily:43, color:"#d982d0" },
          { label:"Resistant Starch", amount:"present", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Canned chickpeas typically have added sodium unless rinsed — figures above reflect unsalted cooked chickpeas."
    },
    youtube: null, joints: {}
  },
  {
    id: 23, name: "Milk", alt: "Whole / semi-skimmed",
    desc: "Milk is one of the most complete foods available — providing a natural blend of whey (fast-absorbing) and casein (slow-absorbing) protein, calcium for bone density, vitamin D (fortified), B12, phosphorus and potassium. Research shows whole milk is superior to fat-free milk for post-workout MPS, partly due to fat aiding amino acid absorption.",
    muscles: [{n:"Whey + Casein",p:true},{n:"Calcium",p:true},{n:"Vitamin D",p:false},{n:"B12",p:false},{n:"Potassium",p:false}],
    tags: ["dairy","dual-protein","calcium","recovery","high-protein"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Whole milk post-workout outperforms skim in studies for MPS stimulation. Practical and affordable."},
    vol: {suit:true,  eff:4, note:"Easy calorie-dense liquid calories for bulking phases. Add to protein shakes for extra protein."},
    end: {suit:true,  eff:3, note:"Calcium and vitamin D support bone health — crucial for high-impact training."},
    risk: 3, cues: "Not suitable for lactose intolerant or dairy-free individuals. Whole milk (3.5% fat) recommended over skimmed for athletes — fat helps slow protein absorption and improves nutrient uptake. Use as a shake base instead of water.",
    equipment: "None — ready to drink",
    position: "Post-workout · Breakfast · Pre-sleep",
    nutritionProfile: {
      servingLabel: "Amount per 100ml whole milk (3.5% fat)",
      calories: 61,
      macros: [
        { key:"protein", label:"Protein", grams:"3.2g", percent:21, kcal:13, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"3.3g", percent:49, kcal:30, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"4.8g", percent:31, kcal:19, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100ml; many countries fortify milk with vitamin D.",
        items: [
          { label:"Vitamin A", amount:"46 mcg RAE", daily:5, color:"#4f8df7" },
          { label:"Vitamin D", amount:"1.3 mcg", daily:7, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.1 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.2 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.18 mg", daily:14, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.5 mcg", daily:21, color:"#e26d5a" },
          { label:"Folate", amount:"5 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.4 mg", daily:8, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100ml whole milk.",
        items: [
          { label:"Calcium", amount:"113 mg", daily:9, color:"#4f8df7" },
          { label:"Iron", amount:"0.0 mg", daily:0, color:"#e26d5a" },
          { label:"Magnesium", amount:"10 mg", daily:2, color:"#4fb66f" },
          { label:"Phosphorus", amount:"91 mg", daily:7, color:"#8f74ff" },
          { label:"Potassium", amount:"143 mg", daily:3, color:"#f6b23b" },
          { label:"Zinc", amount:"0.4 mg", daily:4, color:"#25b9a7" },
          { label:"Selenium", amount:"2.0 mcg", daily:4, color:"#d982d0" },
          { label:"Sodium", amount:"40 mg", daily:2, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Milk contains a natural blend of fast whey (20%) and slow casein (80%).",
        items: [
          { label:"Leucine", amount:"0.31 g", daily:13, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.18 g", daily:13, color:"#4fb66f" },
          { label:"Valine", amount:"0.21 g", daily:10, color:"#f6b23b" },
          { label:"Lysine", amount:"0.27 g", daily:10, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.11 g", daily:8, color:"#e26d5a" },
          { label:"Threonine", amount:"0.15 g", daily:10, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.05 g", daily:18, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.31 g", daily:11, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Milk contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100ml — milk is over 87% water.",
        items: [
          { label:"Water", amount:"87.7 g", daily:4, color:"#4f8df7" },
          { label:"Sodium", amount:"40 mg", daily:2, color:"#72a6d8" },
          { label:"Potassium", amount:"143 mg", daily:3, color:"#f6b23b" },
          { label:"Magnesium", amount:"10 mg", daily:2, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key milk-specific nutrients",
        note: "These are important milk-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Lactose", amount:"4.8 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"10 mg", daily:3, color:"#e26d5a" },
          { label:"Iodine", amount:"~21 mcg", daily:14, color:"#f6b23b" }
        ]
      },
      note: "Values are for whole (3.5% fat) cow's milk. Semi-skimmed and skimmed versions have proportionally less fat and fewer calories."
    },
    youtube: null, joints: {}
  },
  {
    id: 25, name: "Egg Whites", alt: "Liquid carton or from shell",
    desc: "Egg whites are essentially pure protein — roughly 3.6 g protein per white with zero fat and zero cholesterol. They contain ovalbumin, a slow-digesting protein, as well as all essential amino acids. Useful for dramatically increasing protein intake without adding fat or calories. The leucine content per gram is lower than whole eggs so they are best combined with other protein sources.",
    muscles: [{n:"Pure Protein",p:true},{n:"Potassium",p:false},{n:"Riboflavin B2",p:false}],
    tags: ["egg","ultra-lean","low-calorie","high-protein"],
    diff: 2,
    str: {suit:true,  eff:4, note:"Pure protein with no fat. Combine with 1–2 whole eggs for a balanced omelette."},
    vol: {suit:true,  eff:4, note:"Easy way to increase protein volume without increasing calorie load."},
    end: {suit:true,  eff:5, note:"Lowest calorie protein source. Carton format is highly convenient for tracking."},
    risk: 2, cues: "Never eat raw egg whites — they contain avidin which blocks biotin absorption and carry salmonella risk. Cook fully. Carton egg whites are pasteurised. A 6-egg-white omelette is a classic high-protein breakfast at ~110 kcal.",
    equipment: "Pan",
    position: "Breakfast · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g (approx. 3 large egg whites)",
      calories: 52,
      macros: [
        { key:"protein", label:"Protein", grams:"10.9g", percent:91, kcal:44, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.2g", percent:3, kcal:2, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0.7g", percent:6, kcal:3, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g. Egg whites lack the fat-soluble vitamins found in the yolk.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.44 mg", daily:34, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.1 mcg", daily:4, color:"#e26d5a" },
          { label:"Folate", amount:"4 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.2 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g egg white.",
        items: [
          { label:"Calcium", amount:"7 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.1 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"11 mg", daily:3, color:"#4fb66f" },
          { label:"Phosphorus", amount:"15 mg", daily:1, color:"#8f74ff" },
          { label:"Potassium", amount:"163 mg", daily:3, color:"#f6b23b" },
          { label:"Zinc", amount:"0.0 mg", daily:0, color:"#25b9a7" },
          { label:"Selenium", amount:"20.4 mcg", daily:37, color:"#d982d0" },
          { label:"Sodium", amount:"166 mg", daily:7, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Egg white leucine content is lower per gram than whole egg.",
        items: [
          { label:"Leucine", amount:"0.88 g", daily:36, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.56 g", daily:40, color:"#4fb66f" },
          { label:"Valine", amount:"0.71 g", daily:34, color:"#f6b23b" },
          { label:"Lysine", amount:"0.73 g", daily:28, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.55 g", daily:39, color:"#e26d5a" },
          { label:"Threonine", amount:"0.46 g", daily:31, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.15 g", daily:53, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.95 g", daily:34, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Egg whites contain no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g — egg white is mostly water.",
        items: [
          { label:"Water", amount:"87.6 g", daily:4, color:"#4f8df7" },
          { label:"Sodium", amount:"166 mg", daily:7, color:"#72a6d8" },
          { label:"Potassium", amount:"163 mg", daily:3, color:"#f6b23b" },
          { label:"Magnesium", amount:"11 mg", daily:3, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key egg-white-specific nutrients",
        note: "These are important egg-white-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Ovalbumin (main protein)", amount:"majority of protein", daily:0, color:"#4f8df7" },
          { label:"Avidin (raw only)", amount:"denatured by cooking", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Values are for liquid/raw egg white prior to cooking; always cook fully before eating."
    },
    youtube: null, joints: {}
  },
  {
    id: 27, name: "Venison", alt: "Deer meat — steak / mince",
    desc: "Venison is the leanest of all red meats — comparable to chicken breast in fat content while delivering the full iron, zinc, creatine and B12 profile of beef. Wild-caught venison also provides higher omega-3 than farmed livestock. It is the optimal red meat for athletes in a calorie deficit who still want the benefits of red meat micronutrients.",
    muscles: [{n:"Protein",p:true},{n:"Iron",p:true},{n:"Zinc",p:true},{n:"B12",p:false},{n:"Creatine",p:false}],
    tags: ["meat","red-meat","ultra-lean","iron","high-protein"],
    diff: 3,
    str: {suit:true,  eff:5, note:"All red meat micronutrient benefits (zinc, creatine, iron) with minimal fat. Premier strength food."},
    vol: {suit:true,  eff:4, note:"Iron supports haemoglobin and oxygen transport during high-volume phases."},
    end: {suit:true,  eff:4, note:"Leanest red meat available. High protein-to-calorie ratio supports a calorie deficit."},
    risk: 2, cues: "Treat like high-quality beef. Rest at room temperature 20 min before cooking. Sear at very high heat — venison is very lean and dries out quickly. Serve no more than medium-rare (60–63 °C). Mince works in bolognese or burgers.",
    equipment: "Cast iron pan · Grill",
    position: "Dinner · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 158,
      macros: [
        { key:"protein", label:"Protein", grams:"30.2g", percent:78, kcal:121, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"3.2g", percent:18, kcal:29, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.3 mg", daily:2, color:"#8f74ff" },
          { label:"Vitamin K", amount:"1.5 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.5 mg", daily:38, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"4.0 mcg", daily:167, color:"#e26d5a" },
          { label:"Folate", amount:"5 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.7 mg", daily:14, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked venison.",
        items: [
          { label:"Calcium", amount:"6 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"3.8 mg", daily:21, color:"#e26d5a" },
          { label:"Magnesium", amount:"24 mg", daily:6, color:"#4fb66f" },
          { label:"Phosphorus", amount:"248 mg", daily:20, color:"#8f74ff" },
          { label:"Potassium", amount:"330 mg", daily:7, color:"#f6b23b" },
          { label:"Zinc", amount:"3.5 mg", daily:32, color:"#25b9a7" },
          { label:"Selenium", amount:"19.0 mcg", daily:35, color:"#d982d0" },
          { label:"Sodium", amount:"51 mg", daily:2, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"2.38 g", daily:96, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.35 g", daily:96, color:"#4fb66f" },
          { label:"Valine", amount:"1.48 g", daily:70, color:"#f6b23b" },
          { label:"Lysine", amount:"2.60 g", daily:100, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"1.09 g", daily:78, color:"#e26d5a" },
          { label:"Threonine", amount:"1.28 g", daily:86, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.34 g", daily:119, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.30 g", daily:83, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Venison contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"65.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"51 mg", daily:2, color:"#72a6d8" },
          { label:"Potassium", amount:"330 mg", daily:7, color:"#f6b23b" },
          { label:"Magnesium", amount:"24 mg", daily:6, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key venison-specific nutrients",
        note: "These are important venison-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Creatine (approx.)", amount:"~0.3 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"112 mg", daily:37, color:"#e26d5a" },
          { label:"Omega-3 (wild-fed)", amount:"higher than grain-fed beef", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Values are for wild venison; farmed/grain-fed venison may have a slightly higher fat content."
    },
    youtube: null, joints: {}
  },
  {
    id: 28, name: "Lamb (Lean cuts)", alt: "Leg steak / loin chop",
    desc: "Lean cuts of lamb — particularly the leg and loin — provide excellent quality protein alongside haem iron, zinc, B12 and a meaningful amount of conjugated linoleic acid (CLA), which has evidence for supporting body composition. Lamb is higher in fat than chicken but much of it is monounsaturated. A culturally significant food across the Mediterranean, Middle East and South Asia.",
    muscles: [{n:"Protein",p:true},{n:"Iron",p:true},{n:"Zinc",p:true},{n:"CLA",p:false},{n:"B12",p:false}],
    tags: ["meat","red-meat","iron","high-protein","CLA"],
    diff: 3,
    str: {suit:true,  eff:4, note:"Zinc and CLA support testosterone and body composition. Complete amino acid profile."},
    vol: {suit:true,  eff:3, note:"Higher fat than other meats — account for in calorie tracking during volume phases."},
    end: {suit:true,  eff:3, note:"Iron and B12 support red blood cell production and sustained endurance."},
    risk: 2, cues: "Leg steaks: pan-sear 3–4 min each side. Loin chops: grill 4 min each side. Internal temp 63 °C / 145 °F for medium. Rest 3 min. Season boldly — lamb handles strong flavours like rosemary, garlic, cumin and mint.",
    equipment: "Pan · Grill · Oven",
    position: "Dinner · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked (leg, lean)",
      calories: 206,
      macros: [
        { key:"protein", label:"Protein", grams:"28.0g", percent:55, kcal:112, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"10.0g", percent:45, kcal:90, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0.1 mcg", daily:1, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"4.0 mcg", daily:3, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.25 mg", daily:19, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"2.7 mcg", daily:113, color:"#e26d5a" },
          { label:"Folate", amount:"18 mcg DFE", daily:5, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.6 mg", daily:12, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked lean lamb leg.",
        items: [
          { label:"Calcium", amount:"17 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"1.9 mg", daily:11, color:"#e26d5a" },
          { label:"Magnesium", amount:"23 mg", daily:5, color:"#4fb66f" },
          { label:"Phosphorus", amount:"212 mg", daily:17, color:"#8f74ff" },
          { label:"Potassium", amount:"310 mg", daily:7, color:"#f6b23b" },
          { label:"Zinc", amount:"4.5 mg", daily:41, color:"#25b9a7" },
          { label:"Selenium", amount:"21.0 mcg", daily:38, color:"#d982d0" },
          { label:"Sodium", amount:"68 mg", daily:3, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"2.21 g", daily:89, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.25 g", daily:89, color:"#4fb66f" },
          { label:"Valine", amount:"1.37 g", daily:65, color:"#f6b23b" },
          { label:"Lysine", amount:"2.41 g", daily:93, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"1.01 g", daily:72, color:"#e26d5a" },
          { label:"Threonine", amount:"1.18 g", daily:80, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.31 g", daily:109, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.13 g", daily:76, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Lamb contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"60.0 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"68 mg", daily:3, color:"#72a6d8" },
          { label:"Potassium", amount:"310 mg", daily:7, color:"#f6b23b" },
          { label:"Magnesium", amount:"23 mg", daily:5, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key lamb-specific nutrients",
        note: "These are important lamb-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"CLA", amount:"highest of common red meats", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"90 mg", daily:30, color:"#e26d5a" },
          { label:"Vitamin B6", amount:"0.2 mg", daily:12, color:"#f6b23b" }
        ]
      },
      note: "Values reflect lean cuts (leg/loin) with visible fat trimmed; shoulder and rib cuts carry significantly more fat."
    },
    youtube: null, joints: {}
  },
  {
    id: 29, name: "Canned Salmon", alt: "Pink or red sockeye",
    desc: "Canned salmon is an often-overlooked alternative to canned tuna — providing the same convenience with the added benefit of omega-3 EPA and DHA at meaningful levels (higher than tuna). The edible bones, soft after canning, contribute significant calcium — making this a rare triple-threat of protein, omega-3 and calcium in one food.",
    muscles: [{n:"Protein",p:true},{n:"Omega-3 EPA/DHA",p:true},{n:"Calcium",p:true},{n:"Vitamin D",p:false},{n:"B12",p:false}],
    tags: ["fish","omega-3","calcium","convenient","high-protein"],
    diff: 1,
    str: {suit:true,  eff:5, note:"Omega-3 enhances MPS response. Calcium supports bone health under training load."},
    vol: {suit:true,  eff:4, note:"Anti-inflammatory EPA/DHA reduce DOMS. Convenient for high-frequency athletes."},
    end: {suit:true,  eff:5, note:"Lower mercury than canned tuna. No cooking required — ultimate convenience protein."},
    risk: 1, cues: "Mix with Greek yoghurt, lemon and capers for a quick protein salad. Mash the soft bones — they are fully edible and a significant calcium source. Drain water-packed variety; oil-packed can be used with the oil for extra calories.",
    equipment: "None — ready to eat",
    position: "Any meal · On the go",
    nutritionProfile: {
      servingLabel: "Amount per 100g, canned, drained (with bones)",
      calories: 153,
      macros: [
        { key:"protein", label:"Protein", grams:"20.5g", percent:55, kcal:82, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"7.3g", percent:43, kcal:66, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g drained.",
        items: [
          { label:"Vitamin A", amount:"49 mcg RAE", daily:5, color:"#4f8df7" },
          { label:"Vitamin D", amount:"13.5 mcg", daily:68, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.7 mg", daily:5, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.4 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.16 mg", daily:12, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"3.7 mcg", daily:154, color:"#e26d5a" },
          { label:"Folate", amount:"13 mcg DFE", daily:3, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.5 mg", daily:10, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g canned salmon with bones, drained.",
        items: [
          { label:"Calcium", amount:"210 mg", daily:16, color:"#4f8df7" },
          { label:"Iron", amount:"0.9 mg", daily:5, color:"#e26d5a" },
          { label:"Magnesium", amount:"30 mg", daily:7, color:"#4fb66f" },
          { label:"Phosphorus", amount:"280 mg", daily:22, color:"#8f74ff" },
          { label:"Potassium", amount:"330 mg", daily:7, color:"#f6b23b" },
          { label:"Zinc", amount:"0.8 mg", daily:7, color:"#25b9a7" },
          { label:"Selenium", amount:"40.0 mcg", daily:73, color:"#d982d0" },
          { label:"Sodium", amount:"380 mg", daily:17, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.68 g", daily:68, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.04 g", daily:74, color:"#4fb66f" },
          { label:"Valine", amount:"1.33 g", daily:63, color:"#f6b23b" },
          { label:"Lysine", amount:"1.41 g", daily:54, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"1.00 g", daily:71, color:"#e26d5a" },
          { label:"Threonine", amount:"0.87 g", daily:59, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.27 g", daily:95, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.73 g", daily:62, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Canned salmon contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"65.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"380 mg", daily:17, color:"#72a6d8" },
          { label:"Potassium", amount:"330 mg", daily:7, color:"#f6b23b" },
          { label:"Magnesium", amount:"30 mg", daily:7, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key canned-salmon-specific nutrients",
        note: "These are important canned-salmon-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Omega-3 (EPA + DHA)", amount:"~1.8 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"55 mg", daily:18, color:"#e26d5a" },
          { label:"Mercury (context)", amount:"low", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Values include the edible soft bones, which are the main source of calcium — discard them and calcium drops sharply."
    },
    youtube: null, joints: {}
  },
  {
    id: 30, name: "Beef Jerky", alt: "Lean dried beef strips",
    desc: "Beef jerky is the most portable high-protein snack in the meat category — shelf-stable, no refrigeration required, and very high protein per gram due to moisture removal. A 30 g serving provides 9–15 g protein depending on brand. The challenge is sodium content, which can be very high — choose lower-sodium brands or make your own.",
    muscles: [{n:"Protein",p:true},{n:"Iron",p:false},{n:"Zinc",p:false},{n:"B12",p:false}],
    tags: ["meat","portable","snack","high-protein","convenient"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Ideal between-meal protein source. Creatine and zinc content support strength athletes."},
    vol: {suit:true,  eff:3, note:"Easy to carry for high-frequency eating days."},
    end: {suit:false, eff:2, note:"High sodium may cause water retention. Not ideal before endurance events."},
    risk: 3, cues: "Check sodium content — some brands exceed 800 mg sodium per 30 g serving. Choose brands with minimal ingredients: beef, salt, pepper, occasionally spices. Avoid brands with high-fructose corn syrup. Best as a bridge snack, not a meal staple.",
    equipment: "None — ready to eat",
    position: "Snack · On the go · Between meals",
    nutritionProfile: {
      servingLabel: "Amount per 30g serving",
      calories: 100,
      macros: [
        { key:"protein", label:"Protein", grams:"12.0g", percent:48, kcal:48, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"2.5g", percent:23, kcal:23, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"6.0g", percent:24, kcal:24, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 30g serving.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.1 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.07 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"1.0 mcg", daily:42, color:"#e26d5a" },
          { label:"Folate", amount:"3 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.2 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 30g serving — sodium varies considerably by brand.",
        items: [
          { label:"Calcium", amount:"5 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"1.4 mg", daily:8, color:"#e26d5a" },
          { label:"Magnesium", amount:"15 mg", daily:4, color:"#4fb66f" },
          { label:"Phosphorus", amount:"95 mg", daily:8, color:"#8f74ff" },
          { label:"Potassium", amount:"200 mg", daily:4, color:"#f6b23b" },
          { label:"Zinc", amount:"2.2 mg", daily:20, color:"#25b9a7" },
          { label:"Selenium", amount:"7.0 mcg", daily:13, color:"#d982d0" },
          { label:"Sodium", amount:"500 mg", daily:22, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"0.95 g", daily:38, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.54 g", daily:39, color:"#4fb66f" },
          { label:"Valine", amount:"0.59 g", daily:28, color:"#f6b23b" },
          { label:"Lysine", amount:"1.04 g", daily:40, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.44 g", daily:31, color:"#e26d5a" },
          { label:"Threonine", amount:"0.51 g", daily:34, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.13 g", daily:46, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.92 g", daily:33, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Beef jerky contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 30g — jerky is dehydrated and very low in water.",
        items: [
          { label:"Water", amount:"~7.0 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"500 mg", daily:22, color:"#72a6d8" },
          { label:"Potassium", amount:"200 mg", daily:4, color:"#f6b23b" },
          { label:"Magnesium", amount:"15 mg", daily:4, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key beef-jerky-specific nutrients",
        note: "These are important beef-jerky-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Added Sugar", amount:"varies by brand, often 4–6g", daily:0, color:"#f6b23b" },
          { label:"Cholesterol", amount:"25 mg", daily:8, color:"#e26d5a" },
          { label:"Creatine (approx.)", amount:"~0.2 g", daily:0, color:"#4f8df7" }
        ]
      },
      note: "Sodium and sugar content vary enormously by brand — these values represent a moderate, mainstream product; check individual labels."
    },
    youtube: null, joints: {}
  },
  {
    id: 31, name: "Pea Protein", alt: "Yellow split pea protein powder",
    desc: "Pea protein is the best-evidenced plant-based protein supplement — studies show it produces similar muscle gains to whey when matched for leucine content and overall dose. It is hypoallergenic (no dairy, gluten, soy or egg), making it the most accessible supplement for athletes with multiple dietary restrictions. Rich in BCAAs with a good leucine profile.",
    muscles: [{n:"Protein",p:true},{n:"BCAAs",p:true},{n:"Iron",p:false}],
    tags: ["supplement","plant","vegan","hypoallergenic","high-protein"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Clinical evidence matches whey for muscle gains when dosed correctly. Best plant protein supplement."},
    vol: {suit:true,  eff:4, note:"Easy way to hit protein targets on a plant-based diet."},
    end: {suit:true,  eff:4, note:"Hypoallergenic. No digestive issues for most athletes. Lower methionine — pair with rice protein or food sources to complete profile."},
    risk: 1, cues: "Mix with plant milk for better texture and flavour than water. Earthy taste — blend into smoothies with fruit to mask. Combine with rice protein (80:20 pea:rice) for a complete amino acid profile. Check for added sugars in flavoured versions.",
    equipment: "Shaker bottle or blender",
    position: "Post-workout · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 30g scoop",
      calories: 110,
      macros: [
        { key:"protein", label:"Protein", grams:"22.0g", percent:80, kcal:88, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1.5g", percent:12, kcal:14, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"2.0g", percent:8, kcal:8, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values. Pea protein is not a significant vitamin source unless fortified.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.1 mg", daily:8, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"5 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.1 mg", daily:2, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 30g scoop of pea protein isolate.",
        items: [
          { label:"Calcium", amount:"40 mg", daily:3, color:"#4f8df7" },
          { label:"Iron", amount:"4.5 mg", daily:25, color:"#e26d5a" },
          { label:"Magnesium", amount:"35 mg", daily:8, color:"#4fb66f" },
          { label:"Phosphorus", amount:"180 mg", daily:14, color:"#8f74ff" },
          { label:"Potassium", amount:"250 mg", daily:5, color:"#f6b23b" },
          { label:"Zinc", amount:"1.2 mg", daily:11, color:"#25b9a7" },
          { label:"Selenium", amount:"1.0 mcg", daily:2, color:"#d982d0" },
          { label:"Sodium", amount:"260 mg", daily:11, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Pea protein is lower in methionine — pairs well with rice protein.",
        items: [
          { label:"Leucine", amount:"1.85 g", daily:75, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.00 g", daily:71, color:"#4fb66f" },
          { label:"Valine", amount:"1.10 g", daily:52, color:"#f6b23b" },
          { label:"Lysine", amount:"1.60 g", daily:62, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.45 g", daily:32, color:"#e26d5a" },
          { label:"Threonine", amount:"0.85 g", daily:57, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.22 g", daily:77, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.05 g", daily:74, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"1.0 g", daily:4, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.2 g", daily:1, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0.8 g", daily:3, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe the powder's electrolyte contribution per 30g scoop, mixed with water.",
        items: [
          { label:"Water", amount:"~1.5 g (dry powder)", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"260 mg", daily:11, color:"#72a6d8" },
          { label:"Potassium", amount:"250 mg", daily:5, color:"#f6b23b" },
          { label:"Magnesium", amount:"35 mg", daily:8, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key pea-protein-specific nutrients",
        note: "These are important pea-protein-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"BCAAs (total)", amount:"~3.9 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Allergen profile", amount:"hypoallergenic", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Values vary by brand and processing method (isolate vs concentrate)."
    },
    youtube: null, joints: {}
  },
  {
    id: 32, name: "Herring", alt: "Pickled / smoked / fresh",
    desc: "Herring is an exceptionally nutrient-dense small fish — rich in omega-3 EPA and DHA, vitamin D, B12 and selenium, with low mercury due to its small size and short lifespan. Pickled herring is a ready-to-eat format that requires no preparation, making it one of the most convenient whole-food omega-3 sources available.",
    muscles: [{n:"Protein",p:true},{n:"Omega-3 EPA/DHA",p:true},{n:"Vitamin D",p:true},{n:"B12",p:false},{n:"Selenium",p:false}],
    tags: ["fish","omega-3","anti-inflammatory","vitamin-D","convenient"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Omega-3 and vitamin D support testosterone production and recovery."},
    vol: {suit:true,  eff:4, note:"Anti-inflammatory EPA/DHA reduce DOMS in high-volume blocks."},
    end: {suit:true,  eff:5, note:"Very low mercury. Sustainable fish source. Outstanding micronutrient density."},
    risk: 2, cues: "Pickled herring: ready to eat, pairs well with rye bread and raw onion. Smoked: serve at room temp with cream cheese and cucumber. Fresh: pan-fry 3 min per side. Check sodium content in pickled varieties.",
    equipment: "None for pickled/smoked · Pan for fresh",
    position: "Breakfast · Lunch · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g, fresh, cooked",
      calories: 203,
      macros: [
        { key:"protein", label:"Protein", grams:"23.0g", percent:46, kcal:92, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"12.0g", percent:53, kcal:108, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"40 mcg RAE", daily:4, color:"#4f8df7" },
          { label:"Vitamin D", amount:"15.8 mcg", daily:79, color:"#f6b23b" },
          { label:"Vitamin E", amount:"1.2 mg", daily:8, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.1 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.27 mg", daily:21, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"13.0 mcg", daily:542, color:"#e26d5a" },
          { label:"Folate", amount:"11 mcg DFE", daily:3, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.9 mg", daily:18, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g fresh cooked herring.",
        items: [
          { label:"Calcium", amount:"74 mg", daily:6, color:"#4f8df7" },
          { label:"Iron", amount:"1.4 mg", daily:8, color:"#e26d5a" },
          { label:"Magnesium", amount:"35 mg", daily:8, color:"#4fb66f" },
          { label:"Phosphorus", amount:"265 mg", daily:21, color:"#8f74ff" },
          { label:"Potassium", amount:"365 mg", daily:8, color:"#f6b23b" },
          { label:"Zinc", amount:"1.1 mg", daily:10, color:"#25b9a7" },
          { label:"Selenium", amount:"44.0 mcg", daily:80, color:"#d982d0" },
          { label:"Sodium", amount:"100 mg", daily:4, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.80 g", daily:73, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.06 g", daily:76, color:"#4fb66f" },
          { label:"Valine", amount:"1.18 g", daily:56, color:"#f6b23b" },
          { label:"Lysine", amount:"2.11 g", daily:81, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.88 g", daily:63, color:"#e26d5a" },
          { label:"Threonine", amount:"1.00 g", daily:68, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.26 g", daily:91, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.79 g", daily:64, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Herring contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g fresh cooked herring. Pickled herring has much higher sodium.",
        items: [
          { label:"Water", amount:"62.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"100 mg", daily:4, color:"#72a6d8" },
          { label:"Potassium", amount:"365 mg", daily:8, color:"#f6b23b" },
          { label:"Magnesium", amount:"35 mg", daily:8, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key herring-specific nutrients",
        note: "These are important herring-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Omega-3 (EPA + DHA)", amount:"~2.0 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"77 mg", daily:26, color:"#e26d5a" },
          { label:"Mercury (context)", amount:"very low", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Values are for fresh cooked herring; pickled herring has significantly more sodium and added sugar from the brine."
    },
    youtube: null, joints: {}
  },
  {
    id: 33, name: "Mussels", alt: "Cooked in shell or canned",
    desc: "Mussels are one of the most nutrient-dense and sustainable animal proteins available — providing complete protein, omega-3 EPA/DHA, vitamin B12, iron, zinc, selenium and manganese in a single ingredient. 100 g of cooked mussels delivers ~18 g protein at approximately 170 kcal, with one of the highest B12 concentrations of any food.",
    muscles: [{n:"Protein",p:true},{n:"B12",p:true},{n:"Iron",p:true},{n:"Omega-3 EPA/DHA",p:false},{n:"Zinc",p:false}],
    tags: ["shellfish","high-protein","iron","omega-3","sustainable"],
    diff: 3,
    str: {suit:true,  eff:4, note:"Zinc and iron support strength adaptations. Complete protein. B12 is among the highest of any food."},
    vol: {suit:true,  eff:4, note:"Iron supports haemoglobin synthesis during high-volume training."},
    end: {suit:true,  eff:5, note:"B12 and iron are essential for energy production and red blood cell formation."},
    risk: 3, cues: "Buy live mussels — discard any that don't close when tapped. Steam in wine, garlic and herbs 3–4 min until opened. Discard any that don't open. Canned mussels are a convenient alternative. Avoid if shellfish allergy present.",
    equipment: "Pot with lid",
    position: "Dinner · Special meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 172,
      macros: [
        { key:"protein", label:"Protein", grams:"24.1g", percent:56, kcal:96, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"4.5g", percent:24, kcal:41, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"7.4g", percent:17, kcal:30, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"42 mcg RAE", daily:5, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.6 mg", daily:4, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.1 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.28 mg", daily:22, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"20.4 mcg", daily:850, color:"#e26d5a" },
          { label:"Folate", amount:"42 mcg DFE", daily:11, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.5 mg", daily:10, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked mussels.",
        items: [
          { label:"Calcium", amount:"33 mg", daily:3, color:"#4f8df7" },
          { label:"Iron", amount:"6.7 mg", daily:37, color:"#e26d5a" },
          { label:"Magnesium", amount:"34 mg", daily:8, color:"#4fb66f" },
          { label:"Phosphorus", amount:"285 mg", daily:23, color:"#8f74ff" },
          { label:"Potassium", amount:"320 mg", daily:7, color:"#f6b23b" },
          { label:"Zinc", amount:"2.3 mg", daily:21, color:"#25b9a7" },
          { label:"Selenium", amount:"65.0 mcg", daily:118, color:"#d982d0" },
          { label:"Sodium", amount:"369 mg", daily:16, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.78 g", daily:72, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.05 g", daily:75, color:"#4fb66f" },
          { label:"Valine", amount:"1.16 g", daily:55, color:"#f6b23b" },
          { label:"Lysine", amount:"2.05 g", daily:79, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.87 g", daily:62, color:"#e26d5a" },
          { label:"Threonine", amount:"0.98 g", daily:66, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.25 g", daily:88, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.76 g", daily:63, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Mussels contain no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"62.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"369 mg", daily:16, color:"#72a6d8" },
          { label:"Potassium", amount:"320 mg", daily:7, color:"#f6b23b" },
          { label:"Magnesium", amount:"34 mg", daily:8, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key mussel-specific nutrients",
        note: "These are important mussel-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Omega-3 (EPA + DHA)", amount:"~0.5 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"56 mg", daily:19, color:"#e26d5a" },
          { label:"Manganese", amount:"5.8 mg", daily:252, color:"#f6b23b" }
        ]
      },
      note: "Small amount of carbs comes from glycogen stored in the mussel flesh, unusual for an animal protein. Shellfish allergy — avoid."
    },
    youtube: null, joints: {}
  },
  {
    id: 34, name: "Ricotta", alt: "Whole or part-skim",
    desc: "Ricotta is a fresh Italian whey cheese — made from the whey left over after other cheeses are produced. It is milder and lower in fat than most cheeses while still providing meaningful protein (approximately 11–14 g per 125 g serving). The mild flavour works both sweet (with honey and fruit) and savoury (in pasta, toast or omelettes).",
    muscles: [{n:"Whey Protein",p:true},{n:"Calcium",p:true},{n:"Phosphorus",p:false},{n:"Vitamin A",p:false}],
    tags: ["dairy","cheese","versatile","high-protein","low-fat"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Whey protein base. Useful as a savoury protein addition to pasta or toast."},
    vol: {suit:true,  eff:3, note:"Versatile addition to meals. Calcium supports bone density under training load."},
    end: {suit:true,  eff:3, note:"Lower calorie than most cheeses. Good dairy option in a moderate-deficit phase."},
    risk: 3, cues: "Stir into pasta for a quick high-protein sauce. Spread on whole-grain toast with berries and honey for breakfast. Blend into smoothies for a creamy texture. Part-skim ricotta has slightly higher protein and less fat than whole.",
    equipment: "None — ready to eat",
    position: "Breakfast · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g, part-skim",
      calories: 138,
      macros: [
        { key:"protein", label:"Protein", grams:"9.5g", percent:28, kcal:38, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"8.0g", percent:52, kcal:72, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"5.1g", percent:15, kcal:20, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g part-skim ricotta.",
        items: [
          { label:"Vitamin A", amount:"120 mcg RAE", daily:13, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0.1 mcg", daily:1, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.1 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.6 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.21 mg", daily:16, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.3 mcg", daily:13, color:"#e26d5a" },
          { label:"Folate", amount:"12 mcg DFE", daily:3, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g part-skim ricotta.",
        items: [
          { label:"Calcium", amount:"207 mg", daily:16, color:"#4f8df7" },
          { label:"Iron", amount:"0.4 mg", daily:2, color:"#e26d5a" },
          { label:"Magnesium", amount:"11 mg", daily:3, color:"#4fb66f" },
          { label:"Phosphorus", amount:"158 mg", daily:13, color:"#8f74ff" },
          { label:"Potassium", amount:"125 mg", daily:3, color:"#f6b23b" },
          { label:"Zinc", amount:"1.2 mg", daily:11, color:"#25b9a7" },
          { label:"Selenium", amount:"14.5 mcg", daily:26, color:"#d982d0" },
          { label:"Sodium", amount:"84 mg", daily:4, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"0.92 g", daily:37, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.54 g", daily:39, color:"#4fb66f" },
          { label:"Valine", amount:"0.62 g", daily:30, color:"#f6b23b" },
          { label:"Lysine", amount:"0.79 g", daily:30, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.35 g", daily:25, color:"#e26d5a" },
          { label:"Threonine", amount:"0.44 g", daily:30, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.12 g", daily:42, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.94 g", daily:34, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Ricotta contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"74.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"84 mg", daily:4, color:"#72a6d8" },
          { label:"Potassium", amount:"125 mg", daily:3, color:"#f6b23b" },
          { label:"Magnesium", amount:"11 mg", daily:3, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key ricotta-specific nutrients",
        note: "These are important ricotta-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Cholesterol", amount:"31 mg", daily:10, color:"#e26d5a" },
          { label:"Whey Protein", amount:"primary protein type", daily:0, color:"#4f8df7" },
          { label:"Vitamin A", amount:"120 mcg RAE", daily:13, color:"#4f8df7" }
        ]
      },
      note: "Whole-milk ricotta has more fat and slightly fewer calories from protein than the part-skim values shown here."
    },
    youtube: null, joints: {}
  },
  {
    id: 35, name: "Peanuts", alt: "Raw or dry-roasted, unsalted",
    desc: "Technically a legume rather than a tree nut, peanuts offer an unusually high protein content for a plant fat source — approximately 25 g protein per 100 g. They also provide arginine (nitric oxide precursor supporting blood flow), niacin, vitamin E and resveratrol. Peanut butter delivers the same benefits in a more convenient and calorically dense format.",
    muscles: [{n:"Protein",p:true},{n:"Arginine",p:true},{n:"Monounsaturated Fat",p:false},{n:"Niacin B3",p:false},{n:"Vitamin E",p:false}],
    tags: ["legume","plant","high-protein","portable","keto"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Arginine supports nitric oxide and blood flow during training. High protein for a plant fat source."},
    vol: {suit:true,  eff:4, note:"Calorie-dense and easy to consume. Useful for hard-gainers."},
    end: {suit:true,  eff:3, note:"Sustained energy from combined fat and protein. Portable and non-perishable."},
    risk: 4, cues: "One of the most common food allergens — always check. Choose dry-roasted and unsalted where possible. 30 g (small handful) = ~170 kcal and 7 g protein. Peanut butter: choose natural varieties with no added palm oil or sugar.",
    equipment: "None — ready to eat",
    position: "Snack · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g, raw or dry-roasted",
      calories: 567,
      macros: [
        { key:"protein", label:"Protein", grams:"25.8g", percent:18, kcal:103, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"49.2g", percent:78, kcal:443, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"16.1g", percent:11, kcal:64, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"8.3 mg", daily:55, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.14 mg", daily:11, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"240 mcg DFE", daily:60, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"1.8 mg", daily:36, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g raw peanuts.",
        items: [
          { label:"Calcium", amount:"92 mg", daily:7, color:"#4f8df7" },
          { label:"Iron", amount:"4.6 mg", daily:26, color:"#e26d5a" },
          { label:"Magnesium", amount:"168 mg", daily:40, color:"#4fb66f" },
          { label:"Phosphorus", amount:"376 mg", daily:30, color:"#8f74ff" },
          { label:"Potassium", amount:"705 mg", daily:15, color:"#f6b23b" },
          { label:"Zinc", amount:"3.3 mg", daily:30, color:"#25b9a7" },
          { label:"Selenium", amount:"7.2 mcg", daily:13, color:"#d982d0" },
          { label:"Sodium", amount:"18 mg", daily:1, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.67 g", daily:67, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.90 g", daily:64, color:"#4fb66f" },
          { label:"Valine", amount:"1.05 g", daily:50, color:"#f6b23b" },
          { label:"Lysine", amount:"0.93 g", daily:36, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.55 g", daily:39, color:"#e26d5a" },
          { label:"Threonine", amount:"0.86 g", daily:58, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.25 g", daily:88, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.55 g", daily:92, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"8.5 g", daily:30, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"2.1 g", daily:8, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"6.4 g", daily:23, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g — peanuts are very low in water.",
        items: [
          { label:"Water", amount:"6.5 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"18 mg", daily:1, color:"#72a6d8" },
          { label:"Potassium", amount:"705 mg", daily:15, color:"#f6b23b" },
          { label:"Magnesium", amount:"168 mg", daily:40, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key peanut-specific nutrients",
        note: "These are important peanut-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Arginine", amount:"~3.1 g", daily:0, color:"#4f8df7" },
          { label:"Niacin B3", amount:"12.1 mg", daily:76, color:"#f6b23b" },
          { label:"Resveratrol", amount:"trace", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Values are per 100g; a typical snack-sized 30g portion provides roughly 170 kcal and 7-8g protein. One of the most common food allergens."
    },
    youtube: null, joints: {}
  },
  {
    id: 36, name: "Anchovies", alt: "Canned in oil / packed in salt",
    desc: "Anchovies are intensely flavourful small fish with an outstanding nutritional profile — high in protein, omega-3 EPA and DHA, calcium (from the soft edible bones), vitamin D and B12. Used in small amounts as a flavour-builder in sauces, dressings and dishes worldwide, they contribute meaningful nutrients even in condiment-sized portions.",
    muscles: [{n:"Protein",p:true},{n:"Omega-3 EPA/DHA",p:true},{n:"Calcium",p:false},{n:"Vitamin D",p:false},{n:"B12",p:false}],
    tags: ["fish","omega-3","umami","convenient","high-protein"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Dense omega-3 and protein in a small serving. Outstanding micronutrient profile."},
    vol: {suit:true,  eff:3, note:"Used as a seasoning — adds protein to pasta sauces, dressings and marinades."},
    end: {suit:true,  eff:4, note:"Low mercury due to small size. High calcium from soft edible bones."},
    risk: 2, cues: "Rinse salt-packed anchovies before use. Melt into hot olive oil with garlic — the fillets dissolve completely and add deep umami without any fishiness. Use in Caesar dressing, pasta puttanesca or on pizza. Store opened oil-packed tins in fridge.",
    equipment: "Pan — or none for raw use",
    position: "Added to meals · Cooking ingredient",
    nutritionProfile: {
      servingLabel: "Amount per 100g, canned in oil, drained",
      calories: 210,
      macros: [
        { key:"protein", label:"Protein", grams:"29.0g", percent:55, kcal:116, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"9.7g", percent:42, kcal:87, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g drained.",
        items: [
          { label:"Vitamin A", amount:"15 mcg RAE", daily:2, color:"#4f8df7" },
          { label:"Vitamin D", amount:"5.0 mcg", daily:25, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.7 mg", daily:5, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.1 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.30 mg", daily:23, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.9 mcg", daily:38, color:"#e26d5a" },
          { label:"Folate", amount:"10 mcg DFE", daily:3, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.7 mg", daily:14, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g canned anchovies, drained.",
        items: [
          { label:"Calcium", amount:"232 mg", daily:18, color:"#4f8df7" },
          { label:"Iron", amount:"3.3 mg", daily:18, color:"#e26d5a" },
          { label:"Magnesium", amount:"37 mg", daily:9, color:"#4fb66f" },
          { label:"Phosphorus", amount:"353 mg", daily:28, color:"#8f74ff" },
          { label:"Potassium", amount:"383 mg", daily:8, color:"#f6b23b" },
          { label:"Zinc", amount:"1.9 mg", daily:17, color:"#25b9a7" },
          { label:"Selenium", amount:"36.5 mcg", daily:66, color:"#d982d0" },
          { label:"Sodium", amount:"1040 mg", daily:45, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"2.28 g", daily:92, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.34 g", daily:96, color:"#4fb66f" },
          { label:"Valine", amount:"1.49 g", daily:71, color:"#f6b23b" },
          { label:"Lysine", amount:"2.67 g", daily:103, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"1.11 g", daily:79, color:"#e26d5a" },
          { label:"Threonine", amount:"1.25 g", daily:84, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.32 g", daily:112, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.26 g", daily:81, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Anchovies contain no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g. Sodium is very high due to curing/canning.",
        items: [
          { label:"Water", amount:"50.0 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"1040 mg", daily:45, color:"#72a6d8" },
          { label:"Potassium", amount:"383 mg", daily:8, color:"#f6b23b" },
          { label:"Magnesium", amount:"37 mg", daily:9, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key anchovy-specific nutrients",
        note: "These are important anchovy-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Omega-3 (EPA + DHA)", amount:"~1.4 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"85 mg", daily:28, color:"#e26d5a" },
          { label:"Mercury (context)", amount:"very low", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Used in small condiment-sized portions (a fillet or two), so realistic intake of sodium and other nutrients is much lower than the 100g figures shown."
    },
    youtube: null, joints: {}
  },
  {
    id: 37, name: "Beef Liver", alt: "Calves' liver / chicken liver",
    desc: "Liver is the most micronutrient-dense food on earth by any measure — it is the single richest source of vitamin A (retinol), B12, iron, folate, copper and CoQ10, all in highly bioavailable forms. A 100 g serving delivers more than a week's worth of B12 and substantially exceeds daily requirements for iron and vitamin A. Historically revered as a superfood across virtually every traditional diet worldwide, it has been unfairly overlooked in modern nutrition. The key is not to overconsume — once a week is the optimal frequency.",
    muscles: [{n:"Vitamin A",p:true},{n:"B12",p:true},{n:"Iron",p:true},{n:"Copper",p:true},{n:"CoQ10",p:false},{n:"Folate",p:false}],
    tags: ["meat","organ","micronutrient-dense","iron","B12"],
    diff: 3,
    str: {suit:true,  eff:5, note:"CoQ10 supports mitochondrial ATP production — directly relevant to strength output. Iron and B12 support oxygen delivery."},
    vol: {suit:true,  eff:5, note:"Unmatched micronutrient density for athletes in hard training phases. Copper and B vitamins support energy metabolism."},
    end: {suit:true,  eff:5, note:"Iron supports haemoglobin and red blood cell production — critical for endurance. B12 is essential for nerve function and DNA synthesis."},
    risk: 2, cues: "Do not overcook — liver becomes grainy and bitter. Soak in milk 30 min to reduce strong flavour. Slice thin, sear on high heat 2 min per side. Serve still slightly pink. Limit to once weekly — excess vitamin A accumulates. Avoid if pregnant (excess retinol risk). Chicken liver is milder and easier to begin with.",
    equipment: "Pan",
    position: "Dinner · Once weekly",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked (beef liver)",
      calories: 175,
      macros: [
        { key:"protein", label:"Protein", grams:"26.5g", percent:62, kcal:106, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"4.9g", percent:26, kcal:44, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"3.9g", percent:12, kcal:16, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked. Liver delivers extraordinarily high vitamin A — this is why intake should be limited.",
        items: [
          { label:"Vitamin A", amount:"9442 mcg RAE", daily:1049, color:"#4f8df7" },
          { label:"Vitamin D", amount:"1.2 mcg", daily:6, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.4 mg", daily:3, color:"#8f74ff" },
          { label:"Vitamin K", amount:"3.5 mcg", daily:3, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"3.5 mg", daily:269, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"83.0 mcg", daily:3458, color:"#e26d5a" },
          { label:"Folate", amount:"290 mcg DFE", daily:73, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"7.7 mg", daily:154, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked beef liver.",
        items: [
          { label:"Calcium", amount:"6 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"6.5 mg", daily:36, color:"#e26d5a" },
          { label:"Magnesium", amount:"18 mg", daily:4, color:"#4fb66f" },
          { label:"Phosphorus", amount:"387 mg", daily:31, color:"#8f74ff" },
          { label:"Potassium", amount:"352 mg", daily:7, color:"#f6b23b" },
          { label:"Zinc", amount:"5.0 mg", daily:45, color:"#25b9a7" },
          { label:"Selenium", amount:"39.7 mcg", daily:72, color:"#d982d0" },
          { label:"Sodium", amount:"69 mg", daily:3, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"2.20 g", daily:89, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.30 g", daily:93, color:"#4fb66f" },
          { label:"Valine", amount:"1.55 g", daily:74, color:"#f6b23b" },
          { label:"Lysine", amount:"2.05 g", daily:79, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.95 g", daily:68, color:"#e26d5a" },
          { label:"Threonine", amount:"1.15 g", daily:78, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.33 g", daily:116, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.10 g", daily:75, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Liver contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"68.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"69 mg", daily:3, color:"#72a6d8" },
          { label:"Potassium", amount:"352 mg", daily:7, color:"#f6b23b" },
          { label:"Magnesium", amount:"18 mg", daily:4, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key liver-specific nutrients",
        note: "These are important liver-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Copper", amount:"9.8 mg", daily:1089, color:"#4f8df7" },
          { label:"Cholesterol", amount:"389 mg", daily:130, color:"#e26d5a" },
          { label:"CoQ10", amount:"highest of any food", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Vitamin A and copper levels are extremely high — this is exactly why liver should be limited to roughly once weekly, not because of any flaw in the food itself."
    },
    youtube: null, joints: {}
  },
  {
    id: 38, name: "Bone Broth", alt: "Slow-simmered collagen stock",
    desc: "Bone broth is made by simmering animal bones (beef, chicken, fish) for 12–24 hours to extract collagen, gelatin, glucosamine, chondroitin and trace minerals. The glycine and proline from collagen hydrolysis directly support connective tissue repair — tendons, ligaments and cartilage — making bone broth uniquely relevant for athletes managing joint stress. It also contains electrolytes including sodium, potassium and phosphorus.",
    muscles: [{n:"Collagen",p:true},{n:"Glycine",p:true},{n:"Glucosamine",p:false},{n:"Electrolytes",p:false},{n:"Gelatin",p:false}],
    tags: ["meat","collagen","joint-health","recovery","connective-tissue","gut-health"],
    diff: 3,
    str: {suit:true,  eff:4, note:"Glycine and proline support tendon and ligament repair under heavy loading. Connective tissue recovery."},
    vol: {suit:true,  eff:4, note:"Electrolytes support hydration during high-volume phases. Gut-healing properties improve nutrient absorption."},
    end: {suit:true,  eff:4, note:"Joint lubrication via glucosamine and chondroitin. Electrolytes support long session hydration."},
    risk: 1, cues: "Simmer bones (ideally with a splash of apple cider vinegar to draw out minerals) for 12–24 hours. Strain and refrigerate — it should gel when cold (a sign of high collagen content). Drink as a warm drink, use as cooking liquid or freeze in ice cube trays. Commercial tetra-packs are a convenient alternative — look for ones that gel when cold.",
    equipment: "Pot or slow cooker",
    position: "Morning drink · Between meals · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 250ml cup",
      calories: 40,
      macros: [
        { key:"protein", label:"Protein", grams:"9.0g", percent:90, kcal:36, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.5g", percent:11, kcal:5, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values. Bone broth is not a significant vitamin source — its value lies in collagen peptides and minerals.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.02 mg", daily:2, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.1 mcg", daily:4, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.1 mg", daily:2, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 250ml cup — actual mineral content varies considerably with simmer time and bone type.",
        items: [
          { label:"Calcium", amount:"10 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.2 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"2 mg", daily:0, color:"#4fb66f" },
          { label:"Phosphorus", amount:"15 mg", daily:1, color:"#8f74ff" },
          { label:"Potassium", amount:"15 mg", daily:0, color:"#f6b23b" },
          { label:"Zinc", amount:"0.2 mg", daily:2, color:"#25b9a7" },
          { label:"Selenium", amount:"1.0 mcg", daily:2, color:"#d982d0" },
          { label:"Sodium", amount:"350 mg", daily:15, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Collagen-derived protein lacks tryptophan and is low in several essential amino acids — not a complete protein source.",
        items: [
          { label:"Leucine", amount:"0.25 g", daily:10, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.10 g", daily:7, color:"#4fb66f" },
          { label:"Valine", amount:"0.15 g", daily:7, color:"#f6b23b" },
          { label:"Lysine", amount:"0.30 g", daily:12, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.10 g", daily:7, color:"#e26d5a" },
          { label:"Threonine", amount:"0.15 g", daily:10, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.00 g", daily:0, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.20 g", daily:7, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Bone broth contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 250ml cup — bone broth is primarily a hydration and electrolyte source.",
        items: [
          { label:"Water", amount:"~245 g", daily:11, color:"#4f8df7" },
          { label:"Sodium", amount:"350 mg", daily:15, color:"#72a6d8" },
          { label:"Potassium", amount:"15 mg", daily:0, color:"#f6b23b" },
          { label:"Magnesium", amount:"2 mg", daily:0, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key bone-broth-specific nutrients",
        note: "These are important bone-broth-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Glycine", amount:"~2.5 g", daily:0, color:"#4f8df7" },
          { label:"Glucosamine/Chondroitin", amount:"trace, varies by simmer time", daily:0, color:"#f6b23b" },
          { label:"Cholesterol", amount:"trace", daily:0, color:"#e26d5a" }
        ]
      },
      note: "Nutrient content varies enormously by recipe, simmer time and bone type — these are representative average figures, not exact."
    },
    youtube: null, joints: {}
  },
  {
    id: 39, name: "Mackerel", alt: "Fresh / smoked / canned",
    desc: "Mackerel is one of the richest oily fish in terms of omega-3 EPA and DHA content — often surpassing salmon while being significantly cheaper. A single 100 g fillet provides over 2 g of combined EPA/DHA, which exceeds the recommended daily omega-3 intake. It is also among the best dietary sources of vitamin D and vitamin B12. Smoked mackerel fillets are ready-to-eat and require no cooking.",
    muscles: [{n:"Omega-3 EPA/DHA",p:true},{n:"Protein",p:true},{n:"Vitamin D",p:true},{n:"B12",p:true},{n:"Selenium",p:false}],
    tags: ["fish","omega-3","anti-inflammatory","vitamin-D","convenient"],
    diff: 1,
    str: {suit:true,  eff:5, note:"Omega-3 + vitamin D synergy supports testosterone and muscle protein synthesis. One of the most anti-inflammatory foods available."},
    vol: {suit:true,  eff:4, note:"Calorie-dense fish — useful in bulk phases. Anti-inflammatory EPA/DHA accelerate recovery between sessions."},
    end: {suit:true,  eff:5, note:"Outstanding omega-3 density. Vitamin D and B12 support sustained energy and nerve function."},
    risk: 2, cues: "Smoked mackerel: ready to eat — flake over salads, into pasta or onto rice cakes with horseradish cream. Fresh mackerel: pan-fry skin-side down 4 min, flip 2 min. Canned: drain and use like tuna. Stronger flavour than most fish — pair with acidic elements (lemon, capers, pickles) to balance.",
    equipment: "Pan · None for smoked/canned",
    position: "Lunch · Dinner · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 262,
      macros: [
        { key:"protein", label:"Protein", grams:"23.9g", percent:39, kcal:96, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"17.8g", percent:61, kcal:160, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"45 mcg RAE", daily:5, color:"#4f8df7" },
          { label:"Vitamin D", amount:"16.1 mcg", daily:81, color:"#f6b23b" },
          { label:"Vitamin E", amount:"1.5 mg", daily:10, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.1 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.35 mg", daily:27, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"19.0 mcg", daily:792, color:"#e26d5a" },
          { label:"Folate", amount:"3 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"1.0 mg", daily:20, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked mackerel.",
        items: [
          { label:"Calcium", amount:"15 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"1.6 mg", daily:9, color:"#e26d5a" },
          { label:"Magnesium", amount:"97 mg", daily:23, color:"#4fb66f" },
          { label:"Phosphorus", amount:"260 mg", daily:21, color:"#8f74ff" },
          { label:"Potassium", amount:"344 mg", daily:7, color:"#f6b23b" },
          { label:"Zinc", amount:"0.8 mg", daily:7, color:"#25b9a7" },
          { label:"Selenium", amount:"50.0 mcg", daily:91, color:"#d982d0" },
          { label:"Sodium", amount:"95 mg", daily:4, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.87 g", daily:76, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.10 g", daily:79, color:"#4fb66f" },
          { label:"Valine", amount:"1.22 g", daily:58, color:"#f6b23b" },
          { label:"Lysine", amount:"2.20 g", daily:85, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.91 g", daily:65, color:"#e26d5a" },
          { label:"Threonine", amount:"1.04 g", daily:70, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.27 g", daily:95, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.86 g", daily:67, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Mackerel contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g. Smoked mackerel has substantially higher sodium.",
        items: [
          { label:"Water", amount:"57.0 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"95 mg", daily:4, color:"#72a6d8" },
          { label:"Potassium", amount:"344 mg", daily:7, color:"#f6b23b" },
          { label:"Magnesium", amount:"97 mg", daily:23, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key mackerel-specific nutrients",
        note: "These are important mackerel-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Omega-3 (EPA + DHA)", amount:"~2.3 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"75 mg", daily:25, color:"#e26d5a" },
          { label:"Mercury (context)", amount:"low to moderate (species-dependent)", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Values are for fresh cooked Atlantic mackerel; king mackerel has notably higher mercury and should be eaten less frequently."
    },
    youtube: null, joints: {}
  },
  {
    id: 40, name: "Kefir", alt: "Full-fat or low-fat milk kefir",
    desc: "Kefir is a fermented dairy drink containing a complex culture of up to 30–50 different bacterial and yeast strains — significantly more diverse than yoghurt's 2–3 strains. It is one of the most potent probiotic foods in existence, clinically shown to improve gut microbiome diversity, enhance lactose digestion and reduce inflammatory markers. It provides complete protein (10–12 g per 250 ml) and is better tolerated by most lactose-sensitive individuals than milk due to bacterial lactose breakdown.",
    muscles: [{n:"Casein + Whey Protein",p:true},{n:"Probiotics",p:true},{n:"Calcium",p:true},{n:"B12",p:false},{n:"Vitamin K2",p:false}],
    tags: ["dairy","fermented","probiotic","gut-health","calcium"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Protein supports muscle repair. Vitamin K2 supports bone density under heavy loading."},
    vol: {suit:true,  eff:4, note:"Gut health improvements from kefir enhance overall nutrient absorption — compounding long-term benefits."},
    end: {suit:true,  eff:4, note:"Reduced gut inflammation supports immune function during hard training blocks. Calcium supports bone health."},
    risk: 3, cues: "Drink plain or add to smoothies and overnight oats. Stir before drinking — separation is normal. Flavoured kefir often contains added sugar — choose plain. Most lactose-intolerant individuals can tolerate kefir well. Goat milk kefir is gentler than cow's milk for very sensitive individuals.",
    equipment: "None — ready to drink",
    position: "Breakfast · Snack · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100ml, plain, low-fat",
      calories: 56,
      macros: [
        { key:"protein", label:"Protein", grams:"3.8g", percent:27, kcal:15, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1.5g", percent:24, kcal:14, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"6.0g", percent:43, kcal:24, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100ml.",
        items: [
          { label:"Vitamin A", amount:"28 mcg RAE", daily:3, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0.1 mcg", daily:1, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.1 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.3 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.16 mg", daily:12, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.4 mcg", daily:17, color:"#e26d5a" },
          { label:"Folate", amount:"5 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100ml plain low-fat kefir.",
        items: [
          { label:"Calcium", amount:"120 mg", daily:9, color:"#4f8df7" },
          { label:"Iron", amount:"0.1 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"12 mg", daily:3, color:"#4fb66f" },
          { label:"Phosphorus", amount:"95 mg", daily:8, color:"#8f74ff" },
          { label:"Potassium", amount:"150 mg", daily:3, color:"#f6b23b" },
          { label:"Zinc", amount:"0.4 mg", daily:4, color:"#25b9a7" },
          { label:"Selenium", amount:"2.0 mcg", daily:4, color:"#d982d0" },
          { label:"Sodium", amount:"45 mg", daily:2, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"0.37 g", daily:15, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.21 g", daily:15, color:"#4fb66f" },
          { label:"Valine", amount:"0.25 g", daily:12, color:"#f6b23b" },
          { label:"Lysine", amount:"0.32 g", daily:12, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.13 g", daily:9, color:"#e26d5a" },
          { label:"Threonine", amount:"0.18 g", daily:12, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.06 g", daily:21, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.37 g", daily:13, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Kefir contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100ml — kefir is over 88% water.",
        items: [
          { label:"Water", amount:"88.0 g", daily:4, color:"#4f8df7" },
          { label:"Sodium", amount:"45 mg", daily:2, color:"#72a6d8" },
          { label:"Potassium", amount:"150 mg", daily:3, color:"#f6b23b" },
          { label:"Magnesium", amount:"12 mg", daily:3, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key kefir-specific nutrients",
        note: "These are important kefir-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Probiotic strains", amount:"30-50+ bacterial/yeast strains", daily:0, color:"#4f8df7" },
          { label:"Vitamin K2", amount:"trace", daily:0, color:"#f6b23b" },
          { label:"Lactose (residual)", amount:"~4 g (lower than milk)", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Flavoured kefir often has significantly more sugar than plain — these values reflect unsweetened plain kefir."
    },
    youtube: null, joints: {}
  },
  {
    id: 41, name: "Lamb (Shoulder / Leg)", alt: "Grass-fed preferred",
    desc: "Lamb is a red meat with an excellent nutritional profile — complete protein, haem iron, zinc, selenium, B12, and the highest naturally occurring CLA content of any red meat. Grass-fed lamb also has a better omega-3 to omega-6 ratio than grain-fed alternatives. The leg and shoulder are the most practical cuts for athletes: flavourful, high protein, and well-suited to slow-cooking that produces tender, easy-to-portion meals.",
    muscles: [{n:"Protein",p:true},{n:"Iron",p:true},{n:"Zinc",p:true},{n:"CLA",p:false},{n:"B12",p:false}],
    tags: ["meat","red-meat","iron","CLA","high-protein"],
    diff: 3,
    str: {suit:true,  eff:5, note:"Highest CLA of any red meat. High zinc supports testosterone and immune function. Haem iron supports oxygen transport."},
    vol: {suit:true,  eff:4, note:"Iron and B12 support haemoglobin for sustained high-volume training."},
    end: {suit:true,  eff:3, note:"More calorie-dense than white meat — account for in a deficit. Choose leg over shoulder for leaner cut."},
    risk: 2, cues: "Slow-roast shoulder at 160 °C for 4–5 hours until falling off the bone. Leg: roast at 190 °C 25 min per 500 g. Rest 20 min before carving. Season simply: rosemary, garlic, olive oil. Pairs with sweet potato or roasted vegetables. Lamb mince is a versatile lean-ish option for meal prep.",
    equipment: "Oven",
    position: "Dinner · Meal prep",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked (shoulder, moderate fat)",
      calories: 258,
      macros: [
        { key:"protein", label:"Protein", grams:"25.0g", percent:39, kcal:100, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"17.0g", percent:59, kcal:153, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0.1 mcg", daily:1, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"4.5 mcg", daily:4, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.23 mg", daily:18, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"2.4 mcg", daily:100, color:"#e26d5a" },
          { label:"Folate", amount:"16 mcg DFE", daily:4, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.6 mg", daily:12, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked lamb shoulder.",
        items: [
          { label:"Calcium", amount:"16 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"1.7 mg", daily:9, color:"#e26d5a" },
          { label:"Magnesium", amount:"21 mg", daily:5, color:"#4fb66f" },
          { label:"Phosphorus", amount:"195 mg", daily:16, color:"#8f74ff" },
          { label:"Potassium", amount:"285 mg", daily:6, color:"#f6b23b" },
          { label:"Zinc", amount:"4.0 mg", daily:36, color:"#25b9a7" },
          { label:"Selenium", amount:"18.5 mcg", daily:34, color:"#d982d0" },
          { label:"Sodium", amount:"70 mg", daily:3, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.97 g", daily:80, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.12 g", daily:80, color:"#4fb66f" },
          { label:"Valine", amount:"1.22 g", daily:58, color:"#f6b23b" },
          { label:"Lysine", amount:"2.15 g", daily:83, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.90 g", daily:64, color:"#e26d5a" },
          { label:"Threonine", amount:"1.05 g", daily:71, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.28 g", daily:98, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.90 g", daily:68, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Lamb contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"55.0 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"70 mg", daily:3, color:"#72a6d8" },
          { label:"Potassium", amount:"285 mg", daily:6, color:"#f6b23b" },
          { label:"Magnesium", amount:"21 mg", daily:5, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key lamb-specific nutrients",
        note: "These are important lamb-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"CLA", amount:"highest of common red meats", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"95 mg", daily:32, color:"#e26d5a" },
          { label:"Omega-3 (grass-fed)", amount:"better ratio than grain-fed", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Shoulder is a fattier cut than leg — figures reflect typical shoulder fat content after trimming visible excess."
    },
    youtube: null, joints: {}
  },
  {
    id: 42, name: "Collagen Peptides", alt: "Hydrolysed collagen powder",
    desc: "Hydrolysed collagen is a supplement derived from animal connective tissue (bovine, porcine or marine) that has been broken down into small dipeptides, primarily glycine-proline and hydroxyproline sequences. These specific peptides are absorbed intact and have been clinically shown to accumulate in cartilage and tendons, stimulating collagen synthesis. When taken alongside vitamin C 30–60 minutes before training, the evidence for tendon and ligament repair is meaningful. It is not a muscle protein source — it lacks tryptophan and is low in leucine.",
    muscles: [{n:"Glycine",p:true},{n:"Hydroxyproline",p:true},{n:"Proline",p:false}],
    tags: ["supplement","collagen","joint-health","connective-tissue","tendon"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Specifically supports tendon and ligament health under heavy loading. Take with vitamin C pre-training for maximum effect."},
    vol: {suit:true,  eff:4, note:"Reduces injury risk in high-volume athletes. Joint lubrication. Not a muscle protein source — use in addition to whey/food protein."},
    end: {suit:true,  eff:4, note:"Cartilage and tendon health are long-term performance limiters in endurance athletes. Consistent use builds structural resilience."},
    risk: 1, cues: "Take 15–20 g with 50 mg vitamin C (a small orange juice) 30–60 min before training — this is the clinically studied protocol. Unflavoured powder dissolves in hot drinks, soups or juices. Not a substitute for complete protein — combine with whey or food protein for muscle. Marine collagen has better absorption than bovine for most people.",
    equipment: "Shaker or mug",
    position: "Pre-workout (30–60 min before) · Morning",
    nutritionProfile: {
      servingLabel: "Amount per 20g scoop (hydrolysed bovine collagen)",
      calories: 70,
      macros: [
        { key:"protein", label:"Protein", grams:"18.0g", percent:97, kcal:72, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0g", percent:0, kcal:0, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values. Collagen peptides are not a vitamin source unless fortified.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 20g scoop — collagen peptides are not a significant mineral source.",
        items: [
          { label:"Calcium", amount:"5 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0.1 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" },
          { label:"Phosphorus", amount:"5 mg", daily:0, color:"#8f74ff" },
          { label:"Potassium", amount:"5 mg", daily:0, color:"#f6b23b" },
          { label:"Zinc", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Selenium", amount:"0 mcg", daily:0, color:"#d982d0" },
          { label:"Sodium", amount:"60 mg", daily:3, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Collagen is NOT a complete protein — it lacks tryptophan entirely and is very low in several essential amino acids. It should not be relied upon as a primary protein source.",
        items: [
          { label:"Leucine", amount:"0.55 g", daily:22, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.20 g", daily:14, color:"#4fb66f" },
          { label:"Valine", amount:"0.35 g", daily:17, color:"#f6b23b" },
          { label:"Lysine", amount:"0.60 g", daily:23, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.10 g", daily:7, color:"#e26d5a" },
          { label:"Threonine", amount:"0.30 g", daily:20, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.00 g", daily:0, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.40 g", daily:14, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Collagen peptides contain no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe the powder's electrolyte contribution per 20g scoop, mixed with water.",
        items: [
          { label:"Water", amount:"~0.5 g (dry powder)", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"60 mg", daily:3, color:"#72a6d8" },
          { label:"Potassium", amount:"5 mg", daily:0, color:"#f6b23b" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key collagen-specific nutrients",
        note: "These are important collagen-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Glycine", amount:"~4.0 g", daily:0, color:"#4f8df7" },
          { label:"Hydroxyproline", amount:"~2.0 g", daily:0, color:"#f6b23b" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" }
        ]
      },
      note: "Take alongside vitamin C 30–60 min pre-training, per the clinically studied protocol, for best collagen synthesis support."
    },
    youtube: null, joints: {}
  },
  {
    id: 43, name: "Skyr", alt: "Icelandic dairy product",
    desc: "Skyr is an Icelandic cultured dairy product that is technically closer to a fresh cheese than a yoghurt. It is among the highest-protein dairy foods available — typically 17–20 g per 170 g serving — with a remarkably thick, creamy texture and mild flavour. Lower in fat than Greek yoghurt and slightly higher in protein gram-for-gram, it also contains live cultures and calcium. It has gained recognition as one of the best protein-to-calorie foods in the dairy category.",
    muscles: [{n:"Casein Protein",p:true},{n:"Calcium",p:true},{n:"Probiotics",p:false},{n:"B12",p:false},{n:"Phosphorus",p:false}],
    tags: ["dairy","high-protein","low-fat","casein","calcium"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Higher protein per gram than Greek yoghurt. Casein provides slow-release amino acids — excellent pre-sleep."},
    vol: {suit:true,  eff:4, note:"Very high satiety for calories. Thick texture — satisfying in low-calorie phases."},
    end: {suit:true,  eff:5, note:"Best protein-per-calorie dairy product. Easy to mix with fruit, granola or oats for a complete snack."},
    risk: 4, cues: "Choose plain — flavoured skyr often contains added sugar. Top with fresh berries and a small drizzle of honey. Works as a Greek yoghurt substitute in any recipe. Some individuals who cannot tolerate yoghurt find skyr more digestible.",
    equipment: "None — ready to eat",
    position: "Breakfast · Pre-sleep · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g, plain, low-fat",
      calories: 63,
      macros: [
        { key:"protein", label:"Protein", grams:"11.0g", percent:70, kcal:44, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.2g", percent:3, kcal:2, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"4.0g", percent:25, kcal:16, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g plain skyr.",
        items: [
          { label:"Vitamin A", amount:"5 mcg RAE", daily:1, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.1 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.20 mg", daily:15, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.5 mcg", daily:21, color:"#e26d5a" },
          { label:"Folate", amount:"10 mcg DFE", daily:3, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g plain skyr.",
        items: [
          { label:"Calcium", amount:"150 mg", daily:12, color:"#4f8df7" },
          { label:"Iron", amount:"0.1 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"12 mg", daily:3, color:"#4fb66f" },
          { label:"Phosphorus", amount:"140 mg", daily:11, color:"#8f74ff" },
          { label:"Potassium", amount:"170 mg", daily:4, color:"#f6b23b" },
          { label:"Zinc", amount:"0.6 mg", daily:5, color:"#25b9a7" },
          { label:"Selenium", amount:"4.0 mcg", daily:7, color:"#d982d0" },
          { label:"Sodium", amount:"40 mg", daily:2, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.05 g", daily:42, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.65 g", daily:46, color:"#4fb66f" },
          { label:"Valine", amount:"0.74 g", daily:35, color:"#f6b23b" },
          { label:"Lysine", amount:"0.93 g", daily:36, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.39 g", daily:28, color:"#e26d5a" },
          { label:"Threonine", amount:"0.52 g", daily:35, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.14 g", daily:49, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.07 g", daily:38, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Skyr contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"84.0 g", daily:4, color:"#4f8df7" },
          { label:"Sodium", amount:"40 mg", daily:2, color:"#72a6d8" },
          { label:"Potassium", amount:"170 mg", daily:4, color:"#f6b23b" },
          { label:"Magnesium", amount:"12 mg", daily:3, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key skyr-specific nutrients",
        note: "These are important skyr-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Live Cultures", amount:"present", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"4 mg", daily:1, color:"#e26d5a" },
          { label:"Casein Protein", amount:"majority of protein", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Skyr typically has a slightly higher protein-to-calorie ratio than Greek yoghurt due to extensive straining during production."
    },
    youtube: null, joints: {}
  },
  {
    id: 44, name: "Oysters", alt: "Fresh / smoked / canned",
    desc: "Oysters are the richest dietary source of zinc by a wide margin — a single medium oyster provides more zinc than almost any other food. Zinc is essential for testosterone production, immune function, protein synthesis and wound healing. Oysters also provide an outstanding concentration of vitamin B12, copper, selenium and iron. A dozen raw oysters delivers approximately 30 g protein at under 200 kcal — an exceptional protein-to-calorie ratio for a whole food.",
    muscles: [{n:"Zinc",p:true},{n:"B12",p:true},{n:"Protein",p:true},{n:"Copper",p:true},{n:"Iron",p:false},{n:"Selenium",p:false}],
    tags: ["shellfish","zinc","B12","high-protein","micronutrient-dense"],
    diff: 3,
    str: {suit:true,  eff:5, note:"Zinc is the most important mineral for testosterone production and protein synthesis. Unmatched zinc density in any natural food."},
    vol: {suit:true,  eff:4, note:"Complete protein with outstanding micronutrient support for high-training-load athletes."},
    end: {suit:true,  eff:4, note:"Iron and B12 support red blood cell production and energy. Copper supports connective tissue health."},
    risk: 4, cues: "Fresh: eat raw with lemon and hot sauce — loosen the muscle with an oyster knife by inserting at the hinge and twisting. Only consume fresh from reputable sources — foodborne illness risk is real. Canned/smoked oysters are a safe convenient alternative with similar nutrients. Shellfish allergy — avoid. Do not consume during red tide warnings.",
    equipment: "Oyster knife for fresh",
    position: "Dinner · Special meal · Snack (canned)",
    nutritionProfile: {
      servingLabel: "Amount per 100g raw",
      calories: 81,
      macros: [
        { key:"protein", label:"Protein", grams:"9.4g", percent:46, kcal:38, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"2.3g", percent:26, kcal:21, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"4.9g", percent:24, kcal:20, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g raw.",
        items: [
          { label:"Vitamin A", amount:"45 mcg RAE", daily:5, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0.3 mcg", daily:2, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.9 mg", daily:6, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.1 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.16 mg", daily:12, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"16.0 mcg", daily:667, color:"#e26d5a" },
          { label:"Folate", amount:"9 mcg DFE", daily:2, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g raw oysters. Zinc content is exceptionally high.",
        items: [
          { label:"Calcium", amount:"45 mg", daily:3, color:"#4f8df7" },
          { label:"Iron", amount:"5.1 mg", daily:28, color:"#e26d5a" },
          { label:"Magnesium", amount:"30 mg", daily:7, color:"#4fb66f" },
          { label:"Phosphorus", amount:"156 mg", daily:12, color:"#8f74ff" },
          { label:"Potassium", amount:"168 mg", daily:4, color:"#f6b23b" },
          { label:"Zinc", amount:"39.0 mg", daily:355, color:"#25b9a7" },
          { label:"Selenium", amount:"63.0 mcg", daily:115, color:"#d982d0" },
          { label:"Sodium", amount:"211 mg", daily:9, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"0.70 g", daily:28, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.41 g", daily:29, color:"#4fb66f" },
          { label:"Valine", amount:"0.45 g", daily:21, color:"#f6b23b" },
          { label:"Lysine", amount:"0.77 g", daily:30, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.30 g", daily:21, color:"#e26d5a" },
          { label:"Threonine", amount:"0.41 g", daily:28, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.10 g", daily:35, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.71 g", daily:25, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Oysters contain no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"82.0 g", daily:4, color:"#4f8df7" },
          { label:"Sodium", amount:"211 mg", daily:9, color:"#72a6d8" },
          { label:"Potassium", amount:"168 mg", daily:4, color:"#f6b23b" },
          { label:"Magnesium", amount:"30 mg", daily:7, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key oyster-specific nutrients",
        note: "These are important oyster-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Copper", amount:"4.5 mg", daily:500, color:"#4f8df7" },
          { label:"Cholesterol", amount:"50 mg", daily:17, color:"#e26d5a" },
          { label:"Zinc", amount:"39.0 mg", daily:355, color:"#25b9a7" }
        ]
      },
      note: "Zinc and copper levels are extraordinarily high — oysters are the richest natural source of zinc of any common food."
    },
    youtube: null, joints: {}
  },
  {
    id: 45, name: "Elk / Venison", alt: "Wild game deer / elk",
    desc: "Game meats like venison and elk are among the leanest red meats available — typically 2–3% fat — while providing complete protein, haem iron, zinc and B12 at a level comparable to beef. Wild game animals live in their natural habitat and eat their natural diet, resulting in a far superior omega-3 to omega-6 ratio compared to grain-fed livestock. A 150 g serving of elk provides ~37 g protein at approximately 165 kcal.",
    muscles: [{n:"Protein",p:true},{n:"Iron",p:true},{n:"Zinc",p:false},{n:"B12",p:false},{n:"Omega-3",p:false}],
    tags: ["meat","game","ultra-lean","high-protein","iron"],
    diff: 4,
    str: {suit:true,  eff:5, note:"Leanest red meat with full nutrient density of beef. Iron and zinc support strength adaptations."},
    vol: {suit:true,  eff:4, note:"Excellent protein density per calorie. Better omega-3 profile than conventional beef."},
    end: {suit:true,  eff:4, note:"Ultra-lean red meat ideal for cutting phases without sacrificing iron or B12."},
    risk: 2, cues: "Venison is very lean — it dries and toughens quickly if overcooked. Sear on high heat 2–3 min per side for a steak; rest 5 min. Mince: cook until just done. Marinate in oil and acid before cooking. Often available from specialist butchers, game farms or online. Season simply.",
    equipment: "Pan · Grill",
    position: "Dinner · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked (elk)",
      calories: 146,
      macros: [
        { key:"protein", label:"Protein", grams:"30.0g", percent:84, kcal:120, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"2.0g", percent:13, kcal:18, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.3 mg", daily:2, color:"#8f74ff" },
          { label:"Vitamin K", amount:"1.4 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.45 mg", daily:35, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"3.6 mcg", daily:150, color:"#e26d5a" },
          { label:"Folate", amount:"5 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.6 mg", daily:12, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked elk.",
        items: [
          { label:"Calcium", amount:"6 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"3.6 mg", daily:20, color:"#e26d5a" },
          { label:"Magnesium", amount:"23 mg", daily:5, color:"#4fb66f" },
          { label:"Phosphorus", amount:"240 mg", daily:19, color:"#8f74ff" },
          { label:"Potassium", amount:"320 mg", daily:7, color:"#f6b23b" },
          { label:"Zinc", amount:"3.2 mg", daily:29, color:"#25b9a7" },
          { label:"Selenium", amount:"17.0 mcg", daily:31, color:"#d982d0" },
          { label:"Sodium", amount:"55 mg", daily:2, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"2.36 g", daily:95, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.34 g", daily:96, color:"#4fb66f" },
          { label:"Valine", amount:"1.47 g", daily:70, color:"#f6b23b" },
          { label:"Lysine", amount:"2.58 g", daily:99, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"1.08 g", daily:77, color:"#e26d5a" },
          { label:"Threonine", amount:"1.27 g", daily:86, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.34 g", daily:119, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.28 g", daily:82, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Elk contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"67.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"55 mg", daily:2, color:"#72a6d8" },
          { label:"Potassium", amount:"320 mg", daily:7, color:"#f6b23b" },
          { label:"Magnesium", amount:"23 mg", daily:5, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key elk-specific nutrients",
        note: "These are important elk/venison-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Creatine (approx.)", amount:"~0.3 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"60 mg", daily:20, color:"#e26d5a" },
          { label:"Omega-3 (wild-fed)", amount:"better ratio than grain-fed beef", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Game meat nutrition varies with the animal's diet and habitat — wild-caught typically has the best omega-3 profile."
    },
    youtube: null, joints: {}
  },
  {
    id: 46, name: "Plant Protein Blend", alt: "Pea + rice blend powder",
    desc: "A 70:30 blend of pea and rice protein powders produces a complete amino acid profile that closely matches whey — pea protein contributes strong leucine, lysine and arginine while brown rice protein fills gaps in methionine and cysteine. Together the combination achieves a PDCAAS (protein digestibility-corrected amino acid score) comparable to whey at 0.91–0.99. This is the optimal plant-based protein supplement strategy for athletes avoiding animal products.",
    muscles: [{n:"Complete Plant Protein",p:true},{n:"Leucine",p:true},{n:"BCAAs",p:false},{n:"Arginine",p:false}],
    tags: ["supplement","plant","vegan","complete","hypoallergenic"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Closest plant supplement to whey in terms of complete amino acid delivery. Leucine content sufficient to trigger MPS."},
    vol: {suit:true,  eff:4, note:"Easy daily protein target for vegan and plant-based athletes in volume phases."},
    end: {suit:true,  eff:4, note:"Hypoallergenic and gut-friendly. Supports protein synthesis without digestive issues."},
    risk: 1, cues: "Mix 70 g pea protein + 30 g rice protein for the optimal blend, or buy a pre-blended product. Shake with plant milk rather than water for better flavour and texture. Blending with frozen banana and cocoa powder significantly improves palatability. Check added sugar in pre-flavoured products.",
    equipment: "Shaker bottle or blender",
    position: "Post-workout · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 30g scoop (70:30 pea:rice blend)",
      calories: 115,
      macros: [
        { key:"protein", label:"Protein", grams:"22.5g", percent:78, kcal:90, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1.8g", percent:14, kcal:16, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"2.5g", percent:9, kcal:10, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values. Not a significant vitamin source unless fortified.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.1 mg", daily:8, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"5 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.1 mg", daily:2, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 30g scoop.",
        items: [
          { label:"Calcium", amount:"35 mg", daily:3, color:"#4f8df7" },
          { label:"Iron", amount:"3.8 mg", daily:21, color:"#e26d5a" },
          { label:"Magnesium", amount:"30 mg", daily:7, color:"#4fb66f" },
          { label:"Phosphorus", amount:"170 mg", daily:14, color:"#8f74ff" },
          { label:"Potassium", amount:"230 mg", daily:5, color:"#f6b23b" },
          { label:"Zinc", amount:"1.1 mg", daily:10, color:"#25b9a7" },
          { label:"Selenium", amount:"3.0 mcg", daily:5, color:"#d982d0" },
          { label:"Sodium", amount:"230 mg", daily:10, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. The pea+rice combination closes the methionine and lysine gaps each has alone.",
        items: [
          { label:"Leucine", amount:"1.95 g", daily:79, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.05 g", daily:75, color:"#4fb66f" },
          { label:"Valine", amount:"1.15 g", daily:55, color:"#f6b23b" },
          { label:"Lysine", amount:"1.55 g", daily:60, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.55 g", daily:39, color:"#e26d5a" },
          { label:"Threonine", amount:"0.80 g", daily:54, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.21 g", daily:74, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.00 g", daily:72, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"1.2 g", daily:4, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.3 g", daily:1, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0.9 g", daily:3, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe the powder's electrolyte contribution per 30g scoop, mixed with water.",
        items: [
          { label:"Water", amount:"~1.5 g (dry powder)", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"230 mg", daily:10, color:"#72a6d8" },
          { label:"Potassium", amount:"230 mg", daily:5, color:"#f6b23b" },
          { label:"Magnesium", amount:"30 mg", daily:7, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key plant-blend-specific nutrients",
        note: "These are important plant-protein-blend-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"PDCAAS score", amount:"~0.91–0.99 (close to whey)", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Allergen profile", amount:"hypoallergenic", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Values vary by exact pea:rice ratio and brand processing method."
    },
    youtube: null, joints: {}
  },
  {
    id: 47, name: "Seitan", alt: "Wheat gluten protein",
    desc: "Seitan is made from vital wheat gluten — the protein extracted from wheat flour after the starch is washed away. It is one of the highest-protein plant foods in existence: approximately 25 g protein per 100 g and a dense, chewy, meat-like texture that absorbs marinades exceptionally well. Unlike most plant proteins, seitan is not a complete protein as it is very low in lysine — it must be paired with a lysine source (legumes, dairy or soy) across the day.",
    muscles: [{n:"Protein",p:true},{n:"Iron",p:false},{n:"Selenium",p:false}],
    tags: ["plant","high-protein","gluten","meat-substitute","versatile"],
    diff: 3,
    str: {suit:true,  eff:4, note:"Highest protein of any plant-based meat substitute. Excellent texture for those transitioning from meat."},
    vol: {suit:true,  eff:4, note:"Calorie and protein dense. Works in any cuisine as a meat replacement — stir-fries, stews, sandwiches."},
    end: {suit:true,  eff:3, note:"Not complete — pair with legumes (lentils, edamame, chickpeas) to cover lysine gap."},
    risk: 3, cues: "NOT suitable for coeliac or gluten-intolerant individuals — it is essentially concentrated gluten. Slice and marinate for at least 1 hour before cooking. Sear on high heat for a crispy crust. Simmer in broth to stay moist. Best treated exactly like a meat cut in terms of seasoning and technique.",
    equipment: "Pan · Oven",
    position: "Any main meal · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g",
      calories: 142,
      macros: [
        { key:"protein", label:"Protein", grams:"25.0g", percent:73, kcal:100, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1.2g", percent:8, kcal:11, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"9.0g", percent:19, kcal:31, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.1 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.05 mg", daily:4, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"8 mcg DFE", daily:2, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.1 mg", daily:2, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g seitan.",
        items: [
          { label:"Calcium", amount:"19 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"1.6 mg", daily:9, color:"#e26d5a" },
          { label:"Magnesium", amount:"15 mg", daily:4, color:"#4fb66f" },
          { label:"Phosphorus", amount:"72 mg", daily:6, color:"#8f74ff" },
          { label:"Potassium", amount:"58 mg", daily:1, color:"#f6b23b" },
          { label:"Zinc", amount:"0.8 mg", daily:7, color:"#25b9a7" },
          { label:"Selenium", amount:"15.0 mcg", daily:27, color:"#d982d0" },
          { label:"Sodium", amount:"330 mg", daily:14, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Seitan is very low in lysine — pair with legumes, dairy or soy to fill the gap.",
        items: [
          { label:"Leucine", amount:"1.85 g", daily:75, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.00 g", daily:71, color:"#4fb66f" },
          { label:"Valine", amount:"1.10 g", daily:52, color:"#f6b23b" },
          { label:"Lysine", amount:"0.30 g", daily:12, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.85 g", daily:61, color:"#e26d5a" },
          { label:"Threonine", amount:"0.65 g", daily:44, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.30 g", daily:105, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.50 g", daily:90, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"0.6 g", daily:2, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.1 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0.5 g", daily:2, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"63.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"330 mg", daily:14, color:"#72a6d8" },
          { label:"Potassium", amount:"58 mg", daily:1, color:"#f6b23b" },
          { label:"Magnesium", amount:"15 mg", daily:4, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key seitan-specific nutrients",
        note: "These are important seitan-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Gluten content", amount:"very high (not for coeliac)", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Lysine gap", amount:"pair with legumes/dairy", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Sodium content varies a lot by brand and the broth used to cook it — homemade seitan can have much lower sodium."
    },
    youtube: null, joints: {}
  },
  {
    id: 48, name: "Quark", alt: "Soft fresh curd cheese",
    desc: "Quark is a fresh dairy cheese popular across Northern and Eastern Europe — positioned nutritionally between Greek yoghurt and cottage cheese, with up to 13 g protein per 100 g at very low fat in its skimmed form. Like Greek yoghurt and cottage cheese it is predominantly casein protein. It has a smooth, creamy texture and very mild flavour that works in both sweet and savoury applications. An underrated high-protein dairy food in the English-speaking world.",
    muscles: [{n:"Casein Protein",p:true},{n:"Calcium",p:true},{n:"Probiotics",p:false},{n:"B12",p:false}],
    tags: ["dairy","casein","high-protein","low-fat","versatile"],
    diff: 1,
    str: {suit:true,  eff:4, note:"High casein — ideal pre-sleep protein. Calcium supports bone density."},
    vol: {suit:true,  eff:3, note:"Versatile as a cooking ingredient — dips, sauces, baked goods. Easy to add to meals without changing flavour."},
    end: {suit:true,  eff:4, note:"Among the lowest calorie high-protein dairy foods. Casein keeps muscle synthesis elevated through the night."},
    risk: 3, cues: "Use as a direct substitute for cream cheese, sour cream or crème fraîche in any recipe. Add to pasta sauces for a protein boost without cream. Mix with protein powder and berries for a high-protein parfait. Warm to room temperature before cooking to prevent curdling. Not suitable for lactose-intolerant individuals.",
    equipment: "None — or pan at low heat",
    position: "Pre-sleep · Any meal · Cooking ingredient",
    nutritionProfile: {
      servingLabel: "Amount per 100g, low-fat",
      calories: 67,
      macros: [
        { key:"protein", label:"Protein", grams:"12.0g", percent:73, kcal:48, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.3g", percent:4, kcal:3, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"4.0g", percent:24, kcal:16, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g low-fat quark.",
        items: [
          { label:"Vitamin A", amount:"3 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.1 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.18 mg", daily:14, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.4 mcg", daily:17, color:"#e26d5a" },
          { label:"Folate", amount:"10 mcg DFE", daily:3, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.2 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g low-fat quark.",
        items: [
          { label:"Calcium", amount:"92 mg", daily:7, color:"#4f8df7" },
          { label:"Iron", amount:"0.1 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"8 mg", daily:2, color:"#4fb66f" },
          { label:"Phosphorus", amount:"130 mg", daily:10, color:"#8f74ff" },
          { label:"Potassium", amount:"110 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"0.4 mg", daily:4, color:"#25b9a7" },
          { label:"Selenium", amount:"8.0 mcg", daily:15, color:"#d982d0" },
          { label:"Sodium", amount:"45 mg", daily:2, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.15 g", daily:46, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.70 g", daily:50, color:"#4fb66f" },
          { label:"Valine", amount:"0.80 g", daily:38, color:"#f6b23b" },
          { label:"Lysine", amount:"1.00 g", daily:38, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.42 g", daily:30, color:"#e26d5a" },
          { label:"Threonine", amount:"0.56 g", daily:38, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.15 g", daily:53, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.16 g", daily:42, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Quark contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"83.0 g", daily:4, color:"#4f8df7" },
          { label:"Sodium", amount:"45 mg", daily:2, color:"#72a6d8" },
          { label:"Potassium", amount:"110 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"8 mg", daily:2, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key quark-specific nutrients",
        note: "These are important quark-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Cholesterol", amount:"3 mg", daily:1, color:"#e26d5a" },
          { label:"Casein Protein", amount:"majority of protein", daily:0, color:"#4f8df7" },
          { label:"Probiotics", amount:"present (varies by brand)", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Whole-milk quark has more fat and slightly fewer calories from protein than the low-fat values shown here."
    },
    youtube: null, joints: {}
  },
  {
    id: 49, name: "Spirulina", alt: "Blue-green algae powder / tablets",
    desc: "Spirulina is a blue-green algae and one of the most protein-dense foods by weight — approximately 60–70% protein dry weight, with a reasonably complete amino acid profile. It contains phycocyanin, a unique blue pigment with potent anti-inflammatory and antioxidant properties with no equivalent in any other food. It also provides iron, B vitamins, beta-carotene and chlorophyll. A 5–10 g serving per day is the practical dose for athletes seeking its antioxidant and anti-inflammatory benefits.",
    muscles: [{n:"Protein",p:true},{n:"Phycocyanin",p:true},{n:"Iron",p:true},{n:"Beta-Carotene",p:false},{n:"B Vitamins",p:false}],
    tags: ["supplement","algae","plant","iron","anti-inflammatory","vegan"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Iron supports oxygen transport. Phycocyanin reduces exercise-induced oxidative stress."},
    vol: {suit:true,  eff:3, note:"Easy add-in to smoothies and shakes. Dense micronutrient addition to any diet."},
    end: {suit:true,  eff:4, note:"Antioxidant and anti-inflammatory profile relevant for high training volumes. Iron supports haemoglobin in endurance athletes."},
    risk: 1, cues: "Add 5 g (1 tsp) to smoothies, juices or protein shakes — the flavour is earthy and algae-like, best masked by strong flavours like banana, cocoa and berries. Tablets are an alternative to avoid the taste entirely. Buy from reputable brands that test for heavy metals — quality control matters with algae products. Do not use if on blood thinners.",
    equipment: "Blender or shaker",
    position: "Morning smoothie · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 5g serving (1 tsp)",
      calories: 16,
      macros: [
        { key:"protein", label:"Protein", grams:"3.0g", percent:75, kcal:12, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.4g", percent:23, kcal:4, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0.8g", percent:2, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 5g serving.",
        items: [
          { label:"Vitamin A", amount:"15 mcg RAE", daily:2, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"1.4 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.2 mg", daily:15, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.2 mcg (variable bioavailability)", daily:8, color:"#e26d5a" },
          { label:"Folate", amount:"3 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.1 mg", daily:2, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 5g serving of spirulina powder.",
        items: [
          { label:"Calcium", amount:"6 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"1.4 mg", daily:8, color:"#e26d5a" },
          { label:"Magnesium", amount:"9 mg", daily:2, color:"#4fb66f" },
          { label:"Phosphorus", amount:"6 mg", daily:0, color:"#8f74ff" },
          { label:"Potassium", amount:"70 mg", daily:1, color:"#f6b23b" },
          { label:"Zinc", amount:"0.2 mg", daily:2, color:"#25b9a7" },
          { label:"Selenium", amount:"0.4 mcg", daily:1, color:"#d982d0" },
          { label:"Sodium", amount:"39 mg", daily:2, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult, at the small 5g dose typically used.",
        items: [
          { label:"Leucine", amount:"0.24 g", daily:10, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.17 g", daily:12, color:"#4fb66f" },
          { label:"Valine", amount:"0.19 g", daily:9, color:"#f6b23b" },
          { label:"Lysine", amount:"0.17 g", daily:7, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.08 g", daily:6, color:"#e26d5a" },
          { label:"Threonine", amount:"0.16 g", daily:11, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.04 g", daily:14, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.30 g", daily:11, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"0.2 g", daily:1, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0.2 g", daily:1, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe the powder's electrolyte contribution per 5g serving.",
        items: [
          { label:"Water", amount:"~0.3 g (dry powder)", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"39 mg", daily:2, color:"#72a6d8" },
          { label:"Potassium", amount:"70 mg", daily:1, color:"#f6b23b" },
          { label:"Magnesium", amount:"9 mg", daily:2, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key spirulina-specific nutrients",
        note: "These are important spirulina-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Phycocyanin", amount:"~0.5 g", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Heavy metal risk", amount:"buy tested brands", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Spirulina's B12 form may have limited bioavailability in humans — it should not be relied upon as a sole B12 source for vegans."
    },
    youtube: null, joints: {}
  },
  {
    id: 50, name: "Duck Breast", alt: "Skin-on or skinless",
    desc: "Duck breast is one of the richest sources of carnosine — a dipeptide that buffers acid in muscle tissue during high-intensity exercise, directly delaying fatigue. It also delivers complete protein, haem iron, zinc and B vitamins, with the rich depth of flavour that makes it one of the most satisfying animal proteins. Duck fat (primarily monounsaturated, similar to olive oil) is highly regarded for cooking quality and flavour.",
    muscles: [{n:"Protein",p:true},{n:"Carnosine",p:true},{n:"Iron",p:true},{n:"Zinc",p:false},{n:"B6",p:false}],
    tags: ["poultry","high-protein","carnosine","iron","performance"],
    diff: 4,
    str: {suit:true,  eff:4, note:"Carnosine buffers muscular acid during anaerobic work. Iron and zinc support strength adaptations."},
    vol: {suit:true,  eff:3, note:"High carnosine content extends the time to muscular fatigue under repeated high-intensity sets."},
    end: {suit:true,  eff:4, note:"Carnosine buffer is particularly relevant in lactate-producing endurance efforts. Iron supports haemoglobin."},
    risk: 2, cues: "Score the fat in a crosshatch pattern without cutting into the flesh. Place skin-side down in a cold dry pan — bring to medium heat. Render 8–10 min until skin is golden and most fat has rendered. Flip and cook 3 min more. Rest 5 min. Internal temp: 60–63 °C for medium-pink — safe and far more flavourful than well-done.",
    equipment: "Pan",
    position: "Dinner · Special meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked, skinless",
      calories: 201,
      macros: [
        { key:"protein", label:"Protein", grams:"23.5g", percent:47, kcal:94, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"11.2g", percent:50, kcal:101, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked skinless duck breast.",
        items: [
          { label:"Vitamin A", amount:"50 mcg RAE", daily:6, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.4 mg", daily:3, color:"#8f74ff" },
          { label:"Vitamin K", amount:"2.8 mcg", daily:2, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.4 mg", daily:31, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.4 mcg", daily:17, color:"#e26d5a" },
          { label:"Folate", amount:"8 mcg DFE", daily:2, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"1.3 mg", daily:26, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked skinless duck breast.",
        items: [
          { label:"Calcium", amount:"11 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"3.2 mg", daily:18, color:"#e26d5a" },
          { label:"Magnesium", amount:"24 mg", daily:6, color:"#4fb66f" },
          { label:"Phosphorus", amount:"203 mg", daily:16, color:"#8f74ff" },
          { label:"Potassium", amount:"280 mg", daily:6, color:"#f6b23b" },
          { label:"Zinc", amount:"1.7 mg", daily:15, color:"#25b9a7" },
          { label:"Selenium", amount:"19.0 mcg", daily:35, color:"#d982d0" },
          { label:"Sodium", amount:"63 mg", daily:3, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult.",
        items: [
          { label:"Leucine", amount:"1.85 g", daily:75, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.06 g", daily:76, color:"#4fb66f" },
          { label:"Valine", amount:"1.18 g", daily:56, color:"#f6b23b" },
          { label:"Lysine", amount:"2.12 g", daily:82, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.89 g", daily:64, color:"#e26d5a" },
          { label:"Threonine", amount:"1.00 g", daily:68, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.27 g", daily:95, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.84 g", daily:66, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Duck contains no dietary fiber.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"63.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"63 mg", daily:3, color:"#72a6d8" },
          { label:"Potassium", amount:"280 mg", daily:6, color:"#f6b23b" },
          { label:"Magnesium", amount:"24 mg", daily:6, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key duck-specific nutrients",
        note: "These are important duck-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Carnosine", amount:"notably high content", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"95 mg", daily:32, color:"#e26d5a" },
          { label:"Vitamin B6", amount:"0.4 mg", daily:24, color:"#f6b23b" }
        ]
      },
      note: "Values are for skinless duck breast — skin-on adds substantially more fat and calories from rendered duck fat."
    },
    youtube: null, joints: {}
  },
  {
    id: 51, name: "Tofu (Firm / Extra-Firm)", alt: "Bean curd, plain",
    desc: "Tofu is produced by coagulating soy milk — available in silken, soft, firm and extra-firm forms with increasing protein density. Extra-firm tofu provides 8–10 g protein per 100 g and is the most practical for athletes. When pressed and marinated, it takes on bold flavours and develops a satisfying texture when pan-fried or baked. Soy is one of the few plant proteins considered functionally complete, with a leucine content high enough to trigger muscle protein synthesis.",
    muscles: [{n:"Complete Protein",p:true},{n:"Calcium",p:true},{n:"Iron",p:false},{n:"Isoflavones",p:false},{n:"Magnesium",p:false}],
    tags: ["plant","soy","complete","vegan","versatile"],
    diff: 2,
    str: {suit:true,  eff:3, note:"Complete protein — one of the few plant sources with sufficient leucine to meaningfully trigger MPS."},
    vol: {suit:true,  eff:4, note:"Versatile and very affordable. Absorbs any marinade — mimics protein-dense meat textures when prepared properly."},
    end: {suit:true,  eff:4, note:"Calcium supports bone health. Isoflavones have antioxidant properties. Low calorie density with meaningful protein."},
    risk: 2, cues: "Press extra-firm tofu 30 min (wrap in towels and weigh down) before cooking to remove excess water — critical for texture. Marinate at least 30 min. Pan-fry in sesame oil on high heat for 4–5 min until golden crust develops. Bake at 200 °C 25–30 min for a drier, chewier result. Silken tofu blends into smoothies and desserts for a protein boost.",
    equipment: "Pan · Oven",
    position: "Any main meal · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g extra-firm tofu",
      calories: 144,
      macros: [
        { key:"protein", label:"Protein", grams:"15.8g", percent:44, kcal:63, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"8.4g", percent:53, kcal:76, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"2.5g", percent:3, kcal:5, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"2.5 mcg", daily:2, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.06 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"21 mcg DFE", daily:5, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.1 mg", daily:2, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g extra-firm tofu made with calcium sulfate.",
        items: [
          { label:"Calcium", amount:"360 mg", daily:28, color:"#4f8df7" },
          { label:"Iron", amount:"2.8 mg", daily:16, color:"#e26d5a" },
          { label:"Magnesium", amount:"32 mg", daily:8, color:"#4fb66f" },
          { label:"Phosphorus", amount:"195 mg", daily:16, color:"#8f74ff" },
          { label:"Potassium", amount:"125 mg", daily:3, color:"#f6b23b" },
          { label:"Zinc", amount:"1.7 mg", daily:15, color:"#25b9a7" },
          { label:"Selenium", amount:"9.0 mcg", daily:16, color:"#d982d0" },
          { label:"Sodium", amount:"12 mg", daily:1, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Soy protein is functionally complete among plant proteins.",
        items: [
          { label:"Leucine", amount:"1.19 g", daily:48, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.69 g", daily:49, color:"#4fb66f" },
          { label:"Valine", amount:"0.73 g", daily:35, color:"#f6b23b" },
          { label:"Lysine", amount:"0.95 g", daily:37, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.41 g", daily:29, color:"#e26d5a" },
          { label:"Threonine", amount:"0.61 g", daily:41, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.21 g", daily:74, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.36 g", daily:49, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"2.0 g", daily:7, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.4 g", daily:1, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.6 g", daily:6, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"69.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"12 mg", daily:1, color:"#72a6d8" },
          { label:"Potassium", amount:"125 mg", daily:3, color:"#f6b23b" },
          { label:"Magnesium", amount:"32 mg", daily:8, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key tofu-specific nutrients",
        note: "These are important tofu-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Isoflavones", amount:"~24 mg", daily:0, color:"#4f8df7" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Manganese", amount:"0.7 mg", daily:30, color:"#4fb66f" }
        ]
      },
      note: "Calcium content depends heavily on the coagulant used (calcium sulfate gives high calcium; nigari gives lower calcium) — check the label."
    },
    youtube: null, joints: {}
  },
  {
    id: 101, name: "Oats (Rolled)", alt: "Porridge oats",
    desc: "Rolled oats are a gold-standard complex carbohydrate for athletes — slow-digesting, high in beta-glucan fibre, and providing a sustained energy release over 2–4 hours. They also contain more protein than almost any other grain (~5–6 g per 50 g serving) and meaningful amounts of iron, zinc and magnesium.",
    muscles: [{n:"Complex Carbs",p:true},{n:"Beta-Glucan",p:true},{n:"Iron",p:false},{n:"Magnesium",p:false},{n:"Fibre",p:false}],
    tags: ["grain","slow-release","fibre","pre-workout"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Good pre-workout carb. Sustains energy through longer strength sessions."},
    vol: {suit:true,  eff:5, note:"Ideal bulk-phase breakfast. High calorie density when prepared with milk and toppings."},
    end: {suit:true,  eff:4, note:"Slow-release energy is ideal for endurance and long training days."},
    risk: 2, cues: "Rolled oats: boil 3–4 min with 2:1 water to oats. Steel-cut: 20 min. Add protein powder, Greek yoghurt or nut butter to boost protein. Overnight oats = zero morning prep.",
    equipment: "Pot or microwave",
    position: "Breakfast · Pre-workout (2 hrs before)",
    nutritionProfile: {
      servingLabel: "Amount per 100g dry rolled oats",
      calories: 379,
      macros: [
        { key:"protein", label:"Protein", grams:"13.2g", percent:14, kcal:53, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"6.5g", percent:15, kcal:59, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"67.7g", percent:71, kcal:267, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g dry oats.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.4 mg", daily:3, color:"#8f74ff" },
          { label:"Vitamin K", amount:"2.0 mcg", daily:2, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.14 mg", daily:11, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"56 mcg DFE", daily:14, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"1.3 mg", daily:26, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g dry rolled oats.",
        items: [
          { label:"Calcium", amount:"52 mg", daily:4, color:"#4f8df7" },
          { label:"Iron", amount:"4.7 mg", daily:26, color:"#e26d5a" },
          { label:"Magnesium", amount:"177 mg", daily:42, color:"#4fb66f" },
          { label:"Phosphorus", amount:"523 mg", daily:42, color:"#8f74ff" },
          { label:"Potassium", amount:"429 mg", daily:9, color:"#f6b23b" },
          { label:"Zinc", amount:"4.0 mg", daily:36, color:"#25b9a7" },
          { label:"Selenium", amount:"34.0 mcg", daily:62, color:"#d982d0" },
          { label:"Sodium", amount:"2 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Oats provide more protein than most grains but are not a complete protein.",
        items: [
          { label:"Leucine", amount:"1.02 g", daily:41, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.55 g", daily:39, color:"#4fb66f" },
          { label:"Valine", amount:"0.71 g", daily:34, color:"#f6b23b" },
          { label:"Lysine", amount:"0.55 g", daily:21, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.45 g", daily:32, color:"#e26d5a" },
          { label:"Threonine", amount:"0.45 g", daily:30, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.18 g", daily:63, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.18 g", daily:42, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"10.1 g", daily:36, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"4.2 g", daily:15, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"5.9 g", daily:21, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g dry — cooked oats absorb significant water.",
        items: [
          { label:"Water", amount:"8.2 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"2 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"429 mg", daily:9, color:"#f6b23b" },
          { label:"Magnesium", amount:"177 mg", daily:42, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key oat-specific nutrients",
        note: "These are important oat-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Beta-Glucan", amount:"~4.0 g", daily:0, color:"#4f8df7" },
          { label:"Manganese", amount:"4.9 mg", daily:213, color:"#f6b23b" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" }
        ]
      },
      note: "Values are for dry rolled oats; once cooked with water the per-100g figures roughly halve as water is absorbed."
    },
    youtube: null, joints: {}
  },
  {
    id: 102, name: "Sweet Potato", alt: "Orange-fleshed variety",
    desc: "Sweet potato is one of the most nutrient-dense carbohydrate sources available — providing beta-carotene (vitamin A precursor), vitamin C, potassium and manganese alongside complex starch. Despite the name it ranks lower on the glycaemic index than white potato and provides a slower, more sustained glucose release.",
    muscles: [{n:"Complex Carbs",p:true},{n:"Vitamin A",p:true},{n:"Potassium",p:false},{n:"Vitamin C",p:false},{n:"Manganese",p:false}],
    tags: ["vegetable","slow-release","micronutrient","post-workout"],
    diff: 2,
    str: {suit:true,  eff:4, note:"Moderate GI makes it a clean post-workout carb source. Potassium aids muscle contraction."},
    vol: {suit:true,  eff:4, note:"High carb density supports glycogen replenishment in high-volume phases."},
    end: {suit:true,  eff:3, note:"Vitamin A and C support immune function during heavy training blocks."},
    risk: 1, cues: "Roast whole at 200 °C for 45–60 min (or pierce and microwave 8–10 min). Dice and roast 25 min for caramelised edges. Pairs extremely well with chicken, fish or eggs.",
    equipment: "Oven or microwave",
    position: "Post-workout · Lunch · Dinner",
    nutritionProfile: {
      servingLabel: "Amount per 100g baked, with skin",
      calories: 90,
      macros: [
        { key:"protein", label:"Protein", grams:"2.0g", percent:9, kcal:8, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.2g", percent:2, kcal:2, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"20.7g", percent:89, kcal:80, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g baked.",
        items: [
          { label:"Vitamin A", amount:"961 mcg RAE", daily:107, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.7 mg", daily:5, color:"#8f74ff" },
          { label:"Vitamin K", amount:"2.0 mcg", daily:2, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.1 mg", daily:8, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"6 mcg DFE", daily:2, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.8 mg", daily:16, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g baked sweet potato.",
        items: [
          { label:"Calcium", amount:"38 mg", daily:3, color:"#4f8df7" },
          { label:"Iron", amount:"0.7 mg", daily:4, color:"#e26d5a" },
          { label:"Magnesium", amount:"25 mg", daily:6, color:"#4fb66f" },
          { label:"Phosphorus", amount:"54 mg", daily:4, color:"#8f74ff" },
          { label:"Potassium", amount:"475 mg", daily:10, color:"#f6b23b" },
          { label:"Zinc", amount:"0.3 mg", daily:3, color:"#25b9a7" },
          { label:"Selenium", amount:"0.3 mcg", daily:1, color:"#d982d0" },
          { label:"Sodium", amount:"36 mg", daily:2, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Sweet potato is primarily a carbohydrate source — protein content and amino acid contribution are minimal.",
        items: [
          { label:"Leucine", amount:"0.10 g", daily:4, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.07 g", daily:5, color:"#4fb66f" },
          { label:"Valine", amount:"0.10 g", daily:5, color:"#f6b23b" },
          { label:"Lysine", amount:"0.08 g", daily:3, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.05 g", daily:4, color:"#e26d5a" },
          { label:"Threonine", amount:"0.08 g", daily:5, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.03 g", daily:11, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.13 g", daily:5, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"3.3 g", daily:12, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.0 g", daily:4, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"2.3 g", daily:8, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"75.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"36 mg", daily:2, color:"#72a6d8" },
          { label:"Potassium", amount:"475 mg", daily:10, color:"#f6b23b" },
          { label:"Magnesium", amount:"25 mg", daily:6, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key sweet-potato-specific nutrients",
        note: "These are important sweet-potato-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Beta-Carotene", amount:"~11500 mcg", daily:0, color:"#4f8df7" },
          { label:"Vitamin C", amount:"19.6 mg", daily:22, color:"#f6b23b" },
          { label:"Manganese", amount:"0.5 mg", daily:22, color:"#4fb66f" }
        ]
      },
      note: "Beta-carotene content (and vitamin A) is exceptionally high — among the richest sources of any common food."
    },
    youtube: null, joints: {}
  },
  {
    id: 103, name: "White Rice", alt: "Long-grain / jasmine / basmati",
    desc: "White rice is the most widely used post-workout carbohydrate in strength sports for good reason — it digests quickly, spikes insulin to drive nutrients into muscle cells, is practically allergen-free, and pairs with any protein source. Easy to batch-cook and very affordable.",
    muscles: [{n:"Fast-Release Carbs",p:true},{n:"Manganese",p:false}],
    tags: ["grain","fast-release","post-workout","allergen-free"],
    diff: 1,
    str: {suit:true,  eff:4, note:"High GI triggers insulin spike post-workout — ideal window for driving amino acids into muscle."},
    vol: {suit:true,  eff:5, note:"The staple of high-volume eating. Easy to consume large quantities."},
    end: {suit:false, eff:2, note:"Fast-release carbs not ideal for sustained endurance — better before or after, not during."},
    risk: 1, cues: "1 cup rice to 1.5 cups water. Bring to boil, reduce heat, cover and simmer 18 min. Rest 5 min off heat. Batch cook 2–3 cups at once and refrigerate. Day-old rice is ideal for fried rice.",
    equipment: "Pot or rice cooker",
    position: "Post-workout · Any main meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 130,
      macros: [
        { key:"protein", label:"Protein", grams:"2.7g", percent:8, kcal:11, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.3g", percent:2, kcal:3, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"28.2g", percent:90, kcal:116, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.02 mg", daily:2, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"3 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked white rice.",
        items: [
          { label:"Calcium", amount:"3 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0.2 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"12 mg", daily:3, color:"#4fb66f" },
          { label:"Phosphorus", amount:"37 mg", daily:3, color:"#8f74ff" },
          { label:"Potassium", amount:"35 mg", daily:1, color:"#f6b23b" },
          { label:"Zinc", amount:"0.5 mg", daily:5, color:"#25b9a7" },
          { label:"Selenium", amount:"5.0 mcg", daily:9, color:"#d982d0" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "White rice is primarily a carbohydrate source — protein content and amino acid contribution are minimal.",
        items: [
          { label:"Leucine", amount:"0.21 g", daily:8, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.12 g", daily:9, color:"#4fb66f" },
          { label:"Valine", amount:"0.16 g", daily:8, color:"#f6b23b" },
          { label:"Lysine", amount:"0.09 g", daily:3, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.08 g", daily:6, color:"#e26d5a" },
          { label:"Threonine", amount:"0.10 g", daily:7, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.03 g", daily:11, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.24 g", daily:9, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g. White rice has had most of the bran removed.",
        items: [
          { label:"Total Fiber", amount:"0.4 g", daily:1, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.1 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0.3 g", daily:1, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g cooked.",
        items: [
          { label:"Water", amount:"68.4 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"35 mg", daily:1, color:"#f6b23b" },
          { label:"Magnesium", amount:"12 mg", daily:3, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key rice-specific nutrients",
        note: "These are important rice-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Manganese", amount:"0.5 mg", daily:22, color:"#4f8df7" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Glycemic Index", amount:"high", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Many countries fortify white rice with iron and B vitamins — fortified rice can have meaningfully higher values than shown here."
    },
    youtube: null, joints: {}
  },
  {
    id: 104, name: "Banana", alt: "Ripe, medium",
    desc: "Banana is the classic pre-workout fruit for good reason — it provides a combination of fast-digesting fructose and glucose alongside potassium, vitamin B6 and magnesium. The natural sugars fuel immediately available energy while the potassium helps regulate muscle contraction and prevent cramping.",
    muscles: [{n:"Fast Carbs",p:true},{n:"Potassium",p:true},{n:"Vitamin B6",p:false},{n:"Magnesium",p:false}],
    tags: ["fruit","pre-workout","portable","potassium"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Quick energy before a training session. B6 supports protein metabolism."},
    vol: {suit:true,  eff:4, note:"Easy calories between sessions. Pairs well with protein shake or nut butter."},
    end: {suit:true,  eff:4, note:"Potassium prevents cramping in endurance sessions. Quick mid-workout fuel."},
    risk: 1, cues: "The riper the banana, the more sugars have converted from starch — higher GI. A slightly green banana has more resistant starch and lower GI. Freeze overripe bananas for smoothies.",
    equipment: "None — ready to eat",
    position: "Pre-workout · Mid-workout · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g, ripe",
      calories: 89,
      macros: [
        { key:"protein", label:"Protein", grams:"1.1g", percent:5, kcal:4, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.3g", percent:3, kcal:3, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"22.8g", percent:92, kcal:82, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g.",
        items: [
          { label:"Vitamin A", amount:"3 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.1 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.5 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.07 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"20 mcg DFE", daily:5, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g banana.",
        items: [
          { label:"Calcium", amount:"5 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0.3 mg", daily:2, color:"#e26d5a" },
          { label:"Magnesium", amount:"27 mg", daily:6, color:"#4fb66f" },
          { label:"Phosphorus", amount:"22 mg", daily:2, color:"#8f74ff" },
          { label:"Potassium", amount:"358 mg", daily:8, color:"#f6b23b" },
          { label:"Zinc", amount:"0.2 mg", daily:2, color:"#25b9a7" },
          { label:"Selenium", amount:"1.0 mcg", daily:2, color:"#d982d0" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Banana is primarily a carbohydrate source — protein content and amino acid contribution are minimal.",
        items: [
          { label:"Leucine", amount:"0.06 g", daily:2, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.03 g", daily:2, color:"#4fb66f" },
          { label:"Valine", amount:"0.05 g", daily:2, color:"#f6b23b" },
          { label:"Lysine", amount:"0.05 g", daily:2, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.02 g", daily:1, color:"#e26d5a" },
          { label:"Threonine", amount:"0.03 g", daily:2, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.01 g", daily:4, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.07 g", daily:3, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"2.6 g", daily:9, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.8 g", daily:3, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.8 g", daily:6, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"75.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"358 mg", daily:8, color:"#f6b23b" },
          { label:"Magnesium", amount:"27 mg", daily:6, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key banana-specific nutrients",
        note: "These are important banana-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Vitamin B6", amount:"0.4 mg", daily:24, color:"#4f8df7" },
          { label:"Resistant Starch (green)", amount:"higher when unripe", daily:0, color:"#f6b23b" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" }
        ]
      },
      note: "Ripeness changes the sugar/starch ratio significantly — greener bananas have more resistant starch and a lower glycemic index."
    },
    youtube: null, joints: {}
  },
  {
    id: 105, name: "Quinoa", alt: "White / tri-colour",
    desc: "Quinoa is technically a seed, not a grain, and stands apart from other carbohydrate sources by providing a complete protein profile alongside its starch content. With ~8 g protein and 39 g carbs per 185 g cooked serving, it is the only carbohydrate source that qualifies as a substantial protein contributor — genuinely useful for plant-based athletes.",
    muscles: [{n:"Complete Protein",p:true},{n:"Complex Carbs",p:true},{n:"Iron",p:false},{n:"Magnesium",p:false},{n:"Manganese",p:false}],
    tags: ["grain","complete","plant","gluten-free","slow-release"],
    diff: 2,
    str: {suit:true,  eff:4, note:"Rare dual carb + complete protein source. Particularly useful in plant-based diets."},
    vol: {suit:true,  eff:4, note:"Versatile base food. Works hot or cold in salads."},
    end: {suit:true,  eff:4, note:"Gluten-free and gut-friendly. Lower GI than white rice."},
    risk: 1, cues: "Rinse thoroughly before cooking to remove bitter saponins. Simmer 1 cup quinoa in 2 cups water 15 min, then rest 5 min covered. Fluff with fork. Pre-cooked pouches are a convenient alternative.",
    equipment: "Pot",
    position: "Any main meal · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 120,
      macros: [
        { key:"protein", label:"Protein", grams:"4.4g", percent:15, kcal:18, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1.9g", percent:14, kcal:17, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"21.3g", percent:71, kcal:85, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"1 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.6 mg", daily:4, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.11 mg", daily:8, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"42 mcg DFE", daily:11, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.2 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked quinoa.",
        items: [
          { label:"Calcium", amount:"17 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"1.5 mg", daily:8, color:"#e26d5a" },
          { label:"Magnesium", amount:"64 mg", daily:15, color:"#4fb66f" },
          { label:"Phosphorus", amount:"152 mg", daily:12, color:"#8f74ff" },
          { label:"Potassium", amount:"172 mg", daily:4, color:"#f6b23b" },
          { label:"Zinc", amount:"1.1 mg", daily:10, color:"#25b9a7" },
          { label:"Selenium", amount:"2.8 mcg", daily:5, color:"#d982d0" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Quinoa is one of the few plant carb sources with a genuinely complete amino acid profile.",
        items: [
          { label:"Leucine", amount:"0.30 g", daily:12, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.17 g", daily:12, color:"#4fb66f" },
          { label:"Valine", amount:"0.20 g", daily:10, color:"#f6b23b" },
          { label:"Lysine", amount:"0.24 g", daily:9, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.13 g", daily:9, color:"#e26d5a" },
          { label:"Threonine", amount:"0.13 g", daily:9, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.06 g", daily:21, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.34 g", daily:12, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"2.8 g", daily:10, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.6 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"2.2 g", daily:8, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g cooked.",
        items: [
          { label:"Water", amount:"72.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"172 mg", daily:4, color:"#f6b23b" },
          { label:"Magnesium", amount:"64 mg", daily:15, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key quinoa-specific nutrients",
        note: "These are important quinoa-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Manganese", amount:"0.6 mg", daily:26, color:"#4f8df7" },
          { label:"Saponins (raw, pre-rinse)", amount:"removed by rinsing", daily:0, color:"#f6b23b" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" }
        ]
      },
      note: "Quinoa is botanically a seed, not a grain, which is partly why its amino acid profile differs favourably from true cereal grains."
    },
    youtube: null, joints: {}
  },
  {
    id: 106, name: "Brown Rice", alt: "Long-grain whole grain",
    desc: "Brown rice retains the bran and germ layers that white rice has removed — providing more fibre, magnesium, phosphorus, B vitamins and antioxidants at the cost of slightly longer cooking time and a nuttier, chewier texture. The higher fibre content lowers the GI compared to white rice, making it a better choice outside of the immediate post-workout window.",
    muscles: [{n:"Complex Carbs",p:true},{n:"Magnesium",p:true},{n:"Fibre",p:false},{n:"Phosphorus",p:false},{n:"B Vitamins",p:false}],
    tags: ["grain","slow-release","fibre","whole-grain","vegan"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Magnesium supports muscle contraction and ATP production. Slower release than white rice — better before training."},
    vol: {suit:true,  eff:4, note:"High carb density for fuelling volume phases. Fibre supports gut health under heavy training load."},
    end: {suit:true,  eff:4, note:"Slower GI release sustains energy for longer training sessions. High micronutrient density."},
    risk: 1, cues: "Use 1 cup rice to 2 cups water. Bring to boil, simmer covered 35–40 min. Rest 10 min. Brown rice has a shorter shelf life than white when cooked — refrigerate within 2 hours and consume within 3 days.",
    equipment: "Pot or rice cooker",
    position: "Any main meal · Pre-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 123,
      macros: [
        { key:"protein", label:"Protein", grams:"2.7g", percent:9, kcal:11, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1.0g", percent:7, kcal:9, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"25.6g", percent:83, kcal:103, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.2 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.02 mg", daily:2, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"4 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked brown rice.",
        items: [
          { label:"Calcium", amount:"10 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.4 mg", daily:2, color:"#e26d5a" },
          { label:"Magnesium", amount:"43 mg", daily:10, color:"#4fb66f" },
          { label:"Phosphorus", amount:"83 mg", daily:7, color:"#8f74ff" },
          { label:"Potassium", amount:"79 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"0.6 mg", daily:5, color:"#25b9a7" },
          { label:"Selenium", amount:"9.8 mcg", daily:18, color:"#d982d0" },
          { label:"Sodium", amount:"4 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Brown rice is primarily a carbohydrate source with modest protein, slightly more complete than white rice due to the retained bran.",
        items: [
          { label:"Leucine", amount:"0.21 g", daily:8, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.12 g", daily:9, color:"#4fb66f" },
          { label:"Valine", amount:"0.16 g", daily:8, color:"#f6b23b" },
          { label:"Lysine", amount:"0.10 g", daily:4, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.08 g", daily:6, color:"#e26d5a" },
          { label:"Threonine", amount:"0.10 g", daily:7, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.03 g", daily:11, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.24 g", daily:9, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"1.8 g", daily:6, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.4 g", daily:1, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.4 g", daily:5, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g cooked.",
        items: [
          { label:"Water", amount:"70.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"4 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"79 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"43 mg", daily:10, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key brown-rice-specific nutrients",
        note: "These are important brown-rice-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Manganese", amount:"1.1 mg", daily:48, color:"#4f8df7" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Glycemic Index", amount:"moderate (lower than white rice)", daily:0, color:"#f6b23b" }
        ]
      },
      note: "The retained bran and germ give brown rice meaningfully more fibre and micronutrients than white rice, at the cost of a shorter shelf life when cooked."
    },
    youtube: null, joints: {}
  },
  {
    id: 107, name: "Whole Wheat Pasta", alt: "Penne / spaghetti / fusilli",
    desc: "Whole wheat pasta retains the bran and germ of the wheat kernel, delivering significantly more fibre, protein (7–8 g per 80 g dry), magnesium and B vitamins than white pasta. It has a meaningfully lower GI than regular pasta and a richer, slightly nutty flavour. An excellent backbone carbohydrate for athletes who cook in large batches.",
    muscles: [{n:"Complex Carbs",p:true},{n:"Fibre",p:true},{n:"Protein",p:false},{n:"Iron",p:false},{n:"Magnesium",p:false}],
    tags: ["grain","slow-release","fibre","whole-grain","batch-cook"],
    diff: 1,
    str: {suit:true,  eff:4, note:"High carb load with meaningful protein and magnesium. Batch cook with a lean protein for a complete meal."},
    vol: {suit:true,  eff:5, note:"The staple of high-volume eating phases. High calorie density without excessive fat."},
    end: {suit:true,  eff:4, note:"Lower GI than white pasta. Sustained energy release for endurance sessions."},
    risk: 3, cues: "Cook al dente (1 min less than packet time) — lower GI than soft-cooked pasta. Salt the water well. Whole wheat pasta takes slightly longer to cook and benefits from a more robust sauce. Not suitable for coeliac or gluten-intolerant individuals.",
    equipment: "Pot",
    position: "Pre-workout · Lunch · Dinner",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 124,
      macros: [
        { key:"protein", label:"Protein", grams:"5.3g", percent:17, kcal:21, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.6g", percent:4, kcal:5, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"26.5g", percent:79, kcal:98, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.6 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.05 mg", daily:4, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"8 mcg DFE", daily:2, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.2 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked whole wheat pasta.",
        items: [
          { label:"Calcium", amount:"15 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"1.0 mg", daily:6, color:"#e26d5a" },
          { label:"Magnesium", amount:"36 mg", daily:9, color:"#4fb66f" },
          { label:"Phosphorus", amount:"110 mg", daily:9, color:"#8f74ff" },
          { label:"Potassium", amount:"81 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"1.0 mg", daily:9, color:"#25b9a7" },
          { label:"Selenium", amount:"24.0 mcg", daily:44, color:"#d982d0" },
          { label:"Sodium", amount:"3 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Whole wheat pasta has more protein than refined pasta but is still not a complete protein — low in lysine.",
        items: [
          { label:"Leucine", amount:"0.35 g", daily:14, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.19 g", daily:14, color:"#4fb66f" },
          { label:"Valine", amount:"0.24 g", daily:11, color:"#f6b23b" },
          { label:"Lysine", amount:"0.15 g", daily:6, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.18 g", daily:13, color:"#e26d5a" },
          { label:"Threonine", amount:"0.16 g", daily:11, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.06 g", daily:21, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.46 g", daily:17, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"3.9 g", daily:14, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.9 g", daily:3, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"3.0 g", daily:11, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g cooked.",
        items: [
          { label:"Water", amount:"65.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"3 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"81 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"36 mg", daily:9, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key whole-wheat-pasta-specific nutrients",
        note: "These are important whole-wheat-pasta-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Manganese", amount:"0.9 mg", daily:39, color:"#4f8df7" },
          { label:"Cholesterol", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Glycemic Index", amount:"lower than refined pasta", daily:0, color:"#f6b23b" }
        ]
      },
      note: "Contains gluten — not suitable for coeliac or gluten-intolerant individuals."
    },
    youtube: null, joints: {}
  },
  {
    id: 108, name: "White Potato", alt: "Roasting / jacket / mashed",
    desc: "White potatoes are one of the most satiating foods ever measured — ranking highest on the satiety index of any tested food. They provide rapidly available carbohydrates post-workout alongside potassium, vitamin C and B6. Cooling cooked potatoes increases their resistant starch content, lowering the GI and feeding beneficial gut bacteria.",
    muscles: [{n:"Fast Carbs",p:true},{n:"Potassium",p:true},{n:"Vitamin C",p:false},{n:"B6",p:false},{n:"Resistant Starch",p:false}],
    tags: ["vegetable","post-workout","potassium","satiety","versatile"],
    diff: 2,
    str: {suit:true,  eff:4, note:"High potassium aids muscle contraction. Fast-release carbs support post-workout glycogen replenishment."},
    vol: {suit:true,  eff:5, note:"Most satiating carbohydrate food tested. High calorie density makes bulking efficient."},
    end: {suit:true,  eff:3, note:"Cooling potatoes creates resistant starch — better for body composition and gut bacteria."},
    risk: 1, cues: "Jacket: pierce, microwave 8–10 min or bake 200 °C 50–60 min. Boil 20 min, mash with a little butter or olive oil. Roast wedges: 200 °C 35–40 min. Avoid frying — adds excessive fat. Eat skin-on for maximum fibre and nutrients.",
    equipment: "Oven · Microwave · Pot",
    position: "Post-workout · Lunch · Dinner",
    nutritionProfile: {
      servingLabel: "Amount per 100g baked, with skin",
      calories: 93,
      macros: [
        { key:"protein", label:"Protein", grams:"2.5g", percent:11, kcal:10, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.1g", percent:1, kcal:1, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"21.1g", percent:88, kcal:82, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g baked with skin.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"2.0 mcg", daily:2, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.03 mg", daily:2, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"12 mcg DFE", daily:3, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.6 mg", daily:12, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g baked potato with skin.",
        items: [
          { label:"Calcium", amount:"11 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"1.1 mg", daily:6, color:"#e26d5a" },
          { label:"Magnesium", amount:"28 mg", daily:7, color:"#4fb66f" },
          { label:"Phosphorus", amount:"61 mg", daily:5, color:"#8f74ff" },
          { label:"Potassium", amount:"535 mg", daily:11, color:"#f6b23b" },
          { label:"Zinc", amount:"0.4 mg", daily:4, color:"#25b9a7" },
          { label:"Selenium", amount:"0.5 mcg", daily:1, color:"#d982d0" },
          { label:"Sodium", amount:"6 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "White potato is primarily a carbohydrate source — protein content and amino acid contribution are minimal.",
        items: [
          { label:"Leucine", amount:"0.13 g", daily:5, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.10 g", daily:7, color:"#4fb66f" },
          { label:"Valine", amount:"0.13 g", daily:6, color:"#f6b23b" },
          { label:"Lysine", amount:"0.13 g", daily:5, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.04 g", daily:3, color:"#e26d5a" },
          { label:"Threonine", amount:"0.10 g", daily:7, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.03 g", daily:11, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.18 g", daily:6, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"2.2 g", daily:8, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.6 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.6 g", daily:6, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"75.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"6 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"535 mg", daily:11, color:"#f6b23b" },
          { label:"Magnesium", amount:"28 mg", daily:7, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key potato-specific nutrients",
        note: "These are important potato-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Vitamin C", amount:"13.0 mg", daily:14, color:"#4f8df7" },
          { label:"Vitamin B6", amount:"0.3 mg", daily:18, color:"#f6b23b" },
          { label:"Resistant Starch (cooled)", amount:"increases after refrigeration", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Potatoes consistently rank highest on the satiety index of any tested food — cooling cooked potatoes increases resistant starch and lowers the GI."
    },
    youtube: null, joints: {}
  },
  {
    id: 109, name: "Dates (Medjool)", alt: "Fresh or dried",
    desc: "Dates are one of the most effective natural fast-energy foods for training — providing a dense source of glucose and fructose alongside potassium, magnesium and B vitamins. Medjool dates are soft, caramel-flavoured and require no preparation. A small number (2–3 dates) provides a meaningful pre-workout energy dose and is easier on the stomach than many gels.",
    muscles: [{n:"Fast Sugars",p:true},{n:"Potassium",p:true},{n:"Magnesium",p:false},{n:"Fibre",p:false},{n:"B Vitamins",p:false}],
    tags: ["fruit","fast-release","pre-workout","natural-sugar","portable"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Quick energy before heavy sessions. Potassium and magnesium reduce cramping."},
    vol: {suit:true,  eff:4, note:"Calorie-dense — easy way to add carbs in a bulk phase."},
    end: {suit:true,  eff:5, note:"Natural pre-workout or mid-workout fuel. Easier on the gut than processed gels. Potassium replenishes electrolytes."},
    risk: 1, cues: "Remove the pit before eating. Pair with nut butter for a protein + carb snack. Blend into smoothies or energy balls. Very high sugar — 2–3 dates pre-workout is the practical dose. Store in an airtight container to keep soft.",
    equipment: "None — ready to eat",
    position: "Pre-workout · Mid-workout · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g, pitted",
      calories: 277,
      macros: [
        { key:"protein", label:"Protein", grams:"1.8g", percent:3, kcal:7, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.2g", percent:1, kcal:2, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"75.0g", percent:96, kcal:268, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g pitted dates.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.1 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"2.7 mcg", daily:2, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.05 mg", daily:4, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"15 mcg DFE", daily:4, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.8 mg", daily:16, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g pitted Medjool dates.",
        items: [
          { label:"Calcium", amount:"64 mg", daily:5, color:"#4f8df7" },
          { label:"Iron", amount:"0.9 mg", daily:5, color:"#e26d5a" },
          { label:"Magnesium", amount:"54 mg", daily:13, color:"#4fb66f" },
          { label:"Phosphorus", amount:"62 mg", daily:5, color:"#8f74ff" },
          { label:"Potassium", amount:"696 mg", daily:15, color:"#f6b23b" },
          { label:"Zinc", amount:"0.4 mg", daily:4, color:"#25b9a7" },
          { label:"Selenium", amount:"3.0 mcg", daily:5, color:"#d982d0" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Dates are primarily a carbohydrate source — protein content and amino acid contribution are minimal.",
        items: [
          { label:"Leucine", amount:"0.09 g", daily:4, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.07 g", daily:5, color:"#4fb66f" },
          { label:"Valine", amount:"0.09 g", daily:4, color:"#f6b23b" },
          { label:"Lysine", amount:"0.09 g", daily:4, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.03 g", daily:2, color:"#e26d5a" },
          { label:"Threonine", amount:"0.07 g", daily:5, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.02 g", daily:8, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.13 g", daily:4, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"6.7 g", daily:24, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.4 g", daily:5, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"5.3 g", daily:19, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"21.3 g", daily:1, color:"#4f8df7" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"696 mg", daily:15, color:"#f6b23b" },
          { label:"Magnesium", amount:"54 mg", daily:13, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key date-specific nutrients",
        note: "These are important date-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Vitamin B6", amount:"0.2 mg", daily:15, color:"#f6b23b" },
          { label:"Copper", amount:"0.4 mg", daily:40, color:"#4fb66f" },
          { label:"Manganese", amount:"0.3 mg", daily:13, color:"#8f74ff" }
        ]
      },
      note: "Values are for Medjool dates — the most common fresh/soft variety. Deglet Noor dates are drier and slightly lower in sugar by weight."
    },
    youtube: null, joints: {}
  },
  {
    id: 110, name: "Blueberries", alt: "Fresh or frozen",
    desc: "Blueberries have the highest antioxidant content of any commonly consumed fruit — rich in anthocyanins that reduce oxidative stress from exercise. Research specifically shows they accelerate muscle recovery, reduce post-exercise inflammation and may improve insulin sensitivity. Frozen blueberries are just as nutritious as fresh and significantly cheaper year-round.",
    muscles: [{n:"Antioxidants",p:true},{n:"Vitamin C",p:true},{n:"Fibre",p:false},{n:"Manganese",p:false},{n:"Fast Carbs",p:false}],
    tags: ["fruit","antioxidant","anti-inflammatory","recovery","low-GI"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Antioxidants support recovery between strength sessions. Low calorie density."},
    vol: {suit:true,  eff:4, note:"Reduce DOMS via anti-inflammatory anthocyanins. Add to yoghurt, oats or shakes."},
    end: {suit:true,  eff:5, note:"Strongest evidence of any fruit for reducing exercise-induced muscle damage and accelerating recovery."},
    risk: 1, cues: "No prep needed. Add frozen to smoothies straight from the freezer. Mix into yoghurt or oats. Anthocyanins are most concentrated in the skin — don't peel. Consume regularly for cumulative anti-inflammatory benefits.",
    equipment: "None — ready to eat",
    position: "Post-workout · Breakfast · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g, fresh",
      calories: 57,
      macros: [
        { key:"protein", label:"Protein", grams:"0.7g", percent:5, kcal:3, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.3g", percent:5, kcal:3, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"14.5g", percent:90, kcal:51, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g fresh blueberries.",
        items: [
          { label:"Vitamin A", amount:"3 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.6 mg", daily:4, color:"#8f74ff" },
          { label:"Vitamin K", amount:"19.3 mcg", daily:16, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.04 mg", daily:3, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"6 mcg DFE", daily:2, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.1 mg", daily:2, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g fresh blueberries.",
        items: [
          { label:"Calcium", amount:"6 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0.3 mg", daily:2, color:"#e26d5a" },
          { label:"Magnesium", amount:"6 mg", daily:1, color:"#4fb66f" },
          { label:"Phosphorus", amount:"12 mg", daily:1, color:"#8f74ff" },
          { label:"Potassium", amount:"77 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"0.2 mg", daily:1, color:"#25b9a7" },
          { label:"Selenium", amount:"0.1 mcg", daily:0, color:"#d982d0" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Blueberries are primarily a carbohydrate source — protein content and amino acid contribution are minimal.",
        items: [
          { label:"Leucine", amount:"0.04 g", daily:1, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.03 g", daily:2, color:"#4fb66f" },
          { label:"Valine", amount:"0.04 g", daily:2, color:"#f6b23b" },
          { label:"Lysine", amount:"0.04 g", daily:1, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.01 g", daily:1, color:"#e26d5a" },
          { label:"Threonine", amount:"0.03 g", daily:2, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.01 g", daily:3, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.05 g", daily:2, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"2.4 g", daily:9, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.5 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.9 g", daily:7, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"84.0 g", daily:4, color:"#4f8df7" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"77 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"6 mg", daily:1, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key blueberry-specific nutrients",
        note: "These are important blueberry-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Vitamin C", amount:"9.7 mg", daily:11, color:"#4f8df7" },
          { label:"Manganese", amount:"0.3 mg", daily:15, color:"#8f74ff" },
          { label:"Anthocyanins", amount:"highest of any common fruit", daily:0, color:"#d982d0" }
        ]
      },
      note: "Values are approximate and apply equally to fresh and frozen blueberries — freezing does not meaningfully reduce nutrient content."
    },
    youtube: null, joints: {}
  },
  {
    id: 111, name: "Whole Grain Bread", alt: "Sourdough / seeded / sprouted",
    desc: "Whole grain bread provides a convenient and highly portable carbohydrate source with significantly more fibre, B vitamins and minerals than white bread. Sourdough fermentation reduces the GI further and improves the bioavailability of minerals by reducing phytic acid. The combination of whole grains and fibre supports gut microbiome health, which is increasingly linked to athletic recovery.",
    muscles: [{n:"Complex Carbs",p:true},{n:"Fibre",p:true},{n:"B Vitamins",p:false},{n:"Iron",p:false},{n:"Zinc",p:false}],
    tags: ["grain","slow-release","fibre","portable","convenient"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Convenient pre-workout carb source. Pair with eggs or nut butter for protein."},
    vol: {suit:true,  eff:4, note:"Easy to eat large quantities during bulk phases. Sourdough improves mineral absorption."},
    end: {suit:true,  eff:4, note:"Lower GI than white bread. Supports gut health and sustained energy."},
    risk: 3, cues: "Choose bread with whole grain as the first listed ingredient. '2g fibre per slice' is the minimum worth buying. Sourdough is the best choice — fermentation reduces GI and improves nutrient bioavailability. Not suitable for coeliac.",
    equipment: "Toaster",
    position: "Breakfast · Pre-workout · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g (≈ 2–3 slices)",
      calories: 252,
      macros: [
        { key:"protein", label:"Protein", grams:"9.0g", percent:14, kcal:36, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"3.5g", percent:13, kcal:32, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"42.0g", percent:73, kcal:184, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g whole grain bread.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.3 mg", daily:2, color:"#8f74ff" },
          { label:"Vitamin K", amount:"1.0 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.15 mg", daily:12, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"40 mcg DFE", daily:10, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:5, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g whole grain bread.",
        items: [
          { label:"Calcium", amount:"100 mg", daily:8, color:"#4f8df7" },
          { label:"Iron", amount:"2.5 mg", daily:14, color:"#e26d5a" },
          { label:"Magnesium", amount:"55 mg", daily:13, color:"#4fb66f" },
          { label:"Phosphorus", amount:"180 mg", daily:14, color:"#8f74ff" },
          { label:"Potassium", amount:"200 mg", daily:4, color:"#f6b23b" },
          { label:"Zinc", amount:"1.2 mg", daily:11, color:"#25b9a7" },
          { label:"Selenium", amount:"25 mcg", daily:45, color:"#d982d0" },
          { label:"Sodium", amount:"430 mg", daily:19, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Wheat protein is lysine-limited — pairing bread with a lysine-rich food (eggs, dairy, legumes) completes the amino acid profile.",
        items: [
          { label:"Leucine", amount:"0.61 g", daily:24, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.31 g", daily:22, color:"#4fb66f" },
          { label:"Valine", amount:"0.40 g", daily:18, color:"#f6b23b" },
          { label:"Lysine", amount:"0.18 g", daily:7, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.31 g", daily:24, color:"#e26d5a" },
          { label:"Threonine", amount:"0.25 g", daily:18, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.11 g", daily:40, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.70 g", daily:23, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"7.0 g", daily:25, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.5 g", daily:5, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"5.5 g", daily:20, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"38.0 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"430 mg", daily:19, color:"#72a6d8" },
          { label:"Potassium", amount:"200 mg", daily:4, color:"#f6b23b" },
          { label:"Magnesium", amount:"55 mg", daily:13, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key bread-specific nutrients",
        note: "These are important bread-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Manganese", amount:"1.5 mg", daily:65, color:"#8f74ff" },
          { label:"Thiamine B1", amount:"0.3 mg", daily:25, color:"#f6b23b" },
          { label:"Phytic Acid", amount:"reduced via sourdough fermentation", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Whole grain content, fibre and sodium vary significantly between brands — always check that whole grain is the first listed ingredient and compare sodium per slice."
    },
    youtube: null, joints: {}
  },
  {
    id: 112, name: "Rice Cakes", alt: "Plain puffed rice discs",
    desc: "Rice cakes are among the most convenient, calorie-controlled carbohydrate snacks available — approximately 35 kcal per standard cake with minimal fat or protein. Their high GI makes them appropriate as a fast-digesting carbohydrate immediately post-workout. They serve as a neutral vehicle for toppings, making macros very easy to control.",
    muscles: [{n:"Fast-Release Carbs",p:true},{n:"Minimal Fibre",p:false}],
    tags: ["grain","fast-release","low-calorie","portable","post-workout"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Convenient fast carb for the post-workout window. Pair with protein topping."},
    vol: {suit:true,  eff:3, note:"Calorie-controlled vehicle for protein toppings — easy to track macros."},
    end: {suit:false, eff:2, note:"High GI but very low fibre — not ideal for sustained endurance energy."},
    risk: 1, cues: "Best used with protein toppings: cottage cheese, peanut butter, smoked salmon, or turkey slices. Plain rice cakes are almost flavourless — they exist as a delivery vehicle for toppings. Flavoured varieties often contain added sugar and sodium.",
    equipment: "None — ready to eat",
    position: "Post-workout · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g (≈ 11 plain cakes)",
      calories: 389,
      macros: [
        { key:"protein", label:"Protein", grams:"8.0g", percent:8, kcal:32, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"2.8g", percent:6, kcal:25, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"81.0g", percent:86, kcal:332, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g plain puffed rice cakes.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.03 mg", daily:2, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"9 mcg DFE", daily:2, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.6 mg", daily:12, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g plain rice cakes.",
        items: [
          { label:"Calcium", amount:"2 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0.3 mg", daily:2, color:"#e26d5a" },
          { label:"Magnesium", amount:"51 mg", daily:12, color:"#4fb66f" },
          { label:"Phosphorus", amount:"137 mg", daily:11, color:"#8f74ff" },
          { label:"Potassium", amount:"76 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"0.7 mg", daily:6, color:"#25b9a7" },
          { label:"Selenium", amount:"7.5 mcg", daily:14, color:"#d982d0" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Rice protein is mildly lysine-limited — topping rice cakes with a protein source corrects this easily.",
        items: [
          { label:"Leucine", amount:"0.62 g", daily:24, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.30 g", daily:22, color:"#4fb66f" },
          { label:"Valine", amount:"0.46 g", daily:21, color:"#f6b23b" },
          { label:"Lysine", amount:"0.29 g", daily:11, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.28 g", daily:21, color:"#e26d5a" },
          { label:"Threonine", amount:"0.28 g", daily:20, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.09 g", daily:33, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.65 g", daily:22, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"1.3 g", daily:5, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.2 g", daily:1, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.1 g", daily:4, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"4.0 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"76 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"51 mg", daily:12, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key rice cake-specific nutrients",
        note: "These are important rice cake-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Manganese", amount:"1.5 mg", daily:65, color:"#8f74ff" },
          { label:"Niacin B3", amount:"1.8 mg", daily:11, color:"#4fb66f" },
          { label:"Glycemic Index", amount:"~82 (very high)", daily:0, color:"#e26d5a" }
        ]
      },
      note: "Values are for plain, unsalted rice cakes; flavoured and salted varieties carry meaningfully more sodium and sugar."
    },
    youtube: null, joints: {}
  },
  {
    id: 115, name: "Barley (Pearl)", alt: "Hulled or pearled grain",
    desc: "Pearl barley has the highest beta-glucan content of any grain — a soluble fibre with the strongest evidence base for lowering LDL cholesterol, improving insulin sensitivity and sustaining energy. It digests more slowly than virtually any other grain, with a very low GI. An excellent staple carbohydrate for athletes focused on body composition and sustained energy.",
    muscles: [{n:"Complex Carbs",p:true},{n:"Beta-Glucan",p:true},{n:"Fibre",p:true},{n:"Selenium",p:false},{n:"Phosphorus",p:false}],
    tags: ["grain","slow-release","fibre","cholesterol","satiety"],
    diff: 2,
    str: {suit:true,  eff:3, note:"Slow carb release sustains energy through longer training sessions."},
    vol: {suit:true,  eff:3, note:"Very filling — makes it easier to sustain a modest calorie surplus without overeating."},
    end: {suit:true,  eff:5, note:"Lowest GI of any common grain. Beta-glucan supports cardiovascular health in high-mileage athletes."},
    risk: 3, cues: "Not suitable for coeliac (contains gluten). Simmer 1 cup in 3 cups water 30–40 min for pearl, 45–60 min for hulled. Works in soups, stews and risotto-style dishes. Cook in bulk — keeps refrigerated 5 days.",
    equipment: "Pot",
    position: "Lunch · Dinner · Pre-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 123,
      macros: [
        { key:"protein", label:"Protein", grams:"2.3g", percent:7, kcal:9, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.4g", percent:3, kcal:4, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"28.0g", percent:90, kcal:110, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked pearl barley.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.02 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.6 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.06 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"18 mcg DFE", daily:5, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.2 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked pearl barley.",
        items: [
          { label:"Calcium", amount:"11 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"1.3 mg", daily:7, color:"#e26d5a" },
          { label:"Magnesium", amount:"22 mg", daily:5, color:"#4fb66f" },
          { label:"Phosphorus", amount:"54 mg", daily:4, color:"#8f74ff" },
          { label:"Potassium", amount:"93 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"1.1 mg", daily:10, color:"#25b9a7" },
          { label:"Selenium", amount:"14 mcg", daily:25, color:"#d982d0" },
          { label:"Sodium", amount:"3 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Barley protein is modest in quantity and, like most grains, somewhat lysine-limited.",
        items: [
          { label:"Leucine", amount:"0.16 g", daily:6, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.08 g", daily:6, color:"#4fb66f" },
          { label:"Valine", amount:"0.10 g", daily:5, color:"#f6b23b" },
          { label:"Lysine", amount:"0.07 g", daily:3, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.08 g", daily:6, color:"#e26d5a" },
          { label:"Threonine", amount:"0.07 g", daily:5, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.03 g", daily:10, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.17 g", daily:6, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"3.8 g", daily:14, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.6 g", daily:6, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"2.2 g", daily:8, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"69.8 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"3 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"93 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"22 mg", daily:5, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key barley-specific nutrients",
        note: "These are important barley-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Selenium", amount:"14 mcg", daily:25, color:"#d982d0" },
          { label:"Manganese", amount:"0.5 mg", daily:21, color:"#8f74ff" },
          { label:"Beta-Glucan", amount:"~1 g soluble fibre — highest of any grain", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Hulled barley retains the bran layer and carries slightly more fibre and minerals than pearled barley, which has had the outer layers polished away."
    },
    youtube: null, joints: {}
  },
  {
    id: 116, name: "Honey / Maple Syrup", alt: "Raw honey / 100% maple syrup",
    desc: "Honey and maple syrup are fast-digesting natural carbohydrate sources used by athletes as pre-workout energy or post-workout glycogen replenishment. Honey provides fructose and glucose in a near 1:1 ratio, closely matching the optimal carbohydrate blend for rapid glycogen synthesis. Raw honey additionally contains propolis, enzymes and antioxidant compounds absent in processed versions.",
    muscles: [{n:"Fast Sugars",p:true},{n:"Antioxidants",p:false},{n:"Potassium",p:false},{n:"Manganese",p:false}],
    tags: ["sweetener","fast-release","pre-workout","natural-sugar","portable"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Quick energy before training. Mix into a pre-workout shake or spread on toast."},
    vol: {suit:true,  eff:3, note:"Easy calorie-dense addition to oats, yoghurt and shakes in a bulk phase."},
    end: {suit:true,  eff:5, note:"1:1 glucose-to-fructose ratio ideal for glycogen replenishment. Used by endurance athletes as a natural gel alternative."},
    risk: 2, cues: "1 tablespoon honey = ~64 kcal and 17 g carbs. Raw honey has additional enzymes and antimicrobial properties. Maple syrup provides manganese and zinc. Both are still concentrated sugars — portion control matters outside of training windows.",
    equipment: "None — ready to use",
    position: "Pre-workout · Post-workout · Added to meals",
    nutritionProfile: {
      servingLabel: "Amount per 100g, raw honey",
      calories: 304,
      macros: [
        { key:"protein", label:"Protein", grams:"0.3g", percent:0, kcal:1, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0g", percent:0, kcal:0, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"82.4g", percent:100, kcal:303, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g raw honey.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.04 mg", daily:3, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.1 mg", daily:2, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g raw honey.",
        items: [
          { label:"Calcium", amount:"6 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0.4 mg", daily:2, color:"#e26d5a" },
          { label:"Magnesium", amount:"2 mg", daily:0, color:"#4fb66f" },
          { label:"Phosphorus", amount:"4 mg", daily:0, color:"#8f74ff" },
          { label:"Potassium", amount:"52 mg", daily:1, color:"#f6b23b" },
          { label:"Zinc", amount:"0.2 mg", daily:2, color:"#25b9a7" },
          { label:"Selenium", amount:"0.8 mcg", daily:1, color:"#d982d0" },
          { label:"Sodium", amount:"4 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Honey contains negligible protein — amino acid contribution is not nutritionally meaningful.",
        items: [
          { label:"Leucine", amount:"0.02 g", daily:1, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.01 g", daily:1, color:"#4fb66f" },
          { label:"Valine", amount:"0.02 g", daily:1, color:"#f6b23b" },
          { label:"Lysine", amount:"0.02 g", daily:1, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.00 g", daily:0, color:"#e26d5a" },
          { label:"Threonine", amount:"0.01 g", daily:1, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.00 g", daily:1, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.02 g", daily:1, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Honey and maple syrup contain negligible dietary fibre.",
        items: [
          { label:"Total Fiber", amount:"0.2 g", daily:1, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.1 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0.1 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"17.1 g", daily:1, color:"#4f8df7" },
          { label:"Sodium", amount:"4 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"52 mg", daily:1, color:"#f6b23b" },
          { label:"Magnesium", amount:"2 mg", daily:0, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key sweetener-specific nutrients",
        note: "These are important sweetener-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Antioxidants", amount:"propolis and enzymes (raw, unpasteurised only)", daily:0, color:"#d982d0" },
          { label:"Manganese (maple syrup)", amount:"~33% DV per tbsp — far higher than honey", daily:0, color:"#8f74ff" },
          { label:"Glycemic Index", amount:"~58 (honey), ~54 (maple syrup)", daily:0, color:"#e26d5a" }
        ]
      },
      note: "Values above are for raw honey. Maple syrup has a similar calorie and sugar profile but is meaningfully richer in manganese and zinc — one tablespoon provides roughly a third of daily manganese needs."
    },
    youtube: null, joints: {}
  },
  {
    id: 117, name: "Apple", alt: "Any variety",
    desc: "Apples provide a practical, portable low-GI carbohydrate source — the pectin fibre slows glucose absorption significantly, making them one of the best-tolerated fruits for sustained energy. They are rich in quercetin, an antioxidant with evidence for improving VO2 max and lung function, and catechins that support cardiovascular health.",
    muscles: [{n:"Slow Carbs",p:true},{n:"Quercetin",p:true},{n:"Fibre",p:true},{n:"Vitamin C",p:false}],
    tags: ["fruit","slow-release","portable","antioxidant","fibre"],
    diff: 1,
    str: {suit:true,  eff:2, note:"Quercetin has modest evidence for reducing muscle fatigue. Convenient pre-workout snack."},
    vol: {suit:true,  eff:2, note:"Low calorie density — useful for body composition phases."},
    end: {suit:true,  eff:4, note:"Quercetin improves endurance performance in studies. Pectin fibre sustains energy release."},
    risk: 1, cues: "Eat with the skin — most of the quercetin and fibre is concentrated there. A medium apple pre-workout is a practical, stomach-friendly energy source. Pairs well with nut butter for a protein + carb snack. Good variety to experiment with.",
    equipment: "None — ready to eat",
    position: "Pre-workout · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g, with skin",
      calories: 52,
      macros: [
        { key:"protein", label:"Protein", grams:"0.3g", percent:2, kcal:1, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.2g", percent:4, kcal:2, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"13.8g", percent:94, kcal:49, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g apple with skin.",
        items: [
          { label:"Vitamin A", amount:"3 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"2.2 mcg", daily:2, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.03 mg", daily:2, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"3 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.1 mg", daily:1, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g apple with skin.",
        items: [
          { label:"Calcium", amount:"6 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0.1 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"5 mg", daily:1, color:"#4fb66f" },
          { label:"Phosphorus", amount:"11 mg", daily:1, color:"#8f74ff" },
          { label:"Potassium", amount:"107 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"0.04 mg", daily:0, color:"#25b9a7" },
          { label:"Selenium", amount:"0 mcg", daily:0, color:"#d982d0" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Apples are primarily a carbohydrate source — protein content and amino acid contribution are minimal.",
        items: [
          { label:"Leucine", amount:"0.01 g", daily:1, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.01 g", daily:1, color:"#4fb66f" },
          { label:"Valine", amount:"0.01 g", daily:1, color:"#f6b23b" },
          { label:"Lysine", amount:"0.01 g", daily:1, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.00 g", daily:0, color:"#e26d5a" },
          { label:"Threonine", amount:"0.01 g", daily:1, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.00 g", daily:1, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.02 g", daily:1, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"2.4 g", daily:9, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.0 g", daily:4, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.4 g", daily:5, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"85.6 g", daily:4, color:"#4f8df7" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"107 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"5 mg", daily:1, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key apple-specific nutrients",
        note: "These are important apple-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Vitamin C", amount:"4.6 mg", daily:5, color:"#4f8df7" },
          { label:"Quercetin", amount:"concentrated in the skin", daily:0, color:"#d982d0" },
          { label:"Pectin", amount:"primary soluble fibre — slows glucose absorption", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Values vary modestly by variety. Pectin and quercetin concentration is highest in the skin and just beneath it — peeling discards much of the benefit."
    },
    youtube: null, joints: {}
  },
  {
    id: 118, name: "Orange", alt: "Navel / blood orange",
    desc: "Oranges are an excellent source of vitamin C — one medium orange provides 70 mg (78% of daily value), supporting immune function, collagen synthesis and non-haem iron absorption from plant foods. The natural sugars are accompanied by fibre, making the GI lower than juice. Citrus flavonoids (hesperidin) have evidence for improving blood vessel function and reducing blood pressure.",
    muscles: [{n:"Vitamin C",p:true},{n:"Fast Carbs",p:false},{n:"Folate",p:false},{n:"Potassium",p:false},{n:"Hesperidin",p:false}],
    tags: ["fruit","vitamin-C","immune","portable","fibre"],
    diff: 1,
    str: {suit:true,  eff:2, note:"Vitamin C required for collagen synthesis and joint tissue repair. Enhances iron absorption from plant foods."},
    vol: {suit:true,  eff:2, note:"Low calorie density. Good immune support during heavy training blocks."},
    end: {suit:true,  eff:3, note:"Hesperidin improves blood vessel function. Potassium supports electrolyte balance."},
    risk: 1, cues: "Always eat whole rather than juicing — the fibre significantly lowers the GI. Roll on the counter before cutting to release more juice. Blood oranges have higher anthocyanin content. Choose whole fruit over fruit juice for athletes managing body composition.",
    equipment: "None — ready to eat",
    position: "Snack · Breakfast",
    nutritionProfile: {
      servingLabel: "Amount per 100g, with peel removed",
      calories: 47,
      macros: [
        { key:"protein", label:"Protein", grams:"0.9g", percent:9, kcal:4, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.1g", percent:2, kcal:1, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"11.8g", percent:89, kcal:42, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g peeled orange.",
        items: [
          { label:"Vitamin A", amount:"11 mcg RAE", daily:1, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.04 mg", daily:3, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"30 mcg DFE", daily:8, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:5, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g peeled orange.",
        items: [
          { label:"Calcium", amount:"40 mg", daily:3, color:"#4f8df7" },
          { label:"Iron", amount:"0.1 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"10 mg", daily:2, color:"#4fb66f" },
          { label:"Phosphorus", amount:"14 mg", daily:1, color:"#8f74ff" },
          { label:"Potassium", amount:"181 mg", daily:4, color:"#f6b23b" },
          { label:"Zinc", amount:"0.1 mg", daily:1, color:"#25b9a7" },
          { label:"Selenium", amount:"0.5 mcg", daily:1, color:"#d982d0" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Oranges are primarily a carbohydrate source — protein content and amino acid contribution are minimal.",
        items: [
          { label:"Leucine", amount:"0.05 g", daily:2, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.04 g", daily:3, color:"#4fb66f" },
          { label:"Valine", amount:"0.05 g", daily:2, color:"#f6b23b" },
          { label:"Lysine", amount:"0.05 g", daily:2, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.02 g", daily:1, color:"#e26d5a" },
          { label:"Threonine", amount:"0.04 g", daily:3, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.01 g", daily:4, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.07 g", daily:2, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"2.4 g", daily:9, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.3 g", daily:5, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.1 g", daily:4, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"86.8 g", daily:4, color:"#4f8df7" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"181 mg", daily:4, color:"#f6b23b" },
          { label:"Magnesium", amount:"10 mg", daily:2, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key orange-specific nutrients",
        note: "These are important orange-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Vitamin C", amount:"53.2 mg", daily:59, color:"#4f8df7" },
          { label:"Thiamine B1", amount:"0.09 mg", daily:7, color:"#f6b23b" },
          { label:"Hesperidin", amount:"concentrated in the pith and membranes", daily:0, color:"#d982d0" }
        ]
      },
      note: "Vitamin C and hesperidin are concentrated just beneath the peel and in the white pith — avoid over-peeling for maximum benefit."
    },
    youtube: null, joints: {}
  },
  {
    id: 121, name: "Oat Bran", alt: "Uncooked oat bran",
    desc: "Oat bran is the outer layer of the oat grain, with a higher concentration of beta-glucan fibre and protein than whole rolled oats in the same volume. Just 40 g provides 6 g protein and 4 g beta-glucan — the amount shown to produce meaningful reductions in LDL cholesterol. It dissolves into a smooth, creamy porridge faster than oats and can be stirred into yoghurt or smoothies uncooked.",
    muscles: [{n:"Beta-Glucan",p:true},{n:"Complex Carbs",p:true},{n:"Protein",p:false},{n:"Iron",p:false},{n:"Magnesium",p:false}],
    tags: ["grain","fibre","cholesterol","slow-release","pre-workout"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Higher protein than rolled oats. Good pre-training carb with exceptional fibre content."},
    vol: {suit:true,  eff:4, note:"Easy to add to smoothies, yoghurt or shakes for a fibre boost."},
    end: {suit:true,  eff:5, note:"Beta-glucan improves insulin sensitivity and provides very sustained energy release."},
    risk: 1, cues: "Cook 2:1 liquid to oat bran ratio, 3–5 min — much faster than whole oats. Stir raw into Greek yoghurt for 10 min — it hydrates to a porridge-like texture with no heat. Mix into protein shakes to slow digestion and increase satiety.",
    equipment: "Pot or no heat needed",
    position: "Breakfast · Pre-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g, uncooked",
      calories: 246,
      macros: [
        { key:"protein", label:"Protein", grams:"17.3g", percent:28, kcal:69, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"7.0g", percent:26, kcal:63, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"66.2g", percent:46, kcal:114, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g uncooked oat bran.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.7 mg", daily:5, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.15 mg", daily:12, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"52 mcg DFE", daily:13, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"1.4 mg", daily:27, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g uncooked oat bran.",
        items: [
          { label:"Calcium", amount:"58 mg", daily:4, color:"#4f8df7" },
          { label:"Iron", amount:"5.4 mg", daily:30, color:"#e26d5a" },
          { label:"Magnesium", amount:"235 mg", daily:56, color:"#4fb66f" },
          { label:"Phosphorus", amount:"734 mg", daily:59, color:"#8f74ff" },
          { label:"Potassium", amount:"566 mg", daily:12, color:"#f6b23b" },
          { label:"Zinc", amount:"3.1 mg", daily:28, color:"#25b9a7" },
          { label:"Selenium", amount:"16.9 mcg", daily:31, color:"#d982d0" },
          { label:"Sodium", amount:"4 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Oat protein is unusually well-balanced for a grain, with notably better lysine content than wheat or rice.",
        items: [
          { label:"Leucine", amount:"1.26 g", daily:48, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.69 g", daily:49, color:"#4fb66f" },
          { label:"Valine", amount:"0.88 g", daily:40, color:"#f6b23b" },
          { label:"Lysine", amount:"0.66 g", daily:25, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.69 g", daily:53, color:"#e26d5a" },
          { label:"Threonine", amount:"0.57 g", daily:41, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.22 g", daily:81, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.45 g", daily:48, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"15.4 g", daily:55, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"5.0 g", daily:18, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"10.4 g", daily:37, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"6.6 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"4 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"566 mg", daily:12, color:"#f6b23b" },
          { label:"Magnesium", amount:"235 mg", daily:56, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key oat bran-specific nutrients",
        note: "These are important oat bran-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Manganese", amount:"5.5 mg", daily:239, color:"#8f74ff" },
          { label:"Thiamine B1", amount:"1.1 mg", daily:92, color:"#f6b23b" },
          { label:"Beta-Glucan", amount:"~9 g — concentrated in the outer bran layer", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Oat bran is the concentrated outer layer of the oat grain — roughly 50% more protein, fibre and minerals gram-for-gram than rolled oats."
    },
    youtube: null, joints: {}
  },
  {
    id: 122, name: "Rye Bread / Crispbread", alt: "Dark rye / Wasa crispbread",
    desc: "Rye has the lowest GI of any bread grain — due to pentosans (soluble fibres unique to rye) that form a gel in the gut, dramatically slowing digestion and glucose absorption. Dark rye bread sustains energy for 6–8 hours after eating. Rye crispbreads are shelf-stable, light and extremely convenient, providing a controlled carbohydrate vehicle.",
    muscles: [{n:"Complex Carbs",p:true},{n:"Fibre",p:true},{n:"B Vitamins",p:false},{n:"Iron",p:false},{n:"Manganese",p:false}],
    tags: ["grain","slow-release","fibre","portable","whole-grain"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Very slow carb release — excellent for meals before training later in the day."},
    vol: {suit:true,  eff:3, note:"Convenient and shelf-stable. Easy to portion control."},
    end: {suit:true,  eff:5, note:"Lowest GI of any bread type. Ideal for sustained endurance energy. Reduces mid-session energy crashes."},
    risk: 3, cues: "Not suitable for coeliac. Dark rye has better nutritional profile than light rye — choose bread where rye flour is the first listed ingredient. Top crispbreads with smoked salmon, cottage cheese or nut butter for a complete snack. Keeps for months.",
    equipment: "None — ready to eat",
    position: "Pre-workout (hours before) · Lunch · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g, dark rye bread",
      calories: 259,
      macros: [
        { key:"protein", label:"Protein", grams:"8.5g", percent:13, kcal:34, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"3.3g", percent:12, kcal:30, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"48.3g", percent:75, kcal:195, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g dark rye bread.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.5 mg", daily:3, color:"#8f74ff" },
          { label:"Vitamin K", amount:"2.0 mcg", daily:2, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.18 mg", daily:14, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"81 mcg DFE", daily:20, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g dark rye bread.",
        items: [
          { label:"Calcium", amount:"73 mg", daily:6, color:"#4f8df7" },
          { label:"Iron", amount:"2.8 mg", daily:16, color:"#e26d5a" },
          { label:"Magnesium", amount:"40 mg", daily:10, color:"#4fb66f" },
          { label:"Phosphorus", amount:"143 mg", daily:11, color:"#8f74ff" },
          { label:"Potassium", amount:"166 mg", daily:4, color:"#f6b23b" },
          { label:"Zinc", amount:"1.3 mg", daily:12, color:"#25b9a7" },
          { label:"Selenium", amount:"20 mcg", daily:36, color:"#d982d0" },
          { label:"Sodium", amount:"603 mg", daily:26, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Rye protein is lysine-limited like most cereal grains, though slightly less severely than wheat.",
        items: [
          { label:"Leucine", amount:"0.57 g", daily:22, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.31 g", daily:22, color:"#4fb66f" },
          { label:"Valine", amount:"0.39 g", daily:18, color:"#f6b23b" },
          { label:"Lysine", amount:"0.28 g", daily:11, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.27 g", daily:21, color:"#e26d5a" },
          { label:"Threonine", amount:"0.27 g", daily:19, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.09 g", daily:33, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.65 g", daily:22, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"5.8 g", daily:21, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"2.5 g", daily:9, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"3.3 g", daily:12, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"38.9 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"603 mg", daily:26, color:"#72a6d8" },
          { label:"Potassium", amount:"166 mg", daily:4, color:"#f6b23b" },
          { label:"Magnesium", amount:"40 mg", daily:10, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key rye-specific nutrients",
        note: "These are important rye-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Selenium", amount:"20 mcg", daily:36, color:"#d982d0" },
          { label:"Manganese", amount:"1.6 mg", daily:70, color:"#8f74ff" },
          { label:"Pentosans", amount:"soluble fibre unique to rye — slows digestion via gel formation", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Values are for dark rye bread. Crispbreads (Wasa, Ryvita) are drier and more calorie-dense per 100g but eaten in much thinner portions. Sodium varies significantly by brand — always check the label."
    },
    youtube: null, joints: {}
  },
  {
    id: 123, name: "Corn / Maize", alt: "Sweetcorn / tortillas / polenta",
    desc: "Corn is one of the most widely consumed grains globally and provides moderate-GI carbohydrates, fibre, lutein and zeaxanthin (two carotenoids that specifically protect eye health), vitamin C and folate. As a gluten-free grain it is well-tolerated by most people and appears as sweetcorn, polenta, tortillas, corn tortillas and popcorn in different forms.",
    muscles: [{n:"Complex Carbs",p:true},{n:"Lutein",p:false},{n:"Vitamin C",p:false},{n:"Folate",p:false},{n:"Fibre",p:false}],
    tags: ["grain","gluten-free","versatile","vegan","moderate-release"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Versatile grain. Polenta and tortillas are practical high-carb bases for protein-heavy meals."},
    vol: {suit:true,  eff:4, note:"Easy to consume in large quantities. Corn tortillas and rice are both excellent high-volume bases."},
    end: {suit:true,  eff:3, note:"Lutein and zeaxanthin support long-term eye health — relevant for high screen-time athletes."},
    risk: 1, cues: "Sweetcorn: boil 4–6 min or grill on the cob. Frozen corn: microwave 3 min. Polenta: simmer in 4:1 liquid ratio stirring regularly 20–30 min. Corn tortillas: briefly warm in dry pan. Plain popcorn is a reasonable low-calorie carb snack.",
    equipment: "Pot · Pan · Microwave",
    position: "Any main meal · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g, boiled sweetcorn",
      calories: 96,
      macros: [
        { key:"protein", label:"Protein", grams:"3.4g", percent:14, kcal:14, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1.5g", percent:15, kcal:14, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"21.0g", percent:71, kcal:68, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g boiled sweetcorn.",
        items: [
          { label:"Vitamin A", amount:"9 mcg RAE", daily:1, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.1 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.6 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.06 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"42 mcg DFE", daily:11, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.7 mg", daily:14, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g boiled sweetcorn.",
        items: [
          { label:"Calcium", amount:"2 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0.5 mg", daily:3, color:"#e26d5a" },
          { label:"Magnesium", amount:"26 mg", daily:6, color:"#4fb66f" },
          { label:"Phosphorus", amount:"79 mg", daily:6, color:"#8f74ff" },
          { label:"Potassium", amount:"270 mg", daily:6, color:"#f6b23b" },
          { label:"Zinc", amount:"0.5 mg", daily:5, color:"#25b9a7" },
          { label:"Selenium", amount:"0.6 mcg", daily:1, color:"#d982d0" },
          { label:"Sodium", amount:"15 mg", daily:1, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Corn protein (zein) is unusually low in lysine and tryptophan — a relevant limitation for diets relying heavily on corn as a staple.",
        items: [
          { label:"Leucine", amount:"0.43 g", daily:16, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.13 g", daily:9, color:"#4fb66f" },
          { label:"Valine", amount:"0.17 g", daily:8, color:"#f6b23b" },
          { label:"Lysine", amount:"0.09 g", daily:4, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.13 g", daily:10, color:"#e26d5a" },
          { label:"Threonine", amount:"0.12 g", daily:9, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.02 g", daily:9, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.29 g", daily:10, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"2.4 g", daily:9, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.5 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.9 g", daily:7, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"73.5 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"15 mg", daily:1, color:"#72a6d8" },
          { label:"Potassium", amount:"270 mg", daily:6, color:"#f6b23b" },
          { label:"Magnesium", amount:"26 mg", daily:6, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key corn-specific nutrients",
        note: "These are important corn-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Vitamin C", amount:"6.8 mg", daily:8, color:"#4f8df7" },
          { label:"Lutein + Zeaxanthin", amount:"644 mcg — among the highest of any grain or vegetable", daily:0, color:"#d982d0" },
          { label:"Manganese", amount:"0.16 mg", daily:7, color:"#8f74ff" }
        ]
      },
      note: "Values are for boiled sweetcorn. Polenta, tortillas and popcorn differ meaningfully in moisture, fat and sodium depending on preparation."
    },
    youtube: null, joints: {}
  },
  {
    id: 124, name: "Chickpeas (Carb perspective)", alt: "Boiled / roasted / canned",
    desc: "Chickpeas deserve a dual listing — they appear in protein foods for their amino acid content but from a carbohydrate perspective they are also exceptional: providing 27 g complex carbohydrates per 100 g cooked, with a low GI of approximately 30 due to high resistant starch content. The combination of slow-release carbs and protein in a single food makes chickpeas uniquely self-contained.",
    muscles: [{n:"Complex Carbs",p:true},{n:"Resistant Starch",p:true},{n:"Fibre",p:false},{n:"Iron",p:false},{n:"Folate",p:false}],
    tags: ["legume","slow-release","resistant-starch","vegan","dual-macro"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Resistant starch feeds gut bacteria and improves insulin sensitivity over time."},
    vol: {suit:true,  eff:4, note:"Self-contained carb + protein. Minimal additional food needed to complete a meal."},
    end: {suit:true,  eff:5, note:"GI of ~30 — one of the lowest of any carb source. Ideal for sustained endurance energy."},
    risk: 1, cues: "Cooking increases resistant starch; refrigerating after cooking increases it further. Roasted chickpeas at 200 °C 25–30 min make a crunchy high-protein snack. Hummus preparation: blend cooked chickpeas with tahini, lemon, garlic, olive oil and ice water until silky.",
    equipment: "Oven · Blender · Pot",
    position: "Any main meal · Snack · Pre-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 164,
      macros: [
        { key:"protein", label:"Protein", grams:"8.9g", percent:22, kcal:36, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"2.6g", percent:14, kcal:23, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"27.4g", percent:64, kcal:105, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked chickpeas.",
        items: [
          { label:"Vitamin A", amount:"1 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.4 mg", daily:3, color:"#8f74ff" },
          { label:"Vitamin K", amount:"4.0 mcg", daily:3, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.06 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"172 mcg DFE", daily:43, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked chickpeas.",
        items: [
          { label:"Calcium", amount:"49 mg", daily:4, color:"#4f8df7" },
          { label:"Iron", amount:"2.9 mg", daily:16, color:"#e26d5a" },
          { label:"Magnesium", amount:"48 mg", daily:11, color:"#4fb66f" },
          { label:"Phosphorus", amount:"168 mg", daily:13, color:"#8f74ff" },
          { label:"Potassium", amount:"291 mg", daily:6, color:"#f6b23b" },
          { label:"Zinc", amount:"1.5 mg", daily:14, color:"#25b9a7" },
          { label:"Selenium", amount:"3.7 mcg", daily:7, color:"#d982d0" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid percentages compare estimated content against common adult daily amino acid requirements for a 70 kg adult. Pair with a grain or seed to complete the profile.",
        items: [
          { label:"Leucine", amount:"0.67 g", daily:27, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.38 g", daily:27, color:"#4fb66f" },
          { label:"Valine", amount:"0.40 g", daily:19, color:"#f6b23b" },
          { label:"Lysine", amount:"0.61 g", daily:23, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.20 g", daily:14, color:"#e26d5a" },
          { label:"Threonine", amount:"0.32 g", daily:22, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.09 g", daily:32, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.81 g", daily:29, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"7.6 g", daily:27, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.7 g", daily:6, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"5.9 g", daily:21, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"60.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"291 mg", daily:6, color:"#f6b23b" },
          { label:"Magnesium", amount:"48 mg", daily:11, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key chickpea-specific nutrients",
        note: "These are important chickpea-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Manganese", amount:"1.0 mg", daily:43, color:"#4f8df7" },
          { label:"Resistant Starch", amount:"increases with cooling/refrigeration after cooking", daily:0, color:"#f6b23b" },
          { label:"Glycemic Index", amount:"~28 (low) — among the lowest of any starch source", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Same food as the protein-section chickpea entry — listed here for its carbohydrate profile. Canned chickpeas typically have added sodium unless rinsed; figures above reflect unsalted cooked chickpeas."
    },
    youtube: null, joints: {}
  },
  {
    id: 125, name: "Bagel", alt: "Whole wheat / plain",
    desc: "A standard bagel (100–130 g) contains 50–65 g of carbohydrates — one of the most calorie-dense portable carbohydrate foods available. This makes the bagel a staple pre-competition food and a practical bulking-phase carbohydrate vehicle for athletes who struggle to eat sufficient calories. The high GI drives rapid glycogen replenishment in the post-workout window.",
    muscles: [{n:"Fast-Release Carbs",p:true},{n:"B Vitamins",p:false},{n:"Iron",p:false}],
    tags: ["grain","fast-release","bulk","portable","post-workout"],
    diff: 1,
    str: {suit:true,  eff:4, note:"High carb density for post-workout glycogen loading. Easy to eat even without appetite."},
    vol: {suit:true,  eff:5, note:"High calorie carbohydrate base. With salmon, eggs or nut butter makes a complete meal."},
    end: {suit:true,  eff:3, note:"High GI — best in the post-workout window or the morning of a competition."},
    risk: 3, cues: "Not suitable for coeliac (contains gluten). Whole wheat bagel has significantly more fibre than plain. Toast lightly. Top with protein: cream cheese + smoked salmon, peanut butter, cottage cheese or egg. Pre-competition: plain with honey or jam is simplest.",
    equipment: "Toaster",
    position: "Post-workout · Breakfast · Pre-competition",
    nutritionProfile: {
      servingLabel: "Amount per 100g, whole wheat",
      calories: 250,
      macros: [
        { key:"protein", label:"Protein", grams:"10.0g", percent:16, kcal:40, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1.8g", percent:6, kcal:16, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"48.0g", percent:78, kcal:194, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g whole wheat bagel.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.5 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.25 mg", daily:19, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"100 mcg DFE", daily:25, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.4 mg", daily:8, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g whole wheat bagel.",
        items: [
          { label:"Calcium", amount:"20 mg", daily:2, color:"#4f8df7" },
          { label:"Iron", amount:"2.5 mg", daily:14, color:"#e26d5a" },
          { label:"Magnesium", amount:"40 mg", daily:10, color:"#4fb66f" },
          { label:"Phosphorus", amount:"150 mg", daily:12, color:"#8f74ff" },
          { label:"Potassium", amount:"150 mg", daily:3, color:"#f6b23b" },
          { label:"Zinc", amount:"1.0 mg", daily:9, color:"#25b9a7" },
          { label:"Selenium", amount:"30 mcg", daily:55, color:"#d982d0" },
          { label:"Sodium", amount:"450 mg", daily:20, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Wheat protein is lysine-limited — pairing a bagel with eggs, smoked salmon or dairy completes the amino acid profile.",
        items: [
          { label:"Leucine", amount:"0.68 g", daily:26, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.34 g", daily:24, color:"#4fb66f" },
          { label:"Valine", amount:"0.44 g", daily:20, color:"#f6b23b" },
          { label:"Lysine", amount:"0.20 g", daily:8, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.34 g", daily:26, color:"#e26d5a" },
          { label:"Threonine", amount:"0.28 g", daily:20, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.12 g", daily:44, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.78 g", daily:26, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"4.0 g", daily:14, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.1 g", daily:4, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"2.9 g", daily:10, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"24.0 g", daily:1, color:"#4f8df7" },
          { label:"Sodium", amount:"450 mg", daily:20, color:"#72a6d8" },
          { label:"Potassium", amount:"150 mg", daily:3, color:"#f6b23b" },
          { label:"Magnesium", amount:"40 mg", daily:10, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key bagel-specific nutrients",
        note: "These are important bagel-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Selenium", amount:"30 mcg", daily:55, color:"#d982d0" },
          { label:"Manganese", amount:"1.0 mg", daily:43, color:"#8f74ff" },
          { label:"Niacin B3", amount:"3.0 mg", daily:19, color:"#4fb66f" }
        ]
      },
      note: "Plain white-flour bagels have less fibre and more refined carbs than whole wheat versions at a similar calorie density. A standard bagel weighs 100–130g, so figures above roughly represent one whole bagel."
    },
    youtube: null, joints: {}
  },
  {
    id: 126, name: "Tart Cherry Juice", alt: "Montmorency / pressed",
    desc: "Tart cherry juice has emerged as one of the most evidence-backed functional foods in sports nutrition. Multiple studies demonstrate it meaningfully reduces DOMS (delayed-onset muscle soreness), accelerates strength recovery after intense exercise, and improves sleep quality via naturally occurring melatonin. 30 ml concentrate or 250 ml of tart cherry juice pre and post exercise is the researched dose.",
    muscles: [{n:"Anthocyanins",p:true},{n:"Melatonin",p:true},{n:"Fast Carbs",p:false},{n:"Potassium",p:false}],
    tags: ["fruit","recovery","anti-inflammatory","sleep","DOMS"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Reduces strength loss after heavy sessions and accelerates recovery — particularly effective after eccentric loading."},
    vol: {suit:true,  eff:5, note:"Best-evidenced nutritional recovery intervention after high-volume training. Take before bed for compounded sleep + recovery benefit."},
    end: {suit:true,  eff:4, note:"Reduces DOMS and maintains performance across consecutive training days."},
    risk: 1, cues: "Use 30 ml concentrate (diluted in water) or 250 ml pure juice, twice daily during heavy training blocks. Before bed use compounds melatonin sleep benefit with inflammation control. Not to be confused with sweet cherry juice — must be Montmorency tart cherry variety.",
    equipment: "None — ready to drink",
    position: "Post-workout · Pre-sleep",
    nutritionProfile: {
      servingLabel: "Amount per 100ml, 100% juice (not concentrate)",
      calories: 58,
      macros: [
        { key:"protein", label:"Protein", grams:"0.4g", percent:3, kcal:2, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.1g", percent:2, kcal:1, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"14.5g", percent:95, kcal:55, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100ml tart cherry juice.",
        items: [
          { label:"Vitamin A", amount:"10 mcg RAE", daily:1, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.1 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"2.0 mcg", daily:2, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.03 mg", daily:2, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"3 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.1 mg", daily:2, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100ml tart cherry juice.",
        items: [
          { label:"Calcium", amount:"10 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.3 mg", daily:2, color:"#e26d5a" },
          { label:"Magnesium", amount:"7 mg", daily:2, color:"#4fb66f" },
          { label:"Phosphorus", amount:"15 mg", daily:1, color:"#8f74ff" },
          { label:"Potassium", amount:"170 mg", daily:4, color:"#f6b23b" },
          { label:"Zinc", amount:"0.1 mg", daily:1, color:"#25b9a7" },
          { label:"Selenium", amount:"0 mcg", daily:0, color:"#d982d0" },
          { label:"Sodium", amount:"3 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Tart cherry juice contains negligible protein — amino acid contribution is not nutritionally meaningful.",
        items: [
          { label:"Leucine", amount:"0.02 g", daily:1, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.02 g", daily:1, color:"#4fb66f" },
          { label:"Valine", amount:"0.02 g", daily:1, color:"#f6b23b" },
          { label:"Lysine", amount:"0.02 g", daily:1, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.01 g", daily:1, color:"#e26d5a" },
          { label:"Threonine", amount:"0.02 g", daily:1, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.01 g", daily:2, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.03 g", daily:1, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Juicing removes most fibre — fibre content is minimal compared to whole cherries.",
        items: [
          { label:"Total Fiber", amount:"0.2 g", daily:1, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.1 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0.1 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100ml.",
        items: [
          { label:"Water", amount:"84.0 g", daily:4, color:"#4f8df7" },
          { label:"Sodium", amount:"3 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"170 mg", daily:4, color:"#f6b23b" },
          { label:"Magnesium", amount:"7 mg", daily:2, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key tart cherry-specific nutrients",
        note: "These are important tart cherry-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Vitamin C", amount:"2.0 mg", daily:2, color:"#4f8df7" },
          { label:"Anthocyanins", amount:"among the highest of any fruit juice — drives the DOMS-reduction effect", daily:0, color:"#d982d0" },
          { label:"Melatonin", amount:"naturally occurring — supports the sleep-quality benefit", daily:0, color:"#8f74ff" }
        ]
      },
      note: "Values are for 100% tart cherry juice, not concentrate. Concentrate is far more calorie-dense — 30ml concentrate diluted in water approximates the dose used in most clinical studies."
    },
    youtube: null, joints: {}
  },
  {
    id: 127, name: "Buckwheat", alt: "Groats / soba noodles / flour",
    desc: "Despite the name, buckwheat is not wheat and contains no gluten — it is a seed from a plant related to rhubarb, making it naturally gluten-free. It is uniquely rich in rutin, a bioflavonoid that strengthens capillary walls and improves circulation. Its protein content is exceptional for a grain (6 g per 100 g cooked) and includes an unusually complete amino acid profile. Buckwheat has a nutty, earthy flavour and is used as groats (whole or cracked), as soba noodles in Japanese cooking, and as a flour for pancakes.",
    muscles: [{n:"Complex Carbs",p:true},{n:"Rutin",p:true},{n:"Magnesium",p:false},{n:"Manganese",p:false},{n:"Fibre",p:false}],
    tags: ["grain","gluten-free","slow-release","vegan","circulation"],
    diff: 2,
    str: {suit:true,  eff:3, note:"Magnesium supports ATP synthesis. Rutin improves microcirculation and nutrient delivery to muscles."},
    vol: {suit:true,  eff:4, note:"Versatile grain that works as a rice substitute or as a porridge base. Calorie-dense enough for volume phases."},
    end: {suit:true,  eff:4, note:"Rutin strengthens capillaries — relevant for athletes in cardiovascular conditioning phases. Low GI for sustained energy."},
    risk: 1, cues: "Toast raw groats in a dry pan 2–3 min before simmering — dramatically improves flavour. Simmer 1 cup groats in 2 cups water 12–15 min. Use soba noodles in cold salads or warm broths. Buckwheat flour makes fluffy, gluten-free pancakes — substitute 1:1 in pancake recipes. Very nutty, earthy flavour — pairs well with mushrooms, roasted vegetables and robust sauces.",
    equipment: "Pan · Pot",
    position: "Any main meal · Breakfast",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 92,
      macros: [
        { key:"protein", label:"Protein", grams:"3.4g", percent:15, kcal:14, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.6g", percent:5, kcal:5, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"19.9g", percent:80, kcal:73, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per 100g cooked buckwheat.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.6 mg", daily:4, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.05 mg", daily:4, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"14 mcg DFE", daily:4, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.5 mg", daily:10, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per 100g cooked buckwheat.",
        items: [
          { label:"Calcium", amount:"7 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.8 mg", daily:4, color:"#e26d5a" },
          { label:"Magnesium", amount:"51 mg", daily:12, color:"#4fb66f" },
          { label:"Phosphorus", amount:"59 mg", daily:5, color:"#8f74ff" },
          { label:"Potassium", amount:"88 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"0.7 mg", daily:6, color:"#25b9a7" },
          { label:"Selenium", amount:"2.3 mcg", daily:4, color:"#d982d0" },
          { label:"Sodium", amount:"2 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Buckwheat has notably higher lysine content than true cereal grains, giving it unusually good protein quality for a plant starch.",
        items: [
          { label:"Leucine", amount:"0.22 g", daily:9, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.13 g", daily:9, color:"#4fb66f" },
          { label:"Valine", amount:"0.18 g", daily:8, color:"#f6b23b" },
          { label:"Lysine", amount:"0.19 g", daily:7, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.08 g", daily:6, color:"#e26d5a" },
          { label:"Threonine", amount:"0.12 g", daily:9, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.06 g", daily:21, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.24 g", daily:8, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"2.7 g", daily:10, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.0 g", daily:4, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.7 g", daily:6, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per 100g.",
        items: [
          { label:"Water", amount:"72.0 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"2 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"88 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"51 mg", daily:12, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key buckwheat-specific nutrients",
        note: "These are important buckwheat-specific nutrients that do not fit neatly into the macro chart.",
        items: [
          { label:"Manganese", amount:"0.5 mg", daily:22, color:"#8f74ff" },
          { label:"Copper", amount:"0.2 mg", daily:22, color:"#4fb66f" },
          { label:"Rutin", amount:"bioflavonoid that strengthens capillary walls and improves circulation", daily:0, color:"#d982d0" }
        ]
      },
      note: "Buckwheat is gluten-free despite the name — it is unrelated to wheat. Toasting raw groats before cooking (kasha-style) deepens the flavour but does not change the nutrition profile meaningfully."
    },
    youtube: null, joints: {}
  },
  {
    id: 128, name: "Mango", alt: "Ripe, fresh or frozen",
    desc: "Mango is the richest tropical fruit in terms of vitamin C content — a single medium mango provides over 100% of the daily vitamin C requirement — and also delivers meaningful amounts of vitamin A (from beta-carotene), folate and copper. Its natural sugars (predominantly fructose and glucose) provide quick-absorbing carbohydrates suitable for pre-workout fuelling. Ripe mango frozen in chunks is one of the best smoothie bases for adding natural sweetness alongside micronutrients.",
    muscles: [{n:"Fast Carbs",p:true},{n:"Vitamin C",p:true},{n:"Vitamin A",p:true},{n:"Folate",p:false},{n:"Copper",p:false}],
    tags: ["fruit","vitamin-C","pre-workout","tropical","antioxidant"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Vitamin C is essential for collagen synthesis — directly supports tendon and connective tissue repair alongside training."},
    vol: {suit:true,  eff:3, note:"Calorie-dense tropical fruit for adding carbs in bulk phases. Excellent smoothie base."},
    end: {suit:true,  eff:4, note:"Fast-absorbing natural sugars with strong micronutrient co-loading. Vitamin A supports immune function during hard training blocks."},
    risk: 1, cues: "Slice on either side of the flat stone, score the flesh in a grid and turn inside-out to cube. Frozen mango is as nutritious as fresh and far more convenient year-round. Blend with Greek yoghurt and protein powder for a tropical high-protein smoothie. Combine with chilli flakes and lime juice for a quick fruit salad that balances the sweetness.",
    equipment: "None — or blender",
    position: "Pre-workout · Breakfast · Smoothie",
    nutritionProfile: {
      servingLabel: "Amount per 100g raw",
      calories: 60,
      macros: [
        { key:"protein", label:"Protein", grams:"0.8g", percent:4, kcal:3, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.4g", percent:6, kcal:4, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"15g", percent:90, kcal:60, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"54 mcg RAE", daily:6, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.9 mg", daily:6, color:"#8f74ff" },
          { label:"Vitamin K", amount:"4.2 mcg", daily:4, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.04 mg", daily:3, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"43 mcg DFE", daily:11, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.16 mg", daily:3, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"11 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.16 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"10 mg", daily:2, color:"#4fb66f" },
          { label:"Phosphorus", amount:"14 mg", daily:1, color:"#8f74ff" },
          { label:"Potassium", amount:"168 mg", daily:4, color:"#f6b23b" },
          { label:"Zinc", amount:"0.09 mg", daily:1, color:"#25b9a7" },
          { label:"Selenium", amount:"0.6 mcg", daily:1, color:"#d982d0" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"0.06 g", daily:2, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.04 g", daily:3, color:"#4fb66f" },
          { label:"Valine", amount:"0.04 g", daily:2, color:"#f6b23b" },
          { label:"Lysine", amount:"0.07 g", daily:3, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.03 g", daily:2, color:"#e26d5a" },
          { label:"Threonine", amount:"0.03 g", daily:2, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.01 g", daily:4, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.06 g", daily:2, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"1.6 g", daily:6, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.6 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.0 g", daily:4, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"83.5 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"168 mg", daily:4, color:"#f6b23b" },
          { label:"Magnesium", amount:"10 mg", daily:2, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key mango-specific nutrients",
        note: "Vitamin C is the standout nutrient in mango and is not part of the standard vitamin panel above.",
        items: [
          { label:"Vitamin C", amount:"36.4 mg", daily:40, color:"#8f74ff" },
          { label:"Copper", amount:"0.11 mg", daily:12, color:"#4fb66f" },
          { label:"Mangiferin", amount:"unique polyphenol antioxidant with anti-inflammatory and immune-supporting properties", daily:0, color:"#d982d0" }
        ]
      },
      note: "Ripeness affects sugar and vitamin C content significantly — a fully ripe, fragrant mango is sweeter and more nutrient-dense than an under-ripe one."
    },
    youtube: null, joints: {}
  },
  {
    id: 129, name: "Beets / Beetroot", alt: "Fresh cooked / vacuum-packed / juice",
    desc: "Beetroot contains the highest dietary nitrate content of any vegetable — a compound that is converted to nitric oxide in the body, dilating blood vessels, lowering the oxygen cost of exercise and meaningfully improving endurance performance. Multiple studies demonstrate that 500 ml of beetroot juice or 300 g of cooked beetroot taken 2–3 hours before exercise improves power output and time-to-exhaustion. It also provides betalains — unique antioxidant pigments with anti-inflammatory properties — alongside folate, manganese and potassium.",
    muscles: [{n:"Nitrates",p:true},{n:"Betalains",p:true},{n:"Folate",p:false},{n:"Potassium",p:false},{n:"Manganese",p:false}],
    tags: ["vegetable","nitric-oxide","performance","anti-inflammatory","endurance"],
    diff: 2,
    str: {suit:true,  eff:3, note:"Nitric oxide improves blood flow and nutrient delivery to working muscles during heavy sets."},
    vol: {suit:true,  eff:4, note:"Performance benefit is acute and dosing is practical. Regular use maintains elevated nitric oxide."},
    end: {suit:true,  eff:5, note:"Best-evidenced natural ergogenic food for endurance performance. Lowers the oxygen cost of submaximal exercise."},
    risk: 1, cues: "Take 500 ml juice or 300 g cooked beetroot 2–3 hours before training for maximum nitrate conversion. Vacuum-packed pre-cooked beetroot is the most convenient form. Concentrated shots (70 ml) are available pre-competition. Expect red-coloured urine (beeturia) — harmless. Roast whole beets at 200 °C for 45 min, then peel and slice.",
    equipment: "Oven for roasting · None for pre-packed",
    position: "Pre-workout (2–3 hrs before) · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 44,
      macros: [
        { key:"protein", label:"Protein", grams:"1.7g", percent:14, kcal:7, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.2g", percent:4, kcal:2, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"10g", percent:82, kcal:40, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"2 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.04 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.2 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.04 mg", daily:3, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"80 mcg DFE", daily:20, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.16 mg", daily:3, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"16 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.8 mg", daily:4, color:"#e26d5a" },
          { label:"Magnesium", amount:"23 mg", daily:5, color:"#4fb66f" },
          { label:"Phosphorus", amount:"38 mg", daily:3, color:"#8f74ff" },
          { label:"Potassium", amount:"305 mg", daily:6, color:"#f6b23b" },
          { label:"Zinc", amount:"0.35 mg", daily:3, color:"#25b9a7" },
          { label:"Selenium", amount:"0.7 mcg", daily:1, color:"#d982d0" },
          { label:"Sodium", amount:"77 mg", daily:3, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"0.13 g", daily:5, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.08 g", daily:6, color:"#4fb66f" },
          { label:"Valine", amount:"0.09 g", daily:4, color:"#f6b23b" },
          { label:"Lysine", amount:"0.15 g", daily:6, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.06 g", daily:4, color:"#e26d5a" },
          { label:"Threonine", amount:"0.07 g", daily:5, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.02 g", daily:7, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.13 g", daily:5, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"2.0 g", daily:7, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.7 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.3 g", daily:5, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"87 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"77 mg", daily:3, color:"#72a6d8" },
          { label:"Potassium", amount:"305 mg", daily:6, color:"#f6b23b" },
          { label:"Magnesium", amount:"23 mg", daily:5, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key beetroot-specific nutrients",
        note: "Dietary nitrate is beetroot's defining performance compound and is not part of the standard vitamin/mineral panel.",
        items: [
          { label:"Dietary Nitrate", amount:"250 mg", daily:0, color:"#8f74ff" },
          { label:"Manganese", amount:"0.33 mg", daily:14, color:"#4fb66f" },
          { label:"Betalains", amount:"unique antioxidant pigments with anti-inflammatory properties", daily:0, color:"#d982d0" }
        ]
      },
      note: "Nitrate content is highest in fresh and vacuum-packed beetroot — juicing concentrates it further. Roasting at high heat for long periods can reduce nitrate content slightly."
    },
    youtube: null, joints: {}
  },
  {
    id: 130, name: "Amaranth", alt: "Whole grain or puffed",
    desc: "Amaranth is an ancient pseudo-cereal with one of the most impressive nutritional profiles in the grain family — complete protein (9 g per 100 g cooked, with all essential amino acids including lysine which most grains lack), exceptionally high iron, calcium, magnesium and manganese. It is also gluten-free and contains squalene, a lipid with antioxidant and immune-modulating properties. Puffed amaranth is a versatile topping or cereal base.",
    muscles: [{n:"Complete Protein",p:true},{n:"Iron",p:true},{n:"Calcium",p:true},{n:"Magnesium",p:false},{n:"Squalene",p:false}],
    tags: ["grain","gluten-free","complete","iron","calcium","vegan"],
    diff: 2,
    str: {suit:true,  eff:4, note:"Calcium and magnesium support bone density and muscle contraction. Complete protein unusual for a grain."},
    vol: {suit:true,  eff:3, note:"Nutrient-dense grain for plant-based volume phases. Iron supports high training loads."},
    end: {suit:true,  eff:4, note:"Iron and magnesium support sustained energy production and haemoglobin synthesis."},
    risk: 1, cues: "Simmer 1 cup amaranth in 2.5 cups water 20 min — it becomes slightly thick and porridge-like. Use as a hot cereal with fruit and nuts. Puffed amaranth: use as a granola-style topping on yoghurt or in trail mix — it has a pleasant, light crunch. Combine with oats for a higher-protein porridge blend.",
    equipment: "Pot",
    position: "Breakfast · Any main meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 102,
      macros: [
        { key:"protein", label:"Protein", grams:"3.8g", percent:14, kcal:15, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1.6g", percent:13, kcal:14, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"19g", percent:73, kcal:76, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.04 mg", daily:3, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"19 mcg DFE", daily:5, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.4 mg", daily:8, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"47 mg", daily:4, color:"#4f8df7" },
          { label:"Iron", amount:"2.1 mg", daily:12, color:"#e26d5a" },
          { label:"Magnesium", amount:"65 mg", daily:15, color:"#4fb66f" },
          { label:"Phosphorus", amount:"181 mg", daily:14, color:"#8f74ff" },
          { label:"Potassium", amount:"135 mg", daily:3, color:"#f6b23b" },
          { label:"Zinc", amount:"0.9 mg", daily:8, color:"#25b9a7" },
          { label:"Selenium", amount:"9.6 mcg", daily:17, color:"#d982d0" },
          { label:"Sodium", amount:"6 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amaranth is unusual among grains for containing meaningful lysine, giving it better protein quality than most cereals.",
        items: [
          { label:"Leucine", amount:"0.30 g", daily:12, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.17 g", daily:12, color:"#4fb66f" },
          { label:"Valine", amount:"0.19 g", daily:9, color:"#f6b23b" },
          { label:"Lysine", amount:"0.34 g", daily:13, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.14 g", daily:10, color:"#e26d5a" },
          { label:"Threonine", amount:"0.16 g", daily:11, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.04 g", daily:14, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.30 g", daily:11, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"2.1 g", daily:8, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.7 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.4 g", daily:5, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"77 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"6 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"135 mg", daily:3, color:"#f6b23b" },
          { label:"Magnesium", amount:"65 mg", daily:15, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key amaranth-specific nutrients",
        note: "These compounds are particularly concentrated in amaranth relative to other grains.",
        items: [
          { label:"Manganese", amount:"0.95 mg", daily:41, color:"#8f74ff" },
          { label:"Copper", amount:"0.19 mg", daily:21, color:"#4fb66f" },
          { label:"Squalene", amount:"unique antioxidant lipid with immune-modulating properties", daily:0, color:"#d982d0" }
        ]
      },
      note: "Gluten-free pseudo-cereal. Puffed amaranth has a similar micronutrient profile per gram but lower density due to air content."
    },
    youtube: null, joints: {}
  },
  {
    id: 131, name: "Pineapple", alt: "Fresh or canned in juice",
    desc: "Pineapple contains bromelain, a proteolytic enzyme with genuine anti-inflammatory and digestive benefits — shown to reduce post-exercise muscle soreness and swelling. It also provides a meaningful dose of vitamin C, manganese and thiamine. The natural sugar blend (sucrose, fructose and glucose) delivers quick-absorbing carbohydrates alongside the bromelain's recovery properties, making pineapple a uniquely functional post-workout fruit.",
    muscles: [{n:"Fast Carbs",p:true},{n:"Bromelain",p:true},{n:"Vitamin C",p:true},{n:"Manganese",p:false},{n:"Thiamine",p:false}],
    tags: ["fruit","anti-inflammatory","bromelain","vitamin-C","post-workout"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Bromelain reduces exercise-induced inflammation and swelling. Vitamin C supports collagen synthesis."},
    vol: {suit:true,  eff:3, note:"Natural carb source with recovery properties. Pairs well with cottage cheese or protein shakes."},
    end: {suit:true,  eff:4, note:"Bromelain accelerates recovery between long training sessions. Fast carbs replenish glycogen."},
    risk: 1, cues: "Slice off skin with a sharp knife; cut into rings or chunks. Bromelain is most concentrated in the core — leave some core attached to chunks. Avoid canned in syrup (very high added sugar) — choose canned in juice or fresh. Bromelain makes pineapple incompatible with gelatin-based desserts — it breaks down the protein.",
    equipment: "None — ready to eat",
    position: "Post-workout · Breakfast · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g raw",
      calories: 50,
      macros: [
        { key:"protein", label:"Protein", grams:"0.5g", percent:4, kcal:2, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.1g", percent:2, kcal:1, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"13g", percent:94, kcal:52, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"3 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.02 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.7 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.02 mg", daily:2, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"18 mcg DFE", daily:4, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.21 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"13 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.29 mg", daily:2, color:"#e26d5a" },
          { label:"Magnesium", amount:"12 mg", daily:3, color:"#4fb66f" },
          { label:"Phosphorus", amount:"8 mg", daily:1, color:"#8f74ff" },
          { label:"Potassium", amount:"109 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"0.12 mg", daily:1, color:"#25b9a7" },
          { label:"Selenium", amount:"0.1 mcg", daily:0, color:"#d982d0" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"0.04 g", daily:2, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.02 g", daily:1, color:"#4fb66f" },
          { label:"Valine", amount:"0.03 g", daily:1, color:"#f6b23b" },
          { label:"Lysine", amount:"0.05 g", daily:2, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.02 g", daily:1, color:"#e26d5a" },
          { label:"Threonine", amount:"0.02 g", daily:1, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.01 g", daily:4, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.04 g", daily:1, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"1.4 g", daily:5, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.5 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0.9 g", daily:3, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"86 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"109 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"12 mg", daily:3, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key pineapple-specific nutrients",
        note: "Bromelain is the standout recovery compound in pineapple and is not part of the standard vitamin/mineral panel.",
        items: [
          { label:"Vitamin C", amount:"47.8 mg", daily:53, color:"#8f74ff" },
          { label:"Manganese", amount:"0.93 mg", daily:40, color:"#4fb66f" },
          { label:"Bromelain", amount:"proteolytic enzyme shown to reduce post-exercise soreness and swelling", daily:0, color:"#d982d0" }
        ]
      },
      note: "Bromelain content is highest in the core. Canned pineapple in syrup loses much of this profile to added sugar — choose fresh or canned in juice."
    },
    youtube: null, joints: {}
  },
  {
    id: 132, name: "Cassava / Yuca", alt: "Root vegetable, boiled or baked",
    desc: "Cassava is the third-largest source of carbohydrates in the world and a staple energy crop across Africa, Asia and South America. It is one of the most calorie-dense whole-food carbohydrates — providing approximately 38 g carbs per 100 g cooked — making it an exceptional bulking-phase energy source. Cassava flour is gluten-free and used in many traditional flatbreads and baked goods. It must be properly cooked as raw cassava contains cyanogenic glycosides.",
    muscles: [{n:"Complex Carbs",p:true},{n:"Vitamin C",p:false},{n:"Potassium",p:false},{n:"Magnesium",p:false}],
    tags: ["vegetable","root","bulk","gluten-free","high-carb"],
    diff: 3,
    str: {suit:true,  eff:3, note:"Very high carb density. Effective glycogen replenishment for heavy strength sessions."},
    vol: {suit:true,  eff:5, note:"One of the most calorie-dense plant carb sources. Useful for athletes struggling to eat enough during hard bulk phases."},
    end: {suit:true,  eff:3, note:"High carbohydrate content replenishes glycogen. Moderate GI when boiled."},
    risk: 2, cues: "MUST be fully cooked — never eat raw cassava. Peel (skin is tough), cut into chunks, boil in salted water 20–25 min until fork-tender. Drain and season with butter, garlic and herbs. Alternatively bake at 200 °C 40 min. Works as a potato substitute. Cassava flour is an excellent 1:1 replacement for wheat flour in baking.",
    equipment: "Pot · Oven",
    position: "Post-workout · Any main meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 160,
      macros: [
        { key:"protein", label:"Protein", grams:"1.4g", percent:4, kcal:6, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.3g", percent:2, kcal:3, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"38g", percent:94, kcal:152, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"1 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.19 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"1.9 mcg", daily:2, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.05 mg", daily:4, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"27 mcg DFE", daily:7, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.1 mg", daily:2, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"16 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.27 mg", daily:2, color:"#e26d5a" },
          { label:"Magnesium", amount:"21 mg", daily:5, color:"#4fb66f" },
          { label:"Phosphorus", amount:"27 mg", daily:2, color:"#8f74ff" },
          { label:"Potassium", amount:"271 mg", daily:6, color:"#f6b23b" },
          { label:"Zinc", amount:"0.34 mg", daily:3, color:"#25b9a7" },
          { label:"Selenium", amount:"0.7 mcg", daily:1, color:"#d982d0" },
          { label:"Sodium", amount:"14 mg", daily:1, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"0.11 g", daily:4, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.06 g", daily:4, color:"#4fb66f" },
          { label:"Valine", amount:"0.07 g", daily:3, color:"#f6b23b" },
          { label:"Lysine", amount:"0.13 g", daily:5, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.05 g", daily:4, color:"#e26d5a" },
          { label:"Threonine", amount:"0.06 g", daily:4, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.02 g", daily:7, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.11 g", daily:4, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"1.8 g", daily:6, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.5 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.3 g", daily:5, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"60 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"14 mg", daily:1, color:"#72a6d8" },
          { label:"Potassium", amount:"271 mg", daily:6, color:"#f6b23b" },
          { label:"Magnesium", amount:"21 mg", daily:5, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key cassava-specific nutrients",
        note: "Vitamin C is notable for a starchy root vegetable.",
        items: [
          { label:"Vitamin C", amount:"20.6 mg", daily:23, color:"#8f74ff" },
          { label:"Resistant Starch", amount:"forms when cassava is cooked and cooled, supporting gut bacteria", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Cassava MUST be fully cooked before eating — raw cassava contains cyanogenic glycosides that are neutralised by proper boiling, baking or fermentation."
    },
    youtube: null, joints: {}
  },
  {
    id: 133, name: "Dried Fruit (Raisins / Apricots)", alt: "Unsulphured, no added sugar",
    desc: "Dried fruits are highly concentrated sources of natural sugar, fibre, iron, potassium and antioxidants — with the water removed, the nutrient density per gram is dramatically increased compared to the fresh fruit. Raisins provide rapid glucose for immediate energy. Dried apricots are one of the richest plant sources of iron and potassium. Both are practical, portable sources of fast-release carbohydrate for endurance events and long training sessions.",
    muscles: [{n:"Fast Sugars",p:true},{n:"Iron",p:true},{n:"Potassium",p:true},{n:"Fibre",p:false},{n:"Antioxidants",p:false}],
    tags: ["fruit","fast-release","iron","portable","endurance"],
    diff: 1,
    str: {suit:true,  eff:2, note:"Quick energy before or during training. High sugar density."},
    vol: {suit:true,  eff:4, note:"Easy way to add carbs and calories in bulk phases. Portable and non-perishable."},
    end: {suit:true,  eff:5, note:"Natural mid-event fuel — easier on gut than many gels. Iron supports haemoglobin in endurance athletes."},
    risk: 2, cues: "30 g = ~25 raisins or ~6 dried apricots and ~80–100 kcal. Combine with nuts for a natural pre-workout trail mix. Choose unsulphured apricots (brown rather than orange) — sulphur dioxide in bright-orange varieties causes reactions in sensitive individuals. Very high sugar — portion control essential outside training windows.",
    equipment: "None — ready to eat",
    position: "Pre-workout · Mid-workout · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g (raisins)",
      calories: 299,
      macros: [
        { key:"protein", label:"Protein", grams:"3.1g", percent:4, kcal:12, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.5g", percent:1, kcal:4, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"79g", percent:95, kcal:316, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.12 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"3.5 mcg", daily:3, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.08 mg", daily:6, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"5 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.05 mg", daily:1, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"50 mg", daily:4, color:"#4f8df7" },
          { label:"Iron", amount:"1.88 mg", daily:10, color:"#e26d5a" },
          { label:"Magnesium", amount:"32 mg", daily:8, color:"#4fb66f" },
          { label:"Phosphorus", amount:"101 mg", daily:8, color:"#8f74ff" },
          { label:"Potassium", amount:"749 mg", daily:16, color:"#f6b23b" },
          { label:"Zinc", amount:"0.22 mg", daily:2, color:"#25b9a7" },
          { label:"Selenium", amount:"0.6 mcg", daily:1, color:"#d982d0" },
          { label:"Sodium", amount:"11 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"0.24 g", daily:10, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.14 g", daily:10, color:"#4fb66f" },
          { label:"Valine", amount:"0.16 g", daily:8, color:"#f6b23b" },
          { label:"Lysine", amount:"0.28 g", daily:11, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.12 g", daily:9, color:"#e26d5a" },
          { label:"Threonine", amount:"0.13 g", daily:9, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.04 g", daily:14, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.24 g", daily:9, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"3.7 g", daily:13, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.6 g", daily:6, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"2.1 g", daily:8, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"15 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"11 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"749 mg", daily:16, color:"#f6b23b" },
          { label:"Magnesium", amount:"32 mg", daily:8, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key dried-fruit-specific nutrients",
        note: "Dried apricots provide notably more vitamin A/beta-carotene and iron than raisins — values below are for raisins as the more common default.",
        items: [
          { label:"Boron", amount:"2.2 mg — supports bone and joint health", daily:0, color:"#8f74ff" },
          { label:"Potassium", amount:"already concentrated above due to water removal", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Drying concentrates both sugar and micronutrients roughly 4–5x compared with the fresh fruit — portion control matters more than with fresh fruit. Choose unsulphured, no-added-sugar varieties."
    },
    youtube: null, joints: {}
  },
  {
    id: 134, name: "Green Lentils (Pre-cooked pouch)", alt: "Ready-to-eat lentil packets",
    desc: "Pre-cooked lentil pouches combine the outstanding nutritional profile of lentils — protein, complex carbs, iron, folate, fibre — with zero preparation time. They heat in 60 seconds in a microwave and require no soaking, draining or timing. For athletes who meal prep or eat at work, they represent a near-perfect convenience food that delivers complete nutrition with minimal effort. The combination of protein and low-GI carbohydrates in a single ingredient makes this one of the most self-contained performance foods available.",
    muscles: [{n:"Protein",p:true},{n:"Complex Carbs",p:true},{n:"Iron",p:true},{n:"Folate",p:false},{n:"Fibre",p:false}],
    tags: ["legume","convenient","slow-release","iron","vegan"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Dual protein + carb in one ingredient. Iron and folate support strength training adaptations."},
    vol: {suit:true,  eff:5, note:"Zero prep time. Microwave and eat. Outstanding meal-prep shortcut for high-volume eating."},
    end: {suit:true,  eff:4, note:"Low GI carbs fuel sustained activity. Iron supports endurance by improving oxygen delivery."},
    risk: 1, cues: "Tear and microwave pouch 60 seconds. Serve alongside any protein source. Dress with olive oil, lemon and cumin for a complete side dish in 90 seconds. Add to soups and stews directly. Mix cold into salads. The most effort-efficient nutrition upgrade most athletes can make.",
    equipment: "Microwave",
    position: "Any main meal · Lunch · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 116,
      macros: [
        { key:"protein", label:"Protein", grams:"9.0g", percent:30, kcal:36, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.4g", percent:3, kcal:4, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"20g", percent:67, kcal:80, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"1.7 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.07 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"181 mcg DFE", daily:45, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.6 mg", daily:12, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"19 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"3.3 mg", daily:18, color:"#e26d5a" },
          { label:"Magnesium", amount:"36 mg", daily:9, color:"#4fb66f" },
          { label:"Phosphorus", amount:"180 mg", daily:14, color:"#8f74ff" },
          { label:"Potassium", amount:"369 mg", daily:8, color:"#f6b23b" },
          { label:"Zinc", amount:"1.3 mg", daily:12, color:"#25b9a7" },
          { label:"Selenium", amount:"2.8 mcg", daily:5, color:"#d982d0" },
          { label:"Sodium", amount:"5 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Lentil protein is lower in methionine than animal protein but provides strong overall coverage, especially when paired with grains.",
        items: [
          { label:"Leucine", amount:"0.60 g", daily:24, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.35 g", daily:25, color:"#4fb66f" },
          { label:"Valine", amount:"0.38 g", daily:18, color:"#f6b23b" },
          { label:"Lysine", amount:"0.69 g", daily:27, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.29 g", daily:21, color:"#e26d5a" },
          { label:"Threonine", amount:"0.33 g", daily:22, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.09 g", daily:32, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.60 g", daily:22, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"7.9 g", daily:28, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"2.8 g", daily:10, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"5.1 g", daily:18, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"70 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"5 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"369 mg", daily:8, color:"#f6b23b" },
          { label:"Magnesium", amount:"36 mg", daily:9, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key lentil-specific nutrients",
        note: "Pre-cooked pouches sometimes add salt — check the label, as sodium can range from near-zero to 300+ mg per pouch.",
        items: [
          { label:"Molybdenum", amount:"very high in lentils, supports enzyme function", daily:0, color:"#8f74ff" }
        ]
      },
      note: "Ready-to-eat pouches are a convenient way to get legume folate, iron and fibre without soaking or long cooking times — check labels for added sodium."
    },
    youtube: null, joints: {}
  },
  {
    id: 135, name: "Plantain", alt: "Green or ripe, boiled or fried",
    desc: "Plantain is a starchy relative of the banana that must be cooked before eating. It is a staple carbohydrate across West Africa, the Caribbean and Latin America and differs from banana in having far more starch and less sugar when unripe — making green plantain a low-GI complex carbohydrate. As it ripens, starches convert to sugars and the GI rises. Plantain is particularly rich in potassium, vitamin B6 and vitamin C, and provides a meaningful amount of dietary fibre.",
    muscles: [{n:"Complex Carbs",p:true},{n:"Potassium",p:true},{n:"Vitamin B6",p:true},{n:"Vitamin C",p:false},{n:"Fibre",p:false}],
    tags: ["vegetable","grain","slow-release","potassium","gluten-free"],
    diff: 2,
    str: {suit:true,  eff:3, note:"Potassium supports muscle contraction. B6 supports protein metabolism."},
    vol: {suit:true,  eff:4, note:"Calorie-dense starch base. Works as a rice or potato alternative for athletes from or familiar with Caribbean and African cuisines."},
    end: {suit:true,  eff:4, note:"Green plantain has a low GI — sustained energy release. Potassium aids cramping prevention."},
    risk: 1, cues: "Green plantain (starchy/savoury): peel with a knife (skin is thick), boil 20–25 min or slice thin and fry. Ripe plantain (sweet): peel easily, pan-fry in a little oil until caramelised — the sugars brown beautifully. Always cook before eating. Works in savoury and sweet applications depending on ripeness.",
    equipment: "Pot · Pan",
    position: "Any main meal · Side dish",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked (boiled)",
      calories: 116,
      macros: [
        { key:"protein", label:"Protein", grams:"0.8g", percent:2, kcal:3, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.2g", percent:2, kcal:2, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"31g", percent:96, kcal:124, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"56 mcg RAE", daily:6, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.14 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.8 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.04 mg", daily:3, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"22 mcg DFE", daily:6, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.26 mg", daily:5, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"3 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0.6 mg", daily:3, color:"#e26d5a" },
          { label:"Magnesium", amount:"32 mg", daily:8, color:"#4fb66f" },
          { label:"Phosphorus", amount:"31 mg", daily:2, color:"#8f74ff" },
          { label:"Potassium", amount:"465 mg", daily:10, color:"#f6b23b" },
          { label:"Zinc", amount:"0.14 mg", daily:1, color:"#25b9a7" },
          { label:"Selenium", amount:"1.5 mcg", daily:3, color:"#d982d0" },
          { label:"Sodium", amount:"4 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"0.06 g", daily:2, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.04 g", daily:3, color:"#4fb66f" },
          { label:"Valine", amount:"0.04 g", daily:2, color:"#f6b23b" },
          { label:"Lysine", amount:"0.07 g", daily:3, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.03 g", daily:2, color:"#e26d5a" },
          { label:"Threonine", amount:"0.03 g", daily:2, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.01 g", daily:4, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.06 g", daily:2, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"2.3 g", daily:8, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.8 g", daily:3, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"1.5 g", daily:5, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"65 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"4 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"465 mg", daily:10, color:"#f6b23b" },
          { label:"Magnesium", amount:"32 mg", daily:8, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key plantain-specific nutrients",
        note: "Carotenoid content increases as plantains ripen and yellow.",
        items: [
          { label:"Vitamin C", amount:"10.9 mg", daily:12, color:"#8f74ff" },
          { label:"Resistant Starch", amount:"high in green (unripe) plantain, supports gut health and blunts glucose response", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Green plantain is starchier and lower-GI; ripe (yellow/black) plantain is sweeter with more available sugar. Frying adds significant fat and calories versus boiling or baking."
    },
    youtube: null, joints: {}
  },
  {
    id: 136, name: "Freekeh", alt: "Cracked roasted green wheat",
    desc: "Freekeh is an ancient grain made from young green durum wheat that is harvested early and roasted over fire — giving it a distinctive smoky, nutty flavour. It is exceptionally high in fibre (3x more than brown rice) and provides more protein than most grains (~13 g per 100 g dry). The combination of high fibre, high protein and moderate GI makes it an outstanding all-round grain for athletes. It also contains lutein and zeaxanthin for eye health.",
    muscles: [{n:"Complex Carbs",p:true},{n:"Fibre",p:true},{n:"Protein",p:false},{n:"Iron",p:false},{n:"Lutein",p:false}],
    tags: ["grain","high-fibre","slow-release","ancient-grain","versatile"],
    diff: 2,
    str: {suit:true,  eff:4, note:"High protein for a grain. Fibre improves gut health and satiety during strength phases."},
    vol: {suit:true,  eff:4, note:"Distinctive smoky flavour adds variety to grain rotations in high-volume eating plans."},
    end: {suit:true,  eff:4, note:"High fibre and moderate GI for sustained energy. Rich iron content supports endurance adaptations."},
    risk: 3, cues: "Not suitable for coeliac (contains gluten). Rinse, then simmer cracked freekeh 1:2.5 water for 20 min; whole freekeh 40 min. Use in salads, pilafs, stuffed vegetables and grain bowls. The smoky flavour pairs exceptionally well with roasted vegetables, pomegranate, fresh herbs and lemon.",
    equipment: "Pot",
    position: "Any main meal · Lunch",
    nutritionProfile: {
      servingLabel: "Amount per 100g cooked",
      calories: 125,
      macros: [
        { key:"protein", label:"Protein", grams:"5.0g", percent:14, kcal:20, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1.5g", percent:10, kcal:14, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"26g", percent:76, kcal:104, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.1 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"1.0 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.06 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"20 mcg DFE", daily:5, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.3 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"20 mg", daily:2, color:"#4f8df7" },
          { label:"Iron", amount:"1.5 mg", daily:8, color:"#e26d5a" },
          { label:"Magnesium", amount:"40 mg", daily:10, color:"#4fb66f" },
          { label:"Phosphorus", amount:"120 mg", daily:10, color:"#8f74ff" },
          { label:"Potassium", amount:"150 mg", daily:3, color:"#f6b23b" },
          { label:"Zinc", amount:"1.0 mg", daily:9, color:"#25b9a7" },
          { label:"Selenium", amount:"15 mcg", daily:27, color:"#d982d0" },
          { label:"Sodium", amount:"5 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"0.39 g", daily:16, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.23 g", daily:16, color:"#4fb66f" },
          { label:"Valine", amount:"0.25 g", daily:12, color:"#f6b23b" },
          { label:"Lysine", amount:"0.45 g", daily:17, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.19 g", daily:14, color:"#e26d5a" },
          { label:"Threonine", amount:"0.21 g", daily:14, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.06 g", daily:21, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.39 g", daily:14, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"4.3 g", daily:15, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.2 g", daily:4, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"3.1 g", daily:11, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"58 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"5 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"150 mg", daily:3, color:"#f6b23b" },
          { label:"Magnesium", amount:"40 mg", daily:10, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key freekeh-specific nutrients",
        note: "Freekeh is roasted while still green, which is believed to preserve more nutrients than fully ripened, dried wheat.",
        items: [
          { label:"Manganese", amount:"0.8 mg", daily:35, color:"#8f74ff" }
        ]
      },
      note: "Freekeh is wheat harvested young and roasted — it is NOT gluten-free. It has roughly 4x the fibre of brown rice for a similar calorie load."
    },
    youtube: null, joints: {}
  },
  {
    id: 137, name: "Sports Drink (Isotonic)", alt: "Electrolyte + carbohydrate drink",
    desc: "An isotonic sports drink contains a solution of 6-8% carbohydrates alongside electrolytes (sodium, potassium, chloride) that matches the osmolality of blood plasma — allowing rapid absorption during exercise. This is the evidence-backed composition for fuelling sessions lasting more than 60-90 minutes, where water alone is insufficient to replace both fluid and carbohydrates. A practical formula for a homemade version: 500 ml water, 30 g sugar or maltodextrin, 0.5 g salt, squeeze of lemon.",
    muscles: [{n:"Fast Carbs",p:true},{n:"Sodium",p:true},{n:"Potassium",p:true},{n:"Chloride",p:false}],
    tags: ["supplement","electrolyte","fast-release","hydration","endurance"],
    diff: 1,
    str: {suit:false, eff:2, note:"Not typically needed for strength sessions under 60 min."},
    vol: {suit:true,  eff:3, note:"Useful for very long training sessions or multiple sessions per day."},
    end: {suit:true,  eff:5, note:"Best-evidenced intervention for sessions over 60-90 min. Maintains blood glucose and hydration simultaneously. Drink 150-200 ml every 15-20 min during sustained exercise."},
    risk: 1, cues: "6-8% carbohydrate is the optimal concentration. Below 6% provides insufficient fuel; above 8% slows gastric emptying and can cause GI distress. Sodium in the drink stimulates thirst and improves fluid retention. Avoid sports drinks outside of exercise windows — the sugar is unnecessary at rest. Homemade version costs a fraction of commercial products.",
    equipment: "Bottle or hydration vest",
    position: "During training (>60 min) · Long events",
    nutritionProfile: {
      servingLabel: "Amount per 500ml bottle",
      calories: 130,
      macros: [
        { key:"protein", label:"Protein", grams:"0g", percent:0, kcal:0, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0g", percent:0, kcal:0, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"34g", percent:100, kcal:136, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"0 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" },
          { label:"Phosphorus", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Potassium", amount:"75 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Selenium", amount:"0 mcg", daily:0, color:"#d982d0" },
          { label:"Sodium", amount:"270 mg", daily:12, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"470 g", daily:16, color:"#4f8df7" },
          { label:"Sodium", amount:"270 mg", daily:12, color:"#72a6d8" },
          { label:"Potassium", amount:"75 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "electrolyte design target",
        note: "Isotonic drinks are formulated to match blood plasma concentration for fast fluid and carbohydrate absorption during exercise.",
        items: [
          { label:"Carbohydrate concentration", amount:"6–8% (6–8 g per 100 ml)", daily:0, color:"#8f74ff" }
        ]
      },
      note: "Most useful for continuous exercise over 60–90 minutes — for shorter sessions, plain water is usually sufficient. Formulations vary by brand; check the label for exact sodium and carb content."
    },
    youtube: null, joints: {}
  },
  {
    id: 138, name: "Watermelon", alt: "Fresh, chilled",
    desc: "Watermelon is 92% water by weight and provides meaningful quantities of lycopene (a powerful antioxidant concentrated in red fruits), vitamin C, vitamin A, potassium and — uniquely — L-citrulline, an amino acid that is converted to arginine in the body and supports nitric oxide production. Research shows that 500 ml of watermelon juice consumed before exercise reduces muscle soreness at 24 hours. It is the most hydrating natural food available.",
    muscles: [{n:"L-Citrulline",p:true},{n:"Lycopene",p:true},{n:"Vitamin C",p:false},{n:"Potassium",p:false},{n:"Fast Carbs",p:false}],
    tags: ["fruit","hydration","citrulline","lycopene","anti-inflammatory"],
    diff: 1,
    str: {suit:true,  eff:3, note:"L-citrulline improves blood flow and muscle pump. Natural nitric oxide support."},
    vol: {suit:true,  eff:3, note:"Excellent hydration alongside carbohydrates during hot-weather training. Lycopene supports recovery."},
    end: {suit:true,  eff:4, note:"Hydration + L-citrulline + carbs combination is uniquely useful in warm-weather endurance events. Lycopene reduces post-exercise oxidative damage."},
    risk: 1, cues: "Cut lengthwise into wedges or cube the flesh. Eat chilled for maximum refreshment. The white rind near the skin is the highest concentration of L-citrulline — don't discard it all. Blend into a pre-workout juice with lime. Very low calorie — 100 g is only ~30 kcal.",
    equipment: "None — ready to eat",
    position: "Pre-workout · Post-workout · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g raw",
      calories: 30,
      macros: [
        { key:"protein", label:"Protein", grams:"0.6g", percent:6, kcal:2, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"0.2g", percent:6, kcal:2, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"8g", percent:88, kcal:32, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"28 mcg RAE", daily:3, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.05 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.1 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.02 mg", daily:2, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"3 mcg DFE", daily:1, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.22 mg", daily:4, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"7 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.24 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"10 mg", daily:2, color:"#4fb66f" },
          { label:"Phosphorus", amount:"11 mg", daily:1, color:"#8f74ff" },
          { label:"Potassium", amount:"112 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"0.1 mg", daily:1, color:"#25b9a7" },
          { label:"Selenium", amount:"0.4 mcg", daily:1, color:"#d982d0" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"0.05 g", daily:2, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.03 g", daily:2, color:"#4fb66f" },
          { label:"Valine", amount:"0.03 g", daily:1, color:"#f6b23b" },
          { label:"Lysine", amount:"0.05 g", daily:2, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.02 g", daily:1, color:"#e26d5a" },
          { label:"Threonine", amount:"0.03 g", daily:2, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.01 g", daily:4, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.05 g", daily:2, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"0.4 g", daily:1, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.1 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0.3 g", daily:1, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"91.5 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"112 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"10 mg", daily:2, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key watermelon-specific nutrients",
        note: "Watermelon has one of the highest lycopene concentrations of any fruit, and citrulline supports nitric oxide production.",
        items: [
          { label:"Vitamin C", amount:"8.1 mg", daily:9, color:"#8f74ff" },
          { label:"Lycopene", amount:"antioxidant carotenoid — more concentrated than in raw tomato", daily:0, color:"#4fb66f" },
          { label:"Citrulline", amount:"amino compound that may support blood flow and reduce muscle soreness", daily:0, color:"#d982d0" }
        ]
      },
      note: "One of the highest water-content whole foods available, making it an excellent hot-weather hydration snack alongside its electrolyte and antioxidant content."
    },
    youtube: null, joints: {}
  },
  {
    id: 201, name: "Avocado", alt: "Whole, medium",
    desc: "Avocado is one of the most nutrient-dense fat sources available — rich in monounsaturated oleic acid (the same fat found in olive oil), potassium, folate and fibre. It improves absorption of fat-soluble vitamins from the rest of the meal, making it a valuable dietary synergist. Also a source of glutathione, a powerful antioxidant.",
    muscles: [{n:"Monounsaturated Fat",p:true},{n:"Potassium",p:true},{n:"Folate",p:false},{n:"Fibre",p:false},{n:"Vitamin K",p:false}],
    tags: ["fruit","omega-9","anti-inflammatory","keto","vegan"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Healthy fats support testosterone production. Potassium aids muscle contractions."},
    vol: {suit:true,  eff:3, note:"Calorie-dense — useful for athletes struggling to eat enough."},
    end: {suit:true,  eff:3, note:"Anti-inflammatory compounds aid recovery between sessions."},
    risk: 1, cues: "Ripe when slightly soft to the touch. Cut lengthwise, twist to open, remove stone with a spoon. Mash with lemon, salt and chilli for guacamole. Oxidises quickly — store with lime juice or stone intact.",
    equipment: "None — ready to eat",
    position: "Any meal · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g (whole avocado, ~⅔ medium)",
      calories: 160,
      macros: [
        { key:"protein", label:"Protein", grams:"2.0g", percent:5, kcal:8, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"14.7g", percent:76, kcal:132, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"8.5g", percent:19, kcal:34, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"7 mcg RAE", daily:1, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"2.07 mg", daily:14, color:"#8f74ff" },
          { label:"Vitamin K", amount:"21 mcg", daily:18, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.13 mg", daily:10, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"81 mcg DFE", daily:20, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"1.39 mg", daily:28, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"12 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"0.55 mg", daily:3, color:"#e26d5a" },
          { label:"Magnesium", amount:"29 mg", daily:7, color:"#4fb66f" },
          { label:"Phosphorus", amount:"52 mg", daily:4, color:"#8f74ff" },
          { label:"Potassium", amount:"485 mg", daily:10, color:"#f6b23b" },
          { label:"Zinc", amount:"0.64 mg", daily:6, color:"#25b9a7" },
          { label:"Selenium", amount:"0.4 mcg", daily:1, color:"#d982d0" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"0.16 g", daily:7, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.09 g", daily:6, color:"#4fb66f" },
          { label:"Valine", amount:"0.10 g", daily:5, color:"#f6b23b" },
          { label:"Lysine", amount:"0.18 g", daily:7, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.08 g", daily:6, color:"#e26d5a" },
          { label:"Threonine", amount:"0.09 g", daily:6, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.02 g", daily:7, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.16 g", daily:6, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"6.7 g", daily:24, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"2.1 g", daily:8, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"4.6 g", daily:16, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"73 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"485 mg", daily:10, color:"#f6b23b" },
          { label:"Magnesium", amount:"29 mg", daily:7, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key avocado-specific nutrients",
        note: "Avocado is unusually high in potassium and pantothenic acid for a fruit.",
        items: [
          { label:"Vitamin C", amount:"10 mg", daily:11, color:"#8f74ff" },
          { label:"Beta-sitosterol", amount:"plant sterol that supports healthy cholesterol levels", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Net digestible carbs are very low (~1.8g) because most of the carbohydrate content is fibre. Predominantly monounsaturated fat (oleic acid)."
    },
    youtube: null, joints: {}
  },
  {
    id: 202, name: "Olive Oil (Extra Virgin)", alt: "Cold-pressed EVOO",
    desc: "Extra virgin olive oil is the cornerstone of the Mediterranean diet and has the strongest evidence base of any dietary fat for cardiovascular health. Rich in oleocanthal, a natural anti-inflammatory compound with similar properties to ibuprofen. The polyphenols preserve well at low heat but degrade above 180 °C.",
    muscles: [{n:"Monounsaturated Fat",p:true},{n:"Polyphenols",p:true},{n:"Vitamin E",p:false},{n:"Vitamin K",p:false}],
    tags: ["oil","omega-9","anti-inflammatory","heart-health"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Healthy fat for testosterone and joint lubrication. Use liberally on vegetables."},
    vol: {suit:true,  eff:3, note:"Calorie-dense addition to meals. 1 tbsp = ~120 kcal."},
    end: {suit:true,  eff:4, note:"Anti-inflammatory profile accelerates recovery. Reduces inflammation biomarkers."},
    risk: 1, cues: "Use for low-to-medium heat cooking (up to 190 °C smoke point). Drizzle raw over salads, vegetables and cooked dishes for maximum polyphenol retention. Store in a dark glass bottle away from heat.",
    equipment: "Pan — or use raw",
    position: "Any meal",
    nutritionProfile: {
      servingLabel: "Amount per tbsp (13.5g)",
      calories: 119,
      macros: [
        { key:"protein", label:"Protein", grams:"0g", percent:0, kcal:0, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"13.5g", percent:100, kcal:122, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"1.9 mg", daily:13, color:"#8f74ff" },
          { label:"Vitamin K", amount:"8.1 mcg", daily:7, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"0 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0.08 mg", daily:0, color:"#e26d5a" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" },
          { label:"Phosphorus", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Potassium", amount:"0 mg", daily:0, color:"#f6b23b" },
          { label:"Zinc", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Selenium", amount:"0 mcg", daily:0, color:"#d982d0" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"0 mg", daily:0, color:"#f6b23b" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key EVOO-specific nutrients",
        note: "Polyphenol content varies significantly by harvest and processing — early-harvest, cold-pressed oils have the highest concentration.",
        items: [
          { label:"Oleic Acid", amount:"~73% of total fat — monounsaturated omega-9", daily:0, color:"#8f74ff" },
          { label:"Oleocanthal", amount:"polyphenol with ibuprofen-like anti-inflammatory activity (the throat 'sting' in high-quality EVOO)", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Use within 6 months of opening and store away from heat and light — polyphenol content degrades over time. Best used raw or at low-to-medium heat; smoke point is lower than refined oils."
    },
    youtube: null, joints: {}
  },
  {
    id: 203, name: "Walnuts", alt: "Raw, unsalted",
    desc: "Walnuts are the only tree nut with a significant source of plant-based omega-3 ALA. They also provide melatonin (supporting sleep quality), polyphenols (reducing oxidative stress) and arginine (a nitric oxide precursor that supports blood flow). A 30 g handful is a practical and satisfying recovery snack.",
    muscles: [{n:"Omega-3 ALA",p:true},{n:"Polyphenols",p:true},{n:"Melatonin",p:false},{n:"Arginine",p:false},{n:"Magnesium",p:false}],
    tags: ["nut","omega-3","sleep","anti-inflammatory","vegan"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Arginine supports nitric oxide and blood flow. Melatonin aids recovery sleep."},
    vol: {suit:true,  eff:3, note:"Easy calorie-dense snack during high-volume training blocks."},
    end: {suit:true,  eff:4, note:"Anti-inflammatory. ALA omega-3 reduces exercise-induced inflammation."},
    risk: 4, cues: "30 g = roughly one closed handful. Store in an airtight container — the high fat content makes walnuts go rancid more quickly than other nuts. Refrigerate for longer shelf life. Add to oatmeal or salads.",
    equipment: "None — ready to eat",
    position: "Snack · Pre-sleep · Breakfast",
    nutritionProfile: {
      servingLabel: "Amount per 100g raw",
      calories: 654,
      macros: [
        { key:"protein", label:"Protein", grams:"15.2g", percent:9, kcal:61, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"65.2g", percent:83, kcal:587, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"13.7g", percent:8, kcal:55, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.7 mg", daily:5, color:"#8f74ff" },
          { label:"Vitamin K", amount:"2.7 mcg", daily:2, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.15 mg", daily:12, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"98 mcg DFE", daily:24, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.57 mg", daily:11, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"98 mg", daily:8, color:"#4f8df7" },
          { label:"Iron", amount:"2.9 mg", daily:16, color:"#e26d5a" },
          { label:"Magnesium", amount:"158 mg", daily:38, color:"#4fb66f" },
          { label:"Phosphorus", amount:"346 mg", daily:28, color:"#8f74ff" },
          { label:"Potassium", amount:"441 mg", daily:9, color:"#f6b23b" },
          { label:"Zinc", amount:"3.1 mg", daily:28, color:"#25b9a7" },
          { label:"Selenium", amount:"4.9 mcg", daily:9, color:"#d982d0" },
          { label:"Sodium", amount:"2 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.19 g", daily:49, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.69 g", daily:49, color:"#4fb66f" },
          { label:"Valine", amount:"0.76 g", daily:36, color:"#f6b23b" },
          { label:"Lysine", amount:"1.38 g", daily:53, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.58 g", daily:41, color:"#e26d5a" },
          { label:"Threonine", amount:"0.65 g", daily:44, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.18 g", daily:64, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.19 g", daily:43, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"6.7 g", daily:24, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.0 g", daily:4, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"5.7 g", daily:20, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"4 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"2 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"441 mg", daily:9, color:"#f6b23b" },
          { label:"Magnesium", amount:"158 mg", daily:38, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key walnut-specific nutrients",
        note: "Walnuts are the richest tree nut source of plant omega-3 (ALA).",
        items: [
          { label:"Omega-3 ALA", amount:"9.1 g — highest of any tree nut", daily:0, color:"#8f74ff" },
          { label:"Ellagitannins", amount:"polyphenols converted by gut bacteria into urolithins, linked to cellular and vascular benefits", daily:0, color:"#4fb66f" }
        ]
      },
      note: "30g (about 14 halves) is a typical serving at ~196 kcal. The thin brown skin holds most of the polyphenol content — don't remove it."
    },
    youtube: null, joints: {}
  },
  {
    id: 205, name: "Chia Seeds", alt: "Black or white",
    desc: "Chia seeds are calorie-dense despite their tiny size, offering a high concentration of plant-based omega-3 ALA, calcium, magnesium and fibre in a tablespoon. They form a gel when hydrated, slowing gastric emptying and stabilising blood glucose. A 30 g serving provides ~5 g protein and 10 g fibre — exceptional for a seed.",
    muscles: [{n:"Omega-3 ALA",p:true},{n:"Fibre",p:true},{n:"Calcium",p:false},{n:"Magnesium",p:false},{n:"Protein",p:false}],
    tags: ["nut","omega-3","fibre","calcium","vegan"],
    diff: 1,
    str: {suit:true,  eff:2, note:"Modest protein per serving — but a clean add-on to protein-based meals."},
    vol: {suit:true,  eff:3, note:"Chia pudding is an easy high-calorie bulk meal option."},
    end: {suit:true,  eff:4, note:"Gel formation slows digestion and stabilises blood sugar during long training sessions."},
    risk: 1, cues: "Mix 3 tbsp chia with 200 ml milk or milk alternative. Refrigerate 4 hours or overnight for pudding. Add to smoothies, oats or yoghurt for a fibre and omega-3 boost. No cooking needed.",
    equipment: "None — soak in liquid",
    position: "Breakfast · Snack · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g",
      calories: 486,
      macros: [
        { key:"protein", label:"Protein", grams:"16.5g", percent:13, kcal:66, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"30.7g", percent:54, kcal:276, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"42.1g", percent:33, kcal:168, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"1 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.5 mg", daily:3, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.17 mg", daily:13, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"49 mcg DFE", daily:12, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.05 mg", daily:1, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"631 mg", daily:49, color:"#4f8df7" },
          { label:"Iron", amount:"7.7 mg", daily:43, color:"#e26d5a" },
          { label:"Magnesium", amount:"335 mg", daily:80, color:"#4fb66f" },
          { label:"Phosphorus", amount:"860 mg", daily:69, color:"#8f74ff" },
          { label:"Potassium", amount:"407 mg", daily:9, color:"#f6b23b" },
          { label:"Zinc", amount:"4.6 mg", daily:42, color:"#25b9a7" },
          { label:"Selenium", amount:"55.2 mcg", daily:100, color:"#d982d0" },
          { label:"Sodium", amount:"16 mg", daily:1, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.29 g", daily:53, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.75 g", daily:54, color:"#4fb66f" },
          { label:"Valine", amount:"0.83 g", daily:40, color:"#f6b23b" },
          { label:"Lysine", amount:"1.49 g", daily:57, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.63 g", daily:45, color:"#e26d5a" },
          { label:"Threonine", amount:"0.70 g", daily:47, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.19 g", daily:68, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.29 g", daily:46, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"34.4 g", daily:123, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"7.0 g", daily:25, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"27.4 g", daily:98, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"6 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"16 mg", daily:1, color:"#72a6d8" },
          { label:"Potassium", amount:"407 mg", daily:9, color:"#f6b23b" },
          { label:"Magnesium", amount:"335 mg", daily:80, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key chia-specific nutrients",
        note: "A typical serving is 1–2 tbsp (about 15–28 g), not 100 g — figures above scale down proportionally.",
        items: [
          { label:"Omega-3 ALA", amount:"17.8 g per 100g — among the highest plant sources", daily:0, color:"#8f74ff" }
        ]
      },
      note: "Chia absorbs roughly 10x its weight in liquid, forming a gel — useful for puddings and as an egg substitute (1 tbsp chia + 3 tbsp water = 1 egg) in baking."
    },
    youtube: null, joints: {}
  },
  {
    id: 206, name: "Almonds", alt: "Raw or dry-roasted, unsalted",
    desc: "Almonds are the most nutrient-dense tree nut — exceptionally rich in vitamin E (one of the few foods that provides a meaningful dose in a normal serving), magnesium, calcium, riboflavin (B2) and monounsaturated fat. Research consistently shows almond consumption lowers LDL cholesterol, reduces post-exercise oxidative stress and supports recovery. One 30 g serving provides 6 g protein.",
    muscles: [{n:"Monounsaturated Fat",p:true},{n:"Vitamin E",p:true},{n:"Magnesium",p:true},{n:"Calcium",p:false},{n:"Protein",p:false}],
    tags: ["nut","vitamin-E","magnesium","anti-oxidant","vegan"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Magnesium supports muscle contractions and ATP synthesis. Vitamin E protects muscle cells from oxidative damage."},
    vol: {suit:true,  eff:3, note:"Calorie-dense snack. Easy to carry during high-volume eating phases."},
    end: {suit:true,  eff:4, note:"Post-exercise oxidative stress is reduced by vitamin E. Magnesium reduces muscle cramping."},
    risk: 4, cues: "30 g = roughly 23 almonds and ~170 kcal. Blanched (skin removed) almonds have slightly better mineral bioavailability. Soaking overnight reduces phytic acid. Tree nut allergy — avoid. Store in a cool, dark place; refrigerate for longer shelf life.",
    equipment: "None — ready to eat",
    position: "Snack · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g raw",
      calories: 579,
      macros: [
        { key:"protein", label:"Protein", grams:"21.2g", percent:14, kcal:85, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"49.9g", percent:72, kcal:449, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"21.6g", percent:14, kcal:86, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"25.6 mg", daily:171, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"1.01 mg", daily:78, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"44 mcg DFE", daily:11, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.47 mg", daily:9, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"269 mg", daily:21, color:"#4f8df7" },
          { label:"Iron", amount:"3.7 mg", daily:21, color:"#e26d5a" },
          { label:"Magnesium", amount:"270 mg", daily:64, color:"#4fb66f" },
          { label:"Phosphorus", amount:"481 mg", daily:38, color:"#8f74ff" },
          { label:"Potassium", amount:"733 mg", daily:16, color:"#f6b23b" },
          { label:"Zinc", amount:"3.1 mg", daily:28, color:"#25b9a7" },
          { label:"Selenium", amount:"4.1 mcg", daily:7, color:"#d982d0" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.66 g", daily:68, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.96 g", daily:69, color:"#4fb66f" },
          { label:"Valine", amount:"1.06 g", daily:50, color:"#f6b23b" },
          { label:"Lysine", amount:"1.92 g", daily:74, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.81 g", daily:58, color:"#e26d5a" },
          { label:"Threonine", amount:"0.90 g", daily:61, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.25 g", daily:89, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.66 g", daily:60, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"12.5 g", daily:45, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"3.0 g", daily:11, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"9.5 g", daily:34, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"4 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"1 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"733 mg", daily:16, color:"#f6b23b" },
          { label:"Magnesium", amount:"270 mg", daily:64, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key almond-specific nutrients",
        note: "Almonds are one of the richest whole-food sources of vitamin E available.",
        items: [
          { label:"Manganese", amount:"2.3 mg", daily:100, color:"#8f74ff" }
        ]
      },
      note: "30g (about 23 almonds) is a typical serving at ~174 kcal. Vitamin E content is concentrated in the skin — avoid blanched (skinless) almonds if maximising this nutrient."
    },
    youtube: null, joints: {}
  },
  {
    id: 207, name: "Peanut Butter", alt: "Natural, no added oil or sugar",
    desc: "Peanut butter is one of the most practical calorie-dense foods for athletes — combining protein, monounsaturated fat, arginine, niacin and vitamin E in a stable, shelf-safe, versatile format. It is used across sports for its practicality: on toast, in shakes, as a dip or straight off a spoon. Choose natural varieties with two ingredients only: peanuts and salt.",
    muscles: [{n:"Monounsaturated Fat",p:true},{n:"Protein",p:true},{n:"Arginine",p:false},{n:"Vitamin E",p:false},{n:"Niacin B3",p:false}],
    tags: ["legume","high-calorie","protein","portable","keto"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Arginine supports nitric oxide and blood flow. Practical high-protein, high-fat food for hard gainers."},
    vol: {suit:true,  eff:5, note:"Most practical calorie-dense food for adding bulk to meals without volume. 2 tbsp = ~190 kcal."},
    end: {suit:true,  eff:3, note:"Sustained energy from combined fat + protein. Good between long training sessions."},
    risk: 4, cues: "Choose natural (ingredients: peanuts, salt). Stir the separated oil back in before using. Commercial brands (Skippy, Jif) contain added palm oil and sugar. Store natural PB upside down in the fridge to prevent oil separation. One of the most common food allergens.",
    equipment: "None — ready to eat",
    position: "Any meal · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g (natural, unsalted)",
      calories: 588,
      macros: [
        { key:"protein", label:"Protein", grams:"25.0g", percent:16, kcal:100, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"50.0g", percent:71, kcal:450, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"20.0g", percent:13, kcal:80, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"9.5 mg", daily:63, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.07 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"92 mcg DFE", daily:23, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"1.4 mg", daily:28, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"43 mg", daily:3, color:"#4f8df7" },
          { label:"Iron", amount:"1.9 mg", daily:11, color:"#e26d5a" },
          { label:"Magnesium", amount:"168 mg", daily:40, color:"#4fb66f" },
          { label:"Phosphorus", amount:"358 mg", daily:29, color:"#8f74ff" },
          { label:"Potassium", amount:"649 mg", daily:14, color:"#f6b23b" },
          { label:"Zinc", amount:"2.8 mg", daily:25, color:"#25b9a7" },
          { label:"Selenium", amount:"3.0 mcg", daily:5, color:"#d982d0" },
          { label:"Sodium", amount:"5 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.96 g", daily:80, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.13 g", daily:81, color:"#4fb66f" },
          { label:"Valine", amount:"1.25 g", daily:60, color:"#f6b23b" },
          { label:"Lysine", amount:"2.27 g", daily:87, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.95 g", daily:68, color:"#e26d5a" },
          { label:"Threonine", amount:"1.06 g", daily:72, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.29 g", daily:104, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.95 g", daily:70, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"6.0 g", daily:21, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"2.0 g", daily:7, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"4.0 g", daily:14, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"1 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"5 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"649 mg", daily:14, color:"#f6b23b" },
          { label:"Magnesium", amount:"168 mg", daily:40, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key peanut-butter-specific nutrients",
        note: "Natural peanut butter (no added oil or sugar) separates and needs stirring — values are for that style, not commercial sweetened versions.",
        items: [
          { label:"Niacin (B3)", amount:"13.5 mg", daily:84, color:"#8f74ff" }
        ]
      },
      note: "2 tbsp (32g) is a typical serving at ~188 kcal. Check labels — many commercial brands add sugar, salt and palm oil, significantly altering this profile."
    },
    youtube: null, joints: {}
  },
  {
    id: 209, name: "Flaxseeds / Linseeds", alt: "Ground or whole",
    desc: "Flaxseeds are the richest plant source of ALA omega-3 fatty acids and also provide lignans — a class of phytoestrogen with antioxidant and anti-inflammatory properties. Ground flaxseed is significantly better absorbed than whole (the hull prevents digestion). They are also an exceptional source of soluble and insoluble fibre, supporting gut motility and cholesterol management.",
    muscles: [{n:"Omega-3 ALA",p:true},{n:"Lignans",p:true},{n:"Fibre",p:true},{n:"Magnesium",p:false},{n:"Manganese",p:false}],
    tags: ["seed","omega-3","fibre","anti-inflammatory","vegan"],
    diff: 1,
    str: {suit:true,  eff:3, note:"ALA reduces systemic inflammation. Fibre supports gut health under training stress."},
    vol: {suit:true,  eff:3, note:"Easy add-in to oats, shakes or yoghurt with no change to texture or flavour."},
    end: {suit:true,  eff:4, note:"Anti-inflammatory ALA and lignans reduce chronic inflammation from high training volumes."},
    risk: 1, cues: "Always use ground flaxseed (also sold as milled linseed) — whole seeds pass through undigested. Store ground flax in the fridge as the fats oxidise quickly. 1–2 tablespoons per day is the practical dose. Add to porridge, smoothies, yoghurt or bread batter.",
    equipment: "None — ready to eat",
    position: "Added to meals · Breakfast",
    nutritionProfile: {
      servingLabel: "Amount per 100g",
      calories: 534,
      macros: [
        { key:"protein", label:"Protein", grams:"18.3g", percent:13, kcal:73, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"42.2g", percent:67, kcal:380, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"28.9g", percent:20, kcal:116, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.3 mg", daily:2, color:"#8f74ff" },
          { label:"Vitamin K", amount:"4.3 mcg", daily:4, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.16 mg", daily:12, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"87 mcg DFE", daily:22, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.57 mg", daily:11, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"255 mg", daily:20, color:"#4f8df7" },
          { label:"Iron", amount:"5.7 mg", daily:32, color:"#e26d5a" },
          { label:"Magnesium", amount:"392 mg", daily:93, color:"#4fb66f" },
          { label:"Phosphorus", amount:"642 mg", daily:51, color:"#8f74ff" },
          { label:"Potassium", amount:"813 mg", daily:17, color:"#f6b23b" },
          { label:"Zinc", amount:"4.3 mg", daily:39, color:"#25b9a7" },
          { label:"Selenium", amount:"25.4 mcg", daily:46, color:"#d982d0" },
          { label:"Sodium", amount:"30 mg", daily:1, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.43 g", daily:58, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.83 g", daily:59, color:"#4fb66f" },
          { label:"Valine", amount:"0.92 g", daily:44, color:"#f6b23b" },
          { label:"Lysine", amount:"1.66 g", daily:64, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.70 g", daily:50, color:"#e26d5a" },
          { label:"Threonine", amount:"0.78 g", daily:53, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.21 g", daily:75, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.43 g", daily:51, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"27.3 g", daily:98, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"8.0 g", daily:29, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"19.3 g", daily:69, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"7 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"30 mg", daily:1, color:"#72a6d8" },
          { label:"Potassium", amount:"813 mg", daily:17, color:"#f6b23b" },
          { label:"Magnesium", amount:"392 mg", daily:93, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key flaxseed-specific nutrients",
        note: "Flaxseed must be ground to release its nutrients — whole seeds largely pass through undigested.",
        items: [
          { label:"Omega-3 ALA", amount:"22.8 g per 100g — the richest plant source available", daily:0, color:"#8f74ff" },
          { label:"Lignans", amount:"75–800x more lignans than any other plant food, with phytoestrogen and antioxidant activity", daily:0, color:"#4fb66f" }
        ]
      },
      note: "1–2 tbsp ground (7–14g) is a practical daily serving. Buy whole and grind fresh in small batches, or refrigerate pre-ground — the oils oxidise quickly once milled."
    },
    youtube: null, joints: {}
  },
  {
    id: 210, name: "Hemp Seeds", alt: "Hulled hemp hearts",
    desc: "Hemp seeds (hemp hearts) are uniquely positioned as both a fat and a protein source — providing 10 g protein and 14 g fat per 30 g serving. The protein is complete with an excellent BCAA profile. The fat profile is exceptional: a 3:1 omega-6 to omega-3 ratio — near the ideal ratio for anti-inflammatory balance. They also provide GLA (gamma-linolenic acid), which specifically reduces chronic inflammation.",
    muscles: [{n:"Complete Protein",p:true},{n:"Omega-3 ALA",p:true},{n:"GLA",p:true},{n:"Magnesium",p:false},{n:"Iron",p:false}],
    tags: ["seed","complete","omega-3","anti-inflammatory","vegan"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Complete protein + anti-inflammatory fat in one food. GLA reduces chronic training inflammation."},
    vol: {suit:true,  eff:3, note:"Excellent add-in to salads, yoghurt and smoothies for a protein + fat boost."},
    end: {suit:true,  eff:4, note:"Optimal omega-6:3 ratio reduces systemic inflammation accumulated over long training blocks."},
    risk: 1, cues: "Ready to eat — no prep needed. Sprinkle on salads, blend into smoothies, mix into yoghurt or oatmeal. Mild, slightly nutty flavour. Hemp hearts are hulled so they are soft, not crunchy. Store in fridge after opening.",
    equipment: "None — ready to eat",
    position: "Added to meals · Breakfast · Post-workout",
    nutritionProfile: {
      servingLabel: "Amount per 100g hulled",
      calories: 553,
      macros: [
        { key:"protein", label:"Protein", grams:"31.6g", percent:21, kcal:126, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"48.8g", percent:73, kcal:439, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"8.7g", percent:6, kcal:35, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"1 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.8 mg", daily:5, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.11 mg", daily:8, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"110 mcg DFE", daily:28, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.57 mg", daily:11, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"70 mg", daily:5, color:"#4f8df7" },
          { label:"Iron", amount:"7.95 mg", daily:44, color:"#e26d5a" },
          { label:"Magnesium", amount:"700 mg", daily:167, color:"#4fb66f" },
          { label:"Phosphorus", amount:"1650 mg", daily:132, color:"#8f74ff" },
          { label:"Potassium", amount:"1200 mg", daily:26, color:"#f6b23b" },
          { label:"Zinc", amount:"9.9 mg", daily:90, color:"#25b9a7" },
          { label:"Selenium", amount:"1.75 mcg", daily:3, color:"#d982d0" },
          { label:"Sodium", amount:"5 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"2.48 g", daily:101, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.43 g", daily:102, color:"#4fb66f" },
          { label:"Valine", amount:"1.58 g", daily:75, color:"#f6b23b" },
          { label:"Lysine", amount:"2.86 g", daily:110, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"1.20 g", daily:86, color:"#e26d5a" },
          { label:"Threonine", amount:"1.35 g", daily:91, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.37 g", daily:132, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.47 g", daily:89, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"4.0 g", daily:14, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.6 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"3.4 g", daily:12, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"5 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"5 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"1200 mg", daily:26, color:"#f6b23b" },
          { label:"Magnesium", amount:"700 mg", daily:167, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key hemp-seed-specific nutrients",
        note: "Hemp seed protein is unusually complete for a plant source and the omega-6:omega-3 ratio (roughly 3:1) is considered favourable.",
        items: [
          { label:"Omega-3 ALA", amount:"9.3 g per 100g", daily:0, color:"#8f74ff" },
          { label:"Omega-6 LA", amount:"28.7 g per 100g", daily:0, color:"#4fb66f" }
        ]
      },
      note: "3 tbsp (30g) is a typical serving providing ~9.5g complete plant protein. Hulled hemp hearts have a mild, nutty flavour and no psychoactive compounds."
    },
    youtube: null, joints: {}
  },
  {
    id: 211, name: "Pumpkin Seeds", alt: "Pepitas — hulled",
    desc: "Pumpkin seeds are the highest plant food source of zinc — one of the most critical minerals for athletes, involved in testosterone production, immune function, wound healing and protein synthesis. A 30 g serving provides about 3 mg zinc (27% DV) alongside magnesium, iron, manganese and alpha-linolenic acid. The tryptophan content also supports serotonin and melatonin production.",
    muscles: [{n:"Zinc",p:true},{n:"Magnesium",p:true},{n:"Iron",p:false},{n:"Omega-3 ALA",p:false},{n:"Tryptophan",p:false}],
    tags: ["seed","zinc","magnesium","sleep","vegan"],
    diff: 1,
    str: {suit:true,  eff:5, note:"Highest plant zinc source. Zinc is directly involved in testosterone synthesis and protein metabolism."},
    vol: {suit:true,  eff:4, note:"Magnesium reduces muscle cramps and supports sleep quality during high-volume phases."},
    end: {suit:true,  eff:4, note:"Iron supports haemoglobin. Tryptophan supports melatonin and sleep quality."},
    risk: 1, cues: "30 g = roughly 85 seeds and ~160 kcal. Toast in a dry pan 3–4 min for a nuttier flavour — keep moving to prevent burning. Add to salads, oatmeal, yoghurt or eat as a snack. Green (pepita) seeds are already hulled and ready to eat. Excellent trail mix component.",
    equipment: "Pan for toasting — or none",
    position: "Snack · Added to meals · Pre-sleep",
    nutritionProfile: {
      servingLabel: "Amount per 100g hulled (pepitas)",
      calories: 559,
      macros: [
        { key:"protein", label:"Protein", grams:"30.2g", percent:20, kcal:121, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"49.1g", percent:73, kcal:442, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"10.7g", percent:7, kcal:43, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"1 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.6 mg", daily:4, color:"#8f74ff" },
          { label:"Vitamin K", amount:"4.1 mcg", daily:3, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.32 mg", daily:25, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"58 mcg DFE", daily:14, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.75 mg", daily:15, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"46 mg", daily:4, color:"#4f8df7" },
          { label:"Iron", amount:"8.8 mg", daily:49, color:"#e26d5a" },
          { label:"Magnesium", amount:"592 mg", daily:141, color:"#4fb66f" },
          { label:"Phosphorus", amount:"1233 mg", daily:99, color:"#8f74ff" },
          { label:"Potassium", amount:"809 mg", daily:17, color:"#f6b23b" },
          { label:"Zinc", amount:"7.8 mg", daily:71, color:"#25b9a7" },
          { label:"Selenium", amount:"9.4 mcg", daily:17, color:"#d982d0" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"2.37 g", daily:97, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.37 g", daily:98, color:"#4fb66f" },
          { label:"Valine", amount:"1.51 g", daily:72, color:"#f6b23b" },
          { label:"Lysine", amount:"2.74 g", daily:105, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"1.15 g", daily:82, color:"#e26d5a" },
          { label:"Threonine", amount:"1.29 g", daily:87, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.35 g", daily:125, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.36 g", daily:85, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"6.0 g", daily:21, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.0 g", daily:4, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"5.0 g", daily:18, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"5 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"809 mg", daily:17, color:"#f6b23b" },
          { label:"Magnesium", amount:"592 mg", daily:141, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key pumpkin-seed-specific nutrients",
        note: "Pumpkin seeds have one of the highest magnesium and zinc densities of any common food.",
        items: [
          { label:"Magnesium", amount:"592 mg", daily:141, color:"#8f74ff" },
          { label:"Zinc", amount:"7.8 mg", daily:71, color:"#4fb66f" }
        ]
      },
      note: "30g (about 3 tbsp) is a typical snack serving at ~168 kcal. Dry-roasting at home avoids the added oil and salt common in store-bought versions."
    },
    youtube: null, joints: {}
  },
  {
    id: 212, name: "Dark Chocolate (85%+)", alt: "Cocoa 85% and above",
    desc: "High-percentage dark chocolate is a genuinely functional food, not merely a treat. It contains flavanols that stimulate nitric oxide production, improving blood flow and reducing blood pressure. It provides iron, magnesium, zinc, copper and manganese. Research shows cocoa flavanols reduce exercise-induced oxidative stress and improve blood vessel function measurably within hours of consumption.",
    muscles: [{n:"Flavanols",p:true},{n:"Iron",p:true},{n:"Magnesium",p:true},{n:"Zinc",p:false},{n:"Antioxidants",p:false}],
    tags: ["plant","functional-food","anti-oxidant","nitric-oxide","iron","magnesium"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Nitric oxide from flavanols improves blood flow and performance. Iron and magnesium are directly relevant to strength athletes."},
    vol: {suit:true,  eff:3, note:"Calorie-dense — works well as a between-meal energy source in high-volume phases."},
    end: {suit:true,  eff:5, note:"Flavanol-induced NO production improves endurance capacity. Anti-inflammatory. Best pre-workout (1–2 hours before)."},
    risk: 1, cues: "85%+ cocoa only — below this the sugar content outweighs the benefits. A 20–30 g serving (2–3 squares) is the practical dose. Paired with coffee, the caffeine + theobromine + flavanols combination is a natural pre-workout. Lindt 90% and Green & Black's 85% are widely available.",
    equipment: "None — ready to eat",
    position: "Snack · Pre-workout (1–2 hrs) · Post-dinner",
    nutritionProfile: {
      servingLabel: "Amount per 100g (85% cocoa)",
      calories: 598,
      macros: [
        { key:"protein", label:"Protein", grams:"7.8g", percent:5, kcal:31, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"43.1g", percent:64, kcal:388, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"45.9g", percent:31, kcal:184, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"2 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.6 mg", daily:4, color:"#8f74ff" },
          { label:"Vitamin K", amount:"4.5 mcg", daily:4, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.08 mg", daily:6, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"11 mcg DFE", daily:3, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.4 mg", daily:8, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"73 mg", daily:6, color:"#4f8df7" },
          { label:"Iron", amount:"11.9 mg", daily:66, color:"#e26d5a" },
          { label:"Magnesium", amount:"228 mg", daily:54, color:"#4fb66f" },
          { label:"Phosphorus", amount:"308 mg", daily:25, color:"#8f74ff" },
          { label:"Potassium", amount:"715 mg", daily:15, color:"#f6b23b" },
          { label:"Zinc", amount:"3.3 mg", daily:30, color:"#25b9a7" },
          { label:"Selenium", amount:"6.8 mcg", daily:12, color:"#d982d0" },
          { label:"Sodium", amount:"20 mg", daily:1, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"0.37 g", daily:15, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.21 g", daily:15, color:"#4fb66f" },
          { label:"Valine", amount:"0.23 g", daily:11, color:"#f6b23b" },
          { label:"Lysine", amount:"0.42 g", daily:16, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.18 g", daily:13, color:"#e26d5a" },
          { label:"Threonine", amount:"0.20 g", daily:14, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.05 g", daily:18, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.37 g", daily:13, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"10.9 g", daily:39, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.5 g", daily:5, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"9.4 g", daily:34, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"1 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"20 mg", daily:1, color:"#72a6d8" },
          { label:"Potassium", amount:"715 mg", daily:15, color:"#f6b23b" },
          { label:"Magnesium", amount:"228 mg", daily:54, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key dark-chocolate-specific nutrients",
        note: "85%+ dark chocolate has one of the highest flavanol antioxidant densities of any common food, alongside exceptional iron and magnesium for its category.",
        items: [
          { label:"Iron", amount:"11.9 mg", daily:66, color:"#8f74ff" },
          { label:"Flavanols", amount:"cocoa polyphenols linked to improved blood flow and blood pressure", daily:0, color:"#4fb66f" }
        ]
      },
      note: "A 20–30g serving (3–5 squares) delivers most of the antioxidant benefit without excessive calories. Sugar content rises sharply below 70% cocoa — 85%+ keeps added sugar minimal."
    },
    youtube: null, joints: {}
  },
  {
    id: 213, name: "Coconut Oil", alt: "Virgin / unrefined",
    desc: "Coconut oil is predominantly medium-chain triglycerides (MCTs), particularly lauric acid, which are metabolised differently from long-chain fatty acids — absorbed directly into the portal circulation and used preferentially for immediate energy rather than stored as fat. This makes MCTs a useful training fuel. Virgin coconut oil also retains polyphenols with antimicrobial and anti-inflammatory properties.",
    muscles: [{n:"MCT Fat",p:true},{n:"Lauric Acid",p:false},{n:"Polyphenols",p:false}],
    tags: ["oil","MCT","energy","keto","anti-microbial"],
    diff: 1,
    str: {suit:true,  eff:3, note:"MCTs provide quick energy for training. Useful in a ketogenic approach to strength training."},
    vol: {suit:true,  eff:3, note:"Calorie-dense cooking fat. Adds approximately 120 kcal per tablespoon."},
    end: {suit:true,  eff:3, note:"MCTs are oxidised rapidly for energy. Research mixed for endurance specifically — more useful in keto-adapted athletes."},
    risk: 2, cues: "Virgin coconut oil is solid at room temperature (below 24 °C) — this is normal. High smoke point (~175 °C) makes it suitable for medium-high heat cooking. Use 1 tsp not 1 tbsp — it is easy to overconsume. Refined coconut oil has no coconut flavour; virgin retains it.",
    equipment: "Pan — or stirred into coffee/hot drinks",
    position: "Cooking fat · Added to coffee · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per tbsp (13.6g)",
      calories: 121,
      macros: [
        { key:"protein", label:"Protein", grams:"0g", percent:0, kcal:0, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"13.6g", percent:100, kcal:122, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.03 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.03 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"0 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0.05 mg", daily:0, color:"#e26d5a" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" },
          { label:"Phosphorus", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Potassium", amount:"0 mg", daily:0, color:"#f6b23b" },
          { label:"Zinc", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Selenium", amount:"0 mcg", daily:0, color:"#d982d0" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"0 mg", daily:0, color:"#f6b23b" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key coconut-oil-specific nutrients",
        note: "Coconut oil is roughly 90% saturated fat, predominantly medium-chain triglycerides (MCTs) which are metabolised differently from long-chain saturated fats.",
        items: [
          { label:"Lauric Acid", amount:"~45% of total fat — a medium-chain saturated fat with antimicrobial properties", daily:0, color:"#8f74ff" }
        ]
      },
      note: "Solid below ~24°C, liquid above — both states are equally usable. High saturated fat content means it should be used in moderation alongside primarily unsaturated cooking fats."
    },
    youtube: null, joints: {}
  },
  {
    id: 214, name: "Grass-Fed Butter / Ghee", alt: "Unsalted butter / clarified butter",
    desc: "Grass-fed butter is significantly higher in CLA (conjugated linoleic acid), vitamin K2, and omega-3s than grain-fed butter — a meaningful nutritional difference. Ghee is clarified butter with the milk solids removed, making it virtually lactose and casein-free, and raising its smoke point to ~250 °C. Vitamin K2 specifically directs calcium into bones and away from arteries.",
    muscles: [{n:"CLA",p:true},{n:"Vitamin K2",p:true},{n:"Saturated Fat",p:false},{n:"Vitamin A",p:false},{n:"Butyrate",p:false}],
    tags: ["dairy","CLA","vitamin-K2","high-heat","keto"],
    diff: 1,
    str: {suit:true,  eff:3, note:"CLA supports body composition. Vitamin K2 supports bone density under heavy loading."},
    vol: {suit:true,  eff:3, note:"Calorie-dense cooking fat. Easy to add calories in bulk phases."},
    end: {suit:true,  eff:2, note:"Saturated fat content — use in moderation outside of a ketogenic context."},
    risk: 2, cues: "Ghee is preferred over butter for high-heat cooking — butter burns at ~175 °C while ghee handles 250 °C. Grass-fed brands (Kerrygold, Anchor) are meaningfully better than supermarket own-brand. Ghee is essentially lactose-free — tolerable for most lactose-sensitive individuals.",
    equipment: "Pan",
    position: "Cooking fat · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per tbsp (14g, ghee)",
      calories: 120,
      macros: [
        { key:"protein", label:"Protein", grams:"0.1g", percent:0, kcal:0, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"13.9g", percent:100, kcal:125, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"108 mcg RAE", daily:12, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0.1 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.3 mg", daily:2, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.6 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"1 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" },
          { label:"Phosphorus", amount:"1 mg", daily:0, color:"#8f74ff" },
          { label:"Potassium", amount:"1 mg", daily:0, color:"#f6b23b" },
          { label:"Zinc", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Selenium", amount:"0 mcg", daily:0, color:"#d982d0" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"1 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"1 mg", daily:0, color:"#f6b23b" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key ghee/butter-specific nutrients",
        note: "Grass-fed butter and ghee carry more vitamin K2 and beta-carotene than grain-fed equivalents.",
        items: [
          { label:"Vitamin K2", amount:"trace amounts unique to grass-fed dairy fat, involved in calcium regulation", daily:0, color:"#8f74ff" },
          { label:"Butyrate", amount:"short-chain fatty acid that supports gut lining health", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Ghee has milk solids removed, giving it a higher smoke point (~250°C) than butter (~150°C) and making it suitable for those with mild dairy-protein sensitivity."
    },
    youtube: null, joints: {}
  },
  {
    id: 215, name: "Almond Butter", alt: "Natural, no added sugar",
    desc: "Almond butter delivers the nutritional benefits of almonds in a spreadable, convenient format — particularly vitamin E, magnesium and monounsaturated fat. It has a slightly higher monounsaturated fat content than peanut butter and a more delicate flavour. The magnesium content is meaningful: two tablespoons provides ~50 mg, supporting muscle function, sleep quality and ATP production.",
    muscles: [{n:"Monounsaturated Fat",p:true},{n:"Vitamin E",p:true},{n:"Magnesium",p:true},{n:"Calcium",p:false},{n:"Protein",p:false}],
    tags: ["nut","vitamin-E","magnesium","versatile","vegan"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Magnesium supports ATP production and sleep quality. Vitamin E reduces training oxidative stress."},
    vol: {suit:true,  eff:4, note:"Calorie-dense, convenient addition to oats, rice cakes and smoothies."},
    end: {suit:true,  eff:4, note:"Sustained energy from monounsaturated fat. Magnesium reduces muscle soreness."},
    risk: 4, cues: "Choose natural (ingredients: almonds only, or almonds and salt). Oil separation is normal — stir before use. Roasted varieties have more flavour; raw has marginally more vitamin E. Tree nut allergy — avoid. Store in fridge after opening.",
    equipment: "None — ready to eat",
    position: "Any meal · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g (natural)",
      calories: 614,
      macros: [
        { key:"protein", label:"Protein", grams:"21.0g", percent:13, kcal:84, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"55.5g", percent:76, kcal:500, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"19.0g", percent:11, kcal:76, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"24.2 mg", daily:161, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.86 mg", daily:66, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"44 mcg DFE", daily:11, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.4 mg", daily:8, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"347 mg", daily:27, color:"#4f8df7" },
          { label:"Iron", amount:"3.5 mg", daily:19, color:"#e26d5a" },
          { label:"Magnesium", amount:"279 mg", daily:66, color:"#4fb66f" },
          { label:"Phosphorus", amount:"484 mg", daily:39, color:"#8f74ff" },
          { label:"Potassium", amount:"748 mg", daily:16, color:"#f6b23b" },
          { label:"Zinc", amount:"3.3 mg", daily:30, color:"#25b9a7" },
          { label:"Selenium", amount:"3.7 mcg", daily:7, color:"#d982d0" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.65 g", daily:67, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.95 g", daily:68, color:"#4fb66f" },
          { label:"Valine", amount:"1.05 g", daily:50, color:"#f6b23b" },
          { label:"Lysine", amount:"1.90 g", daily:73, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.80 g", daily:57, color:"#e26d5a" },
          { label:"Threonine", amount:"0.89 g", daily:60, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.24 g", daily:86, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.64 g", daily:59, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"10.3 g", daily:37, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"2.5 g", daily:9, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"7.8 g", daily:28, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"1 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"7 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"748 mg", daily:16, color:"#f6b23b" },
          { label:"Magnesium", amount:"279 mg", daily:66, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key almond-butter-specific nutrients",
        note: "Roasting reduces vitamin E content slightly compared with raw almonds — raw almond butter retains the most.",
        items: [
          { label:"Manganese", amount:"2.3 mg", daily:100, color:"#8f74ff" }
        ]
      },
      note: "2 tbsp (32g) is a typical serving at ~196 kcal. Natural varieties separate and need stirring — check labels for added oil, sugar or salt."
    },
    youtube: null, joints: {}
  },
  {
    id: 216, name: "Cashews", alt: "Raw or dry-roasted",
    desc: "Cashews have a uniquely creamy texture and mild flavour that makes them the most versatile nut in cooking — they blend into cream sauces, milk alternatives, dips and desserts. They are exceptionally rich in copper (crucial for collagen synthesis, iron metabolism and antioxidant enzymes) and provide meaningful magnesium and zinc alongside monounsaturated fat.",
    muscles: [{n:"Monounsaturated Fat",p:true},{n:"Copper",p:true},{n:"Magnesium",p:false},{n:"Zinc",p:false},{n:"Iron",p:false}],
    tags: ["nut","copper","versatile","vegan","magnesium"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Copper is essential for collagen crosslinking in tendons and connective tissue. Zinc supports protein synthesis."},
    vol: {suit:true,  eff:4, note:"Blend soaked cashews into sauces and smoothies for calorie-dense, dairy-free creaminess."},
    end: {suit:true,  eff:3, note:"Magnesium supports energy metabolism and reduces muscle fatigue."},
    risk: 4, cues: "30 g = ~18 cashews and ~160 kcal. Soak 4–6 hours before blending into cashew cream or milk. Raw cashews sold in shops are actually steamed (truly raw cashews contain urushiol). Tree nut allergy — avoid.",
    equipment: "None — ready to eat · Blender for cashew cream",
    position: "Snack · Added to meals",
    nutritionProfile: {
      servingLabel: "Amount per 100g raw",
      calories: 553,
      macros: [
        { key:"protein", label:"Protein", grams:"18.2g", percent:12, kcal:73, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"43.9g", percent:67, kcal:395, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"30.2g", percent:21, kcal:121, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.9 mg", daily:6, color:"#8f74ff" },
          { label:"Vitamin K", amount:"34.1 mcg", daily:28, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.06 mg", daily:5, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"25 mcg DFE", daily:6, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.86 mg", daily:17, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"37 mg", daily:3, color:"#4f8df7" },
          { label:"Iron", amount:"6.7 mg", daily:37, color:"#e26d5a" },
          { label:"Magnesium", amount:"292 mg", daily:70, color:"#4fb66f" },
          { label:"Phosphorus", amount:"593 mg", daily:47, color:"#8f74ff" },
          { label:"Potassium", amount:"660 mg", daily:14, color:"#f6b23b" },
          { label:"Zinc", amount:"5.8 mg", daily:53, color:"#25b9a7" },
          { label:"Selenium", amount:"19.9 mcg", daily:36, color:"#d982d0" },
          { label:"Sodium", amount:"12 mg", daily:1, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.43 g", daily:58, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.82 g", daily:59, color:"#4fb66f" },
          { label:"Valine", amount:"0.91 g", daily:43, color:"#f6b23b" },
          { label:"Lysine", amount:"1.65 g", daily:63, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.69 g", daily:49, color:"#e26d5a" },
          { label:"Threonine", amount:"0.78 g", daily:53, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.21 g", daily:75, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.42 g", daily:51, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"3.3 g", daily:12, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.5 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"2.8 g", daily:10, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"5 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"12 mg", daily:1, color:"#72a6d8" },
          { label:"Potassium", amount:"660 mg", daily:14, color:"#f6b23b" },
          { label:"Magnesium", amount:"292 mg", daily:70, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key cashew-specific nutrients",
        note: "Cashews are notably lower in fibre than most other tree nuts, but higher in iron and zinc.",
        items: [
          { label:"Copper", amount:"2.2 mg", daily:244, color:"#8f74ff" }
        ]
      },
      note: "30g (about 18 cashews) is a typical serving at ~166 kcal. Roasting destroys the toxic resin found on raw, in-shell cashews — shelled cashews sold commercially are always pre-treated and safe."
    },
    youtube: null, joints: {}
  },
  {
    id: 217, name: "Sunflower Seeds", alt: "Hulled, dry-roasted or raw",
    desc: "Sunflower seeds are the richest food source of vitamin E — one 30 g serving provides 7.4 mg, which is 49% of the daily value in one small snack. They also contain linoleic acid (an essential omega-6 fatty acid), selenium, magnesium, B vitamins and phytosterols that compete with dietary cholesterol for absorption. The vitamin E acts as a fat-soluble antioxidant protecting cell membranes.",
    muscles: [{n:"Vitamin E",p:true},{n:"Selenium",p:false},{n:"Magnesium",p:false},{n:"Linoleic Acid",p:false},{n:"Phytosterols",p:false}],
    tags: ["seed","vitamin-E","antioxidant","portable","vegan"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Vitamin E protects muscle cell membranes from exercise-induced oxidative damage."},
    vol: {suit:true,  eff:3, note:"Easy add-in to salads, oatmeal and trail mixes. Good between-meal snack."},
    end: {suit:true,  eff:4, note:"Selenium and vitamin E together form a powerful antioxidant system — particularly relevant for endurance athletes with high oxidative stress."},
    risk: 1, cues: "30 g = roughly 3 tablespoons. Dry-roasted in a pan 3–4 min — brings out nuttiness. Sprinkle on yoghurt, salads and grain bowls. Sunflower seed butter is an option for those with tree nut allergies. Check for added salt in packaged varieties.",
    equipment: "None — or pan for toasting",
    position: "Snack · Added to meals",
    nutritionProfile: {
      servingLabel: "Amount per 100g hulled",
      calories: 584,
      macros: [
        { key:"protein", label:"Protein", grams:"20.8g", percent:13, kcal:83, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"51.5g", percent:74, kcal:464, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"20.0g", percent:13, kcal:80, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"1 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"35.2 mg", daily:235, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.36 mg", daily:28, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"227 mcg DFE", daily:57, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"6.97 mg", daily:139, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"78 mg", daily:6, color:"#4f8df7" },
          { label:"Iron", amount:"5.0 mg", daily:28, color:"#e26d5a" },
          { label:"Magnesium", amount:"325 mg", daily:77, color:"#4fb66f" },
          { label:"Phosphorus", amount:"660 mg", daily:53, color:"#8f74ff" },
          { label:"Potassium", amount:"645 mg", daily:14, color:"#f6b23b" },
          { label:"Zinc", amount:"5.0 mg", daily:45, color:"#25b9a7" },
          { label:"Selenium", amount:"53 mcg", daily:96, color:"#d982d0" },
          { label:"Sodium", amount:"9 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.63 g", daily:67, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.94 g", daily:67, color:"#4fb66f" },
          { label:"Valine", amount:"1.04 g", daily:50, color:"#f6b23b" },
          { label:"Lysine", amount:"1.88 g", daily:72, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.79 g", daily:56, color:"#e26d5a" },
          { label:"Threonine", amount:"0.89 g", daily:60, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.24 g", daily:86, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.62 g", daily:58, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"8.6 g", daily:31, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.5 g", daily:5, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"7.1 g", daily:25, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"4 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"9 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"645 mg", daily:14, color:"#f6b23b" },
          { label:"Magnesium", amount:"325 mg", daily:77, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key sunflower-seed-specific nutrients",
        note: "Sunflower seeds are one of the richest whole-food sources of vitamin E and selenium available.",
        items: [
          { label:"Vitamin E", amount:"35.2 mg", daily:235, color:"#8f74ff" },
          { label:"Selenium", amount:"53 mcg", daily:96, color:"#4fb66f" }
        ]
      },
      note: "30g (about 3 tbsp) is a typical snack serving at ~175 kcal. Dry-roasted, unsalted is preferable to avoid excess sodium found in salted/shell-on versions."
    },
    youtube: null, joints: {}
  },
  {
    id: 218, name: "Tahini", alt: "Ground sesame seed paste",
    desc: "Tahini is ground sesame paste — the richest food source of sesamin and sesamolin, lignans with unique anti-inflammatory and liver-protective properties. It is also very high in calcium (130 mg per 30 g — comparable to dairy), copper, manganese and zinc. As a cooking ingredient it transforms into dressings, sauces, dips (hummus) and smoothies and adds a nutty depth that is difficult to replicate.",
    muscles: [{n:"Monounsaturated Fat",p:true},{n:"Calcium",p:true},{n:"Sesamin",p:true},{n:"Copper",p:false},{n:"Zinc",p:false}],
    tags: ["seed","calcium","anti-inflammatory","versatile","vegan"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Calcium and zinc support bone density and testosterone. Sesamin has anti-inflammatory properties."},
    vol: {suit:true,  eff:4, note:"Highly versatile — use as dressing, dip, sauce or shake add-in. Dense calories."},
    end: {suit:true,  eff:3, note:"Calcium for bone health in high-impact sports. Anti-inflammatory lignans."},
    risk: 2, cues: "Stir thoroughly — oil separates on storage. Thin with lemon juice and water for dressing. Blend into hummus, drizzle on roasted vegetables or add 1 tbsp to smoothies. Strong, slightly bitter flavour — balance with lemon, garlic and salt. Sesame allergy is increasingly common — check.",
    equipment: "None — ready to use · Blender for sauces",
    position: "Added to meals · Dressing · Dip",
    nutritionProfile: {
      servingLabel: "Amount per 100g",
      calories: 595,
      macros: [
        { key:"protein", label:"Protein", grams:"17.0g", percent:11, kcal:68, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"53.8g", percent:76, kcal:484, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"21.2g", percent:13, kcal:85, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.25 mg", daily:2, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.47 mg", daily:36, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"98 mcg DFE", daily:24, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"1.36 mg", daily:27, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"426 mg", daily:33, color:"#4f8df7" },
          { label:"Iron", amount:"9.0 mg", daily:50, color:"#e26d5a" },
          { label:"Magnesium", amount:"362 mg", daily:86, color:"#4fb66f" },
          { label:"Phosphorus", amount:"732 mg", daily:59, color:"#8f74ff" },
          { label:"Potassium", amount:"414 mg", daily:9, color:"#f6b23b" },
          { label:"Zinc", amount:"4.6 mg", daily:42, color:"#25b9a7" },
          { label:"Selenium", amount:"34.4 mcg", daily:63, color:"#d982d0" },
          { label:"Sodium", amount:"115 mg", daily:5, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.33 g", daily:54, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.77 g", daily:55, color:"#4fb66f" },
          { label:"Valine", amount:"0.85 g", daily:40, color:"#f6b23b" },
          { label:"Lysine", amount:"1.54 g", daily:59, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.65 g", daily:46, color:"#e26d5a" },
          { label:"Threonine", amount:"0.72 g", daily:49, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.20 g", daily:71, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.33 g", daily:48, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"9.3 g", daily:33, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.5 g", daily:5, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"7.8 g", daily:28, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"3 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"115 mg", daily:5, color:"#72a6d8" },
          { label:"Potassium", amount:"414 mg", daily:9, color:"#f6b23b" },
          { label:"Magnesium", amount:"362 mg", daily:86, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key tahini-specific nutrients",
        note: "Tahini is one of the richest plant sources of calcium and copper available — the base ingredient in hummus and halva.",
        items: [
          { label:"Copper", amount:"1.5 mg", daily:167, color:"#8f74ff" }
        ]
      },
      note: "2 tbsp (30g) is a typical serving at ~178 kcal. Stir well before use — oil separation is normal for natural, unsweetened tahini."
    },
    youtube: null, joints: {}
  },
  {
    id: 219, name: "MCT Oil", alt: "Medium-chain triglyceride oil",
    desc: "MCT oil is a concentrated extract of medium-chain triglycerides (primarily caprylic and capric acid) from coconut or palm kernel oil. Unlike long-chain fatty acids, MCTs bypass the lymphatic system and go directly to the liver where they are rapidly converted to ketones, providing near-immediate energy for the brain and muscles. Popular in ketogenic diets and as a pre-training energy source.",
    muscles: [{n:"MCT Fat",p:true},{n:"Ketones",p:true}],
    tags: ["supplement","oil","MCT","keto","energy"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Quick energy for training sessions. Supports keto-adapted athletes. No impact on insulin."},
    vol: {suit:true,  eff:3, note:"Easy calorie addition to coffee or shakes. Not dependent on glucose metabolism."},
    end: {suit:true,  eff:4, note:"Ketones provide an alternative fuel for the brain during long sessions. Some evidence for endurance performance in fat-adapted athletes."},
    risk: 2, cues: "Start with 1 tsp — GI distress (nausea, loose stools) is common when starting. Build to 1–2 tbsp over 2 weeks. No flavour — add to coffee (Bulletproof coffee), protein shakes or salad dressings. Do not heat to high temperatures — use raw or at low heat only.",
    equipment: "None — used as a liquid add-in",
    position: "Pre-workout · Morning coffee · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per tbsp (14g)",
      calories: 124,
      macros: [
        { key:"protein", label:"Protein", grams:"0g", percent:0, kcal:0, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"14g", percent:100, kcal:126, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"0 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" },
          { label:"Phosphorus", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Potassium", amount:"0 mg", daily:0, color:"#f6b23b" },
          { label:"Zinc", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Selenium", amount:"0 mcg", daily:0, color:"#d982d0" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"0 mg", daily:0, color:"#f6b23b" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key MCT-oil-specific nutrients",
        note: "MCT oil is a concentrated, flavourless extract of the medium-chain fats naturally found in coconut and palm kernel oil, processed for rapid absorption.",
        items: [
          { label:"C8/C10 Triglycerides", amount:"metabolised quickly by the liver for fast energy rather than stored as fat", daily:0, color:"#8f74ff" }
        ]
      },
      note: "Start with 1 tsp and build up — too much too soon commonly causes digestive upset (cramping, loose stools). Has no vitamin, mineral or fibre content — it is a pure fat source."
    },
    youtube: null, joints: {}
  },
  {
    id: 220, name: "Full-Fat Cheese (Cheddar)", alt: "Mature cheddar / parmesan",
    desc: "Full-fat hard cheese provides a highly bioavailable source of calcium, protein, phosphorus, vitamin K2 and CLA. Mature cheddar contains approximately 25 g protein and 900 mg calcium per 100 g — exceptional density for both macros and micronutrients. Vitamin K2 is particularly relevant for bone health, directing calcium to bones rather than arteries. Parmesan has an even higher protein content (~38 g/100 g).",
    muscles: [{n:"Protein",p:true},{n:"Calcium",p:true},{n:"Vitamin K2",p:true},{n:"CLA",p:false},{n:"Phosphorus",p:false}],
    tags: ["dairy","calcium","vitamin-K2","high-protein","keto"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Calcium and K2 together support bone density under heavy loading. CLA supports body composition."},
    vol: {suit:true,  eff:4, note:"Extremely calorie and nutrient-dense. Easy way to hit calcium and protein targets."},
    end: {suit:true,  eff:3, note:"Bone health support via calcium + K2. Moderate fat content — account for in a deficit."},
    risk: 3, cues: "30 g (matchbox-sized piece) = ~120 kcal, 7.5 g protein. Parmesan has less fat and more protein than cheddar — more efficient macro-wise. Grate directly onto food to make small amounts go further. Not suitable for dairy-free or vegan athletes.",
    equipment: "None — ready to eat",
    position: "Any meal · Snack",
    nutritionProfile: {
      servingLabel: "Amount per 100g",
      calories: 403,
      macros: [
        { key:"protein", label:"Protein", grams:"25.0g", percent:25, kcal:100, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"33.1g", percent:74, kcal:298, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"1.3g", percent:1, kcal:5, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"265 mcg RAE", daily:29, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0.6 mcg", daily:3, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.7 mg", daily:5, color:"#8f74ff" },
          { label:"Vitamin K", amount:"2.4 mcg", daily:2, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.38 mg", daily:29, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0.83 mcg", daily:35, color:"#e26d5a" },
          { label:"Folate", amount:"18 mcg DFE", daily:4, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.4 mg", daily:8, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"721 mg", daily:55, color:"#4f8df7" },
          { label:"Iron", amount:"0.7 mg", daily:4, color:"#e26d5a" },
          { label:"Magnesium", amount:"28 mg", daily:7, color:"#4fb66f" },
          { label:"Phosphorus", amount:"512 mg", daily:41, color:"#8f74ff" },
          { label:"Potassium", amount:"98 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"3.1 mg", daily:28, color:"#25b9a7" },
          { label:"Selenium", amount:"13.9 mcg", daily:25, color:"#d982d0" },
          { label:"Sodium", amount:"621 mg", daily:27, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.96 g", daily:80, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.13 g", daily:81, color:"#4fb66f" },
          { label:"Valine", amount:"1.25 g", daily:60, color:"#f6b23b" },
          { label:"Lysine", amount:"2.27 g", daily:87, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.95 g", daily:68, color:"#e26d5a" },
          { label:"Threonine", amount:"1.06 g", daily:72, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.29 g", daily:104, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.95 g", daily:70, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"37 g", daily:1, color:"#4f8df7" },
          { label:"Sodium", amount:"621 mg", daily:27, color:"#72a6d8" },
          { label:"Potassium", amount:"98 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"28 mg", daily:7, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key cheddar-specific nutrients",
        note: "Cheddar is one of the richest dietary calcium sources available, alongside complete, highly bioavailable protein.",
        items: [
          { label:"Vitamin K2", amount:"present in aged cheeses, involved in calcium regulation", daily:0, color:"#8f74ff" }
        ]
      },
      note: "30g (a standard slice) provides ~120 kcal and ~216mg calcium. Sodium content is significant — factor this in if managing salt intake."
    },
    youtube: null, joints: {}
  },
  {
    id: 221, name: "Egg Yolks", alt: "From whole eggs",
    desc: "The egg yolk is arguably the most micronutrient-dense food per calorie available — containing all of the egg's vitamin D, choline, vitamin A, vitamin E, vitamin K2, zinc, selenium, iron and carotenoids (lutein and zeaxanthin). Choline is essential for brain function, liver health, acetylcholine production and cell membrane integrity. One yolk provides 126 mg choline — over 20% of the daily requirement in one small food.",
    muscles: [{n:"Choline",p:true},{n:"Vitamin D",p:true},{n:"Fat-Soluble Vitamins",p:true},{n:"Lecithin",p:false},{n:"Lutein",p:false}],
    tags: ["egg","choline","vitamin-D","nutrient-dense","keto"],
    diff: 1,
    str: {suit:true,  eff:5, note:"Choline supports acetylcholine — the neurotransmitter of muscle contraction. Vitamin D supports testosterone. Lecithin improves fat emulsification."},
    vol: {suit:true,  eff:4, note:"Choline and B12 support neurological function during high training loads."},
    end: {suit:true,  eff:4, note:"Fat-soluble vitamins support immune function, bone health and antioxidant systems."},
    risk: 3, cues: "Do not discard yolks — this is where the vast majority of the nutrition lives. Soft-cooked yolks preserve more choline than hard-cooked (heat degrades choline). Never eat raw yolks — salmonella risk. The dietary cholesterol in eggs has been cleared of heart disease causation in healthy individuals by recent evidence.",
    equipment: "Pan or pot",
    position: "Breakfast · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g (~5 yolks)",
      calories: 322,
      macros: [
        { key:"protein", label:"Protein", grams:"15.9g", percent:20, kcal:64, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"26.5g", percent:75, kcal:238, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"3.6g", percent:5, kcal:14, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"381 mcg RAE", daily:42, color:"#4f8df7" },
          { label:"Vitamin D", amount:"5.4 mcg", daily:27, color:"#f6b23b" },
          { label:"Vitamin E", amount:"2.6 mg", daily:17, color:"#8f74ff" },
          { label:"Vitamin K", amount:"7.0 mcg", daily:6, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.53 mg", daily:41, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"1.95 mcg", daily:81, color:"#e26d5a" },
          { label:"Folate", amount:"146 mcg DFE", daily:36, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"2.7 mg", daily:54, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"129 mg", daily:10, color:"#4f8df7" },
          { label:"Iron", amount:"2.7 mg", daily:15, color:"#e26d5a" },
          { label:"Magnesium", amount:"5 mg", daily:1, color:"#4fb66f" },
          { label:"Phosphorus", amount:"390 mg", daily:31, color:"#8f74ff" },
          { label:"Potassium", amount:"109 mg", daily:2, color:"#f6b23b" },
          { label:"Zinc", amount:"2.3 mg", daily:21, color:"#25b9a7" },
          { label:"Selenium", amount:"56 mcg", daily:102, color:"#d982d0" },
          { label:"Sodium", amount:"48 mg", daily:2, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.25 g", daily:51, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.72 g", daily:51, color:"#4fb66f" },
          { label:"Valine", amount:"0.80 g", daily:38, color:"#f6b23b" },
          { label:"Lysine", amount:"1.44 g", daily:55, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.61 g", daily:44, color:"#e26d5a" },
          { label:"Threonine", amount:"0.68 g", daily:46, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.18 g", daily:64, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.24 g", daily:45, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"52 g", daily:2, color:"#4f8df7" },
          { label:"Sodium", amount:"48 mg", daily:2, color:"#72a6d8" },
          { label:"Potassium", amount:"109 mg", daily:2, color:"#f6b23b" },
          { label:"Magnesium", amount:"5 mg", daily:1, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key egg-yolk-specific nutrients",
        note: "Egg yolks carry essentially all of the egg's micronutrient content alongside choline, a nutrient most people under-consume.",
        items: [
          { label:"Choline", amount:"682 mg — among the richest dietary sources, essential for liver and brain function", daily:0, color:"#8f74ff" },
          { label:"Lutein + Zeaxanthin", amount:"carotenoids that support eye health", daily:0, color:"#4fb66f" }
        ]
      },
      note: "One large yolk is ~17g (~56 kcal). Dietary cholesterol from eggs has minimal effect on blood cholesterol for most people — current evidence does not support strict yolk limits for healthy individuals."
    },
    youtube: null, joints: {}
  },
  {
    id: 222, name: "Macadamia Nuts", alt: "Raw or dry-roasted",
    desc: "Macadamia nuts have the highest fat content and lowest carbohydrate content of any nut — making them the preferred nut on ketogenic and low-carbohydrate diets. The dominant fat is palmitoleic acid (omega-7), a monounsaturated fatty acid with specific evidence for improving insulin sensitivity and reducing inflammation. They are also the richest nut source of thiamine (vitamin B1).",
    muscles: [{n:"Monounsaturated Fat",p:true},{n:"Palmitoleic Acid",p:true},{n:"Thiamine B1",p:false},{n:"Manganese",p:false}],
    tags: ["nut","omega-7","keto","low-carb","anti-inflammatory"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Thiamine B1 supports carbohydrate energy metabolism. Sustained energy from high fat content."},
    vol: {suit:true,  eff:4, note:"Highest calorie density of any nut — effective for athletes struggling to eat enough in bulk phases."},
    end: {suit:true,  eff:3, note:"Palmitoleic acid improves insulin sensitivity — beneficial for body composition and nutrient partitioning."},
    risk: 4, cues: "30 g = ~10–12 nuts and ~200 kcal — smallest portion size of any nut. Very easy to overeat due to small individual nut size and mild, buttery flavour. Tree nut allergy — avoid. Highly toxic to dogs. Store in airtight container or refrigerate — high fat makes them rancid quickly.",
    equipment: "None — ready to eat",
    position: "Snack · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g raw",
      calories: 718,
      macros: [
        { key:"protein", label:"Protein", grams:"7.9g", percent:4, kcal:32, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"75.8g", percent:89, kcal:682, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"13.8g", percent:7, kcal:55, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.5 mg", daily:3, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.16 mg", daily:12, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"11 mcg DFE", daily:3, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.76 mg", daily:15, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"85 mg", daily:7, color:"#4f8df7" },
          { label:"Iron", amount:"3.7 mg", daily:21, color:"#e26d5a" },
          { label:"Magnesium", amount:"130 mg", daily:31, color:"#4fb66f" },
          { label:"Phosphorus", amount:"188 mg", daily:15, color:"#8f74ff" },
          { label:"Potassium", amount:"368 mg", daily:8, color:"#f6b23b" },
          { label:"Zinc", amount:"1.3 mg", daily:12, color:"#25b9a7" },
          { label:"Selenium", amount:"3.6 mcg", daily:7, color:"#d982d0" },
          { label:"Sodium", amount:"5 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"0.62 g", daily:25, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.36 g", daily:26, color:"#4fb66f" },
          { label:"Valine", amount:"0.40 g", daily:19, color:"#f6b23b" },
          { label:"Lysine", amount:"0.72 g", daily:28, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.30 g", daily:21, color:"#e26d5a" },
          { label:"Threonine", amount:"0.34 g", daily:23, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.09 g", daily:32, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.62 g", daily:22, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"8.6 g", daily:31, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.0 g", daily:4, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"7.6 g", daily:27, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"1.4 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"5 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"368 mg", daily:8, color:"#f6b23b" },
          { label:"Magnesium", amount:"130 mg", daily:31, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key macadamia-specific nutrients",
        note: "Macadamias have the highest monounsaturated fat content of any common nut — over 80% of total fat.",
        items: [
          { label:"Monounsaturated Fat", amount:"~59 g per 100g — the highest of any tree nut", daily:0, color:"#8f74ff" }
        ]
      },
      note: "30g (about 12 nuts) is a typical serving at ~215 kcal — the most calorie-dense common nut, so portion by weight rather than handful."
    },
    youtube: null, joints: {}
  },
  {
    id: 223, name: "Flaxseeds / Linseed", alt: "Ground or whole, brown or golden",
    desc: "Flaxseeds are the richest plant source of ALA omega-3 and also provide lignans — the most concentrated source of phytoestrogens in any food — which have antioxidant and hormonal-modulating properties with evidence for reducing cancer risk and improving cardiovascular markers. Ground flaxseed is dramatically better absorbed than whole flaxseed (the hard outer hull passes through intact). A single tablespoon of ground flax provides 1.6 g ALA, 2 g fibre and meaningful manganese.",
    muscles: [{n:"Omega-3 ALA",p:true},{n:"Lignans",p:true},{n:"Fibre",p:true},{n:"Manganese",p:false},{n:"Magnesium",p:false}],
    tags: ["seed","omega-3","fibre","anti-inflammatory","vegan"],
    diff: 1,
    str: {suit:true,  eff:2, note:"Anti-inflammatory. Fibre supports gut health and nutrient absorption. Modest contribution to fat intake."},
    vol: {suit:true,  eff:3, note:"Easy daily addition — stir into oats, yoghurt, smoothies or baked goods."},
    end: {suit:true,  eff:3, note:"ALA omega-3 reduces systemic inflammation relevant during long training blocks."},
    risk: 1, cues: "Always use ground flaxseed (also called milled or linseed meal) — whole seeds pass through undigested. Store ground flax in the fridge to prevent oxidation — ground flax goes rancid within weeks at room temperature. 1 tbsp per day is a practical dose. Stir into porridge, yoghurt or smoothies. Can replace eggs in baking: 1 tbsp ground flax + 3 tbsp water = 1 egg equivalent.",
    equipment: "Coffee grinder for whole seeds or none for pre-ground",
    position: "Breakfast · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g",
      calories: 534,
      macros: [
        { key:"protein", label:"Protein", grams:"18.3g", percent:13, kcal:73, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"42.2g", percent:67, kcal:380, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"28.9g", percent:20, kcal:116, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.3 mg", daily:2, color:"#8f74ff" },
          { label:"Vitamin K", amount:"4.3 mcg", daily:4, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.16 mg", daily:12, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"87 mcg DFE", daily:22, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.57 mg", daily:11, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"255 mg", daily:20, color:"#4f8df7" },
          { label:"Iron", amount:"5.7 mg", daily:32, color:"#e26d5a" },
          { label:"Magnesium", amount:"392 mg", daily:93, color:"#4fb66f" },
          { label:"Phosphorus", amount:"642 mg", daily:51, color:"#8f74ff" },
          { label:"Potassium", amount:"813 mg", daily:17, color:"#f6b23b" },
          { label:"Zinc", amount:"4.3 mg", daily:39, color:"#25b9a7" },
          { label:"Selenium", amount:"25.4 mcg", daily:46, color:"#d982d0" },
          { label:"Sodium", amount:"30 mg", daily:1, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.43 g", daily:58, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.83 g", daily:59, color:"#4fb66f" },
          { label:"Valine", amount:"0.92 g", daily:44, color:"#f6b23b" },
          { label:"Lysine", amount:"1.66 g", daily:64, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.70 g", daily:50, color:"#e26d5a" },
          { label:"Threonine", amount:"0.78 g", daily:53, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.21 g", daily:75, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.43 g", daily:51, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"27.3 g", daily:98, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"8.0 g", daily:29, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"19.3 g", daily:69, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"7 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"30 mg", daily:1, color:"#72a6d8" },
          { label:"Potassium", amount:"813 mg", daily:17, color:"#f6b23b" },
          { label:"Magnesium", amount:"392 mg", daily:93, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key flaxseed-specific nutrients",
        note: "Brown and golden flaxseed have near-identical nutrition — colour is a cosmetic varietal difference, not a nutritional one.",
        items: [
          { label:"Omega-3 ALA", amount:"22.8 g per 100g — the richest plant source available", daily:0, color:"#8f74ff" },
          { label:"Lignans", amount:"75–800x more lignans than any other plant food, with phytoestrogen and antioxidant activity", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Grind whole seeds just before use for best nutrient availability and freshness — pre-ground flax oxidises faster and should be refrigerated."
    },
    youtube: null, joints: {}
  },
  {
    id: 224, name: "Brazil Nuts", alt: "Raw, 2-3 per day",
    desc: "Brazil nuts are the richest dietary source of selenium in existence — a single nut provides 70-90 mcg, which is the entire recommended daily amount. Selenium is essential for thyroid hormone production, testosterone synthesis, sperm health and the activity of glutathione peroxidase (one of the body's most important antioxidant enzymes). Due to this extraordinary concentration, Brazil nuts must be consumed in moderation: 2-3 per day is the ideal dose. Overconsumption causes selenium toxicity.",
    muscles: [{n:"Selenium",p:true},{n:"Monounsaturated Fat",p:true},{n:"Magnesium",p:false},{n:"Zinc",p:false},{n:"Protein",p:false}],
    tags: ["nut","selenium","thyroid","antioxidant","keto"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Selenium is required for testosterone synthesis and antioxidant defence. Magnesium supports ATP production."},
    vol: {suit:true,  eff:3, note:"Selenium deficiency impairs recovery — 2-3 Brazil nuts daily eliminates the risk at essentially zero cost."},
    end: {suit:true,  eff:4, note:"Glutathione peroxidase (selenium-dependent) neutralises oxidative stress from endurance exercise."},
    risk: 4, cues: "STRICTLY 2-3 nuts per day — selenium toxicity (selenosis) causes hair loss, nail brittleness, nerve damage and fatigue at higher doses. Never eat a full serving as you would with other nuts. Tree nut allergy — avoid. Store in airtight container in a cool place.",
    equipment: "None — ready to eat",
    position: "Daily snack (2-3 nuts only)",
    nutritionProfile: {
      servingLabel: "Amount per 100g raw",
      calories: 659,
      macros: [
        { key:"protein", label:"Protein", grams:"14.3g", percent:8, kcal:57, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"67.1g", percent:85, kcal:604, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"12.3g", percent:7, kcal:49, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"5.7 mg", daily:38, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.04 mg", daily:3, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"22 mcg DFE", daily:6, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.25 mg", daily:5, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"160 mg", daily:12, color:"#4f8df7" },
          { label:"Iron", amount:"2.4 mg", daily:13, color:"#e26d5a" },
          { label:"Magnesium", amount:"376 mg", daily:90, color:"#4fb66f" },
          { label:"Phosphorus", amount:"725 mg", daily:58, color:"#8f74ff" },
          { label:"Potassium", amount:"659 mg", daily:14, color:"#f6b23b" },
          { label:"Zinc", amount:"4.1 mg", daily:37, color:"#25b9a7" },
          { label:"Selenium", amount:"1917 mcg", daily:3485, color:"#d982d0" },
          { label:"Sodium", amount:"3 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.12 g", daily:46, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.65 g", daily:46, color:"#4fb66f" },
          { label:"Valine", amount:"0.72 g", daily:34, color:"#f6b23b" },
          { label:"Lysine", amount:"1.30 g", daily:50, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.54 g", daily:39, color:"#e26d5a" },
          { label:"Threonine", amount:"0.61 g", daily:41, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.17 g", daily:61, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.12 g", daily:40, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"7.5 g", daily:27, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"1.0 g", daily:4, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"6.5 g", daily:23, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"3.5 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"3 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"659 mg", daily:14, color:"#f6b23b" },
          { label:"Magnesium", amount:"376 mg", daily:90, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key Brazil-nut-specific nutrients",
        note: "Brazil nuts are by far the richest dietary source of selenium — a single nut can exceed the full daily requirement.",
        items: [
          { label:"Selenium", amount:"1917 mcg per 100g — roughly 35x the daily value", daily:0, color:"#8f74ff" }
        ]
      },
      note: "Limit to 2–3 nuts per day (~95–140 mcg selenium) — regularly exceeding this can lead to selenium toxicity over time. Do not combine high-dose selenium supplements with regular Brazil nut consumption."
    },
    youtube: null, joints: {}
  },
  {
    id: 225, name: "Pistachios", alt: "Dry-roasted, unsalted",
    desc: "Pistachios have the highest protein content of any tree nut — approximately 6 g per 30 g serving — alongside meaningful arginine (nitric oxide precursor), lutein, zeaxanthin (eye health), and the phytosterol beta-sitosterol which competes with dietary cholesterol for absorption. Uniquely for a nut, they are sold already portioned by the shell — the act of shelling slows eating speed and provides a visual cue of quantity consumed, making them more portion-conscious than other nuts.",
    muscles: [{n:"Protein",p:true},{n:"Monounsaturated Fat",p:true},{n:"Arginine",p:false},{n:"Lutein",p:false},{n:"Potassium",p:false}],
    tags: ["nut","high-protein","arginine","eye-health","keto"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Highest protein of any tree nut. Arginine supports nitric oxide production and blood flow during training."},
    vol: {suit:true,  eff:4, note:"Shell-on pistachios slow eating and provide portion control — useful in high-calorie bulk phases where overeating is common."},
    end: {suit:true,  eff:3, note:"Lutein and zeaxanthin protect against oxidative stress in eye tissue."},
    risk: 4, cues: "30 g = approximately 49 kernels (without shells) and ~160 kcal. Choose unsalted. Shells are inedible. Blend soaked pistachios into pistachio milk or ice cream base. Tree nut allergy — avoid.",
    equipment: "None — ready to eat",
    position: "Snack · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g shelled, dry-roasted",
      calories: 562,
      macros: [
        { key:"protein", label:"Protein", grams:"20.6g", percent:14, kcal:82, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"45.3g", percent:68, kcal:408, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"27.2g", percent:18, kcal:109, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"11 mcg RAE", daily:1, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"2.9 mg", daily:19, color:"#8f74ff" },
          { label:"Vitamin K", amount:"13.2 mcg", daily:11, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.16 mg", daily:12, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"51 mcg DFE", daily:13, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"1.4 mg", daily:28, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"105 mg", daily:8, color:"#4f8df7" },
          { label:"Iron", amount:"3.9 mg", daily:22, color:"#e26d5a" },
          { label:"Magnesium", amount:"121 mg", daily:29, color:"#4fb66f" },
          { label:"Phosphorus", amount:"490 mg", daily:39, color:"#8f74ff" },
          { label:"Potassium", amount:"1042 mg", daily:22, color:"#f6b23b" },
          { label:"Zinc", amount:"2.2 mg", daily:20, color:"#25b9a7" },
          { label:"Selenium", amount:"7.0 mcg", daily:13, color:"#d982d0" },
          { label:"Sodium", amount:"6 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.62 g", daily:66, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.93 g", daily:66, color:"#4fb66f" },
          { label:"Valine", amount:"1.03 g", daily:49, color:"#f6b23b" },
          { label:"Lysine", amount:"1.87 g", daily:72, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.78 g", daily:56, color:"#e26d5a" },
          { label:"Threonine", amount:"0.88 g", daily:59, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.24 g", daily:86, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.61 g", daily:58, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"10.3 g", daily:37, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"2.0 g", daily:7, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"8.3 g", daily:30, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"4 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"6 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"1042 mg", daily:22, color:"#f6b23b" },
          { label:"Magnesium", amount:"121 mg", daily:29, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key pistachio-specific nutrients",
        note: "Pistachios have the highest potassium content of any common nut and a complete protein profile.",
        items: [
          { label:"Potassium", amount:"1042 mg", daily:22, color:"#8f74ff" },
          { label:"Lutein + Zeaxanthin", amount:"carotenoids unusual for a nut, support eye health", daily:0, color:"#4fb66f" }
        ]
      },
      note: "30g (about 49 kernels, shelled) is a typical serving at ~169 kcal — among the highest volume-per-calorie nuts due to shell removal being part of the eating ritual."
    },
    youtube: null, joints: {}
  },
  {
    id: 226, name: "Hemp Seeds (Hulled)", alt: "Hemp hearts",
    desc: "Hemp hearts (hulled hemp seeds) are one of the most nutritionally complete plant foods available — providing all essential amino acids (making them a complete plant protein at approximately 10 g per 30 g serving), omega-3 ALA and omega-6 in an ideal 3:1 ratio, and gamma-linolenic acid (GLA), an omega-6 with anti-inflammatory properties distinct from other plant oils. They have a mild, nutty flavour and soft texture that integrates seamlessly into any meal without changing it.",
    muscles: [{n:"Complete Plant Protein",p:true},{n:"Omega-3 ALA",p:true},{n:"GLA",p:true},{n:"Magnesium",p:false},{n:"Iron",p:false}],
    tags: ["seed","complete","omega-3","anti-inflammatory","vegan"],
    diff: 1,
    str: {suit:true,  eff:4, note:"Complete plant protein in a seed format. GLA reduces joint inflammation. Magnesium supports ATP production."},
    vol: {suit:true,  eff:4, note:"The most effortless protein and omega-3 add-in available — sprinkle 3 tbsp onto anything and add 10 g protein."},
    end: {suit:true,  eff:4, note:"Ideal omega-3:6 ratio reduces inflammation. Iron supports haemoglobin. Complete protein supports recovery."},
    risk: 1, cues: "3 tablespoons = ~30 g and ~170 kcal with 10 g protein. Sprinkle directly onto yoghurt, oats, salads, pasta or rice — no preparation needed. Blend into smoothies for creaminess. Stir into pancake batter or bake into muffins. No cooking needed — heat-sensitive GLA benefits from raw use.",
    equipment: "None — ready to eat",
    position: "Any meal · Sprinkled on food",
    nutritionProfile: {
      servingLabel: "Amount per 100g hulled",
      calories: 553,
      macros: [
        { key:"protein", label:"Protein", grams:"31.6g", percent:21, kcal:126, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"48.8g", percent:73, kcal:439, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"8.7g", percent:6, kcal:35, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"1 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.8 mg", daily:5, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.11 mg", daily:8, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"110 mcg DFE", daily:28, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.57 mg", daily:11, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"70 mg", daily:5, color:"#4f8df7" },
          { label:"Iron", amount:"7.95 mg", daily:44, color:"#e26d5a" },
          { label:"Magnesium", amount:"700 mg", daily:167, color:"#4fb66f" },
          { label:"Phosphorus", amount:"1650 mg", daily:132, color:"#8f74ff" },
          { label:"Potassium", amount:"1200 mg", daily:26, color:"#f6b23b" },
          { label:"Zinc", amount:"9.9 mg", daily:90, color:"#25b9a7" },
          { label:"Selenium", amount:"1.75 mcg", daily:3, color:"#d982d0" },
          { label:"Sodium", amount:"5 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"2.48 g", daily:101, color:"#4f8df7" },
          { label:"Isoleucine", amount:"1.43 g", daily:102, color:"#4fb66f" },
          { label:"Valine", amount:"1.58 g", daily:75, color:"#f6b23b" },
          { label:"Lysine", amount:"2.86 g", daily:110, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"1.20 g", daily:86, color:"#e26d5a" },
          { label:"Threonine", amount:"1.35 g", daily:91, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.37 g", daily:132, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"2.47 g", daily:89, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"4.0 g", daily:14, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.6 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"3.4 g", daily:12, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"5 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"5 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"1200 mg", daily:26, color:"#f6b23b" },
          { label:"Magnesium", amount:"700 mg", daily:167, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key hemp-heart-specific nutrients",
        note: "Hemp hearts (hulled hemp seeds) are essentially identical in nutrition to whole hulled hemp seeds — 'hearts' refers to the hulled product.",
        items: [
          { label:"Omega-3 ALA", amount:"9.3 g per 100g", daily:0, color:"#8f74ff" },
          { label:"Omega-6 LA", amount:"28.7 g per 100g", daily:0, color:"#4fb66f" }
        ]
      },
      note: "3 tbsp (30g) is a typical serving providing ~9.5g complete plant protein and a favourable roughly 3:1 omega-6:omega-3 ratio."
    },
    youtube: null, joints: {}
  },
  {
    id: 227, name: "Coconut (Desiccated / Cream)", alt: "Unsweetened shredded coconut or coconut cream",
    desc: "Coconut flesh and cream provide medium-chain triglycerides (primarily lauric acid), which are processed differently from other fats — absorbed directly into the portal circulation and converted to rapid energy. Desiccated coconut also provides dietary fibre (7 g per 30 g) and manganese in meaningful amounts. Coconut cream is the richest form, used in cooking to add calorie density and fat with a distinctive tropical flavour. Unlike coconut oil, the whole food retains fibre and phytonutrients.",
    muscles: [{n:"MCT Fat",p:true},{n:"Lauric Acid",p:true},{n:"Fibre",p:false},{n:"Manganese",p:false}],
    tags: ["fruit","coconut","MCT","fibre","keto","vegan"],
    diff: 1,
    str: {suit:true,  eff:3, note:"MCTs provide quick energy for training. Manganese supports bone formation and antioxidant enzymes."},
    vol: {suit:true,  eff:4, note:"Coconut cream adds calorie density to curries, smoothies and oats without large volume. Easy bulk phase addition."},
    end: {suit:true,  eff:3, note:"MCT fat provides quick fuel for sustained sessions. Fibre supports gut health."},
    risk: 2, cues: "Desiccated: choose unsweetened — sweetened varieties add large amounts of sugar. Add to porridge, smoothies or bake into energy balls. Coconut cream: use for curries, smoothies, chia puddings and protein shakes. Refrigerate opened cans and use within 3-4 days.",
    equipment: "None — or pot for cooking",
    position: "Any meal · Smoothie · Cooking ingredient",
    nutritionProfile: {
      servingLabel: "Amount per 100g desiccated, unsweetened",
      calories: 660,
      macros: [
        { key:"protein", label:"Protein", grams:"6.9g", percent:4, kcal:28, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"64.5g", percent:83, kcal:580, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"23.7g", percent:13, kcal:95, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.2 mg", daily:1, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0.2 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.02 mg", daily:2, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"26 mcg DFE", daily:6, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.29 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"26 mg", daily:2, color:"#4f8df7" },
          { label:"Iron", amount:"3.3 mg", daily:18, color:"#e26d5a" },
          { label:"Magnesium", amount:"90 mg", daily:21, color:"#4fb66f" },
          { label:"Phosphorus", amount:"206 mg", daily:16, color:"#8f74ff" },
          { label:"Potassium", amount:"543 mg", daily:12, color:"#f6b23b" },
          { label:"Zinc", amount:"2.0 mg", daily:18, color:"#25b9a7" },
          { label:"Selenium", amount:"10.1 mcg", daily:18, color:"#d982d0" },
          { label:"Sodium", amount:"37 mg", daily:2, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"0.54 g", daily:22, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.31 g", daily:22, color:"#4fb66f" },
          { label:"Valine", amount:"0.35 g", daily:17, color:"#f6b23b" },
          { label:"Lysine", amount:"0.63 g", daily:24, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.26 g", daily:19, color:"#e26d5a" },
          { label:"Threonine", amount:"0.29 g", daily:20, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.08 g", daily:29, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.54 g", daily:19, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"16.3 g", daily:58, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"2.0 g", daily:7, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"14.3 g", daily:51, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"3 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"37 mg", daily:2, color:"#72a6d8" },
          { label:"Potassium", amount:"543 mg", daily:12, color:"#f6b23b" },
          { label:"Magnesium", amount:"90 mg", daily:21, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key coconut-specific nutrients",
        note: "Coconut cream (the pressed liquid) has a similar fat profile to desiccated coconut but much lower fibre and protein per serving due to dilution.",
        items: [
          { label:"Manganese", amount:"2.3 mg", daily:100, color:"#8f74ff" }
        ]
      },
      note: "30g desiccated coconut is ~198 kcal. Predominantly saturated fat (mostly MCTs) — use as a flavour and texture addition rather than a primary fat source."
    },
    youtube: null, joints: {}
  },
  {
    id: 228, name: "Fish Oil Supplement", alt: "Concentrated EPA/DHA capsules or liquid",
    desc: "Concentrated fish oil supplements provide EPA and DHA in therapeutic doses that are difficult to achieve through food alone — typically 1-3 g of combined EPA/DHA per capsule. The evidence base for omega-3 supplementation in athletes is extensive: reducing exercise-induced inflammation, improving muscle protein synthesis signalling, reducing DOMS, supporting cognitive function during fatigue and improving heart rate variability. Triglyceride-form fish oil is significantly better absorbed than ethyl ester form.",
    muscles: [{n:"Omega-3 EPA",p:true},{n:"Omega-3 DHA",p:true}],
    tags: ["supplement","omega-3","anti-inflammatory","recovery","joint-health"],
    diff: 1,
    str: {suit:true,  eff:4, note:"EPA/DHA synergistically enhance MPS beyond protein alone. Anti-inflammatory. 2-3 g daily is the optimal dose for athletes."},
    vol: {suit:true,  eff:5, note:"Reduces DOMS between high-volume sessions. Improves recovery speed measurably in meta-analyses."},
    end: {suit:true,  eff:5, note:"Reduces systemic inflammation — the most important supplement for athletes in sustained training blocks. Also supports cardiovascular health and cognitive function under fatigue."},
    risk: 2, cues: "Take 2-3 g EPA+DHA per day — check the label for actual EPA/DHA content, not total fish oil. Triglyceride form absorbs 70% better than ethyl ester form. Take with a fatty meal for best absorption. Refrigerate to prevent rancidity and reduce fish burps. At doses above 3 g per day, consult a doctor — blood-thinning effects become relevant.",
    equipment: "None — capsules or liquid",
    position: "With any meal",
    nutritionProfile: {
      servingLabel: "Amount per 1g (1000mg) capsule",
      calories: 9,
      macros: [
        { key:"protein", label:"Protein", grams:"0g", percent:0, kcal:0, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"1g", percent:100, kcal:9, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Vitamin K", amount:"0 mcg", daily:0, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"0 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" },
          { label:"Phosphorus", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Potassium", amount:"0 mg", daily:0, color:"#f6b23b" },
          { label:"Zinc", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Selenium", amount:"0 mcg", daily:0, color:"#d982d0" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"0 mg", daily:0, color:"#f6b23b" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key fish-oil-specific nutrients",
        note: "EPA/DHA content varies significantly by brand and concentration — always check the supplement facts panel rather than assuming standard values.",
        items: [
          { label:"EPA + DHA", amount:"~300 mg per standard 1000mg capsule (varies by brand/concentration)", daily:0, color:"#8f74ff" }
        ]
      },
      note: "Target 2–3 g combined EPA+DHA per day — this typically means several capsules of a standard-strength product. Triglyceride-form oils absorb better than ethyl-ester form."
    },
    youtube: null, joints: {}
  },
  {
    id: 229, name: "Sesame Oil", alt: "Toasted (dark) or light sesame oil",
    desc: "Sesame oil is one of the most stable polyunsaturated oils available due to its unusually high content of sesamin and sesamolin — unique lignans that protect the oil from oxidation and provide anti-inflammatory, antihypertensive and liver-protective benefits. Toasted (dark) sesame oil has an intensely nutty flavour used as a finishing oil in East and Southeast Asian cooking; light sesame oil is milder and suitable for cooking. Both provide a balanced omega-6 to omega-9 ratio.",
    muscles: [{n:"Sesamin",p:true},{n:"Polyunsaturated Fat",p:true},{n:"Vitamin E",p:false},{n:"Copper",p:false}],
    tags: ["oil","anti-inflammatory","antioxidant","versatile","sesame"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Sesamin's anti-inflammatory properties support joint health under heavy loading."},
    vol: {suit:true,  eff:3, note:"Concentrated flavour means small quantities go a long way — adds palatability to high-volume meals."},
    end: {suit:true,  eff:3, note:"Sesamin reduces oxidative stress from sustained exercise. Vitamin E protects muscle cell membranes."},
    risk: 1, cues: "Toasted sesame oil: drizzle as a finishing oil only — add after cooking, the flavour degrades rapidly with heat. Use 1 tsp to dress stir-fries, noodle dishes, rice or salads. Light sesame oil: can be used for cooking at medium heat. Sesame allergy is increasingly common — check. Store in a dark bottle away from heat.",
    equipment: "None — drizzle or pan at medium heat",
    position: "Finishing oil · Dressing · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per tbsp (13.6g)",
      calories: 120,
      macros: [
        { key:"protein", label:"Protein", grams:"0g", percent:0, kcal:0, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"13.6g", percent:100, kcal:122, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.3 mg", daily:2, color:"#8f74ff" },
          { label:"Vitamin K", amount:"1.4 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"0 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0.1 mg", daily:1, color:"#e26d5a" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" },
          { label:"Phosphorus", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Potassium", amount:"0 mg", daily:0, color:"#f6b23b" },
          { label:"Zinc", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Selenium", amount:"0 mcg", daily:0, color:"#d982d0" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"0 mg", daily:0, color:"#f6b23b" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key sesame-oil-specific nutrients",
        note: "Sesame oil's sesamin and sesamolin lignans are unusually resistant to oxidation, giving it good shelf stability for a polyunsaturated oil.",
        items: [
          { label:"Sesamin + Sesamolin", amount:"unique lignans with antioxidant, anti-inflammatory and liver-protective properties", daily:0, color:"#8f74ff" }
        ]
      },
      note: "Toasted (dark) sesame oil is for finishing only — added after cooking, as its flavour degrades with heat. Light sesame oil can be used for cooking at medium heat."
    },
    youtube: null, joints: {}
  },
  {
    id: 230, name: "Hazelnuts", alt: "Raw or dry-roasted",
    desc: "Hazelnuts provide one of the highest concentrations of vitamin E of any food alongside a uniquely high manganese content, monounsaturated fat, folate and copper. Their antioxidant profile specifically includes proanthocyanidins — compounds that support healthy blood vessel function and reduce oxidative stress. They are the base ingredient in hazelnut butter and the classic pairing with chocolate (cacao) due to complementary flavour chemistry.",
    muscles: [{n:"Monounsaturated Fat",p:true},{n:"Vitamin E",p:true},{n:"Manganese",p:true},{n:"Copper",p:false},{n:"Folate",p:false}],
    tags: ["nut","vitamin-E","manganese","antioxidant","vegan"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Manganese supports bone formation and antioxidant enzyme production. Vitamin E protects muscle cells."},
    vol: {suit:true,  eff:3, note:"Calorie-dense snack. Hazelnut butter is an alternative to almond or peanut butter with a distinctive flavour."},
    end: {suit:true,  eff:3, note:"Vitamin E and proanthocyanidins provide a complementary antioxidant system alongside exercise."},
    risk: 4, cues: "30 g = ~21 hazelnuts and ~180 kcal. Toast in a dry pan 5 min until skins crack and nuts are golden — rub off skins in a towel for best flavour. Hazelnut butter pairs exceptionally well with dark chocolate. Tree nut allergy — avoid. Hazel pollen allergy may cause oral allergy syndrome when eating raw hazelnuts.",
    equipment: "Pan for toasting — or none for raw",
    position: "Snack · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g raw",
      calories: 628,
      macros: [
        { key:"protein", label:"Protein", grams:"15.0g", percent:9, kcal:60, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"60.8g", percent:81, kcal:547, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"16.7g", percent:10, kcal:67, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"1 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"15.0 mg", daily:100, color:"#8f74ff" },
          { label:"Vitamin K", amount:"14.2 mcg", daily:12, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.11 mg", daily:8, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"113 mcg DFE", daily:28, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.92 mg", daily:18, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"114 mg", daily:9, color:"#4f8df7" },
          { label:"Iron", amount:"4.7 mg", daily:26, color:"#e26d5a" },
          { label:"Magnesium", amount:"163 mg", daily:39, color:"#4fb66f" },
          { label:"Phosphorus", amount:"290 mg", daily:23, color:"#8f74ff" },
          { label:"Potassium", amount:"680 mg", daily:14, color:"#f6b23b" },
          { label:"Zinc", amount:"2.5 mg", daily:23, color:"#25b9a7" },
          { label:"Selenium", amount:"2.4 mcg", daily:4, color:"#d982d0" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.18 g", daily:48, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.68 g", daily:49, color:"#4fb66f" },
          { label:"Valine", amount:"0.75 g", daily:36, color:"#f6b23b" },
          { label:"Lysine", amount:"1.36 g", daily:52, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.57 g", daily:41, color:"#e26d5a" },
          { label:"Threonine", amount:"0.64 g", daily:43, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.17 g", daily:61, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.17 g", daily:42, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"9.7 g", daily:35, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"2.0 g", daily:7, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"7.7 g", daily:28, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"5 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"680 mg", daily:14, color:"#f6b23b" },
          { label:"Magnesium", amount:"163 mg", daily:39, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key hazelnut-specific nutrients",
        note: "Hazelnuts have one of the highest manganese contents of any nut alongside proanthocyanidins that support blood vessel function.",
        items: [
          { label:"Manganese", amount:"6.2 mg", daily:270, color:"#8f74ff" },
          { label:"Proanthocyanidins", amount:"antioxidant compounds that support healthy blood vessel function", daily:0, color:"#4fb66f" }
        ]
      },
      note: "30g (about 21 hazelnuts) is a typical serving at ~188 kcal. Toasting and rubbing off the skins improves flavour but slightly reduces antioxidant content."
    },
    youtube: null, joints: {}
  },
  {
    id: 231, name: "Avocado Oil", alt: "Cold-pressed, extra virgin",
    desc: "Avocado oil has the highest smoke point of any unrefined plant oil — approximately 270 degrees C — making it the best choice for high-heat cooking including stir-frying, searing and roasting. Like olive oil, it is predominantly oleic acid (monounsaturated omega-9) and retains lutein and plant sterols. It is virtually flavourless when refined, or has a subtle avocado-buttery taste when cold-pressed, making it the most versatile cooking oil for performance athletes.",
    muscles: [{n:"Monounsaturated Fat",p:true},{n:"Lutein",p:false},{n:"Vitamin E",p:false},{n:"Plant Sterols",p:false}],
    tags: ["oil","high-heat","omega-9","versatile","keto"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Healthy fat supports testosterone production. High smoke point means polyphenols survive cooking."},
    vol: {suit:true,  eff:3, note:"Best all-purpose cooking oil for athletes who cook at varying temperatures."},
    end: {suit:true,  eff:3, note:"Plant sterols support cardiovascular health. Lutein supports eye health."},
    risk: 1, cues: "Use cold-pressed avocado oil raw for dressings — mild, buttery flavour. Use refined avocado oil at high heat — its 270C smoke point handles wok frying, searing and roasting. More expensive than olive oil but lasts well unopened. Excellent substitute for olive oil in situations where olive oil smokes.",
    equipment: "Pan · Wok",
    position: "Cooking fat · Dressing · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per tbsp (13.6g)",
      calories: 124,
      macros: [
        { key:"protein", label:"Protein", grams:"0g", percent:0, kcal:0, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"13.6g", percent:100, kcal:122, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"0g", percent:0, kcal:0, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"0.4 mg", daily:3, color:"#8f74ff" },
          { label:"Vitamin K", amount:"1.0 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"0 mg", daily:0, color:"#4f8df7" },
          { label:"Iron", amount:"0 mg", daily:0, color:"#e26d5a" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" },
          { label:"Phosphorus", amount:"0 mg", daily:0, color:"#8f74ff" },
          { label:"Potassium", amount:"0 mg", daily:0, color:"#f6b23b" },
          { label:"Zinc", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Selenium", amount:"0 mcg", daily:0, color:"#d982d0" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0 g", daily:0, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"0 g", daily:0, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"0 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"0 mg", daily:0, color:"#f6b23b" },
          { label:"Magnesium", amount:"0 mg", daily:0, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key avocado-oil-specific nutrients",
        note: "Avocado oil has the highest smoke point of any unrefined plant oil (~270°C), retaining more of its polyphenol content under high heat than most alternatives.",
        items: [
          { label:"Oleic Acid", amount:"predominantly monounsaturated omega-9, similar profile to olive oil", daily:0, color:"#8f74ff" },
          { label:"Lutein + Plant Sterols", amount:"support eye health and healthy cholesterol levels", daily:0, color:"#4fb66f" }
        ]
      },
      note: "Refined avocado oil is best for high-heat cooking (searing, wok-frying); cold-pressed (unrefined) is better used raw in dressings for its fuller flavour."
    },
    youtube: null, joints: {}
  },
  {
    id: 232, name: "Pecans", alt: "Raw or dry-roasted, halves",
    desc: "Pecans have the highest antioxidant content of any tree nut and the richest gamma-tocopherol content (a specific form of vitamin E) of any food. They are calorie-dense and predominantly monounsaturated fat, with ellagic acid — a polyphenol with meaningful cardiovascular protection. Research shows pecan consumption significantly reduces LDL cholesterol and improves total antioxidant capacity.",
    muscles: [{n:"Monounsaturated Fat",p:true},{n:"Vitamin E Gamma",p:true},{n:"Ellagic Acid",p:true},{n:"Manganese",p:false},{n:"Zinc",p:false}],
    tags: ["nut","antioxidant","vitamin-E","keto","vegan"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Manganese supports bone health and antioxidant enzyme production. Zinc supports protein synthesis."},
    vol: {suit:true,  eff:4, note:"Highest antioxidant density of any tree nut. Easy calorie addition in bulk phases."},
    end: {suit:true,  eff:4, note:"Ellagic acid and gamma-tocopherol reduce oxidative damage from sustained exercise."},
    risk: 4, cues: "30 g = ~15 pecan halves and ~200 kcal. Best toasted: 180 C oven 8 min or dry pan 4 min. Use in oatmeal, salads or as a standalone snack. Tree nut allergy — avoid. Pecans are the most calorie-dense of all nuts — weigh rather than estimating by eye.",
    equipment: "None — or pan or oven for toasting",
    position: "Snack · Any meal",
    nutritionProfile: {
      servingLabel: "Amount per 100g raw",
      calories: 691,
      macros: [
        { key:"protein", label:"Protein", grams:"9.2g", percent:5, kcal:37, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"72.0g", percent:87, kcal:648, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"13.9g", percent:8, kcal:56, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"0 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"1.4 mg", daily:9, color:"#8f74ff" },
          { label:"Vitamin K", amount:"3.5 mcg", daily:3, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.13 mg", daily:10, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"22 mcg DFE", daily:6, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.86 mg", daily:17, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"70 mg", daily:5, color:"#4f8df7" },
          { label:"Iron", amount:"2.5 mg", daily:14, color:"#e26d5a" },
          { label:"Magnesium", amount:"121 mg", daily:29, color:"#4fb66f" },
          { label:"Phosphorus", amount:"277 mg", daily:22, color:"#8f74ff" },
          { label:"Potassium", amount:"410 mg", daily:9, color:"#f6b23b" },
          { label:"Zinc", amount:"4.5 mg", daily:41, color:"#25b9a7" },
          { label:"Selenium", amount:"3.8 mcg", daily:7, color:"#d982d0" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"0.72 g", daily:29, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.42 g", daily:30, color:"#4fb66f" },
          { label:"Valine", amount:"0.46 g", daily:22, color:"#f6b23b" },
          { label:"Lysine", amount:"0.83 g", daily:32, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.35 g", daily:25, color:"#e26d5a" },
          { label:"Threonine", amount:"0.39 g", daily:26, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.11 g", daily:39, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"0.72 g", daily:26, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"9.6 g", daily:34, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"2.0 g", daily:7, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"7.6 g", daily:27, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"3.5 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"0 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"410 mg", daily:9, color:"#f6b23b" },
          { label:"Magnesium", amount:"121 mg", daily:29, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key pecan-specific nutrients",
        note: "Pecans have the richest gamma-tocopherol (a vitamin E form) content of any food and the highest antioxidant capacity of any tree nut.",
        items: [
          { label:"Gamma-Tocopherol", amount:"rare vitamin E form with strong antioxidant activity", daily:0, color:"#8f74ff" },
          { label:"Ellagic Acid", amount:"polyphenol linked to cardiovascular protection", daily:0, color:"#4fb66f" }
        ]
      },
      note: "30g (about 15 halves) is a typical serving at ~207 kcal — the most calorie-dense of the common tree nuts, so weigh rather than estimate by eye."
    },
    youtube: null, joints: {}
  },
  {
    id: 233, name: "Olives", alt: "Black or green, whole or pitted",
    desc: "Olives are the whole-food form of olive oil — containing all the polyphenols (oleuropein, hydroxytyrosol) present before pressing, alongside dietary fibre, vitamin E and copper. The polyphenol concentration in whole olives is significantly higher than in the oil produced from them, as many compounds remain in the pulp. Olives also provide sodium naturally (from curing), making them a convenient electrolyte-replacement snack. A 30 g serving provides approximately 50-70 kcal.",
    muscles: [{n:"Monounsaturated Fat",p:true},{n:"Polyphenols",p:true},{n:"Vitamin E",p:false},{n:"Copper",p:false},{n:"Sodium",p:false}],
    tags: ["fruit","omega-9","anti-inflammatory","portable","electrolyte"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Polyphenols reduce exercise-induced inflammation. Copper supports collagen crosslinking in connective tissue."},
    vol: {suit:true,  eff:3, note:"Portable anti-inflammatory snack. Convenient natural sodium source for post-training electrolyte replacement."},
    end: {suit:true,  eff:4, note:"Natural sodium from brine supports electrolyte balance during and after long sessions. Polyphenols reduce inflammatory burden."},
    risk: 1, cues: "High in sodium — rinse canned or jarred olives to reduce sodium content if needed. Green olives have more oleuropein (more bitter, more polyphenols). Black olives are riper and milder. Kalamata (purple, Greek) are an excellent middle ground. Use pitted for convenience. Add to salads, grain bowls and pasta — or eat as a snack.",
    equipment: "None — ready to eat",
    position: "Snack · Added to meals · Post-workout electrolytes",
    nutritionProfile: {
      servingLabel: "Amount per 100g",
      calories: 115,
      macros: [
        { key:"protein", label:"Protein", grams:"0.8g", percent:2, kcal:3, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"10.7g", percent:77, kcal:96, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"6.3g", percent:21, kcal:25, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"4 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"1.7 mg", daily:11, color:"#8f74ff" },
          { label:"Vitamin K", amount:"1.4 mcg", daily:1, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0 mg", daily:0, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"0 mcg DFE", daily:0, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.02 mg", daily:0, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"52 mg", daily:4, color:"#4f8df7" },
          { label:"Iron", amount:"3.3 mg", daily:18, color:"#e26d5a" },
          { label:"Magnesium", amount:"11 mg", daily:3, color:"#4fb66f" },
          { label:"Phosphorus", amount:"4 mg", daily:0, color:"#8f74ff" },
          { label:"Potassium", amount:"8 mg", daily:0, color:"#f6b23b" },
          { label:"Zinc", amount:"0.2 mg", daily:2, color:"#25b9a7" },
          { label:"Selenium", amount:"0.9 mcg", daily:2, color:"#d982d0" },
          { label:"Sodium", amount:"735 mg", daily:32, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"3.2 g", daily:11, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.5 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"2.7 g", daily:10, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"80 g", daily:3, color:"#4f8df7" },
          { label:"Sodium", amount:"735 mg", daily:32, color:"#72a6d8" },
          { label:"Potassium", amount:"8 mg", daily:0, color:"#f6b23b" },
          { label:"Magnesium", amount:"11 mg", daily:3, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key olive-specific nutrients",
        note: "Olives carry the same polyphenols found in olive oil but in concentrated, whole-food form since the pulp retains compounds lost during pressing.",
        items: [
          { label:"Oleuropein + Hydroxytyrosol", amount:"polyphenols with strong antioxidant and anti-inflammatory activity", daily:0, color:"#8f74ff" }
        ]
      },
      note: "30g (about 8-10 olives) is ~35 kcal. Sodium is high due to brine-curing — rinsing canned or jarred olives reduces sodium content if needed."
    },
    youtube: null, joints: {}
  },
  {
    id: 234, name: "Pine Nuts", alt: "Raw or toasted",
    desc: "Pine nuts are the seeds of pine trees — unusually rich in pinolenic acid, a rare polyunsaturated fatty acid that stimulates the release of cholecystokinin (CCK) and GLP-1, hormones that suppress appetite. This makes pine nuts uniquely useful for satiety and appetite management during calorie restriction phases. They also provide manganese (one of the richest sources of any food), vitamin E, zinc and magnesium. Their sweet, buttery flavour is distinctive and widely used in Mediterranean and Middle Eastern cooking.",
    muscles: [{n:"Pinolenic Acid",p:true},{n:"Manganese",p:true},{n:"Vitamin E",p:false},{n:"Magnesium",p:false},{n:"Zinc",p:false}],
    tags: ["nut","satiety","manganese","appetite-control","versatile"],
    diff: 1,
    str: {suit:true,  eff:3, note:"Manganese supports collagen and bone formation. Magnesium supports ATP and muscle contraction."},
    vol: {suit:true,  eff:3, note:"Use as a garnish or in salads rather than by the handful — they are exceptionally calorie-dense."},
    end: {suit:true,  eff:3, note:"Appetite suppression via pinolenic acid is useful for athletes managing body weight during training."},
    risk: 4, cues: "Very expensive — use as a garnish rather than a main snack. Toast in a dry pan 2-3 min — watch carefully, they burn quickly. Use in pesto (classic), scattered over salads, grain bowls and roasted vegetables. Pine mouth syndrome (metallic taste lasting days) occurs in some individuals after eating certain species — stop use if this occurs.",
    equipment: "Pan for toasting — or none",
    position: "Garnish · Salads · Pesto",
    nutritionProfile: {
      servingLabel: "Amount per 100g raw",
      calories: 673,
      macros: [
        { key:"protein", label:"Protein", grams:"13.7g", percent:8, kcal:55, color:"#1f7fe5" },
        { key:"fat", label:"Fat", grams:"68.4g", percent:85, kcal:616, color:"#48b86d" },
        { key:"carbs", label:"Carbs", grams:"13.1g", percent:7, kcal:52, color:"#ffae1f" }
      ],
      vitamins: {
        label: "Vitamins",
        totalLabel: "vitamin coverage",
        note: "Daily dose percentages use common adult Daily Values and are approximate per serving as listed above.",
        items: [
          { label:"Vitamin A", amount:"1 mcg RAE", daily:0, color:"#4f8df7" },
          { label:"Vitamin D", amount:"0 mcg", daily:0, color:"#f6b23b" },
          { label:"Vitamin E", amount:"9.3 mg", daily:62, color:"#8f74ff" },
          { label:"Vitamin K", amount:"53.9 mcg", daily:45, color:"#4fb66f" },
          { label:"Riboflavin B2", amount:"0.23 mg", daily:18, color:"#25b9a7" },
          { label:"Vitamin B12", amount:"0 mcg", daily:0, color:"#e26d5a" },
          { label:"Folate", amount:"34 mcg DFE", daily:8, color:"#d982d0" },
          { label:"Pantothenic Acid", amount:"0.31 mg", daily:6, color:"#72a6d8" }
        ]
      },
      minerals: {
        label: "Minerals",
        totalLabel: "mineral coverage",
        note: "Mineral percentages are approximate adult Daily Values per serving as listed above.",
        items: [
          { label:"Calcium", amount:"16 mg", daily:1, color:"#4f8df7" },
          { label:"Iron", amount:"5.5 mg", daily:31, color:"#e26d5a" },
          { label:"Magnesium", amount:"251 mg", daily:60, color:"#4fb66f" },
          { label:"Phosphorus", amount:"575 mg", daily:46, color:"#8f74ff" },
          { label:"Potassium", amount:"597 mg", daily:13, color:"#f6b23b" },
          { label:"Zinc", amount:"6.5 mg", daily:59, color:"#25b9a7" },
          { label:"Selenium", amount:"0.7 mcg", daily:1, color:"#d982d0" },
          { label:"Sodium", amount:"2 mg", daily:0, color:"#72a6d8" }
        ]
      },
      amino: {
        label: "Amino Acids",
        totalLabel: "essential amino target",
        note: "Amino acid figures are proportional estimates derived from total protein content and typical amino acid distribution for this food type.",
        items: [
          { label:"Leucine", amount:"1.07 g", daily:44, color:"#4f8df7" },
          { label:"Isoleucine", amount:"0.62 g", daily:44, color:"#4fb66f" },
          { label:"Valine", amount:"0.69 g", daily:33, color:"#f6b23b" },
          { label:"Lysine", amount:"1.24 g", daily:48, color:"#8f74ff" },
          { label:"Methionine + Cysteine", amount:"0.52 g", daily:37, color:"#e26d5a" },
          { label:"Threonine", amount:"0.58 g", daily:39, color:"#25b9a7" },
          { label:"Tryptophan", amount:"0.16 g", daily:57, color:"#d982d0" },
          { label:"Phenylalanine + Tyrosine", amount:"1.07 g", daily:38, color:"#72a6d8" }
        ]
      },
      fiber: {
        label: "Fiber",
        totalLabel: "daily fiber",
        note: "Fiber percentages use a common adult Daily Value of 28g.",
        items: [
          { label:"Total Fiber", amount:"3.7 g", daily:13, color:"#4f8df7" },
          { label:"Soluble Fiber", amount:"0.5 g", daily:2, color:"#4fb66f" },
          { label:"Insoluble Fiber", amount:"3.2 g", daily:11, color:"#f6b23b" }
        ]
      },
      hydration: {
        label: "Hydration",
        totalLabel: "water and electrolyte context",
        note: "Hydration values describe water content and electrolyte contribution per serving.",
        items: [
          { label:"Water", amount:"2.3 g", daily:0, color:"#4f8df7" },
          { label:"Sodium", amount:"2 mg", daily:0, color:"#72a6d8" },
          { label:"Potassium", amount:"597 mg", daily:13, color:"#f6b23b" },
          { label:"Magnesium", amount:"251 mg", daily:60, color:"#4fb66f" }
        ]
      },
      extras: {
        label: "Other",
        totalLabel: "key pine-nut-specific nutrients",
        note: "Pinolenic acid is a rare fatty acid found almost exclusively in pine nuts, shown to stimulate satiety hormones.",
        items: [
          { label:"Pinolenic Acid", amount:"stimulates CCK and GLP-1 release, supporting appetite control", daily:0, color:"#8f74ff" },
          { label:"Manganese", amount:"8.8 mg", daily:383, color:"#4fb66f" }
        ]
      },
      note: "A typical garnish serving is 10-15g (~70-100 kcal) — pine nuts are too expensive and calorie-dense to eat by the handful. Toast briefly as they burn quickly."
    },
    youtube: null, joints: {}
  }
];


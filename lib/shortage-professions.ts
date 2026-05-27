import type { ShortageProfession } from "./types";

export const SHORTAGE_PROFESSIONS: ShortageProfession[] = [
  // HEALTHCARE & NURSING
  { name: "Registered Nurse / Nursing Professional", category: "Healthcare & Nursing", demandLevel: "critical", keywords: ["nurse", "nursing", "healthcare", "patient care", "geriatric care", "elderly care", "hospital", "registered nurse", "rn", "staff nurse"] },
  { name: "Physician / Doctor", category: "Healthcare & Nursing", demandLevel: "critical", keywords: ["doctor", "physician", "medical doctor", "mbbs", "medicine", "surgeon", "general practitioner", "gp", "specialist doctor"] },
  { name: "Dentist", category: "Healthcare & Nursing", demandLevel: "critical", keywords: ["dentist", "dental", "oral health", "dental surgeon"] },
  { name: "Pharmacist", category: "Healthcare & Nursing", demandLevel: "critical", keywords: ["pharmacy", "pharmacist", "pharmaceutical"] },
  { name: "Physiotherapist", category: "Healthcare & Nursing", demandLevel: "critical", keywords: ["physiotherapy", "physical therapy", "rehabilitation", "physio"] },
  { name: "Occupational Therapist", category: "Healthcare & Nursing", demandLevel: "critical", keywords: ["occupational therapy", "ot", "rehabilitation"] },
  { name: "Paramedic / Emergency Medical Technician", category: "Healthcare & Nursing", demandLevel: "critical", keywords: ["paramedic", "emt", "emergency", "ambulance", "emergency medical"] },
  { name: "Medical/Dental Assistant", category: "Healthcare & Nursing", demandLevel: "critical", keywords: ["medical assistant", "dental assistant", "clinic assistant"] },
  { name: "Midwife", category: "Healthcare & Nursing", demandLevel: "critical", keywords: ["midwife", "midwifery", "maternal", "maternal health"] },

  // ENGINEERING
  { name: "Mechanical Engineer", category: "Engineering", demandLevel: "high", keywords: ["mechanical engineering", "mechanical", "machines", "manufacturing", "production engineering", "mechanical engineer"] },
  { name: "Electrical Engineer", category: "Engineering", demandLevel: "high", keywords: ["electrical engineering", "electrical", "electronics", "power systems", "embedded", "electrical engineer"] },
  { name: "Civil Engineer", category: "Engineering", demandLevel: "high", keywords: ["civil engineering", "structural", "construction engineering", "building", "civil engineer"] },
  { name: "Mechatronics Engineer", category: "Engineering", demandLevel: "high", keywords: ["mechatronics", "automation", "robotics", "control systems"] },
  { name: "Chemical Engineer", category: "Engineering", demandLevel: "high", keywords: ["chemical engineering", "process engineering", "chemical engineer"] },
  { name: "Industrial Engineer", category: "Engineering", demandLevel: "high", keywords: ["industrial engineering", "production planning", "operations", "industrial engineer"] },
  { name: "Environmental Engineer", category: "Engineering", demandLevel: "high", keywords: ["environmental engineering", "sustainability", "renewable energy", "green energy", "solar", "wind", "environmental"] },

  // IT & SOFTWARE
  { name: "Software Developer / Engineer", category: "IT & Software", demandLevel: "high", keywords: ["software", "developer", "programmer", "coding", "full stack", "frontend", "backend", "web developer", "app developer", "software engineer"] },
  { name: "IT Specialist / Systems Administrator", category: "IT & Software", demandLevel: "high", keywords: ["it", "systems admin", "network admin", "it support", "infrastructure", "system administrator"] },
  { name: "Data Scientist / Analyst", category: "IT & Software", demandLevel: "high", keywords: ["data science", "data analysis", "machine learning", "ai", "artificial intelligence", "big data", "data analyst", "data scientist"] },
  { name: "Cybersecurity Specialist", category: "IT & Software", demandLevel: "high", keywords: ["cybersecurity", "security", "information security", "penetration testing", "cyber"] },
  { name: "Cloud/DevOps Engineer", category: "IT & Software", demandLevel: "high", keywords: ["cloud", "devops", "aws", "azure", "kubernetes", "docker", "cloud engineer"] },

  // SKILLED TRADES & CONSTRUCTION
  { name: "Electrician", category: "Skilled Trades & Construction", demandLevel: "critical", keywords: ["electrician", "electrical installation", "wiring", "electrical technician", "electrical fitter"] },
  { name: "Plumber / Pipe Fitter", category: "Skilled Trades & Construction", demandLevel: "critical", keywords: ["plumber", "plumbing", "pipe fitting", "sanitary", "heating installer"] },
  { name: "Welder / Metal Worker", category: "Skilled Trades & Construction", demandLevel: "critical", keywords: ["welder", "welding", "fabrication", "metalwork", "metal fabrication", "brazing", "soldering"] },
  { name: "Mason / Bricklayer", category: "Skilled Trades & Construction", demandLevel: "critical", keywords: ["mason", "masonry", "bricklayer", "bricklaying", "block laying", "concrete", "block work"] },
  { name: "Carpenter / Joiner", category: "Skilled Trades & Construction", demandLevel: "critical", keywords: ["carpenter", "carpentry", "joiner", "woodwork", "cabinetmaker", "furniture maker"] },
  { name: "HVAC Technician", category: "Skilled Trades & Construction", demandLevel: "critical", keywords: ["hvac", "heating", "ventilation", "air conditioning", "refrigeration", "cooling"] },
  { name: "Painter / Decorator", category: "Skilled Trades & Construction", demandLevel: "critical", keywords: ["painter", "decorator", "wall", "coating", "pop", "screeding"] },
  { name: "Roofer", category: "Skilled Trades & Construction", demandLevel: "critical", keywords: ["roofer", "roofing"] },
  { name: "Tiler", category: "Skilled Trades & Construction", demandLevel: "critical", keywords: ["tiler", "tiling", "floor layer"] },
  { name: "Construction Machine Operator", category: "Skilled Trades & Construction", demandLevel: "critical", keywords: ["heavy equipment", "excavator", "crane operator", "construction machine"] },
  { name: "Locksmith / Metal Fitter", category: "Skilled Trades & Construction", demandLevel: "critical", keywords: ["locksmith", "metal fitter", "fitting", "turning", "lathe", "cnc", "turning and fitting", "mechanical craft"] },

  // TRANSPORT & LOGISTICS
  { name: "Truck Driver / HGV Driver", category: "Transport & Logistics", demandLevel: "high", keywords: ["truck driver", "hgv", "lorry driver", "commercial driver", "driving", "cdl", "heavy vehicle"] },
  { name: "Bus Driver", category: "Transport & Logistics", demandLevel: "high", keywords: ["bus driver", "public transport driver"] },
  { name: "Train Driver", category: "Transport & Logistics", demandLevel: "high", keywords: ["train driver", "locomotive", "rail"] },
  { name: "Warehouse Logistics Specialist", category: "Transport & Logistics", demandLevel: "high", keywords: ["warehouse", "logistics", "supply chain", "forklift", "inventory"] },
  { name: "Freight Forwarding Specialist", category: "Transport & Logistics", demandLevel: "high", keywords: ["freight", "shipping", "forwarding", "customs", "import export"] },

  // SCIENCE & RESEARCH
  { name: "Physicist", category: "Science & Research", demandLevel: "high", keywords: ["physics", "physicist", "applied physics"] },
  { name: "Chemist", category: "Science & Research", demandLevel: "high", keywords: ["chemistry", "chemist", "lab", "laboratory"] },
  { name: "Biologist / Biochemist", category: "Science & Research", demandLevel: "high", keywords: ["biology", "biochemistry", "biomedical", "biotechnology", "life sciences", "microbiology"] },
  { name: "Mathematician / Statistician", category: "Science & Research", demandLevel: "high", keywords: ["mathematics", "statistics", "actuarial", "mathematician"] },

  // HOSPITALITY & FOOD
  { name: "Chef / Cook", category: "Hospitality & Food", demandLevel: "moderate", keywords: ["chef", "cook", "cooking", "culinary", "kitchen", "bakery", "baker", "pastry"] },
  { name: "Hotel Specialist", category: "Hospitality & Food", demandLevel: "moderate", keywords: ["hotel", "hospitality", "front desk", "reception", "hotel management"] },
  { name: "Restaurant Specialist", category: "Hospitality & Food", demandLevel: "moderate", keywords: ["restaurant", "food service", "catering", "waiter", "waitress"] },

  // EDUCATION
  { name: "Early Childhood Educator", category: "Education & Social Work", demandLevel: "moderate", keywords: ["nursery", "kindergarten", "childcare", "early childhood", "preschool", "daycare"] },
  { name: "Social Worker", category: "Education & Social Work", demandLevel: "moderate", keywords: ["social work", "youth work", "community"] },
  { name: "Teacher (selected subjects)", category: "Education & Social Work", demandLevel: "moderate", keywords: ["teacher", "teaching", "stem teacher", "math teacher", "science teacher"] },

  // OTHER
  { name: "Accountant / Tax Consultant", category: "Other Specialist Fields", demandLevel: "moderate", keywords: ["accounting", "bookkeeping", "tax", "audit", "finance", "accountant"] },
  { name: "Optician", category: "Other Specialist Fields", demandLevel: "moderate", keywords: ["optician", "optometry", "eyewear"] },
  { name: "Hearing Aid Acoustician", category: "Other Specialist Fields", demandLevel: "moderate", keywords: ["hearing aid", "audiology"] },
  { name: "Dental Technician", category: "Other Specialist Fields", demandLevel: "moderate", keywords: ["dental technician", "dental lab", "prosthetics"] },
  { name: "Orthopaedic Technician", category: "Other Specialist Fields", demandLevel: "moderate", keywords: ["orthopaedic", "prosthetics", "medical devices"] },
];

export function findBestMatch(input: string): ShortageProfession | null {
  const normalized = input.toLowerCase().trim();
  if (normalized.length < 2) return null;

  let bestMatch: ShortageProfession | null = null;
  let bestScore = 0;

  for (const profession of SHORTAGE_PROFESSIONS) {
    let matchScore = 0;

    if (profession.name.toLowerCase().includes(normalized)) {
      matchScore = 10;
    }

    for (const keyword of profession.keywords) {
      if (keyword.toLowerCase().includes(normalized) || normalized.includes(keyword.toLowerCase())) {
        matchScore = Math.max(matchScore, 5);
      }
    }

    if (matchScore > 0) {
      if (profession.demandLevel === "critical") matchScore += 3;
      else if (profession.demandLevel === "high") matchScore += 2;
      else matchScore += 1;
    }

    if (matchScore > bestScore) {
      bestScore = matchScore;
      bestMatch = profession;
    }
  }

  return bestScore >= 5 ? bestMatch : null;
}

export function searchProfessions(input: string): ShortageProfession[] {
  const normalized = input.toLowerCase().trim();
  if (normalized.length < 2) return [];

  const words = normalized.split(/\s+/);

  const matches = SHORTAGE_PROFESSIONS.filter((profession) => {
    const searchableText = [
      profession.name.toLowerCase(),
      ...profession.keywords.map((k) => k.toLowerCase()),
    ].join(" ");
    return words.every((word) => searchableText.includes(word));
  });

  const demandOrder: Record<string, number> = { critical: 0, high: 1, moderate: 2 };
  matches.sort((a, b) => demandOrder[a.demandLevel] - demandOrder[b.demandLevel]);

  return matches.slice(0, 8);
}

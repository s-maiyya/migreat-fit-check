import type { CandidateProfile, Qualification, GermanLevel, Tier, FactorScore, ProfessionFactorScore, AssessmentResult } from "./types";
import { findBestMatch } from "./shortage-professions";

function scoreAge(age: number): FactorScore {
  if (age < 30) return { score: 3, label: "Excellent — under 30" };
  if (age <= 35) return { score: 2, label: "Very good — early 30s" };
  if (age <= 40) return { score: 1.5, label: "Good — late 30s" };
  if (age <= 45) return { score: 1, label: "Fair — early 40s" };
  if (age <= 50) return { score: 0.5, label: "Challenging — late 40s" };
  return { score: 0, label: "Very challenging — over 50" };
}

function scoreQualification(qual: Qualification): FactorScore {
  switch (qual) {
    case "masters": return { score: 3, label: "Master's degree or higher" };
    case "bachelors": return { score: 2.5, label: "Bachelor's degree" };
    case "diploma": return { score: 2, label: "Diploma / associate degree" };
    case "vocational": return { score: 2, label: "Vocational qualification" };
    case "secondary": return { score: 0.5, label: "Secondary school certificate" };
  }
}

const STEM_KEYWORDS = ["science", "technology", "engineering", "math", "physics", "chemistry", "biology", "computer", "statistics", "data", "research", "laboratory", "biomedical", "biochem", "electronics", "industrial", "manufacturing", "technical"];
const TRANSFERABLE_KEYWORDS = ["management", "administration", "accounting", "finance", "marketing", "sales", "teaching", "education", "human resources", "project management", "business", "logistics", "operations", "supervisor", "coordinator", "quality"];

function isSTEMField(input: string): boolean {
  const lower = input.toLowerCase();
  return STEM_KEYWORDS.some((kw) => lower.includes(kw));
}

function hasTransferableSkills(input: string): boolean {
  const lower = input.toLowerCase();
  return TRANSFERABLE_KEYWORDS.some((kw) => lower.includes(kw));
}

function scoreProfession(professionText: string): ProfessionFactorScore {
  const match = findBestMatch(professionText);

  if (match && match.demandLevel === "critical") {
    return { score: 3, label: `${match.name} — critical shortage sector`, isShortage: true, matchedProfession: match.name, matchedCategory: match.category, demandLevel: match.demandLevel };
  }
  if (match && match.demandLevel === "high") {
    return { score: 3, label: `${match.name} — high demand sector`, isShortage: true, matchedProfession: match.name, matchedCategory: match.category, demandLevel: match.demandLevel };
  }
  if (match && match.demandLevel === "moderate") {
    return { score: 2, label: `${match.name} — moderate demand sector`, isShortage: true, matchedProfession: match.name, matchedCategory: match.category, demandLevel: match.demandLevel };
  }
  if (isSTEMField(professionText)) {
    return { score: 1.5, label: "STEM-related field", isShortage: false };
  }
  if (hasTransferableSkills(professionText)) {
    return { score: 1, label: "Transferable skills", isShortage: false };
  }
  return { score: 0.5, label: "Not currently in a shortage sector", isShortage: false };
}

function scoreGerman(level: GermanLevel): FactorScore {
  switch (level) {
    case "c1plus": return { score: 3, label: "Advanced German (C1+)" };
    case "b1b2": return { score: 2, label: "Intermediate German (B1-B2)" };
    case "a1a2": return { score: 1, label: "Beginner German (A1-A2)" };
    case "none": return { score: 0.5, label: "No German yet" };
  }
}

function determineTier(
  totalScore: number,
  ageScore: number,
  qualScore: number,
  profScore: number,
  germanScore: number,
  age: number,
  qualification: Qualification,
  isShortageMatch: boolean
): Tier {
  if (age > 50 && qualification === "secondary") return "C";
  if (totalScore < 4) return "C";
  if (age > 50 && germanScore <= 0.5 && !isShortageMatch) return "C";

  const noZeroFactors = [ageScore, qualScore, profScore, germanScore].every((s) => s > 0);
  if (totalScore >= 8 && noZeroFactors) return "A";

  if (profScore >= 3 && ageScore >= 2 && totalScore >= 7) return "A";

  return "B";
}

function suggestAdjacentField(profession: string): string {
  const lower = profession.toLowerCase();
  if (lower.includes("fashion") || lower.includes("textile") || lower.includes("tailor")) return "Skilled Trades";
  if (lower.includes("philosophy") || lower.includes("arts") || lower.includes("music") || lower.includes("acting")) return "Education & Social Work";
  if (lower.includes("sales") || lower.includes("marketing")) return "Logistics or Hospitality";
  return "IT, Healthcare, or Skilled Trades — Germany's highest-demand sectors";
}

function generateStrengths(
  ageScore: number,
  qualScore: number,
  profScore: ProfessionFactorScore,
  germanScore: number,
  age: number,
  qualification: Qualification
): string[] {
  const strengths: string[] = [];

  if (profScore.isShortage && profScore.demandLevel === "critical" && profScore.matchedProfession) {
    strengths.push(`Your experience in ${profScore.matchedProfession} is in a critical shortage sector in Germany — employers genuinely struggle to fill these roles.`);
  } else if (profScore.isShortage && profScore.demandLevel === "high" && profScore.matchedProfession) {
    strengths.push(`Your background in ${profScore.matchedProfession} is in a high-demand sector — German companies are actively looking for this expertise.`);
  }

  if (germanScore >= 2) {
    strengths.push("Your German language skills set you apart from most international candidates — this is a major advantage.");
  }

  if (ageScore >= 3) {
    strengths.push("Your young age is a significant advantage — the German labour market strongly favours professionals in their 20s.");
  } else if (ageScore >= 2 && profScore.isShortage && profScore.matchedProfession) {
    strengths.push(`Your age and background in ${profScore.matchedProfession} make you exactly the kind of talent German employers actively recruit.`);
  }

  if (qualification === "vocational" && qualScore >= 2 && strengths.length < 2) {
    strengths.push("Germany places very high value on vocational qualifications like yours — often on par with university degrees.");
  }

  if (qualScore >= 2.5 && ageScore >= 2 && strengths.length < 2) {
    const degreeLabel = qualification === "masters" ? "Master's degree" : qualification === "bachelors" ? "Bachelor's degree" : "qualification";
    strengths.push(`With a ${degreeLabel} and your age profile, you fit the demographic German companies are hiring for.`);
  }

  if (strengths.length === 0) {
    strengths.push("You have strengths that align with what the German labour market values.");
  }

  return strengths.slice(0, 2);
}

function generateGrowthAreas(
  ageScore: number,
  qualScore: number,
  profScore: ProfessionFactorScore,
  germanScore: number,
  age: number,
  profession: string
): string[] {
  const areas: string[] = [];

  if (germanScore <= 0.5) {
    areas.push("Investing in German language skills (even reaching A2) would significantly strengthen your profile and open more doors.");
  } else if (germanScore === 1) {
    areas.push("You've already started learning German — reaching B1 level would put you in a much stronger position.");
  }

  if (profScore.score <= 1 && !profScore.isShortage) {
    const adjacent = suggestAdjacentField(profession);
    areas.push(`While your profession is not currently in Germany's top shortage sectors, exploring adjacent fields like ${adjacent} could dramatically improve your prospects.`);
  }

  if (qualScore <= 0.5) {
    areas.push("Pursuing a vocational qualification or professional certification would significantly boost your competitiveness in the German market.");
  }

  if (ageScore <= 0.5 && age > 50 && areas.length < 2) {
    areas.push("The German market is especially competitive for experienced professionals — standing out through specialised skills or German language proficiency becomes a real differentiator.");
  }

  if (areas.length === 0) {
    areas.push("Gaining some German language skills — even at a beginner level — would make your profile stand out even more.");
  }

  return areas.slice(0, 2);
}

export function calculateAssessment(profile: CandidateProfile): AssessmentResult {
  const qual = profile.qualification!;
  const german = profile.germanLevel!;

  const ageF = scoreAge(profile.age);
  const qualF = scoreQualification(qual);
  const profF = scoreProfession(profile.profession);
  const germanF = scoreGerman(german);

  const totalScore = ageF.score + qualF.score + profF.score + germanF.score;

  const tier = determineTier(totalScore, ageF.score, qualF.score, profF.score, germanF.score, profile.age, qual, profF.isShortage);

  const strengths = generateStrengths(ageF.score, qualF.score, profF, germanF.score, profile.age, qual);
  const growthAreas = generateGrowthAreas(ageF.score, qualF.score, profF, germanF.score, profile.age, profile.profession);

  let verdictHeadline: string;
  let verdictBody: string;

  if (tier === "A") {
    verdictHeadline = "Great News — Your Profile is in High Demand!";
    const profName = profF.matchedProfession || profile.profession;
    verdictBody = `Your background in ${profName} places you in a sector where German employers are actively hiring. ${strengths[0] || ""} ${strengths[1] ? strengths[1] : ""}`.trim();
  } else if (tier === "B") {
    verdictHeadline = "You Have Real Potential for the German Market";
    verdictBody = `${strengths[0] || "You have a profile with real potential for the German market."} ${growthAreas[0] ? `To maximise your chances, ${growthAreas[0].toLowerCase()}` : ""}`.trim();
  } else {
    verdictHeadline = "The German Market May Not Be the Best Fit Right Now";
    verdictBody = `We appreciate you taking the time to check your profile. Based on your current background, the German employment market may not be the strongest match at the moment. Germany's employers primarily recruit professionals with specific qualifications in shortage sectors. We believe in honesty — we'd rather save you time than give false hope. ${growthAreas[0] || ""}`.trim();
  }

  return {
    tier,
    totalScore,
    factors: { age: ageF, qualification: qualF, profession: profF, german: germanF },
    strengths,
    growthAreas,
    verdictHeadline,
    verdictBody,
  };
}

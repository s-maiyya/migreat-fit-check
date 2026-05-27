export type Qualification = "secondary" | "vocational" | "diploma" | "bachelors" | "masters";
export type GermanLevel = "none" | "a1a2" | "b1b2" | "c1plus";
export type Tier = "A" | "B" | "C";
export type DemandLevel = "critical" | "high" | "moderate";

export interface CandidateProfile {
  age: number;
  qualification: Qualification | null;
  profession: string;
  germanLevel: GermanLevel | null;
}

export interface FactorScore {
  score: number;
  label: string;
}

export interface ProfessionFactorScore extends FactorScore {
  isShortage: boolean;
  matchedProfession?: string;
  matchedCategory?: string;
  demandLevel?: DemandLevel;
}

export interface AssessmentResult {
  tier: Tier;
  totalScore: number;
  factors: {
    age: FactorScore;
    qualification: FactorScore;
    profession: ProfessionFactorScore;
    german: FactorScore;
  };
  strengths: string[];
  growthAreas: string[];
  verdictHeadline: string;
  verdictBody: string;
}

export interface ShortageProfession {
  name: string;
  category: string;
  keywords: string[];
  demandLevel: DemandLevel;
}

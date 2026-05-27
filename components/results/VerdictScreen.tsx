"use client";

import type { Tier, AssessmentResult } from "@/lib/types";

interface VerdictScreenProps {
  tier: Tier;
  result: AssessmentResult;
  children: React.ReactNode;
}

export default function VerdictScreen({ children }: VerdictScreenProps) {
  return (
    <div className="verdict-reveal bg-white rounded-card shadow-card p-6 sm:p-8 max-w-[600px] mx-auto">
      {children}
    </div>
  );
}

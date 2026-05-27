"use client";

import type { AssessmentResult } from "@/lib/types";
import VerdictScreen from "./VerdictScreen";
import Button from "@/components/ui/Button";

const MIGREAT_URL = "https://www.migreat-germany.com";

export default function CouldBeDemand({ result }: { result: AssessmentResult }) {
  return (
    <VerdictScreen tier="B" result={result}>
      <div className="border-t-4 border-gold -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 rounded-t-card" />

      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">📈</span>
        <h2 className="font-heading font-bold text-navy text-2xl sm:text-[28px] leading-tight">
          {result.verdictHeadline}
        </h2>
      </div>

      <p className="font-body text-dark text-base leading-relaxed mb-6">{result.verdictBody}</p>

      {result.growthAreas.length > 0 && (
        <div className="mb-6">
          <p className="font-body font-semibold text-navy text-sm mb-3">Here's what could make you highly competitive:</p>
          <ul className="flex flex-col gap-2">
            {result.growthAreas.map((g, i) => (
              <li key={i} className="flex gap-2 font-body text-sm text-dark">
                <span className="text-gold mt-0.5 flex-shrink-0">↑</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="border-t border-[#E5E7EB] pt-6 mt-6">
        <h3 className="font-heading font-semibold text-navy text-xl sm:text-2xl mb-3">Want to Know Exactly What Steps to Take?</h3>
        <p className="font-body text-dark text-base mb-2">
          MiGreat's Career Roadmap shows you the specific steps to make your profile competitive for the German market — including which skills to develop and which sectors to target.
        </p>
        <p className="font-body text-sm text-[#6B7280] mb-6">
          Want to know if your specific university is already recognized in Germany? That's one of the first things we check in your Career Roadmap.
        </p>
        <Button href={MIGREAT_URL} external size="large" className="w-full sm:w-auto">
          Get My Career Roadmap
        </Button>
        <p className="font-body text-sm text-navy/60 mt-3">Find out how to unlock your potential</p>
      </div>
    </VerdictScreen>
  );
}

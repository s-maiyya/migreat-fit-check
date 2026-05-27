"use client";

import type { AssessmentResult } from "@/lib/types";
import VerdictScreen from "./VerdictScreen";
import Button from "@/components/ui/Button";

const MIGREAT_URL = "https://www.migreat-germany.com";

export default function HighDemand({ result }: { result: AssessmentResult }) {
  return (
    <VerdictScreen tier="A" result={result}>
      <div className="border-t-4 border-green-500 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 rounded-t-card" />

      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">✅</span>
        <h2 className="font-heading font-bold text-navy text-2xl sm:text-[28px] leading-tight">
          {result.verdictHeadline}
        </h2>
      </div>

      <p className="font-body text-dark text-base leading-relaxed mb-6">{result.verdictBody}</p>

      {result.strengths.length > 0 && (
        <div className="mb-6">
          <p className="font-body font-semibold text-navy text-sm mb-3">What German employers value about profiles like yours:</p>
          <ul className="flex flex-col gap-2">
            {result.strengths.map((s, i) => (
              <li key={i} className="flex gap-2 font-body text-sm text-dark">
                <span className="text-gold mt-0.5 flex-shrink-0">●</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="border-t border-[#E5E7EB] pt-6 mt-6">
        <h3 className="font-heading font-semibold text-navy text-xl sm:text-2xl mb-3">Ready to Take the Next Step?</h3>
        <p className="font-body text-dark text-base mb-2">
          MiGreat's Career Roadmap gives you a personalised, step-by-step plan for building your career in Germany — including which employers to target, how to position your profile, and what documentation you'll need.
        </p>
        <p className="font-body text-sm text-[#6B7280] mb-6">
          Want to know if your specific university is already recognized in Germany? That's one of the first things we check in your Career Roadmap.
        </p>
        <Button href={MIGREAT_URL} external size="large" className="w-full sm:w-auto">
          Get My Career Roadmap
        </Button>
        <p className="font-body text-sm text-navy/60 mt-3">Used by 500+ professionals from Nigeria and India</p>
        <p className="font-body text-xs text-[#9CA3AF] mt-1">Supported by the German Federal Agency for Employment</p>
      </div>
    </VerdictScreen>
  );
}

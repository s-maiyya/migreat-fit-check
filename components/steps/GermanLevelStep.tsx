"use client";

import { useState } from "react";
import type { GermanLevel } from "@/lib/types";
import Button from "@/components/ui/Button";

interface GermanLevelStepProps {
  value: GermanLevel | null;
  onNext: (value: GermanLevel) => void;
  onBack: () => void;
}

const OPTIONS: { value: GermanLevel; label: string; subtitle: string }[] = [
  { value: "none", label: "No German", subtitle: "That's okay — many career paths don't require it" },
  { value: "a1a2", label: "Beginner (A1-A2)", subtitle: "Basic greetings and simple sentences" },
  { value: "b1b2", label: "Intermediate (B1-B2)", subtitle: "Can hold conversations and work in German" },
  { value: "c1plus", label: "Advanced (C1+)", subtitle: "Near-fluent or fluent" },
];

export default function GermanLevelStep({ value, onNext, onBack }: GermanLevelStepProps) {
  const [selected, setSelected] = useState<GermanLevel | null>(value);

  return (
    <div className="step-enter">
      <h2 className="font-body font-semibold text-dark text-xl sm:text-2xl mb-6">Do you speak any German?</h2>

      <div className="flex flex-col gap-3 mb-8">
        {OPTIONS.map((opt) => (
          <div
            key={opt.value}
            onClick={() => setSelected(opt.value)}
            className={`p-4 rounded-card border cursor-pointer transition-all duration-150 ${
              selected === opt.value
                ? "border-2 border-gold shadow-[0_4px_20px_rgba(245,197,24,0.2)] bg-white"
                : "border border-[#E5E7EB] bg-white hover:bg-cream"
            }`}
          >
            <p className="font-body font-semibold text-dark text-base">{opt.label}</p>
            <p className="font-body text-sm text-[#6B7280] mt-0.5">{opt.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>← Back</Button>
        <Button
          size="large"
          onClick={() => selected && onNext(selected)}
          disabled={!selected}
          className="text-lg font-semibold"
        >
          See My Results ✨
        </Button>
      </div>
    </div>
  );
}

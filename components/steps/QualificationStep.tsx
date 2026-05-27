"use client";

import { useState } from "react";
import type { Qualification } from "@/lib/types";
import Button from "@/components/ui/Button";

interface QualificationStepProps {
  value: Qualification | null;
  onNext: (value: Qualification) => void;
  onBack: () => void;
}

const OPTIONS: { value: Qualification; label: string }[] = [
  { value: "secondary", label: "Secondary school certificate (e.g. WAEC, SSCE, NECO, high school diploma)" },
  { value: "vocational", label: "Vocational certificate or trade qualification (e.g. NTC, NABTEB, City & Guilds, ITI)" },
  { value: "diploma", label: "Diploma or associate degree (e.g. OND, HND, associate's degree)" },
  { value: "bachelors", label: "Bachelor's degree (e.g. BSc, BA, BEng, BTech)" },
  { value: "masters", label: "Master's degree or higher (e.g. MSc, MA, MBA, PhD)" },
];

export default function QualificationStep({ value, onNext, onBack }: QualificationStepProps) {
  const [selected, setSelected] = useState<Qualification | null>(value);

  return (
    <div className="step-enter">
      <h2 className="font-body font-semibold text-dark text-xl sm:text-2xl mb-6">What is your highest qualification?</h2>

      <div className="flex flex-col gap-3 mb-8">
        {OPTIONS.map((opt) => (
          <div
            key={opt.value}
            onClick={() => setSelected(opt.value)}
            className={`p-4 rounded-card border cursor-pointer transition-all duration-150 font-body text-sm sm:text-base ${
              selected === opt.value
                ? "border-2 border-gold shadow-[0_4px_20px_rgba(245,197,24,0.2)] bg-white"
                : "border border-[#E5E7EB] bg-white hover:bg-cream"
            }`}
          >
            {opt.label}
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>← Back</Button>
        <Button onClick={() => selected && onNext(selected)} disabled={!selected}>Next →</Button>
      </div>
    </div>
  );
}

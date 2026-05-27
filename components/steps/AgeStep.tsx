"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface AgeStepProps {
  value: number;
  onNext: (value: number) => void;
}

const YEARS = Array.from({ length: 49 }, (_, i) => 2008 - i);

export default function AgeStep({ value, onNext }: AgeStepProps) {
  const [selectedYear, setSelectedYear] = useState<number | null>(value > 0 ? 2026 - value : null);
  const age = selectedYear ? 2026 - selectedYear : null;

  return (
    <div className="step-enter">
      <h2 className="font-body font-semibold text-dark text-xl sm:text-2xl mb-6">How old are you?</h2>

      <div className="mb-4">
        <select
          value={selectedYear ?? ""}
          onChange={(e) => setSelectedYear(e.target.value ? Number(e.target.value) : null)}
          className="w-full text-base p-4 border border-[#D1D5DB] rounded-btn focus:outline-none focus:border-midblue focus:shadow-[0_0_0_3px_rgba(46,68,148,0.15)] bg-white text-dark"
        >
          <option value="">Select your birth year</option>
          {YEARS.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {age !== null && (
        <p className="font-body text-sm text-navy/70 mb-6">
          You are <strong className="text-navy">{age}</strong> years old
        </p>
      )}

      <div className="flex justify-end mt-8">
        <Button onClick={() => age !== null && onNext(age)} disabled={age === null}>
          Next →
        </Button>
      </div>
    </div>
  );
}

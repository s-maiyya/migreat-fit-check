"use client";

import { useState, useRef, useEffect } from "react";
import { searchProfessions } from "@/lib/shortage-professions";
import type { ShortageProfession } from "@/lib/types";
import Button from "@/components/ui/Button";

interface ProfessionStepProps {
  value: string;
  onNext: (value: string) => void;
  onBack: () => void;
}

export default function ProfessionStep({ value, onNext, onBack }: ProfessionStepProps) {
  const [input, setInput] = useState(value);
  const [suggestions, setSuggestions] = useState<ShortageProfession[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleChange(val: string) {
    setInput(val);
    if (val.length >= 2) {
      const results = searchProfessions(val);
      setSuggestions(results);
      setShowDropdown(results.length > 0);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
  }

  function handleSelect(profession: ShortageProfession) {
    setInput(profession.name);
    setShowDropdown(false);
    setSuggestions([]);
  }

  const demandBadge: Record<string, string> = {
    critical: "text-red-600",
    high: "text-amber-600",
    moderate: "text-blue-600",
  };

  return (
    <div className="step-enter">
      <h2 className="font-body font-semibold text-dark text-xl sm:text-2xl mb-2">What is your profession or field of study?</h2>
      <p className="font-body text-sm text-[#6B7280] mb-6">Type your profession or field — we'll check if it's in demand in Germany</p>

      <div ref={wrapperRef} className="relative mb-8">
        <input
          type="text"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => input.length >= 2 && suggestions.length > 0 && setShowDropdown(true)}
          placeholder="e.g. Electrician, Software Developer, Nurse..."
          className="w-full text-base p-4 border border-[#D1D5DB] rounded-btn focus:outline-none focus:border-midblue focus:shadow-[0_0_0_3px_rgba(46,68,148,0.15)] bg-white text-dark"
        />

        {showDropdown && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-card shadow-card z-20 overflow-hidden">
            {suggestions.map((prof) => (
              <div
                key={prof.name}
                onMouseDown={() => handleSelect(prof)}
                className="px-4 py-3 cursor-pointer hover:bg-cream transition-colors"
              >
                <p className="font-body text-sm text-dark font-medium">{prof.name}</p>
                <p className={`font-body text-xs ${demandBadge[prof.demandLevel]}`}>
                  {prof.category} · {prof.demandLevel} demand
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>← Back</Button>
        <Button onClick={() => input.trim() && onNext(input.trim())} disabled={!input.trim()}>Next →</Button>
      </div>
    </div>
  );
}

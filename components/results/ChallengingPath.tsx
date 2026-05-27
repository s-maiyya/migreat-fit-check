"use client";

import { useState } from "react";
import type { AssessmentResult } from "@/lib/types";
import VerdictScreen from "./VerdictScreen";
import Button from "@/components/ui/Button";

const MIGREAT_URL = "https://www.migreat-germany.com";

export default function ChallengingPath({ result }: { result: AssessmentResult }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(window.location.origin + "/fit-check");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleWhatsAppShare() {
    const url = encodeURIComponent(window.location.origin + "/fit-check");
    window.open(`https://wa.me/?text=Check%20if%20your%20profile%20is%20in%20demand%20in%20Germany%3A%20${url}`, "_blank");
  }

  return (
    <VerdictScreen tier="C" result={result}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🤝</span>
        <h2 className="font-heading font-bold text-navy text-2xl sm:text-[28px] leading-tight">
          {result.verdictHeadline}
        </h2>
      </div>

      <p className="font-body text-dark text-base leading-relaxed mb-6">{result.verdictBody}</p>

      <div className="border-t border-[#E5E7EB] pt-6 mt-6">
        <h3 className="font-heading font-semibold text-navy text-xl mb-3">Know Someone Who Might Be a Great Fit?</h3>
        <p className="font-body text-dark text-sm mb-6">
          Do you have a family member or friend who is skilled and considering a career abroad? Germany is actively recruiting professionals in healthcare, engineering, IT, and the skilled trades.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="secondary" onClick={handleCopy} className="flex-1 justify-center">
            {copied ? "Copied!" : "Share This Tool"}
          </Button>
          <button
            onClick={handleWhatsAppShare}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-body font-semibold text-base px-6 py-3 rounded-btn min-h-[48px] hover:bg-[#1ebe5d] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Share on WhatsApp
          </button>
        </div>
      </div>

      <p className="font-body text-xs text-[#9CA3AF] mt-6 text-center">
        If you believe your situation is unique and would like personal guidance, you can still{" "}
        <a href={MIGREAT_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-navy">
          reach out to us
        </a>.
      </p>
    </VerdictScreen>
  );
}

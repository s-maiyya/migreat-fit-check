"use client";

import { useState } from "react";
import type { AssessmentResult, CandidateProfile } from "@/lib/types";

interface LeadCaptureFormProps {
  result: AssessmentResult;
  profile: CandidateProfile;
}

const COUNTRY_CODES = [
  { code: "+234", label: "+234 (Nigeria)" },
  { code: "+91", label: "+91 (India)" },
  { code: "+49", label: "+49 (Germany)" },
  { code: "+44", label: "+44 (UK)" },
  { code: "+1", label: "+1 (US/CA)" },
];

export default function LeadCaptureForm({ result, profile }: LeadCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+234");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    const lead = {
      email,
      whatsapp: phone ? `${countryCode}${phone}` : "",
      name,
      assessment: {
        tier: result.tier,
        totalScore: result.totalScore,
        factors: result.factors,
        profile,
      },
      timestamp: new Date().toISOString(),
    };

    console.log("Lead captured:", JSON.stringify(lead, null, 2));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-card shadow-card p-6 sm:p-8 mt-6 text-center">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-body font-semibold text-navy text-lg">Check your inbox!</p>
        <p className="font-body text-sm text-[#6B7280] mt-1">We've sent your personalised report.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-card shadow-card p-6 sm:p-8 mt-6">
      <h3 className="font-body font-semibold text-navy text-xl mb-2">Want us to send you a detailed report?</h3>
      <p className="font-body text-sm text-dark mb-6">
        We'll email you a summary of your profile assessment along with next steps tailored to your situation.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="font-body text-sm font-semibold text-dark block mb-1">Email address <span className="text-red-500">*</span></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full text-base p-4 border border-[#D1D5DB] rounded-btn focus:outline-none focus:border-midblue focus:shadow-[0_0_0_3px_rgba(46,68,148,0.15)]"
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        <div>
          <label className="font-body text-sm font-semibold text-dark block mb-1">WhatsApp number <span className="text-[#9CA3AF]">(optional)</span></label>
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="text-base p-4 border border-[#D1D5DB] rounded-btn focus:outline-none focus:border-midblue bg-white"
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="8012345678"
              className="flex-1 text-base p-4 border border-[#D1D5DB] rounded-btn focus:outline-none focus:border-midblue focus:shadow-[0_0_0_3px_rgba(46,68,148,0.15)]"
            />
          </div>
        </div>

        <div>
          <label className="font-body text-sm font-semibold text-dark block mb-1">Your name <span className="text-[#9CA3AF]">(optional)</span></label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name"
            className="w-full text-base p-4 border border-[#D1D5DB] rounded-btn focus:outline-none focus:border-midblue focus:shadow-[0_0_0_3px_rgba(46,68,148,0.15)]"
          />
        </div>

        <button
          type="submit"
          disabled={!email}
          className="w-full sm:w-auto bg-gold text-navy font-body font-semibold text-base px-8 py-4 rounded-btn min-h-[48px] hover:bg-[#E0B215] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send My Report
        </button>
      </form>

      <p className="font-body text-xs text-[#9CA3AF] mt-4">
        We respect your privacy. Your data is only used to send your report and relevant career opportunities.
      </p>
    </div>
  );
}

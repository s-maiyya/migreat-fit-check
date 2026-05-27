"use client";

import { useState } from "react";
import type { CandidateProfile, AssessmentResult, Qualification, GermanLevel } from "@/lib/types";
import { calculateAssessment } from "@/lib/scoring";
import ProgressBar from "@/components/ProgressBar";
import AgeStep from "@/components/steps/AgeStep";
import QualificationStep from "@/components/steps/QualificationStep";
import ProfessionStep from "@/components/steps/ProfessionStep";
import GermanLevelStep from "@/components/steps/GermanLevelStep";
import HighDemand from "@/components/results/HighDemand";
import CouldBeDemand from "@/components/results/CouldBeDemand";
import ChallengingPath from "@/components/results/ChallengingPath";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Card from "@/components/ui/Card";

export default function FitCheckWidget() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [profile, setProfile] = useState<CandidateProfile>({
    age: 0,
    qualification: null,
    profession: "",
    germanLevel: null,
  });
  const [result, setResult] = useState<AssessmentResult | null>(null);

  function handleStep1(age: number) {
    setProfile((p) => ({ ...p, age }));
    setCurrentStep(2);
  }

  function handleStep2(qualification: Qualification) {
    setProfile((p) => ({ ...p, qualification }));
    setCurrentStep(3);
  }

  function handleStep3(profession: string) {
    setProfile((p) => ({ ...p, profession }));
    setCurrentStep(4);
  }

  function handleStep4(germanLevel: GermanLevel) {
    const finalProfile = { ...profile, germanLevel };
    setProfile(finalProfile);
    const assessment = calculateAssessment(finalProfile);
    setResult(assessment);
    setCurrentStep(5);
  }

  function goBack() {
    setCurrentStep((s) => Math.max(1, s - 1));
  }

  if (currentStep === 5 && result) {
    return (
      <div>
        {result.tier === "A" && <HighDemand result={result} />}
        {result.tier === "B" && <CouldBeDemand result={result} />}
        {result.tier === "C" && <ChallengingPath result={result} />}
        {(result.tier === "A" || result.tier === "B") && (
          <LeadCaptureForm result={result} profile={profile} />
        )}
      </div>
    );
  }

  return (
    <Card>
      <ProgressBar currentStep={currentStep} totalSteps={4} />

      {currentStep === 1 && (
        <AgeStep value={profile.age} onNext={handleStep1} />
      )}
      {currentStep === 2 && (
        <QualificationStep value={profile.qualification} onNext={handleStep2} onBack={goBack} />
      )}
      {currentStep === 3 && (
        <ProfessionStep value={profile.profession} onNext={handleStep3} onBack={goBack} />
      )}
      {currentStep === 4 && (
        <GermanLevelStep value={profile.germanLevel} onNext={handleStep4} onBack={goBack} />
      )}
    </Card>
  );
}

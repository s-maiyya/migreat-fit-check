"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const STEP_LABELS = ["Age", "Qualification", "Profession", "German"];

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => {
          const step = i + 1;
          const isCompleted = step < currentStep;
          const isCurrent = step === currentStep;
          return (
            <div key={step} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 z-10 flex-shrink-0 ${
                    isCompleted ? "bg-gold text-navy" : isCurrent ? "bg-midblue text-white" : "bg-[#D1D5DB] text-white"
                  }`}
                >
                  {isCompleted ? "✓" : step}
                </div>
                {step < totalSteps && (
                  <div className="flex-1 h-1 mx-1">
                    <div className="h-full bg-[#D1D5DB] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gold rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: isCompleted ? "100%" : "0%" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between px-0">
        {STEP_LABELS.map((label, i) => (
          <span
            key={label}
            className={`text-xs font-body ${i + 1 <= currentStep ? "text-navy font-semibold" : "text-[#9CA3AF]"} flex-1 ${i === 0 ? "text-left" : i === totalSteps - 1 ? "text-right" : "text-center"}`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

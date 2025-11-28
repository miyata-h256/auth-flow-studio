import { useState } from 'react';

export function useFlowStep(totalSteps) {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const reset = () => setStep(0);

  return { step, next, prev, reset };
}

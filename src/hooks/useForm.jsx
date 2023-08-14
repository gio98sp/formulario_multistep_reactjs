import { useState } from 'react';

export const useForm = (steps) => {
  const [currentStep, setCurrentStep] = useState(0);

  return {
    currentStep,
    currentComponent: steps[currentStep],
  };
};

import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const ProductionStepper = ({ steps }) => {
  return (
    <div className="stepper-container p-4 z-50 rounded-xl shadow-bg-shadow-1 w-full">
      <Stepper
        activeStep={steps.findIndex((step) => !step.completed)}
        alternativeLabel
        sx={{ padding: '16px 0', width: '100%' }}
      >
        {steps.map((step, index) => (
          <Step key={index} completed={step.completed}>
            <StepLabel>
              <div className="flex flex-col items-center">
                <span>{step.label}</span>
                <span className="text-xs text-gray-500">{step.date}</span>
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default ProductionStepper;
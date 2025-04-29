

import React from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ScheduleIcon from '@mui/icons-material/Schedule';

const ColorlibStepIconRoot = styled('div')(({ ownerState }) => ({
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.completed && {
    color: '#4caf50',
  }),
  ...(ownerState.active && {
    color: '#1976d2',
  }),
  '& .ColorlibStepIcon-completedIcon': {
    color: '#4caf50',
    zIndex: 1,
    fontSize: 24,
  },
  '& .ColorlibStepIcon-circle': {
    color: '#9e9e9e',
    fontSize: 24,
  },
  '& .ColorlibStepIcon-pending': {
    color: '#ff9800',
    fontSize: 24,
  },
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {completed ? (
        <CheckCircleIcon className="ColorlibStepIcon-completedIcon" />
      ) : active ? (
        <ScheduleIcon className="ColorlibStepIcon-pending" />
      ) : (
        <RadioButtonUncheckedIcon className="ColorlibStepIcon-circle" />
      )}
    </ColorlibStepIconRoot>
  );
}

const ProductionStepper = ({ steps }) => {
  const activeStep = steps.findIndex(step => step.status === 'pending');

  return (
    <Stepper 
      activeStep={activeStep} 
      alternativeLabel
      sx={{ 
        width:{xs:"700px",sm:"100%"},
        '& .MuiStepLabel-label': {
          fontSize: '12px',
          fontWeight: 600,
        }
      }}
    >
      {steps.map((step, index) => (
        <Step key={step.label}>
          <StepLabel 
            StepIconComponent={ColorlibStepIcon}
            optional={
              <span style={{ 
                fontSize: '11px', 
                color: '#666',
                marginTop: '4px'
              }}>
                {step.date}
              </span>
            }
          >
            {step.label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default ProductionStepper;
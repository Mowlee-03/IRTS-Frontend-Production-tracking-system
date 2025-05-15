import React from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';


// Custom connector for cleaner look
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(22, 153, 118) 0%,rgb(22, 153, 118) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(22, 153, 118) 0%,rgb(22, 153, 118) 50%,rgb(22, 153, 118) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '30%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.grey[700],
  }),
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgba(112, 16, 249, 1) 0%, rgba(112, 16, 249, 1) 50%, rgba(112, 16, 249, 1) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(22, 153, 118) 0%, rgb(22, 153, 118) 50%, rgb(22, 153, 118) 100%)',
  }),
}));

// ColorlibStepIcon now accepts an icon prop dynamically
function ColorlibStepIcon({ active, completed, className, icon }) {
  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icon} {/* Use the icon prop directly */}
    </ColorlibStepIconRoot>
  );
}

// Main custom stepper
const CustomeStepper = ({ steps, activeStep }) => {


  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<ColorlibConnector />}
      sx={{width:"100%"}}
    >
      {steps.map((step, index) => (
        <Step key={index} >
          <StepLabel
            StepIconComponent={(props) => (
              <ColorlibStepIcon {...props} icon={step.icon} />
            )}
          >
            {step.label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CustomeStepper;

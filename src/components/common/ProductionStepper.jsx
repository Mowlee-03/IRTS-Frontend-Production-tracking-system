import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import { PieChart } from '@mui/x-charts/PieChart';

const ProductionStepper = ({ steps }) => {
  const activeStep = steps.findIndex(step => step.status === 'in-progress');

  const getProgressProps = (status) => {
    switch (status) {
      case 'pending':
        return { value: 33, color: '#ff0000' }; // Red for pending
      case 'in-progress':
        return { value: 66, color: '#ff9800' }; // Orange for in-progress
      case 'completed':
        return { value: 100, color: '#4caf50' }; // Green for completed
      default:
        return { value: 0, color: '#666' };
    }
  };
  const getBackgroundColor = (status) => {
    switch (status) {
      case 'pending':
        return '#666'; // Gray for pending
      case 'in-progress':
        return '#ff9800'; // Orange for in-progress
      case 'completed':
        return '#4caf50'; // Green for completed
      default:
        return '#666';
    }
  };

  const getPieSegments = (value) => {
    const segments = [];
  
    if (value > 0) {
      segments.push({ id: 0, value: Math.min(value, 33), color: '#f44336' }); // red
    }
    if (value > 33) {
      segments.push({ id: 1, value: Math.min(value - 33, 33), color: '#ff9800' }); // orange
    }
    if (value > 66) {
      segments.push({ id: 2, value: Math.min(value - 66, 34), color: '#4caf50' }); // green
    }
  
    // Remaining
    const remaining = 100 - value;
    if (remaining > 0) {
      segments.push({ id: 3, value: remaining, color: '#e0e0e0' }); // gray
    }
  
    return segments;
  };
  
  return (
    <Stepper
      activeStep={activeStep}
      orientation="vertical"
      sx={{
        // width: { xs: '700px', sm: '100%' },
        '& .MuiStepLabel-label': {
          fontSize: '15px',
          fontWeight: 600,
          // backgroundColor:"#e8e8e8",
          // borderRadius:2,
          // padding:,
          marginLeft:'10px',
          display:"flex",flexDirection:"column"
        },
        '& .MuiStepLabel-label.Mui-active': {
          color: '#4caf50', // Highlight active step label in green
        },
        '& .MuiStepConnector-line': {
          borderLeftWidth: '2px',
          minHeight: '40px',
          borderColor: (theme) =>activeStep > -1 ? '#4caf50' : '#666', // Green connector for completed steps
          marginLeft:"15px"
        },
      }}
    >
      {steps.map((step, index) => {
        const { value, color } = getProgressProps(step.status);
        const isCompleted = step.status === 'completed';

        return (
          <Step key={step.label} completed={isCompleted}>
            <StepLabel
              icon={
                <Box sx={{ width: 50, height: 50, position: 'relative' }}>
                <PieChart
                    series={[
                      {
                        data: getPieSegments(value),
                        innerRadius: 26,
                        outerRadius: 30,
                        paddingAngle: 0,
                      },
                    ]}
                    width={70}
                    height={70}
                    sx={{
                      position: 'absolute',
                      top: -10,
                      left: -10,
                    }}
                  />

                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    backgroundColor: getBackgroundColor(step.status),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#fff',
                  }}
                >
                  {isCompleted ? (
                    <CheckIcon sx={{ fontSize: '20px' }} />
                  ) : (
                    index + 1
                  )}
                </Box>
              </Box>
              
              }
            
            >
              {step.label}
              <span className='font-medium text-[10px]'>{step.date}</span>
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default ProductionStepper;





// import React from 'react';
// import { styled } from '@mui/material/styles';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
// import ScheduleIcon from '@mui/icons-material/Schedule';

// const ColorlibStepIconRoot = styled('div')(({ ownerState }) => ({
//   display: 'flex',
//   height: 22,
//   alignItems: 'center',
//   ...(ownerState.completed && {
//     color: '#4caf50',
//   }),
//   ...(ownerState.active && {
//     color: '#1976d2',
//   }),
//   '& .ColorlibStepIcon-completedIcon': {
//     color: '#4caf50',
//     zIndex: 1,
//     fontSize: 24,
//   },
//   '& .ColorlibStepIcon-circle': {
//     color: '#9e9e9e',
//     fontSize: 24,
//   },
//   '& .ColorlibStepIcon-pending': {
//     color: '#ff9800',
//     fontSize: 24,
//   },
// }));

// function ColorlibStepIcon(props) {
//   const { active, completed, className } = props;

//   return (
//     <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
//       {completed ? (
//         <CheckCircleIcon className="ColorlibStepIcon-completedIcon" />
//       ) : active ? (
//         <ScheduleIcon className="ColorlibStepIcon-pending" />
//       ) : (
//         <RadioButtonUncheckedIcon className="ColorlibStepIcon-circle" />
//       )}
//     </ColorlibStepIconRoot>
//   );
// }

// const ProductionStepper = ({ steps }) => {
//   const activeStep = steps.findIndex(step => step.status === 'pending');

//   return (
//     <Stepper 
//       activeStep={activeStep} 
//       alternativeLabel
//       sx={{ 
//         width:{xs:"700px",sm:"100%"},
//         '& .MuiStepLabel-label': {
//           fontSize: '12px',
//           fontWeight: 600,
//         }
//       }}
//     >
//       {steps.map((step, index) => (
//         <Step key={step.label}>
//           <StepLabel 
//             StepIconComponent={ColorlibStepIcon}
//             optional={
//               <span style={{ 
//                 fontSize: '11px', 
//                 color: '#666',
//                 marginTop: '4px'
//               }}>
//                 {step.date}
//               </span>
//             }
//           >
//             {step.label}
//           </StepLabel>
//         </Step>
//       ))}
//     </Stepper>
//   );
// };

// export default ProductionStepper;
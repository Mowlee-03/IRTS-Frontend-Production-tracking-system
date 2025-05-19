import React from 'react'
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Chip,
  LinearProgress,
  StepContent,
  Button,
  StepButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { Smile, Timer } from 'lucide-react';

const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.vertical}`]: {
    marginLeft: 30,
    padding: 0,
  },
  [`& .${stepConnectorClasses.line}`]: {
    minHeight: 30, // Match your label's height
    // borderLeftWidth: 2,
    // borderColor: theme.palette.divider,
  },
}));
const StatusChip = ({ label, color }) => (
  <Chip
    label={label}
    size="small"
    sx={{
        borderRadius:2,
      backgroundColor: color.bg,
      color: color.text,
      fontWeight: 500,
    }}
  />
);

const CustomStepIcon = (props) => {
  const { active, completed, icon } = props;

  return (
    <Box
      sx={{
        width: 62,
        height: 62,
        borderRadius: "20%",
        backgroundColor: active
          ? "#1976d2"
          : completed
          ? "#4caf50"
          : "#e0e0e0",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: 14,
      }}
    >
      {icon}
    </Box>
  );
};



const LabelContent=()=>{
    return(
        <div className=''>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-lg'>Bom Recieving</h2>
                <div className='flex gap-3 items-center '>
                    <StatusChip label={"28 Units"} color={{bg:'#d4f5dd',text:"#"}}/>
                    <StatusChip label={"Hello World..."} color={{bg:'#d4f5dd',text:"#"}}/>
                    <Chip
                    icon={<Timer size={14}/>}
                    size="small"
                    label={"2h"}
                    variant='outlined'
                    sx={{
                            borderRadius:2,
                            bgcolor:"#94A3B820"
                    }}
                    />
                    <span className='bg-green-300 p-2 rounded-full'>AC</span>
                </div>
            </div>
            <LinearProgress
            variant="determinate" 
            value={20}
            sx={{
                height:6,
                mt:1,
                borderRadius:2
            }}
            />
        </div>
    )
}

const DetailedContent=()=>{
    return(
        <div className='bg-[#F8FAFC] rounded-lg min-h-[180px] px-8 py-2 flex flex-col'>
            <div className='flex-1 flex justify-between items-center'>
                <span className='text-center '>
                    <p 
                    className='text-[#64748B]'
                    >Deadline</p>
                    <p >29-09-2020,11:09 AM</p>
                </span>
                <span className='text-center'>
                    <p 
                    className='text-[#64748B]'
                    >Start Date</p>
                    <p >09-09-2020,11:09 AM</p>
                </span>
                <span className='text-center'>
                    <p 
                    className='text-[#64748B]'
                    >End Date</p>
                    <p >19-09-2020,11:09 AM</p>
                </span>
                <span className='text-center'>
                    <p 
                    className='text-[#64748B]'
                    >Delayed</p>
                    <p >0</p>
                </span>
            </div>
            <div className='border-t-2 pt-3 flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <span className='bg-green-300 w-7 h-7 text-center rounded-full'>AC</span>
                    <span>
                        <p>Alex Chen</p>
                        <p className='text-[#64748B] text-xs'>Performance:<span className='pl-2'>65%</span></p>
                    </span>
                </div>
                <div className='text-end'>
                    <p className='text-[#64748B]'>Last Check</p>
                    <p>12:00 PM</p>
                </div>
            </div>
        </div>
    )
}



const DetailedProgressStepper = ({steps}) => {
    const [activeStep, setActiveStep] = React.useState(0);

      const handleStep = (step) => () => {
        setActiveStep(step);
    };
  return (
    <Box
      sx={{
        overflowX: "auto",
        px: { xs: 1, sm: 2 },
        py: 2,
        width: "100%",
        margin: "auto",
      }}
    >
       <Stepper activeStep={activeStep} orientation="vertical" connector={<CustomStepConnector/>}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel 
            StepIconComponent={CustomStepIcon}
            onClick={handleStep(index)} sx={{m:0,p:0,bgcolor:""}}
            >
             <LabelContent/>
            </StepLabel>
            <StepContent sx={{  ml: 3.7,p:0,pl:4,pt:1}}>
                <DetailedContent/>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};


export default DetailedProgressStepper
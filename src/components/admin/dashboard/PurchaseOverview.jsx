import { Card, CardContent, CardHeader, Step, StepConnector, stepConnectorClasses, StepLabel, Stepper, useMediaQuery } from "@mui/material"
import {
  CheckCircle,
  HourglassEmpty,
  LocalShipping,
  Inventory,
  Report,
  Category,
} from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
const PurchaseOverview = () => {
    const theme = useTheme()
    const isBelow2xl = useMediaQuery(theme.breakpoints.down('2xl'))
  // Custom connector for vertical stepper
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // backgroundColor: '#1976d2',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    marginLeft:4,
    minHeight: 30,
    borderLeftWidth: 3,
    borderColor: '#ccc',
  },
}));

const steps = [
  {
    title: 'PO Creation',
    count: 70,
    description: 'Normal',
    color: 'bg-blue-100',
    icon: <CheckCircle 
    fontSize="large"
    sx={{fontSize:{'2xl':"15px"}}} 
    className="text-blue-500" />,
  },
  {
    title: 'Approval Pending',
    count: 12,
    description: 'Pending',
    color: 'bg-yellow-100',
    icon: <HourglassEmpty 
   fontSize="large"
    sx={{fontSize:{'2xl':"15px"}}} 
    className="text-yellow-500" />,
  },
  {
    title: 'In Transit',
    count: 50,
    description: 'Normal',
    color: 'bg-purple-100',
    icon: <LocalShipping 
    fontSize="large"
    sx={{fontSize:{'2xl':"15px"}}} 
    className="text-purple-500" />,
  },
  {
    title: 'Order Received',
    count: 8,
    description: 'Normal',
    color: 'bg-gray-100',
    icon: <Inventory 
   fontSize="large"
    sx={{fontSize:{'2xl':"15px"}}} 
    className="text-gray-500" />,
  },
  {
    title: 'Need to Create',
    count: 20,
    description: 'Urgent',
    color: 'bg-red-100',
    icon: <Report 
    fontSize="large"
    sx={{fontSize:{'2xl':"15px"}}}  
    className="text-red-500" />,
  },
  {
    title: 'Material Count',
    count: 20,
    description: 'Info',
    color: 'bg-blue-100',
    icon: <Category 
   fontSize="large"
    sx={{fontSize:{'2xl':"15px"}}} 
    className="text-blue-400" />,
  },
];

  return (
      <div className="h-full overflow-hidden bg-white rounded-xl shadow-bg-shadow-4 2xl-plus:px-4 px-3 py-2">
        <p className="font-medium"> Purchase Overview</p>
      <div className="h-[85%]">
        {
          isBelow2xl?
        <Stepper
          orientation="vertical"
          connector={<ColorlibConnector />}
          activeStep={-1}
          
          sx={{
            height:"100%",
            padding: 0,
            margin: 0,
            '& .MuiStep-root': { padding: 0, margin: 0 },
            // '& .MuiStepLabel-iconContainer': { p: 0, margin: 0 ,},
          }}
        >
          {steps.map((step, index) => (
            <Step key={index} active>
              <StepLabel 
              // sx={{m:0,p:0}}
              icon={step.icon}>
                <div className={`rounded-md px-4 py-2 ${step.color}`}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{step.title}</span>
                    <span className="text-sm font-semibold">Count: {step.count}</span>
                  </div>
                  <div className="text-xs text-gray-600">{step.description}</div>
                </div>
            </StepLabel>
           </Step>
          ))}
        </Stepper>  
        :(
          <div className="grid grid-cols-1 gap-2  h-full">
           {steps.map((step, index) => (
          <div className={`rounded-md px-2 pt-[2px] ${step.color}`}>
                  <div className="flex justify-between items-center">
                      <div>
                        <span>{step.icon}</span>
                        <span className="ml-1 font-medium text-sm">{step.title}</span>
                      </div>
                     
                      <span className="text-xs font-semibold">Count: {step.count}</span>
                    </div>
                  <div className="text-xs text-gray-600">{step.description}</div>
            </div>))}
          </div>
        )
        
        }
       
      
      </div>
     
      </div>


  )
}

export default PurchaseOverview

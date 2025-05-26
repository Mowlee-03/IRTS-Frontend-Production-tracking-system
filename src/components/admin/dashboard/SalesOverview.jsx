import {Box, Grid, LinearProgress, Step, StepLabel, Stepper } from "@mui/material"
import { FileText, Truck, Package, Clock } from "lucide-react"
import CircleIcon from '@mui/icons-material/Circle';
const StatCard = ({ icon, color, title, value, subtitle }) => {
  return (
    <div 
    style={{backgroundColor:color}}
    className={`rounded-lg p-2 2xl-plus:p-4 text-white flex flex-row md-plus:flex-col items-center md-plus:items-start gap-2 md-plus:gap-0 h-full`}>
      <div className="flex items-center md-plus::mb-2 bg-[#ffffff67] rounded-full">
        <div className={`p-2 rounded-full `}>{icon}</div>
      </div>
      <div className="text-lg 2xl-plus:text-3xl font-bold">{value}</div>
      <div className="text-sm 2xl-plus:text-base ">{title}</div>
      <div className="ml-auto md-plus:ml-0 mt-auto text-xs 2xl-plus:text-sm text-${color}-100">{subtitle}</div>
    </div>
  )
}

const SalesOverview = () => {
  const orderSubData={
    totalOrders:120,
    overDues:30,
    nearDeadline:30,
    onSchedule:60
  }
  const Ordersteps=[
    {label:"Overdue Orders",value:orderSubData.overDues,color:'linear-gradient(0deg, #EB4E43 0%, #D44339 20%, #FF9891 64%, #F65D53 100%)',
      icon:<CircleIcon fontSize="snall" className="text-[#EF4444] ml-1"/>},
    {label:"Near Deadline",value:orderSubData.nearDeadline,color:'linear-gradient(0deg, #E4A911 0%, #DBA00A 20%, #FFDB95 64%, #F6BB23 100%)',
      icon:<CircleIcon fontSize="snall" className="text-[#FFB95A] ml-1"/>},
    {label:"On Schedule",value:orderSubData.onSchedule,color:'linear-gradient(0deg, #5ECD4D 0%, #31B81B 20%, #96FF86 64%, #64CF53 100%)',
      icon:<CircleIcon fontSize="snall" className="text-[#22C55E] ml-1"/>},
  ]

  return (
    <div className="w-full h-full px-3 2xl-plus:px-4 pt-1 pb-4 2xl-plus:py-5 bg-white rounded-xl shadow-bg-shadow-1">
        <p className="font-medium text-sm 2xl-plus:text-base">Sales Overview</p>
        <Grid container columnSpacing={2} 
        sx={{
          width:"100%",
          height:"90%",
          // bgcolor:"greenyellow"
          }}>
          <Grid sx={{height :"100%"}}  
          size={{
            xs:12,
            md:4,
            lg:2.5
            }}>
            <StatCard
              icon={<FileText size={24} />}
              color="#124076"
              title="Total Orders"
              value="160"
              subtitle="+10 for Month"
            />
          </Grid>
         <Grid sx={{
           mt:{xs:1,md:0},
          height :"100%"}}  
         size={{
           xs:12,
          md:4,
          lg:2.5
          
         }}>
            <StatCard
              icon={<Truck  size={24} />}
              color="#FF9B50"
              title="Need to Deliver"
              value="80"
              subtitle="+10 for yesterday"
            />
          </Grid>
        <Grid sx={{
           mt:{xs:1,md:0},
          height :"100%"}}  
        size={{
          xs:12,
          md:4,
          lg:2.5
          }}>
            <StatCard
              icon={<Package size={24} />}
              color="#40A578"
              title="Delivered Product"
              value="80"
              subtitle="+10 for Today"
            />
          </Grid>
          <Grid sx={{
            height :"100%",
            bgcolor:"#E0F6FF",
            borderRadius:2,
            mt:{xs:1,lg:0},
            p:{xl:0.5,'2xl':1},
            display:"flex",
            gap:1
            // flexDirection:"column",
            // justifyContent:"space-between"
          }}  
            size={{
              xs:12,
              lg:4.5
            }}
            >

            <Stepper
          orientation="vertical"
          activeStep={-1}
          sx={{
            py:{
              "2xl":1
            }
            // bgcolor:"gray"
          }}
        >
          {Ordersteps.map((step, index) => (
            <Step key={index} active>
              <StepLabel 
               sx={{
          '& .MuiStepLabel-label': {
            // pt:0.8,
            fontSize: '12px', // Adjust size as needed
          },
        }}
              icon={step.icon}
              >
                {step.label}
              </StepLabel>
           </Step>
          ))}
           </Stepper>  
          
           <div className=" flex-1 flex flex-col justify-between gap-2">
            {
              Ordersteps.map((item)=>{
                const percent = (item.value / orderSubData.totalOrders) * 100;
                return(
                <div key={item.label} className="h-[33%] relative">
                 <LinearProgress
                variant="determinate" 
                 value={percent} 
                 sx={{
                     height:'100%',
                     borderRadius:2,
                     '& .MuiLinearProgress-bar': {
                       background: item.color
                     },
                     backgroundColor:"#F1F5F9"
                 }}
               />
               <p className="absolute top-3 left-2 font-medium text-sm md-plus:text-base">{item.value}</p>
                </div>
             
               
              )})
            }
           </div>
           
          </Grid>
        </Grid>
    </div>

  )
}

export default SalesOverview

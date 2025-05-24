import { Card, CardContent, CardHeader, LinearProgress } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarHalfIcon from '@mui/icons-material/StarHalf';
const StorePerformance = () => {
  // Mock data
  const data = [
    { id: 0, value: 100, label: "Total Bom", color: "#16A34A",
      icon:<StarIcon 
      sx={{
        fontSize:{
          "2xl":'15px'
        }
      }}
      /> },
    { id: 1, value: 100, label: "Bom Out", color: "#1D4ED8" ,
      icon:<DoneAllIcon
      sx={{
          fontSize:{
            "2xl":'15px'
          }
        }}
    />},
    { id: 2, value: 80, label: "Partial Bom out", color: "#D97706",
      icon:<CheckCircleIcon
      sx={{
        fontSize:{
          "2xl":'15px'
        }
      }}
      /> },
    // { id: 3, value: 60, label: "Out store", color: "#f97316",icon:<DoneAllIcon/> },
    { id: 4, value: 10, label: "Progress", color: "#7C3AED" ,
      icon:<StarHalfIcon
      sx={{
        fontSize:{
          "2xl":'15px'
        }
      }}
      />},
  ]

  return (
        <div className="h-full flex flex-col px-3 py-2 2xl-plus:px-4 gap-2  bg-white rounded-xl shadow-bg-shadow-4"> 
          <div className="flex items-center">
            <p className="font-medium"> Store Performance</p>
          </div>
          <div className=" h-[65%] flex flex-col justify-between">
            {data.map((detail,index)=>(
            <div key={index} className="">
              <div className="flex justify-between items-center  text-sm pb-1">
                <p>{detail.label}</p>
                <div className="font-medium flex items-center justify-center gap-1">
                  <p>{detail.value}%</p>
                  <span 
                  style={{backgroundColor:detail.color}}
                  className="text-white rounded-lg p-1">{detail.icon}</span>
                </div>
              </div>
              <LinearProgress
               variant="determinate" 
                value={detail.value}
                
                sx={{
                    height:{
                      xs:20,
                      "2xl":9
                    },
                    // mt:1,
                    borderRadius:2,
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: detail.color,
                    },
                    backgroundColor:"#F1F5F9"
                }}
              />
            </div>
            ))}
           
          </div>
            <div className="flex justify-between items-center p-3 bg-[#E0F2FE] h-[25%] rounded-xl border-[#BAE6FD] border-2">
              <div>
                <p className="text-[#0C4A6E] font-medium text-base">Required Count</p>
                <p className="text-[#0369A1] font-normal text-xs">Total items needed</p>
              </div>
              <span className="text-[#0C4A6E] font-medium text-xl">70</span>
            </div>
        </div>

  )
}

export default StorePerformance

import {Grid } from "@mui/material"
import { FileText, Truck, Package, Clock } from "lucide-react"

const StatCard = ({ icon, color, title, value, subtitle }) => {
  return (
    <div className={`bg-${color}-500 rounded-lg p-2 xl:p-4 text-white flex flex-col items-start h-full`}>
      <div className="flex items-center mb-2 bg-[#ffffff67] rounded-full">
        <div className={`bg-${color}-400 p-2 rounded-full `}>{icon}</div>
      </div>
      <div className="2xl:text-3xl font-bold">{value}</div>
      <div className="text-lg">{title}</div>
      <div className="mt-auto text-sm text-${color}-100">{subtitle}</div>
    </div>
  )
}

const SalesOverview = () => {
  return (
    <div className="w-full h-full px-4 py-5 bg-white rounded-xl shadow-bg-shadow-1">
        <p className="font-medium">Sales Overview</p>
        <Grid container columnSpacing={2} 
        sx={{
          width:"100%",
          height:"90%" ,
          // bgcolor:"greenyellow"
          }}>
          <Grid sx={{height :"100%"}}  size={{xl:2.5}}>
            <StatCard
              icon={<FileText size={24} />}
              color="blue"
              title="Total Orders"
              value="160"
              subtitle="+10 for Month"
            />
          </Grid>
         <Grid sx={{height :"100%"}}  size={{xl:2.5}}>
            <StatCard
              icon={<Truck size={24} />}
              color="orange"
              title="Need to Deliver"
              value="80"
              subtitle="+10 for yesterday"
            />
          </Grid>
        <Grid sx={{height :"100%"}}  size={{xl:2.5}}>
            <StatCard
              icon={<Package size={24} />}
              color="green"
              title="Delivered Product"
              value="80"
              subtitle="+10 for Today"
            />
          </Grid>
          <Grid sx={{
            height :"100%",
            bgcolor:"#D6DDE5",
            borderRadius:2,
            p:1,
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between"}}  
            size={{xl:4.5}}
            >
           
              <div className="w-4/5 bg-[#EF4444] rounded-lg p-1 flex items-center gap-2">
                <span className="bg-white p-2 rounded-lg">
                    <Clock size={20}  />
                </span>
               
                <div className="text-sm text-white">
                  <span>Overdue Order</span>
                  <div className="font-semibold">40</div>

                </div>
              </div>

              <div className="ml-auto w-4/5 bg-[#eea826] rounded-lg p-1 flex items-center gap-2">
                <span className="bg-white p-2 rounded-lg">
                    <Clock size={20}  />
                </span>
               
                <div className="text-sm text-white">
                  <span>Orders Near Deadline </span>
                  <div className="font-semibold">40</div>

                </div>
              </div>
              <div className="w-4/5 bg-[#84CC16] rounded-lg p-1 flex items-center gap-2">
                <span className="bg-white p-2 rounded-lg">
                    <Clock size={20}  />
                </span>
               
                <div className="text-sm">
                  <span>Order on schedule</span>
                  <div className="font-semibold">40</div>

                </div>
              </div>

           
          </Grid>
        </Grid>
    </div>

  )
}

export default SalesOverview

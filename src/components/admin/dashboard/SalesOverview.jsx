import { Card, CardContent, CardHeader, Grid } from "@mui/material"
import { FileText, Truck, Package, Clock } from "lucide-react"

const StatCard = ({ icon, color, title, value, subtitle }) => {
  return (
    <div className={`bg-${color}-500 rounded-lg p-4 text-white flex flex-col h-full`}>
      <div className="flex items-center mb-2">
        <div className={`bg-${color}-400 p-2 rounded-full`}>{icon}</div>
      </div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-lg">{title}</div>
      <div className="mt-auto text-sm text-${color}-100">{subtitle}</div>
    </div>
  )
}

const SalesOverview = () => {
  return (
    <Card className="h-full shadow-md">
      <CardHeader title="Sales Overview" className="pb-0" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<FileText size={24} />}
              color="blue"
              title="Total Orders"
              value="160"
              subtitle="+10 for Month"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<Truck size={24} />}
              color="orange"
              title="Need to Deliver"
              value="80"
              subtitle="+10 for yesterday"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<Package size={24} />}
              color="green"
              title="Delivered Product"
              value="80"
              subtitle="+10 for Today"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="h-full flex flex-col gap-2">
              <div className="bg-red-500 rounded-lg p-3 text-white">
                <div className="flex items-center">
                  <Clock size={20} className="mr-2" />
                  <span>Overdue Order</span>
                </div>
                <div className="text-xl font-bold">40</div>
              </div>
              <div className="bg-orange-400 rounded-lg p-3 text-white">
                <div className="flex items-center">
                  <Clock size={20} className="mr-2" />
                  <span>Orders Near Deadline</span>
                </div>
                <div className="text-xl font-bold">20</div>
              </div>
              <div className="bg-green-500 rounded-lg p-3 text-white">
                <div className="flex items-center">
                  <Clock size={20} className="mr-2" />
                  <span>Order on schedule</span>
                </div>
                <div className="text-xl font-bold">20</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default SalesOverview

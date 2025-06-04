import { TrendingDown, Clock, Zap, CheckCircle, AlertTriangle, Plus, TrendingUp } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import MetricCard from "../common/MetricStatusCards"


const FGtabs = () => {
  const location = useLocation()

  const metrics = [
    {
      icon: TrendingUp,
      title: "Total Stock",
      subtitle: "All FG in system",
      value: "450",
      bgColor: "bg-blue-50",
      iconColor: "#0f83ffef",
      boxShadow: '0px 2px 10px 0px #6366F11F, 0px 20px 40px 0px #6366F126',
      path: "/store/total/production_orders"
    },
    {
      icon: Plus,
      title: "Partial FG REC",
      subtitle: "Partially received",
      value: "125",
      bgColor: "bg-red-50",
      iconColor: "#EF4444",
      boxShadow: '0px 2px 10px 0px #EF44441F, 0px 20px 40px 0px #EF444426',
      path:  "/store/pending/production_orders"
    },
    {
      icon: CheckCircle,
      title: "Fully FG REC",
      subtitle: "Fully received",
      value: "230",
      bgColor: "bg-yellow-50",
      iconColor: "#F59E0B",
      boxShadow:"0px 2px 10px 0px #F59E0B1F, 0px 20px 40px 0px #F59E0B26",
      path: "/store/initial-kitting"
    },
    {
      icon:AlertTriangle ,
      title: "Pending Qty",
      subtitle: "Awaiting receipt",
      value: "95",
      bgColor: "bg-purple-50",
      iconColor: "#D000FF",
      boxShadow:" 0px 2px 10px 0px #D000FF1F ,0px 20px 40px 0px #D000FF26",
      path: "/store/kitting-complete"
    },
    {
      icon: CheckCircle,
      title: "FG Delivered",
      subtitle: "Completed delivery",
      value: "178",
      bgColor: "bg-indigo-50",
      iconColor: "#6366F1",
      boxShadow:" 0px 2px 10px 0px #6366F11F,0px 20px 40px 0px #3FDFFF33",
      path: "/store/bom-out"
    },
  ]

  return (
    <div className="grid grid-cols-1 sm-plus:grid-cols-2 lg-plus:grid-cols-3 xl-plus:grid-cols-5 gap-4 sm:gap-6 pb-7">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          {...metric}
          isActive={location.pathname === metric.path}
        />
      ))}
    </div>
  )
}

export default FGtabs

import { TrendingDown, Clock, Zap, CheckCircle, AlertTriangle } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const MetricCard = ({ icon: Icon, title, subtitle, value, bgColor, iconColor, boxShadow, path, isActive }) => {
  return (
    <Link to={path} className="block">
      <div
        className={`bg-white rounded-xl p-3 transition-all duration-300 `}
        style={{
          boxShadow: isActive
            ? `${boxShadow}, 5px 5px 0 0px #babbbd` // ring-blue-600
            : boxShadow
        }}
      >
        <div className="flex items-start justify-between ">
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-2">
              <div className={`p-2 rounded-lg ${bgColor}`}>
                <Icon className={`w-4 h-4 2xl-plus:w-5 2xl-plus:h-5 ${iconColor}`} />
              </div>
              <div>
               <h3 className={`font-medium text-gray-900 ${title === "Total Production Order" ? 'text-xs 2xl-plus:text-base' : 'text-sm 2xl-plus:text-base'}`}>
                {title}
              </h3>

                <p className="text-xs 2xl-plus:text-sm text-gray-500">{subtitle}</p>
                <p className="text-2xl 2xl-plus:text-3xl font-bold text-blue-600">{value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

const ProductionMetrics = () => {
  const location = useLocation()

  const metrics = [
    {
      icon: TrendingDown,
      title: "Total Production Order",
      subtitle: "All orders in system",
      value: "234",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      boxShadow: '0px 2px 10px 0px #6366F11F, 0px 20px 40px 0px #6366F126',
      path: "/store/total/production_orders"
    },
    {
      icon: Clock,
      title: "Pending Qty",
      subtitle: "Pending completion",
      value: "78",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      boxShadow: '0px 2px 10px 0px #EF44441F, 0px 20px 40px 0px #EF444426',
      path:  "/store/pending/production_orders"
    },
    {
      icon: Zap,
      title: "Initial Kitting",
      subtitle: "In progress",
      value: "0",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      boxShadow:"0px 2px 10px 0px #F59E0B1F, 0px 20px 40px 0px #F59E0B26",
      path: "/store/initial-kitting"
    },
    {
      icon: CheckCircle,
      title: "Kitting Complete",
      subtitle: "Completed kitting",
      value: "0",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      boxShadow:" 0px 2px 10px 0px #D000FF1F ,0px 20px 40px 0px #D000FF26",
      path: "/store/kitting-complete"
    },
    {
      icon: AlertTriangle,
      title: "BOM Out",
      subtitle: "Material issued",
      value: "0",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
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

export default ProductionMetrics

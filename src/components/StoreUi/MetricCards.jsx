import { TrendingDown, Clock, Zap, CheckCircle, AlertTriangle } from "lucide-react"

const MetricCard = ({ icon: Icon, title, subtitle, value, bgColor, iconColor,boxShadow }) => {
  return (
    <div className="bg-white rounded-xl p-3 "
    style={{
    boxShadow:boxShadow
  }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-2">
            <div className={`p-2 rounded-lg ${bgColor}`}>
              <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${iconColor}`} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 text-sm sm:text-base">{title}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{subtitle}</p>
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">{value}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProductionMetrics = () => {
  const metrics = [
    {
      icon: TrendingDown,
      title: "Total Production Order",
      subtitle: "All orders in system",
      value: "234",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      boxShadow:'0px 2px 10px 0px #6366F11F, 0px 20px 40px 0px #6366F126'
    },
    {
      icon: Clock,
      title: "Pending Qty",
      subtitle: "Pending completion",
      value: "78",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      boxShadow: '0px 2px 10px 0px #EF44441F, 0px 20px 40px 0px #EF444426'

    },
    {
      icon: Zap,
      title: "Initial Kitting",
      subtitle: "In progress",
      value: "0",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      boxShadow:"0px 2px 10px 0px #F59E0B1F, 0px 20px 40px 0px #F59E0B26"
    },
    {
      icon: CheckCircle,
      title: "Kitting Complete",
      subtitle: "Completed kitting",
      value: "0",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      boxShadow:" 0px 2px 10px 0px #D000FF1F ,0px 20px 40px 0px #D000FF26"
    },
    {
      icon: AlertTriangle,
      title: "BOM Out",
      subtitle: "Material issued",
      value: "0",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      boxShadow:" 0px 2px 10px 0px #6366F11F,0px 20px 40px 0px #3FDFFF33"
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 pb-7">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  )
}

export default ProductionMetrics

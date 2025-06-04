import { Link } from "react-router-dom"

const MetricCard = ({ icon: Icon, title, subtitle, value, bgColor, iconColor, boxShadow, path, isActive }) => {
  return (
    <Link to={path} className="block">
      <div
        className={`bg-white rounded-xl p-3 transition-all duration-300 min-h-20`}
        style={{
          boxShadow: isActive
            ? `${boxShadow}, 5px 5px 0 0px ${iconColor}` // ring-blue-600
            : boxShadow
        }}
      >
        <div className="flex items-start justify-between ">
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-2 ">
              <div 
              style={{
                color:iconColor
              }}
              className={`p-2 rounded-lg ${bgColor} `}>
                <Icon  className={`w-4 h-4 2xl-plus:w-5 2xl-plus:h-5 `} />
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


export default MetricCard
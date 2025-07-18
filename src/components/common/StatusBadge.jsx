import CriticalIcon from '../../assets/Commonicons/🛑.png'
import WarningIcon from '../../assets/Commonicons/⚠️.png'
import CheckIcon from '../../assets/Commonicons/✅.png'
import React from 'react'

const StatusBadge = ({ type }) => {
    let bgColor, textColor, text, iconUrl
  
    if (type === "overdue") {
      bgColor = "bg-red-100"
      textColor = "text-red-600"
      text = "Critical"
      iconUrl = CriticalIcon // replace with your actual image path
    } else if (type === "deadline") {
      bgColor = "bg-yellow-100"
      textColor = "text-yellow-600"
      text = "Warning"
      iconUrl = WarningIcon
    } else {
      bgColor = "bg-green-100"
      textColor = "text-green-600"
      text = "On Track"
      iconUrl = CheckIcon
    } 
  
    return (
      <span className={`inline-flex items-center gap-2 md:gap-5 px-3 py-1 rounded-full ${bgColor} ${textColor}`}>
        <img src={iconUrl} alt={text} className="w-3 h-3 md:w-3 md:h-3" />
        <span className=' text-[8px] md:text-[10px] 2xl:text-sm font-normal'>{text}</span>
      </span>
    )
  }


export default React.memo(StatusBadge)
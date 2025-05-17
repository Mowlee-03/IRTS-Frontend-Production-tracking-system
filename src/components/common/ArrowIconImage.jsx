import ArrowRed from '../../assets/Commonicons/RedArrow.png'
import ArrowYellow from '../../assets/Commonicons/YellowArrow.png'
import ArrowGreen from '../../assets/Commonicons/GreenArrow.png'
import ArrowBlue from '../../assets/Commonicons/BlueIcon.png'
import React from 'react'

const ArrowIcon = ({ type }) => {
    let iconSrc
  
    if (type === "overdue") {
      iconSrc = ArrowRed
    } else if (type === "deadline") {
      iconSrc = ArrowYellow
    } else if(type ==="onschedule"){
      iconSrc = ArrowGreen
    }
    else{
      iconSrc=ArrowBlue
    }
  
    return (
      <img
        src={iconSrc}
        alt="Arrow Icon"
        className="w-5 h-5 ml-1"
      />
    )
  }
  
export default React.memo(ArrowIcon)
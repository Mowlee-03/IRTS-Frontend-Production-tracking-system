import React from 'react'
import DetailedProgressStepper from '../../components/productionUi/DetailedProgressStepper';

const ProgressView = () => {
  
const steps = [
  {
    title: "BOM Receiving",
    units: 28,
    status: {
      label: "Next Check: 11:15 AM",
      color: { bg: "#d4f5dd", text: "#2e7d32" },
    },
    progress: 100,
    progressColor: "#00c853",
    time: "08:00 - 10:30",
    initials: "AC",
    icon: null,
    details: {
      onTime: 26,
      delayed: 2,
      completion: 87,
      cycleTime: "2.5h",
      operatorInitials: "AC",
      operatorName: "Alex Chen",
      performance: "96%",
    },
  },
  {
    title: "Components Forming",
    units: 24,
    status: {
      label: "Next Check: 12:00 PM",
      color: { bg: "#fff3cd", text: "#856404" },
    },
    progress: 100,
    progressColor: "#00c853",
    time: "09:30 - 12:00",
    initials: "SL",
    icon: "/assets/components.png",
  },
  {
    title: "PCB Masking",
    units: 18,
    status: {
      label: "Next Check: 12:30 PM",
      color: { bg: "#f8d7da", text: "#721c24" },
    },
    progress: 60,
    progressColor: "#6200ea",
    time: "10:00 - 13:30",
    initials: "MW",
    icon: "/assets/pcb.png",
  },
  // Add more steps...
];
  return (
    <div className='h-full py-4'>
      <div className='h-full bg-white rounded-xl shadow-bg-shadow-2'>
        <DetailedProgressStepper steps={steps} />
      </div>
    </div>
  )
}

export default ProgressView
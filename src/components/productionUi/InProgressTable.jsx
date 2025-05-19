import React from 'react'
import ProgressTable from './ProgressTable'
  const mockData = {
    totalOrders: {
      label: "Total Orders",
      color: "blue",
      type: "total",
      values: [28, 11, 8, 10, 1],
      className: "text-blue-600",
    },
    overdue: {
      label: "Overdue",
      color: "red",
      type: "overdue",
      values: [3, 1, 2, 0, 0],
      className: "text-red-500",
    },
    nearDeadline: {
      label: "Near Deadline",
      color: "orange",
      type: "deadline",
      values: [8, 0, 2, 5, 1],
      className: "text-amber-500",
    },
    onSchedule: {
      label: "On Schedule",
      color: "green",
      type: "onschedule",
      values: [17, 10, 3, 4, 0],
      className: "text-green-500",
    },
  }

  const lines = ["Total Orders", "Line 1", "Line 2", "Line 3", "Line 4"]
const InProgressTable = () => {
  return (
     <ProgressTable lines={lines} mockData={mockData} />
  )
}

export default InProgressTable
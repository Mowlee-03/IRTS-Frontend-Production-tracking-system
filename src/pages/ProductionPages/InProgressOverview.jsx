import React from 'react'
import AssemblyLineCard from '../../components/productionUi/AssemblyLineCard'

const InProgressOverview = () => {

  const LineDetails=[
    {
      lineName:"Assembly Line 1",
      workers:28,
      batchId:"B-2023-89",
      progress:48,
      orders:89,
      output:30,
      nextMaintenance:"5d"
    },
    {
      lineName:"Assembly Line 2",
      workers:28,
      batchId:"B-2023-89",
      progress:78,
      orders:89,
      output:30,
      nextMaintenance:"5d"
    },
    {
      lineName:"Assembly Line 3",
      workers:28,
      batchId:"B-2023-89",
      progress:88,
      orders:89,
      output:30,
      nextMaintenance:"5d"
    },
    {
      lineName:"Assembly Line 4",
      workers:28,
      batchId:"B-2023-89",
      progress:98,
      orders:89,
      output:30,
      nextMaintenance:"5d"
    },
  ]
  return (
    <div className='h-full py-4'>
        <div className=' bg-white shadow-bg-shadow-1  rounded-xl flex flex-col pb-3'>
            <h2 className=' pl-4 font-medium text-xl py-3'>Line performance:</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4'>
                {LineDetails.map((details, index) => (
                  <AssemblyLineCard key={index} details={details} />
                ))}
            </div>
        
        </div>
    </div>
  )
}

export default InProgressOverview
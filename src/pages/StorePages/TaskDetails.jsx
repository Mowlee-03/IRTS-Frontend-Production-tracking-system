import { LinearProgress } from '@mui/material'
import { Circle, Edit2 } from 'lucide-react'
import React from 'react'

const TaskDetails = () => {
  return (
    <div className='flex flex-col gap-2 bg-white h-full rounded-xl shadow-bg-shadow-2 '>
        <p className='px-3 py-2 text-lg font-medium'>Assigned Task Details</p>
        <div className='grow flex flex-col gap-4'>
            <div className=' flex items-center justify-between p-3 border'>
                <p className='pl-1 font-medium text-base'>Kitting Completed</p>

                <div className='flex items-center justify-center gap-3 '>
                    <button 
                    className='min-w-28 bg-[#4318D1] text-sm text-white p-2 rounded-md'
                    >
                    Start Task
                    </button>

                    <button className='p-2 bg-[#FDF2F8] rounded-md'>
                        <Edit2 size={20}/>
                    </button>
                </div>
            </div>
           
           <div className="py-5 mx-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                <Circle className="text-yellow-500" size={16} fill="currentColor" />
                <span>In Progress • Due: 28/04/2025</span>
                </div>
                <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded">High</span>
            </div>

            {/* Info Section */}
            <div className="mx-3  grid grid-cols-2 gap-8 text-sm text-gray-700">
                <div className='bg-gray-100 rounded-md p-3'>
                <p className="font-medium text-gray-500">PO Number</p>
                <p>4700064991</p>
                </div>
                <div className='bg-gray-100 rounded-md p-3'>
                <p className="font-medium text-gray-500">SO Number</p>
                <p>SO/0001/25-26</p>
                </div>
                <div className="col-span-2 bg-gray-100 rounded-md p-3">
                <p className="font-medium text-gray-500">Item Name</p>
                <p>558510111-A1 CONTROL BOARD-RB100</p>
                </div>
                <div className='bg-gray-100 rounded-md p-3'>
                <p className="font-medium text-gray-500">Order Qty</p>
                <p>50</p>
                </div>
                <div className='bg-gray-100 rounded-md p-3'>
                <p className="font-medium text-gray-500">Pending Qty</p>
                <p>0</p>
                </div>
            </div>

            {/* BOM Progress */}
            <div className="mx-3 flex flex-col gap-5">
                <p className="text-sm text-gray-500">BOM Progress</p>
               <div >
                <LinearProgress 
                variant='determinate' value={65}
                sx={{
                     height:'10px',
                     borderRadius:2,
                     '& .MuiLinearProgress-bar': {
                       background: "orange"
                     },
                     backgroundColor:"#F1F5F9"
                 }}
                    
                     />
                <p className="text-right  text-sm font-medium text-gray-700">65%</p>
               </div>
            </div>

            {/* Users */}
            <div className="mx-3 flex justify-between border-t pt-3">
                <div className="flex items-center gap-2">
                <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-700">SM</div>
                <div className="text-xs">
                    <p className="font-medium">James Chen</p>
                    <p className="text-gray-500">Field Worker</p>
                </div>
                </div>
                <div className="flex items-center gap-2">
                <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-700">JC</div>
                <div className="text-xs">
                    <p className="font-medium">Sarah Miller</p>
                    <p className="text-gray-500">Assigned • task.assignedBy.lastSeen</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskDetails
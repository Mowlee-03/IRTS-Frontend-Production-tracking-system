import React from 'react'

const TaskDetails = () => {
  return (
    <div className='flex flex-col gap-5 bg-white h-full rounded-xl shadow-bg-shadow-2 border'>
        <p className='px-3 py-2 text-lg font-medium'>Assigned Task Details</p>
        <div className='grow border-t-2'>
            <div className='bg-green-400 flex justify-between'>
                <p>Kitting Completed</p>

                <div >
                    <button 
                    className=' bg-[#4318D1] text-white p-2 rounded-lg'
                    >
                        Start Task
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskDetails
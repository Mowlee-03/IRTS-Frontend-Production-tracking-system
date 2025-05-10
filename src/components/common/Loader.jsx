import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-t-rose-500 border-r-emerald-500 border-b-amber-500 border-l-violet-500 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800">
            Loading
          </div>
        </div>
      </div>
  )
}

export default Loader
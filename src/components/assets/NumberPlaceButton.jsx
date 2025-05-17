import React from 'react';

const NumberPlaceButton = ({icon,value=9}) => {
  return (
    <button className=" relative border border-gray-400 w-8 h-8 p-1 rounded-full flex justify-center items-center shadow-lg hover:bg-gray-50 transition-all duration-300 ease-out group z-50 hover:scale-105 active:scale-95">
      <div className="absolute -right-4 -top-4 z-10">
        <div className="flex h-7 w-7 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-[8px] text-white">
            {value}+
          </span>
        </div>
      </div>
      {icon}
      <span className="absolute inset-0 rounded-full border-4 border-white/30 scale-50 animate-pulse" />
      {/* <div className="absolute right-full mr-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        <div className="bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg">
          Do you need help?
        </div>
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800" />
      </div> */}
    </button>
  );
}

export default NumberPlaceButton;

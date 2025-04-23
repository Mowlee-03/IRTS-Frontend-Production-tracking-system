import { 
  Menu,
  Check

 } from "lucide-react";
import React from "react";
import ErrorIcon from '@mui/icons-material/Error';
const ProductionStatusCards = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-14 mb-3 lg:px-5">

        <div 
        style={{ boxShadow: '0px 8px 24px 0px #4318D140' }}
        className="h-40 bg-blue-purple-gradient rounded-3xl shadow-lg pt-4 ps-4  text-white relative">
          <div className="flex  justify-start gap-4 items-center mb-2">
            <span className="bg-[#FFFFFF33] rounded-2xl p-3">
              <Menu className="block sm:hidden" size={20} />
              <Menu className="hidden sm:block lg:hidden" size={24} />
              <Menu className="hidden lg:block" size={30} />
            </span>
            <h3 className="text-base  md:text-[20px] font-normal ">Total Production Orders</h3>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-start ml-20">200</div>
          <div
          className="bg-[#FFFFFF1A] absolute top-0 right-0 w-[150px] h-[150px] rounded-3xl"
          ></div>
        </div>

        <div 
        style={{ boxShadow: '0px 8px 24px 0px #4318D140' }}
        className="h-40 bg-green-lightgreen-gradient rounded-3xl shadow-lg pt-4 ps-4 text-white relative">
          <div className="flex  justify-start gap-4 items-center mb-2">
            <span className="bg-[#FFFFFF33] rounded-2xl p-3">
              <Check className="block sm:hidden" size={20}/>
              <Check className="hidden sm:block lg:hidden" size={24}/>
              <Check className="hidden lg:block" size={30}/>
            </span>
            <h3 className="text-base md:text-[23px] font-normal">Delivered Orders</h3>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-start ml-20">150</div>
          <div
          className="bg-[#FFFFFF1A] absolute -top-4 -right-4 w-[70px] h-[70px] rounded-3xl "
          ></div>
          <div
          className="bg-[#FFFFFF1A] absolute bottom-0 left-0 w-[78px] h-[52px] rounded-2xl "
          ></div>
        </div>

        <div 
        style={{ boxShadow: '0px 8px 24px 0px #4318D140' }}
        className="h-40 bg-red-lightred-gradient rounded-3xl shadow-lg pt-4 ps-4 text-white relative sm:col-span-2 lg:col-span-1">
          <div className="flex justify-start gap-4 items-center mb-2">
            <span className="bg-[#FFFFFF33] rounded-2xl p-3">
              <ErrorIcon
                sx={{
                  fontSize: {
                    xs: 20, // extra-small devices
                    sm: 24, // small devices (≥600px)
                    lg: 30  // medium and up (≥900px)
                  }
                }}
              />
            </span>
            <h3 className="text-base md:text-[23px] font-normal">Pending Orders</h3>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-start ml-20">50</div>
          <div
          className="bg-[#FFFFFF1A] absolute top-0 left-0 w-[150px] h-[150px] rounded-3xl"
          ></div>
        </div>
        
        {/* <div className="bg-success rounded-lg shadow-lg p-4 md:p-6 text-white">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-base md:text-lg font-medium">Delivered Orders</h3>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-center">150</div>
        </div>
        
        <div className="bg-danger rounded-lg shadow-lg p-4 md:p-6 text-white sm:col-span-2 lg:col-span-1">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-base md:text-lg font-medium">Pending Orders</h3>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-center">50</div>
        </div> */}
      </div>
    );
  };
  
  export default ProductionStatusCards;
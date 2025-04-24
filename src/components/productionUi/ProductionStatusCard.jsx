import { 
  Menu,
  Check

 } from "lucide-react";
import React from "react";
import ErrorIcon from '@mui/icons-material/Error';
const ProductionStatusCards = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-14 xl:mb-1 2xl:mb-3 px-10 pt-2 xl:px-14 xl:pt-2 2xl:px-20 2xl:pt-4">

        <div 
        style={{ boxShadow: '0px 8px 24px 0px #4318D140' }}
        className="h-24 xl:h-28 2xl:h-32 bg-blue-purple-gradient rounded-xl xl:rounded-3xl shadow-lg pt-4 ps-4  text-white relative">
          <div className="flex  justify-start gap-2 2xl:gap-4 items-center mb-2">
            <span className="bg-[#FFFFFF33] rounded-md xl:rounded-2xl p-2 xl:p-3">
              <Menu className="block lg:hidden" size={18} />
              <Menu className="hidden lg:block xl:hidden" size={15} />
              <Menu className="hidden xl:block 2xl:hidden" size={18} />
              <Menu className="hidden 2xl:block" size={27} />
            </span>
            <h3 className="text-[12px] xl:text-[14px] 2xl:text-[18px] font-medium ">Total Production Orders</h3>
          </div>
          <div className="xl:text-2xl 2xl:text-3xl font-bold text-start ml-11 xl:ml-20">200</div>
          <div
          className="bg-[#FFFFFF1A] absolute top-0 right-0 xl:w-[90px] xl:h-[90px] 2xl:w-[100px] 2xl:h-[100px] rounded-3xl"
          ></div>
        </div>

        <div 
        style={{ boxShadow: '0px 8px 24px 0px #4318D140' }}
        className="h-24 xl:h-28 2xl:h-32 bg-green-lightgreen-gradient rounded-xl xl:rounded-3xl shadow-lg pt-4 ps-4 text-white relative">
          <div className="flex  justify-start gap-2 2xl:gap-4 items-center mb-2">
            <span className="bg-[#FFFFFF33] rounded-md xl:rounded-2xl p-2 xl:p-3">
              <Check className="block lg:hidden" size={18}/>
              <Check className="hidden lg:block xl:hidden" size={15}/>
              <Check className="hidden xl:block 2xl:hidden" size={18}/>
              <Check className="hidden 2xl:block" size={27}/>
            </span>
            <h3 className="text-[12px] xl:text-[14px] 2xl:text-[18px] font-medium">Delivered Orders</h3>
          </div>
          <div className="xl:text-2xl 2xl:text-3xl font-bold text-start  ml-11 xl:ml-20">150</div>
          <div
          className="bg-[#FFFFFF1A] absolute -top-4 -right-4 w-[60px] h-[60px] 2xl:w-[60px] 2xl:h-[60px] rounded-3xl "
          ></div>
          <div
          className="bg-[#FFFFFF1A] absolute bottom-0 left-0 w-[68px] h-[42px] 2xl:w-[68px] 2xl:h-[42px] rounded-2xl "
          ></div>
        </div>

        <div 
        style={{ boxShadow: '0px 8px 24px 0px #4318D140' }}
        className="h-24 xl:h-28 2xl:h-32 bg-red-lightred-gradient rounded-xl xl:rounded-3xl shadow-lg pt-4 ps-4 text-white relative sm:col-span-2 lg:col-span-1">
          <div className="flex justify-start gap-2 2xl:gap-4 items-center xl:mb-1 2xl:mb-2">
            <span className="bg-[#FFFFFF33] rounded-md xl:rounded-2xl p-2 xl:p-3">
              <ErrorIcon
                sx={{
                  fontSize: {
                    sm: 18,
                    md:16,
                    lg:20, // small devices (≥600px)
                    xl: 27,
                    
                  }
                }}
              />
            </span>
            <h3 className="text-[12px] xl:text-[14px] 2xl:text-[18px] font-medium">Pending Orders</h3>
          </div>
          <div className="xl:text-2xl 2xl:text-3xl font-bold text-start ml-11 xl:ml-20">50</div>
          <div
          className="bg-[#FFFFFF1A] absolute top-0 left-0 xl:w-[90px] xl:h-[90px] 2xl:w-[100px] h-[100px] rounded-3xl"
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
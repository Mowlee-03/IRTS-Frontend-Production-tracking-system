"use client"

import React, { useState } from "react"
import { X, Plus, Upload, LightbulbIcon ,RefreshCcw, } from "lucide-react"
import ReplyIcon from '@mui/icons-material/Reply';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Tooltip } from "@mui/material";
import FileUpload from "../common/ExcelFIleUpload";
import { useProductionDialog } from "../../context/ProductionDialogContext";
const AddOrderPanel = ({ isOpen, onClose}) => {
  const {entryMethod, setEntryMethod,showFileUpload, setShowFileUpload,closeDialog}=useProductionDialog()
  const [showTip,hideTip]=useState(true)
  if (!isOpen) return null
  const templateData=[
    {
      orderType:"",
      rawMaterialWarehouse:"",
      finishedGoodWarehouse:"",
      deliveryDate: '',
      poNumber: '',
      poDate: '',
      soNumber: '',
      proNumber: '',
      customer: '',
      itemName: '',
      orderQty: '',
      value: '',
      total: '',
    }
  ]
  return (

      <div className="w-full h-full p-6 bg-[#ffffff52]">
        {/* Header */}
        <div className="flex justify-between items-center pb-2">
          <div className="flex items-center gap-2">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">Select Entry Method</h2>
            <Tooltip 
            componentsProps={{
              tooltip: {
                sx: {
                  maxWidth: '200px', // or use width: '200px' if you want fixed width
                  fontSize: '12px',
                  backgroundColor: '#1E293B',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '8px',
                },
              },
            }}
            title="Choose your preferred method for order processing" arrow placement="right">
              <HelpOutlineOutlinedIcon />
            </Tooltip>
          </div>

          <div className="flex items-center gap-2">
            {/* <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span className="text-xs lg:text-sm text-gray-600">System Online</span>
            </div> */}
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="block lg:hidden" size={18} />
              <X className="hidden lg:block" size={20} />
            </button>
          </div>
        </div>

        <div >
          <p className="text-sm lg:text-base text-gray-500">Select your preferred entry method below</p>
        </div>

        {/* Entry Method Toggle */}
        <div className="py-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              className={`py-3 px-4 text-lg font-medium rounded-lg border text-center ${
                entryMethod === "manual"
                  ? "bg-white border-[#8B5CF6] text-gray-800"
                  : "bg-gray-50 border-gray-200 text-gray-500"
              }`}
              onClick={() => setEntryMethod("manual")}
            >
              Manual Entry
            </button>
            <button
              className={`py-3 px-4 text-lg font-medium rounded-lg border text-center ${
                entryMethod === "growsmart"
                  ? "bg-white border-[#8B5CF6] text-gray-800"
                  : "bg-gray-50 border-gray-200 text-gray-500"
              }`}
              onClick={() => setEntryMethod("growsmart")}
            >
              GrowSmart Entry
            </button>
          </div>
        </div>
        
        {
          entryMethod==='manual' && (
            <>
              {/* Manual Order Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3">
                {/* Single Order Card */}
                <div 
                onClick={()=>setShowFileUpload(false)}
                className="border cursor-pointer border-gray-200 hover:border-[#8B5CF6] rounded-lg p-4 lg:p-6 relative group overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-background-1 p-3 rounded-lg">
                      <Plus size={20} className="text-gray-600 block lg:hidden" />
                      <Plus size={30} className="text-gray-600 hidden lg:block" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-base lg:text-lg text-gray-800">Single Order</h3>
                      <p className="text-sm lg:text-base text-gray-500 mt-1">Create one order at a time with basic details</p>

                      <div className="flex mt-4 space-x-2">
                        <p
                          className={`px-3 py-1 text-xs rounded-lg ${
                          "bg-gray-100 text-gray-700" 
                          }`}
                        >
                          Quick Form
                        </p>
                        <p
                          className={`px-3 py-1 text-xs rounded-lg ${
                          "bg-gray-100 text-gray-700"
                          }`}
                        >
                          Basic Fields
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-3/4 w-1/5 absolute top-0 right-0 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-60 -translate-y-60 transition-transform duration-500">
                    <div className="h-full w-full pl-6 pb-7 flex items-center justify-center bg-blue-700 text-white shadow-bg-shadow-3 rounded-bl-[8rem]">
                      <ReplyIcon sx={{
                        fontSize: { lg: 70 },
                        transform: 'scaleX(-1)',
                      }} />
                    </div>
                  </div>

                </div>

                {/* Bulk Upload Card */}
                <div
                  className={`border cursor-pointer
                      ${showFileUpload?'border-[#8B5CF6]':'border-gray-200'}
                      hover:border-[#8B5CF6] rounded-lg p-4 lg:p-6 relative group overflow-hidden`}
                  onClick={() => setShowFileUpload(true)}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-background-1 p-3 rounded-lg">
                      <Upload size={20} className="text-gray-600 block lg:hidden" />
                      <Upload size={30} className="text-gray-600 hidden lg:block" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-base lg:text-lg text-gray-800">Bulk Upload</h3>
                      <p className="text-sm lg:text-base text-gray-500 mt-1">Upload multiple orders via Excel sheet</p>

                      <div className="flex mt-4 space-x-2">
                        <button className="px-3 py-1 text-xs rounded-lg bg-gray-100 text-gray-700">Bulk Upload</button>
                        <button className="px-3 py-1 text-xs rounded-lg bg-gray-100 text-gray-700">CSV/Excel</button>
                      </div>
                    </div>
                  </div>
                  <div className="h-3/4 w-1/5 absolute top-0 right-0 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-60 -translate-y-60 transition-transform duration-500">
                    <div className="h-full w-full pl-6 pb-7 flex items-center justify-center bg-blue-700 text-white shadow-bg-shadow-3 rounded-bl-[8rem]">
                      <ReplyIcon sx={{
                        fontSize: { lg: 70 },
                        transform: 'scaleX(-1)',
                      }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* File Upload Area */}
              <FileUpload 
              showFileUpload={showFileUpload} 
              exportname={"Order Template"} 
              templateData={templateData}
              navigateTo={"/production/new_orders/via_excel"}
              closeDialog={closeDialog}
              />
            </>
          )
        }
        

        {
          entryMethod==="growsmart" && (
            <>
               {/* Growsmart Order Options */}
               <div className="grid grid-cols-1 gap-4 py-3">
                {/* Sync Order Card */}
                <div 
                onClick={()=>setShowFileUpload(false)}
                className="border cursor-pointer border-gray-200 hover:border-[#8B5CF6] rounded-lg p-4 lg:p-6 relative group overflow-hidden">
                  <div className="flex flex-col items-center  gap-4">
                    <div className="bg-gray-background-1 p-3 rounded-lg">
                      <RefreshCcw size={20} className="text-gray-600 block lg:hidden" />
                      <RefreshCcw size={30} className="text-gray-600 hidden lg:block" />
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <h3 className="font-medium text-base lg:text-lg text-gray-800">Sync with GrowSmart</h3>
                      <p className="text-sm lg:text-base text-gray-500 text-center mt-1">Automatically import and sync orders from GrowSmart.
                      Ideal for bulk processing.</p>

                      <div className="flex mt-4 space-x-2">
                        <p
                          className={`px-3 py-1 text-xs rounded-lg ${
                          "bg-gray-100 text-gray-700" 
                          }`}
                        >
                          Advanced
                        </p>
                        <p
                          className={`px-3 py-1 text-xs rounded-lg ${
                          "bg-gray-100 text-gray-700"
                          }`}
                        >
                          Customizable
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-3/4 w-1/5 absolute top-0 right-0 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-60 -translate-y-60 transition-transform duration-500">
                    <div className="h-full w-full pl-6 pb-7 flex items-center justify-center bg-blue-700 text-white shadow-bg-shadow-3 rounded-bl-[8rem]">
                      <ReplyIcon sx={{
                        fontSize: { lg: 70 },
                        transform: 'scaleX(-1)',
                      }} />
                    </div>
                  </div>
                </div>

                {/* additional Card */}
                {/* <div
                  className={`border cursor-pointer
                      ${showFileUpload?'border-[#8B5CF6]':'border-gray-200'}
                      hover:border-[#8B5CF6] rounded-lg p-4 lg:p-6 relative group`}
                  onClick={() => setShowFileUpload(true)}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-background-1 p-3 rounded-lg">
                      <Upload size={20} className="text-gray-600 block lg:hidden" />
                      <Upload size={30} className="text-gray-600 hidden lg:block" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-base lg:text-lg text-gray-800">API Integration</h3>
                      <p className="text-sm lg:text-base text-gray-500 mt-1">Connect via API endpoints</p>

                      <div className="flex mt-8 space-x-2">
                        <button className="px-3 py-1 text-xs rounded-lg bg-gray-100 text-gray-700">Automated</button>
                        <button className="px-3 py-1 text-xs rounded-lg bg-gray-100 text-gray-700">Real-time</button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-3 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={18} />
                  </div>
                </div> */}
              </div>
            </>
          )
        }
        

        {/* Pro Tip */}
        {showTip && (
          <div className=" bg-gray-50 border border-gray-100 rounded-lg p-4 mt-3 relative">
            <div className="flex flex-col gap-3 ">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex gap-2">
                    <LightbulbIcon size={18} />
                    <span className="text-sm font-medium text-indigo-500">Pro Tip</span>
                  </div>
                  <button 
                  onClick={()=>hideTip(false)}
                  className="text-gray-400 hover:text-gray-600">
                    <X size={18} />
                  </button>
                </div>
                <p className="text-xs lg:text-sm text-gray-600">
                  Choose the method that best suits your needs. Quick Entry is perfect for simple orders, while Advanced
                  Options provide more control and customization.
                </p>
  
            </div>
          </div>
        )}
       
      </div>

  )
}

export default React.memo(AddOrderPanel)



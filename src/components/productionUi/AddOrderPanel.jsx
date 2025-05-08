"use client"

import React, { useState } from "react"
import { X, Plus, Upload, ArrowRight, LightbulbIcon } from "lucide-react"

const AddOrderPanel = ({ isOpen, onClose }) => {
  const [entryMethod, setEntryMethod] = useState("manual")
  const [showFileUpload, setShowFileUpload] = useState(false)

  if (!isOpen) return null

  return (

      <div className="bg-white rounded-lg shadow-lg w-full h-full ">
        {/* Header */}
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-gray-800">Select Entry Method</h2>
            <button className="text-gray-400 hover:text-gray-500">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="7.5" stroke="#D1D5DB" />
                <text x="8" y="11" textAnchor="middle" fontSize="10" fill="#6B7280">
                  ?
                </text>
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span className="text-xs text-gray-600">System Online</span>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="">
          <p className="text-sm text-gray-500">Select your preferred entry method below</p>
        </div>

        {/* Entry Method Toggle */}
        <div className="">
          <div className="grid grid-cols-2 gap-2">
            <button
              className={`py-2.5 px-4 rounded-lg border text-center ${
                entryMethod === "manual"
                  ? "bg-white border-[#8B5CF6] text-gray-800"
                  : "bg-gray-50 border-gray-200 text-gray-500"
              }`}
              onClick={() => setEntryMethod("manual")}
            >
              Manual Entry
            </button>
            <button
              className={`py-2.5 px-4 rounded-lg border text-center ${
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

        {/* Order Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Single Order Card */}
          <div 
          onClick={()=>setShowFileUpload(false)}
          className="border cursor-pointer border-gray-200 hover:border-[#8B5CF6] rounded-lg p-4 relative group">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded">
                <Plus size={20} className="text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">Single Order</h3>
                <p className="text-sm text-gray-500 mt-1">Create one order at a time with basic details</p>

                <div className="flex mt-4 space-x-2">
                  <p
                    className={`px-3 py-1 text-xs rounded ${
                    "bg-gray-100 text-gray-700" 
                    }`}
                  >
                    Quick Form
                  </p>
                  <p
                    className={`px-3 py-1 text-xs rounded ${
                    "bg-gray-100 text-gray-700"
                    }`}
                  >
                    Basic Fields
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-3 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight size={18} />
            </div>
          </div>

          {/* Bulk Upload Card */}
          <div
            className={`border cursor-pointer
                ${showFileUpload?'border-[#8B5CF6]':'border-gray-200'}
                 hover:border-[#8B5CF6] rounded-lg p-4 relative group`}
            onClick={() => setShowFileUpload(true)}
          >
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded">
                <Upload size={20} className="text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">Bulk Upload</h3>
                <p className="text-sm text-gray-500 mt-1">Upload multiple orders via Excel sheet</p>

                <div className="flex mt-4 space-x-2">
                  <button className="px-3 py-1 text-xs rounded bg-gray-100 text-gray-700">Bulk Upload</button>
                  <button className="px-3 py-1 text-xs rounded text-gray-500">CSV/Excel</button>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-3 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight size={18} />
            </div>
          </div>
        </div>

        {/* File Upload Area */}
        {showFileUpload && (
          <div className="px-6 py-3">
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-medium text-gray-800 mb-2">Upload Excel File</h3>
              <p className="text-sm text-gray-500 mb-4">Drag and drop your Excel file here or browse</p>

              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded text-sm">
                Choose File
              </button>

              <p className="text-xs text-gray-400 mt-4">
                Supported formats: .xlsx, .xls, .csv
                <br />
                Maximum file size: 10MB
              </p>
            </div>
          </div>
        )}

        {/* Pro Tip */}
        <div className=" bg-gray-50 border border-gray-100 rounded-lg p-4 relative">
          <div className="flex gap-3">
            <div className="text-indigo-500">
              <LightbulbIcon size={18} />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-indigo-500">Pro Tip</span>
                <button className="text-gray-400 hover:text-gray-600">
                  <X size={16} />
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Choose the method that best suits your needs. Quick Entry is perfect for simple orders, while Advanced
                Options provide more control and customization.
              </p>
            </div>
          </div>
        </div>
      </div>

  )
}

export default React.memo(AddOrderPanel)
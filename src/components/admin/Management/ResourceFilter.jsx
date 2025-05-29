"use client"

import { motion } from "framer-motion"
import { Search, Filter, Plus } from "lucide-react"

export default function ResourceFilter({
  modules,
  selectedModuleFilter,
  searchTerm,
  onSearchChange,
  resultCount,
  CreateNewResource
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between  px-3 py-2 rounded-xl shadow-sm border bg-white border-gray-200">
           <h2 className="text-xl font-semibold text-gray-900">
              Resources
              {selectedModuleFilter !== "all" && (
                <span className="text-blue-600 ml-2">
                  - {modules.find((m) => m.id === selectedModuleFilter)?.name}
                </span>
              )}
            </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={CreateNewResource}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add Resource</span>
          </motion.button>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
               
              </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{resultCount} resources</span>
          </div>
        </div>
      </div>
    </div>

  )
}

"use client"

import { motion } from "framer-motion"
import { Search, Filter } from "lucide-react"

export default function ResourceFilter({
  modules,
  searchTerm,
  onSearchChange,
  selectedModule,
  onModuleChange,
  resultCount,
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
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
          <select
            value={selectedModule}
            onChange={(e) => onModuleChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Modules</option>
            {modules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-600">{resultCount} resources</span>
        </div>
      </div>
    </div>
  )
}

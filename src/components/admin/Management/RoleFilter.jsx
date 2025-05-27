
// components/RoleFilter.jsx
"use client"

import { motion } from "framer-motion"
import { Search, Filter, Grid3X3, List, SortAsc, SortDesc } from "lucide-react"

export default function RoleFilter({
  modules,
  searchTerm,
  onSearchChange,
  selectedModule,
  onModuleChange,
  sortBy,
  onSortByChange,
  sortOrder,
  onSortOrderChange,
  viewMode,
  onViewModeChange,
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
              placeholder="Search roles..."
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
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortByChange(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Name</option>
              <option value="module">Module</option>
              <option value="users">Users</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              {sortOrder === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
            </motion.button>
          </div>
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onViewModeChange("grid")}
              className={`p-2 rounded ${viewMode === "grid" ? "bg-blue-100 text-blue-600" : "text-gray-400"}`}
            >
              <Grid3X3 className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onViewModeChange("list")}
              className={`p-2 rounded ${viewMode === "list" ? "bg-blue-100 text-blue-600" : "text-gray-400"}`}
            >
              <List className="h-4 w-4" />
            </motion.button>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{resultCount} roles</span>
          </div>
        </div>
      </div>
    </div>
  )
}

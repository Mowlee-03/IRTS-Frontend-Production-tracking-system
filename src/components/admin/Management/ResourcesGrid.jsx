"use client"

import { motion } from "framer-motion"
import { FileText, Edit3, Trash2 } from "lucide-react"

export default function ResourceGrid({ resources, onEdit, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource, index) => (
        <motion.div
          key={resource.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 ${resource.moduleColor} rounded-lg flex items-center justify-center`}
              >
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{resource.name}</h3>
                <span className={`px-2 py-1 text-xs rounded-full text-white ${resource.moduleColor}`}>
                  {resource.moduleName}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onEdit(resource)}
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Edit3 className="h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onDelete(resource.id, resource.moduleId)}
                className="p-2 text-gray-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </motion.button>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Actions:</span>
              <span className="font-medium">{resource.actions.length}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {resource.actions.map((action) => (
                <span key={action} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                  {action}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

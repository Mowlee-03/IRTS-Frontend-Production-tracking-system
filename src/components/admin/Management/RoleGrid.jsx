// components/RoleGrid.jsx
"use client"

import { motion } from "framer-motion"
import { Shield, Edit3, Trash2 } from "lucide-react"

export default function RoleGrid({ roles, modules, onEdit, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {roles.map((role, index) => (
        <motion.div
          key={role.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{role.name}</h3>
                <p className="text-sm text-gray-500">{role.userCount} users</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onEdit(role)}
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Edit3 className="h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onDelete(role.id)}
                className="p-2 text-gray-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </motion.button>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4">{role.description}</p>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Primary Module:</span>
              <span className="font-medium capitalize">
                {role.module === "all" ? "Cross-Module" : role.module}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Modules Access:</span>
              <span className="font-medium">{Object.keys(role.permissions).length}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {Object.keys(role.permissions).map((moduleId) => {
                const module = modules.find((m) => m.id === moduleId)
                return module ? (
                  <span
                    key={moduleId}
                    className={`px-2 py-1 text-xs rounded-full text-white ${module.color}`}
                  >
                    {module.name}
                  </span>
                ) : null
              })}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

"use client"

import { motion } from 'framer-motion'
import { Dialog } from '@mui/material'
import { Factory, Save, X } from 'lucide-react'
import React from 'react'

const ModuleModal = ({
  isOpen,
  setIsCreatingModule,
  moduleForm,
  setModuleForm,
  selectedModule,
  handleSaveModule,
  iconOptions,
  colorOptions
}) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsCreatingModule(false)} fullWidth maxWidth="md">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl w-full max-h-[90vh] overflow-hidden"
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">{selectedModule ? "Edit Module" : "Add New Module"}</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsCreatingModule(false)}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </motion.button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Module Name</label>
                <input
                  type="text"
                  value={moduleForm.name}
                  onChange={(e) => setModuleForm((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter module name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={moduleForm.description}
                  onChange={(e) => setModuleForm((prev) => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter module description"
                />
              </div>
            </div>

            {/* Icon Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Icon</label>
              <div className="grid grid-cols-4 gap-3">
                {iconOptions.map((iconOption) => (
                  <motion.button
                    key={iconOption.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setModuleForm((prev) => ({ ...prev, icon: iconOption.name }))}
                    className={`p-3 rounded-lg border-2 flex flex-col items-center space-y-2 transition-colors ${
                      moduleForm.icon === iconOption.name
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <iconOption.icon className="h-6 w-6 text-gray-600" />
                    <span className="text-xs text-gray-600">{iconOption.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
              <div className="grid grid-cols-5 gap-3">
                {colorOptions.map((color) => (
                  <motion.button
                    key={color}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setModuleForm((prev) => ({ ...prev, color }))}
                    className={`w-12 h-12 rounded-lg ${color} border-4 transition-all ${
                      moduleForm.color === color ? "border-gray-800 shadow-lg" : "border-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Preview */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preview</label>
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${moduleForm.color} rounded-lg flex items-center justify-center`}>
                    {(() => {
                      const SelectedIcon =
                        iconOptions.find((icon) => icon.name === moduleForm.icon)?.icon || Factory
                      return <SelectedIcon className="h-6 w-6 text-white" />
                    })()}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{moduleForm.name || "Module Name"}</h3>
                    <p className="text-sm text-gray-500">{moduleForm.description || "Module description"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end space-x-4 p-6 border-t bg-gray-50">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCreatingModule(false)}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSaveModule}
            disabled={!moduleForm.name.trim()}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
          >
            <Save className="h-4 w-4" />
            <span>{selectedModule ? "Update Module" : "Add Module"}</span>
          </motion.button>
        </div>
      </motion.div>
    </Dialog>
  )
}

export default ModuleModal

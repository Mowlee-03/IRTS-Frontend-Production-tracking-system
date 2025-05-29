import { motion } from 'framer-motion'
import { Edit3, Grid3X3, Plus, Trash2 } from 'lucide-react'
import React from 'react'

const ModuleDetails = ({
    modules,
    selectedModuleFilter,
    setSelectedModuleFilter,
    handleCreateNewModule,
    handleEditModule,
    handleDeleteModule,
}) => {
  return (
        <motion.div
              key="resources"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {/* Module Cards Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between  px-3 py-2 rounded-xl shadow-sm border bg-white border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Modules</h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCreateNewModule}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Module</span>
                  </motion.button>
                </div>

                {/* Module Filter Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {/* All Modules Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedModuleFilter("all")}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedModuleFilter === "all"
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center">
                        <Grid3X3 className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">All Modules</h3>
                        <p className="text-sm text-gray-500">
                          {modules.reduce((total, module) => total + module.resources.length, 0)} resources
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Individual Module Cards */}
                  {modules.map((module, index) => (
                    <motion.div
                      key={module.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedModuleFilter(module.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all relative group ${
                        selectedModuleFilter === module.id
                          ? "border-blue-500 bg-blue-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${module.color} rounded-lg flex items-center justify-center`}>
                          <module.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{module.name}</h3>
                          <p className="text-sm text-gray-500">{module.resources.length} resources</p>
                        </div>
                      </div>

                      {/* Module Actions */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center space-x-1">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleEditModule(module)
                            }}
                            className="p-1 text-gray-400 hover:text-blue-600 transition-colors bg-white rounded shadow-sm"
                          >
                            <Edit3 className="h-3 w-3" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDeleteModule(module.id)
                            }}
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors bg-white rounded shadow-sm"
                          >
                            <Trash2 className="h-3 w-3" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
        </motion.div>

  )
}

export default ModuleDetails
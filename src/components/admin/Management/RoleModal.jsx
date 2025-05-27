// components/RoleModal.jsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Save, ChevronDown, ChevronRight } from "lucide-react"

export default function RoleModal({
  isOpen,
  onClose,
  selectedRole,
  modules,
  setRoles,
}) {
  const [roleForm, setRoleForm] = useState({
    name: "",
    description: "",
    module: "all",
    permissions: {},
  })
  const [expandedModules, setExpandedModules] = useState({})

  useEffect(() => {
    if (selectedRole) {
      setRoleForm({
        name: selectedRole.name,
        description: selectedRole.description,
        module: selectedRole.module,
        permissions: selectedRole.permissions,
      })
    } else {
      setRoleForm({ name: "", description: "", module: "all", permissions: {} })
    }
  }, [selectedRole])

  const toggleModule = (moduleId) => {
    setExpandedModules((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }))
  }

  const handlePermissionChange = (moduleId, resourceId, action, checked) => {
    setRoleForm((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [moduleId]: {
          ...prev.permissions[moduleId],
          [resourceId]: checked
            ? [...(prev.permissions[moduleId]?.[resourceId] || []), action]
            : (prev.permissions[moduleId]?.[resourceId] || []).filter((a) => a !== action),
        },
      },
    }))
  }

  const handleSaveRole = () => {
    if (selectedRole) {
      setRoles((prev) =>
        prev.map((role) => (role.id === selectedRole.id ? { ...role, ...roleForm } : role))
      )
    } else {
      const newRole = {
        id: Date.now().toString(),
        ...roleForm,
        userCount: 0,
      }
      setRoles((prev) => [...prev, newRole])
    }
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold">{selectedRole ? "Edit Role" : "Create New Role"}</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role Name</label>
                    <input
                      type="text"
                      value={roleForm.name}
                      onChange={(e) => setRoleForm((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter role name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <input
                      type="text"
                      value={roleForm.description}
                      onChange={(e) => setRoleForm((prev) => ({ ...prev, description: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter role description"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Module</label>
                    <select
                      value={roleForm.module}
                      onChange={(e) => setRoleForm((prev) => ({ ...prev, module: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="all">Cross-Module</option>
                      {modules.map((module) => (
                        <option key={module.id} value={module.id}>
                          {module.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Permissions</h3>
                  <div className="space-y-4">
                    {modules.map((module) => (
                      <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <motion.button
                          whileHover={{ backgroundColor: "rgb(249, 250, 251)" }}
                          onClick={() => toggleModule(module.id)}
                          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <module.icon className="h-5 w-5 text-gray-600" />
                            <span className="font-medium text-gray-900">{module.name}</span>
                            <span className="text-sm text-gray-500">({module.resources.length} resources)</span>
                          </div>
                          {expandedModules[module.id] ? (
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          )}
                        </motion.button>

                        <AnimatePresence>
                          {expandedModules[module.id] && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 space-y-4">
                                {module.resources.map((resource) => (
                                  <div key={resource.id} className="bg-white p-4 rounded-lg border">
                                    <h4 className="font-medium text-gray-900 mb-1">{resource.name}</h4>
                                    <p className="text-sm text-gray-500 mb-3">{resource.description}</p>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                      {resource.actions.map((action) => {
                                        const isChecked =
                                          roleForm.permissions[module.id]?.[resource.id]?.includes(action) || false
                                        return (
                                          <motion.label
                                            key={action}
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-center space-x-2 cursor-pointer"
                                          >
                                            <input
                                              type="checkbox"
                                              checked={isChecked}
                                              onChange={(e) =>
                                                handlePermissionChange(
                                                  module.id,
                                                  resource.id,
                                                  action,
                                                  e.target.checked,
                                                )
                                              }
                                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <span className="text-sm text-gray-700 capitalize">{action}</span>
                                          </motion.label>
                                        )
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-4 p-6 border-t bg-gray-50">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSaveRole}
                disabled={!roleForm.name.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>{selectedRole ? "Update Role" : "Create Role"}</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

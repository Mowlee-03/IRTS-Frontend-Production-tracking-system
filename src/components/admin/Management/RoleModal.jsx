"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { X, Save } from "lucide-react"

export default function RoleModal({ selectedRole, modules, setRoles, onClose }) {
  const [roleForm, setRoleForm] = useState({
    name: "",
    description: "",
    module: "all",
    permissions: {},
  })

  const [activeTab, setActiveTab] = useState(modules[0]?.id || "")
  const [searchTerm, setSearchTerm] = useState("")

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

  const activeModule = modules.find((m) => m.id === activeTab)
  const filteredResources = activeModule?.resources.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || []

  return (
    <div className="bg-white rounded-xl shadow-xl w-full mx-auto  p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">{selectedRole ? "Edit Role" : "Create New Role"}</h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="p-2 text-white bg-red-700 rounded-xl"
        >
          <X className="h-5 w-5" />
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Role Name</label>
          <input
            type="text"
            value={roleForm.name}
            onChange={(e) => setRoleForm((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter role name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <input
            type="text"
            value={roleForm.description}
            onChange={(e) => setRoleForm((prev) => ({ ...prev, description: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter role description"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Primary Module</label>
          <select
            value={roleForm.module}
            onChange={(e) => setRoleForm((prev) => ({ ...prev, module: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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

      <div className="space-y-4">
        <div className="flex overflow-x-auto border-b">
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveTab(mod.id)}
              className={`px-4 py-2 whitespace-nowrap font-medium text-sm 2xl-plus:text-md ${
                activeTab === mod.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {mod.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:max-w-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="overflow-auto max-h-[50vh]">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="sticky top-0 bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b 2xl-plus:text-xl">Resource</th>
                <th className="px-4 py-2 border-b 2xl-plus:text-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredResources.map((resource) => (
                <tr key={resource.id} className="border-b">
                  <td className="px-4 py-4 font-medium 2xl-plus:text-md">{resource.name}</td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-4">
                      {resource.actions.map((action) => {
                        const isChecked =
                          roleForm.permissions[activeTab]?.[resource.id]?.includes(action) || false
                        return (
                          <label key={action} className="flex items-center space-x-1">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={(e) =>
                                handlePermissionChange(
                                  activeTab,
                                  resource.id,
                                  action,
                                  e.target.checked
                                )
                              }
                              className="w-4 h-6 2xl-plus:w-6 2xl-plus:h-6 text-blue-600 border-gray-300 rounded"
                            />
                            <span className="capitalize 2xl-plus:text-md">{action}</span>
                          </label>
                        )
                      })}
                    </div>
                  </td>
                </tr>
              ))}
              {filteredResources.length === 0 && (
                <tr>
                  <td colSpan={2} className="px-4 py-2 text-center text-gray-400">
                    No resources found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4 pt-6 border-t mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSaveRole}
          disabled={!roleForm.name.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <Save className="h-4 w-4" />
          <span>{selectedRole ? "Update Role" : "Create Role"}</span>
        </motion.button>
      </div>
    </div>
  )
}

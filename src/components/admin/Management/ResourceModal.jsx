"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { X, Save, Plus } from "lucide-react"
import { Dialog } from "@mui/material"

export default function ResourceModal({ isOpen, onClose, selectedResource, modules, setModules }) {
  const [resourceForm, setResourceForm] = useState({
    name: "",
    description: "",
    moduleId: modules[0]?.id || "",
    actions: [],
  })

  useEffect(() => {
    if (selectedResource) {
      setResourceForm({
        name: selectedResource.name,
        description: selectedResource.description,
        moduleId: selectedResource.moduleId,
        actions: [...selectedResource.actions],
      })
    } else {
      setResourceForm({
        name: "",
        description: "",
        moduleId: modules[0]?.id || "",
        actions: [],
      })
    }
  }, [selectedResource, modules])

  const addAction = (action) => {
    if (action.trim() && !resourceForm.actions.includes(action.trim())) {
      setResourceForm((prev) => ({ ...prev, actions: [...prev.actions, action.trim()] }))
    }
  }

  const removeAction = (actionToRemove) => {
    setResourceForm((prev) => ({
      ...prev,
      actions: prev.actions.filter((a) => a !== actionToRemove),
    }))
  }

  const handleSaveResource = () => {
    if (selectedResource) {
      setModules((prev) =>
        prev.map((module) =>
          module.id === resourceForm.moduleId
            ? {
                ...module,
                resources: module.resources.map((r) =>
                  r.id === selectedResource.id
                    ? {
                        id: r.id,
                        name: resourceForm.name,
                        description: resourceForm.description,
                        actions: resourceForm.actions,
                      }
                    : r
                ),
              }
            : module
        )
      )
    } else {
      const newResource = {
        id: Date.now().toString(),
        name: resourceForm.name,
        description: resourceForm.description,
        actions: resourceForm.actions,
      }
      setModules((prev) =>
        prev.map((module) =>
          module.id === resourceForm.moduleId
            ? { ...module, resources: [...module.resources, newResource] }
            : module
        )
      )
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl w-full max-h-[90vh] overflow-hidden"
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">{selectedResource ? "Edit Resource" : "Add New Resource"}</h2>
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
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Resource Name</label>
                <input
                  type="text"
                  value={resourceForm.name}
                  onChange={(e) => setResourceForm((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter resource name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={resourceForm.description}
                  onChange={(e) => setResourceForm((prev) => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter resource description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Module</label>
                <select
                  value={resourceForm.moduleId}
                  onChange={(e) => setResourceForm((prev) => ({ ...prev, moduleId: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {modules.map((module) => (
                    <option key={module.id} value={module.id}>
                      {module.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Actions</label>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add new action"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        addAction(e.target.value)
                        e.target.value = ""
                      }
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      const input = e.target.closest('div').querySelector("input")
                      addAction(input.value)
                      input.value = ""
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resourceForm.actions.map((action) => (
                    <motion.span
                      key={action}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {action}
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => removeAction(action)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <X className="h-3 w-3" />
                      </motion.button>
                    </motion.span>
                  ))}
                </div>
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
            onClick={handleSaveResource}
            disabled={!resourceForm.name.trim() || !resourceForm.moduleId}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
          >
            <Save className="h-4 w-4" />
            <span>{selectedResource ? "Update Resource" : "Add Resource"}</span>
          </motion.button>
        </div>
      </motion.div>
    </Dialog>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { X, Save, Plus } from "lucide-react"
import { Autocomplete, Chip, Dialog, TextField } from "@mui/material"

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
  <Autocomplete
    size="small"
    multiple
    freeSolo
    options={Array.from(new Set(modules.flatMap((m) => m.resources.flatMap((r) => r.actions))))}
    value={resourceForm.actions}
    onChange={(_, newValue) => {
      setResourceForm((prev) => ({
        ...prev,
        actions: [...new Set(newValue.map((val) => val.trim()).filter(Boolean))],
      }))
    }}
    renderTags={(value, getTagProps) =>
      value.map((option, index) => (
        <Chip
          variant="outlined"
          label={option}
          {...getTagProps({ index })}
          onDelete={() => removeAction(option)}
        />
      ))
    }
    renderInput={(params) => (
      <TextField
       sx={{
    borderRadius:9
  }}
        {...params}
        variant="outlined"
        placeholder="Type or select actions"
      />
    )}
  />
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

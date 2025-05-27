
"use client"

import { DataGrid } from "@mui/x-data-grid"
import { Edit3, Trash2, Shield } from "lucide-react"

export default function RoleList({ roles, modules, onEdit, onDelete }) {
  const rows = roles.map((role) => ({
    id: role.id,
    name: role.name,
    description: role.description,
    module: role.module === "all" ? "Cross-Module" : role.module,
    users: role.userCount,
    modules: Object.keys(role.permissions).map((moduleId) => {
      const mod = modules.find((m) => m.id === moduleId)
      return mod?.name || moduleId
    }).join(", "),
  }))

  const columns = [
    {
      field: "name",
      headerName: "Role",
      flex: 1,
      renderCell: ({ row }) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <Shield className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <div className="font-medium text-gray-900">{row.name}</div>
            <div className="text-sm text-gray-500">{row.description}</div>
          </div>
        </div>
      ),
    },
    { field: "module", headerName: "Module", width: 140 },
    { field: "users", headerName: "Users", width: 100 },
    { field: "modules", headerName: "Permissions", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 100,
      renderCell: ({ row }) => (
        <div className="flex items-center justify-center gap-4 h-full w-full">
          <button onClick={() => onEdit(row)} className="text-blue-600 hover:text-blue-900">
            <Edit3 className="h-4 w-4" />
          </button>
          <button onClick={() => onDelete(row.id)} className="text-red-600 hover:text-red-900">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ]

  return (
    <div style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        density="comfortable"
        sx={{
        textAlign:"center",
          border: 0,
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f9fafb',
            fontWeight: 'bold',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #e5e7eb',
          },
        }}
      />
    </div>
  )
}

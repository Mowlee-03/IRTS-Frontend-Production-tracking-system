"use client"

import { useState, useMemo } from "react"
import { Factory, Package, Plus, ShoppingCart, Store } from "lucide-react"
import RoleFilter from "../../components/admin/Management/RoleFilter"
import RoleGrid from "../../components/admin/Management/RoleGrid"
import RoleList from "../../components/admin/Management/RoleList"
import RoleModal from "../../components/admin/Management/RoleModal"
import { motion } from "framer-motion"

const mockModules = [
  {
    id: "production",
    name: "Production",
    icon: Factory,
    color: "bg-blue-500",
    resources: [
      {
        id: "prod-dashboard",
        name: "Production Dashboard",
        description: "Main production overview and metrics",
        actions: ["view", "export"],
      },
      {
        id: "prod-planning",
        name: "Production Planning",
        description: "Plan and schedule production activities",
        actions: ["view", "create", "edit", "delete"],
      },
      {
        id: "prod-monitoring",
        name: "Production Monitoring",
        description: "Real-time production monitoring",
        actions: ["view", "control", "alert"],
      },
      {
        id: "prod-reports",
        name: "Production Reports",
        description: "Generate production reports and analytics",
        actions: ["view", "generate", "export", "schedule"],
      },
      {
        id: "prod-quality",
        name: "Quality Control",
        description: "Quality assurance and control processes",
        actions: ["view", "inspect", "approve", "reject"],
      },
      {
        id: "prod-maintenance",
        name: "Equipment Maintenance",
        description: "Manage equipment maintenance schedules",
        actions: ["view", "schedule", "complete", "report"],
      },
    ],
  },
  {
    id: "sales",
    name: "Sales",
    icon: ShoppingCart,
    color: "bg-green-500",
    resources: [
      {
        id: "sales-dashboard",
        name: "Sales Dashboard",
        description: "Sales performance overview",
        actions: ["view", "export"],
      },
      {
        id: "sales-leads",
        name: "Lead Management",
        description: "Manage sales leads and prospects",
        actions: ["view", "create", "edit", "delete", "assign"],
      },
      {
        id: "sales-orders",
        name: "Order Management",
        description: "Process and manage customer orders",
        actions: ["view", "create", "edit", "cancel", "approve"],
      },
      {
        id: "sales-customers",
        name: "Customer Management",
        description: "Manage customer information and relationships",
        actions: ["view", "create", "edit", "delete"],
      },
      {
        id: "sales-quotes",
        name: "Quote Management",
        description: "Create and manage sales quotes",
        actions: ["view", "create", "edit", "send", "approve"],
      },
      {
        id: "sales-commission",
        name: "Commission Tracking",
        description: "Track sales commissions and payouts",
        actions: ["view", "calculate", "approve", "export"],
      },
    ],
  },
  {
    id: "store",
    name: "Store",
    icon: Store,
    color: "bg-purple-500",
    resources: [
      {
        id: "store-inventory",
        name: "Inventory Management",
        description: "Track and manage inventory levels",
        actions: ["view", "add", "remove", "transfer", "audit"],
      },
      {
        id: "store-products",
        name: "Product Catalog",
        description: "Manage product information and catalog",
        actions: ["view", "create", "edit", "delete", "publish"],
      },
      {
        id: "store-warehouse",
        name: "Warehouse Operations",
        description: "Manage warehouse operations and logistics",
        actions: ["view", "manage", "relocate"],
      },
      {
        id: "store-receiving",
        name: "Goods Receiving",
        description: "Process incoming goods and deliveries",
        actions: ["view", "receive", "inspect", "reject"],
      },
      {
        id: "store-shipping",
        name: "Shipping Management",
        description: "Manage outbound shipments",
        actions: ["view", "create", "track", "update"],
      },
    ],
  },
  {
    id: "purchase",
    name: "Purchase",
    icon: Package,
    color: "bg-orange-500",
    resources: [
      {
        id: "purchase-orders",
        name: "Purchase Orders",
        description: "Create and manage purchase orders",
        actions: ["view", "create", "edit", "approve", "cancel"],
      },
      {
        id: "purchase-vendors",
        name: "Vendor Management",
        description: "Manage vendor relationships and information",
        actions: ["view", "create", "edit", "delete", "evaluate"],
      },
      {
        id: "purchase-requests",
        name: "Purchase Requests",
        description: "Handle internal purchase requests",
        actions: ["view", "create", "approve", "reject"],
      },
      {
        id: "purchase-contracts",
        name: "Contract Management",
        description: "Manage vendor contracts and agreements",
        actions: ["view", "create", "edit", "renew", "terminate"],
      },
      {
        id: "purchase-budget",
        name: "Budget Management",
        description: "Track and manage purchase budgets",
        actions: ["view", "allocate", "monitor", "report"],
      },
    ],
  },
]
const mockRoles = [
  {
    id: "admin",
    name: "System Administrator",
    description: "Full system access",
    module: "all",
    permissions: {
      production: {
        "prod-dashboard": ["view", "export"],
        "prod-planning": ["view", "create", "edit", "delete"],
        "prod-monitoring": ["view", "control", "alert"],
        "prod-reports": ["view", "generate", "export", "schedule"],
      },
      sales: {
        "sales-dashboard": ["view", "export"],
        "sales-leads": ["view", "create", "edit", "delete", "assign"],
        "sales-orders": ["view", "create", "edit", "cancel", "approve"],
        "sales-customers": ["view", "create", "edit", "delete"],
      },
    },
    userCount: 3,
  },
  {
    id: "sales-manager",
    name: "Sales Manager",
    description: "Sales team management",
    module: "sales",
    permissions: {
      sales: {
        "sales-dashboard": ["view", "export"],
        "sales-leads": ["view", "create", "edit", "assign"],
        "sales-orders": ["view", "create", "edit", "approve"],
        "sales-customers": ["view", "create", "edit"],
      },
    },
    userCount: 5,
  },
  {
    id: "store-keeper",
    name: "Store Keeper",
    description: "Inventory and warehouse management",
    module: "store",
    permissions: {
      store: {
        "store-inventory": ["view", "add", "remove", "audit"],
        "store-products": ["view", "edit"],
        "store-warehouse": ["view", "manage", "relocate"],
      },
    },
    userCount: 8,
  },
  {
    id: "production-supervisor",
    name: "Production Supervisor",
    description: "Production floor supervision",
    module: "production",
    permissions: {
      production: {
        "prod-dashboard": ["view"],
        "prod-monitoring": ["view", "control"],
        "prod-quality": ["view", "inspect", "approve"],
      },
    },
    userCount: 12,
  },
  {
    id: "purchase-officer",
    name: "Purchase Officer",
    description: "Handle purchase operations",
    module: "purchase",
    permissions: {
      purchase: {
        "purchase-orders": ["view", "create", "edit"],
        "purchase-vendors": ["view", "create", "edit"],
        "purchase-requests": ["view", "create"],
      },
    },
    userCount: 6,
  },
]

export default function RoleManagement({ modules=mockModules, initialRoles=mockRoles}) {
  const [roles, setRoles] = useState(initialRoles)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedModule, setSelectedModule] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")
  const [viewMode, setViewMode] = useState("grid")
  const [isCreatingRole, setIsCreatingRole] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null)

  const filteredRoles = useMemo(() => {
    const filtered = roles.filter((role) => {
      const matchesSearch =
        role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesModule = selectedModule === "all" || role.module === selectedModule
      return matchesSearch && matchesModule
    })

    return filtered.sort((a, b) => {
      let aValue, bValue
      switch (sortBy) {
        case "name":
          aValue = a.name.toLowerCase()
          bValue = b.name.toLowerCase()
          break
        case "module":
          aValue = a.module
          bValue = b.module
          break
        case "users":
          aValue = a.userCount
          bValue = b.userCount
          break
        default:
          aValue = a.name.toLowerCase()
          bValue = b.name.toLowerCase()
      }

      return sortOrder === "asc"
        ? aValue > bValue ? 1 : -1
        : aValue < bValue ? 1 : -1
    })
  }, [roles, searchTerm, selectedModule, sortBy, sortOrder])

  const handleCreateNewRole = () => {
    setSelectedRole(null)
    setIsCreatingRole(true)
  }
  const handleEditRole = (role) => {
    setSelectedRole(role)
    setIsCreatingRole(true)
  }

  const handleDeleteRole = (roleId) => {
    setRoles((prev) => prev.filter((r) => r.id !== roleId))
  }

  return (
    <div className="space-y-4">
      {
        isCreatingRole?(
                <RoleModal
                  onClose={() => setIsCreatingRole(false)}
                  selectedRole={selectedRole}
                  modules={modules}
                  setRoles={setRoles}
                />
        ):(
          <>
              <div className="flex items-center justify-between  px-3 py-2 rounded-xl shadow-sm border bg-white border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Manage Roles</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCreateNewRole}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add New Role</span>
                </motion.button>
              </div>
              <RoleFilter
                modules={modules}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedModule={selectedModule}
                onModuleChange={setSelectedModule}
                sortBy={sortBy}
                onSortByChange={setSortBy}
                sortOrder={sortOrder}
                onSortOrderChange={setSortOrder}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                resultCount={filteredRoles.length}
              />

              {viewMode === "grid" ? (
                <RoleGrid roles={filteredRoles} modules={modules} onEdit={handleEditRole} onDelete={handleDeleteRole} />
              ) : (
                <RoleList roles={filteredRoles} modules={modules} onEdit={handleEditRole} onDelete={handleDeleteRole} />
              )}
          </>
        )
      }



    </div>
  )
}

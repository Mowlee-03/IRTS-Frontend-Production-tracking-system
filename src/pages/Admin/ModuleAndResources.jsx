// "use client"

// import { useState, useMemo } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Users,
//   Shield,
//   Settings,
//   Plus,
//   Edit3,
//   Trash2,
//   Save,
//   X,
//   ChevronDown,
//   ChevronRight,
//   Search,
//   Filter,
//   Package,
//   ShoppingCart,
//   Store,
//   Factory,
//   FileText,
//   Grid3X3,
//   List,
//   SortAsc,
//   SortDesc,
// } from "lucide-react"
// import ResourceModal from "../../components/admin/Management/ResourceModal"
// import RoleModal from "../../components/admin/Management/RoleModal"

// // Mock data with more resources
// const mockModules = [
//   {
//     id: "production",
//     name: "Production",
//     icon: Factory,
//     color: "bg-blue-500",
//     resources: [
//       {
//         id: "prod-dashboard",
//         name: "Production Dashboard",
//         description: "Main production overview and metrics",
//         actions: ["view", "export"],
//       },
//       {
//         id: "prod-planning",
//         name: "Production Planning",
//         description: "Plan and schedule production activities",
//         actions: ["view", "create", "edit", "delete"],
//       },
//       {
//         id: "prod-monitoring",
//         name: "Production Monitoring",
//         description: "Real-time production monitoring",
//         actions: ["view", "control", "alert"],
//       },
//       {
//         id: "prod-reports",
//         name: "Production Reports",
//         description: "Generate production reports and analytics",
//         actions: ["view", "generate", "export", "schedule"],
//       },
//       {
//         id: "prod-quality",
//         name: "Quality Control",
//         description: "Quality assurance and control processes",
//         actions: ["view", "inspect", "approve", "reject"],
//       },
//       {
//         id: "prod-maintenance",
//         name: "Equipment Maintenance",
//         description: "Manage equipment maintenance schedules",
//         actions: ["view", "schedule", "complete", "report"],
//       },
//     ],
//   },
//   {
//     id: "sales",
//     name: "Sales",
//     icon: ShoppingCart,
//     color: "bg-green-500",
//     resources: [
//       {
//         id: "sales-dashboard",
//         name: "Sales Dashboard",
//         description: "Sales performance overview",
//         actions: ["view", "export"],
//       },
//       {
//         id: "sales-leads",
//         name: "Lead Management",
//         description: "Manage sales leads and prospects",
//         actions: ["view", "create", "edit", "delete", "assign"],
//       },
//       {
//         id: "sales-orders",
//         name: "Order Management",
//         description: "Process and manage customer orders",
//         actions: ["view", "create", "edit", "cancel", "approve"],
//       },
//       {
//         id: "sales-customers",
//         name: "Customer Management",
//         description: "Manage customer information and relationships",
//         actions: ["view", "create", "edit", "delete"],
//       },
//       {
//         id: "sales-quotes",
//         name: "Quote Management",
//         description: "Create and manage sales quotes",
//         actions: ["view", "create", "edit", "send", "approve"],
//       },
//       {
//         id: "sales-commission",
//         name: "Commission Tracking",
//         description: "Track sales commissions and payouts",
//         actions: ["view", "calculate", "approve", "export"],
//       },
//     ],
//   },
//   {
//     id: "store",
//     name: "Store",
//     icon: Store,
//     color: "bg-purple-500",
//     resources: [
//       {
//         id: "store-inventory",
//         name: "Inventory Management",
//         description: "Track and manage inventory levels",
//         actions: ["view", "add", "remove", "transfer", "audit"],
//       },
//       {
//         id: "store-products",
//         name: "Product Catalog",
//         description: "Manage product information and catalog",
//         actions: ["view", "create", "edit", "delete", "publish"],
//       },
//       {
//         id: "store-warehouse",
//         name: "Warehouse Operations",
//         description: "Manage warehouse operations and logistics",
//         actions: ["view", "manage", "relocate"],
//       },
//       {
//         id: "store-receiving",
//         name: "Goods Receiving",
//         description: "Process incoming goods and deliveries",
//         actions: ["view", "receive", "inspect", "reject"],
//       },
//       {
//         id: "store-shipping",
//         name: "Shipping Management",
//         description: "Manage outbound shipments",
//         actions: ["view", "create", "track", "update"],
//       },
//     ],
//   },
//   {
//     id: "purchase",
//     name: "Purchase",
//     icon: Package,
//     color: "bg-orange-500",
//     resources: [
//       {
//         id: "purchase-orders",
//         name: "Purchase Orders",
//         description: "Create and manage purchase orders",
//         actions: ["view", "create", "edit", "approve", "cancel"],
//       },
//       {
//         id: "purchase-vendors",
//         name: "Vendor Management",
//         description: "Manage vendor relationships and information",
//         actions: ["view", "create", "edit", "delete", "evaluate"],
//       },
//       {
//         id: "purchase-requests",
//         name: "Purchase Requests",
//         description: "Handle internal purchase requests",
//         actions: ["view", "create", "approve", "reject"],
//       },
//       {
//         id: "purchase-contracts",
//         name: "Contract Management",
//         description: "Manage vendor contracts and agreements",
//         actions: ["view", "create", "edit", "renew", "terminate"],
//       },
//       {
//         id: "purchase-budget",
//         name: "Budget Management",
//         description: "Track and manage purchase budgets",
//         actions: ["view", "allocate", "monitor", "report"],
//       },
//     ],
//   },
// ]

// const mockRoles = [
//   {
//     id: "admin",
//     name: "System Administrator",
//     description: "Full system access",
//     module: "all",
//     permissions: {
//       production: {
//         "prod-dashboard": ["view", "export"],
//         "prod-planning": ["view", "create", "edit", "delete"],
//         "prod-monitoring": ["view", "control", "alert"],
//         "prod-reports": ["view", "generate", "export", "schedule"],
//       },
//       sales: {
//         "sales-dashboard": ["view", "export"],
//         "sales-leads": ["view", "create", "edit", "delete", "assign"],
//         "sales-orders": ["view", "create", "edit", "cancel", "approve"],
//         "sales-customers": ["view", "create", "edit", "delete"],
//       },
//     },
//     userCount: 3,
//   },
//   {
//     id: "sales-manager",
//     name: "Sales Manager",
//     description: "Sales team management",
//     module: "sales",
//     permissions: {
//       sales: {
//         "sales-dashboard": ["view", "export"],
//         "sales-leads": ["view", "create", "edit", "assign"],
//         "sales-orders": ["view", "create", "edit", "approve"],
//         "sales-customers": ["view", "create", "edit"],
//       },
//     },
//     userCount: 5,
//   },
//   {
//     id: "store-keeper",
//     name: "Store Keeper",
//     description: "Inventory and warehouse management",
//     module: "store",
//     permissions: {
//       store: {
//         "store-inventory": ["view", "add", "remove", "audit"],
//         "store-products": ["view", "edit"],
//         "store-warehouse": ["view", "manage", "relocate"],
//       },
//     },
//     userCount: 8,
//   },
//   {
//     id: "production-supervisor",
//     name: "Production Supervisor",
//     description: "Production floor supervision",
//     module: "production",
//     permissions: {
//       production: {
//         "prod-dashboard": ["view"],
//         "prod-monitoring": ["view", "control"],
//         "prod-quality": ["view", "inspect", "approve"],
//       },
//     },
//     userCount: 12,
//   },
//   {
//     id: "purchase-officer",
//     name: "Purchase Officer",
//     description: "Handle purchase operations",
//     module: "purchase",
//     permissions: {
//       purchase: {
//         "purchase-orders": ["view", "create", "edit"],
//         "purchase-vendors": ["view", "create", "edit"],
//         "purchase-requests": ["view", "create"],
//       },
//     },
//     userCount: 6,
//   },
// ]

// export default function RolePermissionManager() {
//   const [activeTab, setActiveTab] = useState("roles")
//   const [roles, setRoles] = useState(mockRoles)
//   const [modules, setModules] = useState(mockModules)
//   const [selectedRole, setSelectedRole] = useState(null)
//   const [selectedResource, setSelectedResource] = useState(null)
//   const [isCreatingRole, setIsCreatingRole] = useState(false)
//   const [isCreatingResource, setIsCreatingResource] = useState(false)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [resourceSearchTerm, setResourceSearchTerm] = useState("")
//   const [selectedModule, setSelectedModule] = useState("all")
//   const [selectedRoleModule, setSelectedRoleModule] = useState("all")
//   const [expandedModules, setExpandedModules] = useState({})
//   const [viewMode, setViewMode] = useState("grid") // grid or list
//   const [sortBy, setSortBy] = useState("name") // name, module, resources
//   const [sortOrder, setSortOrder] = useState("asc")
//   const [roleForm, setRoleForm] = useState({
//     name: "",
//     description: "",
//     module: "all",
//     permissions: {},
//   })
//   const [resourceForm, setResourceForm] = useState({
//     name: "",
//     description: "",
//     moduleId: "",
//     actions: [],
//   })

//   // Filter and sort logic
//   const filteredRoles = useMemo(() => {
//     const filtered = roles.filter((role) => {
//       const matchesSearch =
//         role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         role.description.toLowerCase().includes(searchTerm.toLowerCase())
//       const matchesModule = selectedRoleModule === "all" || role.module === selectedRoleModule
//       return matchesSearch && matchesModule
//     })

//     return filtered.sort((a, b) => {
//       let aValue, bValue
//       switch (sortBy) {
//         case "name":
//           aValue = a.name.toLowerCase()
//           bValue = b.name.toLowerCase()
//           break
//         case "module":
//           aValue = a.module
//           bValue = b.module
//           break
//         case "users":
//           aValue = a.userCount
//           bValue = b.userCount
//           break
//         default:
//           aValue = a.name.toLowerCase()
//           bValue = b.name.toLowerCase()
//       }

//       if (sortOrder === "asc") {
//         return aValue > bValue ? 1 : -1
//       } else {
//         return aValue < bValue ? 1 : -1
//       }
//     })
//   }, [roles, searchTerm, selectedRoleModule, sortBy, sortOrder])

//   const filteredResources = useMemo(() => {
//     const allResources = []
//     modules.forEach((module) => {
//       module.resources.forEach((resource) => {
//         allResources.push({ ...resource, moduleId: module.id, moduleName: module.name, moduleColor: module.color })
//       })
//     })

//     return allResources.filter((resource) => {
//       const matchesSearch =
//         resource.name.toLowerCase().includes(resourceSearchTerm.toLowerCase()) ||
//         resource.description.toLowerCase().includes(resourceSearchTerm.toLowerCase())
//       const matchesModule = selectedModule === "all" || resource.moduleId === selectedModule
//       return matchesSearch && matchesModule
//     })
//   }, [modules, resourceSearchTerm, selectedModule])

//   const toggleModule = (moduleId) => {
//     setExpandedModules((prev) => ({
//       ...prev,
//       [moduleId]: !prev[moduleId],
//     }))
//   }

//   const handlePermissionChange = (moduleId, resourceId, action, checked) => {
//     setRoleForm((prev) => ({
//       ...prev,
//       permissions: {
//         ...prev.permissions,
//         [moduleId]: {
//           ...prev.permissions[moduleId],
//           [resourceId]: checked
//             ? [...(prev.permissions[moduleId]?.[resourceId] || []), action]
//             : (prev.permissions[moduleId]?.[resourceId] || []).filter((a) => a !== action),
//         },
//       },
//     }))
//   }

//   const handleSaveRole = () => {
//     if (selectedRole) {
//       setRoles((prev) => prev.map((role) => (role.id === selectedRole.id ? { ...role, ...roleForm } : role)))
//     } else {
//       const newRole = {
//         id: Date.now().toString(),
//         ...roleForm,
//         userCount: 0,
//       }
//       setRoles((prev) => [...prev, newRole])
//     }
//     setSelectedRole(null)
//     setIsCreatingRole(false)
//     setRoleForm({ name: "", description: "", module: "all", permissions: {} })
//   }

//   const handleSaveResource = () => {
//     if (selectedResource) {
//       setModules((prev) =>
//         prev.map((module) =>
//           module.id === resourceForm.moduleId
//             ? {
//                 ...module,
//                 resources: module.resources.map((resource) =>
//                   resource.id === selectedResource.id
//                     ? {
//                         id: resource.id,
//                         name: resourceForm.name,
//                         description: resourceForm.description,
//                         actions: resourceForm.actions,
//                       }
//                     : resource,
//                 ),
//               }
//             : module,
//         ),
//       )
//     } else {
//       const newResource = {
//         id: Date.now().toString(),
//         name: resourceForm.name,
//         description: resourceForm.description,
//         actions: resourceForm.actions,
//       }
//       setModules((prev) =>
//         prev.map((module) =>
//           module.id === resourceForm.moduleId ? { ...module, resources: [...module.resources, newResource] } : module,
//         ),
//       )
//     }
//     setSelectedResource(null)
//     setIsCreatingResource(false)
//     setResourceForm({ name: "", description: "", moduleId: "", actions: [] })
//   }

//   const handleEditRole = (role) => {
//     setSelectedRole(role)
//     setRoleForm({
//       name: role.name,
//       description: role.description,
//       module: role.module,
//       permissions: role.permissions,
//     })
//     setIsCreatingRole(true)
//   }

//   const handleEditResource = (resource) => {
//     setSelectedResource(resource)
//     setResourceForm({
//       name: resource.name,
//       description: resource.description,
//       moduleId: resource.moduleId,
//       actions: [...resource.actions],
//     })
//     setIsCreatingResource(true)
//   }

//   const handleDeleteRole = (roleId) => {
//     setRoles((prev) => prev.filter((role) => role.id !== roleId))
//   }

//   const handleDeleteResource = (resourceId, moduleId) => {
//     setModules((prev) =>
//       prev.map((module) =>
//         module.id === moduleId
//           ? { ...module, resources: module.resources.filter((resource) => resource.id !== resourceId) }
//           : module,
//       ),
//     )
//   }

//   const handleCreateNewRole = () => {
//     setSelectedRole(null)
//     setRoleForm({ name: "", description: "", module: "all", permissions: {} })
//     setIsCreatingRole(true)
//   }

//   const handleCreateNewResource = () => {
//     setSelectedResource(null)
//     setResourceForm({ name: "", description: "", moduleId: modules[0]?.id || "", actions: [] })
//     setIsCreatingResource(true)
//   }

//   const addAction = (action) => {
//     if (action.trim() && !resourceForm.actions.includes(action.trim())) {
//       setResourceForm((prev) => ({
//         ...prev,
//         actions: [...prev.actions, action.trim()],
//       }))
//     }
//   }

//   const removeAction = (actionToRemove) => {
//     setResourceForm((prev) => ({
//       ...prev,
//       actions: prev.actions.filter((action) => action !== actionToRemove),
//     }))
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <motion.header
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className="bg-white shadow-sm border-b sticky top-0 z-40"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-4">
//               <Shield className="h-8 w-8 text-blue-600" />
//               <h1 className="text-2xl font-bold text-gray-900">Role & Permission Manager</h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={activeTab === "roles" ? handleCreateNewRole : handleCreateNewResource}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
//               >
//                 <Plus className="h-4 w-4" />
//                 <span>{activeTab === "roles" ? "Create Role" : "Add Resource"}</span>
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </motion.header>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Navigation Tabs */}
//         <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-8">
//           <nav className="flex space-x-8">
//             {[
//               { id: "roles", name: "Roles", icon: Users },
//               { id: "resources", name: "Resources", icon: FileText },
//               { id: "modules", name: "Modules", icon: Settings },
//             ].map((tab) => (
//               <motion.button
//                 key={tab.id}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
//                   activeTab === tab.id
//                     ? "bg-blue-100 text-blue-700 border border-blue-200"
//                     : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//                 }`}
//               >
//                 <tab.icon className="h-5 w-5" />
//                 <span className="font-medium">{tab.name}</span>
//               </motion.button>
//             ))}
//           </nav>
//         </motion.div>

//         <AnimatePresence mode="wait">
//           {activeTab === "roles" && (
//             <motion.div
//               key="roles"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               className="space-y-6"
//             >
//               {/* Enhanced Search and Filter */}
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
//                   <div className="flex flex-col sm:flex-row gap-4 flex-1">
//                     <div className="relative flex-1 max-w-md">
//                       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//                       <input
//                         type="text"
//                         placeholder="Search roles..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <select
//                       value={selectedRoleModule}
//                       onChange={(e) => setSelectedRoleModule(e.target.value)}
//                       className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="all">All Modules</option>
//                       {modules.map((module) => (
//                         <option key={module.id} value={module.id}>
//                           {module.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <div className="flex items-center space-x-2">
//                       <span className="text-sm text-gray-600">Sort by:</span>
//                       <select
//                         value={sortBy}
//                         onChange={(e) => setSortBy(e.target.value)}
//                         className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
//                       >
//                         <option value="name">Name</option>
//                         <option value="module">Module</option>
//                         <option value="users">Users</option>
//                       </select>
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
//                         className="p-1 text-gray-400 hover:text-gray-600"
//                       >
//                         {sortOrder === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
//                       </motion.button>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={() => setViewMode("grid")}
//                         className={`p-2 rounded ${viewMode === "grid" ? "bg-blue-100 text-blue-600" : "text-gray-400"}`}
//                       >
//                         <Grid3X3 className="h-4 w-4" />
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={() => setViewMode("list")}
//                         className={`p-2 rounded ${viewMode === "list" ? "bg-blue-100 text-blue-600" : "text-gray-400"}`}
//                       >
//                         <List className="h-4 w-4" />
//                       </motion.button>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Filter className="h-4 w-4 text-gray-400" />
//                       <span className="text-sm text-gray-600">{filteredRoles.length} roles</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Roles Display */}
//               {viewMode === "grid" ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredRoles.map((role, index) => (
//                     <motion.div
//                       key={role.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
//                     >
//                       <div className="flex items-start justify-between mb-4">
//                         <div className="flex items-center space-x-3">
//                           <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                             <Shield className="h-5 w-5 text-blue-600" />
//                           </div>
//                           <div>
//                             <h3 className="font-semibold text-gray-900">{role.name}</h3>
//                             <p className="text-sm text-gray-500">{role.userCount} users</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => handleEditRole(role)}
//                             className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
//                           >
//                             <Edit3 className="h-4 w-4" />
//                           </motion.button>
//                           <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => handleDeleteRole(role.id)}
//                             className="p-2 text-gray-400 hover:text-red-600 transition-colors"
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </motion.button>
//                         </div>
//                       </div>

//                       <p className="text-gray-600 text-sm mb-4">{role.description}</p>

//                       <div className="space-y-2">
//                         <div className="flex items-center justify-between text-sm">
//                           <span className="text-gray-500">Primary Module:</span>
//                           <span className="font-medium capitalize">
//                             {role.module === "all" ? "Cross-Module" : role.module}
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between text-sm">
//                           <span className="text-gray-500">Modules Access:</span>
//                           <span className="font-medium">{Object.keys(role.permissions).length}</span>
//                         </div>
//                         <div className="flex flex-wrap gap-1">
//                           {Object.keys(role.permissions).map((moduleId) => {
//                             const module = modules.find((m) => m.id === moduleId)
//                             return module ? (
//                               <span
//                                 key={moduleId}
//                                 className={`px-2 py-1 text-xs rounded-full text-white ${module.color}`}
//                               >
//                                 {module.name}
//                               </span>
//                             ) : null
//                           })}
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//                   <div className="overflow-x-auto">
//                     <table className="w-full">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Role
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Module
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Users
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Permissions
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Actions
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {filteredRoles.map((role) => (
//                           <tr key={role.id} className="hover:bg-gray-50">
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div className="flex items-center">
//                                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
//                                   <Shield className="h-4 w-4 text-blue-600" />
//                                 </div>
//                                 <div>
//                                   <div className="text-sm font-medium text-gray-900">{role.name}</div>
//                                   <div className="text-sm text-gray-500">{role.description}</div>
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <span className="capitalize text-sm text-gray-900">
//                                 {role.module === "all" ? "Cross-Module" : role.module}
//                               </span>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{role.userCount}</td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div className="flex flex-wrap gap-1">
//                                 {Object.keys(role.permissions).map((moduleId) => {
//                                   const module = modules.find((m) => m.id === moduleId)
//                                   return module ? (
//                                     <span
//                                       key={moduleId}
//                                       className={`px-2 py-1 text-xs rounded-full text-white ${module.color}`}
//                                     >
//                                       {module.name}
//                                     </span>
//                                   ) : null
//                                 })}
//                               </div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                               <div className="flex items-center space-x-2">
//                                 <motion.button
//                                   whileHover={{ scale: 1.1 }}
//                                   whileTap={{ scale: 0.9 }}
//                                   onClick={() => handleEditRole(role)}
//                                   className="text-blue-600 hover:text-blue-900"
//                                 >
//                                   <Edit3 className="h-4 w-4" />
//                                 </motion.button>
//                                 <motion.button
//                                   whileHover={{ scale: 1.1 }}
//                                   whileTap={{ scale: 0.9 }}
//                                   onClick={() => handleDeleteRole(role.id)}
//                                   className="text-red-600 hover:text-red-900"
//                                 >
//                                   <Trash2 className="h-4 w-4" />
//                                 </motion.button>
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           )}

//           {activeTab === "resources" && (
//             <motion.div
//               key="resources"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               className="space-y-6"
//             >
//               {/* Resource Search and Filter */}
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
//                   <div className="flex flex-col sm:flex-row gap-4 flex-1">
//                     <div className="relative flex-1 max-w-md">
//                       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//                       <input
//                         type="text"
//                         placeholder="Search resources..."
//                         value={resourceSearchTerm}
//                         onChange={(e) => setResourceSearchTerm(e.target.value)}
//                         className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <select
//                       value={selectedModule}
//                       onChange={(e) => setSelectedModule(e.target.value)}
//                       className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="all">All Modules</option>
//                       {modules.map((module) => (
//                         <option key={module.id} value={module.id}>
//                           {module.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Filter className="h-4 w-4 text-gray-400" />
//                     <span className="text-sm text-gray-600">{filteredResources.length} resources</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Resources Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredResources.map((resource, index) => (
//                   <motion.div
//                     key={resource.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
//                   >
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="flex items-center space-x-3">
//                         <div
//                           className={`w-10 h-10 ${resource.moduleColor} rounded-lg flex items-center justify-center`}
//                         >
//                           <FileText className="h-5 w-5 text-white" />
//                         </div>
//                         <div>
//                           <h3 className="font-semibold text-gray-900">{resource.name}</h3>
//                           <span className={`px-2 py-1 text-xs rounded-full text-white ${resource.moduleColor}`}>
//                             {resource.moduleName}
//                           </span>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => handleEditResource(resource)}
//                           className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
//                         >
//                           <Edit3 className="h-4 w-4" />
//                         </motion.button>
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => handleDeleteResource(resource.id, resource.moduleId)}
//                           className="p-2 text-gray-400 hover:text-red-600 transition-colors"
//                         >
//                           <Trash2 className="h-4 w-4" />
//                         </motion.button>
//                       </div>
//                     </div>

//                     <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

//                     <div className="space-y-2">
//                       <div className="flex items-center justify-between text-sm">
//                         <span className="text-gray-500">Actions:</span>
//                         <span className="font-medium">{resource.actions.length}</span>
//                       </div>
//                       <div className="flex flex-wrap gap-1">
//                         {resource.actions.map((action) => (
//                           <span key={action} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
//                             {action}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           )}

//           {activeTab === "modules" && (
//             <motion.div
//               key="modules"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               className="grid grid-cols-1 lg:grid-cols-2 gap-6"
//             >
//               {modules.map((module, index) => (
//                 <motion.div
//                   key={module.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
//                 >
//                   <div className={`${module.color} p-6 text-white`}>
//                     <div className="flex items-center space-x-3">
//                       <module.icon className="h-8 w-8" />
//                       <div>
//                         <h3 className="text-xl font-semibold">{module.name}</h3>
//                         <p className="text-white/80">{module.resources.length} resources</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <div className="space-y-3 max-h-96 overflow-y-auto">
//                       {module.resources.map((resource) => (
//                         <div key={resource.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                           <div className="flex-1">
//                             <span className="font-medium text-gray-900 block">{resource.name}</span>
//                             <span className="text-sm text-gray-500">{resource.description}</span>
//                           </div>
//                           <div className="flex flex-wrap gap-1 ml-4">
//                             {resource.actions.slice(0, 3).map((action) => (
//                               <span key={action} className="px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">
//                                 {action}
//                               </span>
//                             ))}
//                             {resource.actions.length > 3 && (
//                               <span className="px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded-full">
//                                 +{resource.actions.length - 3}
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Role Creation/Edit Modal */}
//       <AnimatePresence>
//         {isCreatingRole && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
//             >
//               <div className="flex items-center justify-between p-6 border-b">
//                 <h2 className="text-xl font-semibold">{selectedRole ? "Edit Role" : "Create New Role"}</h2>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => setIsCreatingRole(false)}
//                   className="p-2 text-gray-400 hover:text-gray-600"
//                 >
//                   <X className="h-5 w-5" />
//                 </motion.button>
//               </div>

//               <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
//                 <div className="space-y-6">
//                   {/* Basic Info */}
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Role Name</label>
//                       <input
//                         type="text"
//                         value={roleForm.name}
//                         onChange={(e) => setRoleForm((prev) => ({ ...prev, name: e.target.value }))}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Enter role name"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
//                       <input
//                         type="text"
//                         value={roleForm.description}
//                         onChange={(e) => setRoleForm((prev) => ({ ...prev, description: e.target.value }))}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Enter role description"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Primary Module</label>
//                       <select
//                         value={roleForm.module}
//                         onChange={(e) => setRoleForm((prev) => ({ ...prev, module: e.target.value }))}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       >
//                         <option value="all">Cross-Module</option>
//                         {modules.map((module) => (
//                           <option key={module.id} value={module.id}>
//                             {module.name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   {/* Permissions */}
//                   <div>
//                     <h3 className="text-lg font-medium text-gray-900 mb-4">Permissions</h3>
//                     <div className="space-y-4">
//                       {modules.map((module) => (
//                         <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
//                           <motion.button
//                             whileHover={{ backgroundColor: "rgb(249, 250, 251)" }}
//                             onClick={() => toggleModule(module.id)}
//                             className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
//                           >
//                             <div className="flex items-center space-x-3">
//                               <module.icon className="h-5 w-5 text-gray-600" />
//                               <span className="font-medium text-gray-900">{module.name}</span>
//                               <span className="text-sm text-gray-500">({module.resources.length} resources)</span>
//                             </div>
//                             {expandedModules[module.id] ? (
//                               <ChevronDown className="h-4 w-4 text-gray-400" />
//                             ) : (
//                               <ChevronRight className="h-4 w-4 text-gray-400" />
//                             )}
//                           </motion.button>

//                           <AnimatePresence>
//                             {expandedModules[module.id] && (
//                               <motion.div
//                                 initial={{ height: 0 }}
//                                 animate={{ height: "auto" }}
//                                 exit={{ height: 0 }}
//                                 className="overflow-hidden"
//                               >
//                                 <div className="p-4 space-y-4">
//                                   {module.resources.map((resource) => (
//                                     <div key={resource.id} className="bg-white p-4 rounded-lg border">
//                                       <h4 className="font-medium text-gray-900 mb-1">{resource.name}</h4>
//                                       <p className="text-sm text-gray-500 mb-3">{resource.description}</p>
//                                       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
//                                         {resource.actions.map((action) => {
//                                           const isChecked =
//                                             roleForm.permissions[module.id]?.[resource.id]?.includes(action) || false
//                                           return (
//                                             <motion.label
//                                               key={action}
//                                               whileHover={{ scale: 1.02 }}
//                                               className="flex items-center space-x-2 cursor-pointer"
//                                             >
//                                               <input
//                                                 type="checkbox"
//                                                 checked={isChecked}
//                                                 onChange={(e) =>
//                                                   handlePermissionChange(
//                                                     module.id,
//                                                     resource.id,
//                                                     action,
//                                                     e.target.checked,
//                                                   )
//                                                 }
//                                                 className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                                               />
//                                               <span className="text-sm text-gray-700 capitalize">{action}</span>
//                                             </motion.label>
//                                           )
//                                         })}
//                                       </div>
//                                     </div>
//                                   ))}
//                                 </div>
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center justify-end space-x-4 p-6 border-t bg-gray-50">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setIsCreatingRole(false)}
//                   className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                 >
//                   Cancel
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={handleSaveRole}
//                   disabled={!roleForm.name.trim()}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
//                 >
//                   <Save className="h-4 w-4" />
//                   <span>{selectedRole ? "Update Role" : "Create Role"}</span>
//                 </motion.button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Resource Creation/Edit Modal */}
//       <AnimatePresence>
//         {isCreatingResource && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
//             >
//               <div className="flex items-center justify-between p-6 border-b">
//                 <h2 className="text-xl font-semibold">{selectedResource ? "Edit Resource" : "Add New Resource"}</h2>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => setIsCreatingResource(false)}
//                   className="p-2 text-gray-400 hover:text-gray-600"
//                 >
//                   <X className="h-5 w-5" />
//                 </motion.button>
//               </div>

//               <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
//                 <div className="space-y-6">
//                   {/* Basic Info */}
//                   <div className="grid grid-cols-1 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Resource Name</label>
//                       <input
//                         type="text"
//                         value={resourceForm.name}
//                         onChange={(e) => setResourceForm((prev) => ({ ...prev, name: e.target.value }))}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Enter resource name"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
//                       <textarea
//                         value={resourceForm.description}
//                         onChange={(e) => setResourceForm((prev) => ({ ...prev, description: e.target.value }))}
//                         rows={3}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Enter resource description"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Module</label>
//                       <select
//                         value={resourceForm.moduleId}
//                         onChange={(e) => setResourceForm((prev) => ({ ...prev, moduleId: e.target.value }))}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       >
//                         {modules.map((module) => (
//                           <option key={module.id} value={module.id}>
//                             {module.name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   {/* Actions Management */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Actions</label>
//                     <div className="space-y-3">
//                       <div className="flex gap-2">
//                         <input
//                           type="text"
//                           placeholder="Add new action"
//                           className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           onKeyPress={(e) => {
//                             if (e.key === "Enter") {
//                               addAction(e.target.value)
//                               e.target.value = ""
//                             }
//                           }}
//                         />
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={(e) => {
//                             const input = e.target.parentElement.querySelector("input")
//                             addAction(input.value)
//                             input.value = ""
//                           }}
//                           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                         >
//                           <Plus className="h-4 w-4" />
//                         </motion.button>
//                       </div>
//                       <div className="flex flex-wrap gap-2">
//                         {resourceForm.actions.map((action) => (
//                           <motion.span
//                             key={action}
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
//                           >
//                             {action}
//                             <motion.button
//                               whileHover={{ scale: 1.2 }}
//                               whileTap={{ scale: 0.8 }}
//                               onClick={() => removeAction(action)}
//                               className="text-blue-600 hover:text-blue-800"
//                             >
//                               <X className="h-3 w-3" />
//                             </motion.button>
//                           </motion.span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center justify-end space-x-4 p-6 border-t bg-gray-50">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setIsCreatingResource(false)}
//                   className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                 >
//                   Cancel
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={handleSaveResource}
//                   disabled={!resourceForm.name.trim() || !resourceForm.moduleId}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
//                 >
//                   <Save className="h-4 w-4" />
//                   <span>{selectedResource ? "Update Resource" : "Add Resource"}</span>
//                 </motion.button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <ResourceModal modules={mockModules}/>
//       <RoleModal modules={mockModules}/>
//     </div>
//   )
// }

"use client"

import { useState, useMemo } from "react"
import ResourceFilter from "../../components/admin/Management/ResourceFilter"
import ResourceGrid from "../../components/admin/Management/ResourcesGrid"
import ResourceModal from "../../components/admin/Management/ResourceModal"
import { Factory, Package, ShoppingCart, Store } from "lucide-react"

// Mock data with more resources
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
export default function ResourcePage() {
    const [modules, setModules] = useState(mockModules)
  const [selectedResource, setSelectedResource] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedModule, setSelectedModule] = useState("all")
  const [isCreatingResource, setIsCreatingResource] = useState(false)

  const allResources = useMemo(() => {
    const resources = []
    modules.forEach((module) => {
      module.resources.forEach((resource) => {
        resources.push({
          ...resource,
          moduleId: module.id,
          moduleName: module.name,
          moduleColor: module.color,
        })
      })
    })
    return resources
  }, [modules])

  const filteredResources = useMemo(() => {
    return allResources.filter((resource) => {
      const matchesSearch =
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesModule = selectedModule === "all" || resource.moduleId === selectedModule
      return matchesSearch && matchesModule
    })
  }, [allResources, searchTerm, selectedModule])

  const handleEditResource = (resource) => {
    setSelectedResource(resource)
    setIsCreatingResource(true)
  }

  const handleDeleteResource = (resourceId, moduleId) => {
    setModules((prev) =>
      prev.map((module) =>
        module.id === moduleId
          ? { ...module, resources: module.resources.filter((r) => r.id !== resourceId) }
          : module,
      ),
    )
  }

  return (
    <div className="space-y-6">
      <ResourceFilter
        modules={modules}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedModule={selectedModule}
        onModuleChange={setSelectedModule}
        resultCount={filteredResources.length}
      />

      <ResourceGrid
        resources={filteredResources}
        onEdit={handleEditResource}
        onDelete={handleDeleteResource}
      />

      <ResourceModal
        isOpen={isCreatingResource}
        onClose={() => setIsCreatingResource(false)}
        selectedResource={selectedResource}
        modules={modules}
        setModules={setModules}
      />
    </div>
  )
}


"use client"

import { useState, useMemo } from "react"
import ResourceFilter from "../../components/admin/Management/ResourceFilter"
import ResourceGrid from "../../components/admin/Management/ResourcesGrid"
import ResourceModal from "../../components/admin/Management/ResourceModal"
import { Factory, Package, ShoppingCart, Store } from "lucide-react"
import ModuleDetails from "../../components/admin/Management/ModuleDetails"
import ModuleModal from "../../components/admin/Management/ModuleModal"

export const iconOptions = [
  { name: "Factory", icon: Factory },
  { name: "ShoppingCart", icon: ShoppingCart },
  { name: "Store", icon: Store },
  { name: "Package", icon: Package },
]

export const colorOptions = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-red-500",
]

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
export default function ModelAndResourcePage() {
  const [modules, setModules] = useState(mockModules)
  const [selectedModuleFilter, setSelectedModuleFilter] = useState("all")
  const [isCreatingModule, setIsCreatingModule] = useState(false)
  const [selectedModule, setSelectedModule] = useState(null)
  const [moduleForm, setModuleForm] = useState({
    name: "",
    description: "",
    color: colorOptions[0],
    icon: iconOptions[0].name,
  })
  const [selectedResource, setSelectedResource] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
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
      const matchesModule = selectedModuleFilter === "all" || resource.moduleId === selectedModuleFilter
      return matchesSearch && matchesModule
    })
  }, [allResources, searchTerm, selectedModuleFilter])


  // Resource handlers
  const handleCreateNewResource = () => {
    setSelectedResource(null)
    setIsCreatingResource(true)
  }

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

  // Module handlers
  const handleCreateNewModule = () => {
    setSelectedModule(null)
    setModuleForm({
      name: "",
      description: "",
      icon: iconOptions[0].name,
      color: colorOptions[0],
    })
    setIsCreatingModule(true)
  }

  const handleEditModule = (module) => {
    setSelectedModule(module)
    setModuleForm({
      name: module.name,
      description: module.description || "",
      icon: module.icon.name || module.icon,
      color: module.color,
    })
    setIsCreatingModule(true)
  }

  const handleDeleteModule = (moduleId) => {
    setModules((prev) => prev.filter((mod) => mod.id !== moduleId))
    if (selectedModuleFilter === moduleId) {
      setSelectedModuleFilter("all")
    }
  }

  const handleSaveModule = () => {
    const iconEntry = iconOptions.find((opt) => opt.name === moduleForm.icon)
    const newModule = {
      id: selectedModule?.id || moduleForm.name.toLowerCase().replace(/\s+/g, "-"),
      name: moduleForm.name,
      description: moduleForm.description,
      icon: iconEntry?.icon || Factory,
      color: moduleForm.color,
      resources: selectedModule?.resources || [],
    }

    if (selectedModule) {
      // Editing existing
      setModules((prev) =>
        prev.map((mod) => (mod.id === selectedModule.id ? newModule : mod)),
      )
    } else {
      // Creating new
      setModules((prev) => [...prev, newModule])
    }

    setIsCreatingModule(false)
  }

  return (
    <div className="space-y-6 pb-3">

      <ModuleDetails
        modules={modules}
        selectedModuleFilter={selectedModuleFilter}
        setSelectedModuleFilter={setSelectedModuleFilter}
        handleCreateNewModule={handleCreateNewModule}
        handleEditModule={handleEditModule}
        handleDeleteModule={handleDeleteModule}
      />
      <ResourceFilter
        modules={modules}
        selectedModuleFilter={selectedModuleFilter}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedModule={selectedModule}
        onModuleChange={setSelectedModule}
        resultCount={filteredResources.length}
        CreateNewResource={handleCreateNewResource}
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

       <ModuleModal
        isOpen={isCreatingModule}
        setIsCreatingModule={setIsCreatingModule}
        colorOptions={colorOptions}
        iconOptions={iconOptions}
        moduleForm={moduleForm}
        setModuleForm={setModuleForm}
        selectedModule={selectedModule}
        handleSaveModule={handleSaveModule}
      />
    </div>
  )
}

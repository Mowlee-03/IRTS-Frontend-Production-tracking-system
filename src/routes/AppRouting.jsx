import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Layout from '../layout/Layout'
import ProductionMain from '../layout/ProductionMain'
import ProductionOverview from '../pages/ProductionPages/ProductionOverview'
import TotalProductionOrder from '../pages/ProductionPages/TotalProductionOrder'
import DeliveredOrders from '../pages/ProductionPages/DeliveredOrders'
import PendingOrders from '../pages/ProductionPages/PendingOrders'
import NewOrderAdding from '../layout/NewOrderAdding'
import NewOrderFromExcel from '../pages/ProductionPages/NewOrderFromExcel'
import OrderPreviewPage from '../components/productionUi/orderPreviewPage'
import SingleOrderAdding from '../pages/ProductionPages/SingleOrderAdding'
import GrowSmartOrderAdding from '../pages/ProductionPages/GrowSmartOrderAdding'
import InProgressOverview from '../pages/ProductionPages/InProgressOverview'
import WorkInProgressTable from '../pages/ProductionPages/WorkInProgressTable'
import ProgressView from '../pages/ProductionPages/ProgressView'
import AdminMain from '../layout/AdminMain'
import AdminDashboard from '../pages/Admin/AdminDashboard'
import ModuleAndResources from '../pages/Admin/ModuleAndResources'
import RoleManagement from '../pages/Admin/Rolemangement'
import StoreMain from '../layout/StoreMain'
import StoreOverviewPage from '../pages/StorePages/StoreOverviewPage'
import TotalProductionOrdersForStore from '../pages/StorePages/TotalProductionOrdersForStore'
import PendingOrdersForStores from '../pages/StorePages/PendingOrderForStores'
import InitialKitting from '../pages/StorePages/InitialKitting'
import KittingCompleted from '../pages/StorePages/KittingCompleted'
import BomOutDetails from '../pages/StorePages/BomOutDetails'
import AssignedWorksMain from '../pages/StorePages/AssignedWorksMain'
import TaskDetails from '../pages/StorePages/TaskDetails'
import FGMain from '../layout/FGMain'
import FGoverView from '../pages/FG/FGoverView'
 


const AppRouting = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout/>} >
          <Route index element={<Navigate to="/admin" replace />} />

          <Route path='admin' element={<AdminMain/>}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path='dashboard' element={<AdminDashboard/>} />
              <Route path='manage/modules_resources' element={<ModuleAndResources/>} />
              <Route path='manage/roles' element={<RoleManagement/>} />
          </Route>

          <Route path='production' element={<ProductionMain/>} >
            <Route index element={<Navigate to="overview" replace />} />
            <Route path='overview' element={<ProductionOverview/>} />
            <Route path='total_orders'element={<TotalProductionOrder/>} />
            <Route path='delivered_orders' element={<DeliveredOrders/>} />
            <Route path='pending_orders' element={<PendingOrders/>} />
            <Route path='new_orders' element={<NewOrderAdding/>}>
                <Route path='via_excel'element={<NewOrderFromExcel/>} />
                <Route path='preview'element={<OrderPreviewPage/>} />
                <Route path='single'element={<SingleOrderAdding/>} />
                <Route path='growsmart' element={<GrowSmartOrderAdding/>} />
            </Route>
            <Route path='in-progress' element={<InProgressOverview/>} />
            <Route path='in-progress/data' element={<WorkInProgressTable/>} />
            <Route path='in-progress/view' element={<ProgressView/>} />
          </Route>

          <Route path='store' element={<StoreMain/>}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path='overview' element={<StoreOverviewPage/>}/> 
            <Route path='total/production_orders'  element={<TotalProductionOrdersForStore/>} />
            <Route path='pending/production_orders'  element={<PendingOrdersForStores/>} />
            <Route path='initial-kitting'  element={<InitialKitting/>} />
            <Route path='kitting-complete'  element={<KittingCompleted/>} />
            <Route path='bom-out'  element={<BomOutDetails/>} />
            <Route path='workers-status'  element={<AssignedWorksMain/>} />
            <Route path='task/details'  element={<TaskDetails/>} />
          </Route>

          <Route path='fg' element={<FGMain/>}> 
            <Route index element={<Navigate to='overview' />} />
            <Route path='overview' element={<FGoverView/>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/admin/dashboard" />} />
    </Routes>
  )
}

export default AppRouting

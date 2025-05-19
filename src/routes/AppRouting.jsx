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


const AppRouting = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout/>} >
          <Route index element={<Navigate to="/production" replace />} />
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
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/production/overview" />} />
    </Routes>
  )
}

export default AppRouting

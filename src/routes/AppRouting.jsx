import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import ProtectedRoute from './ProtectedRoute'
import Layout from '../layout/Layout'
import ProductionMain from '../layout/ProductionMain'
import ProductionOverview from '../pages/ProductionPages/ProductionOverview'
import TotalProductionOrder from '../pages/ProductionPages/TotalProductionOrder'
import DeliveredOrders from '../pages/ProductionPages/DeliveredOrders'


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
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/production/overview" />} />
    </Routes>
  )
}

export default AppRouting

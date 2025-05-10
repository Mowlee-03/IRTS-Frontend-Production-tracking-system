import React from 'react'
import { Outlet } from 'react-router-dom'
import ProductionOrderEntryPanelDialogue from '../components/productionUi/ProductionOrderEntryPanelDialog'
import { ProductionDialogProvider } from '../context/ProductionDialogContext'
const ProductionMain = () => {
  return (
    <ProductionDialogProvider>
        <Outlet/>
        <ProductionOrderEntryPanelDialogue/>
    </ProductionDialogProvider>
  )
}
export default ProductionMain
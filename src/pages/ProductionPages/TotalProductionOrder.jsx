import React from 'react'
import MainDataTable from '../../components/common/MainDataTable'
import { CopyIcon, Plus } from 'lucide-react';
import ExportDropdownButton from '../../components/common/ExportDropdownBtn';

const TotalProductionOrder = () => {
    const rows = [
        {
          id: 1,
          poNumber: '4700064991',
          poDate: '26-Mar-2025',
          soNumber: 'SO/0001/25-26',
          proNumber: 'PROD/0001/25-26',
          customer: 'RMCL',
          itemName: '558510111-A1 CONTROL BOARD-RB100',
          orderQty: 50,
          pendingQty: 50,
          materialRequiredDate: '25-Apr-2025',
          bom: '94%',
          days: 23,
          value: '₹3500',
          total: '₹175000',
          deliveryDate: '25-Apr-2025'
        },
        {
          id: 2,
          poNumber: 'PO-2407',
          poDate: '14-Mar-2025',
          soNumber: 'SO/0003/25-26',
          proNumber: 'PROD/0002/25-26',
          customer: 'MWS',
          itemName: 'Analog Level sensor (4-20mA)',
          orderQty: 22,
          pendingQty: 22,
          materialRequiredDate: '20-Apr-2025',
          bom: '50%',
          days: 18,
          value: '₹5400',
          total: '₹118800',
          deliveryDate: '25-Apr-2025'
        },
        // Add more rows following same format...
      ];
    
    const columns = [
        { field: 'id', headerName: 'KIT NO', width: 90 },
        { field: 'poNumber', headerName: 'PO Number', width: 130 },
        { field: 'poDate', headerName: 'PO Date', width: 120 },
        { field: 'soNumber', headerName: 'S/O NUM', width: 130 },
        { field: 'proNumber', headerName: 'PRO NUM', width: 130 },
        { field: 'customer', headerName: 'Customer', width: 120 },
        { field: 'itemName', headerName: 'Item Name', width: 200 },
        { field: 'orderQty', headerName: 'Order Qty', width: 100 },
        { field: 'pendingQty', headerName: 'Pending Qty', width: 110 },
        { field: 'materialRequiredDate', headerName: 'Material Required Date', width: 170 },
        { field: 'bom', headerName: 'BOM %', width: 100 },
        { field: 'days', headerName: 'Days', width: 80 },
        { field: 'value', headerName: 'Value', width: 100 },
        { field: 'total', headerName: 'Total', width: 120 },
        { field: 'deliveryDate', headerName: 'Delivery Date', width: 140 },
      ];  

      
  return (
    <div className='w-full mt-4'>
        <div className='flex justify-between items-center mb-3'>
            <div className='flex gap-3'>
                <p 
                className='bg-[#78FAD5] text-lg rounded-md p-2 text-center'
                >Total Value:₹<span>00000</span></p>
                <ExportDropdownButton/>
                <button className='flex items-center justify-center gap-2 text-sm font-medium rounded-md bg-[#4530FF]  hover:bg-[#3925CC] text-white px-3' >
                    <CopyIcon size={20}/>Copy
                </button>
            </div>
            <div className=' flex gap-3'>
                <input 
                className='p-2 border-2 w-[280px] '
                type="text" placeholder='Search' />
                <button 
                className='flex items-center justify-center gap-2 text-lg font-medium rounded-md bg-[#4530FF]  hover:bg-[#3925CC] text-white px-3'
                > <Plus strokeWidth={2} />Add new order</button>
            </div>
        </div>
      <MainDataTable columns={columns} rows={rows} />
    </div>
  )
}

export default TotalProductionOrder

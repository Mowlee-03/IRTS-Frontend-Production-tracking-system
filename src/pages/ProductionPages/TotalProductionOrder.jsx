import React from 'react'
import MainDataTable from '../../components/common/MainDataTable'
import { CopyIcon, Plus } from 'lucide-react';
import ExportDropdownButton from '../../components/common/ExportDropdownBtn';
import { CircularProgress, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
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
    bom: '100%',
    days: 23,
    value: '₹3500',
    total: '₹175000',
    deliveryDate: '25-Apr-2025',
    steps: [
      { label: 'KIT Init', date: '27-Mar-2024', completed: true },
      { label: 'PO', date: '13-May-2024', completed: true },
      { label: 'Inward', date: '14-May-2024', completed: true },
      { label: 'KIT', date: '15-May-2024', completed: true },
      { label: 'BOM', date: '16-May-2024', completed: true },
      { label: 'Production', date: '25-May-2024', completed: false },
      { label: 'FG', date: '26-May-2024', completed: false },
    ],
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
    deliveryDate: '25-Apr-2025',
    steps: [
      { label: 'KIT Init', date: '15-Mar-2024', completed: true },
      { label: 'PO', date: '16-Mar-2024', completed: true },
      { label: 'Inward', date: '17-Mar-2024', completed: true },
      { label: 'KIT', date: '18-Mar-2024', completed: false },
      { label: 'BOM', date: '19-Mar-2024', completed: false },
      { label: 'Production', date: '20-Mar-2024', completed: false },
      { label: 'FG', date: '21-Mar-2024', completed: false },
    ],
  },
];
    
      
      const columns = [
        { 
          field: 'id', 
          headerName: 'KIT NO', 
          width: 120,
          renderCell: (params) => (
            <div style={{ paddingLeft: '20px' }}>
              {params.value}
            </div>
          )
        },
        { field: 'poNumber', headerName: 'PO Number', width: 130 },
        { field: 'poDate', headerName: 'PO Date', width: 120 },
        { field: 'soNumber', headerName: 'S/O NUM', width: 130 },
        { field: 'proNumber', headerName: 'PRO NUM', width: 130 },
        { field: 'customer', headerName: 'Customer', width: 120 },
        { field: 'itemName', headerName: 'Item Name', width: 200 },
        { field: 'orderQty', headerName: 'Order Qty', width: 120 },
        { field: 'pendingQty', headerName: 'Pending Qty', width: 140 },
        { field: 'materialRequiredDate', headerName: 'Material Required Date', width: 180 },
        {
          field: 'bom', 
          headerName: 'BOM %', 
          width: 130,
          renderCell: (params) => {
            const value = Number(params.value.replace('%', ''));
        
            // Define manual colors
            let color = '';
            if (value >= 100) {
              color = '#4caf50'; // Green
            } else if (value >= 50) {
              color = '#ff9800'; // Orange
            } else {
              color = '#f44336'; // Red
            }
        
            return (
              <div style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' // ✅ center horizontally
              }}>
                <div style={{ position: 'relative', display: 'inline-flex' }}>
                  <CircularProgress 
                    variant="determinate" 
                    value={value} 
                    size={50} // you can adjust size if needed
                    thickness={8}
                    sx={{
                      color:color,
                    
                    }}
                  />
                  <div style={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                  }}>
                    {`${value}%`}
                  </div>
                </div>
              </div>
            );
          }
        },        
        { field: 'days', headerName: 'Days', width: 100 },
        { field: 'value', headerName: 'Value', width: 100 },
        { field: 'total', headerName: 'Total', width: 120 },
        { field: 'deliveryDate', headerName: 'Delivery Date', width: 140 },
        {
          field: 'actions',
          headerName: 'Actions',
          width: 120,
          sortable: false,
          filterable: false,
          disableColumnMenu: true,
          renderCell: (params) => (
            <IconButton
              onClick={() => {
                console.log('View clicked for ID:', params.row.id);
              }}
              sx={{
                border:1,
                borderColor:"#edf0f0", // light background
                borderRadius: '8px',         // ✅ slight rounded corners (not full circle)
                padding: '12px',          // ✅ make it a box shape
                '&:hover': {
                  backgroundColor: '#e0e0e0', // little darker on hover
                },
              }}
            >
              <VisibilityIcon fontSize="small" />
            </IconButton>
          ),
        }
        
      ];
      
      

      
  return (
    <div className='w-full my-4'>
        <div className='flex justify-between gap-3 lg:items-center mb-3 flex-col lg:flex-row  '>
            <div className='flex gap-3'>
                <p 
                className='bg-[#78FAD5] text-xs lg:text-[13px] 2xl:text-lg rounded-md p-1 xl:p-2 text-center'
                >Total Value:₹<span>00000</span></p>
                <ExportDropdownButton/>
                <button className='flex items-center justify-center gap-2 text-xs 2xl:text-sm font-medium rounded-md bg-[#4530FF]  hover:bg-[#3925CC] text-white px-3' >
                    <CopyIcon className='block 2xl:hidden' size={17}/>
                    <CopyIcon className='hidden 2xl:block' size={20}/>Copy
                </button>
            </div>
            <div className=' flex items-center  gap-3'>
                <input 
                className='p-2 h-8 2xl:h-11 border-2 2xl:w-[280px] '
                type="text" placeholder='Search' />
                <button 
                className='flex items-center justify-center gap-2 text-xs 2xl:text-lg font-medium rounded-md bg-[#4530FF]  hover:bg-[#3925CC] text-white px-2 2xl:px-3 py-2'
                > 
                <Plus className='block 2xl:hidden' strokeWidth={2} size={17} />
                <Plus className='hidden 2xl:block' strokeWidth={2} size={20} />
                Add new order</button>
            </div>
        </div>
      <MainDataTable columns={columns} rows={rows} />
    </div>
  )
}

export default TotalProductionOrder

import React from 'react'
import SimpleDataTable from '../../components/common/SimpleDataTable'
import { ModelProductionData } from '../../Redux/Store/mockdata'
import { Button, IconButton, Stack } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { buttonstyle1, ExportButtonStyle, IconButtonColors, SearchQuickFilter } from '../../../Style';
import { GridToolbarContainer } from '@mui/x-data-grid';
import { GridToolbarExport } from '@mui/x-data-grid';
import { GridToolbarQuickFilter } from '@mui/x-data-grid';
const WorkInProgressTable = () => {
     const columns = [
         {
              field: 'actions',
              headerName: 'Actions',
              width: 120,
              sortable: false,
              filterable: false,
              disableColumnMenu: true,
              renderCell: (params) => (
                <IconButton
                  sx={IconButtonColors}
                >
                    <VisibilityIcon fontSize="small" />
                </IconButton>
              ),
            },
    { field: 'kitNo', headerName: 'Kit No',width:120},
    { field: 'poNumber', headerName: 'PO Number', width:150 },
    { field: 'poDate', headerName: 'PO Date',width:120 },
    { field: 'soNumber', headerName: 'SO Number', width:140 },
    { field: 'proNumber', headerName: 'PRO Number', width:140 },
    { field: 'customer', headerName: 'Customer', width:120 },
    { field: 'itemName', headerName: 'Item Name', width:180},
    { field: 'orderQty', headerName: 'Order Qty', width:140 },
    { field: 'pendingQty', headerName: 'Pending Qty',width:140},
    { field: 'bom', headerName: 'BOM', width:120 },
    { field: 'deliveryDate', headerName: 'Delivery Date', width:150 }
  ]

  const CustomToolbar=()=>{
    return(
        <GridToolbarContainer 
          sx={{ justifyContent: 'space-between', display: 'flex', padding: '10px' }}
        >
            <p className='text-xl font-medium'>Work-In-Progress</p>
            <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ gap: 1 }}
            > 
            <GridToolbarExport
                slotProps={{
                  button: {
                    sx: {...ExportButtonStyle,py:1.1},
                    children:null
                  },
                }}
              />
            <div className='border rounded-lg px-1  bg-[#F9FAFB]'>
              <GridToolbarQuickFilter sx={SearchQuickFilter} />
            </div>

            </Stack>
        </GridToolbarContainer>
     
    )
  }
  return (
    <div className='h-full py-4'>
        <div className='bg-white h-full rounded-xl shadow-bg-shadow-2'>
            <SimpleDataTable 
            columns={columns} 
            rows={ModelProductionData} 
            CustomToolbar={CustomToolbar}
            />
        </div>
    </div>
    
  )
}

export default WorkInProgressTable
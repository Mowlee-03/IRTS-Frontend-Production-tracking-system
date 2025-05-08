import React from 'react'
import SimpleDataTable from '../../components/common/SimpleDataTable'
import { GridToolbarContainer, GridToolbarExport, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Button, Stack ,Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import { buttonstyle1, dropdownstyle1, ExportDataBtn, SearchQuickFilter } from '../../../Style';

const PendingOrders = () => {
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
          status:"Bom Out",
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
          status:"Bom Out",
        },
      ];

      const columns =[
        {
            field: 'id',
            headerName: 'Kit No',
            width: 150,
        },
        {
            field: 'poNumber',
            headerName: 'PO Number',
            width: 150,
        },
        {
            field: 'soNumber',
            headerName: 'SO Number',
            width: 150,
        },
        {
            field: 'customer',
            headerName: 'Customer',
            width: 150,
        },
        {
            field: 'proNumber',
            headerName: 'PRO Num',
            width: 150,
        },
        {
            field: 'itemName',
            headerName: 'Item Name',
            width: 180,
        },
        {
            field: 'orderQty',
            headerName: 'Order Qty',
            width: 140,
        },
        {
            field: 'pendingQty',
            headerName: 'Pending Qty',
            width: 140,
        },
        {
            field: 'materialRequiredDate',
            headerName: 'Material required date',
            width: 150,
        },
        {
            field: 'deliveryDate',
            headerName: 'Delivery Date',
            width: 150,
        },{
            field: 'bom',
            headerName: 'BOM %',
            width: 120,
        },{
            field: 'status',
            headerName: 'Status',
            width: 120,
        },{
            field: 'total',
            headerName: 'Value',
            width: 120,
        },
      ]

      const CustomToolbar = () => {
        return (
          <GridToolbarContainer
            sx={{ justifyContent: 'space-between', display: 'flex', padding: '16px' }}
          >
             <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ gap: 1 }}
            >
                <Button
                sx={buttonstyle1}
                >
                All Order (50)
                </Button>
                
                <FormControl
                size="small"
                sx={dropdownstyle1}
                >
                <Select
                 sx={{
                    textAlign: 'left',
                  }}
                    displayEmpty
                    defaultValue=''
                    renderValue={(selected) => {
                    if (!selected) {
                        return <span style={{ color: '#999' }}>Delays</span>; 
                    }
                    return selected;
                    }}
                >
                    <MenuItem value="">None</MenuItem> {/* Clear Option */}
                    <MenuItem value="overdueOrder">Overdue Order</MenuItem>
                    <MenuItem value="nearDeadline">Near Deadline</MenuItem>
                    <MenuItem value="On Schedule">On Schedule</MenuItem>
                </Select>
                </FormControl>

                <FormControl
                size="small"
                sx={dropdownstyle1}
                >
                <Select
                 sx={{
                    textAlign: 'left',
                  }}
                    displayEmpty
                    defaultValue=''
                    renderValue={(selected) => {
                    if (!selected) {
                        return <span style={{ color: '#999' }}>Choose Production</span>; 
                    }
                    return selected;
                    }}
                >
                    <MenuItem value="">None</MenuItem> {/* Clear Option */}
                    <MenuItem value="productionNotStarted">Not Started</MenuItem>
                    <MenuItem value="productionStarted">Started</MenuItem>
                </Select>
                </FormControl>


              
            </Stack>
    
              <div className='flex gap-3' >
                <GridToolbarExport
                  slotProps={{
                    button: { 
                      sx: ExportDataBtn,
                    },
                  }}
                />
                <GridToolbarQuickFilter
                  sx={SearchQuickFilter}
                />
               
              </div>
          </GridToolbarContainer>
        );
      };
  return (
    <div className='pt-4 h-[74vh] '>
        <SimpleDataTable columns={columns} rows={rows} CustomToolbar={CustomToolbar} />
    </div>
  )
}

export default PendingOrders
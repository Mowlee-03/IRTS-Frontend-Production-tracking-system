import React, { useState } from 'react';
import MainDataTable from '../../components/common/MainDataTable';
import { Button, CircularProgress, IconButton, Stack } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AddIcon from '@mui/icons-material/Add';
import { buttonstyle1, IconButtonColors, SearchQuickFilter } from '../../../Style';
import { GridToolbarContainer, GridToolbarQuickFilter ,GridToolbarExport} from '@mui/x-data-grid';
const TotalProductionOrder = () => {
  const [expandedRowId, setExpandedRowId] = useState(null);


  const toggleRowExpansion = (id) => {
    setExpandedRowId(prev => (prev === id ? null : id));
  };
  

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
        { label: 'KIT Init', date: '27-Mar-2024', status: 'completed' },
        { label: 'PO', date: '13-May-2024', status: 'completed' },
        { label: 'Inward', date: '14-May-2024', status: 'completed' },
        { label: 'KIT', date: '15-May-2024', status: 'completed' },
        { label: 'BOM', date: '16-May-2024', status: 'completed' },
        { label: 'Production', date: '25-May-2024', status: 'in-progress' },
        { label: 'FG', date: '26-May-2024', status: 'pending' },
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
        { label: 'KIT Init', date: '15-Mar-2024', status: 'completed' },
        { label: 'PO', date: '16-Mar-2024', status: 'completed' },
        { label: 'Inward', date: '17-Mar-2024', status: 'completed' },
        { label: 'KIT', date: '18-Mar-2024', status: 'in-progress' },
        { label: 'BOM', date: '19-Mar-2024', status: 'pending' },
        { label: 'Production', date: '20-Mar-2024', status: 'pending' },
        { label: 'FG', date: '21-Mar-2024', status: 'pending' },
      ],
    },
  ];

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
          onClick={(e) => {
            e.stopPropagation()
            toggleRowExpansion(params.id)}}
          sx={IconButtonColors}
        >
          {expandedRowId === params.id ? (
            <VisibilityOffIcon fontSize="small" />
          ) : (
            <VisibilityIcon fontSize="small" />
          )}
        </IconButton>
      )
    },
    {
      field: 'id',
      headerName: 'KIT NO',
      width: 120,
      renderCell: (params) => {
        return <div style={{ paddingLeft: '20px' }}>{params.value}</div>;
      },
    },
    {
      field: 'poNumber',
      headerName: 'PO Number',
      width: 130,
      renderCell: (params) =>  params.value
    },
    {
      field: 'poDate',
      headerName: 'PO Date',
      width: 120,
      renderCell:  (params) =>  params.value
    },
    {
      field: 'soNumber',
      headerName: 'S/O NUM',
      width: 130,
      renderCell: (params) =>  params.value
    },
    {
      field: 'proNumber',
      headerName: 'PRO NUM',
      width: 130,
      renderCell:  (params) =>  params.value
    },
    {
      field: 'customer',
      headerName: 'Customer',
      width: 120,
      renderCell:  (params) =>  params.value
    },
    {
      field: 'itemName',
      headerName: 'Item Name',
      width: 200,
      renderCell:  (params) =>  params.value
    },
    {
      field: 'orderQty',
      headerName: 'Order Qty',
      width: 120,
      renderCell:  (params) =>  params.value
    },
    {
      field: 'pendingQty',
      headerName: 'Pending Qty',
      width: 140,
      renderCell:  (params) =>  params.value
    },
    {
      field: 'materialRequiredDate',
      headerName: 'Material Required Date',
      width: 180,
      renderCell:  (params) =>  params.value
    },
    {
      field: 'bom',
      headerName: 'BOM %',
      width: 130,
      renderCell: (params) => {
        const value = Number(params.value.replace('%', ''));

        let color = '';
        if (value >= 100) {
          color = '#4caf50'; // Green
        } else if (value >= 50) {
          color = '#ff9800'; // Orange
        } else {
          color = '#f44336'; // Red
        }

        return (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={value}
                size={50}
                thickness={8}
                sx={{ color }}
              />
              <div
                style={{
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
                }}
              >
                {`${value}%`}
              </div>
            </div>
          </div>
        );
      },
    },
    {
      field: 'days',
      headerName: 'Days',
      width: 100,
      renderCell:  (params) =>  params.value
    },
    {
      field: 'value',
      headerName: 'Value',
      width: 100,
      renderCell:  (params) =>  params.value
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 120,
      renderCell: (params) =>  params.value
    },
    {
      field: 'deliveryDate',
      headerName: 'Delivery Date',
      width: 140,
      renderCell: (params) =>  params.value
    },

  ];

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
          <p className='bg-[#78FAD5] p-2 rounded-md'>Total Value:$57878</p>
        </Stack>

          <div className='flex gap-3' >
            <GridToolbarExport
              slotProps={{
                button: { 
                  sx: {
                    color:"gray",
                    padding: '6px',
                    minWidth: 'unset',
                    minHeight: 'unset'
                },
                },
              }}
            />
            <GridToolbarQuickFilter
              sx={SearchQuickFilter}
            />
            <Button
            sx={buttonstyle1}
            >
              <AddIcon/>Add New Order
            </Button>
          </div>
      </GridToolbarContainer>
    );
  };

  return (
    <div className="w-full h-auto lg:h-[75vh] pt-4">
      
      <div className='h-full'>
          <MainDataTable 
          columns={columns} 
          rows={rows} 
          expandedRowId={expandedRowId} 
          setExpandedRowId={setExpandedRowId}
          CustomToolbar={CustomToolbar}
          />
      </div>
      
    </div>
  );
};

export default TotalProductionOrder;
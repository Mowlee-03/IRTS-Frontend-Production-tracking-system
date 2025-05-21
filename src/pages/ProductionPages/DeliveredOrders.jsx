import React, { useState } from 'react'
import SimpleDataTable from '../../components/common/SimpleDataTable';
import { Button, Chip, IconButton, Stack, useMediaQuery } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { GridToolbarContainer, GridToolbarExport, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { ExportButtonStyle, IconButtonColors, SearchQuickFilter } from '../../../Style';
import OrderDetailsCard from '../../components/productionUi/OrderDetailCard';
const DeliveredOrders = () => {
  const isSmallScreen = useMediaQuery('(max-width:1024px)');
  const [filterStatus, setFilterStatus] = useState('All Orders');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleView = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  const columns = [
    { field: 'kitNo', headerName: 'KIT NO', width: 300, ...(isSmallScreen ? {} : { flex: 1 }) },
    { field: 'customer', headerName: 'Customer', width: 250, ...(isSmallScreen ? {} : { flex: 1 }) },
    { field: 'itemName', headerName: 'Item Name', width: 250, ...(isSmallScreen ? {} : { flex: 1 }) },
    { field: 'orderQty', headerName: 'Order Qty', width: 220, ...(isSmallScreen ? {} : { flex: 1 }) },
    { field: 'deliveredQty', headerName: 'Delivery Qty', width: 230, ...(isSmallScreen ? {} : { flex: 1 }) },
    {
      field: 'status',
      headerName: 'Delivered Status',
      width: 200,
      ...(isSmallScreen ? {} : { flex: 1 }),
      renderCell: (params) => {
        let data;
        if (params.value === 'Overdue') data = {color:"#EF4444",bgcolor:"#FFE6E6"};
        else if (params.value === 'Near Deadline') data = {color:"#DF8000",bgcolor:"#FEF3C9"};
        else if (params.value === 'On Schedule') data = {color:"#006626",bgcolor:"#BBF7D0"};
        return <Chip label={params.value} 
        sx={{
          backgroundColor:data.bgcolor,
          color:data.color
        }}
        size="small" />;
      },
    },
    { field: 'deliveryDate', headerName: 'Delivery Date', width: 150, ...(isSmallScreen ? {} : { flex: 1 }) },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      ...(isSmallScreen ? {} : { flex: 1 }),
      renderCell: (params) => (
        <IconButton
        sx={IconButtonColors}
        onClick={() => handleView(params.row)}
        >
          <VisibilityIcon fontSize="small"/>
        </IconButton>
      ),
    },
  ];
  
  
  const allRows = [
    {
      id: 1,
      kitNo: 119,
      customer: 'RTGPS',
      itemName: 'AWS-MICRO',
      orderQty: 50,
      deliveredQty: 40,
      poNumber: '4700064991',
      soNumber: 'SO/0001/25-26',
      proNumber: 'PROD/0001/25-26',
      pendingQty: 50,
      materialRequiredDate: '25-Apr-2025',
      bom: '100%',
      days: 23,
      status: 'Overdue',
      deliveryDate: '10-Apr-2025',
    },
    {
      id: 2,
      kitNo: 120,
      customer: 'RTGPS',
      itemName: 'AWS-MICRO',
      orderQty: 50,
      deliveredQty: 40,
      poNumber: '4700064991',
      soNumber: 'SO/0001/25-26',
      proNumber: 'PROD/0001/25-26',
      pendingQty: 50,
      materialRequiredDate: '25-Apr-2025',
      bom: '100%',
      days: 23,
      status: 'Near Deadline',
      deliveryDate: '10-Apr-2025',
    },
    {
      id: 3,
      kitNo: 121,
      customer: 'RTGPS',
      itemName: 'AWS-MICRO',
      orderQty: 50,
      deliveredQty: 40,
      poNumber: '4700064991',
      soNumber: 'SO/0001/25-26',
      proNumber: 'PROD/0001/25-26',
      pendingQty: 50,
      materialRequiredDate: '25-Apr-2025',
      bom: '100%',
      days: 23,
      status: 'On Schedule',
      deliveryDate: '10-Apr-2025',
    },
  ];
  
  const filteredRows =
  filterStatus === 'All Orders'
    ? allRows
    : allRows.filter((row) => row.status === filterStatus);

const CustomToolbar = () => {
  const getButtonStyles = (status) => {
    const isActive = filterStatus === status;
    const baseStyles = {
      textTransform: 'none',
      fontWeight: 400,
      borderRadius: '8px',
      py:'5px',
      px:2,
      mx: 0.5,
      boxShadow:"none",
      fontSize:"16px"
    };

    const styles = {
      'All Orders': {
        bgcolor: isActive ? '#4318D1' : '#F4F6F8',
        color: isActive ? '#fff' : '#000000',
      },
      'Overdue': {
        bgcolor: isActive ? '#FFE6E6' : '#F4F6F8',
        color: isActive ? '#EF4444' : '#000000',
      },
      'Near Deadline': {
        bgcolor: isActive ? '#FEF3C9' : '#F4F6F8',
        color: isActive ? '#DF8000' : '#000000',
      },
      'On Schedule': {
        bgcolor: isActive ? '#BBF7D0' : '#F4F6F8',
        color: isActive ? '#006626' : '#000000',
      },
    };

    return { ...baseStyles, ...styles[status] };
  };

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
        {['All Orders', 'Overdue', 'Near Deadline', 'On Schedule'].map((status) => (
          <Button
            key={status}
            onClick={() => setFilterStatus(status)}
            sx={getButtonStyles(status)}
            variant="contained"
          >
            {status}
          </Button>
        ))}
      </Stack>

        <div className='flex gap-3'>
          <GridToolbarExport
            slotProps={{
              button: { 
                sx: ExportButtonStyle,
              },
            }}
          />
          <div className='border rounded-lg px-1  bg-[#F9FAFB]'>
                     <GridToolbarQuickFilter sx={SearchQuickFilter} />
                   </div>
        </div>
    </GridToolbarContainer>
  );
};
  return (
    <div className='py-4 h-full '>
     {!selectedOrder ? (
        <SimpleDataTable columns={columns} rows={filteredRows} CustomToolbar={CustomToolbar} />
      ) : (
        <OrderDetailsCard order={selectedOrder} onClose={handleCloseDetails} />
      )}
    </div>
  )
}

export default DeliveredOrders
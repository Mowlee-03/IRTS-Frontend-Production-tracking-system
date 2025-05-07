import React, { useState } from 'react'
import SimpleDataTable from '../../components/common/SimpleDataTable';
import { Button, Chip, IconButton, useMediaQuery } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { GridToolbarContainer, GridToolbarExport, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { IconButtonColors } from '../../../Style';
const DeliveredOrders = () => {
  const isSmallScreen = useMediaQuery('(max-width:1024px)');
  const [filterStatus, setFilterStatus] = useState('All Orders');
  const columns = [
    { field: 'kitNo', headerName: 'KIT NO', width: 100, ...(isSmallScreen ? {} : { flex: 1 }) },
    { field: 'customer', headerName: 'Customer', width: 150, ...(isSmallScreen ? {} : { flex: 1 }) },
    { field: 'itemName', headerName: 'Item Name', width: 150, ...(isSmallScreen ? {} : { flex: 1 }) },
    { field: 'orderQty', headerName: 'Order Qty', width: 120, ...(isSmallScreen ? {} : { flex: 1 }) },
    { field: 'deliveryQty', headerName: 'Delivery Qty', width: 130, ...(isSmallScreen ? {} : { flex: 1 }) },
    {
      field: 'status',
      headerName: 'Delivered Status',
      width: 160,
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
      renderCell: () => (
        <IconButton
        sx={IconButtonColors}
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
      deliveryQty: 40,
      status: 'Overdue',
      deliveryDate: '10-Apr-2025',
    },
    {
      id: 2,
      kitNo: 120,
      customer: 'RTGPS',
      itemName: 'AWS-MICRO',
      orderQty: 50,
      deliveryQty: 40,
      status: 'Near Deadline',
      deliveryDate: '10-Apr-2025',
    },
    {
      id: 3,
      kitNo: 121,
      customer: 'RTGPS',
      itemName: 'AWS-MICRO',
      orderQty: 50,
      deliveryQty: 40,
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
      py:1,
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
      <div>
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
      </div>

        <div >
          <GridToolbarQuickFilter
            sx={{
              '& .MuiInputBase-root': {
                borderRadius: '8px',
                backgroundColor: '#F9FAFB',
                paddingLeft: '8px',
                paddingRight: '8px',
                height: '40px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E2E8F0', // default border
              },
              '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E2E8F0', // focus border color
              },
              '& input': {
                fontSize: '14px',
              },
            }}
          />
        </div>

      
    </GridToolbarContainer>
  );
};
  return (
    <div className='pt-4 h-[75vh]'>
      <SimpleDataTable columns={columns} rows={filteredRows} CustomToolbar={CustomToolbar} />
    </div>
  )
}

export default DeliveredOrders
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWithExpiry } from '../../utils/localstorageWithExpiry';
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Paper,
  IconButton,
  Tooltip,
  TextField,
  Grid,
  Button,
  Divider
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { IconButtonColors } from '../../../Style';

const ExcelPreviewPage = () => {
  const navigate = useNavigate();
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editableOrder, setEditableOrder] = useState(null);

  useEffect(() => {
    const selectedIdsData = getWithExpiry('SelectedOrderIds');
    if (!selectedIdsData) {
      navigate('/production/new_orders/via_excel', {
        state: { error: 'No selected orders available. Please select orders to preview.' }
      });
      return;
    }

    const selectedIds = selectedIdsData.value;
    const orderTemplate = getWithExpiry('Order Template');

    if (orderTemplate?.value?.length > 0 && selectedIds.length > 0) {
      const filteredOrders = orderTemplate.value
        .map((order, index) => ({ id: index, ...order }))
        .filter(order => selectedIds.includes(order.id));
      setSelectedOrders(filteredOrders);
    }
  }, [navigate]);

  const handleTabChange = (_, newValue) => {
    setTabIndex(newValue);
  };


  const handleEdit = (order) => {
  setIsEditMode(true);
  setEditableOrder({ ...order }); // clone to avoid mutation
};
const handleSave = () => {
  const updatedOrders = [...selectedOrders];
  updatedOrders[tabIndex] = editableOrder;
  setSelectedOrders(updatedOrders);
  setIsEditMode(false);
};

console.log(selectedOrders);


const renderOrderDetails = () => {
  const order = editableOrder ?? selectedOrders[tabIndex];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableOrder((prev) => ({ ...prev, [name]: value }));
  };

  const renderInput = (label, name, xs = 12,md=4) => (
    <Grid item size={{xs:xs, md:md}} >
      <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>{label}</Typography>
        <TextField
      name={name}
      value={order[name] || ''}
      onChange={handleChange}
      fullWidth
      size="small"
      InputProps={{
        readOnly: !isEditMode,
      }}
      sx={{
        transition: 'all 0.3s ease',
      
        '& .MuiOutlinedInput-root': {
          transition: 'all 0.3s ease',
          ...(isEditMode
            ? {
                '& fieldset': {
                  borderColor: '#d2d2d2',
                },
                '&:hover fieldset': {
                  borderColor: 'black',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#151f80',
                },
              }
            : {
                '& fieldset': {
                  borderColor: '#e0e0e0',
                },
                '&:hover fieldset': {
                  borderColor: '#e0e0e0',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#e0e0e0',
                },
                backgroundColor: '#f9f9f9',
                cursor: 'default',
              }),
        },
        '& input': {
          color: isEditMode ? '#000' : '#555',
          cursor: !isEditMode ? 'default' : 'text',
          transition: 'color 0.3s ease',
        },
      }}
    />
    </Grid>
  );

  return (
    <Box mt={3} >
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Production Order Details</Typography>
      <Grid container spacing={4} >
        {renderInput('Order Type', 'orderType')}
        {renderInput('Customer', 'customer')}
        {renderInput('Delivery Date', 'deliveryDate')}
        {renderInput('PRO Number', 'proNumber')}
        {renderInput('PO Number', 'poNumber')}
        {renderInput('PO Date', 'poDate')}
        {renderInput('SO Number', 'soNumber')}
        {renderInput('Raw Material Warehouse', 'rawMaterialWarehouse')}
        {renderInput('Finished Goods Warehouse', 'finishedGoodWarehouse')}
        {renderInput('Remarks', 'remarks')}
       
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Finished Product Details</Typography>
      <Grid container spacing={2}>
        {renderInput('Item Name', 'itemName',12,4)}
        {renderInput('Quantity', 'orderQty', 12,4)}
        {renderInput('UOM', 'uom', 12, 4)}
        {renderInput('Value', 'value')}
        {renderInput('Total', 'total')}
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Raw Material Details</Typography>
      <Grid container spacing={2}>
        {renderInput('Item Name', 'rmItemName')}
        {renderInput('Quantity', 'rmQty', 3)}
        {renderInput('UOM', 'rmUom', 3)}
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Scheduling Details</Typography>
      <Grid container spacing={2}>
        {renderInput('Routing', 'routing')}
        {renderInput('Planned End Date', 'plannedEndDate')}
      </Grid>
    </Box>
  );
};

  return (
    <div className='h-full bg-white shadow-bg-shadow-2 py-4 px-4 md:px-8 rounded-xl'>
      {selectedOrders.length > 0 ? (
        <>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ flexGrow: 1, }}
            >
              {selectedOrders.map((order, index) => (
                <Tab key={index} label={`${index + 1} - ${order.proNumber}`} />
              ))}
            </Tabs>

            {isEditMode ? (
                <Button variant="contained" onClick={handleSave}>Save</Button>
              ) : (
                <Tooltip title="Edit Order">
                  <IconButton onClick={() => handleEdit(selectedOrders[tabIndex])}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}

          </Box>

          <Box >
            {renderOrderDetails(selectedOrders[tabIndex])}
          </Box>
        </>
      ) : (
        <Typography variant="body1">Loading selected orders...</Typography>
      )}
    </div>
  );
};

export default ExcelPreviewPage;

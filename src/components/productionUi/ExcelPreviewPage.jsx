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
  Divider,
  Chip,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Collapse,
  Autocomplete
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { IconButtonColors } from '../../../Style';
import { Plus } from 'lucide-react';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const ExcelPreviewPage = () => {
  const navigate = useNavigate();
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editableOrder, setEditableOrder] = useState(null);
  const [rawMaterials, setRawMaterials] = useState([]);
  const itemOptions = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
];

const productOptions = [
  { id: 1, name: "Steel Rod" },
  { id: 2, name: "Copper Wire" },
];

const uomOptions = [
  { id: 1, name: "Kg" },
  { id: 2, name: "Meter" },
];

const warehouseOptions = [
  { id: 1, name: "Central Warehouse" },
  { id: 2, name: "Secondary Storage" },
];

const handleAddRawMaterial = () => {
  setRawMaterials(prev => [
    ...prev,
    {
      rawMaterialName: null,
      quantity: "",
      uom: null,
      warehouse: null,
      remarks: "",
      expanded: true,
    }
  ]);
};

const handleRawMaterialChange = (index, field, value) => {
  const updated = [...rawMaterials];
  updated[index][field] = value;
  setRawMaterials(updated);
};

const handleDeleteRawMaterial = (index) => {
  const updated = rawMaterials.filter((_, i) => i !== index);
  setRawMaterials(updated);
};

const toggleRawMaterialExpand = (index) => {
  const updated = [...rawMaterials];
  updated[index].expanded = !updated[index].expanded;
  setRawMaterials(updated);
};

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

 const handleTabChange = (event, newValue) => {
  setTabIndex(newValue);
  setEditableOrder(null); // ✅ This resets the form to the current tab's data
  setIsEditMode(false);   // 🔒 Optional: exit edit mode if needed
};



const handleEdit = (order) => {
  const clonedOrder = JSON.parse(JSON.stringify(order));
  setEditableOrder(clonedOrder);
  setIsEditMode(true);
};

const handleSave = () => {
  const updatedOrders = [...selectedOrders];
  updatedOrders[tabIndex] = editableOrder;
  setSelectedOrders(updatedOrders);
  setIsEditMode(false);
};




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
      <Grid container columnSpacing={3} rowSpacing={2}>
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

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Finished Product Details</Typography>
      <Grid container columnSpacing={3} rowSpacing={2}>
        {renderInput('Item Name', 'itemName',12,4)}
        {renderInput('Quantity', 'orderQty', 12,4)}
        {renderInput('UOM', 'uom', 12, 4)}
        {renderInput('Value', 'value')}
        {renderInput('Total', 'total')}
      </Grid>

      <Divider sx={{ my: 2}} />

      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Raw Material Details</Typography>
      
      <Box component="section" sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}>

        <TableContainer component={Paper} sx={{ boxShadow: '0px 3px 6px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgba(96, 165, 250, 0.1)" }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Material Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>UOM</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rawMaterials.map((rm, index) => (
                <React.Fragment key={index}>
                  <TableRow sx={{ backgroundColor: rm.expanded ? "rgba(96, 165, 250, 0.05)" : "white" }}>
                    
                    <TableCell>{rm.rawMaterialName ? (typeof rm.rawMaterialName === 'object' ? rm.rawMaterialName.name : rm.rawMaterialName) : "Select"}</TableCell>
                    <TableCell>{rm.quantity || "-"}</TableCell>
                    <TableCell>{rm.uom ? (typeof rm.uom === 'object' ? rm.uom.name : rm.uom) : "-"}</TableCell>
                    <TableCell>
                      <IconButton color="error" onClick={() => handleDeleteRawMaterial(index)} sx={{ '&:hover': { backgroundColor: 'rgba(211, 47, 47, 0.1)' } }}>
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => toggleRawMaterialExpand(index)}
                        sx={{ transform: rm.expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={6} style={{ padding: 0 }}>
                      <Collapse in={rm.expanded} timeout="auto" unmountOnExit>
                        <Box sx={{ padding: 2, backgroundColor: "#f9f9f9", borderRadius: "4px" }}>
                          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', color: '#374151' }}>Raw Material Details</Typography>
                          <Grid container spacing={2}>
                            
                            <Grid item size={{xs:12 ,md:4}}>
                              <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>Material Name</Typography>
                              <Autocomplete
                                size='small'
                                options={productOptions}
                                getOptionLabel={(option) => (typeof option === 'object' ? option.name : option)}
                                value={rm.rawMaterialName}
                                onChange={(_, val) => handleRawMaterialChange(index, 'rawMaterialName', val)}
                                renderInput={(params) => <TextField {...params} />}
                              />
                            </Grid>
                            <Grid item size={{xs:12 ,md:4}}>
                              <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>Quantity</Typography>
                              <TextField
                                size='small'
                                type="number"
                                variant="outlined"
                                fullWidth
                                value={rm.quantity}
                                onChange={(e) => handleRawMaterialChange(index, 'quantity', Number(e.target.value))}
                                
                              />
                            </Grid>
                            <Grid item size={{xs:12 ,md:4}}>
                              <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>UOM</Typography>
                              <Autocomplete
                                size='small'
                                options={uomOptions}
                                getOptionLabel={(option) => (typeof option === 'object' ? option.name : option)}
                                value={rm.uom}
                                onChange={(_, val) => handleRawMaterialChange(index, 'uom', val)}
                                renderInput={(params) => <TextField {...params} />}
                              />
                            </Grid>
                           
                          </Grid>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button variant="outlined" onClick={handleAddRawMaterial} sx={{ alignSelf: "center", display: 'flex', gap: 1 }}>
          <Plus /> Add Raw Material
        </Button>
      </Box>


      <Divider sx={{ my: 2 }} />

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

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWithExpiry } from '../../utils/localstorageWithExpiry';
import {
  Tabs, Tab, Box, Typography, Paper, IconButton, Tooltip, TextField, Grid, Button, Divider, TableContainer, Table,
  TableHead, TableCell, TableRow, TableBody, Autocomplete,
  FormControlLabel,
  Switch
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Plus } from 'lucide-react';

const parseDateToISO = (dateStr) => {
  if (!dateStr) return "";
  const [day, monthStr, year] = dateStr.split('-');
  const monthNames = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
  };
  const month = monthNames[monthStr];
  if (!month || !day || !year) return "";
  return `${year}-${month}-${day.padStart(2, '0')}`; // e.g., "25-Apr-2025" -> "2025-04-25"
};

const ExcelPreviewPage = () => {
  const navigate = useNavigate();
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editableOrder, setEditableOrder] = useState(null);

  const productOptions = [
    { id: 1, name: "Steel Rod" },
    { id: 2, name: "Copper Wire" },
  ];

  const uomOptions = [
    { id: 1, name: "Kg" },
    { id: 2, name: "Meter" },
  ];

  const processOptions = [
    { id: 1, name: "Cutting" },
    { id: 2, name: "Welding" },
  ];

  const workcenterOptions = [
    { id: 1, name: "Workcenter A" },
    { id: 2, name: "Workcenter B" },
  ];

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
        .map((order, index) => ({ 
          id: index, 
          rawMaterials: [], 
          processDetails: [],
          scheduleDetails: {
            actualDeliveryDate: parseDateToISO(order.deliveryDate) || "", // Initialize from deliveryDate
            isBufferDayNeed: false,
            bufferDays: 0,
            materialReqDate: "",
            storeTargetDate: "",
            iqcTargetDate: "",
            purchaseTargetDate: "",
            movedToFgDate: ""
          }, 
          ...order })) // Initialize rawMaterials and processDetails
        .filter(order => selectedIds.includes(order.id));
      setSelectedOrders(filteredOrders);
    }
  }, [navigate]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    setEditableOrder(null);
    setIsEditMode(false);
  };

  const handleEdit = (order) => {
    const clonedOrder = JSON.parse(JSON.stringify(order));
    setEditableOrder(clonedOrder);
    setIsEditMode(true);
  };

  const handleSave = () => {
    const updatedOrders = [...selectedOrders];
    updatedOrders[tabIndex] = { ...editableOrder };
    setSelectedOrders(updatedOrders);
    setIsEditMode(false);
  };

  const handleAddRawMaterial = () => {
    if (!isEditMode) return;
    setEditableOrder(prev => ({
      ...prev,
      rawMaterials: [
        ...(prev.rawMaterials || []),
        { rawMaterialName: "", quantity: 0, uom: "" }
      ]
    }));
  };

  const handleRawMaterialChange = (index, field, value) => {
    const updatedRawMaterials = [...(editableOrder.rawMaterials || [])];
    updatedRawMaterials[index][field] = field === 'quantity' ? Number(value) : value;
    setEditableOrder(prev => ({ ...prev, rawMaterials: updatedRawMaterials }));
  };

  const handleDeleteRawMaterial = (index) => {
    const updatedRawMaterials = (editableOrder.rawMaterials || []).filter((_, i) => i !== index);
    setEditableOrder(prev => ({ ...prev, rawMaterials: updatedRawMaterials }));
  };

  const handleAddProcessDetail = () => {
    if (!isEditMode) return;
    setEditableOrder(prev => ({
      ...prev,
      processDetails: [
        ...(prev.processDetails || []),
        { processName: "", workcenterName: "" }
      ]
    }));
  };

  const handleProcessDetailChange = (index, field, value) => {
    const updatedProcessDetails = [...(editableOrder.processDetails || [])];
    updatedProcessDetails[index][field] = value;
    setEditableOrder(prev => ({ ...prev, processDetails: updatedProcessDetails }));
  };

  const handleDeleteProcessDetail = (index) => {
    const updatedProcessDetails = (editableOrder.processDetails || []).filter((_, i) => i !== index);
    setEditableOrder(prev => ({ ...prev, processDetails: updatedProcessDetails }));
  };

  const renderOrderDetails = () => {
    const order = editableOrder ?? selectedOrders[tabIndex];

    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditableOrder((prev) => ({ ...prev, [name]: value }));
    };

    const handleScheduleChange = (field, value) => {
      setEditableOrder((prev) => {
        const updatedScheduleDetails = { ...prev.scheduleDetails, [field]: value };

        // Update actualDeliveryDate based on bufferDays if enabled
        if (field === 'isBufferDayNeed' || field === 'bufferDays') {
          const deliveryDate = parseDateToISO(prev.deliveryDate || "")
          if (updatedScheduleDetails.isBufferDayNeed && updatedScheduleDetails.bufferDays > 0 && deliveryDate) {
            const date = new Date(deliveryDate);
            date.setDate(date.getDate() - updatedScheduleDetails.bufferDays);
            updatedScheduleDetails.actualDeliveryDate = date.toISOString().split('T')[0];
          } else {
            updatedScheduleDetails.actualDeliveryDate =parseDateToISO(prev.deliveryDate || "")
          }
        }

        return { ...prev, scheduleDetails: updatedScheduleDetails };
      });
    };


    const renderInput = (label, name, xs = 12, md = 4) => (
      <Grid item size={{ xs, md }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>{label}</Typography>
        <TextField
          name={name}
          value={order[name] || ''}
          onChange={handleChange}
          fullWidth
          size="small"
          InputProps={{ readOnly: !isEditMode }}
          sx={{
            '& .MuiOutlinedInput-root': {
              ...(isEditMode ? {} : {
                '& fieldset': { borderColor: '#e0e0e0' },
                '&:hover fieldset': { borderColor: '#e0e0e0' },
                '&.Mui-focused fieldset': { borderColor: '#e0e0e0' },
                backgroundColor: '#f9f9f9',
              }),
            },
            '& input': {
              color: isEditMode ? '#000' : '#555',
              cursor: !isEditMode ? 'default' : 'text',
            },
          }}
        />
      </Grid>
    );

    const renderDateInput = (label, field, xs = 12, md = 4) => (
      <Grid item size={{ xs, md }}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>{label}</Typography>
        <TextField
          type="date"
          value={order.scheduleDetails[field] || ""}
          onChange={(e) => handleScheduleChange(field, e.target.value)}
          fullWidth
          size="small"
          InputProps={{ readOnly: !isEditMode }}
          sx={{
            '& .MuiOutlinedInput-root': {
              ...(isEditMode ? {} : {
                '& fieldset': { borderColor: '#e0e0e0' },
                '&:hover fieldset': { borderColor: '#e0e0e0' },
                '&.Mui-focused fieldset': { borderColor: '#e0e0e0' },
                backgroundColor: '#f9f9f9',
              }),
            },
            '& input': {
              color: isEditMode ? '#000' : '#555',
              cursor: !isEditMode ? 'default' : 'text',
            },
          }}
        />
      </Grid>
    );
    return (
      <Box mt={3}>
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
          {renderInput('Item Name', 'itemName', 12, 4)}
          {renderInput('Quantity', 'orderQty', 12, 4)}
          {renderInput('UOM', 'uom', 12, 4)}
          {renderInput('Value', 'value')}
          {renderInput('Total', 'total')}
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Raw Material Details</Typography>
        <TableContainer component={Paper} sx={{ boxShadow: '0px 3px 6px rgba(0,0,0,0.1)', borderRadius: '0px' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgba(96, 165, 250, 0.1)" }}>
                <TableCell sx={{ fontWeight: 'bold', width: "40%" }}>Material Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: "20%", textAlign: "center" }}>Quantity</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: "20%", textAlign: "center" }}>UOM</TableCell>
                {isEditMode && (
                  <TableCell sx={{ fontWeight: 'bold', textAlign: "center" }}>Actions</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {(order.rawMaterials || []).map((rm, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {isEditMode ? (
                      <Autocomplete
                        size="small"
                        options={productOptions}
                        getOptionLabel={(option) => option.name}
                        value={productOptions.find(opt => opt.name === rm.rawMaterialName) || null}
                        onChange={(_, val) => handleRawMaterialChange(index, 'rawMaterialName', val?.name || "")}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    ) : (
                      rm.rawMaterialName || "N/A"
                    )}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {isEditMode ? (
                      <TextField
                        sx={{ width: "100%" }}
                        size="small"
                        type="number"
                        value={rm.quantity || ""}
                        onChange={(e) => handleRawMaterialChange(index, 'quantity', e.target.value)}
                      />
                    ) : (
                      rm.quantity || "N/A"
                    )}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {isEditMode ? (
                      <Autocomplete
                        size="small"
                        options={uomOptions}
                        getOptionLabel={(option) => option.name}
                        value={uomOptions.find(opt => opt.name === rm.uom) || null}
                        onChange={(_, val) => handleRawMaterialChange(index, 'uom', val?.name || "")}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    ) : (
                      rm.uom || "N/A"
                    )}
                  </TableCell>
                  {isEditMode && (
                    <TableCell sx={{ textAlign: "center" }}>
                      <IconButton color="error" onClick={() => handleDeleteRawMaterial(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {isEditMode && (
          <Button
            variant="outlined"
            onClick={handleAddRawMaterial}
            sx={{ mt: 2, alignSelf: "center", display: 'flex', gap: 1 }}
          >
            <Plus /> Add Raw Material
          </Button>
        )}

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Scheduling Details</Typography>
       <Grid container spacing={2}>
          {renderDateInput('Actual Delivery Date', 'actualDeliveryDate')}
          <Grid item sx={{display:"flex",alignItems:'end',}} size={{ xs: 12, md: 4 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={order.scheduleDetails.isBufferDayNeed || false}
                  onChange={(e) => handleScheduleChange('isBufferDayNeed', e.target.checked)}
                  disabled={!isEditMode}
                />
              }
              label="Enable Buffer"
            />
          </Grid>
          {order.scheduleDetails.isBufferDayNeed && (
            <Grid item size={{ xs: 12, md: 4 }}>
              <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>Buffer Days</Typography>
              <TextField
                type="number"
                value={order.scheduleDetails.bufferDays || 0}
                onChange={(e) => handleScheduleChange('bufferDays', Number(e.target.value))}
                fullWidth
                size="small"
                InputProps={{ readOnly: !isEditMode }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    ...(isEditMode ? {} : {
                      '& fieldset': { borderColor: '#e0e0e0' },
                      '&:hover fieldset': { borderColor: '#e0e0e0' },
                      '&.Mui-focused fieldset': { borderColor: '#e0e0e0' },
                      backgroundColor: '#f9f9f9',
                    }),
                  },
                  '& input': {
                    color: isEditMode ? '#000' : '#555',
                    cursor: !isEditMode ? 'default' : 'text',
                  },
                }}
              />
            </Grid>
          )}
          {renderDateInput('Material Request Date', 'materialReqDate')}
          {renderDateInput('Store Target Date', 'storeTargetDate')}
          {renderDateInput('IQC Target Date', 'iqcTargetDate')}
          {renderDateInput('Purchase Target Date', 'purchaseTargetDate')}
          {renderDateInput('Moved to FG Date', 'movedToFgDate')}
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Process Details</Typography>

        <TableContainer component={Paper} sx={{ boxShadow: '0px 3px 6px rgba(0,0,0,0.1)', borderRadius: '0px' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgba(96, 165, 250, 0.1)" }}>
                <TableCell sx={{ fontWeight: 'bold', width: "40%" }}>Process Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: "40%" }}>Workcenter Name</TableCell>
                {isEditMode && (
                  <TableCell sx={{ fontWeight: 'bold', textAlign: "center" }}>Actions</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {(order.processDetails || []).map((pd, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {isEditMode ? (
                      <Autocomplete
                        size="small"
                        options={processOptions}
                        getOptionLabel={(option) => option.name}
                        value={processOptions.find(opt => opt.name === pd.processName) || null}
                        onChange={(_, val) => handleProcessDetailChange(index, 'processName', val?.name || "")}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    ) : (
                      pd.processName || "N/A"
                    )}
                  </TableCell>
                  <TableCell>
                    {isEditMode ? (
                      <Autocomplete
                        size="small"
                        options={workcenterOptions}
                        getOptionLabel={(option) => option.name}
                        value={workcenterOptions.find(opt => opt.name === pd.workcenterName) || null}
                        onChange={(_, val) => handleProcessDetailChange(index, 'workcenterName', val?.name || "")}
                        renderInput ={(params) => <TextField {...params} />}
                      />
                    ) : (
                      pd.workcenterName || "N/A"
                    )}
                  </TableCell>
                  {isEditMode && (
                    <TableCell sx={{ textAlign: "center" }}>
                      <IconButton color="error" onClick={() => handleDeleteProcessDetail(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {isEditMode && (
          <Button
            variant="outlined"
            onClick={handleAddProcessDetail}
            sx={{ mt: 2, alignSelf: "center", display: 'flex', gap: 1 }}
          >
            <Plus /> Add Process Detail
          </Button>
        )}
      </Box>
    );
  };

  return (
    <div className="h-full bg-white shadow-bg-shadow-2 py-4 px-4 md:px-8 rounded-xl">
      {selectedOrders.length > 0 ? (
        <>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ flexGrow: 1 }}
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
          <Box>{renderOrderDetails()}</Box>
        </>
      ) : (
        <Typography variant="body1">Loading selected orders...</Typography>
      )}
    </div>
  );
};

export default ExcelPreviewPage;
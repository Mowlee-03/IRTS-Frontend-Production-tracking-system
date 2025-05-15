import React from 'react';
import { Box, Grid, TextField, Typography, Switch, FormControlLabel } from '@mui/material';

const PlanDetailsForm = ({ orderDetails, scheduleDetails, onUpdate, errors }) => {
  // Reusable styles
  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#fff',
      '& fieldset': {
        borderColor: '#e0e0e0',
      },
      '&:hover fieldset': {
        borderColor: '#bdbdbd',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1976d2',
      },
      '&.Mui-error fieldset': {
        borderColor: '#d32f2f',
      },
      '&.Mui-disabled': {
        backgroundColor: '#f2f2f2',
        '& .MuiInputBase-input': {
          WebkitTextFillColor: 'black',
        },
      },
    },
    '& .MuiInputBase-input': {
      padding: '13px 14px',
      fontSize: '0.875rem',
    },
    '& .MuiFormHelperText-root': {
      fontSize: '0.75rem',
      marginLeft: '4px',
    },
  };

  const labelStyle = {
    variant: 'subtitle2',
    fontWeight: 500,
    color: '#424242',
    mb: 0.5,
  };

  const gridItemSize = { xs: 12, md: 6 };

  // Handle input changes
  const handleInputChange = (section, field, value) => {
    onUpdate(section, field, value);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Order Details
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={6}>
        {[
          { label: 'Kit No', field: 'kitNo', section: 'orderDetails' },
          { label: 'PO Number', field: 'poNumber', section: 'orderDetails' },
          { label: 'PO Date', field: 'poDate', section: 'orderDetails', type: 'date' },
          { label: 'SO Number', field: 'soNumber', section: 'orderDetails' },
          { label: 'Pro Number', field: 'proNumber', section: 'orderDetails' },
          { label: 'Item Name', field: 'itemName', section: 'orderDetails' },
          { label: 'BOM Kit Name', field: 'bomKitName', section: 'orderDetails' },
          { label: 'Customer', field: 'customer', section: 'orderDetails' },
          { label: 'Delivery Date', field: 'deliveryDate', section: 'orderDetails', type: 'date' },
          { label: 'Item Value', field: 'itemValue', section: 'orderDetails', type: 'number' },
          { label: 'Order Quantity', field: 'orderQty', section: 'orderDetails', type: 'number' },
          { label: 'Total Value', field: 'totalValue', section: 'orderDetails', type: 'number', disabled: true },
        ].map(({ label, field, section, type = 'text', disabled = false }) => (
          <Grid item size={gridItemSize} key={field}>
            <Typography {...labelStyle}>{label}</Typography>
            <TextField
              fullWidth
              type={type}
              value={orderDetails[field] || ''}
              onChange={(e) => handleInputChange(section, field, e.target.value)}
              error={!!errors[field]}
              helperText={errors[field]}
              required={!disabled}
              disabled={disabled}
              sx={textFieldStyle}
              InputLabelProps={type === 'date' ? { shrink: true } : undefined}
              InputProps={disabled ? { readOnly: true } : undefined}
            />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Schedule Details
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={6}>
        <Grid item size={gridItemSize}>
          <Typography {...labelStyle}>Actual Delivered On</Typography>
          <TextField
            fullWidth
            type="date"
            value={scheduleDetails.actualDeliveredOn}
            disabled
            error={!!errors.actualDeliveredOn}
            helperText={errors.actualDeliveredOn}
            sx={textFieldStyle}
            InputLabelProps={{ shrink: true }}
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item size={gridItemSize}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
            <Typography {...labelStyle}>Buffer Days</Typography>
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  checked={scheduleDetails.isBufferdaysNeed || false}
                  onChange={(e) => handleInputChange('scheduleDetails', 'isBufferdaysNeed', e.target.checked)}
                />
              }
              label={<Typography {...labelStyle}>Enable Buffer</Typography>}
            />
          </Box>
          <TextField
            fullWidth
            type="number"
            value={scheduleDetails.bufferDays || ''}
            disabled={!scheduleDetails.isBufferdaysNeed}
            onChange={(e) => handleInputChange('scheduleDetails', 'bufferDays', e.target.value)}
            error={!!errors.bufferDays}
            helperText={errors.bufferDays}
            sx={textFieldStyle}
          />
        </Grid>
        {[
          { label: 'Material Request Date', field: 'materialReqDate' },
          { label: 'Store Target Date', field: 'storeTargetDate' },
          { label: 'IQC Target Date', field: 'iqcTargetDate' },
          { label: 'Purchase Target Date', field: 'purchaseTargetDate' },
          { label: 'Moved to FG Date', field: 'movedToFgDate' },
        ].map(({ label, field }) => (
          <Grid item size={gridItemSize} key={field}>
            <Typography {...labelStyle}>{label}</Typography>
            <TextField
              fullWidth
              type="date"
              value={scheduleDetails[field]}
              onChange={(e) => handleInputChange('scheduleDetails', field, e.target.value)}
              sx={textFieldStyle}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlanDetailsForm;
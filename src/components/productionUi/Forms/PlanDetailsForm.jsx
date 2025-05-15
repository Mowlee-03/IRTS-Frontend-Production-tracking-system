import React from 'react';
import { Box, Grid, TextField, Checkbox, FormControlLabel, Typography, Switch } from '@mui/material';

const PlanDetailsForm = ({ orderdetails, scheduledetails, onUpdate, errors }) => {
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

  // Handle text and date input changes
  const handleInputChange = (section, field, value) => {
    onUpdate(section, field, value);
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    onUpdate('scheduleDetails', 'isBufferdaysNeed', e.target.checked);
    if (!e.target.checked) {
      onUpdate('scheduleDetails', 'bufferDays', null);
    }
  };
const Gridsize={xs:12,md:6}
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Order Details
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={6}>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>Kit No </Typography>
          <TextField
            fullWidth
            value={orderdetails.kitNo}
            onChange={(e) => handleInputChange('orderDetails', 'kitNo', e.target.value)}
            error={!!errors.kitNo}
            helperText={errors.kitNo}
            required
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>PO Number</Typography>
          <TextField
            fullWidth
            value={orderdetails.poNumber}
            onChange={(e) => handleInputChange('orderDetails', 'poNumber', e.target.value)}
            error={!!errors.poNumber}
            helperText={errors.poNumber}
            required
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>PO Date</Typography>
          <TextField
            fullWidth
            type="date"
            value={orderdetails.poDate}
            onChange={(e) => handleInputChange('orderDetails', 'poDate', e.target.value)}
            error={!!errors.poDate}
            helperText={errors.poDate}
            required
            sx={textFieldStyle}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>SO Number</Typography>
          <TextField
            fullWidth
            value={orderdetails.soNumber}
            onChange={(e) => handleInputChange('orderDetails', 'soNumber', e.target.value)}
            error={!!errors.soNumber}
            helperText={errors.soNumber}
            required
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>Pro Number</Typography>
          <TextField
            fullWidth
            value={orderdetails.proNumber}
            onChange={(e) => handleInputChange('orderDetails', 'proNumber', e.target.value)}
            error={!!errors.proNumber}
            helperText={errors.proNumber}
            required
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>Item Name</Typography>
          <TextField
            fullWidth
            value={orderdetails.itemName}
            onChange={(e) => handleInputChange('orderDetails', 'itemName', e.target.value)}
            error={!!errors.itemName}
            helperText={errors.itemName}
            required
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>BOM Kit Name</Typography>
          <TextField
            fullWidth
            value={orderdetails.bomKitName}
            onChange={(e) => handleInputChange('orderDetails', 'bomKitName', e.target.value)}
            error={!!errors.bomKitName}
            helperText={errors.bomKitName}
            required
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>Customer</Typography>
          <TextField
            fullWidth
            value={orderdetails.customer}
            onChange={(e) => handleInputChange('orderDetails', 'customer', e.target.value)}
            error={!!errors.customer}
            helperText={errors.customer}
            required
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>Delivery Date</Typography>
          <TextField
            fullWidth
            type="date"
            value={orderdetails.deliveryDate}
            onChange={(e) => handleInputChange('orderDetails', 'deliveryDate', e.target.value)}
            error={!!errors.deliveryDate}
            helperText={errors.deliveryDate}
            required
            sx={textFieldStyle}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>Item Value</Typography>
          <TextField
            fullWidth
            type="number"
            value={orderdetails.itemValue || ''}
            onChange={(e) => handleInputChange('orderDetails', 'itemValue', e.target.value)}
            error={!!errors.itemValue}
            helperText={errors.itemValue}
            required
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>Order Quantity</Typography>
          <TextField
            fullWidth
            type="number"
            value={orderdetails.orderQty || ''}
            onChange={(e) => handleInputChange('orderDetails', 'orderQty', e.target.value)}
            error={!!errors.orderQty}
            helperText={errors.orderQty}
            required
            sx={textFieldStyle}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>Total Value</Typography>
          <TextField
            disabled
            fullWidth
            type="number"
            value={orderdetails.totalValue || ''}
            InputProps={{ readOnly: true }}
            sx={{
              ...textFieldStyle,
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#F2F2F2',
                '&.Mui-disabled': {
                  color: 'black', // Set font color
                  WebkitTextFillColor: 'black', // Necessary to override default grey fill color in WebKit browsers
                },
              },
              '& .MuiInputBase-input.Mui-disabled': {
                WebkitTextFillColor: 'black', // Also target the input directly
              }
            }}
          />

        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Schedule Details
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={6}>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>Actual Delivered On</Typography>
          <TextField
            fullWidth
            type="date"
             error={!!errors.actualDeliveredOn}
            helperText={errors.actualDeliveredOn}
            value={scheduledetails.actualDeliveredOn}
            onChange={(e) => handleInputChange('scheduleDetails', 'actualDeliveredOn', e.target.value)}
            sx={textFieldStyle}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item size={Gridsize}>
             
          {/* {scheduledetails.isBufferdaysNeed && ( */}
            <>
              <div className='flex justify-between items-center'>
                <Typography {...labelStyle}>Buffer Days</Typography>
                 <FormControlLabel
                  control={
                  <Switch
                  size='small'
                  checked={scheduledetails.isBufferdaysNeed || false}
                  onChange={(e) => handleInputChange('scheduleDetails','isBufferdaysNeed', e.target.checked)}
                  />
                  }
                  label={
                        <Typography {...labelStyle}>
                          Enable Buffer
                        </Typography>
                      }
                  
                  />
              </div>
              <TextField
                fullWidth
                type="number"
                value={scheduledetails.bufferDays || ''}
                 disabled={!scheduledetails.isBufferdaysNeed}
                onChange={(e) => handleInputChange('scheduleDetails', 'bufferDays', e.target.value)}
                error={!!errors.bufferDays}
                helperText={errors.bufferDays}
                sx={{...textFieldStyle,
                   '& .MuiOutlinedInput-root': {
                     borderRadius: '8px',
                    '&.Mui-disabled': {
                      color: 'black', // Set font color
                      backgroundColor: '#F2F2F2',

                    },
                   }
                }}
              />
            </>
          {/* )} */}
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>Material Request Date</Typography>
          <TextField
            fullWidth
            type="date"
            value={scheduledetails.materialReqDate}
            onChange={(e) => handleInputChange('scheduleDetails', 'materialReqDate', e.target.value)}
            sx={textFieldStyle}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>Store Target Date</Typography>
          <TextField
            fullWidth
            type="date"
            value={scheduledetails.storeTargetDate}
            onChange={(e) => handleInputChange('scheduleDetails', 'storeTargetDate', e.target.value)}
            sx={textFieldStyle}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>IQC Target Date</Typography>
          <TextField
            fullWidth
            type="date"
            value={scheduledetails.iqcTargetDate}
            onChange={(e) => handleInputChange('scheduleDetails', 'iqcTargetDate', e.target.value)}
            sx={textFieldStyle}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>Purchase Target Date</Typography>
          <TextField
            fullWidth
            type="date"
            value={scheduledetails.purchaseTargetDate}
            onChange={(e) => handleInputChange('scheduleDetails', 'purchaseTargetDate', e.target.value)}
            sx={textFieldStyle}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item size={Gridsize}>
          <Typography {...labelStyle}>Moved to FG Date</Typography>
          <TextField
            fullWidth
            type="date"
            value={scheduledetails.movedToFgDate}
            onChange={(e) => handleInputChange('scheduleDetails', 'movedToFgDate', e.target.value)}
            sx={textFieldStyle}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlanDetailsForm;
import React, { useState } from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  IconButton,
  Collapse,
  Paper,
  Grid,
} from '@mui/material';
import { Add, Delete as DeleteIcon, ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import { buttonstyle1 } from '../../../../Style';

const MaterialDetailsForm = ({ materialDetails, onUpdate, onAdd, onDelete, errors }) => {
  const [expandedRow, setExpandedRow] = useState(null); // Tracks which row is expanded

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
    color: '#4B5563',
    mb: 0.5,
  };


  // Toggle row expansion
  const toggleExpand = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const handleAddMaterial = () => {
    const newMaterials = {
      materialName: '',
      quantity: null,
      uom: '',
    };
    onAdd(newMaterials);
    setExpandedRow(materialDetails.length); // Set the newly added row as expanded
  };

  return (
    <Box sx={{ p: 3 }}>
      <div className="flex items-center justify-between">
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#4B5563' }}>
          Material Details
        </Typography>
        <Button
          variant="outlined"
          onClick={handleAddMaterial}
          sx={{ ...buttonstyle1, display: 'flex', alignSelf: 'center', gap: 1 ,mb:1}}
        >
          <Add /> Add Material
        </Button>
      </div>

      <TableContainer component={Paper} sx={{ boxShadow: '0px 3px 6px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'rgba(240, 248, 255, 1)' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>S.No</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Material Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>UOM</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {materialDetails.map((material, index) => (
              <React.Fragment key={index}>
                <TableRow sx={{ backgroundColor: expandedRow === index ? '#f9f9f9' : 'white' }}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell sx={{ color: errors[index]?.materialName ? '#d32f2f' : 'inherit' }}>
                    {material.materialName || 'Enter Material'}
                    {errors[index]?.materialName && (
                      <Typography variant="caption" color="error" display="block">
                        {errors[index].materialName}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell sx={{ color: errors[index]?.quantity ? '#d32f2f' : 'inherit' }}>
                    {material.quantity || '-'}
                    {errors[index]?.quantity && (
                      <Typography variant="caption" color="error" display="block">
                        {errors[index].quantity}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell sx={{ color: errors[index]?.uom ? '#d32f2f' : 'inherit' }}>
                    {material.uom || '-'}
                    {errors[index]?.uom && (
                      <Typography variant="caption" color="error" display="block">
                        {errors[index].uom}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      color="error"
                      onClick={() => onDelete(index)}
                      sx={{ '&:hover': { backgroundColor: 'rgba(211, 47, 47, 0.1)' } }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => toggleExpand(index)}
                      sx={{
                        transform: expandedRow === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s',
                        '&:hover': { backgroundColor: 'rgba(132, 204, 22, 0.1)' },
                      }}
                    >
                      {expandedRow === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={6} style={{ padding: 0 }}>
                    <Collapse in={expandedRow === index} timeout="auto" unmountOnExit>
                      <Box sx={{ padding: 2, backgroundColor: 'rgba(240, 248, 255, 1)', borderRadius: '4px' }}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', color: '#4B5563' }}>
                          Material Details
                        </Typography>
                        <Grid container spacing={2}>
                          <Grid item size={{xs:12,md:4}}>
                            <Typography {...labelStyle}>Material Name</Typography>
                            <TextField
                              fullWidth
                              value={material.materialName}
                              onChange={(e) => onUpdate('materialDetails', 'materialName', e.target.value, index)}
                              error={!!errors[index]?.materialName}
                              helperText={errors[index]?.materialName}
                              sx={textFieldStyle}
                              required
                            />
                          </Grid>
                          <Grid item size={{xs:12,md:4}}>
                            <Typography {...labelStyle}>Quantity</Typography>
                            <TextField
                              fullWidth
                              type="number"
                              value={material.quantity || ''}
                              onChange={(e) =>
                                onUpdate(
                                  'materialDetails',
                                  'quantity',
                                  e.target.value === '' ? '' : parseFloat(e.target.value),
                                  index
                                )
                              }
                              error={!!errors[index]?.quantity}
                              helperText={errors[index]?.quantity}
                              sx={textFieldStyle}
                              required
                            />
                          </Grid>
                          <Grid item size={{xs:12,md:4}}>
                            <Typography {...labelStyle}>Unit of Measure</Typography>
                            <TextField
                              fullWidth
                              value={material.uom}
                              onChange={(e) => onUpdate('materialDetails', 'uom', e.target.value, index)}
                              error={!!errors[index]?.uom}
                              helperText={errors[index]?.uom}
                              sx={textFieldStyle}
                              required
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

      {materialDetails.length === 0 && (
        <Typography sx={{ mt: 2, color: errors?.general ? '#d32f2f' : '#757575',textAlign:"center" }}>
          {errors?.general || 'No materials added yet. Click "Add Material" to start.'}
        </Typography>
      )}
    </Box>
  );
};

export default MaterialDetailsForm;
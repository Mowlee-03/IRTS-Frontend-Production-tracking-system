import React, { useState } from 'react';
import { Button, TextField, MenuItem, Collapse, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Add, Edit, Delete, ExpandMore, ExpandLess } from '@mui/icons-material';
import { buttonstyle1, buttonstyle2 } from '../../../../Style';

const MaterialDetailsForm = ({ materialDetails, onUpdate, onAddOrUpdate, onDelete, errors }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newMaterial, setNewMaterial] = useState({ materialName: '', quantity: '', uom: '' });
  const [editIndex, setEditIndex] = useState(null);

  const uomOptions = ['kg', 'liter', 'unit', 'meter'];

  const handleInputChange = (field, value) => {
    setNewMaterial((prev) => ({ ...prev, [field]: value }));
    onUpdate('materialDetails', field, value, editIndex !== null ? editIndex : materialDetails.length);
  };

  const handleSubmit = () => {
    const success = onAddOrUpdate(newMaterial, editIndex);
    if (success) {
      setNewMaterial({ materialName: '', quantity: '', uom: '' });
      setEditIndex(null);
      setIsFormOpen(false);
    }
  };

  const handleEdit = (index) => {
    setNewMaterial(materialDetails[index]);
    setEditIndex(index);
    setIsFormOpen(true);
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Material Details</h2>
        <Button
          variant="contained"
          startIcon={isFormOpen ? <ExpandLess /> : <Add />}
          onClick={() => {
            setIsFormOpen(!isFormOpen);
            setNewMaterial({ materialName: '', quantity: '', uom: '' });
            setEditIndex(null);
          }}
          sx={buttonstyle1}
        >
          {isFormOpen ? 'Close Form' : 'Add Material'}
        </Button>
      </div>

      <Collapse in={isFormOpen}>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col gap-4">
          <TextField
            label="Material Name"
            value={newMaterial.materialName}
            onChange={(e) => handleInputChange('materialName', e.target.value)}
            error={!!errors[editIndex]?.materialName}
            helperText={errors[editIndex]?.materialName}
            fullWidth
            size="small"
          />
          <TextField
            label="Quantity"
            type="number"
            value={newMaterial.quantity}
            onChange={(e) => handleInputChange('quantity', e.target.value)}
            error={!!errors[editIndex]?.quantity}
            helperText={errors[editIndex]?.quantity}
            fullWidth
            size="small"
          />
          <TextField
            select
            label="Unit of Measure"
            value={newMaterial.uom}
            onChange={(e) => handleInputChange('uom', e.target.value)}
            error={!!errors[editIndex]?.uom}
            helperText={errors[editIndex]?.uom}
            fullWidth
            size="small"
          >
            {uomOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <div className="flex gap-2">
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={buttonstyle1}
            >
              {editIndex !== null ? 'Update Material' : 'Add Material'}
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setIsFormOpen(false);
                setNewMaterial({ materialName: '', quantity: '', uom: '' });
                setEditIndex(null);
              }}
              sx={buttonstyle2}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Collapse>

      <TableContainer component={Paper} className="shadow-sm">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Material Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit of Measure</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {materialDetails.length > 0 ? (
              materialDetails.map((material, index) => (
                <TableRow key={material.id || index}>
                  <TableCell>{material.materialName}</TableCell>
                  <TableCell>{material.quantity}</TableCell>
                  <TableCell>{material.uom}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleEdit(index)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => onDelete(index)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No materials added yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MaterialDetailsForm;
import React, { useState } from 'react';
import CustomeStepper from '../../components/common/CustomeStepper';
import { Box, Button, TextField } from '@mui/material';
import { Dock, Loader, MagnetIcon, PowerCircle } from 'lucide-react';

const SingleOrderAdding = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    planName: '',
    materialCode: '',
    processOwner: '',
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { label: 'Plan Details', icon: <Dock size={20} /> },
    { label: 'Material Details', icon: <MagnetIcon size={20} /> },
    { label: 'Process Details', icon: <PowerCircle size={20} /> },
    { label: 'Overview', icon: <Loader size={20} /> },
  ];

  const validateStep = () => {
    const stepErrors = {};

    if (activeStep === 0 && !formData.planName.trim()) {
      stepErrors.planName = 'Plan Name is required';
    }

    if (activeStep === 1 && !formData.materialCode.trim()) {
      stepErrors.materialCode = 'Material Code is required';
    }

    if (activeStep === 2 && !formData.processOwner.trim()) {
      stepErrors.processOwner = 'Process Owner is required';
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <TextField
            label="Plan Name"
            fullWidth
            value={formData.planName}
            onChange={(e) => setFormData({ ...formData, planName: e.target.value })}
            error={Boolean(errors.planName)}
            helperText={errors.planName}
            margin="normal"
          />
        );
      case 1:
        return (
          <TextField
            label="Material Code"
            fullWidth
            value={formData.materialCode}
            onChange={(e) => setFormData({ ...formData, materialCode: e.target.value })}
            error={Boolean(errors.materialCode)}
            helperText={errors.materialCode}
            margin="normal"
          />
        );
      case 2:
        return (
          <TextField
            label="Process Owner"
            fullWidth
            value={formData.processOwner}
            onChange={(e) => setFormData({ ...formData, processOwner: e.target.value })}
            error={Boolean(errors.processOwner)}
            helperText={errors.processOwner}
            margin="normal"
          />
        );
      case 3:
        return (
          <Box>
            <strong>Plan Name:</strong> {formData.planName} <br />
            <strong>Material Code:</strong> {formData.materialCode} <br />
            <strong>Process Owner:</strong> {formData.processOwner}
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <CustomeStepper steps={steps} activeStep={activeStep} />

      <Box mt={4}>{renderStepContent()}</Box>

      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default SingleOrderAdding;

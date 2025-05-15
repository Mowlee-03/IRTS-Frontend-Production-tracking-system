import React, { useState } from 'react';
import CustomeStepper from '../../components/common/CustomeStepper';
import { Button } from '@mui/material';
import { Dock, Loader, MagnetIcon, PowerCircle } from 'lucide-react';
import PlanDetailsForm from '../../components/productionUi/Forms/PlanDetailsForm';
import MaterialDetailsForm from '../../components/productionUi/Forms/MaterialDetailsForm';
import ProcessDetailsForm from '../../components/productionUi/Forms/ProcessDetailsForm';
import OverViewFormDetails from '../../components/productionUi/Forms/OverViewFormDetails';
import { buttonstyle1, buttonstyle2 } from '../../../Style';


const SingleOrderAdding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({});

  const [orderData, setOrderData] = useState({
    orderDetails: {
      kitNo: '',
      poNumber: '',
      poDate: '',
      soNumber: '',
      proNumber: '',
      itemName: '',
      bomKitName: '',
      customer: '',
      deliveryDate: '',
      itemValue: null,
      orderQty: null,
      totalValue: null,
    },
    scheduleDetails: {
      actualDeliveredOn: '',
      isBufferdaysNeed: false,
      bufferDays: null,
      materialReqDate: '',
      storeTargetDate: '',
      iqcTargetDate: '',
      purchaseTargetDate: '',
      movedToFgDate: '',
    },
    materialDetails: [],
    processDetails: [],
  });

  const steps = [
    { label: 'Plan Details', icon: <Dock size={20} /> },
    { label: 'Material Details', icon: <MagnetIcon size={20} /> },
    { label: 'Process Details', icon: <PowerCircle size={20} /> },
    { label: 'Overview', icon: <Loader size={20} /> },
  ];

  // Helper function to calculate actualDeliveredOn
  const calculateActualDeliveredOn = (deliveryDate, isBufferdaysNeed, bufferDays) => {
    if (!deliveryDate) return '';

    const date = new Date(deliveryDate);
    if (isNaN(date.getTime())) return '';

    if (isBufferdaysNeed && bufferDays !== null && !isNaN(bufferDays) && bufferDays >= 0) {
      date.setDate(date.getDate() - parseInt(bufferDays));
    }

    return date.toISOString().split('T')[0];
  };

  // Shared validation logic
  const validateForm = (data, options = { validateAll: false, field: null, section: null, materialIndex: null }) => {
    const { validateAll, field, section, materialIndex } = options;
    const newErrors = { ...errors };

    // Validate orderDetails
    if (!section || section === 'orderDetails') {
      const requiredFields = [
        'kitNo',
        'poNumber',
        'poDate',
        'soNumber',
        'proNumber',
        'itemName',
        'bomKitName',
        'customer',
        'deliveryDate',
        'itemValue',
        'orderQty',
      ];

      const fieldsToValidate = validateAll ? requiredFields : [field].filter(Boolean);
      fieldsToValidate.forEach((f) => {
        if (data.orderDetails[f] === '' || data.orderDetails[f] === null) {
          newErrors[f] = 'This field is required';
        } else if (f === 'itemValue' && (isNaN(data.orderDetails[f]) || data.orderDetails[f] <= 0)) {
          newErrors[f] = 'Must be a positive number';
        } else if (f === 'orderQty' && (isNaN(data.orderDetails[f]) || data.orderDetails[f] <= 0)) {
          newErrors[f] = 'Must be a positive integer';
        } else {
          delete newErrors[f];
        }
      });
    }

    // Validate scheduleDetails
    if (!section || section === 'scheduleDetails') {
      if (validateAll && data.scheduleDetails.actualDeliveredOn === '') {
        newErrors.actualDeliveredOn = 'This field is required';
      } else if (field === 'actualDeliveredOn') {
        delete newErrors.actualDeliveredOn;
      }

      if (
        (!section || section === 'scheduleDetails') &&
        (validateAll || field === 'bufferDays') &&
        data.scheduleDetails.isBufferdaysNeed
      ) {
        if (data.scheduleDetails.bufferDays === null || data.scheduleDetails.bufferDays === '') {
          newErrors.bufferDays = 'This field is required';
        } else if (isNaN(data.scheduleDetails.bufferDays) || data.scheduleDetails.bufferDays < 0) {
          newErrors.bufferDays = 'Must be a non-negative number';
        } else {
          delete newErrors.bufferDays;
        }
      } else if (field === 'isBufferdaysNeed' && !data.scheduleDetails.isBufferdaysNeed) {
        delete newErrors.bufferDays;
      }
    }

    // Validate materialDetails
    if (!section || section === 'materialDetails') {
      const materialErrors = {};
      if (validateAll) {
        data.materialDetails.forEach((material, index) => {
          const errorsForMaterial = {};
          if (!material.materialName) errorsForMaterial.materialName = 'Material Name is required';
          if (!material.quantity || isNaN(material.quantity) || material.quantity <= 0) {
            errorsForMaterial.quantity = 'Quantity must be a positive number';
          }
          if (!material.uom) errorsForMaterial.uom = 'Unit of Measure is required';
          if (Object.keys(errorsForMaterial).length > 0) {
            materialErrors[index] = errorsForMaterial;
          }
        });
      } else if (section === 'materialDetails' && materialIndex !== null) {
        const material = data.materialDetails[materialIndex] || { materialName: '', quantity: '', uom: '' };
        if (field === 'materialName' && !material.materialName) {
          materialErrors[materialIndex] = { ...materialErrors[materialIndex], materialName: 'Material Name is required' };
        } else if (field === 'quantity' && (!material.quantity || isNaN(material.quantity) || material.quantity <= 0)) {
          materialErrors[materialIndex] = { ...materialErrors[materialIndex], quantity: 'Quantity must be a positive number' };
        } else if (field === 'uom' && !material.uom) {
          materialErrors[materialIndex] = { ...materialErrors[materialIndex], uom: 'Unit of Measure is required' };
        } else {
          materialErrors[materialIndex] = { ...materialErrors[materialIndex], [field]: undefined };
        }
      }
      newErrors.materialDetails = materialErrors;
      if (Object.keys(materialErrors).length === 0) {
        delete newErrors.materialDetails;
      }
    }

    return newErrors;
  };

  // Handle form input changes
  const handleFormUpdate = (section, field, value, materialIndex = null) => {
    let updatedData = { ...orderData };

    if (section === 'materialDetails' && materialIndex !== null) {
      const updatedMaterials = [...orderData.materialDetails];
      updatedMaterials[materialIndex] = { ...updatedMaterials[materialIndex], [field]: value };
      updatedData = {
        ...orderData,
        materialDetails: updatedMaterials,
      };
    } else {
      updatedData = {
        ...orderData,
        [section]: {
          ...orderData[section],
          [field]: value,
        },
      };
    }

    // Calculate totalValue
    if (section === 'orderDetails' && (field === 'itemValue' || field === 'orderQty')) {
      const itemValue = field === 'itemValue' ? value : orderData.orderDetails.itemValue;
      const orderQty = field === 'orderQty' ? value : orderData.orderDetails.orderQty;
      updatedData.orderDetails.totalValue =
        itemValue && orderQty && !isNaN(itemValue) && !isNaN(orderQty)
          ? parseFloat(itemValue) * parseInt(orderQty)
          : null;
    }

    // Handle actualDeliveredOn
    if (
      (section === 'orderDetails' && field === 'deliveryDate') ||
      (section === 'scheduleDetails' && (field === 'isBufferdaysNeed' || field === 'bufferDays'))
    ) {
      const deliveryDate = section === 'orderDetails' && field === 'deliveryDate'
        ? value
        : orderData.orderDetails.deliveryDate;
      const isBufferdaysNeed = section === 'scheduleDetails' && field === 'isBufferdaysNeed'
        ? value
        : orderData.scheduleDetails.isBufferdaysNeed;
      const bufferDays = section === 'scheduleDetails' && field === 'bufferDays'
        ? value
        : orderData.scheduleDetails.bufferDays;

      updatedData.scheduleDetails.actualDeliveredOn = calculateActualDeliveredOn(
        deliveryDate,
        isBufferdaysNeed,
        bufferDays
      );
    }

    // Clear bufferDays when isBufferdaysNeed is false
    if (section === 'scheduleDetails' && field === 'isBufferdaysNeed' && value === false) {
      updatedData.scheduleDetails.bufferDays = null;
    }

    setOrderData(updatedData);

    // Validate the changed field
    const fieldErrors = validateForm(updatedData, { field, section, materialIndex });
    setErrors(fieldErrors);
  };

  // Handle material add/edit
  const handleMaterialAddOrUpdate = (material, index = null) => {
    const updatedMaterials = [...orderData.materialDetails];
    if (index !== null) {
      updatedMaterials[index] = material;
    } else {
      updatedMaterials.push({ ...material, id: index+1 });
    }
    const updatedData = { ...orderData, materialDetails: updatedMaterials };
    setOrderData(updatedData);

    const fieldErrors = validateForm(updatedData, { validateAll: true, section: 'materialDetails' });
    setErrors(fieldErrors);
    return Object.keys(fieldErrors.materialDetails || {}).length === 0;
  };

  // Handle material delete
  const handleMaterialDelete = (index) => {
    const updatedMaterials = orderData.materialDetails.filter((_, i) => i !== index);
    const updatedData = { ...orderData, materialDetails: updatedMaterials };
    setOrderData(updatedData);

    const fieldErrors = validateForm(updatedData, { validateAll: true, section: 'materialDetails' });
    setErrors(fieldErrors);
  };

  // Validate entire step
  const validateStep = () => {
    const stepErrors = validateForm(orderData, { validateAll: true });
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prev) => prev + 1);
      setErrors({});
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
    setErrors({});
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <PlanDetailsForm
            orderdetails={orderData.orderDetails}
            scheduledetails={orderData.scheduleDetails}
            onUpdate={handleFormUpdate}
            errors={errors}
          />
        );
      case 1:
        return (
          <MaterialDetailsForm
            materialDetails={orderData.materialDetails}
            onUpdate={handleFormUpdate}
            onAddOrUpdate={handleMaterialAddOrUpdate}
            onDelete={handleMaterialDelete}
            errors={errors.materialDetails || {}}
          />
        );
      case 2:
        return <ProcessDetailsForm />;
      case 3:
        return <OverViewFormDetails />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-3 h-[88vh]">
      <div className="bg-white rounded-xl py-3 h-[15%] flex items-center justify-center shadow-bg-shadow-2">
        <CustomeStepper steps={steps} activeStep={activeStep} />
      </div>
      <div className="bg-white flex-1 overflow-auto rounded-xl shadow-bg-shadow-2">
        {renderStepContent()}
      </div>
      <div className="p-2 bg-white rounded-xl shadow-bg-shadow-2 flex justify-between gap-4">
        <Button
          sx={buttonstyle2}
          variant="contained"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          sx={buttonstyle1}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SingleOrderAdding;
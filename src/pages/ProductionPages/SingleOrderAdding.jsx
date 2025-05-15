import React, { useEffect, useState, useCallback } from 'react';
import { Button } from '@mui/material';
import { Dock, Loader, MagnetIcon, PowerCircle } from 'lucide-react';
import CustomeStepper from '../../components/common/CustomeStepper';
import PlanDetailsForm from '../../components/productionUi/Forms/PlanDetailsForm';
import MaterialDetailsForm from '../../components/productionUi/Forms/MaterialDetailsForm';
import ProcessDetailsForm from '../../components/productionUi/Forms/ProcessDetailsForm';
import OverViewFormDetails from '../../components/productionUi/Forms/OverViewFormDetails';
import { buttonstyle1, buttonstyle2 } from '../../../Style';




const SingleOrderAdding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

  console.log(orderData);
  
  const steps = [
    { label: 'Plan Details', icon: <Dock size={20} /> },
    { label: 'Material Details', icon: <MagnetIcon size={20} /> },
    { label: 'Process Details', icon: <PowerCircle size={20} /> },
    { label: 'Overview', icon: <Loader size={20} /> },
  ];



  // Calculate actualDeliveredOn
  const calculateActualDeliveredOn = useCallback((deliveryDate, isBufferdaysNeed, bufferDays) => {
    // Validate deliveryDate
    if (!deliveryDate || typeof deliveryDate !== 'string' || deliveryDate.trim() === '') {
      return '';
    }

    const date = new Date(deliveryDate);
    if (isNaN(date.getTime())) {
      return '';
    }

    if (isBufferdaysNeed && bufferDays !== null && !isNaN(bufferDays) && bufferDays >= 0) {
      const parsedBufferDays = parseInt(bufferDays);
      // Limit bufferDays to a reasonable value (e.g., 1000 days)
      if (parsedBufferDays > 1000) {
        return ''; // Or set an error state if needed
      }
      date.setDate(date.getDate() - parsedBufferDays);
      if (isNaN(date.getTime())) {
        return ''; // Return empty if the resulting date is invalid
      }
    }

    return date.toISOString().split('T')[0];
  }, []);

  // Validate step data
  const validateStep = useCallback((stepIndex, data) => {
    const newErrors = {};

    if (stepIndex === 0) {
      const orderRequiredFields = [
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
      orderRequiredFields.forEach((field) => {
        if (!data.orderDetails[field]) {
          newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} is required`;
        } else if (field === 'itemValue' && (isNaN(data.orderDetails[field]) || data.orderDetails[field] <= 0)) {
          newErrors[field] = 'Item value must be a positive number';
        } else if (field === 'orderQty' && (isNaN(data.orderDetails[field]) || data.orderDetails[field] <= 0)) {
          newErrors[field] = 'Order quantity must be a positive integer';
        } else if (field === 'poDate' || field === 'deliveryDate') {
          const date = new Date(data.orderDetails[field]);
          if (isNaN(date.getTime())) {
            newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} is invalid`;
          }
        }
      });

      // Validate date sequence
      const poDate = new Date(data.orderDetails.poDate);
      const deliveryDate = new Date(data.orderDetails.deliveryDate);
      if (
        poDate &&
        deliveryDate &&
        !isNaN(poDate.getTime()) &&
        !isNaN(deliveryDate.getTime()) &&
        poDate > deliveryDate
      ) {
        newErrors.poDate = 'PO date must be before delivery date';
      }

      if (data.scheduleDetails.isBufferdaysNeed) {
        if (!data.scheduleDetails.bufferDays) {
          newErrors.bufferDays = 'Buffer days is required when buffer is needed';
        } else if (isNaN(data.scheduleDetails.bufferDays) || data.scheduleDetails.bufferDays < 0) {
          newErrors.bufferDays = 'Buffer days must be a non-negative number';
        } else if (data.scheduleDetails.bufferDays > 1000) {
          newErrors.bufferDays = 'Buffer days cannot exceed 1000';
        }
      }

      if (!data.scheduleDetails.actualDeliveredOn && data.orderDetails.deliveryDate) {
        newErrors.actualDeliveredOn = 'Actual delivery date is required';
      }
    }

    if (stepIndex === 1) {
      if (!data.materialDetails.length) {
        newErrors.materialDetails = { general: 'At least one material must be added' };
      } else {
        newErrors.materialDetails = {};
        data.materialDetails.forEach((material, index) => {
          const materialErrors = {};
          if (!material.materialName) {
            materialErrors.materialName = 'Material name is required';
          }
          if (!material.quantity || isNaN(material.quantity) || material.quantity <= 0) {
            materialErrors.quantity = 'Required quantity must be a positive number';
          }
          if (!material.uom) {
            materialErrors.uom = 'Unit is required';
          }

          if (Object.keys(materialErrors).length > 0) {
            newErrors.materialDetails[index] = materialErrors;
          }
        });

        // Clean up if no errors in materials
        if (Object.keys(newErrors.materialDetails).length === 0) {
          delete newErrors.materialDetails;
        }
      }
    }

    if (stepIndex === 2) {
    if (!data.processDetails.length) {
      newErrors.processDetails = { general: 'At least one process must be added' };
    } else {
      newErrors.processDetails = {};
      data.processDetails.forEach((process, index) => {
        const processErrors = {};
        if (!process.processName) {
          processErrors.processName = 'Process name is required';
        }
        if (!process.workCenter) {
          processErrors.workCenter = 'Work center is required';
        }
        if (!process.operator) {
          processErrors.operator = 'Operator is required';
        }

        if (Object.keys(processErrors).length > 0) {
          newErrors.processDetails[index] = processErrors;
        }
      });

      // Clean up if no errors in processes
      if (Object.keys(newErrors.processDetails).length === 0) {
        delete newErrors.processDetails;
      }
    }
  }
    return newErrors;
  }, []);

  // Handle form updates
  const handleFormUpdate = useCallback(
    (section, field, value, materialIndex = null, processIndex = null) => {
      setOrderData((prevData) => {
        let updatedData = { ...prevData };

        if (section === 'materialDetails' && materialIndex !== null) {
          const updatedMaterials = [...prevData.materialDetails];
          updatedMaterials[materialIndex] = { ...updatedMaterials[materialIndex], [field]: value };
          updatedData.materialDetails = updatedMaterials;
        } else if (section === 'processDetails' && processIndex !== null) {
        
          
          const updatedProcesses = [...prevData.processDetails];
          updatedProcesses[processIndex] = { ...updatedProcesses[processIndex], [field]: value };

          
          updatedData.processDetails = updatedProcesses;
        } else {
          updatedData[section] = { ...prevData[section], [field]: value };
        }

        // Calculate totalValue
        if (section === 'orderDetails' && (field === 'itemValue' || field === 'orderQty')) {
          const itemValue = field === 'itemValue' ? value : prevData.orderDetails.itemValue;
          const orderQty = field === 'orderQty' ? value : prevData.orderDetails.orderQty;
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
          const deliveryDate =
            section === 'orderDetails' && field === 'deliveryDate'
              ? value
              : prevData.orderDetails.deliveryDate;
          const isBufferdaysNeed =
            section === 'scheduleDetails' && field === 'isBufferdaysNeed'
              ? value
              : prevData.scheduleDetails.isBufferdaysNeed;
          const bufferDays =
            section === 'scheduleDetails' && field === 'bufferDays'
              ? value
              : prevData.scheduleDetails.bufferDays;

          // Validate deliveryDate before calculation
          if (deliveryDate && typeof deliveryDate === 'string' && deliveryDate.trim() !== '') {
            const testDate = new Date(deliveryDate);
            if (!isNaN(testDate.getTime())) {
              updatedData.scheduleDetails.actualDeliveredOn = calculateActualDeliveredOn(
                deliveryDate,
                isBufferdaysNeed,
                bufferDays
              );
            } else {
              console.warn('Invalid deliveryDate:', deliveryDate);
              updatedData.scheduleDetails.actualDeliveredOn = '';
            }
          } else {
            console.warn('Empty or invalid deliveryDate:', deliveryDate);
            updatedData.scheduleDetails.actualDeliveredOn = '';
          }
        }

        // Clear bufferDays when isBufferdaysNeed is false
        if (section === 'scheduleDetails' && field === 'isBufferdaysNeed' && value === false) {
          updatedData.scheduleDetails.bufferDays = null;
        }

        // Validate updated data
        const stepErrors = validateStep(activeStep, updatedData);
        setErrors(stepErrors);

        return updatedData;
      });
    },
    [activeStep, calculateActualDeliveredOn, validateStep]
  );

  // Add Material
const addMaterial = (newMaterial) => {
  setOrderData((prev) => ({
    ...prev,
    materialDetails: [ ...prev.materialDetails,newMaterial],
  }));
};

// Delete Material by index
// Delete Material by index
const deleteMaterial = (index) => {
  setOrderData((prev) => {
    const updatedMaterials = prev.materialDetails.filter((_, i) => i !== index);
    const updatedData = {
      ...prev,
      materialDetails: updatedMaterials,
    };

    // Revalidate the updated materialDetails
    const stepErrors = validateStep(activeStep, updatedData);
    setErrors(stepErrors);

    return updatedData;
  });
};

// Add Process
const addProcess = (newProcess) => {
  setOrderData((prev) => ({
    ...prev,
    processDetails: [...prev.processDetails, newProcess],
  }));
};

// Delete Process by index
// Delete Process by index
const deleteProcess = (index) => {
  setOrderData((prev) => {
    const updatedProcesses = prev.processDetails.filter((_, i) => i !== index);
    const updatedData = {
      ...prev,
      processDetails: updatedProcesses,
    };

    // Revalidate the updated processDetails
    const stepErrors = validateStep(activeStep, updatedData);
    setErrors(stepErrors);

    return updatedData;
  });
};
  // Handle step navigation
  const handleNext = () => {
    const stepErrors = validateStep(activeStep, orderData);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length === 0) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
    setErrors({});
  };

  const handleSave = () => {
  console.log('Saving order:', orderData);
    // TODO: Implement API call
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <PlanDetailsForm
            orderDetails={orderData.orderDetails}
            scheduleDetails={orderData.scheduleDetails}
            onUpdate={handleFormUpdate}
            errors={errors}
          />
        );
      case 1:
        return (
          <MaterialDetailsForm
            materialDetails={orderData.materialDetails}
            onUpdate={handleFormUpdate}
            onAdd={addMaterial}
            onDelete={deleteMaterial}
            errors={errors.materialDetails || {}}
          />
        );
      case 2:
        return (
          <ProcessDetailsForm
            processDetails={orderData.processDetails||[]}
            onUpdate={handleFormUpdate}
            onAdd={addProcess}
            onDelete={deleteProcess}
            errors={errors.processDetails || {}}
          />
        );
      case 3:
        return <OverViewFormDetails orderData={orderData} />;
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
        <Button sx={buttonstyle2} variant="contained" disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button variant="contained" onClick={handleSave} disabled={loading} sx={buttonstyle1}>
            {loading ? 'Saving...' : 'Save'}
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
            sx={buttonstyle1}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default SingleOrderAdding;
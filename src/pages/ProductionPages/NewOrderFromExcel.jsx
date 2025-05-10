import React, { useEffect, useState } from 'react';
import { getWithExpiry } from '../../utils/localstorageWithExpiry';
import { Button } from '@mui/material';
import { buttonstyle1 } from '../../../Style';
import Loader from '../../components/common/Loader';
import { useProductionDialog } from '../../context/ProductionDialogContext';

const NewOrderFromExcel = () => {
  const [loading, setLoading] = useState(true);
  const [orderTemplate, setOrderTemplate] = useState(null);
  const {openDialog,}=useProductionDialog()
  useEffect(() => {
    const timer = setTimeout(() => {
      const data = getWithExpiry('Order Template');
      setOrderTemplate(data);
      setLoading(false);
    }, 1000); // Simulate loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full bg-white p-4 shadow-bg-shadow-2 rounded-xl">
      {loading ? (
        <Loader />
      ) : !orderTemplate ? (
        <div className="h-full flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">No Data Available</h2>
          <p className="text-gray-500 mb-6">Please upload an Excel file to continue.</p>
          <Button 
          sx={buttonstyle1}
          onClick={openDialog}
          >
            Upload Excel File
          </Button>
        </div>
      ) : (
        // Put your actual orderTemplate rendering logic here
        <div>
            <h2 className="text-lg font-bold text-green-700">Order Template Found</h2>
            <pre className="bg-gray-100 p-4 mt-2 rounded">{JSON.stringify(orderTemplate, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default NewOrderFromExcel;

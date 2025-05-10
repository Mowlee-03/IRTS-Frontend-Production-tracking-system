import React, { useEffect, useState } from 'react';
import { getWithExpiry } from '../../utils/localstorageWithExpiry';
import { Button, Stack } from '@mui/material';
import { buttonstyle1 } from '../../../Style';
import Loader from '../../components/common/Loader';
import { useProductionDialog } from '../../context/ProductionDialogContext';
import { RefreshCcw } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SimpleDataTable from '../../components/common/SimpleDataTable';

const NewOrderFromExcel = () => {
  const [loading, setLoading] = useState(true);
  const [orderTemplate, setOrderTemplate] = useState(null);
  const {openDialog,setEntryMethod,setShowFileUpload}=useProductionDialog()
  const location = useLocation();
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  
  useEffect(() => {
  const timer = setTimeout(() => {
    const data = getWithExpiry('Order Template');
    setOrderTemplate(data);
    console.log(data);
    
    if (data?.value?.length > 0) {
      const sample = data.value[0];
      const generatedColumns = Object.keys(sample).map(key => ({
        field: key,
        headerName: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
        width:180
      }));
      const generatedRows = data.value.map((row, index) => ({
        id: index + 1,
        ...row
      }));
      setColumns(generatedColumns);
      setRows(generatedRows);
    }

    setLoading(false);
  }, 300);

  return () => clearTimeout(timer);
}, [location.search]);

  const handlefallback=()=>{
    openDialog()
    setEntryMethod("manual")
    setShowFileUpload(true)
  }

  const CustomToolbar=()=>{
    return(
      <div className=' flex justify-between items-center p-5'>
        <p>Order Preview</p>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ gap: 1 }}
        >
          <Button>
            Preview Selected
          </Button>
        </Stack>
      </div>
    )
  }
  return (
    <div className="h-full bg-white  shadow-bg-shadow-2 rounded-xl">
      {loading ? (
        <Loader />
      ) : !orderTemplate ? (
        <div className="h-full flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">No Data Available</h2>
          <p className="text-gray-500 mb-6">Please upload an Excel file to continue.</p>
          <Button 
          sx={buttonstyle1}
          onClick={handlefallback}
          >
            <RefreshCcw/> Upload Excel File
          </Button>
        </div>
      ) : (
        // Put your actual orderTemplate rendering logic here
        <div className='h-full'>
          <SimpleDataTable 
            columns={columns} 
            rows={rows} 
            CustomToolbar={CustomToolbar}  
            checkboxSelection
            disableRowSelectionOnClick
           />
        </div>
      )}
    </div>
  );
};

export default NewOrderFromExcel;

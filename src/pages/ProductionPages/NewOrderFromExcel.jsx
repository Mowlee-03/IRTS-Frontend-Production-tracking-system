import React, { useEffect, useState } from 'react';
import { getWithExpiry } from '../../utils/localstorageWithExpiry';
import { Button, IconButton, Stack } from '@mui/material';
import { buttonstyle1 } from '../../../Style';
import Loader from '../../components/common/Loader';
import { useProductionDialog } from '../../context/ProductionDialogContext';
import { RefreshCcw } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SimpleDataTable from '../../components/common/SimpleDataTable';
import RestoreIcon from '@mui/icons-material/Restore';
import DeleteConfirmationModal from '../../components/common/DeleteConfirmation';
const NewOrderFromExcel = () => {
  const [loading, setLoading] = useState(true);
  const [orderTemplate, setOrderTemplate] = useState(null);
  const {openDialog,setEntryMethod,setShowFileUpload}=useProductionDialog()
  const location = useLocation();
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // For Modal
  const [itemName, setItemName] = useState(''); // For modal item name
  
  useEffect(() => {
  const timer = setTimeout(() => {
    const data = getWithExpiry('Order Template');
    setOrderTemplate(data);
    
    if (data?.value?.length > 0) {
      const sample = data.value[0];
      const generatedColumns = Object.keys(sample).map(key => ({
        field: key,
        headerName: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
        width:180
      }));
      const generatedRows = data.value
      setColumns(generatedColumns);
      setRows(generatedRows);
    }

    setLoading(false);
  }, 200);

  return () => clearTimeout(timer);
}, [location.search]);

  const handlefallback=()=>{
    openDialog()
    setEntryMethod("manual")
    setShowFileUpload(true)
  }

    const handleReuploadClick = () => {
    // Set the item name for the modal (or any specific item)
    setItemName('Order Template');
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Remove local storage value and reset the state
    localStorage.removeItem('Order Template');
    setOrderTemplate(null);
    setIsModalOpen(false);
    // Optionally, trigger any re-render or state update here
  };
  const CustomToolbar=()=>{
    return(
      <div className=' flex justify-between items-center p-5'>
        <p className='text-xl font-medium'>Order Preview</p>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ gap: 1 }}
        > 
        <Button 
          onClick={handleReuploadClick}
          sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:1,
            bgcolor:"#FFE6E6",
            color:"#EF4444",
            // borderRadius:2,
            py:1,
            px:2
          }}
          >
              <RestoreIcon sx={{color:""}}/>Re Upload
          </Button>
          <Button 
          sx={buttonstyle1}
          >
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

       <DeleteConfirmationModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        itemName={itemName}
        itemType='local value'
      />
    </div>
  );
};

export default NewOrderFromExcel;

import React, { useEffect, useState } from 'react';
import { getWithExpiry, storeWithExpiry } from '../../utils/localstorageWithExpiry';
import { Button, IconButton, Stack } from '@mui/material';
import { buttonstyle1 } from '../../../Style';
import Loader from '../../components/common/Loader';
import { useProductionDialog } from '../../context/ProductionDialogContext';
import { RefreshCcw } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import SimpleDataTable from '../../components/common/SimpleDataTable';
import RestoreIcon from '@mui/icons-material/Restore';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteConfirmationModal from '../../components/common/DeleteConfirmation';
import { useDispatch } from 'react-redux';
import { showSnackbar } from '../../Redux/Slice/SnackbarSlice';
import { RemoveFromSession, StoreInSession } from '../../utils/SessionStorage';
const NewOrderFromExcel = () => {
  const [loading, setLoading] = useState(true);
  const [orderTemplate, setOrderTemplate] = useState(null);
  const {openDialog,setEntryMethod,setShowFileUpload}=useProductionDialog()
  const location = useLocation();
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // For Modal
  const [itemName, setItemName] = useState(''); // For modal item name
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(() => {
    // localStorage.removeItem("SelectedOrderIds")
    RemoveFromSession("SelectedOrderIds")
    RemoveFromSession("OrderSource")
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
    setItemName('Order Template');
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    localStorage.removeItem('Order Template');
    setOrderTemplate(null);
    setIsModalOpen(false);
  };

  const handleSelectionChange = (newSelection) => {
    let selectedIds = [];
    try {
      if (newSelection && newSelection.type === 'include' && newSelection.ids instanceof Set) {
        selectedIds = Array.from(newSelection.ids); // Convert Set to array
      } else if (Array.isArray(newSelection)) {
        selectedIds = newSelection; // Already an array
      } else {
        console.warn('Unexpected selection model:', newSelection);
      }
     
      setSelectedRowIds(selectedIds);
    } catch (error) {
      console.error('Error in handleSelectionChange:', error);
      setSelectedRowIds([]);
    }
  };

  const handlePreviewSelection=()=>{
    if (selectedRowIds.length > 0) {
     
      console.log('Storing selectedIds:', selectedRowIds); 

      // storeWithExpiry('SelectedOrderIds', selectedRowIds, 24);
      StoreInSession("OrderSource",'excel')
      StoreInSession("SelectedOrderIds",JSON.stringify(selectedRowIds))
      navigate('/production/new_orders/preview');
    } else {
      dispatch(showSnackbar({message:'Please select at least one order to preview.',severity:"warning"}));
    }
  }
  const CustomToolbar=()=>{
    return(
      <div className=' flex justify-between md:items-center p-3 md:p-5 gap-3 md:gap-0 flex-col md:flex-row'>
        <p className='text-xl font-medium text-start'>Excel Uploaded Order</p>
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
          sx={{...buttonstyle1,display:"flex",gap:1,alignItems:"center",justifyContent:"center"}}
          onClick={handlePreviewSelection}
          
          >
            <RemoveRedEyeIcon/>
            Preview Selected
          </Button>
        </Stack>
      </div>
    )
  }
  return (
    <div className="h-full py-4 rounded-xl">
      {loading ? (
       <div className='h-full flex justify-center items-center'>
         <Loader />
       </div>
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
            // disableRowSelectionOnClick
            onRowSelectionModelChange={handleSelectionChange}
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

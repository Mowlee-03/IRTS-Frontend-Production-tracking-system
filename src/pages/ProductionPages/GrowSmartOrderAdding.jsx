import React, { useEffect, useState } from 'react';
import { Button, IconButton, Stack } from '@mui/material';
import { buttonstyle1, SearchQuickFilter } from '../../../Style';
import Loader from '../../components/common/Loader';
import { useProductionDialog } from '../../context/ProductionDialogContext';
import { RefreshCcw } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import SimpleDataTable from '../../components/common/SimpleDataTable';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch } from 'react-redux';
import { showSnackbar } from '../../Redux/Slice/SnackbarSlice';
import { RemoveFromSession, StoreInSession } from '../../utils/SessionStorage';
import { GrowsmartData } from '../../Redux/Store/mockdata';
import { GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid';
const GrowSmartOrderAdding = () => {
  const [loading, setLoading] = useState(true);
  const [orderTemplate, setOrderTemplate] = useState(null);
  const {openDialog,setEntryMethod,setShowFileUpload}=useProductionDialog()
  const location = useLocation();
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const navigate=useNavigate()
  const dispatch=useDispatch()

useEffect(() => {
  RemoveFromSession("SelectedOrderIds");
  RemoveFromSession("OrderSource");

//  const isSynced = Cookies.get('growsmart_synced') === 'true';
    const isSynced = true

    const timer = setTimeout(() => {
        if (isSynced && GrowsmartData.length > 0) {
        const sample = GrowsmartData[0];
        const generatedColumns = Object.keys(sample).map(key => ({
            field: key,
            headerName: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
            width: 180,
        }));
        setColumns(generatedColumns);
        setRows(GrowsmartData);
        setOrderTemplate({ value: GrowsmartData });
        } else {
        setOrderTemplate(null);
        }

        setLoading(false);
    }, 300);

  return () => clearTimeout(timer);
}, [location.search]);

  const handlefallback=()=>{
    openDialog()
    setEntryMethod("growsmart")
    setShowFileUpload(false)
  }


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
      StoreInSession("OrderSource",'growsmart')
      StoreInSession("SelectedOrderIds",JSON.stringify(selectedRowIds))
      navigate('/production/new_orders/preview');
    } else {
      dispatch(showSnackbar({message:'Please select at least one order to preview.',severity:"warning"}));
    }
  }
  const CustomToolbar=()=>{
    return(
        <GridToolbarContainer 
          sx={{ justifyContent: 'space-between', display: 'flex', padding: '16px' }}
        >
            <p className='text-xl font-medium'>Growsmart Orders</p>
            <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ gap: 1 }}
            > 
                <GridToolbarQuickFilter
                sx={SearchQuickFilter}
                />
            <Button 
            sx={{...buttonstyle1,display:"flex",gap:1,alignItems:"center",justifyContent:"center"}}
            onClick={handlePreviewSelection}
            
            >
                <RemoveRedEyeIcon/>
                Preview Selected
            </Button>
            </Stack>
        </GridToolbarContainer>
     
    )
  }
  return (
    <div className="h-full py-4 ">
      {loading ? (
       <div className='h-full flex justify-center items-center'>
         <Loader />
       </div>
      ) : !orderTemplate ? (
        <div className="h-full flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">No Data Available</h2>
          <p className="text-gray-500 mb-6">Please Sync Growsmart Then Get Data</p>
          <Button 
          sx={buttonstyle1}
          onClick={handlefallback}
          >
            <RefreshCcw/> Sync
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


    </div>
  );
};

export default GrowSmartOrderAdding;

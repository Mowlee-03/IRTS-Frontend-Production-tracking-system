import {
  Typography,
  Divider,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  useMediaQuery,
  TextField,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function OrderOverview({ orderData }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    orderDetails,
    scheduleDetails,
    materialDetails,
    processDetails,
  } = orderData;

  const keylabelForOrderDetails={
      kitNo: 'Kit No',
      poNumber: 'PO Number',
      poDate: 'PO Date',
      soNumber: 'SO Number',
      proNumber: 'PRO Number',
      itemName: 'Item Name',
      bomKitName: 'Bom Kit Name',
      customer: 'Customer',
      deliveryDate: 'Delivery Date',
      itemValue: 'Item Value',
      orderQty: 'Order Qty',
      totalValue: 'Total Value',
  }
  const labelStyle = {
    variant: 'subtitle2',
    fontWeight: 500,
    color: '#424242',
    mb: 0.5,
  };
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Order Details */}
    
        <div>
          <Typography variant="h6" gutterBottom className='text-sky-600'>Order Details</Typography>
          <Divider sx={{mb:2}} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(orderDetails).map(([key, value]) => (
              <div key={key}>
                <Typography {...labelStyle}>{keylabelForOrderDetails[key]}</Typography>
                <TextField 
                sx={{
                  '& .MuiInputBase-input': {
                      overflowX: 'auto',
                    }
                }}
                className='bg-gray-50'
                  size='small'
                  fullWidth
                  disabled
                  value={value || '-'}
                />
              </div>
            ))}
          </div>
        </div>
     
        <div>
          <Typography variant="h6" gutterBottom className='text-sky-600'>Schedule Details</Typography>
            <Divider sx={{mb:2}} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <Typography variant="caption" color="textSecondary">Actual Delivered On</Typography>
              <Typography>{scheduleDetails.actualDeliveredOn || '-'}</Typography>
            </div>
            <div>
              <Typography variant="caption" color="textSecondary">Material Required Date</Typography>
              <Typography>{scheduleDetails.materialReqDate || '-'}</Typography>
            </div>
            <div>
              <Typography variant="caption" color="textSecondary">Store Target Date</Typography>
              <Typography>{scheduleDetails.storeTargetDate || '-'}</Typography>
            </div>
            <div>
              <Typography variant="caption" color="textSecondary">IQC Target Date</Typography>
              <Typography>{scheduleDetails.iqcTargetDate || '-'}</Typography>
            </div>
            <div>
              <Typography variant="caption" color="textSecondary">Purchase Target Date</Typography>
              <Typography>{scheduleDetails.purchaseTargetDate || '-'}</Typography>
            </div>
            <div>
              <Typography variant="caption" color="textSecondary">Moved to FG Date</Typography>
              <Typography>{scheduleDetails.movedToFgDate || '-'}</Typography>
            </div>
            <div>
              <Typography variant="caption" color="textSecondary">Buffer Days Needed?</Typography>
              <Typography>{scheduleDetails.isBufferdaysNeed ? 'Yes' : 'No'}</Typography>
            </div>
            {scheduleDetails.isBufferdaysNeed && (
              <div>
                <Typography variant="caption" color="textSecondary">Buffer Days</Typography>
                <Typography>{scheduleDetails.bufferDays || '-'}</Typography>
              </div>
            )}
          </div>
        </div>
     

      {/* Material Details Table */}
 
        <div>
          <Typography variant="h6" gutterBottom className='text-sky-600'>Material Details</Typography>
          {/* <Divider className="mb-4" /> */}
          <div className="overflow-x-auto">
            <Table size="small">
              <TableHead className='bg-gray-100'>
                <TableRow>
                  <TableCell>Material Name</TableCell>
                  <TableCell sx={{textAlign:"center"}}>Quantity</TableCell>
                  <TableCell sx={{textAlign:"center"}}>UOM</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {materialDetails.length > 0 ? (
                  materialDetails.map((mat, index) => (
                    <TableRow  key={index}>
                      <TableCell sx={{py:2}}>{mat.materialName || '-'}</TableCell>
                      <TableCell sx={{textAlign:"center",py:2}}>{mat.quantity ?? '-'}</TableCell>
                      <TableCell sx={{textAlign:"center",py:2}}>{mat.uom || '-'}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} align="center">No material details</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
   

      {/* Process Details Table */}
     
        <div>
          <Typography variant="h6" gutterBottom className='text-sky-600'>Process Details</Typography>
          <div className="overflow-x-auto">
            <Table size="small">
              <TableHead className='bg-gray-100'>
                <TableRow>
                  <TableCell >Process Name</TableCell>
                  <TableCell sx={{textAlign:"center"}}>Work Center</TableCell>
                  <TableCell sx={{textAlign:"center"}}>Operator</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {processDetails.length > 0 ? (
                  processDetails.map((proc, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{py:2}}>{proc.processName || '-'}</TableCell>
                      <TableCell sx={{textAlign:"center",py:2}}>{proc.workCenter || '-'}</TableCell>
                      <TableCell sx={{textAlign:"center",py:2}}>{proc.operator || '-'}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} align="center">No process details</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
 
    </div>
  );
}

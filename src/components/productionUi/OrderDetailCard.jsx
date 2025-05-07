import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Box, 
  LinearProgress, 
  Chip, 
  IconButton 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const OrderDetailsCard = ({ order }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 600, 
        width: '100%', 
        mx: 'auto', 
        mt: 2, 
        boxShadow: 3, 
        borderRadius: 2,
        position: 'relative'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          {order.id}
        </Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>

      <CardContent>
        {/* Order Information and Order Status */}
        <Grid container spacing={2}>
          {/* Order Information */}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Order Information
            </Typography>
            <Box sx={{ bgcolor: '#f5faff', p: 2, borderRadius: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Customer
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {order.customer}
              </Typography>
            </Box>
            <Box sx={{ bgcolor: '#f5faff', p: 2, borderRadius: 1, mt: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Item Name
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {order.itemName}
              </Typography>
            </Box>
            <Box sx={{ bgcolor: '#f5faff', p: 2, borderRadius: 1, mt: 1 }}>
              <Typography variant="body2" color="textSecondary">
                S/O Number
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {order.soNumber}
              </Typography>
            </Box>
            <Box sx={{ bgcolor: '#f5faff', p: 2, borderRadius: 1, mt: 1 }}>
              <Typography variant="body2" color="textSecondary">
                PRO Number
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {order.proNumber}
              </Typography>
            </Box>
          </Grid>

          {/* Order Status */}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Order Status
            </Typography>
            <Box sx={{ bgcolor: '#f5faff', p: 2, borderRadius: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Material Required Date
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {order.materialRequiredDate}
              </Typography>
            </Box>
            <Box sx={{ bgcolor: '#f5faff', p: 2, borderRadius: 1, mt: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Delivery Date
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {order.deliveryDate}
              </Typography>
            </Box>
            <Box sx={{ bgcolor: '#f5faff', p: 2, borderRadius: 1, mt: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Days Remaining
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {order.daysRemaining}
              </Typography>
            </Box>
            <Box sx={{ bgcolor: '#f5faff', p: 2, borderRadius: 1, mt: 1 }}>
              <Typography variant="body2" color="textSecondary">
                BOM %
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {order.bomPercentage}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Delivery Information */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Delivery Information
          </Typography>
          <Grid container spacing={2} textAlign="center">
            <Grid item xs={4}>
              <Box sx={{ bgcolor: '#f5faff', p: 2, borderRadius: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  Order Qty
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {order.orderQty}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ bgcolor: '#f5faff', p: 2, borderRadius: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  Pending Qty
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {order.pendingQty}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ bgcolor: '#f5faff', p: 2, borderRadius: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  Delivered Qty
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {order.deliveredQty}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Order Progress */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Order Progress
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ flex: 1, mr: 2 }}>
              <Typography variant="body2" color="textSecondary">
                Current production status
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={order.completionPercentage} 
                sx={{ 
                  height: 8, 
                  borderRadius: 5, 
                  bgcolor: '#e0e0e0', 
                  '& .MuiLinearProgress-bar': { bgcolor: '#4caf50' } 
                }} 
              />
            </Box>
            <Chip 
              label="On Schedule" 
              color="success" 
              sx={{ bgcolor: '#e8f5e9', color: '#2e7d32' }} 
            />
          </Box>
          <Typography variant="body1" fontWeight="medium" mt={1}>
            Completion {order.completionPercentage}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderDetailsCard;
import { Box, Collapse, useMediaQuery, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import ProductionStepper from './ProductionStepper';

const MainDataTable = ({ columns, rows,expandedRowId }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <div
      className="w-full h-auto "
    >
     <div>
      {rows.map(row => (
        <Collapse key={`collapse-${row.id}`} in={expandedRowId === row.id}>
          <Box 
            sx={{
              p: isSmallScreen ? 1 : 3,
              backgroundColor: '#f9f9f9',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ 
              width: '100%', 
              maxWidth: '1200px',
              padding: isSmallScreen ? '8px' : '16px'
            }}>
              <h4 style={{ 
                marginBottom: '16px', 
                color: '#333',
                fontSize: isSmallScreen ? '1rem' : '1.25rem'
              }}>
                Production Progress
              </h4>
              <Box sx={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: isSmallScreen ? '12px' : '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                overflowX:"auto"
              }}>
                <ProductionStepper steps={row.steps} />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: isSmallScreen ? 'column' : 'row',
                flexWrap: 'wrap',
                gap: isSmallScreen ? '8px' : '16px',
                marginTop: '16px',
                color: '#666',
                fontSize: isSmallScreen ? '0.75rem' : '0.875rem'
              }}>
                <span><strong>PO Number:</strong> {row.poNumber}</span>
                <span><strong>Item:</strong> {row.itemName}</span>
                <span><strong>Order Qty:</strong> {row.orderQty}</span>
                <span><strong>Delivery Date:</strong> {row.deliveryDate}</span>
              </Box>
            </Box>
          </Box>
        </Collapse>
      ))}
    </div>


      <div className='rounded-xl overflow-hidden bg-main-background shadow-bg-shadow-1'>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 20]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          columnHeaderHeight={65}
          rowHeight={65}
          sx={{
            height:"773px",
            textAlign: 'center',
            border: 'none',
            backgroundColor:"white",
            '& .MuiDataGrid-columnHeader': {
              padding: '0px 30px',
              backgroundColor: '#E9F4FF',
            },
            '& .MuiDataGrid-cell': {
              textOverflow: 'ellipsis',
              textAlign: 'center',
            },
            '& .MuiDataGrid-columnSeparator': {
              color: '#949494',
              opacity: 1,
            },
            '& .MuiDataGrid-menuIconButton': {
              color: '#6e6e6e',
            },
            '& .MuiDataGrid-sortIconButton': {
              color: '#6e6e6e',
              ':hover': {
                backgroundColor: 'white',
              },
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: '#E9F4FF',
            },
          }}
        />
      </div>
      
    </div>
  );
};

export default MainDataTable;
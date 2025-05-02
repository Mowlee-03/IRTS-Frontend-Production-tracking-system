import { Box, useMediaQuery, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import ProductionStepper from './ProductionStepper';

const MainDataTable = ({ columns, rows, expandedRowId }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="w-full h-full  ">
      <div>
        {rows.map((row) => (
          <div
            key={`custom-collapse-${row.id}`}
            style={{
              display: expandedRowId === row.id ? 'block' : 'none',
              transition: 'max-width 0.3s ease-in-out',
              maxWidth: expandedRowId === row.id ? '100%' : '0',
              // overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                width: '100%',
                borderRadius: '8px',
                padding: isSmallScreen ? '12px' : '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                overflowX: 'auto',
              }}
            >
              <ProductionStepper steps={row.steps} />
            </Box>
          </div>
        ))}
      </div>

      <div className="rounded-xl w-full h-full overflow-hidden bg-main-background shadow-bg-shadow-1">
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
            height: { xs: '600px', md: '100%' },
            textAlign: 'center',
            border: 'none',
            backgroundColor: 'white',
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

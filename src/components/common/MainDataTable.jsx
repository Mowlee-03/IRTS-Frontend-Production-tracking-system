import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

const MainDataTable = ({ columns, rows, totalWidth }) => {

  return (
    <div
      style={{ height: 773, width: '100%' }}
      className="rounded-xl overflow-hidden shadow-bg-shadow-1 bg-main-background"
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        disableVirtualization={true}
        columnHeaderHeight={65}
        rowHeight={65}
        getRowHeight={(params) => (params.model.isStepperRow ? 150 : 65)} // Taller height for stepper rows
        sx={{
          textAlign: 'center',
          border: 'none',
          '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: 'transparent !important',
          },
          '& .MuiDataGrid-checkboxInput.Mui-checked': {
            color: 'transparent',
          },
          '& .MuiDataGrid-checkboxInput': {
            visibility: 'hidden',
          },
          '& .MuiDataGrid-columnHeader': {
            padding: '0px 30px',
            backgroundColor: '#E9F4FF',
          },
          '& .MuiDataGrid-cell': {
            textOverflow: 'ellipsis',
            textAlign: 'center',
            '&[data-field="id"]': {
              '&:has(.stepper-container)': {
                padding: 0,
                width: `${totalWidth}px !important`, // Use total width of all columns
                maxWidth: 'none !important',
                boxSizing: 'border-box',
                position: 'relative',
                left: 0,
              },
            },
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
          '& .MuiDataGrid-row': {
            '&[data-rowindex="1"]': {
              backgroundColor: '#f5f5f5', // Light background for stepper rows
            },
          },
          '& .MuiDataGrid-virtualScroller': {
       
            maxWidth: `${totalWidth}px`, // Constrain to the sum of column widths
          },
        }}
      />
    </div>
  );
};

export default MainDataTable;
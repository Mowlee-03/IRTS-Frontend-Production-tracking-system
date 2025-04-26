import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

const MainDataTable = ({ columns, rows, getRowHeight }) => {
  return (
    <div style={{ height: 773, width: '100%' }} className="rounded-xl overflow-hidden shadow-bg-shadow-1 bg-main-background">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
        columnHeaderHeight={65}
        rowHeight={65}
        getRowHeight={getRowHeight}
        getDetailPanelContent={"ehedueued"}
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
          },
          '& .MuiDataGrid-columnSeparator': {
            color: '#949494',
            opacity: 1,
          },
          '& .MuiDataGrid-menuIconButton': {
            color: '#6e6e6e',
            ':hover': {},
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
        checkboxSelection={false}
        onSelectionModelChange={() => {}}
      />
    </div>
  );
};

export default MainDataTable;

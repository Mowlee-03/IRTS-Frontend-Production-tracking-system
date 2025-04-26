import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const MainDataTable = ({ columns, rows }) => {
  return (
    <div style={{ height: 773, width: '100%' }} className='rounded-xl overflow-hidden shadow-bg-shadow-1 bg-main-background'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
        columnHeaderHeight={65}
        rowHeight={65}
        sx={{
          textAlign:"center",
          border: "none",
          // Disable the row selection background highlight color
          '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: 'transparent !important',  // Remove blue highlight
          },
          '& .MuiDataGrid-checkboxInput.Mui-checked': {
            color: 'transparent',  // Disable the checkbox tick color if you have checkboxes
          },
          '& .MuiDataGrid-checkboxInput': {
            visibility: 'hidden',  // Hides the checkbox column (if it's there)
          },
          '& .MuiDataGrid-columnHeader': {
            padding: '0px 30px', // Adjust padding to remove unnecessary spaces
            backgroundColor: '#E9F4FF',
            // fontSize:15
          },
          '& .MuiDataGrid-cell': {
            textOverflow: 'ellipsis',
            textAlign:"center"
          },
          '& .MuiDataGrid-columnSeparator': {
            color: '#949494',   // Light blue/grey color
            opacity: 1,
          },
         '& .MuiDataGrid-menuIconButton': {
            color: '#6e6e6e', // ✅ your custom color
            ":hover":{
             
            }
          },
          '& .MuiDataGrid-sortIconButton': {
            color: '#6e6e6e', // your custom color for ascending/descending arrows
            ":hover":{
              backgroundColor:"white",
            }
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: '#E9F4FF', // or any color you want
          },




        }}
        checkboxSelection={false} // Disable checkbox selection
        onSelectionModelChange={() => {}} // Ignore any selection model change

      />
    </div>
  )
}

export default MainDataTable

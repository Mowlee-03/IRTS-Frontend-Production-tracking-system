import { DataGrid, } from '@mui/x-data-grid'
import React from 'react'

const SimpleDataTable = ({columns,rows,CustomToolbar,...props}) => {
  return (
    <>  
        <DataGrid
        
            rows={rows}
            columns={columns}
            showToolbar
            slots={{ toolbar: CustomToolbar }}
            pageSizeOptions={[5, 10, 20]}
            initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
            }}
            columnHeaderHeight={65}
            rowHeight={65}
            sx={{
            textAlign: 'center',
            border: 'none',
            borderRadius:"1rem",
            backgroundColor: 'white',
            boxShadow:"0px 4px 4px 0px #00000040",
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
            
            {...props} 
        />
    </>
       

  )
}

export default React.memo(SimpleDataTable)
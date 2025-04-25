import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const MainDataTable = ({ columns, rows }) => {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  )
}

export default MainDataTable

import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import ProductionStepper from './ProductionStepper';
import { Chip, LinearProgress, Tooltip } from '@mui/material';
import { Calendar, Package } from 'lucide-react';

const MainDataTable = ({ columns, rows, expandedRowId ,setExpandedRowId,CustomToolbar}) => {
  const handleRowClick = (params) => {
    setExpandedRowId((prevId) => (prevId === params.id ? null : params.id));
  };
  return (
    <div className="w-full h-full flex flex-col  lg:flex lg:flex-row gap-3">
     
        {rows.map((row) => (
            <div
            key={`custom-collapse-${row.id}`}
            className={`bg-main-background px-2 py-3 flex flex-col gap-4 lg:items-center justify-center transition-all duration-300 rounded-xl  shadow-bg-shadow-1 h-auto lg:h-full lg:w-1/5 ${
              expandedRowId === row.id ? 'block' : 'hidden'
            }`}
          >
              <div className='flex flex-col gap-3 bg-[#E9F4FF] p-3 lg:w-full rounded-lg'>
                <Tooltip title="Production Number" arrow>
                  <span className='text-[#FF9D00] font-medium'>{row.proNumber}</span>
                </Tooltip>

                <Tooltip title="Item Name" arrow>
                  <span className="font-semibold truncate max-w-full block cursor-pointer">{row.itemName}</span>
                </Tooltip>

                <div className='flex gap-3 cursor-pointer'>
                  <Tooltip title="Total Quantity Ordered" arrow>
                    <Chip
                      sx={{ width: "50%", backgroundColor: "white" }}
                      icon={<Package size={20} />}
                      label={`Order Qty :${row.orderQty}`}
                      variant="outlined"
                    />
                  </Tooltip>

                  <Tooltip title="Expected Delivery Date" arrow>
                    <Chip
                      sx={{ width: "50%", backgroundColor: "white" }}
                      icon={<Calendar size={20} />}
                      label={row.deliveryDate}
                      variant="outlined"
                    />
                  </Tooltip>
                </div>
                <div className="">
                  <p className="text-sm font-semibold mb-1">Overall Status</p>
                  {(() => {
                    const completedSteps = row.steps.filter(step => step.status === 'completed').length;
                    const totalSteps = row.steps.length;
                    const progress = Math.round((completedSteps / totalSteps) * 100);

                    let color;
                    if (progress === 100) {
                      color = 'success';
                    } else if (progress >= 50) {
                      color = 'warning';
                    } else {
                      color = 'error';
                    }

                    return (
                      <div className='flex items-center justify-center gap-1'>
                        <div className='w-full'>
                          <LinearProgress
                            variant="determinate"
                            value={progress}
                            color={color}
                            sx={{ height: 10, borderRadius: 5 }}
                          />
                        </div>
                        
                        <p className="text-xs mt-1 text-right text-gray-600">{progress}%</p>
                      </div>
                    );
                  })()}
                </div>

              </div>
              <div className=' overflow-auto scrollbar-hide'>
                <div
                  className='overflow-auto p-2 w-[800px]  lg:w-auto  bg-main-background '
                >
                  <ProductionStepper steps={row.steps} />
                </div>
              </div>
              
          </div>
        ))}


      <div className="rounded-xl w-full h-full overflow-x-hidden  shadow-bg-shadow-1 flex-1">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 20]}
          slots={{toolbar:CustomToolbar}}
          showToolbar
          onRowClick={handleRowClick}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          columnHeaderHeight={65}
          rowHeight={65}
          sx={{
            height: { xs: '600px', lg: '100%' },
            textAlign: 'center',
            border: 'none',
            backgroundColor: 'white',
            '& .MuiDataGrid-toolbarContainer': {
                backgroundColor: 'none', // 👈 Your custom toolbar color
                borderRadius: 0, // 👈 Ensures toolbar has no rounded corners
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

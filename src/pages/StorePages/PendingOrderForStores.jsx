import React from 'react'
import SimpleDataTable from '../../components/common/SimpleDataTable';
import { ModelProductionData } from '../../Redux/Store/mockdata';
import {  Chip, IconButton, LinearProgress } from '@mui/material';
import { IconButtonColors } from '../../../Style';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
const PendingOrdersForStores = () => {
    const columns=[
            {
              field: 'id',
              headerName: 'KIT NO',
              minWidth: 120,
              flex:1,
              renderCell: (params) => (
                <div style={{ paddingLeft: '20px' }}>{params.value}</div>
              ),
            },
            {
              field: 'poNumber',
              headerName: 'PO Number',
              minWidth: 120,
              flex:1,
              renderCell: (params) => params.value,
            },
            {
              field: 'poDate',
              headerName: 'PO Date',
              minWidth: 120,
              flex:1,
              renderCell: (params) => params.value,
            },
            {
              field: 'soNumber',
              headerName: 'S/O NUM',
             minWidth: 120,
              flex:1,
              renderCell: (params) => params.value,
            },
            {
              field: 'proNumber',
              headerName: 'PRO NUM',
              minWidth: 120,
              flex:1,
              renderCell: (params) => params.value,
            },
            {
              field: 'customer',
              headerName: 'Customer',
             minWidth: 120,
              flex:1,
              renderCell: (params) => params.value,
            },
            {
              field: 'itemName',
              headerName: 'Item Name',
             minWidth: 200,
              flex:1,
              renderCell: (params) => params.value,
            },
            {
              field: 'orderQty',
              headerName: 'Order Qty',
              minWidth: 120,
              flex:1,
              renderCell: (params) => params.value,
            },
            {
              field: 'pendingQty',
              headerName: 'Pending Qty',
              minWidth: 120,
              flex:1,
              renderCell: (params) => params.value,
            },        
            {
            field: 'bom',
            headerName: 'BOM %',
            minWidth: 180,
            flex:1,
            renderCell: (params) => {
                const value = Number(params.value.replace('%', ''));

                let color = '';
                if (value >= 100) {
                color = '#4caf50'; // Green
                } else if (value >= 50) {
                color = '#ff9800'; // Orange
                } else {
                color = '#f44336'; // Red
                }

                return (
                <div
                    style={{
                    width: '100%',
                    padding: '0 10px',
                    display: 'flex',
                    alignItems: 'center',
                    }}
                >
                    <div style={{ flexGrow: 1 }}>
                    <LinearProgress
                        variant="determinate"
                        value={value}
                        sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: '#eee',
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: color,
                        },
                        }}
                    />
                    </div>
                    <div style={{ marginLeft: 8, fontSize: '0.75rem', fontWeight: 600 }}>
                    {`${value}%`}
                    </div>
                </div>
                );
            },
            },

            {
            field: 'status',
            headerName: 'Status',
            minWidth: 160,
            flex:1,
            renderCell: (params) => {
                const status = params.value;
                let color = 'default';

                switch (status.toLowerCase()) {
                case 'available':
                    color = 'success';
                    break;
                case 'in progress':
                case 'processing':
                    color = 'warning';
                    break;
                case 'pending':
                    color = 'info';
                    break;
                case 'unavailable':
                    color = 'error';
                    break;
                default:
                    color = 'default';
                }

                return (
                <div style={{ padding: '0 10px' }}>
                    <Chip
                    variant='outlined'
                    label={status}
                    color={color}
                    size="small"
                    sx={{minWidth:120, textTransform: 'capitalize', fontWeight: 500 }}
                    />
                </div>
                );
            },
            },
             {
              field: 'deliveredQty',
              headerName: 'Delivered Quantity',
              minWidth: 120,
              flex:1,
              renderCell: (params) => params.value,
            },
            {
            field: 'actions',
            headerName: 'Actions',
            minWidth: 120,
            flex:1,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params) => (
                <>
                 <IconButton
                sx={{...IconButtonColors,backgroundColor:"#EBF5FF",p:1}}
                >
                    <VisibilityIcon fontSize="small" sx={{fontSize:"18px"}} />
                    
                </IconButton>
                <IconButton
                sx={{...IconButtonColors,backgroundColor:"#FDF2F8",p:1,ml:1}}
                >
                    <ModeEditOutlinedIcon fontSize="small" sx={{fontSize:"18px"}} />
                    
                </IconButton>
                </>

            ),
            },
    ]
  return (
    <div className='h-screen md-plus:h-full bg-yellow-100'>
        <div className='h-full'>
            <SimpleDataTable   rows={ModelProductionData} columns={columns}/>
        </div>
    </div>
  )
}

export default PendingOrdersForStores
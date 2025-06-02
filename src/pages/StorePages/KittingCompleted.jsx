import React from 'react'
import SimpleDataTable from '../../components/common/SimpleDataTable';

import {  Checkbox, Chip, IconButton, LinearProgress } from '@mui/material';
import { IconButtonColors } from '../../../Style';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
const KittingCompleted = () => {
  const Rows= [
    {
      id: 1,
      kitNo: 20,
      poNumber: '4700064991',
      poDate: '26-Mar-2025',
      soNumber: 'SO/0001/25-26',
      proNumber: 'PROD/0001/25-26',
      customer: 'RMCL',
      itemName: '558510111-A1 CONTROL BOARD-RB100',
      orderQty: 50,
      pendingQty: 0,
      materialRequiredDate: '25-Apr-2025',
      bom: '100%',
      status: "Available",
      deliveredQty: 50,
      deliveredStatus: false,
      kittingCompleted: true,
      inLine: false,
      days: 23,
      value: '₹3500',
      total: '₹175000',
      deliveryDate: '25-Apr-2025',
    },
    {
      id: 2,
      kitNo: 120,
      poNumber: 'PO-2407',
      poDate: '14-Mar-2025',
      soNumber: 'SO/0003/25-26',
      proNumber: 'PROD/0002/25-26',
      customer: 'MWS',
      itemName: 'Analog Level sensor (4-20mA)',
      orderQty: 22,
      pendingQty: 12,
      materialRequiredDate: '20-Apr-2025',
      bom: '50%',
      status: "Unavailable",
      deliveredStatus: false,
      kittingCompleted: false,
      inLine: false,
      deliveredQty: 10,
      days: 18,
      value: '₹5400',
      total: '₹118800',
      deliveryDate: '25-Apr-2025',
    },
    {
      id: 3,
      kitNo: 133,
      poNumber: '4700065011',
      poDate: '28-Mar-2025',
      soNumber: 'SO/0004/25-26',
      proNumber: 'PROD/0003/25-26',
      customer: 'L&T',
      itemName: 'Pressure Sensor PTX-700',
      orderQty: 30,
      pendingQty: 5,
      materialRequiredDate: '22-Apr-2025',
      bom: '80%',
      status: "Processing",
      deliveredQty: 25,
      deliveredStatus: false,
      kittingCompleted: true,
      inLine: true,
      days: 20,
      value: '₹6000',
      total: '₹180000',
      deliveryDate: '22-Apr-2025',
    },  
  ];

  const columns=[
            {
              field: 'id',
              headerName: 'KIT NO',
              width: 120,
              renderCell: (params) => (
                <div style={{ paddingLeft: '20px' }}>{params.value}</div>
              ),
            },
            {
              field: 'poNumber',
              headerName: 'PO Number',
              width: 130,
              renderCell: (params) => params.value,
            },
            {
              field: 'poDate',
              headerName: 'PO Date',
              width: 120,
              renderCell: (params) => params.value,
            },
            {
              field: 'soNumber',
              headerName: 'S/O NUM',
              width: 130,
              renderCell: (params) => params.value,
            },
            {
              field: 'proNumber',
              headerName: 'PRO NUM',
              width: 130,
              renderCell: (params) => params.value,
            },
            {
              field: 'customer',
              headerName: 'Customer',
              width: 120,
              renderCell: (params) => params.value,
            },
            {
              field: 'itemName',
              headerName: 'Item Name',
              width: 200,
              renderCell: (params) => params.value,
            },
            {
              field: 'orderQty',
              headerName: 'Order Qty',
              width: 120,
              renderCell: (params) => params.value,
            },
            {
              field: 'pendingQty',
              headerName: 'Pending Qty',
              width: 140,
              renderCell: (params) => params.value,
            },        
            {
            field: 'bom',
            headerName: 'BOM %',
            width: 200,
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
            width: 160,
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
              width: 140,
              renderCell: (params) => params.value,
            },
                        
            {
              field: 'deliveredStatus',
              headerName: 'Delivered',
              width: 110,
              renderCell: (params) => (
                <Checkbox checked={params.value} disabled />
              ),
            },
            {
              field: 'kittingCompleted',
              headerName: 'Kitting Completed',
              width: 140,
              renderCell: (params) => (
                <Checkbox checked={params.value} disabled />
              ),
            },
            {
              field: 'inLine',
              headerName: 'In-Line',
              width: 110,
              renderCell: (params) => (
                <Checkbox checked={params.value} disabled />
              ),
            },
            {
              field: 'total',
              headerName: 'Total',
              width: 140,
              renderCell: (params) => params.value,
            },  
            {
            field: 'actions',
            headerName: 'Actions',
            width: 120,
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
            <SimpleDataTable   rows={Rows} columns={columns}/>
        </div>
    </div>
  )
}

export default KittingCompleted

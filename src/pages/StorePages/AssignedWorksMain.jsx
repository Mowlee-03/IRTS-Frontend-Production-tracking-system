import { Breadcrumbs, Checkbox, Chip, IconButton, LinearProgress } from '@mui/material';
import React, { useState } from 'react'
import SimpleDataTable from '../../components/common/SimpleDataTable';
import { AlertTriangle, CheckCircle, ChevronLeft, Clock, Undo, XCircle } from 'lucide-react';
import { IconButtonColors } from '../../../Style';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
const AssignedWorksMain = () => {
    const navigate=useNavigate()
    const [selectedMember, setSelectedMember] = useState(null);
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
      initialKitting: false,
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
      initialKitting: false,
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
      initialKitting: true,
      inLine: true,
      days: 20,
      value: '₹6000',
      total: '₹180000',
      deliveryDate: '22-Apr-2025',
    },
    {
      id: 4,
      kitNo: 141,
      poNumber: 'PO-2510',
      poDate: '01-Apr-2025',
      soNumber: 'SO/0005/25-26',
      proNumber: 'PROD/0004/25-26',
      customer: 'BHEL',
      itemName: 'Relay Control Panel',
      orderQty: 10,
      pendingQty: 10,
      materialRequiredDate: '30-Apr-2025',
      bom: '20%',
      status: "Pending",
      deliveredQty: 0,
      deliveredStatus: false,
      initialKitting: false,
      inLine: false,
      days: 28,
      value: '₹15000',
      total: '₹150000',
      deliveryDate: '30-Apr-2025',
    },
    {
      id: 5,
      kitNo: 155,
      poNumber: '4700065100',
      poDate: '04-Apr-2025',
      soNumber: 'SO/0006/25-26',
      proNumber: 'PROD/0005/25-26',
      customer: 'NTPC',
      itemName: 'Industrial Ethernet Switch',
      orderQty: 12,
      pendingQty: 0,
      materialRequiredDate: '01-May-2025',
      bom: '100%',
      status: "Available",
      deliveredQty: 12,
      deliveredStatus: true,
      initialKitting: true,
      inLine: true,
      days: 26,
      value: '₹8200',
      total: '₹98400',
      deliveryDate: '01-May-2025',
    },
    {
      id: 6,
      kitNo: 160,
      poNumber: 'PO-2601',
      poDate: '06-Apr-2025',
      soNumber: 'SO/0007/25-26',
      proNumber: 'PROD/0006/25-26',
      customer: 'TANGEDCO',
      itemName: 'Control Cable 4 Core 1.5 sqmm',
      orderQty: 200,
      pendingQty: 50,
      materialRequiredDate: '10-May-2025',
      bom: '60%',
      status: "In Progress",
      deliveredQty: 150,
      deliveredStatus: false,
      initialKitting: false,
      inLine: false,
      days: 32,
      value: '₹150',
      total: '₹30000',
      deliveryDate: '10-May-2025',
    },
    {
      id: 7,
      kitNo: 165,
      poNumber: '4700065111',
      poDate: '08-Apr-2025',
      soNumber: 'SO/0008/25-26',
      proNumber: 'PROD/0007/25-26',
      customer: 'Amara Raja',
      itemName: 'Battery Charger 48V',
      orderQty: 5,
      pendingQty: 2,
      materialRequiredDate: '12-May-2025',
      bom: '70%',
      status: "Processing",
      deliveredQty: 3,
      deliveredStatus: false,
      initialKitting: false,
      inLine: true,
      days: 34,
      value: '₹18500',
      total: '₹92500',
      deliveryDate: '12-May-2025',
    },
    {
      id: 8,
      kitNo: 172,
      poNumber: 'PO-2650',
      poDate: '10-Apr-2025',
      soNumber: 'SO/0009/25-26',
      proNumber: 'PROD/0008/25-26',
      customer: 'Siemens',
      itemName: 'SCADA Control Panel',
      orderQty: 8,
      pendingQty: 0,
      materialRequiredDate: '15-May-2025',
      bom: '100%',
      status: "Available",
      deliveredQty: 8,
      deliveredStatus: true,
      initialKitting: true,
      inLine: true,
      days: 37,
      value: '₹25000',
      total: '₹200000',
      deliveryDate: '15-May-2025',
    },
    {
      id: 9,
      kitNo: 180,
      poNumber: '4700065122',
      poDate: '12-Apr-2025',
      soNumber: 'SO/0010/25-26',
      proNumber: 'PROD/0009/25-26',
      customer: 'Ashok Leyland',
      itemName: 'Smart Sensor Hub',
      orderQty: 25,
      pendingQty: 10,
      materialRequiredDate: '18-May-2025',
      bom: '30%',
      status: "Unavailable",
      deliveredQty: 15,
      deliveredStatus: false,
      initialKitting: false,
      inLine: false,
      days: 39,
      value: '₹3400',
      total: '₹85000',
      deliveryDate: '18-May-2025',
    },
    {
      id: 10,
      kitNo: 190,
      poNumber: 'PO-2700',
      poDate: '15-Apr-2025',
      soNumber: 'SO/0011/25-26',
      proNumber: 'PROD/0010/25-26',
      customer: 'ABB',
      itemName: 'VFD Controller Panel',
      orderQty: 18,
      pendingQty: 0,
      materialRequiredDate: '20-May-2025',
      bom: '90%',
      status: "Pending",
      deliveredQty: 18,
      deliveredStatus: false,
      initialKitting: true,
      inLine: false,
      days: 41,
      value: '₹11000',
      total: '₹198000',
      deliveryDate: '20-May-2025',
    },
 
    ];
    const columns=[
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
                 onClick={handleTaskClick}
                sx={{...IconButtonColors,backgroundColor:"#EBF5FF",p:1}}
                >
                    <VisibilityIcon fontSize="small" sx={{fontSize:"18px"}} />
                    
                </IconButton>

                </>

            ),
            },
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
              field: 'initialKitting',
              headerName: 'Initial Kitting',
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
       
    ]
    const teamMembers = [
        {
            id:1,
            name: "Sarah Miller",
            role: "Production Lead",
            tasks: 4,
            avatar: "https://i.pravatar.cc/150?img=12",
            taskDatas:[
                {name:'Initial Kitting',status:"in-progress",count:10},
                {name:'Kitting Completed',status:"in-progress",count:10},
                {name:'BOM Out',status:"completed",count:10},
                {name:'Inward Completed',status:"in-progress",count:10},
            ]
        },
        {
            id:2,
            name: "James Chan",
            role: "Store Manager",
            tasks: 2,
            avatar: "https://i.pravatar.cc/150?img=3",
            taskDatas:[
                {name:'Kitting Completed',status:"in-progress",count:10},
                {name:'BOM Out',status:"completed",count:10},
            ]
        },
        {
            id:3,
            name: "Alex Kumar",
            role: "Inventory Lead",
            tasks: 3,
            avatar: "https://i.pravatar.cc/150?img=1",
            taskDatas:[
                {name:'Initial Kitting',status:"in-progress",count:10},
                {name:'Kitting Completed',status:"in-progress",count:10},
                {name:'BOM Out',status:"completed",count:10},
            ]
        },
        {
            id:4,
            name: "Kumar",
            role: "Purchase Lead",
            tasks: 4,
            avatar: "https://i.pravatar.cc/150?img=8",
            taskDatas:[
                {name:'Initial Kitting',status:"in-progress",count:10},
                {name:'Kitting Completed',status:"in-progress",count:10},
                {name:'BOM Out',status:"completed",count:10},
                {name:'Inward Completed',status:"in-progress",count:10},
            ]
        },
    ];
    const handleTaskClick=()=>{
      navigate("/store/task/details")
    }
    const handleViewTasks = (member) => {
        setSelectedMember(member);
    };
    const handleBack = () => {
        setSelectedMember(null);
    };
    const AssignedWorkStatusCard = ({ name, role, tasks, avatar,onclick }) => {
    return (
        <div className="bg-white shadow-md border rounded-xl p-4 flex flex-col  w-full ">
        <div className='flex gap-4 items-center'>
            <img
                src={avatar}
                alt={name}
                className="w-12 h-12 rounded-xl object-cover mb-3"
            />
            <div>
                <div className="font-semibold text-gray-800">{name}</div>
                <div className="text-sm text-gray-500 mb-2">{role}</div>
            </div>
        </div>
        

        <div className="text-sm text-gray-600 mb-4 flex justify-between items-center">
            <span>Assigned Tasks: </span>
            <span className="font-medium">{tasks}</span>
        </div>
        <button 
        onClick={onclick}
        className="bg-[#4f15bb] text-white px-4 py-2 text-sm rounded-lg hover:bg-indigo-700 transition">
            View Tasks
        </button>
        </div>
    );
    };
    const statusIcons = {
    'completed': <CheckCircle size={35} className="text-green-500 border-green-600 border-2 rounded-lg p-2" />,
    'failed': <XCircle size={35} className="text-red-500 border-red-600 border-2 rounded-lg p-2" />,
    'pending': <Clock size={35} className="text-yellow-500 border-yellow-600 border-2 rounded-lg p-2" />,
    'in-progress': <AlertTriangle size={35} className="text-orange-500 border-orange-600 border-2 rounded-lg p-2" />,
    };
    const statusBgClasses = {
    'completed': 'bg-green-50',
    'failed': 'bg-red-100',
    'pending': 'bg-yellow-100',
    'in-progress': 'bg-orange-100',
    };
    const Workcards = ({ name, status, count }) => {
        const bgcolor=statusBgClasses[status]
    return (
        <div className="px-4 py-2 border rounded-xl shadow flex items-center justify-center gap-4 md-plus:gap-2 xl-plus:gap-4">
        <div>{statusIcons[status] || <AlertTriangle className="text-gray-400" />}</div>
        <div className="flex-1 text-ellipsis">
            <p className="font-medium text-sm text-ellipsis">{name}</p>
            <span className="text-xs text-gray-600 capitalize">{status}</span>
        </div>
        <span className={`text-base font-medium min-w-7 min-h-7 flex items-center justify-center rounded-md ${bgcolor}`}>{count}</span>
        </div>
    );
    };

return (
    <div className='h-auto md-plus:h-full flex flex-col gap-3'>
        <div className='p-4 shadow-md border bg-white rounded-xl flex flex-col gap-2'>
            <h2 className="text-xl font-semibold text-gray-800 ">Assigned Work Status</h2>
            {
                selectedMember && (
                    <Breadcrumbs >
                        <button
                        className='bg-red-500 text-white transition-all hover:bg-gray-50  border hover:text-blue-700 text-base font-medium flex items-center  pr-2 rounded-lg'
                        onClick={handleBack}
                        >
                            <ChevronLeft size={20}/>
                            Back</button>
                        <span className='text-gray-400 text-sm font-medium'>{selectedMember.name}</span>
                    </Breadcrumbs>
                )
            }
            <div className="w-full grid  gap-4 lg-plus:gap-10 grid-cols-1 sm-plus:grid-cols-2 lg-plus:grid-cols-4">
                {
                    selectedMember 
                    ?
                    (
                        selectedMember?.taskDatas?.map((data)=>(
                            <Workcards {...data} />
                        ))
                    )
                    :(
                        <>
                        {teamMembers.map((member, idx) => (
                        <AssignedWorkStatusCard key={idx} {...member} onclick={()=>handleViewTasks(member)} />
                        ))}
                        </>
                    )
                }
                
            </div>
        </div>
        <div className='h-[700px] lg-plus:h-auto lg-plus:flex-1 overflow-hidden rounded-xl shadow-md border'>
            <SimpleDataTable columns={columns} rows={Rows} />
        </div>
    </div>
  )
}

export default AssignedWorksMain
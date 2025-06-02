export const GrowsmartData=[
     {
        id:1,
        orderType:"Production",
        rawMaterialWarehouse:"Material Warehouse",
        finishedGoodWarehouse:"FG Warehouse",
        approvedStatus:"Draft",
        deliveryDate: '16-05-2025',
        poNumber: 'PO/001',
        poDate: '10-05-2025',
        soNumber: 'SO/001',
        proNumber: 'PRO/001',
        customer: 'AMCL',
        itemName: 'I-Tank',
        orderQty: '10',
        value: '200000',
        total: '2000000',
        rawMaterials:[
        {
            rawMaterialName:"Material 1",
            quantity:"10",
            uom:"kg"
        },
        {
            rawMaterialName:"Material 2",
            quantity:"10",
            uom:"kg"
        },
        {
            rawMaterialName:"Material 3",
            quantity:"10",
            uom:"kg"
        },
        {
            rawMaterialName:"Material 4",
            quantity:"10",
            uom:"kg"
        },
        {
            rawMaterialName:"Material 5",
            quantity:"10",
            uom:"kg"
        },
        ],
        processDetails:[
        {
            processName:"Process 1",
            workcenterName:"Center 1",
        },
        {
            processName:"Process 2",
            workcenterName:"Center 2",
        },
        {
            processName:"Process 3",
            workcenterName:"Center 3",
        },
        {
            processName:"Process 4",
            workcenterName:"Center 4",
        },
        {
            processName:"Process 5",
            workcenterName:"Center 5",
        },
        ],

    }
]


export const ModelProductionData= [
    {
      id: 1,
      kitNo:20,
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
      status:"Available",
      deliveredQty:50,
      days: 23,
      value: '₹3500',
      total: '₹175000',
      deliveryDate: '25-Apr-2025',
      steps: [
        { label: 'KIT Init', date: '27-Mar-2024', status: 'completed' },
        { label: 'PO', date: '13-May-2024', status: 'completed' },
        { label: 'Inward', date: '14-May-2024', status: 'completed' },
        { label: 'KIT', date: '15-May-2024', status: 'completed' },
        { label: 'BOM', date: '16-May-2024', status: 'completed' },
        { label: 'Production', date: '25-May-2024', status: 'in-progress' },
        { label: 'FG', date: '26-May-2024', status: 'pending' },
      ],
    },
    {
      id: 2,
        kitNo:120,
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
      status:"Unavailable",
      deliveredQty:10,
      days: 18,
      value: '₹5400',
      total: '₹118800',
      deliveryDate: '25-Apr-2025',
      steps: [
        { label: 'KIT Init', date: '15-Mar-2024', status: 'completed' },
        { label: 'PO', date: '16-Mar-2024', status: 'completed' },
        { label: 'Inward', date: '17-Mar-2024', status: 'completed' },
        { label: 'KIT', date: '18-Mar-2024', status: 'in-progress' },
        { label: 'BOM', date: '19-Mar-2024', status: 'pending' },
        { label: 'Production', date: '20-Mar-2024', status: 'pending' },
        { label: 'FG', date: '21-Mar-2024', status: 'pending' },
      ],
    },
  ];
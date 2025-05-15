import React from 'react';
import { Tab, Tabs, Box, Paper, Typography } from '@mui/material';
import { 
  FileText, 
  Calendar, 
  Box as BoxIcon, 
  Settings, 
  ListChecks,
  Package,
  Factory,
  Truck,
  ClipboardList,
  DollarSign,
  User,
  Clock,
  Layers
} from 'lucide-react';

const OverviewFormDetails = ({ orderData }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Invalid date' : date.toLocaleDateString();
  };

  const formatCurrency = (value) => {
    if (value === null || value === undefined) return 'Not specified';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="p-4 h-full flex flex-col ">
      <Typography variant="h6" gutterBottom>
         Order Overview
      </Typography>

      <div  className="flex-1 flex flex-col overflow-hidden">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          className="border-b"
        >
          <Tab 
            label="Order Details" 
            icon={<FileText size={18} className="mr-1" />} 
            iconPosition="start" 
            className="min-h-12"
          />
          <Tab 
            label="Schedule" 
            icon={<Calendar size={18} className="mr-1" />} 
            iconPosition="start" 
            className="min-h-12"
          />
          <Tab 
            label="Materials" 
            icon={<BoxIcon size={18} className="mr-1" />} 
            iconPosition="start" 
            className="min-h-12"
          />
          <Tab 
            label="Processes" 
            icon={<Settings size={18} className="mr-1" />} 
            iconPosition="start" 
            className="min-h-12"
          />
        </Tabs>

        <div className="flex-1 overflow-auto p-4">
          {activeTab === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <DetailCard 
                icon={<Package size={20} />}
                title="Kit Number"
                value={orderData.orderDetails.kitNo || 'Not specified'}
              />
              <DetailCard 
                icon={<ListChecks size={20} />}
                title="PO Number"
                value={orderData.orderDetails.poNumber || 'Not specified'}
              />
              <DetailCard 
                icon={<Calendar size={20} />}
                title="PO Date"
                value={formatDate(orderData.orderDetails.poDate)}
              />
              <DetailCard 
                icon={<ListChecks size={20} />}
                title="SO Number"
                value={orderData.orderDetails.soNumber || 'Not specified'}
              />
              <DetailCard 
                icon={<ListChecks size={20} />}
                title="PRO Number"
                value={orderData.orderDetails.proNumber || 'Not specified'}
              />
              <DetailCard 
                icon={<Package size={20} />}
                title="Item Name"
                value={orderData.orderDetails.itemName || 'Not specified'}
              />
              <DetailCard 
                icon={<Layers size={20} />}
                title="BOM/Kit Name"
                value={orderData.orderDetails.bomKitName || 'Not specified'}
              />
              <DetailCard 
                icon={<User size={20} />}
                title="Customer"
                value={orderData.orderDetails.customer || 'Not specified'}
              />
              <DetailCard 
                icon={<Truck size={20} />}
                title="Delivery Date"
                value={formatDate(orderData.orderDetails.deliveryDate)}
              />
              <DetailCard 
                icon={<DollarSign size={20} />}
                title="Item Value"
                value={formatCurrency(orderData.orderDetails.itemValue)}
              />
              <DetailCard 
                icon={<Package size={20} />}
                title="Order Quantity"
                value={orderData.orderDetails.orderQty || 'Not specified'}
              />
              <DetailCard 
                icon={<DollarSign size={20} />}
                title="Total Value"
                value={formatCurrency(orderData.orderDetails.totalValue)}
              />
            </div>
          )}

          {activeTab === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DetailCard 
                icon={<Truck size={20} />}
                title="Actual Delivery Date"
                value={formatDate(orderData.scheduleDetails.actualDeliveredOn)}
              />
              <DetailCard 
                icon={<Clock size={20} />}
                title="Buffer Days Needed"
                value={orderData.scheduleDetails.isBufferdaysNeed ? 'Yes' : 'No'}
              />
              {orderData.scheduleDetails.isBufferdaysNeed && (
                <DetailCard 
                  icon={<Clock size={20} />}
                  title="Buffer Days"
                  value={orderData.scheduleDetails.bufferDays || 'Not specified'}
                />
              )}
              <DetailCard 
                icon={<Calendar size={20} />}
                title="Material Required Date"
                value={formatDate(orderData.scheduleDetails.materialReqDate)}
              />
              <DetailCard 
                icon={<Calendar size={20} />}
                title="Store Target Date"
                value={formatDate(orderData.scheduleDetails.storeTargetDate)}
              />
              <DetailCard 
                icon={<Calendar size={20} />}
                title="IQC Target Date"
                value={formatDate(orderData.scheduleDetails.iqcTargetDate)}
              />
              <DetailCard 
                icon={<Calendar size={20} />}
                title="Purchase Target Date"
                value={formatDate(orderData.scheduleDetails.purchaseTargetDate)}
              />
              <DetailCard 
                icon={<Factory size={20} />}
                title="Moved to FG Date"
                value={formatDate(orderData.scheduleDetails.movedToFgDate)}
              />
            </div>
          )}

          {activeTab === 2 && (
            <div>
              {orderData.materialDetails.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <BoxIcon size={48} className="mb-4" />
                  <Typography variant="h6">No materials added</Typography>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Material Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Quantity
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          UOM
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orderData.materialDetails.map((material, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {material.materialName || 'Not specified'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {material.quantity || 'Not specified'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {material.uom || 'Not specified'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 3 && (
            <div>
              {orderData.processDetails.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <Settings size={48} className="mb-4" />
                  <Typography variant="h6">No processes added</Typography>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Process Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Work Center
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Operator
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orderData.processDetails.map((process, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {process.processName || 'Not specified'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {process.workCenter || 'Not specified'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {process.operator || 'Not specified'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DetailCard = ({ icon, title, value }) => {
  return (
    <Paper elevation={1} className="p-4 flex flex-col">
      <div className="flex items-center mb-2">
        <div className="p-2 bg-blue-100 rounded-full text-blue-600 mr-3">
          {icon}
        </div>
        <Typography variant="subtitle2" className="font-semibold text-gray-700">
          {title}
        </Typography>
      </div>
      <Typography variant="body1" className="text-gray-800 pl-11">
        {value}
      </Typography>
    </Paper>
  );
};

export default OverviewFormDetails;
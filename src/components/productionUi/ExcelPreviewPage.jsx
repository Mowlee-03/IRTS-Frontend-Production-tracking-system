import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getWithExpiry } from '../../utils/localstorageWithExpiry';

const ExcelPreviewPage = () => {
    const navigate = useNavigate();
    const [selectedOrders, setSelectedOrders] = useState([]);

    useEffect(() => {
    // Check if SelectedOrderIds exists
    const selectedIdsData = getWithExpiry('SelectedOrderIds');
    if (!selectedIdsData) {
      // Redirect to NewOrderFromExcel if no selected IDs
      navigate('/production/new_orders/via_excel', { state: { error: 'No selected orders available. Please select orders to preview.' } });
      return;
    }

    const selectedIds = selectedIdsData.value;
    console.log('Retrieved selectedIds:', selectedIds); // Debug: Log retrieved IDs
 
    // Retrieve all orders from 'Order Template'
    const orderTemplate = getWithExpiry('Order Template');

    if (orderTemplate?.value?.length > 0 && selectedIds.length > 0) {
      // Filter orders based on selected IDs
      const filteredOrders = orderTemplate.value
        .map((order, index) => ({ id: index, ...order }))
        .filter(order => selectedIds.includes(order.id));
      setSelectedOrders(filteredOrders);
    }
  }, [navigate]);

  console.log(selectedOrders);
  
  return (
    <div>
{/* <pre>{selectedOrders}</pre> */}
    </div>
  )
}

export default ExcelPreviewPage
import React from 'react';
import { TrendingUp, Warning, CheckCircle } from '@mui/icons-material';
import StatusTile from '../common/StatusTile';

const mockData = [
  {
    title: 'Overdue Orders',
    count: 9,
    icon: <TrendingUp />,
    color: '#EF4444',
    gradient: 'linear-gradient(90deg, #FFE5E5 0%, #FFFFFF 100%)',
    progressData: [
      { label: 'Material Ready', value: 5, color: '#DC2626' },
      { label: 'Material Not Ready', value: 4, color: '#DC2626' },
      { label: 'PRO In Progress', value: 3, color: '#DC2626' },
      { label: 'PRO Not Start', value: 2, color: '#DC2626' },
    ],
  },
  {
    title: 'Near Deadline',
    count: 11,
    icon: <Warning />,
    color: '#F59E0B',
    gradient: 'linear-gradient(90deg, #FEF3C7 0%, #FFFFFF 100%)',
    progressData: [
      { label: 'Material Ready', value: 9, color: '#D97706' },
      { label: 'Material Not Ready', value: 2, color: '#D97706' },
      { label: 'PRO In Progress', value: 8, color: '#D97706' },
      { label: 'PRO Not Start', value: 1, color: '#D97706' },
    ],
  },
  {
    title: 'On Schedule',
    count: 30,
    icon: <CheckCircle />,
    color: '#10B981',
    gradient: 'linear-gradient(90deg, #DCFCE7 0%, #FFFFFF 100%)',
    progressData: [
      { label: 'Material Ready', value: 20, color: '#059669' },
      { label: 'Material Not Ready', value: 10, color: '#059669' },
      { label: 'PRO In Progress', value: 17, color: '#059669' },
      { label: 'PRO Not Start', value: 3, color: '#059669' },
    ],
  },
];

const ProductDeliveryStatusCard = () => {
  return (
    <div className="max-w-[2200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 xl:gap-10 2xl:gap-20  pt-3 pb-3">
        {mockData.map((item, idx) => (
          <StatusTile key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProductDeliveryStatusCard);
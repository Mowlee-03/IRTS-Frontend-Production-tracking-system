import React from 'react';
import { Card, CardContent } from '@mui/material';
import { LinearProgress } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

const AssemblyLineCard = ({
 details
}) => {
const {
    lineName,
    workers,
    batchId,
    progress,
    orders,
    output,
    nextMaintenance,
}=details

  const getProgressColor = () => {
    if (progress < 50) return '#ef4444'; // red-500
    if (progress < 80) return '#facc15'; // yellow-400
    return '#22c55e'; // green-500
  };
  return (
    <Card sx={{borderRadius:3,boxShadow:"2px 2px 4px 0px #00000040",}} className='border'>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CheckCircleIcon fontSize="small" className="text-green-500" />
            <span className="font-medium text-gray-800">{lineName}</span>
          </div>
          <span className="text-sm text-gray-500">Workers: {workers}</span>
        </div>

        <div>
          <p className="text-sm text-gray-500">Current Batch</p>
          <p className="font-medium text-gray-800">{batchId}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Progress</span>
          <span className="text-sm font-medium text-gray-800">{progress}%</span>
        </div>
        <LinearProgress
          variant="determinate"
          value={progress}
          className="h-2 rounded bg-gray-200"
          sx={{
            bgcolor:"#F1F5F9",
            '& .MuiLinearProgress-bar': {
              backgroundColor: getProgressColor()
            },
          }}
        />

        <div className="grid grid-cols-3 gap-4 lg:gap-16 pt-2">
          <div className="bg-blue-50 p-2 rounded-lg text-center">
            <p className="text-sm text-gray-500">Orders</p>
            <p className="text-lg font-medium text-gray-800">{orders}</p>
          </div>
          <div className="bg-blue-50 p-2 rounded-lg text-center">
            <p className="text-sm text-gray-500">Output</p>
            <p className="text-lg font-medium text-gray-800">{output}</p>
          </div>
          <div className="bg-blue-50 p-2 rounded-lg text-center">
            <p className="text-sm text-gray-500">Next Maintenance</p>
            <p className="text-lg font-medium text-gray-800">{nextMaintenance}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssemblyLineCard;

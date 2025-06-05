import React from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import { Select, MenuItem, Typography, FormControl, Autocomplete, TextField } from '@mui/material';
const data=[
  {
    "id": "Row-1",
    "data": [
      {
        "x": "Train",
        "y": 56
      },
      {
        "x": "Subway",
        "y": 88
      },
      {
        "x": "Bus",
        "y": 23
      },
      {
        "x": "Car",
        "y": 45
      },
      {
        "x": "Boat",
        "y":81
      },
      {
        "x": "Moto",
        "y": 28
      },
      {
        "x": "Moped",
        "y": 2
      },
      {
        "x": "Bicycle",
        "y": 47
      },
      {
        "x": "Others",
        "y": 87
      }
    ]
  },
  {
    "id": "Row-2",
    "data": [
      {
        "x": "Train",
        "y": 19
      },
      {
        "x": "Subway",
        "y": 97
      },
      {
        "x": "Bus",
        "y": 38
      },
      {
        "x": "Car",
        "y": 98
      },
      {
        "x": "Boat",
        "y": 22
      },
      {
        "x": "Moto",
        "y": 94
      },
      {
        "x": "Moped",
        "y": 74
      },
      {
        "x": "Bicycle",
        "y": 33
      },
      {
        "x": "Others",
        "y": 59
      }
    ]
  },
  {
    "id": "Row-3",
    "data": [
      {
        "x": "Train",
        "y": 22
      },
      {
        "x": "Subway",
        "y": 23
      },
      {
        "x": "Bus",
        "y": 4
      },
      {
        "x": "Car",
        "y": 78
      },
      {
        "x": "Boat",
        "y": 19
      },
      {
        "x": "Moto",
        "y": 77
      },
      {
        "x": "Moped",
        "y": 8
      },
      {
        "x": "Bicycle",
        "y": 93
      },
      {
        "x": "Others",
        "y": 28
      }
    ]
  },
]

const getCellColor = (value) => {
  if (value >= 70) return '#ffe0e0'; // Critical
  if (value >= 50) return '#fff1cc'; // Warning
  if (value>=0) return '#e6f0ff'; // Optimal
};

// Legend and count helper
const getHeatmapStats = (data) => {
  let optimal = 0, warning = 0, critical = 0, total = 0;

  data.forEach(row => {
    row.data.forEach(cell => {
      total++;
      if (cell.y >= 70) critical++;
      else if (cell.y >= 50) warning++;
      else optimal++;
    });
  });

  return { optimal, warning, critical, total };
};
const transportOptions = [
  { label: 'Train' },
  { label: 'Subway' },
  { label: 'Bus' },
  { label: 'Car' },
  { label: 'Boat' },
  { label: 'Moto' },
  { label: 'Moped' },
  { label: 'Bicycle' },
  { label: 'Others' },
];


const ProductHeatmap = () => {
const { optimal, warning, critical, total } = getHeatmapStats(data);
  return (
    <div className='flex flex-col bg-white h-full rounded-xl shadow-bg-shadow-2 border overflow-hidden'>
      <div className='p-3 flex justify-between items-center'>
        <p className='text-lg font-medium'>Product Details</p>
        <Autocomplete
  options={transportOptions}
  size="small"
  renderInput={(params) => (
    <TextField
      {...params}
      placeholder="Product Status"
      variant="outlined"
      sx={{
        p: 0,
        m: 0,
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px', // 👈 smaller border radius
          padding: '2px 5px', // 👈 compact padding
          fontSize: '0.875rem', // optional: small font
        },
        '& .MuiInputBase-input': {
          padding: '2px 5px', // 👈 reduce input area padding
        },
      }}
    />
  )}
  sx={{
    minWidth: 200,
    p: 0,
    m: 0,
  }}
/>


      </div>

      <div className='grow'>
          <ResponsiveHeatMap
            data={data}
            indexBy="id"
            margin={{ top: 0, right: 10, bottom: 10, left: 10 }}
            colors={(cell) => getCellColor(cell.value)}
            cellOpacity={1}
            cellBorderWidth={1}
            cellBorderColor="#fff"
            enableLabels={true}
            labelTextColor={(val) =>
              val.data.value >= 70 ? '#991b1b' : '#374151'
            }
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            animate={false}
          />
      </div>
    <div className='p-3 flex flex-wrap gap-4 text-sm '>
        <div className='flex items-center gap-2'>
          <span style={{ backgroundColor: "#e6f0ff" }} className='w-5 h-5 rounded'></span>
          <p>Optimal Items:</p>
          <span >{optimal}</span>
        </div>
        <div className='flex items-center gap-2'>
          <span style={{ backgroundColor: "#fff1cc" }} className='w-5 h-5 rounded'></span>
          <p>Warning Items</p>
          <span >{warning}</span>
        </div>
        <div className='flex items-center gap-2'>
          <span style={{ backgroundColor: "#ffe0e0" }} className='w-5 h-5 rounded'></span>
          <p>Critical Items</p>
          <span >{critical}</span>
        </div>
        <div className='flex items-center gap-2 ml-auto'>
          <p >Total Items:</p>
          <span >{total}</span>
        </div>
    </div>

    </div>
  );
};

export default ProductHeatmap;

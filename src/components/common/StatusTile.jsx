import React from 'react';
import { Box, Typography, LinearProgress, useTheme, Stack, Paper } from '@mui/material';

const StatusTile = ({ title, count, icon, progressData, color, gradient }) => {
  const theme = useTheme();

  return (
    <Paper 
      elevation={5} 
      sx={{ 
        background: gradient || 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
        boxShadow: `0px 10px 20px 0px ${color}40`, // adds transparency for the shadow
        borderRadius: '20px', 
        p: { xs: 2, md: 3 } ,
        position:"relative"
      }}
    >
       <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color:color,
          background:gradient.replace(/linear-gradient\([^,]+,/, 'linear-gradient(70deg,'),
          width:"65px",
          height:"65px",
          borderTopLeftRadius:"16px",
          borderTopRightRadius:"16px",
          borderBottomRightRadius:"16px",
          borderBottomLeftRadius:"100px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
      >
        {count}
      </Box>
      
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <Box 
          sx={{ 
            bgcolor: color,
            color: "#fff", 
            width: 48, 
            height: 48,
            borderRadius: '14px',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" fontWeight="medium" flexGrow={1}>
          {title}
        </Typography>
      </Stack>

      <Stack spacing={2} sx={{ px: 2 }}>
        {progressData.map((item, index) => (
          <Box key={index}>
            <Stack direction="row" justifyContent="space-between" mb={0.5}>
              <Typography variant="body2">{item.label}</Typography>
              <Typography variant="body2" fontWeight="medium">
                {item.value}
              </Typography>
            </Stack>
            <LinearProgress 
              variant="determinate" 
              value={Math.min(100, (item.value / 30) * 100)} 
              sx={{
                height: 8,
                borderRadius: 4,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: item.color
                },
                backgroundColor: theme.palette.grey[300]
              }} 
            />
          </Box>
        ))}
      </Stack>

    </Paper>
  );
};

export default StatusTile;

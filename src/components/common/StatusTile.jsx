import React from 'react';
import { Box, Typography, LinearProgress, useTheme, Stack, Paper } from '@mui/material';

const StatusTile = ({ title, count, icon, progressData, color, gradient }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={5}
      sx={{
        background: gradient || 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
        boxShadow: `0px 6px 12px 0px ${color}40`,
        borderRadius: { xs: '10px', sm: '12px' },
        p: { xs: 4, sm: 1.5, md: 2 },
        position: 'relative',
        minWidth: 0,
        maxWidth: { xs: '100%', sm: 360, md: 400 }, 
        
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          fontWeight: 'bold',
          color: color,
          background: gradient.replace(/linear-gradient\([^,]+,/, 'linear-gradient(70deg,'),
          width: { xs: '36px', sm: '48px', md: '52px' },
          height: { xs: '36px', sm: '48px', md: '52px' },
          borderTopLeftRadius: { xs: '10px', sm: '12px' },
          borderTopRightRadius: { xs: '10px', sm: '12px' },
          borderBottomRightRadius: { xs: '10px', sm: '12px' },
          borderBottomLeftRadius: { xs: '48px', sm: '64px', md: '80px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
         
        }}
      >
        {count}
      </Box>

      <Stack direction="row" alignItems="center" spacing={{ xs: 0.75, sm: 1.5 }} mb={{ xs: 0.75, sm: 1.5 }}>
        <Box
          sx={{
            bgcolor: color,
            color: '#fff',
            width: { xs: 28, sm: 36, md: 40 },
            height: { xs: 28, sm: 36, md: 40 },
            borderRadius: { xs: '8px', sm: '10px', md: '12px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& svg': {
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            },
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h6"
          fontWeight="medium"
          flexGrow={1}
          sx={{
            fontSize: { xs: '0.85rem', sm: '0.975rem', md: '1.02rem' },
          }}
        >
          {title}
        </Typography>
      </Stack>

      <Stack spacing={{ xs: 1, sm: 1, md: 2.5 }} sx={{ px: { xs: 0.75, sm: 1.5 } ,}}>
        {progressData.map((item, index) => (
          <Box key={index}>
            <Stack direction="row" justifyContent="space-between" mb={{ xs: 0.5, sm: 0.8 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.825rem', sm: '0.75rem' },
                }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="body2"
                fontWeight="medium"
                sx={{
                  fontSize: { xs: '0.625rem', sm: '0.75rem' },
                }}
              >
                {item.value}
              </Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              value={Math.min(100, (item.value / 30) * 100)}
              sx={{
                height: { xs: 4, sm: 6 },
                borderRadius: 4,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: item.color,
                },
                backgroundColor: theme.palette.grey[300],
              }}
            />
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

export default StatusTile;
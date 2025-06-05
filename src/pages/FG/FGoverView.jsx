import { Button, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import { buttonstyle1, buttonstyle2 } from '../../../Style'
import SafetyStockLevel from '../../components/StoreUi/Overview/SafetyStockLevel'
import MaterialDetails from '../../components/StoreUi/Overview/MaterialDetails'
import MonthlyDeliveryStatusFG from '../../components/fgUi/MonthlyDeliveryStatusFG'
import ProductHeatmap from '../../components/fgUi/ProductDetailsChart'

const FGoverView = () => {
  const [ViewPage,setViewPage]=useState('Overview')
    
  const getButtonStyles = (data) => {
    const isActive = ViewPage === data;
    const baseStyles = {
      textTransform: 'capitalize',
      fontWeight: 500,
      borderRadius: '8px',
      py:0.5,
      px:2,
      mx: 0.5,
      boxShadow:"none",
      fontSize:'small'
    };

    const styles = {
      'Overview': {
        bgcolor: isActive ? '#4318D1' : '#F4F6F8',
        color: isActive ? '#fff' : '#64748B',
      },
      'Safety Stock': {
        bgcolor: isActive ? '#FFE6E6' : '#F4F6F8',
        color: isActive ? '#EF4444' : '#64748B',
      },
      'Urgent Orders': {
        bgcolor: isActive ? '#FEF3C9' : '#F4F6F8',
        color: isActive ? '#DF8000' : '#64748B',
      },
      'Order Type': {
        bgcolor: isActive ? '#BBF7D0' : '#F4F6F8',
        color: isActive ? '#006626' : '#64748B',
      },
    };

    return { ...baseStyles, ...styles[data] };
  };
  return (
    <div className='h-full flex flex-col gap-2'>
         <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ gap: 1 }}
          >
                    {['Overview', 'Safety Stock', 'Urgent Orders', 'Order Type'].map((page) => (
                      <Button
                        key={page}
                        onClick={() => setViewPage(page)}
                        sx={getButtonStyles(page)}
                        variant="contained"
                      >
                        {page}
                      </Button>
                    ))}
          </Stack>
          <div className='grow '>
            <div className='h-auto lg-plus:h-[700px] 2xl-plus:h-full'>
               <Grid 
                container
                sx={{
                  height:{
                    xs:'auto',
                    lg:"100%"},
                  // bgcolor:"black"
                }}
                >
                  <Grid 
                  size={{xs:12}}
                  sx={{
                    pb:1,
                    height:{
                      xs:"auto",
                      lg:"52%"
                    },
                    // bgcolor:"green"
                    }}>
                    <Grid columnSpacing={2} rowSpacing={2} container 
                    sx={{
                      height:'100%',
                      // bgcolor:"blue"
                      }}>
                      <Grid  
                      size={{
                        xs:12,
                        lg:4.5,
                        xl:4}}
                      sx={{
                        height:{
                          xs:"350px",
                          lg:'100%'
                        },
                        // bgcolor:"green"
                      }}
                      >
                        <SafetyStockLevel/>
                      </Grid>
                      <Grid  
                      size={{
                        xs:12,
                        lg:7.5,
                        xl:8
                      }}
                      sx={{
                        height:{
                          xs:"350px",
                          lg:'100%'
                        },
                        // bgcolor:"green"
                      }}
                      >
                        <ProductHeatmap/>
                      </Grid>

                    </Grid>
                  </Grid>

                  <Grid 
                  size={{xs:12}}
                  sx={{
                    height:{
                      xs:"auto",
                      lg:"48%"
                    },
                    pt:1,
                    // bgcolor:"yellow"
                    }}>
                    <Grid container columnSpacing={2} rowSpacing={2}
                    sx={{
                      height:"100%"
                    }}
                    >
                      <Grid
                      size={{
                        xs:12,
                        lg:4.5,
                        xl:4
                      }}
                      sx={{
                        height:{
                          xs:'350px',
                          lg:'100%'
                        },
                        // bgcolor:"gray"
                      }}
                      >
                        <MaterialDetails/>
                      </Grid>
                      <Grid
                      size={{
                        xs:12,
                        lg:7.5,
                        xl:8}}
                      sx={{
                        height:{
                          xs:'450px',
                          lg:'100%'
                        },
                        // bgcolor:"gray"
                      }}
                      >
                        <MonthlyDeliveryStatusFG/>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
            </div>
           
          </div>
    </div>
  )
}

export default FGoverView
import { Grid } from '@mui/material'
import React from 'react'
import SafetyStockLevel from '../../components/StoreUi/Overview/SafetyStockLevel'
import SafetyStockTable from '../../components/StoreUi/Overview/SafetyStockTableView'
import MaterialDetails from '../../components/StoreUi/Overview/MaterialDetails'
import MaterialDetailsReport from '../../components/StoreUi/Overview/MaterialDetailsReport'

const StoreOverviewPage = () => {
  return (
    <div className='h-auto lg-plus:h-[700px] 2xl-plus:h-full pb-3 lg-plus:pb-0'>
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
              lg:"50%"
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
                <SafetyStockTable/>
              </Grid>

            </Grid>
          </Grid>

          <Grid 
          size={{xs:12}}
          sx={{
            height:{
              xs:"auto",
              lg:"50%"
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
                <MaterialDetailsReport/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </div>
  )
}

export default StoreOverviewPage
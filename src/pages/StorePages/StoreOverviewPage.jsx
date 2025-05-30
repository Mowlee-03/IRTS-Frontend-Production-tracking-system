import { Grid } from '@mui/material'
import React from 'react'

const StoreOverviewPage = () => {
  return (
    <div className='bg-green-100 h-full'>
        <Grid 
        container
        sx={{height:"100%",bgcolor:"black"}}
        >
          <Grid 
          size={{md:12}}
          sx={{height:"50%",bgcolor:"green"}}>
            <Grid columnSpacing={2} container sx={{height:'100%',bgcolor:"blue"}}>
              <Grid  
              size={{md:3}}
              sx={{bgcolor:"green"}}
              >


              </Grid>
              <Grid  
              size={{md:9}}
              sx={{bgcolor:"green"}}
              >


              </Grid>

            </Grid>
          </Grid>
          <Grid 
          size={{md:12}}
          sx={{height:"50%",bgcolor:"yellow"}}>
            
          </Grid>
        </Grid>
    </div>
  )
}

export default StoreOverviewPage
import React from 'react'
import SalesOverview from 'c:/Users/RTSLAP-PF57DAH4/Downloads/admin-dashboard/src/components/dashboard/SalesOverview'
import FinishedGoods from '../../components/admin/dashboard/FinishedGoods'
import IQCOverview from 'c:/Users/RTSLAP-PF57DAH4/Downloads/admin-dashboard/src/components/dashboard/IQCOverview'
import AccountsSummary from 'c:/Users/RTSLAP-PF57DAH4/Downloads/admin-dashboard/src/components/dashboard/AccountsSummary'
import StorePerformance from 'c:/Users/RTSLAP-PF57DAH4/Downloads/admin-dashboard/src/components/dashboard/StorePerformance'
import PurchaseOverview from 'c:/Users/RTSLAP-PF57DAH4/Downloads/admin-dashboard/src/components/dashboard/PurchaseOverview'
import { Grid } from '@mui/material'

const AdminDashboard = () => {
  return (
    <div className="h-full bg-green-200">
      <Grid container direction='column' sx={{height:"100%", bgcolor:"yellow"}}>
            <Grid  sx={{height:"65%",bgcolor:"gray"}}>
               <Grid container sx={{height:"100%", bgcolor:"yellow"}}>
                    <Grid sx={{width:"60%",bgcolor:"gray"}}>
                        <Grid container sx={{height:"40%",bgcolor:"blue"}}>
                              <SalesOverview />
                        </Grid>
                    </Grid>
               </Grid>
            </Grid>
            <Grid sx={{height:"35%",bgcolor:"black"}}>
               
            </Grid>
          
       
          {/* <FinishedGoods /> */}
          {/* <IQCOverview />
        
          <AccountsSummary />
          <StorePerformance />

          <PurchaseOverview /> */}

      </Grid>
    </div>
  )
}

export default AdminDashboard
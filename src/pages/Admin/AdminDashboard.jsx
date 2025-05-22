import React from 'react'

import { Grid } from '@mui/material'
import SalesOverview from '../../components/admin/dashboard/SalesOverview'
import FinishedGoods from '../../components/admin/dashboard/FinishedGoods'
import IQCOverview from '../../components/admin/dashboard/IQCOverview'
import AccountsSummary from '../../components/admin/dashboard/AccountsSummary'
import StorePerformance from '../../components/admin/dashboard/StorePerformance'
import ProductionView from '../../components/admin/dashboard/ProductionView'
import PerformanceStatus from '../../components/admin/dashboard/PerformanceStatus'
import PurchaseOverview from '../../components/admin/dashboard/PurchaseOverview'

const AdminDashboard = () => {
  return (
    <div className="h-full ">
      <Grid container direction='column' 
      sx={{
        height:"100%",
        //  bgcolor:"yellow"
         }}>
            <Grid  
            sx={{
                height:"65%",
                // bgcolor:"gray"
                }}>
               <Grid container 
               sx={{
                height:"100%", 
                // bgcolor:"yellow",
                }} >
                    <Grid 
                    sx={{
                        width:"60%",
                        // bgcolor:"gray",
                        }}>
                        <Grid container
                        sx={{
                            height:"40%",
                            // bgcolor:"green",
                            pb:1,pr:1
                            }}>
                              <SalesOverview />
                        </Grid>
                        <Grid container 
                        
                        sx={{
                            height:"60%",
                            // bgcolor:"white",
                            }}>
                             <Grid 
                             sx={{
                                // bgcolor:"gray",
                                py:1,
                                pr:1
                                }} 
                            size={{xl:7}}>
                                <ProductionView/>
                             </Grid>
                             <Grid 
                             sx={{
                              py:1,
                              px:1,
                              // bgcolor:"gray"
                             }}
                             size={{xl:5}}>
                                 <FinishedGoods />
                             </Grid>
                        </Grid>
                    </Grid>
                    <Grid sx={{
                      width:"40%",
                      pl:1,
                      pb:1
                      // bgcolor:"yellow"
                    }}>
                      <PerformanceStatus/>
                    </Grid>
               </Grid>
            </Grid>
            <Grid 
            sx={{
              height:"35%",
              // bgcolor:"black"

              }}>
               <Grid 
                container
                sx={{
                  height:"100%",
                  // bgcolor:"orange"
                }}
               >
                  <Grid 
                  size={{xl:4.2}}
                  // bgcolor="purple"
                  pr={1}
                  pt={1}
                  >
                    <AccountsSummary />
                  </Grid>

                  <Grid 
                  size={{xl:3}}
                  // bgcolor='lavender'
                  pt={1}
                  px={1}
                  >
                     <IQCOverview />
                  </Grid>

                  <Grid 
                  size={{xl:2.4}}
                  // bgcolor='peachpuff'
                  pt={1}
                  px={1}
                  >
                    <StorePerformance />
                  </Grid>

                  <Grid 
                  size={{xl:2.4}}
                  // bgcolor='green'
                  pt={1}
                  pl={1}
                  >
                     <PurchaseOverview />
                  </Grid>
               </Grid>
            </Grid>
          
       
         
         
        
          
          

         

      </Grid>
    </div>
  )

//   return (
//     <div className="h-full">
//       <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
//       <Grid container spacing={3} className="h-[calc(100%-60px)]">
//         {/* First row */}
//         <Grid item xs={12} md={6}>
//           <SalesOverview />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           {/* <PerformanceStatus /> */}
//         </Grid>

//         {/* Second row */}
//         <Grid item xs={12} md={6} lg={4}>
//           <ProductionView />
//         </Grid>
//         <Grid item xs={12} md={6} lg={4}>
//           <FinishedGoods />
//         </Grid>
//         <Grid item xs={12} lg={4}>
//           <IQCOverview />
//         </Grid>

//         {/* Third row */}
//         <Grid item xs={12} md={6} lg={4}>
//           <AccountsSummary />
//         </Grid>
//         <Grid item xs={12} md={6} lg={4}>
//           <StorePerformance />
//         </Grid>
//         <Grid item xs={12} lg={4}>
//           {/* <PurchaseOverview /> */}
//         </Grid>
//       </Grid>
//     </div>
//   )
}

export default AdminDashboard
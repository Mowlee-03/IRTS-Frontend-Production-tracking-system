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
    <div className="2xl-plus:h-full pb-4 2xl-plus:pb-0">
      <Grid container direction='column' 
      sx={{
        height:"100%",
        //  bgcolor:"yellow"
         }}>
            <Grid  
            sx={{
                height:{
                  xl:"auto",
                  '2xl':"65%"
                },
                // bgcolor:"gray",
                }}>
               <Grid container 
               sx={{
                height:"100%", 
                // bgcolor:"yellow",
                }} >
                    <Grid 
                    size={{
                      xs:12,
                      '2xl':7
                    }}
                    sx={{
                        // width:"60%",
                        height:"100%",
                        // bgcolor:"gray",
                        }}>
                        <Grid container
                        sx={{
                            height:{
                              xl:"200px",
                              "2xl":"40%"
                            },
                            // bgcolor:"green",
                            pb:1,pr:{
                              '2xl':1
                            }
                            }}>
                              <Grid 
                              sx={{
                                height:"100%"
                              }}
                              size={12}>
                                 <SalesOverview />
                              </Grid>
                             
                        </Grid>
                        <Grid container 
                        
                        sx={{
                            height:{
                              xl:"400px",
                              "2xl":"60%"
                            },
                            // bgcolor:"yellow",
                            }}>
                             <Grid 
                             sx={{
                              height:{
                                xs:"400px",
                                xl:"100%"
                              },
                                // bgcolor:"gray",
                                py:1,
                                pr:1,
                               
                                }} 
                            size={{
                              xs:12,
                              lg:7
                              }}>
                                <ProductionView/>
                             </Grid>
                             <Grid 
                             sx={{
                              height:{
                                xs:"400px",
                                xl:"100%"
                              },
                              py:1,
                              pl:1,
                              pr:{
                                '2xl':1
                              }
                              // bgcolor:"gray"
                             }}
                             size={{
                              xs:12,
                              lg:5
                              }}>
                                 <FinishedGoods />
                             </Grid>
                        </Grid>
                    </Grid>
                    <Grid 
                     size={{
                      xl:12,
                      '2xl':5
                    }}
                    sx={{
                      // width:"40%",
                      height:{
                        xs:"600px",
                        "2xl":"100%"
                      },
                      pl:{
                        "2xl":1
                      },
                      py:1,
                      pt:{
                        "2xl":0
                      }
                      // bgcolor:"yellow"
                    }}>
                      <PerformanceStatus/>
                    </Grid>
               </Grid>
            </Grid>

            <Grid 
            sx={{
              height:{
                xl:'auto',
                '2xl':"35%"},
              // bgcolor:"black"

              }}>
               <Grid 
                container
                sx={{
                  height:{
                    xs:"auto",
                    lg:"700px",
                  '2xl':"100%",
                },
                  // bgcolor:"orange"
                }}
               >
                  <Grid 
                  size={{
                    
                    lg:6,
                    '2xl':4.1
                  }}
                  // bgcolor="purple"
                  pr={1}
                  py={1}
                  pb={{
                    '2xl':0
                  }}
                  >
                    <AccountsSummary />
                  </Grid>

                  <Grid 
                  size={{
                    
                    lg:6,
                    '2xl':2.9
                  }}
                  // bgcolor='lavender'
                  py={1}
                  pb={{
                    '2xl':0
                  }}
                  pl={1}
                  pr={{
                    '2xl':1
                  }}
                  
                  >
                     <IQCOverview />
                  </Grid>

                  <Grid 
                  size={{
                     lg:6,
                    '2xl':2.5,
                  }}
                  // bgcolor='peachpuff'
                  pt={1}
                  pr={1}
                  pl={{
                    '2xl':1
                  }}
                  >
                    <StorePerformance />
                  </Grid>

                  <Grid 
                  size={{
                     lg:6,
                    '2xl':2.5,
                  }}
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
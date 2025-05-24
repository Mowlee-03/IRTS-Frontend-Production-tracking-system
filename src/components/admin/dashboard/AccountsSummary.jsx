"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material"
import { FileText, DollarSign, CreditCard, Truck } from "lucide-react"

const AccountCard = ({ icon, title, value, bgColor, iconBgColor }) => {
  return (
    <div className={`${bgColor} rounded-lg p-2 flex items-center `}>
      <div className={`${iconBgColor} p-2 rounded-full mr-3`}>{icon}</div>
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text- font-bold">{value}</div>
      </div>
    </div>
  )
}

const AccountsSummary = () => {

  return (
    <div className="h-full bg-white p-4 rounded-xl shadow-bg-shadow-4 flex flex-col gap-5 md-plus:gap-0 md-plus:justify-between">
      <div className=" flex justify-between items-center">
          <p className="font-medium">Accounts summary</p>
          
         <div className="flex gap-2">
              <FormControl size="small">
                <Select
                  id="year-select"
                  value=""
                  displayEmpty
                  sx={{
                    borderRadius: '8px',
                    minHeight: '32px',
                    fontSize: '0.75rem',
                    '.MuiSelect-select': {
                      padding: '4px 8px',
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Year
                  </MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small">
                <Select
                  id="month-select"
                  value=""
                  displayEmpty
                  sx={{
                    borderRadius: '8px',
                    minHeight: '32px',
                    fontSize: '0.75rem',
                    '.MuiSelect-select': {
                      padding: '4px 8px',
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Month
                  </MenuItem>
                  <MenuItem value="december">December</MenuItem>
                  <MenuItem value="november">November</MenuItem>
                </Select>
              </FormControl>
          </div>
      </div>
      <Grid container spacing={2} sx={{
        height:"80%",
        // bgcolor:"gray"
        }}>
        <Grid size={{xs:12,md:6}}>
          <AccountCard
          icon={<FileText size={20} className="text-white" />}
          title="Total Order Value"
          value="INR 91,00,000"
          bgColor="bg-red-100"
          iconBgColor="bg-red-500"
        />
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <AccountCard
           icon={<CreditCard size={20} className="text-white" />}
           title="Received Bill Amount"
           value="INR 20,00,000"
           bgColor="bg-green-100"
           iconBgColor="bg-green-500"
          />
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <AccountCard
            icon={<DollarSign size={20} className="text-white" />}
            title="Outstanding Bill Amount"
            value="INR 5,00,000"
            bgColor="bg-purple-100"
            iconBgColor="bg-purple-500"
          />
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <AccountCard
            icon={<Truck size={20} className="text-white" />}
            title="Total Delivery Value"
            value="INR 25,00,000"
            bgColor="bg-blue-100"
            iconBgColor="bg-blue-500"
          />
        </Grid>
        <Grid size={{xs:12,md:6}}>
           <AccountCard
          icon={<Truck size={20} className="text-white" />}
          title="Need To Delivery"
          value="INR 15,00,000"
          bgColor="bg-orange-100"
          iconBgColor="bg-orange-500"
        />
        </Grid>
        <Grid size={{xs:12,md:6}}>
               <AccountCard
          icon={<DollarSign size={20} className="text-white" />}
          title="Total Spending"
          value="INR 40,673k"
          bgColor="bg-cyan-100"
          iconBgColor="bg-cyan-500"
        />
        </Grid>
      </Grid>
    </div>
        

  )
}

export default AccountsSummary

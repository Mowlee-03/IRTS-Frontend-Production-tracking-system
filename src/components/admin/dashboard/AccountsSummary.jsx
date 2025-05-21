"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { FileText, DollarSign, CreditCard, Truck } from "lucide-react"

const AccountCard = ({ icon, title, value, bgColor, iconBgColor }) => {
  return (
    <div className={`${bgColor} rounded-lg p-4 flex items-center mb-3`}>
      <div className={`${iconBgColor} p-2 rounded-full mr-3`}>{icon}</div>
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-lg font-bold">{value}</div>
      </div>
    </div>
  )
}

const AccountsSummary = () => {
  const [timeFrame, setTimeFrame] = useState("month")

  return (
    <Card className="h-full shadow-md">
      <CardHeader
        title="Accounts summary"
        className="pb-0"
        action={
          <FormControl size="small" className="min-w-[100px]">
            <InputLabel id="month-select-label">Month</InputLabel>
            <Select
              labelId="month-select-label"
              id="month-select"
              value={timeFrame}
              label="Month"
              onChange={(e) => setTimeFrame(e.target.value)}
            >
              <MenuItem value="month">Month</MenuItem>
              <MenuItem value="quarter">Quarter</MenuItem>
              <MenuItem value="year">Year</MenuItem>
            </Select>
          </FormControl>
        }
      />
      <CardContent>
        <AccountCard
          icon={<FileText size={20} className="text-white" />}
          title="Total Order Value"
          value="INR 91,00,000"
          bgColor="bg-red-100"
          iconBgColor="bg-red-500"
        />
        <AccountCard
          icon={<CreditCard size={20} className="text-white" />}
          title="Received Bill Amount"
          value="INR 20,00,000"
          bgColor="bg-green-100"
          iconBgColor="bg-green-500"
        />
        <AccountCard
          icon={<DollarSign size={20} className="text-white" />}
          title="Outstanding Bill Amount"
          value="INR 5,00,000"
          bgColor="bg-purple-100"
          iconBgColor="bg-purple-500"
        />
        <AccountCard
          icon={<Truck size={20} className="text-white" />}
          title="Total Delivery Value"
          value="INR 25,00,000"
          bgColor="bg-blue-100"
          iconBgColor="bg-blue-500"
        />
        <AccountCard
          icon={<Truck size={20} className="text-white" />}
          title="Need To Delivery"
          value="INR 15,00,000"
          bgColor="bg-orange-100"
          iconBgColor="bg-orange-500"
        />
        <AccountCard
          icon={<DollarSign size={20} className="text-white" />}
          title="Total Spending"
          value="INR 40,673k"
          bgColor="bg-cyan-100"
          iconBgColor="bg-cyan-500"
        />
      </CardContent>
    </Card>
  )
}

export default AccountsSummary

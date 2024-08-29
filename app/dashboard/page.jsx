import React from 'react'
import Card from '../components/dashboard/card/Card'
import Transactions from '../components/dashboard/transactions/Transactions'
import Chart from '../components/dashboard/chart/Chart'
import Rightbar from '../components/dashboard/rightbar/Rightbar'

const Dashboard = () => {
  return (
    <div className="flex gap-[20px] mt-[20px] ">
      <div className="w-3/4 flex flex-col gap-[20px]">
        <div className="flex gap-[20px] justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="w-1/4">
        <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard
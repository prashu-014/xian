import React from 'react'
import DateChart from '../components/ui/DateChart'

const DashboardHeader = () => {
    return (
        <>
            <h1 className='text-3xl font-bold text-slate-600'>Dashboard</h1>
            <p className='text-sm my-1 text-slate-400'>01 - 25 March, 2020</p>
            <DateChart />
        </>
    )
}

export default DashboardHeader
import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import AsideBar from '../components/AsideBar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <main className='primary-blue grid grid-cols-4 py-4 pe-4 h-screen'>
            <AsideBar />
            <section className='col-span-3 bg-white rounded-xl p-4'>
                <DashboardHeader />
                <Outlet />
            </section>
        </main>
    )
}

export default Dashboard
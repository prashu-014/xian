import React from 'react'
import { Navlinks } from '../components/ui/Navlinks'

const AsideBar = () => {
    return (
        <aside className=' flex flex-col gap-20 text-white'>
            <h1 className='py-4 ps-4 text-3xl font-bold'>Virton +</h1>
            <Navlinks />
        </aside>
    )
}
export default AsideBar
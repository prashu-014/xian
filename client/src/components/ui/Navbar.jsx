import React from 'react'
import LoginBtn from './LoginBtn'

const Navbar = () => {
    return (
        <header className='flex justify-between items-center px-4 py-4 primary-blue'>
            <h1 className='text-2xl text-white font-bold'>
                Virton
            </h1>
            <LoginBtn />
        </header>
    )
}

export default Navbar
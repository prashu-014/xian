import React from 'react'
import image from '/image.jpg'
import Inputbox from './ui/Inputbox'
import LoginBtn from './ui/LoginBtn'

const Login = () => {
    return (
        <section className='p-8 flex justify-center  py-24'>
            <article className='grid md:grid-cols-2  rounded-2xl overflow-hidden '>
                <section className=' hidden md:flex md:justify-end '>
                    <img src={image} alt="" />
                </section>
                <section className=' primary-blue text-white p-10'>
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold'>Login</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae.</p>
                    </div>
                    <Inputbox label='User name' />
                    <Inputbox label='Password' />
                    <LoginBtn />
                </section>
            </article>
        </section>
    )
}

export default Login
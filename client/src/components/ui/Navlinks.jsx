import React from 'react'
import navlinks from '../../data/navlink'
import { Link } from 'react-router-dom'

export const Navlinks = () => {
    return (
        <ul className='flex flex-col '>
            {
                navlinks.map((link)=>(
                    <li className=' hover:bg-white hover:text-blue-950 border-t-2 border-slate-500 font-bold text-xl text-slate-400'><Link to={link.link} className='block py-3 ps-4'>{link.name}</Link></li>
                ))
            }
        
        </ul>
    )
}

import React from 'react'
import navlinks from '../../data/navlink'

export const Navlinks = () => {
    return (
        <ul className='flex flex-col '>
            {
                navlinks.map((link)=>(
                    <li className=' ps-4 py-3 hover:bg-white hover:text-blue-950 border-t-2 border-slate-500 font-bold text-xl text-slate-400'>{link.name}</li>
                ))
            }
        
        </ul>
    )
}

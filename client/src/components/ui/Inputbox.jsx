import React from 'react'

const Inputbox = ({label}) => {
  return (
    <div className='flex flex-col my-6 gap-1 '>
        <label htmlFor="">{label}</label> 
        <input type="text" className='p-2 w-full rounded-md text-black' />
    </div>
  )
}

export default Inputbox
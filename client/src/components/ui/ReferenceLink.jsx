import React from 'react'

const ReferenceLink = () => {
    return (
        <div className='bg-slate-300  p-6 my-4 flex justify-between items-center rounded-md'>
            <h1 className='text-xl font-bold text-slate-800'>Reference Link</h1>
            <div className='flex gap-2 items-center'>
                <p>Lorem ipsum dolor sit amet.</p>
                <button className='primary-blue px-4 py-1 rounded-md text-white font-bold'>Copy</button>
            </div>
        </div>
    )
}

export default ReferenceLink
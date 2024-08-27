import React from 'react'

export default function ResumenOne({MiniResumen}) {
    return (
        <div className='mt-3 bg-amber-100 p-2 rounded-lg border-2 border-amber-600'>
            
            <p className='text-black text-sm mt-1 mb-1'>
                {MiniResumen}
            </p>
        </div>
    )
}

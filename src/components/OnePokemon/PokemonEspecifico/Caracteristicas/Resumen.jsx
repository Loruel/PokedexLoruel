import React from 'react'

export default function Resumen({MiniResumen}) {
    return (
        <div className='mt-1 bg-amber-100 p-2 rounded-lg border-2 border-amber-600'>
            
            <p className='text-black text-base mt-1 mb-1'>
                {MiniResumen}
            </p>
        </div>
    )
}

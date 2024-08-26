import React from 'react'

export default function ResumenOne({MiniResumen}) {
    return (
        <div className='mt-3 flex flex-col justify-center'>
            <p className='mt-3 text-white text-sm '>
                {MiniResumen}
            </p>
        </div>
    )
}

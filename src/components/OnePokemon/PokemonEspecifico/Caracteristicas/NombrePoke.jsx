import React from 'react'

export default function NombrePoke({ Numero, Nombre }) {
    return (
        <div className='bg-[#51ad60] felx justify-center items-center w-full h-16 rounded-lg p-4 flex flex-col border-4 border-[#58c66e]'>
            <p className='text-white text-sm'>{Numero}</p>
            <h2 className='text-white text-xl font-bold'>{Nombre}</h2>
        </div>
    )
}

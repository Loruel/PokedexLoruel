import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonHomeOne() {
    return (
        <div className='flex justify-center mt-7'>
            <Link to='/'>
                <button className='bg-[#28aaff] w-64 h-10 ml-1 rounded-xl flex items-center justify-center text-white font-bold'>
                    PAGINA DE INICIO
                </button>
            </Link>
        </div>
    )
}

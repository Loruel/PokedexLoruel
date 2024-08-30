import React from 'react'
import { Link } from 'react-router-dom'

export default function SiguientePoke({Numero}) {
    


    return (
        <div className='flex justify-end'>
            <Link to={`/pokemon/${Numero}`}>
                <button className='text-white font-bold flex items-center justify-end'>

                    <img className='w-6 h-6'
                        src="../250.png" alt="" />
                    <p className='text-xs ml-2 dark:text-black'>
                        Siguiente
                    </p>

                </button>
            </Link>

        </div>
    )
}

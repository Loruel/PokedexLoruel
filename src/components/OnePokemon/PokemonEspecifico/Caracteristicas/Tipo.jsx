import React from 'react'
import { usePoke } from '../../../../context/PokeContext'


export default function Tipo({ Tipo1, Tipo2, Tipo3, Tipo4, Tipo5, Tipo6 }) {
    const { getTypeColor } = usePoke()

    return (
        <div className='mt-3 flex flex-col justify-center'>
            <h2 className='text-white font-bold text-base'>Tipo</h2>
            <div className='grid grid-cols-3 mt-3'>
                <p className={`text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Tipo1)}`}>{Tipo1}</p>
                {Tipo2 && (
                    <p className={`text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Tipo2)}`}>{Tipo2}</p>
                )}
                {Tipo3 && (
                    <p className={`text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Tipo3)}`}>{Tipo3}</p>
                )}
                {Tipo4 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Tipo4)}`}>{Tipo4}</p>
                )}
                {Tipo5 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Tipo5)}`}>{Tipo5}</p>
                )}
                {Tipo6 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Tipo6)}`}>{Tipo6}</p>
                )}
            </div>
        </div>
    )
}

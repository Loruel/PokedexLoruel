import React from 'react'
import { usePoke } from '../../PokeContext'

export default function DevilidadOne({ Devilidad1, Devilidad2, Devilidad3, Devilidad4, Devilidad5, Devilidad6, Devilidad7 }) {
    const { getTypeColor } = usePoke()

    return (
        <div className='mt-3 flex flex-col justify-center'>
            <h2 className='text-white font-bold text-base'>Devilidad</h2>
            <div className='grid grid-cols-3 mt-3'>
                <p className={`text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Devilidad1)}`}>{Devilidad1}</p>
                {Devilidad2 && (
                    <p className={`text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Devilidad2)}`}>{Devilidad2}</p>
                )}
                {Devilidad3 && (
                    <p className={`text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Devilidad3)}`}>{Devilidad3}</p>
                )}
                {Devilidad4 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Devilidad4)}`}>{Devilidad4}</p>
                )}
                {Devilidad5 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Devilidad5)}`}>{Devilidad5}</p>
                )}
                {Devilidad6 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Devilidad6)}`}>{Devilidad6}</p>
                )}
                {Devilidad7 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Devilidad7)}`}>{Devilidad7}</p>
                )}
            </div>
        </div >
    )
}

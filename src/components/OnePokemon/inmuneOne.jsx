import React from 'react'
import { usePoke } from '../../PokeContext'

export default function InmuneOne({ Inmune1, Inmune2, Inmune3, Inmune4, Inmune5, Inmune6, Inmune7 }) {
    const { getTypeColor } = usePoke()

    return (
        <div className='mt-3 flex flex-col justify-center'>
            <h2 className='text-white font-bold text-base'>Inmune</h2>
            <div className='grid grid-cols-3 mt-3'>
                {Inmune1 && (
                    <p className={`text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Inmune1)}`}>{Inmune1}</p>
                )}
                {Inmune2 && (
                    <p className={`text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Inmune2)}`}>{Inmune2}</p>
                )}
                {Inmune3 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Inmune3)}`}>{Inmune3}</p>
                )}
                {Inmune4 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Inmune4)}`}>{Inmune4}</p>
                )}
                {Inmune5 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Inmune5)}`}>{Inmune5}</p>
                )}
                {Inmune6 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Inmune6)}`}>{Inmune6}</p>
                )}
                {Inmune7 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Inmune7)}`}>{Inmune7}</p>
                )}
            </div>
        </div >
    )
}

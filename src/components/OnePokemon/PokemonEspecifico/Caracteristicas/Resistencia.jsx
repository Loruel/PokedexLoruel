import React from 'react'
import { usePoke } from '../../../../context/PokeContext'


export default function Resistencia({ Resistente1, Resistente2, Resistente3, Resistente4, Resistente5, Resistente6, Resistente7 }) {
    const { getTypeColor } = usePoke()

    return (
        <div className='mt-3 flex flex-col justify-center'>
            <h2 className='text-white font-bold text-base'>Resistente</h2>
            <div className='grid grid-cols-3 mt-3'>
                <p className={`text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Resistente1)}`}>{Resistente1}</p>
                {Resistente2 && (
                    <p className={`text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Resistente2)}`}>{Resistente2}</p>
                )}
                {Resistente3 && (
                    <p className={`text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Resistente3)}`}>{Resistente3}</p>
                )}
                {Resistente4 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Resistente4)}`}>{Resistente4}</p>
                )}
                {Resistente5 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Resistente5)}`}>{Resistente5}</p>
                )}
                {Resistente6 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Resistente6)}`}>{Resistente6}</p>
                )}
                {Resistente7 && (
                    <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center items-center text-white font-bold ${getTypeColor(Resistente7)}`}>{Resistente7}</p>
                )}
            </div>
        </div >
    )
}

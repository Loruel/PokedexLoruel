import React from 'react'
import { usePoke } from '../PokeContext'

export default function BasicFilter({}) {
const {filterPokes} = usePoke()

    return (
        <div className='h-10 flex justify-center'>

            <input className='rounded-lg w-64 px-3' type="text" placeholder='Nombre o Numero' onChange={filterPokes}/>
            {/* <button className='bg-[#28aaff] w-16 ml-3 rounded-xl flex items-center justify-center'>
                <img src="search.svg" alt="" />
            </button> */}

        </div>
    )
}

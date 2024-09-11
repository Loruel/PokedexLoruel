import React from 'react'
import PokemonsCards from './PokemonsCards'
import { usePoke } from '../../context/PokeContext'

export default function Pokemons() {
    const { searchPoke, visiblePoke, showMorePokemons } = usePoke()
    

    return (
        <div className='m-6'>

            <div className='lg:grid lg:grid-cols-4'>
            {searchPoke.slice(0, visiblePoke).map((data, i) =>
                <PokemonsCards key={i} data={data} />
            )}
            </div>
            
            <div className='flex justify-center'>
                <button
                onClick={showMorePokemons}
                 className='bg-[#28aaff] w-1/2 rounded-xl flex items-center justify-center h-10 lg:w-2/12'>
                    Show more
                </button>
            </div>

        </div>
    )
}

import React from 'react'
import PokemonsCards from './PokemonsCards'
import { usePoke } from '../PokeContext'

export default function Pokemons() {
    const { searchPoke } = usePoke()

    return (
        <div className='m-6'>

            {searchPoke.map((data, i) =>
                <PokemonsCards key={i} data={data} />
            )}

            <div className='flex justify-center'>
                <button className='bg-[#28aaff] w-1/2 rounded-xl flex items-center justify-center h-10'>
                    Show more
                </button>
            </div>

        </div>
    )
}

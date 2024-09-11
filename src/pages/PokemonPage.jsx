import React from 'react'
import { useParams } from 'react-router'

import Pokemon from '../components/OnePokemon/PokemonEspecifico/Pokemon'
import Footer from '../components/Footer/Footer'
import { usePoke } from '../context/PokeContext'


export default function PokemonPage() {
  const { id } = useParams()
  const { searchPoke } = usePoke()

  const selectedPokemon = searchPoke.find(pokemon => pokemon.Numero === id);

  return (

    <div className='bg-[#dc0a2d] dark:bg-[#3b3b3b]  '>

      {selectedPokemon ? (
        <Pokemon pokemon={selectedPokemon} />
      ) : (
        <p>Pokemon no encontrado</p>
      )}

      <Footer />

    </div>

  )
}

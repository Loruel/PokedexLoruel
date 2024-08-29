import React from 'react'
import OnePokemon from '../components/OnePokemon/onePokemon'
import { useParams } from 'react-router'
import Footer from '../components/footer'
import { usePoke } from '../PokeContext'

export default function PokemonPage() {
  const { id } = useParams()
  const { searchPoke } = usePoke()

  const selectedPokemon = searchPoke.find(pokemon => pokemon.Numero === id);

  return (

    <div className='bg-[#dc0a2d] dark:bg-[#3b3b3b]  '>

      {selectedPokemon ? (
        <OnePokemon pokemon={selectedPokemon} />
      ) : (
        <p>Pokemon no encontrado</p>
      )}

      <Footer />

    </div>

  )
}

import React from 'react'
import OnePokemon from '../components/onePokemon'
import { useParams } from 'react-router'
import { usePoke } from '../PokeContext'
import Footer from '../components/footer'

export default function PokemonPage() {
  const { id } = useParams()
  const { searchPoke } = usePoke()

  const selectedPokemon = searchPoke.find(pokemon => pokemon.Numero === id);

  return (

    <div className='bg-[#dc0a2d]'>

      {selectedPokemon ? (
        <OnePokemon pokemon={selectedPokemon} />
      ) : (
        <p>Pokemon no encontrado</p>
      )}

      <Footer />

    </div>

  )
}

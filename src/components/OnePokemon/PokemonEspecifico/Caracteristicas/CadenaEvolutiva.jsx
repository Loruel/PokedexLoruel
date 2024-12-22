import React from 'react'
import { usePoke } from '../../../../context/PokeContext'

export default function CadenaEvolutiva({ Evo1, Evo2, Evo3, Evo4 }) {
  const { searchPoke } = usePoke()

  const getPokeImageByName = (nombre) => {
    const pokemon = searchPoke.find(p => p.Nombre.toLowerCase() === nombre.toLowerCase())
    return pokemon ? pokemon.ImagenModoPixel : '/Ditto.png'
  }


  return (
    <div className='mt-5 flex flex-col justify-center'>
      <div className='bg-amber-100 p-2 rounded-lg border-2 border-amber-600'>
        <h2 className='text-black font-bold text-base'>
          CADENA EVOLUTIVA
        </h2>
        <div className='p-2'>

          {Evo1 && (<div
            className='w-full h-14 flex justify-center items-center'>
            <p className=''>
              {Evo1}
            </p>
            <figure className=''>
              <img className='w-16'
                src={getPokeImageByName(Evo1)} alt={Evo1} />
            </figure>
          </div>)}

          {Evo2 && (<div
            className='border-t-2 border-gray-500 w-full h-14 flex justify-center items-center'>
            <p>
              {Evo2}
            </p>
            <figure>
              <img className='w-16'
                src={getPokeImageByName(Evo2)} alt={Evo2} />
            </figure>

          </div>)}

          {Evo3 && (<div
            className='border-t-2 border-gray-500 w-full h-14 flex justify-center items-center'>
            <p>
              {Evo3}
            </p>
            <figure>
              <img className='w-16'
                src={getPokeImageByName(Evo3)} alt={Evo3} />
            </figure>
          </div>)}

          {Evo4 && (<div
            className='border-t-2 border-gray-500 w-full h-14 flex justify-center items-center'>
            <p>
              {Evo4}
            </p>
            <figure>
              <img className='w-16'
                src={getPokeImageByName(Evo4)} alt={Evo4} />
            </figure>

          </div>)}

        </div>
      </div>

    </div>
  )
}

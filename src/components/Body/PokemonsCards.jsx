import React from 'react'
import { Link } from 'react-router-dom';

export default function PokemonsCards({ data: { Numero, Nombre, Imagen, Tipo1, Tipo2 } }) {

  const getTypeColor = (type) => {
    const typeColors = {
      Normal: 'bg-normal',
      Lucha: 'bg-lucha',
      Volador: 'bg-volador',
      Veneno: 'bg-veneno',
      Tierra: 'bg-tierra',
      Roca: 'bg-roca',
      Bicho: 'bg-bicho',
      Fantasma: 'bg-fantasma',
      Acero: 'bg-acero',
      Fuego: 'bg-fuego',
      Agua: 'bg-agua',
      Planta: 'bg-planta',
      Eléctrico: 'bg-electrico',
      Psíquico: 'bg-psiquico',
      Hielo: 'bg-hielo',
      Dragón: 'bg-dragon',
      Siniestro: 'bg-siniestro',
      Hada: 'bg-hada'
    };
    return typeColors[type] || 'bg-black'
  };

  return (
    <Link to={`/pokemon/${Numero}`}>
      <div className='mb-7 lg:mb-4 lg:p-3'>

        <figure className='relative bg-white w-full p-5 rounded-lg border-8 border-[#dedede]'>
          <img className='rounded-lg' src={Imagen} alt="" />

          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute bottom-2 right-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>

        </figure>
        <div className='flex justify-center mt-2'>
          <div className='bg-[#51ad60] w-1/2 h-14 rounded-lg p-4 flex flex-col justify-center border-4 border-[#58c66e] '>
            <p className='text-white text-sm'>N° {Numero}</p>
            <h2 className='text-white'>{Nombre}</h2>
          </div>
          <div className='ml-3 flex flex-col justify-center'>
            <p className={`text-xs rounded-lg h-5 w-16 flex justify-center text-white font-bold ${getTypeColor(Tipo1)} mb-1`}>{Tipo1}</p>
            {Tipo2 && (
              <p className={`text-xs rounded-lg h-5 w-16 flex justify-center text-white font-bold ${getTypeColor(Tipo2)}`}>{Tipo2}</p>
            )}

          </div>
        </div>

      </div>
    </Link>
  )
}


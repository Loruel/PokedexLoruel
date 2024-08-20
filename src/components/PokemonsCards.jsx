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
      <div className='mb-7'>

        <figure className='bg-white w-full p-5 rounded-lg border-8 border-[#dedede]'>
          <img className='rounded-lg' src={Imagen} alt="" />
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


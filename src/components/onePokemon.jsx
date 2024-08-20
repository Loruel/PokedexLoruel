import React from 'react'
import { Link } from 'react-router-dom'

export default function OnePokemon({ pokemon: {Imagen, Numero, Nombre, Tipo1, Tipo2, Tipo3, Tipo4, Tipo5, Tipo6, Devilidad1, Devilidad2, Devilidad3, Devilidad4, Devilidad5, Devilidad6, Devilidad7, Altura, Peso, Categoria, Habilidad} }) {

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
        }
        return typeColors[type] || 'bg-black'
    }

    return (
        <div className='flex flex-col m-6'>

            <figure className='bg-white w-full p-5 rounded-lg border-8 border-[#dedede]'>
                <img className='rounded-lg' src={Imagen} alt="" />
            </figure>

            <div className='flex flex-col justify-center mt-2'>

                <div className='bg-[#51ad60] felx justify-center items-center w-full h-16 rounded-lg p-4 flex flex-col border-4 border-[#58c66e]'>
                    <p className='text-white text-sm'>{Numero}</p>
                    <h2 className='text-white text-xl font-bold'>{Nombre}</h2>
                </div>

                <div className='ml-2 mt-3 flex flex-col justify-center'>
                    <h2 className='text-white font-bold text-base'>Tipo</h2>
                    <div className='mt-3'>
                        <p className={`ml-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Tipo1)}`}>{Tipo1}</p>
                        <p className={`ml-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Tipo2)}`}>{Tipo2}</p>
                        <p>{Tipo3}</p>
                        <p>{Tipo4}</p>
                        <p>{Tipo5}</p>
                        <p>{Tipo6}</p>
                    </div>
                </div>

                <div className='ml-3 mt-3 flex flex-col justify-center'>
                    <h2 className='text-white font-bold text-base'>Devilidad</h2>
                    <div className='mt-3'>
                        <p className={`ml-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Devilidad1)}`}>{Devilidad1}</p>
                        <p className={`ml-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Devilidad2)}`}>{Devilidad2}</p>
                        <p className={`ml-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Devilidad3)}`}>{Devilidad3}</p>
                        <p className={`ml-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Devilidad4)}`}>{Devilidad4}</p>
                        <p>{Devilidad5}</p>
                        <p>{Devilidad6}</p>
                        <p>{Devilidad7}</p>
                    </div>
                </div >

                <div className='ml-3 mt-3 flex flex-col justify-center'>
                    <div>
                        <h2 className='text-white font-bold text-base'>Especificaciones</h2>
                        <div className='mt-3 text-white text-sm '>
                            <p>Altura: {Altura}</p>
                            <p>Peso: {Peso}</p>
                            <p>Categoria: {Categoria}</p>
                            <p>Habilidad: {Habilidad}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-7'>
                <Link to='/'>
                    <button className='bg-[#28aaff] w-64 h-10 ml-1 rounded-xl flex items-center justify-center text-white font-bold'>
                        PAGINA DE INICIO
                    </button>
                </Link>
            </div>

        </div>
    )
}

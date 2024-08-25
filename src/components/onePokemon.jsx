import React from 'react'
import { Link } from 'react-router-dom'

export default function OnePokemon({ pokemon: { Nombre
    , Numero
    , Tipo1
    , Tipo2
    , Tipo3
    , Tipo4
    , Tipo5
    , Tipo6
    , Devilidad1
    , Devilidad2
    , Devilidad3
    , Devilidad4
    , Devilidad5
    , Devilidad6
    , Devilidad7
    , Resistente1
    , Resistente2
    , Resistente3
    , Resistente4
    , Resistente5
    , Resistente6
    , Resistente7
    , Inmune1
    , Inmune2
    , Inmune3
    , Inmune4
    , Inmune5
    , Inmune6
    , Inmune7
    , Imagen
    , ImagenShiny
    , ImagenModoPixel
    , Altura
    , Peso
    , Categoria
    , Habilidad1
    , Habilidad2
    , Habilidad3
    , HabilidadOculta1
    , HabilidadOculta2
    , PuntosBasePS
    , PuntosBaseAtaque
    , PuntosBaseDefensa
    , PuntosBaseAtaqueEspecial
    , PuntosBaseDefensaEspecial
    , PuntosBaseVelocidad
    , SexoMasculino
    , SexoFemenino
    , Evo1
    , Evo2
    , Evo3
    , Evo4
    , MegaEvolución1
    , MegaEvolución2
    , MiniResumen
    , Región
    , Generación } }) {

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

            <figure className='relative bg-white w-full p-5 rounded-lg border-8 border-[#dedede]'>
                <img className='rounded-lg' src={Imagen} alt="" />
                <img className='absolute bottom-2 right-2' src="star.svg" alt="" />
            </figure>

            <div className='flex flex-col justify-center mt-2'>

                <div className='bg-[#51ad60] felx justify-center items-center w-full h-16 rounded-lg p-4 flex flex-col border-4 border-[#58c66e]'>
                    <p className='text-white text-sm'>{Numero}</p>
                    <h2 className='text-white text-xl font-bold'>{Nombre}</h2>
                </div>

                <div className='mt-3 flex flex-col justify-center'>
                    <h2 className='text-white font-bold text-base'>Tipo</h2>
                    <div className='grid grid-cols-3 mt-3'>
                        <p className={`text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Tipo1)}`}>{Tipo1}</p>
                        {Tipo2 && (
                            <p className={`text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Tipo2)}`}>{Tipo2}</p>
                        )}
                        {Tipo3 && (
                            <p className={`text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Tipo3)}`}>{Tipo3}</p>
                        )}
                        {Tipo4 && (
                            <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Tipo4)}`}>{Tipo4}</p>
                        )}
                        {Tipo5 && (
                            <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Tipo5)}`}>{Tipo5}</p>
                        )}
                        {Tipo6 && (
                            <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Tipo6)}`}>{Tipo6}</p>
                        )}
                    </div>
                </div>

                <div className='mt-5 flex flex-col justify-center'>
                    <div>
                        <h2 className='text-white font-bold text-base'>Especificaciones</h2>
                        <div className='mt-3 text-white text-sm '>
                            <p>Altura: {Altura}</p>
                            <p>Peso: {Peso}</p>
                            <p>Categoria: {Categoria}</p>
                            <p>Habilidad: {Habilidad1}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-3 flex flex-col justify-center'> 
                    <p className='mt-3 text-white text-sm '> 
                        {MiniResumen}
                    </p>
                </div>

            <div className='mt-3 flex flex-col justify-center'>
                <h2 className='text-white font-bold text-base'>Devilidad</h2>
                <div className='grid grid-cols-3 mt-3'>
                    <p className={`text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Devilidad1)}`}>{Devilidad1}</p>
                    {Devilidad2 && (
                        <p className={`text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Devilidad2)}`}>{Devilidad2}</p>
                    )}
                    {Devilidad3 && (
                        <p className={`text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Devilidad3)}`}>{Devilidad3}</p>
                    )}
                    {Devilidad4 && (
                        <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Devilidad4)}`}>{Devilidad4}</p>
                    )}
                    {Devilidad5 && (
                        <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Devilidad5)}`}>{Devilidad5}</p>
                    )}
                    {Devilidad6 && (
                        <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Devilidad6)}`}>{Devilidad6}</p>
                    )}
                    {Devilidad7 && (
                        <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Devilidad7)}`}>{Devilidad7}</p>
                    )}
                </div>
            </div >

            <div className='mt-3 flex flex-col justify-center'>
                <h2 className='text-white font-bold text-base'>Resistente</h2>
                <div className='grid grid-cols-3 mt-3'>
                    <p className={`text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Resistente1)}`}>{Resistente1}</p>
                    {Resistente2 && (
                        <p className={`text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Resistente2)}`}>{Resistente2}</p>
                    )}
                    {Resistente3 && (
                        <p className={`text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Resistente3)}`}>{Resistente3}</p>
                    )}
                    {Resistente4 && (
                        <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Resistente4)}`}>{Resistente4}</p>
                    )}
                    {Resistente5 && (
                        <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Resistente5)}`}>{Resistente5}</p>
                    )}
                    {Resistente6 && (
                        <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Resistente6)}`}>{Resistente6}</p>
                    )}
                    {Resistente7 && (
                        <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Resistente7)}`}>{Resistente7}</p>
                    )}
                </div>
            </div >

            <div className='mt-3 flex flex-col justify-center'>
                <h2 className='text-white font-bold text-base'>Inmune</h2>
                <div className='grid grid-cols-3 mt-3'>
                    {Inmune1 && (
                        <p className={`text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Inmune1)}`}>{Inmune1}</p>
                    )}
                    {Inmune2 && (
                        <p className={`text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Inmune2)}`}>{Inmune2}</p>
                    )}
                    {Inmune3 && (
                        <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Inmune3)}`}>{Inmune3}</p>
                    )}
                    {Inmune4 && (
                        <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Inmune4)}`}>{Inmune4}</p>
                    )}
                    {Inmune5 && (
                        <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Inmune5)}`}>{Inmune5}</p>
                    )}
                    {Inmune6 && (
                        <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Inmune6)}`}>{Inmune6}</p>
                    )}
                    {Inmune7 && (
                        <p className={`mt-2 text-sm rounded-lg h-6 w-20 flex justify-center text-white font-bold ${getTypeColor(Inmune7)}`}>{Inmune7}</p>
                    )}
                </div>
            </div >



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

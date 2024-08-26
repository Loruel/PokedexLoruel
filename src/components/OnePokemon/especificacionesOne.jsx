import React from 'react'

export default function EspecificacionesOne({ Altura, Peso, Categoria, Habilidad1 }) {
    return (
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
    )
}

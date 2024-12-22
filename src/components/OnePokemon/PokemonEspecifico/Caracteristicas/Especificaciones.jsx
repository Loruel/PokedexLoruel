import React from 'react'

export default function Especificaciones({ Altura, Peso, Categoria, Habilidad1, SexoMasculino, SexoFemenino }) {
    return (
        <div className='mt-5 flex flex-col justify-center'>
            <div className='bg-amber-100 p-2 rounded-lg border-2 border-amber-600'>
                <h2 className='text-black font-bold text-base'>
                    ESPECIFICACIONES
                </h2>
                <div className='mt-1 text-black text-base'>
                    <p>Altura: {Altura}</p>
                    <p>Peso: {Peso}</p>
                    <p>Categoria: {Categoria}</p>
                    <p>Habilidad: {Habilidad1}</p>
                </div>
            </div>
        </div>
    )
}

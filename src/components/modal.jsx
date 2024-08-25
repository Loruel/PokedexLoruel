import React from 'react'
import ModalTipos from './modalTipos'
import { usePoke } from '../PokeContext'

export default function Modal() {
    const { openMenu, toggleModal, toggleType, applyFilter } = usePoke()

    return (

        openMenu && (
            <div className='bg-black w-11/12 h-auto ml-1 mr-1 flex flex-col fixed rounded-xl z-50'>
                <div className='flex justify-end mr-2 mt-1'>
                    <button className='flex w-6 h-6 text-white font-extrabold justify-center'
                        onClick={toggleModal}>
                        X
                    </button>
                </div>

                <h2 className='text-white ml-4 mb-3 font-semibold text-base'>Tipo</h2>
                <div className='grid grid-cols-3 justify-items-center'>

                    {tipos.map((data, i) =>
                        <ModalTipos key={i} data={data} toggleType={toggleType} />
                    )}

                </div>
                <div className='flex justify-center'>
                    <button className='bg-[#28aaff] text-sm w-20 h-7 rounded-xl flex items-center justify-center mb-5 mt-4'
                        onClick={applyFilter}>
                        BUSCAR
                    </button>
                </div>


            </div>
        )

    )
}

const tipos = [
    { Tipo: 'Normal' },
    { Tipo: 'Lucha' },
    { Tipo: 'Volador' },
    { Tipo: 'Veneno' },
    { Tipo: 'Tierra' },
    { Tipo: 'Roca' },
    { Tipo: 'Bicho' },
    { Tipo: 'Fantasma' },
    { Tipo: 'Acero' },
    { Tipo: 'Fuego' },
    { Tipo: 'Agua' },
    { Tipo: 'Planta' },
    { Tipo: 'Eléctrico' },
    { Tipo: 'Psíquico' },
    { Tipo: 'Hielo' },
    { Tipo: 'Dragón' },
    { Tipo: 'Siniestro' },
    { Tipo: 'Hada' }]
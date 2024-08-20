import React from 'react'
import Modal from './modal'

export default function FilterOG({ pushRandomPoke, searchPoke, openMenu, toggleModal, toggleType, applyFilter }) {
    return (
        <div className='h-12 flex justify-center mt-2'>

            <button className='bg-black text-white h-10 font-bold w-48 rounded-lg' onClick={toggleModal}>
                BUSQUEDA AVANZADA
            </button>

            <button className='bg-[#28aaff] w-16 h-10 ml-1 rounded-xl flex items-center justify-center' onClick={pushRandomPoke}>
                <img src="random.svg" alt="" />
            </button>

            <Modal searchPoke={searchPoke} toggleModal={toggleModal} openMenu={openMenu} toggleType={toggleType} applyFilter={applyFilter} />

        </div>
    )
}

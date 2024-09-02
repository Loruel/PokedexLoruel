import React from 'react'
import ModalOG from './ModalOG/modalOG'
import { usePoke } from '../PokeContext'

export default function FilterOG() {
    const { toggleModal } = usePoke()

    return (
        <div className='h-12 flex justify-center mt-2 lg:w-1/2 lg:justify-start'>

            <button className='bg-black text-white h-10 font-bold w-48 rounded-lg lg:h-14 dark:bg-gray-400' onClick={toggleModal}>
                BUSQUEDA AVANZADA
            </button>

            <button className='bg-yellow-500 w-16 h-10 ml-1 rounded-xl flex items-center justify-center' >
                <div className='w-5/6 flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 w-5 h-5 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                </div>
            </button>

            <ModalOG />

        </div>
    )
}

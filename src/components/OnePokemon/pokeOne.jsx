import React from 'react'
import { usePoke } from '../../PokeContext';

export default function PokeOne({ Imagen, ImagenShiny }) {
    const { toggleShiny, togglePixel, imageMode, } = usePoke()

    let currentImage;
    if (imageMode === 'shiny') {
        currentImage = ImagenShiny;
    } else if (imageMode === 'pixel') {
        currentImage = ImagenModoPixel;
    } else {
        currentImage = Imagen;
    }

    return (
        <>
            <figure className='relative bg-white w-full p-5 rounded-lg border-8 border-[#dedede]'>
                <img className='rounded-lg' src={currentImage} alt="" />

                <div className='absolute bottom-2 -left-2 w-20 h-7 bg-yellow-500 rounded-r-lg flex justify-center items-center' onClick={toggleShiny}>
                    <p className='text-white font-bold'>
                        SHINY
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 w-5 h-5 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>

                </div>


                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute bottom-2 right-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>


                {/* <img className='absolute bottom-2 left-2' src="../4k.svg" alt="" onClick={togglePixel}/> */}
            </figure>
        </>
    )
}

import React from 'react'
import { usePoke } from '../../PokeContext';
import AnteriorPoke from './anteriorPoke';
import SiguientePoke from './siguientePoke';

export default function PokeOne({ Imagen }) {
    const { getTypeColor, toggleShiny, togglePixel, imageMode, } = usePoke()

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
            <div className='grid grid-cols-2  w-full h-10 mb-2 bg-purple-600'>

                <AnteriorPoke />

                <SiguientePoke />

            </div>

            <figure className='relative bg-white w-full p-5 rounded-lg border-8 border-[#dedede]'>
                <img className='rounded-lg' src={currentImage} alt="" />

                <div className='absolute bottom-2 -left-2 w-20 h-7 bg-yellow-500 rounded-r-lg flex justify-center items-center' onClick={toggleShiny}>
                    <p className='text-white font-bold'>
                        SHINY
                    </p>
                    <img className='w-5 h-5 ml-1' src="../starW.svg" alt="" />
                </div>

                <img className='absolute bottom-2 right-2' src="../heart.svg" alt="" />

                {/* <img className='absolute bottom-2 left-2' src="../4k.svg" alt="" onClick={togglePixel}/> */}
            </figure>
        </>
    )
}

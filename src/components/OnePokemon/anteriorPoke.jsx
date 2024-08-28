import React from 'react'
import { usePoke } from '../../PokeContext'
import { useNavigate } from 'react-router'


export default function AnteriorPoke() {
    const { getPreviousPokemon } = usePoke()
    const navegacion = useNavigate()

    const handleClick = () => {
        const prevPoke = getPreviousPokemon(currentIndex);
        navigate(`/pokemon/${prevPoke.Numero}`)
    };

    const prevPoke = getPreviousPokemon(currentIndex);

    return (
        <div>
            <button className='text-white font-bold flex items-center justify-start'>

                <p className='text-xs mr-2'>
                    Anterior
                </p>
                <img className='w-6 h-6'
                    src="../249.png" alt="" />

            </button>
        </div>
    )
}

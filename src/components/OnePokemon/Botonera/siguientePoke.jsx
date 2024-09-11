import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { usePoke } from '../../../context/PokeContext';


export default function SiguientePoke({ Numero }) {
    const { getNextPokemon } = usePoke();
    const [nextPokemon, setNextPokemon] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const pokemon = getNextPokemon(Numero);
        setNextPokemon(pokemon);
    }, [Numero, getNextPokemon]);

    const handleNextClick = () => {
        if (nextPokemon) {
            navigate(`/pokemon/${nextPokemon.Numero}`);  // Navegamos a la página del Pokémon anterior
        }
    };


    return (
        <div className='flex justify-end w-1/3'>

            <button
                onClick={handleNextClick}
                className='text-white font-bold flex items-center justify-end'>

                {nextPokemon && <img className='w-11 h-11' src={nextPokemon.ImagenModoPixel} alt={nextPokemon.Nombre} />}
                <p className='text-xs ml-2 dark:text-black'>
                    Siguiente
                </p>

            </button>


        </div>
    )
}

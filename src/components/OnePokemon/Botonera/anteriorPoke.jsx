import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { usePoke } from '../../../context/PokeContext';



export default function AnteriorPoke({Numero}) {
    const { getPreviousPokemon } = usePoke();
    const [previousPokemon, setPreviousPokemon] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const pokemon = getPreviousPokemon(Numero);
        setPreviousPokemon(pokemon);
    }, [Numero, getPreviousPokemon]);

    const handlePreviousClick = () => {
        if (previousPokemon) {
            navigate(`/pokemon/${previousPokemon.Numero}`);  // Navegamos a la página del Pokémon anterior
        }
    };


    return (
        <div className='w-1/3'>
            <button
                onClick={handlePreviousClick}
                className='text-white font-bold flex items-center justify-start'>

                <p className='text-xs dark:text-black'>
                    Anterior
                </p>
                {previousPokemon && <img className='w-11 h-11' src={previousPokemon.ImagenModoPixel} alt={previousPokemon.Nombre} />}

            </button>
        </div>
    )
}

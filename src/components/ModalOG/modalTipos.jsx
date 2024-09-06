import React from 'react'
import { usePoke } from '../../context/PokeContext';



export default function ModalTipos({ data: { Tipo } }) {
    const { getTypeColor, toggleType } = usePoke()

    const handleCheckboxChange = (event) => {
        const { checked, value } = event.target;
        toggleType(value, checked);
    };


    return (

        <div className='flex'>
            <p className={`text-white text-sm text-center w-16 h-5 mb-2 rounded-lg ${getTypeColor(Tipo)}`}>{Tipo}</p>
            <input className='ml-2 h-6'
                value={Tipo}
                type="checkbox"
                onChange={handleCheckboxChange} />
        </div>

    )
}

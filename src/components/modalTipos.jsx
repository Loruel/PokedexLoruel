import React from 'react'

export default function ModalTipos({ data: { Tipo }, toggleType }) {

    const getTypeColor = (type) => {
        const typeColors = {
            Normal: 'bg-normal',
            Lucha: 'bg-lucha',
            Volador: 'bg-volador',
            Veneno: 'bg-veneno',
            Tierra: 'bg-tierra',
            Roca: 'bg-roca',
            Bicho: 'bg-bicho',
            Fantasma: 'bg-fantasma',
            Acero: 'bg-acero',
            Fuego: 'bg-fuego',
            Agua: 'bg-agua',
            Planta: 'bg-planta',
            Eléctrico: 'bg-electrico',
            Psíquico: 'bg-psiquico',
            Hielo: 'bg-hielo',
            Dragón: 'bg-dragon',
            Siniestro: 'bg-siniestro',
            Hada: 'bg-hada'
        }
        return typeColors[type] || 'bg-black'
    }

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

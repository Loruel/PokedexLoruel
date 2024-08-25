import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

const PokeContext = createContext()

export function PokeProvider({ children }) {


    const [poke, setPoke] = useState([])///Almacena TODOS los pokes
    const [searchPoke, setSearchPoke] = useState([])///Almacena los pokes FILTRADOS en TEXTO
    const [randomPoke, setRandomPoke] = useState(null)//Almacena solo un pokemon ALEATORIO
    const [openMenu, setOpenMenu] = useState(false);///indica si el modal esta ABIERTO o CERRADO
    const [selectedTypes, setSelectedTypes] = useState([])///Almacena los pokes FILTRADOS en TIPO


    const toggleType = (type, isSelected) => {
        setSelectedTypes(prev =>
            isSelected ? [...prev, type] : prev.filter(t => t !== type)
        );
    }; ///Esta es la logica para que sirva el filtro de TIPO

    const applyFilter = () => {
        if (selectedTypes.length > 0) {
            const filtered = poke.filter(pokemon =>
                selectedTypes.includes(pokemon.Tipo1) ||
                selectedTypes.includes(pokemon.Tipo2)
            );
            setSearchPoke(filtered);
        } else {
            setSearchPoke(poke);
        }
        toggleModal();
    }; ///Segun yo este aplica ya el filtro TIPO y muestra los pokes de tipo x y cierra el modal al buscar


    const toggleModal = () => {
        setOpenMenu(!openMenu);
    }; /// Abre y cierra el modal

    const pushRandomPoke = () => {
        if (poke.length > 0) {
            const randomIndex = Math.floor(Math.random() * poke.length)
            setRandomPoke(poke[randomIndex])
        }
    } /// Aplica lo de RANDOM

    function filterPokes(e) {
        const target = e.target.value
        const rs = poke.filter(pokemon =>
            pokemon.Nombre.toLowerCase().includes(target.toLowerCase()) ||
            pokemon.Numero.toLowerCase().includes(target.toLowerCase()))
        setSearchPoke(rs)
    } /// Filtro por NOMBRE o NUMERO 

    async function getData() {
        try {
            const rs = await fetch('pokes.json')
            const rsjson = await rs.json()

            setPoke(rsjson)
            setSearchPoke(rsjson)

        } catch (error) {
            console.error(error)
        }
    } /// Jala los pokes de donde esten en este caso del .json

    useEffect(() => {
        getData()
    }, []) /// Carga los pokemos de getData


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
        return typeColors[type] || 'bg-black';
    }/// Aqui almacene los colores para los tipos

    const [imageMode, seImageMode] = useState('normal');

    const toggleShiny = () => {
        seImageMode(prev => (prev === 'shiny' ? 'normal' :'shiny'));
    };

    const togglePixel = () => {
        seImageMode('pixel')
    }/// para cambiar a las imagenes de SHINYS y PIXELS

    return (

        <PokeContext.Provider value={{ searchPoke, pushRandomPoke, filterPokes, openMenu, toggleModal, applyFilter, toggleType, getTypeColor, imageMode, togglePixel,toggleShiny }}>
            {children}
        </PokeContext.Provider>
    )
}

export function usePoke() {
    return useContext(PokeContext)
}
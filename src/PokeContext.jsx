import { createContext, useContext, useEffect, useState } from "react";

const PokeContext = createContext()

export function PokeProvider({ children }) {

    const [poke, setPoke] = useState([])
    const [searchPoke, setSearchPoke] = useState([])
    const [randomPoke, setRandomPoke] = useState(null)
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState([]) 

////////////////////////////

const toggleType = (type, isSelected) => {
    setSelectedTypes(prev =>
        isSelected ? [...prev, type] : prev.filter(t => t !== type)
    );
};

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
};

///////////////////////////

    const toggleModal = () => {
        setOpenMenu(!openMenu);
    };

    const pushRandomPoke = () => {
        if (poke.length > 0) {
            const randomIndex = Math.floor(Math.random() * poke.length)
            setRandomPoke(poke[randomIndex])
        }
    }

    function filterPokes(e) {
        const target = e.target.value
        const rs = poke.filter(pokemon =>
            pokemon.Nombre.toLowerCase().includes(target.toLowerCase()) ||
            pokemon.Numero.toLowerCase().includes(target.toLowerCase()))
        setSearchPoke(rs)
    }

    async function getData() {
        try {
            const rs = await fetch('pokes.json')
            const rsjson = await rs.json()

            setPoke(rsjson)
            setSearchPoke(rsjson)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (

        <PokeContext.Provider value={{ searchPoke, pushRandomPoke, filterPokes, openMenu, toggleModal, toggleType, applyFilter }}>
            {children}
        </PokeContext.Provider>
    )
}

export function usePoke() {
    return useContext(PokeContext)
}
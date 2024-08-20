import BasicFilter from './basicFilter'
import FilterOG from './filterOG'
import Pokemons from './Pokemons'


export default function Body({ filterPokes, pushRandomPoke, searchPoke, openMenu, toggleModal, toggleType, applyFilter }) {

  return (
    <div className='flex flex-col'>

      <div className=''>
        <BasicFilter filterPokes={filterPokes} />
        <FilterOG pushRandomPoke={pushRandomPoke} searchPoke={searchPoke} openMenu={openMenu} toggleModal={toggleModal}
          toggleType={toggleType} applyFilter={applyFilter} />
      </div>

      <Pokemons searchPoke={searchPoke} />

    </div>
  )
}

import BasicFilter from './basicFilter'
import FilterOG from './filterOG'
import Pokemons from './Pokemons'


export default function Body() {

  return (
    <div className='flex flex-col'>

      <div className=''>
        <BasicFilter />
        <FilterOG />
      </div>

      <Pokemons />

    </div>
  )
}

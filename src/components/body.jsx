import BasicFilter from './basicFilter'
import FilterOG from './filterOG'
import Pokemons from './Pokemons'


export default function Body() {

  return (
    <div className='flex flex-col'>

      <div className='lg:flex lg:items-center lg:justify-center lg:space-x-6 lg:mb-4'>
        <BasicFilter />
        <FilterOG />
      </div>

      <Pokemons />

    </div>
  )
}

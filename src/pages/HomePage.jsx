import React from 'react'
import Body from '../components/body'
import { usePoke } from '../PokeContext'
import Footer from '../components/footer'

export default function HomePage() {
  const { filterPokes, pushRandomPoke, searchPoke, openMenu, toggleModal, toggleType, applyFilter } = usePoke()

  return (
    <div className='bg-[#dc0a2d]'>

      <Body searchPoke={searchPoke} filterPokes={filterPokes} pushRandomPoke={pushRandomPoke} openMenu={openMenu} toggleModal={toggleModal} toggleType={toggleType} applyFilter={applyFilter} />

      <Footer />

    </div>
  )
}

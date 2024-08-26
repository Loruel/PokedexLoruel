import React from 'react'
import AnteriorPoke from './anteriorPoke'
import SiguientePoke from './siguientePoke'

export default function BotoneraOne() {
  return (
    <div className='grid grid-cols-3 w-full h-10 mb-2 p-2 bg-black rounded-lg'>

      <AnteriorPoke />

      <figure className='flex justify-center items-center'>
        <img className='w-3 h-3'
          src="../circlebutton.svg" alt="" />
      </figure>

      <SiguientePoke />

    </div>
  )
}

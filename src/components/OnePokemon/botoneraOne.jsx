import React from 'react'
import AnteriorPoke from './anteriorPoke'
import SiguientePoke from './siguientePoke'

export default function BotoneraOne({Numero}) {
  return (
    <div className='grid grid-cols-3 w-full h-10 mb-2 p-2 bg-black rounded-lg dark:bg-white'>

      <AnteriorPoke />

      <figure className='flex justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5 dark:stroke-black">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
        </svg>

      </figure>

      <SiguientePoke Numero={Numero}/>

    </div>
  )
}

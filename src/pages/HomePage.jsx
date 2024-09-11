import React from 'react'
import Body from '../components/Body/Body'
import Footer from '../components/Footer/Footer'
import FooterRedes from '../components/Footer/FooterRedes'


export default function HomePage() {

  return (
    <div className='bg-[#dc0a2d] dark:bg-[#3b3b3b]'>

      <Body />

      <FooterRedes />
      <Footer />

    </div>
  )
}

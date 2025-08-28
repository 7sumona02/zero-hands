import React from 'react'
import Info from './components/Info'
import Image from 'next/image'
import LoadingCarousel from './components/loading-carousel'
import Testimonials from './components/Testimonials'
import Bento from './components/Bento'
import About from './components/About'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'

const page = () => {
  return (
    <div className='relative'>
        <Hero />
        <Info />
        <Bento />
         <div className='pb-20'>
            <LoadingCarousel />
         </div>
         <Testimonials />
         <About />
         <Pricing />
         <CTA />
         <Footer />
    </div>
  )
}

export default page
'use client'
import {motion, useScroll, useTransform} from 'motion/react'
import { Playfair_Display } from 'next/font/google'
import { useRef } from 'react'
 
const pd = Playfair_Display({ subsets: ['latin'] })

const Testimonials = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const translateContent = useTransform(scrollYProgress, [0,1], [-120, 120])
  return (
    <div ref={ref} className='min-h-screen flex items-center justify-center relative'>
        <img src='/gradient.svg' className='w-full' />
        <div className={`absolute top-[40%] z-20 text-5xl max-w-xl leading-[4rem] font-medium text-white ${pd.className}`}>
            <h1>Trusted by fast movers & deep thinkers  everywhere.</h1>
        </div>
        <motion.div style={{y: translateContent}} className='absolute top-[18%] left-[50%] z-10'>
            <img src='/tcard1.svg' className='w-[30rem]' />
        </motion.div>
         <motion.div style={{y: translateContent}} className='absolute top-[28%] left-[10%] z-10'>
            <img src='/tcard2.svg' className='w-[30rem]' />
        </motion.div>
        <motion.div style={{y: translateContent}} className='absolute top-[52%] left-[50%] z-10'>
            <img src='/tcard3.svg' className='w-[30rem]' />
        </motion.div>
        <motion.div style={{y: translateContent}} className='absolute top-[62%] left-[10%] z-10'>
            <img src='/tcard4.svg' className='w-[30rem]' />
        </motion.div>
    </div>
  )
}

export default Testimonials
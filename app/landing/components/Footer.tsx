import React from 'react'

const Footer = () => {
  return (
    <div className='relative pt-36'>
        <div className='flex justify-between items-center max-w-6xl mx-auto text-xl py-12 font-medium text-[#98A4BC]'>
        <div>connect@futurixai.com</div>
            <div className='flex items-center gap-10'>
                <div>Terms of Service</div>
                <div>Privacy Policy</div>
            </div>
        </div>
        <div>
            <img src='/footer.svg' className='w-[40rem] absolute bottom-0 left-[24rem]' />
        </div>
    </div>
  )
}

export default Footer
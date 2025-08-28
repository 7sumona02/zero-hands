import { Playfair_Display } from 'next/font/google'
 
const pd = Playfair_Display({ subsets: ['latin'] })

const Info = () => {
  return (
    <div className='min-h-screen flex items-center justify-center pt-16 pb-96 relative'>
        <div className={`flex flex-col items- justify-center text-2xl space-y-10 max-w-4xl mx-auto ${pd.className}`}>
            <p className='pb-10 font-sans text-lg text-center tracking-wide'>OUR AIM</p>
            <p><span className='text-3xl font-medium italic'>In</span> an era defined by constant connection, when every notification bids for our attention,  when our productivity is measured by the speed of our response, we have little space left for deep work.</p>
            <p>Our focus has been fractured –</p>
            <p>by endless threads, by manufactured urgency,  and by platforms designed for data streams, not for human thought. What was promised as a tool for connection is now yours to command.</p>
            <p>We believe:</p>
            <div className='mx-auto pt-10'>
                <img src='/no.svg' alt='img' className='w-[24rem]' />
            </div>
        </div>
        <img
                src="/sep.svg" 
                alt="Cropped Image"
                className="w-full absolute inset-0 -translate-y-[24rem]"
            />
    </div>
  )
}

export default Info
import { Input } from '@/components/ui/input'
import { Playfair_Display } from 'next/font/google'
 
const pd = Playfair_Display({ subsets: ['latin'] })

const Hero = () => {
  return (
    <div className='min-h-screen w-screen flex justify-center items-center bg-[#5477A8] relative'>
        {/* navbar */}
        <div className='text-3xl font-medium text-white absolute top-8 left-10'><span className={`${pd.className}`}>zero</span> hands</div>
        <div className='h-52 w-screen bg-linear-to-t from-white to-white/0 absolute z-999 bottom-0'></div>
        <div className={`${pd.className} min-h-screen max-w-6xl mx-auto flex flex-col justify-center items-center`}>
        <div className='text-5xl font-medium max-w-xl text-white text-center leading-14 font-sans'>The email experience
            you&apos;ve been waiting for.</div>
        <div className='mt-10'>
            <div className="*:not-first:mt-2">
      <div className="relative md:w-[40rem] text-white">
        <Input
          className="peer ps-6 pe-12 shadow bg-white/5 backdrop-blur-lg rounded-lg border-none text-white py-10 text-3xl font-sans"
          placeholder="name@gmail.com"
          type="text"
        />
       <div>
         <span className="bg-white/10 backdrop-blur-lg rounded-lg text-white font-sans font-medium pointer-events-none absolute inset-y-2 end-2 flex items-center justify-center h-16 px-10 peer-disabled:opacity-50 text-2xl">
          Sign Up
        </span>
       </div>
      </div>
      <div className='text-neutral-300 font-sans text-xl text-center pt-5'>Sign up for early preview</div>
    </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
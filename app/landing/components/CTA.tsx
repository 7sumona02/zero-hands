import { Input2 } from '@/components/ui/input2'
import { Playfair_Display } from 'next/font/google'
 
const pd = Playfair_Display({ subsets: ['latin'] })

const CTA = () => {
  return (
    <div className={`${pd.className} min-h-screen max-w-6xl mx-auto flex flex-col justify-center items-center`}>
        <div className='text-8xl font-medium'>Start Exploring</div>
        <div className='mt-20'>
            <div className="*:not-first:mt-2">
      <div className="relative w-[40rem]">
        <Input2
          className="peer ps-6 pe-12 shadow-2xl bg-[#83B2F550] rounded-lg border-none text-black py-10 text-3xl font-sans"
          placeholder="name@gmail.com"
          type="text"
        />
       <div>
         <span className="bg-[#3D8EFE] rounded-lg text-white font-sans font-medium pointer-events-none absolute inset-y-2 end-2 flex items-center justify-center h-16 px-10 peer-disabled:opacity-50 text-2xl">
          Sign Up
        </span>
       </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default CTA
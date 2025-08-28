import { Playfair_Display } from 'next/font/google'
 
const pd = Playfair_Display({ subsets: ['latin'] })

const Pricing = () => {
  return (
    <div className='min-h-screen max-w-4xl mx-auto flex items-center justify-center relative z-10 pb-20'>
        <img src='/pricing.svg' className='absolute top-0' />
        <div className={`flex flex-col items-center justify-center text-2xl space-y-10 pt-40 ${pd.className}`}>
            <h1 className='text-5xl font-medium text-center max-w-3xl pb-16 leading-16'>What kind of inbox<br/> do you command?</h1>
            <div className='mt-8 flex'>
                <div className='h-[36rem] w-[20rem] bg-neutral-100 rounded-3xl shadow-2xl relative translate-x-7 translate-y-14'>
                    <img src='flow.svg' alt='' className='absolute -top-12 w-28 inset-0 left-[6.5rem]' />
                    <div className='flex flex-col justify-center items-center pt-32'>
                        <p className='text-3xl'>Flow Starter</p>
                        <p className='text-[#3D8EFE] mt-4'>free for all</p>
                        <button className='mt-6 text-white font-sans text-lg bg-[#3D8EFE] py-3 px-8 rounded-full'>Choose Flow Starter</button>
                        <div className='mt-6'>
                            <img src='/p1.svg' className='w-40' />
                        </div>
                    </div>
                </div>
                <div className='h-[42rem] w-[24rem] bg-neutral-100 rounded-3xl shadow-2xl relative z-999'>
                    <img src='inbox.svg' alt='' className='absolute -top-12 w-32 inset-0 left-[8rem]' />
                    <div className='flex flex-col justify-center items-center pt-32'>
                        <p className='text-3xl'>Inbox Master</p>
                        <p className='text-[#3D8EFE] mt-4'>$99.99/mon</p>
                        <button className='mt-6 text-white font-sans text-lg bg-[#3D8EFE] py-3 px-8 rounded-full'>Choose Flow Starter</button>
                        <div className='mt-8'>
                            <img src='/p1.svg' className='w-50' />
                        </div>
                    </div>
                </div>
                <div className='h-[36rem] w-[20rem] bg-neutral-100 rounded-3xl shadow-2xl relative -translate-x-7 translate-y-14'>
                    <img src='zero.svg' alt='' className='absolute -top-12 w-28 inset-0 left-[6.5rem]' />
                    <div className='flex flex-col justify-center items-center pt-32'>
                        <p className='text-3xl'>Zero Mode</p>
                        <p className='text-[#3D8EFE] mt-4'>Custom</p>
                        <button className='mt-6 text-white font-sans text-lg bg-[#3D8EFE] py-3 px-8 rounded-full'>Choose Flow Starter</button>
                        <div className='mt-6'>
                            <img src='/p1.svg' className='w-40' />
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
    </div>
  </div>
  )
}

export default Pricing
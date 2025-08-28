import { Playfair_Display } from 'next/font/google'
 
const pd = Playfair_Display({ subsets: ['latin'] })

const About = () => {
  return (
    <div className='min-h-screen flex flex-col-reverse items-center justify-center relative pb-60'>
        <div className={`flex flex-col items- justify-center text-2xl space-y-10 mt-10 max-w-lg mx-auto text-center ${pd.className}`}>
            <p>We&apos;re building something different with Zero Hands. It&apos;s a calm, intentional way to manage your communication. One place for clarity, focus, and flow.</p>
            <p>We put your time and attention first.</p>
            <p>We obsess over thoughtful, minimalist design that works the way your brain does, not the other way around.</p>
            <p>We believe:</p>
            <p>Because we&apos;d rather you spend less time in your inbox, and more time doing what matters.</p>
        </div>
        <img src='/about.svg' className='w-[70%] mx-auto' />
    </div>
  )
}

export default About
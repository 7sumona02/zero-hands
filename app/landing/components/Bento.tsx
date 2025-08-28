import { Playfair_Display } from 'next/font/google'
 
const pd = Playfair_Display({ subsets: ['latin'] })

type BentoProps = {
  imgURL: string
  title: string
  desc: string
  className?: string
}

const Bento = () => {
  return (
    <div className='min-h-screen max-w-4xl mx-auto flex items-center justify-center pt-96 relative z-10 pb-20'>
        <div className={`flex flex-col items-center justify-center text-2xl space-y-10 ${pd.className}`}>
            <p className='pb-10 font-sans text-lg text-center tracking-wider'>YOUR ZERO DITRACTION ZONE</p>
            <h1 className='text-5xl font-medium text-center max-w-3xl leading-16 pb-16'>A smarter way to handle email — with clarity, speed, and zero effort.</h1>
            <div className='w-full flex flex-col gap-6'>
              <div className='flex md:flex-row flex-col gap-6'>
                 <BentoCard imgURL='/b1.svg' title='Instant Triage'
               desc='Don’t drown in 50+ emails. Zero Hands filters the chaos and surfaces only the messages that actually need your attention — based on urgency, relevance, and your past behavior. Your brain can handle 4, not 40.'
                className='w-3/5 bg-[#D0E5F2]' />
                 <BentoCard imgURL='/b2.svg' title='Replies, Ready When You Are'
               desc='Before you even open the email fully, a reply is ready. Tailored to your tone, your style, and the context. Just hit Enter. Yes, it’s that fast.'
                className='md:w-[40rem] bg-[#EFDBF2]' />
              </div>
              <div className='flex md:flex-row flex-col gap-6'>
                 <BentoCard imgURL='/b3.svg' title='Auto Attachments'
               desc='Before you even open the email fully, a reply is ready. Tailored to your tone, your style, and the context. Just hit Enter. Yes, it’s that fast.'
                className='md:w-[40rem] bg-[#E7ECF3]' />
                 <BentoCard imgURL='/b4.svg' title='Command-First Interface'
               desc='Emails at the speed of thought. Navigate, reply, sort — all with a few keystrokes. Zero Hands is designed for flow, not friction.'
                className='w-2/5 bg-[#DBE6FB]' />
              </div>
              <div className='flex md:flex-row flex-col gap-6'>
                 <BentoCard imgURL='/b5.svg' title='Smart Suggestions'
               desc='Emails at the speed of thought. Navigate, reply, sort — all with a few keystrokes. Zero Hands is designed for flow, not friction.'
                className='w-3/5 bg-[#DBE6FB]' />
                 <BentoCard imgURL='/b6.svg' title='Smart Groups'
               desc='Email threads, reimagined. Create groups like you do in messaging apps. One shortcut, and the whole team is looped in — no CC hassle.'
                className='md:w-[40rem] bg-[#E7ECF3]' />
              </div>
            </div>
    </div>
  </div>
  )
}

export default Bento

const BentoCard = ({imgURL, title, desc, className}: BentoProps) => {
    return (
        <div className={`w-3/5 h-[40rem] rounded-3xl p-8 ${className}`}>
                    <img src={imgURL} alt='bento' className='rounded-2xl' />
                    <div className='space-y-4 mt-8'>
                        <div className="title">{title}</div>
                        <div className="desc text-lg font-sans">{desc}</div>
                    </div>
                </div>
    )
}
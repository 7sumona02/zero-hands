import { Badge } from '@/components/ui/badge'
import React from 'react'

const HiringCard = ({name, title, date }: {name: string, title: string, date: string}) => {
  return (
    <div className='flex items-center gap-10 py-2.5'>
        <div className='w-[90px] text-xl font-semibold text-neutral-700'>{name}</div>
        <div className='w-[45px]'><Badge className='bg-[#3D8EFE] text-sm font-semibold'>Hiring</Badge></div>
        <div className='text-neutral-500 font-medium text-xl w-[200px]'>{title}</div>
        <div className='text-neutral-500 font-medium text-xl w-[80px]'>{date}</div>
        <div className='flex items-center gap-3 pl-10'>
            <div>
                <img src='/ai.svg' className='size-6' />
            </div>
            <div>
                <img src='/timelapse.svg' className='size-6' />
            </div>
        </div>
    </div>
  )
}

export default HiringCard
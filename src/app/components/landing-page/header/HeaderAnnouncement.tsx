"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';

export function HeaderAnnouncement()
{
    return (
        <div className='flex items-center justify-center
         bg-[#1f1f1e] text-sm pb-2
         text-white/70 px-4 gap-2 border-b border-white/5'>
            <span className='text-main-color font-bold mt-3 mr-2
            bg-main-color/30 rounded-full px-2 py-1 text-xs'>
                NEW
            </span>
            {/* <span 
            className='pt-3 text-sm underline
             decoration-gray-400 decoration-2
              hover:decoration-gray-700
               transition-colors  text-center'>
                Practice like it's real - 
                Perform like it's easy!
            </span> */}

            <span 
            className='pt-3 text-xs
              text-white/70 font-semibold
                text-centern tracking-wider'>
                Practice like it's real - 
                Perform like it's easy!
            </span>
              

            <Button
            className="group mt-3 ml-2 mb-1 px-2 w-28 h-8 md:w-30 md:h-10
                bg-transparent 
                hover:bg-white/10 text-[#D6B5E5]
                transition-all duration-200 ease-out
                ">
                <Icon icon="boxicons:sparkle-filled"
                className='' width={2} height={2}/>
                Get Plus
                <Icon icon = "lucide:arrow-right" 
                className='md:ml-2
                 transition-transform  duration-300
                 ease-out
                 group-hover:-rotate-45
                '/>
            </Button>
        </div>
    )
}
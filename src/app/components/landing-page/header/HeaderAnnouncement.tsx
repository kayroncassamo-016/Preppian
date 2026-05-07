"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';

export function HeaderAnnouncement()
{
    return (
        <div className='flex items-center justify-center
         bg-accent text-sm pb-2
         text-gray'>
            <span className='text-main-color font-bold mt-3 mr-2
            bg-main-color/30 rounded-full px-2 py-1 text-xs'>
                NEW
            </span>
            <Link href ="/subscribe"
            className='pt-3 text-sm underline
             decoration-gray-400 decoration-2
              hover:decoration-gray-700
               transition-colors'>
                Practice like it's real - 
                Perform like it's easy!
            </Link>
              

            <Button
            className="group mt-3 ml-2 mb-1 px-2
                bg-transparent
                border-b border-blue-500
                border-t border-blue-500
                text-blue-500
                hover:border-blue-400
                rounded-full
                transition-all duration-200 ease-out
                ">
                <Icon icon="boxicons:sparkle-filled"
                className='h-10 w-10'/>
                Get Pro
                <Icon icon = "lucide:arrow-right" 
                className='ml-2
                 transition-transform  duration-300
                 ease-out
                 group-hover:-rotate-45
                '/>
            </Button>
        </div>
    )
}
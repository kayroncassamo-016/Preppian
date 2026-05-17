import Link from 'next/link'
import { Logo } from '@/src/app/assets/Logo'
import { Icon } from '@iconify/react'
export function Footer()
{
    return (
        <>
        <footer className='bg-[##1f1f1e] flex items-center gap-10
        justify-center'>
            <Link href ="/"
            className="flex items-center ml-2
          lg:ml-9">
                   <Icon icon = "fluent:brain-circuit-32-regular"
                           color="#b3b3b3"
                           className="rounded-md p-1 hover:bg-gray-600/10 
                           shrink-0 md:w-8  md:h-8 w-6 h-6"  />
                         
                <span className="font-bold
                text-white/70 ml-2 
                tracking-wider text-xs md:text-sm">
                    Preppian
                </span>
            </Link>

            <nav className=' flex gap-5 lg:gap-10 text-white/40'>
                <Link href={''}
                
                className='font-normal text-sm hover:text-white/80 transition-colors'>
                    ■ Home
                </Link>

                <Link href={'/'}
                className='text-sm hover:text-white/80 transition-colors'>
                    ■ About
                </Link>

                <Link href={'/'}
                 className='text-sm hover:text-white/80 transition-colors'>
                     ■ Pricing
                </Link>

                <Link href={'/'}  
                    className='text-sm hover:text-white/80 transition-colors'>
                     ■ Contact
                </Link>
            </nav>
        </footer>
            <p className='text-muted-foreground text-xs text-center mt-10'>
                &copy; {} Preppian.  All rights reserved.{" "}
                {new Date().getFullYear()}
            </p>
       </>
    )
}

"use client"
import {motion} from "framer-motion"

export function AppStats() 
{
const stats = [

    {
        number:'12k+',
        label: 'Users'
    },

    {
        number:'98%',
        label: 'Satisfaction'
    },

    {
        number:'4.9★',
        label: 'Rating'
    },

    {
       number:'3x',
       label: 'Faster prep'
    }
]

    return (
        <section className="">

             <motion.div className="flex flex-row justify-center gap-10 md:gap-20 pb-10
              items-center px-4"
             initial={{opacity:0, y:20}}
             whileInView={{opacity:1, y:0}}
             viewport={{once:true}}
             transition={{duration:0.8, delay:0.4}}
             > 
            
                  {stats.map((stat,index)=>
                  {
                    return (
                     
                            <div  key={index} className="flex flex-col gap-2 items-center">

                                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                {stat.number}
                                </h1>

                                <p className="text-xs sm:text-sm text-white/70">
                                {stat.label}
                                </p>
                            </div>
                    )
                 })
                
               }
               </motion.div>
        </section>
    )
}
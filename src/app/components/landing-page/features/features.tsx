"use client"
import { Target, Zap ,Shield, MessageSquare,
    TrendingUp , Lock, Watch, Clock,
} from "lucide-react"

import {delay, motion} from "framer-motion"

import {Card, CardTitle, CardDescription,CardContent} from 
"@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const Features = () =>
{


const features = 
[
    { 
        badgeContent:'Feedback',
        badgeBackground: 'bg-orange-100 text-orange-800',
        icon: Zap,
        iconColor: "#9A3412",
        label: "response per session",
        title: '~3s',
        subtitle: "Instant AI Feedback",
        description:"Get Instant breakdown of your answer within seconds. "
        +"No waiting, know exactly where you stand."
    },

    {
        badgeContent:'Score',
        badgeBackground: 'bg-blue-100 text-blue-800',
        icon: Clock,
        iconColor:'#1E40AF',
        label: 'clarity, confidence and precision',
        title: "0-100",
        subtitle:'Performance Score',
        description:"Track your numbers and watch them climb."

    },

   {
    badgeContent:"Bank",
    badgeBackground: 'bg-green-100 text-green-800',
    icon: Shield,
    iconColor: '#166534',
    label:'real interview questions',
    title:'500+',
    subtitle:"Real Interview Questions",
    description: "Practice with questions pulled from top companies such as "
    +"FAANG, startups, and everything in between."
   },

   {
    badgeContent:"Progress",
     badgeBackground: 'bg-red-100 text-red-800',
    icon: TrendingUp,
    iconColor: '#991B1B',
    label:'avarage improvement in 2 weeks',
    title: '↑40%',
    subtitle: "Track Your Growth",
    description: "See your confidence and accuracy improve over time with detailed progress charts.",
  },
  {
    badgeContent:"Coach",
    icon: MessageSquare,
    iconColor:'#6B21A8',
    badgeBackground: 'bg-purple-100 text-purple-800',
    label:'personalized AI coach for every answer you give.',
    title:'1:1',
    subtitle: "Personalized AI Coach",
    description: "Tailored advice based on your experience level, target role, and specific weak points.",
  },
  {
    badgeContent:"Pro",
    badgeBackground: 'bg-violet-100 text-violet-800',
    icon: Lock,
    iconColor:'#5B21B6',
    label:"visible transcripts per session",
    title:"0",
    subtitle: "Hidden Transcript Mode",
    description: "You never see what you said forcing you to perform under real pressure, just like the actual interview.",
  },
]
//  <section className="bg-[#f3f3f3] flex flex-col pb-20 " - antes
return (
    <section className="bg-[#1f1f1e] flex flex-col pb-20 "
    id = "features">
        
        <motion.div className="flex flex-col items-center"
         initial = {{opacity:0, y:20}} 
        //  animate = {{opacity:1, y:0}}
         whileInView={{opacity:1,y:0}}
         viewport={{once:true}}
         transition ={{duration:0.6, delay:0.2}}>
        
            <span className="text-[#d97757] block text-center
            font-bold text-sm pt-2 tracking-widest py-5">
                FEATURES
            </span>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold
            w-full max-w-xl mx-auto text-center md:max-w-3xl px-4">
            
            Everything you need to know to ace your 
            <span className="text-[#d97757]"> next interview </span>
                
            </h1>
        </motion.div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-3
        w-full max-w-xl mx-auto sm:max-w-7xl px-8
        ">
            {
              features.map ((feature,index) => {

                const Icon = feature.icon

                return (
                    <motion.div key={index}
                    initial ={{opacity:0,y:20}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{delay:index*0.1}}
                    className="">
                    
                    <Card className="shadow-sm hover:shadow-md
                    transition-shadow duration-300 ease-out
                     hover:border-main-color/80 h-full bg-white/10
                     ">
                        <CardTitle className="flex justify-between px-4
                        items-center">
                            <Badge
                            className={feature.badgeBackground}>
                                {feature.badgeContent}
                            </Badge>
                            <Icon
                            className="bg-accent rounded-md p-2 shrink-0 w-8 h-8"
                            color={feature.iconColor}/>
                        </CardTitle>

                        <CardContent>
                            <div>
                                <h1 className = "text-3xl font-bold text-white tracking-widest">
                                    {feature.title}
                                </h1>
                                <span className="text-md text-white/70
                                tracking-widest">{feature.label}</span><br/><br/>
                            </div>
                            <div className="h-px bg-white/8"/>
                            <div className ="font-normal text-white/70 pt-2">
                                <p className="font-semibold">{feature.subtitle}</p>
                                <p className="tracking-wide">{feature.description}</p>
                            </div>
                        </CardContent>
                        
                       </Card>
                     </motion.div>
                    
                )
              }
            )}
        </div>

    </section>
)
}
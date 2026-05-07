"use client"
import {motion} from "framer-motion";
import {Mic, Brain, BarChart3,MessageCircle, CircleDot, MessageSquareQuote, ChartNoAxesCombined, Dice1} from "lucide-react"
import {Card, CardContent,CardHeader,CardTitle}
 from "@/components/ui/card";
import { Fragment } from "react/jsx-runtime";

export const HowItWorks = () =>
{

const steps = [
    {
    
        icon: Mic,
        step: "01",
        title: "Record your answer",
        description: "Hit record and answer like it's the real thing."+
        " Pure performance mode, just like the actual interview.",
    },

     {
        icon: MessageCircle,
        step: "02",
        title: "Get Instant Response",
        description: "AI provides immediate, actionable feedback on your answer.",

        
    },

    {
        icon: Brain,
        step: "03",
        title: "AI Analyzes Everything",
        description: "Our AI agent transcribes"+
    " and evaluates clarity, confidence, structure, and technical accuracy.",
    }, 

    {
       
        icon: BarChart3,
        step: "04",
        title: "Get Your Score & Action Plan",
        description: "Receive a detailed performance score with strengths,"
        +" weaknesses, and personalized tips to crush your next attempt."
    }
    ,
   
]

const _steps =
[
    {
        icon:CircleDot,
        step:1,
        title:"Choose your role",
        description: 
         "Select your area, experience level, and target company. The system adapts to you."
    },

    {
        icon:MessageSquareQuote,
        step:2,
        title:"Answer the questions",
        description:
        "Real questions from FAANG and startups. "
        +"By voice only. No pauses, just like a real interview."
    },

    {
        icon :Mic,
        step:3,
        title: "Get feedback in 3s",
        description: "The AI analyzes clarity, confidence, and precision. You know exactly where you went wrong."
    },
    {
        icon: ChartNoAxesCombined,
        step:4,
        title: "Track your progress",
        description: "Watch your score climb session after session." 
        +"When you're ready, you'll feel the difference."
    }
]



    return (
        <section className="mt-10 w-full bg-[#f3f3f3] pb-20
        "id="how-it-works">

            {/* <motion.div className="flex flex-col pt-4" 
            initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{once:true}}
                transition={{ duration: 0.6, delay: 0.2 }}>
                <span className="text-sm block text-center text-[#d97757]
                font-bold tracking-widest">
                    HOW IT WORKS
                </span>

                <h1 className="font-bold text-2xl sm:text-4xl text-gray-700
                block text-center b
                w-full max-w-xl md:max-w-5xl mx-auto px-4">
                    From nervous wreck to <span className="text-[#d97757]">offer-ready  </span> 
                   {"   "} in 4 steps
                </h1>

                <span className="font-normal text-gray-500 mt-2 text-sm sm:text-base
                block text-center px-4">
                    Most candidates fail because they never practiced it out loud. Fix that in minutes.
                </span>

            </motion.div>

             <div className="mt-5 w-full max-w-xl mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2
             sm:max-w-7xl px-4"
              
             >
                {steps.map((step,index) => 
                {
                const Icon = step.icon;

                return (
                    <motion.div key={index}
                    initial ={{opacity:0,y:20}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition ={{delay:index*0.1}}>
               
                    <Card
                    className="group shadow-md transition-shadow duration-300 ease-out hover:shadow-xl
                    hover:border-t hover:border-main-color/80 h-full"
                    >

                        <CardHeader>
                            <CardTitle className="flex justify-between items-center"> 
                                <Icon className="rounded-md bg-accent p-2 shrink-0 w-10 h-10"
                                 color="#d97757"   
                                 />
                               <div className="text-6xl text-primary/10 font-bold
                               group-hover:text-primary/20 transition-colors">
                                {step.step}
                               </div>
                            </CardTitle>    
                            </CardHeader>

                            <CardContent>
                                <h1 className="text-xl font-bold 
                                text-gray-700">
                                    {step.title}
                                </h1>

                                <p className="text-gray-500 pt-2">
                                    {step.description}
                                </p>
                            </CardContent>
                    </Card>
                    </motion.div>
                )
                }
           ) }

            </div>

        </section> */}
        <div>
         <span className="text-sm block text-center text-main-color
                font-bold tracking-widest py-5">
                    HOW IT WORKS
        </span>

        <h1 className="font-bold text-2xl sm:text-4xl text-gray-700
          text-center w-full max-w-xl lg:max-w-5xl mx-auto px-4 mb-2">
            From nervous wreck to <span className="text-[#d97757]">offer-ready  </span> 
            {"   "} in 4 steps
        </h1>
        
        <div className="flex flex-row md:flex-col lg:flex-col px-10">
        <div>
        <div className="flex flex-col items-start justify-center 
        md:flex-row   md:items-center
        max-w-3xl mx-auto">
        
        {_steps.map((step, i) => (
            <Fragment key={i}>
            <div 
                className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-sm font-medium
                ${ step.step=== 1 ? "bg-main-color text-white" : "border border-gray-300 text-gray-500"}`}
            >
                {step.step}
            </div>


            {i !== 3 && (
                // <div className="flex-1 md:h-px bg-gray-300 mx-2" />
                 <div className="
                  bg-gray-300
                    w-px h-17
                    sm:h-15
                    md:h-px md:w-full
                    mx-2
                " />
            )}
            </Fragment>
        ))}
        </div>
        </div>
        
       
        <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            
            {_steps.map((step, index) => {
            const Icon = step.icon
            return (
            <motion.div key={index} className="text-sm text-gray-700 
           flex flex-col items-center text-center w-full max-w-2xl"
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{delay:index*0.1}}>

               
                <div className="mt-2 font-bold flex flex-row">
                    
                    <Icon className="w-5 h-5"
                    color={"#d97757"}/> 
                   <p>{step.title}</p> 
                </div>

                <div>
                    {step.description}
                </div>
                
            </motion.div>
            )
            }
            )
            }
        </div>  
        </div>
        </div>
        </div>
        

{/* 
<div>
  <span className="text-sm block text-center text-main-color font-bold tracking-widest py-5">
    HOW IT WORKS
  </span>

  <h1 className="font-bold text-2xl sm:text-4xl text-gray-700 text-center max-w-4xl mx-auto px-4 mb-10">
    From nervous wreck to <span className="text-[#d97757]">offer-ready</span> in 4 steps
  </h1>

  <div className="flex flex-col gap-10 max-w-3xl mx-auto px-4">

    {_steps.map((step, i) => {
      const Icon = step.icon

      return (
        <div key={i} className="flex items-start gap-4">

       
          <div className="flex flex-col items-center">

          
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
              ${step.step === 1 
                ? "bg-main-color text-white" 
                : "border border-gray-300 text-gray-500"}
            `}>
              {step.step}
            </div>

         
            {i !== _steps.length - 1 && (
           <div className="w-px flex-1 bg-gray-200 my-2"></div>
            )}
          </div>

    
          <div className="flex-1">

            <div className="flex items-center gap-2 font-bold text-gray-800">
              <Icon className="w-5 h-5 text-[#d97757]" />
              {step.title}
            </div>

            <p className="text-gray-600 text-sm">
              {step.description}
            </p>

          </div>

        </div>
      )
    })}

  </div>
</div> */}
         
</section>
    )
}
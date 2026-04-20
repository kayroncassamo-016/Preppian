"use client"
import {motion} from "framer-motion";
import {Mic, Brain, BarChart3,MessageCircle} from "lucide-react"
import {Card, CardContent,CardHeader,CardTitle,CardDescription}
 from "@/components/ui/card";

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




    return (
        <section className="mt-10 w-full bg-[#f3f3f3]">

            <motion.div className="flex flex-col pt-4"
            initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}>
                <span className="text-xl block text-center text-[#d97757]
                font-normal">
                    How It works
                </span>

                <span className="font-bold text-2xl sm:text-4xl text-gray-700
                block text-center
                w-full max-w-xl md:max-w-5xl mx-auto px-4">
                    From nervous wreck to <span className="text-[#d97757]">offer-ready  </span> 
                   {"   "} in 4 steps
                </span>

                <span className="font-normal text-gray-500 mt-2 text-sm sm:text-base
                block text-center px-4">
                    Most candidates fail because they never practiced it out loud. Fix that in minutes.
                </span>

            </motion.div>

             <div className="mt-5 w-full max-w-lg mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2
             sm:max-w-7xl px-4"
              
             >
                {steps.map((step,index) => 
                {
                const Icon = step.icon;

                return (
                    <Card key={index}
                    className="shadow-md transition-shadow duration-300 ease-out hover:shadow-xl "
                    >

                        <CardHeader>
                            <CardTitle className="flex justify-between items-center"> 
                                <Icon className="rounded-md bg-accent p-2 shrink-0 w-10 h-10"
                                 color="#d97757"   
                                 />
                               <div className="text-6xl text-primary/10 font-bold">
                                {step.step}
                               </div>
                            </CardTitle>

                            <CardContent>
                                <h1 className="text-xl font-bold 
                                text-gray-700">
                                    {step.title}
                                </h1>

                                <p className="text-gray-500 pt-2">
                                    {step.description}
                                </p>
                            </CardContent>
                          

                        </CardHeader>
                        


                    </Card>
                )
                }
           ) }

            </div>

        </section>
    )
}
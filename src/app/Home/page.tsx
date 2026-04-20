import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { HowItWorks } from "../howItWorks/howItWorks";
import {motion} from "framer-motion";

export default function Home()
{
    return (
        <section>

            <div className="flex justify-center items-center
               flex-col bg-white container mx-auto max-w-5xl">
                {/* <span className="text-xl font-bold
                bg-clip-text text-transparent 
                bg-linear-to-b from-[#FF1CF7] to-[#c979ff] text-[2.3rem]">
                    Sharp your confidence in real <br/>
                </span> */}
               
               <div className=" mt-5 flex items-center justify-center 
              
               flex-col text-center text-2xl sm:text-4xl">
                    <span className="font-bold
                text-[#d97757]  ">
                        Sharp your confidence in real <br/>
                    </span>

                    <span
                    className="font-bold
                    text-gray-700">
                    interview scenarios
                    </span>

                    <span
                    className=" font-bold
                    text-gray-700">
                    Get your dream job today!
                    </span>
              </div>

                <div className="flex flex-col text-gray-500 mt-3 
                text-sm sm:text-base" >
                    <span>
                        AI-powered interview preparation made simple and effective.
                    </span>
                     <span className="text-center">
                        Fast, intuitive, and built for your career goals.
                    </span>
                </div>

                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                    <Link href="/try-free">
                        <Button className="p-4
                        hover:bg-foreground/80">
                            Start Free Now               
                       </Button>
                    </Link>

                    <Link href="/try-free">
                        <Button className="group p-4"
                        variant="outline"   >     
                            See Our Plans
                            <Icon icon="lucide:arrow-right"
                            className="ml-2
                            transition-transform duration-200 ease-out
                            group-hover:rotate-45 "/>
                        </Button>
                    </Link>

                </div>
            </div>         

            <div>
              <HowItWorks/>
            </div>

        </section>
    )
}
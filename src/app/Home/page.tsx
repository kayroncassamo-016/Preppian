"use client"
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { HowItWorks } from "../components/landing-page/howItWorks/HowItWorks";
import { Testimonials } from "../components/landing-page/testimonials/Testimonials";
import {Features} from "../components/landing-page/features/features";
import {motion} from "framer-motion";
import Image from "next/image";
import { PressSection } from "../components/landing-page/presection/SocialProof";
import { AppStats } from "../components/landing-page/presection/AppStats";
import { PricingSection } from "../components/landing-page/pricing/Pricing";
import { MyPricing } from "../components/landing-page/pricing/MyPricing";
import { Footer } from "../components/landing-page/footer/Footer";
import { useState } from "react";

export default function Home()
{
 const avatars = [
  "https://i.pravatar.cc/40?u=p1",
  "https://i.pravatar.cc/40?u=p2",
  "https://i.pravatar.cc/40?u=p3",
  "https://i.pravatar.cc/40?u=p4",
  "https://i.pravatar.cc/40?u=p5",
];

const companies = ["Google", "Meta", "Stripe", "Notion", "Figma", "Airbnb", "OpenAI", "Linear"];



    return (
        <section className="bg-[#1f1f1e] ">

         

            <motion.div className="flex justify-center items-center
               flex-col container mx-auto max-w-5xl"
               initial={{opacity:0, y:25}}
               animate={{opacity:1, y:0}}
               transition = {{duration:0.8, ease: [0.8, 1, 0.8, 1]}}
               >
               
               
               <div className=" mt-5 flex items-center justify-center 
               flex-col  text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  
                    
                    <h1 className="font-bold
                text-white text-center ">
                        Sharpen your <br/>confidence 
                    </h1>

                    <h1
                    className="font-bold text-center">
                     <span className="text-main-color">
                     in real interview</span> <br/>
                     <span className="text-white">scenarios</span>
                    </h1>

                    <h1
                    className=" font-bold
                    text-white">
                    Get your dream job today!
                    </h1>
              </div>

                <div className="flex flex-col text-white/40 mt-3 
                text-xs sm:text-sm" >
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
                 
                <div className=" flex justify-center items-center mt-20">
                    <div className="flex -space-x-2">
                        {
                        avatars.map((avatar, index) =>
                        {
                            return (
                                <Image 
                                key={index}
                                src={avatar} 
                                alt={`Avatar ${index + 1}`} 
                                width={28} height={28}
                                className="rounded-full object-cover
                                 "/>
                            )
                        })
                    }
                    </div>

                    <div className="flex flex-col ml-5">
                        <p className="text-main-color">
                            ★★★★★
                        </p>
                        <span className="text-white/40 text-xs">
                            Loved by 12,000+ job seekers
                        </span>
                    </div>
                </div>

                <div className="mt-10 pb-10">
                    <p className="text-white/40 text-center mb-3 text-xs tracking-widest">
                        USERS HIRED AT
                    </p>

                    <div className="space-x-3">
                        {companies.map((company,index)=>
                        {
                            return (
                                <span key={index}
                                className="font-bold text-white/40 text-xs
                            ">
                                    {company}
                            </span>
                        
                            )
                        })}
                    </div>

                </div>
            </motion.div>         

            <div className="mb-20">
              <HowItWorks/>
            </div>

            <div className="mb-10">
                <PressSection/>
            </div>

             <div className="mb-10">
              <Features/>
            </div>


            <div className="mb-10">
              <Testimonials/>
            </div>

            <div className="mb-5">
              <AppStats/>
            </div>

            <div className="mb-25">
              <MyPricing/>
            </div>

            <div className="mb-5">
              <Footer/>
            </div>

            

        </section>
    )
}
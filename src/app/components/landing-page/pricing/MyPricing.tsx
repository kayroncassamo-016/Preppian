import { inView, motion } from "framer-motion";



export function MyPricing()
{
  const plans = [
  
  {
  name: "Free",
  price: "$0",
  sessions: "1 free session",
  description: "Try the platform before upgrading.",
  validity: "One-time access",
  features: [
    "1 AI mock interview",
    "Basic feedback report",
    "Confidence & clarity score",
    "Limited role categories",
  ],
  cta: "Start for Free",
  highlight: false,
  tag: "No card needed",
},
  
  {
    name: "Starter",
    price: "$4.99",
    sessions: "2 sessions",
    description: "Perfect to prepare for one specific interview coming up.",
    validity: "Valid for 30 days",
    features: [
      "1 AI mock interview",
      "Instant feedback report",
      "Confidence & clarity score",
      "Role-specific questions",
      "Action plan to improve",
    ],
    cta: "Get Started",
    highlight: false,
    tag: null,
  },
  {
    name: "Plus",
    price: "$14.99",
    sessions: "7 sessions",
    description: "Train seriously. Spot your weak points and fix them before the real thing.",
    validity: "Valid for 30 days",
    features: [
      "3 AI mock interviews",
      "Deep feedback per answer",
      "Confidence & clarity score",
      "Role-specific questions",
      "Personalized action plan",
      "Progress comparison",
      "Hidden Transcript Mode",
    ],
    cta: "Start Practicing",
    highlight: true,
    tag: "Most popular",
  },
  {
    name: "Elite",
    price: "$29.99",
    sessions: "15 sessions",
    description: "For candidates who want to leave nothing to chance.",
    validity: "Valid for 60 days",
    features: [
      "5 AI mock interviews",
      "Deep feedback per answer",
      "Confidence & clarity score",
      "All role categories",
      "Personalized action plan",
      "Progress comparison",
      "Hidden Transcript Mode",
      "Priority support",
    ],
    cta: "Go Elite",
    highlight: false,
    tag: "Best value",
  },
];




    return (
        <section className ="bg-[##1f1f1e] p-5">
            <span className="block text-center uppercase tracking-widest
            text-main-color font-semibold">
                Pricing
            </span>
            
            <div className="mt-4">
                <h1 className="text-center text-4xl text-white font-bold">
                    Pay per use. <span className="text-main-color">No subscriptions</span>
                </h1>
                <span className="leading-normal text-white/70 text-center block
                w-full max-w-3xl mx-auto my-5">
                    You only need 
                    interviews a few times in your life -
                    so why pay monthly? Buy a pack, use it when you need it.
                </span>
            </div>

            {/* CARDS */}
            
            <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6"
             initial ={{opacity:0,y:10}}
             whileInView={{opacity:1, y:0}}
             viewport={{once:true}}
             transition={{duration:0.6, delay:0.6}}
            >

                {
                    plans.map((plan,index)=>
                    (
                        <div key={index}
                        className={`rounded-2xl border transition-transform duration-300 hover:-translate-y-1
                            p-7 h-fit
                            ${plan.highlight
                                ? "border-orange-500/40 bg-orange-500/5"
                                : "border-white/10 bg-[#111114]"
                            }
                        `}>

                             {/* TAG */}
                                {plan.tag && (
                                    <div className="mb-5">
                                    <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase
                                    
                                    ${plan.highlight
                                        ? "bg-orange-500 text-white"
                                        : "bg-white/10 text-white/60"
                                    }
                                    
                                    `}>
                                        {plan.tag}
                                    </span>
                                    </div>
                                )}

                                 {/* PLAN */}
                            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4
                            font-bold">
                                {plan.name}
                            </p>

                            {/* PRICE */}
                            <h3 className="text-5xl font-bold text-white mb-2">
                                {plan.price}
                            </h3>

                            <p className="text-orange-500 font-semibold mb-1">
                                {plan.sessions}
                            </p>

                            <p className="text-sm text-white/40 mb-6">
                                {plan.validity}
                            </p>

                            <div className="h-px bg-white/10 mb-6" />

                            {/* DESCRIPTION */}
                            <p className="text-white/60 leading-relaxed mb-8">
                                {plan.description}
                            </p>
                            
                             {/* FEATURES */}
                            <ul className="  space-y-3 mb-8">

                                {plan.features.map((feature) => (
                                <li key={feature} className="flex gap-2 text-white/70 text-sm">
                                     <span className="text-[#34d9b5]">✓</span> 
                                    {feature}
                                </li>
                                ))}

                            </ul>


                             {/* BUTTON */}
                            <button
                                className={`w-full py-3 rounded-xl font-semibold transition
                                
                                ${plan.highlight
                                ? "bg-orange-500 hover:bg-orange-500" 
                               + "transition-colors duration-200 text-white hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)] "
                                : "bg-white/10 hover:bg-white/15 text-white"
                                }
                                `}>
                          
                                {plan.cta}
                            </button>
                        </div>
                    ))
                }
            </motion.div>

            <div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{once:true}}
                    transition={{ delay: 0.65, duration: 0.5 }}
                    className="text-center text-white/40 text-[0.78rem] mt-10">
                    No subscriptions. No auto-renewals. Pay once, use when you need it. &nbsp;·&nbsp; Stripe secured checkout.
                </motion.p>
            </div>

        </section>
    )
}
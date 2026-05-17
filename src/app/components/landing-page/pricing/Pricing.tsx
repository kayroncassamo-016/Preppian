"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "$9.99",
    sessions: "1 session",
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
    name: "Pro",
    price: "$24.99",
    sessions: "3 sessions",
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
    price: "$39.99",
    sessions: "5 sessions",
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

const CheckIcon = () => (
  <svg
    width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="#34d9b5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className="flex-shrink-0 mt-0.5"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    // <section ref={ref} className="relative bg-[#0c0c0e] py-28 px-6 overflow-hidden">
    //   {/* Glow centre */}
    //   <div
    //     className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
    //     style={{
    //       background:
    //         "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.1) 0%, transparent 65%)",
    //     }}
    //   />

    //   <div className="relative z-10 max-w-[1100px] mx-auto">
    //     {/* Header */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 24 }}
    //       animate={inView ? { opacity: 1, y: 0 } : {}}
    //       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    //       className="text-center mb-16"
    //     >
    //       <p className="text-[#f97316] text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3">
    //         Pricing
    //       </p>
    //       <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold text-white leading-[1.1] tracking-[-0.025em] max-w-[600px] mx-auto mb-4">
    //         Pay per use.{" "}
    //         <span className="text-[#f97316]">No subscriptions.</span>
    //       </h2>
    //       <p className="text-white/40 text-[0.95rem] max-w-[460px] mx-auto font-light leading-[1.75]">
    //         You only need interviews a few times in your life — so why pay monthly?
    //         Buy a pack, use it when you need it.
    //       </p>
    //     </motion.div>

    //     {/* Cards */}
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
    //       {plans.map((plan, i) => (
    //         <motion.div
    //           key={plan.name}
    //           initial={{ opacity: 0, y: 32 }}
    //           animate={inView ? { opacity: 1, y: 0 } : {}}
    //           transition={{
    //             duration: 0.6,
    //             delay: 0.1 + i * 0.1,
    //             ease: [0.22, 1, 0.36, 1],
    //           }}
    //           className={`relative rounded-2xl border overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
    //             plan.highlight
    //               ? "border-[#f97316]/40 bg-[#f97316]/[0.04]"
    //               : "border-white/[0.07] bg-[#0f0f12]"
    //           }`}
    //         >
    //           {/* Top glow stripe on highlighted */}
    //           {plan.highlight && (
    //             <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />
    //           )}

    //           {/* Tag */}
    //           {plan.tag && (
    //             <div className="absolute top-4 right-4">
    //               <span
    //                 className={`text-[0.62rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full ${
    //                   plan.highlight
    //                     ? "bg-[#f97316] text-white"
    //                     : "bg-white/[0.06] text-white/40 border border-white/[0.08]"
    //                 }`}
    //               >
    //                 {plan.tag}
    //               </span>
    //             </div>
    //           )}

    //           <div className="p-7">
    //             {/* Plan name */}
    //             <p className="text-white/35 text-[0.72rem] font-semibold tracking-[0.14em] uppercase mb-3">
    //               {plan.name}
    //             </p>

    //             {/* Price */}
    //             <div className="flex items-end gap-2 mb-1">
    //               <span className="text-[2.8rem] font-extrabold text-white leading-none tracking-tight">
    //                 {plan.price}
    //               </span>
    //             </div>
    //             <p className="text-[#f97316] text-[0.8rem] font-semibold mb-1">
    //               {plan.sessions}
    //             </p>
    //             <p className="text-white/22 text-[0.72rem] mb-5">
    //               {plan.validity}
    //             </p>

    //             {/* Divider */}
    //             <div className="h-px bg-white/[0.06] mb-5" />

    //             {/* Description */}
    //             <p className="text-white/40 text-[0.82rem] leading-[1.65] font-light mb-6">
    //               {plan.description}
    //             </p>

    //             {/* Features */}
    //             <ul className="flex flex-col gap-2.5 mb-8">
    //               {plan.features.map((f) => (
    //                 <li key={f} className="flex items-start gap-2.5">
    //                   <CheckIcon />
    //                   <span className="text-white/55 text-[0.82rem] font-light leading-snug">
    //                     {f}
    //                   </span>
    //                 </li>
    //               ))}
    //             </ul>

    //             {/* CTA */}
    //             <button
    //               className={`w-full py-3 rounded-xl text-[0.88rem] font-semibold transition-all duration-200 cursor-pointer ${
    //                 plan.highlight
    //                   ? "bg-[#f97316] text-white hover:bg-[#ea6c0a] hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)]"
    //                   : "bg-white/[0.05] text-white/60 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white/80"
    //               }`}
    //             >
    //               {plan.cta}
    //             </button>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>

    //     {/* Bottom note */}
    //     <motion.p
    //       initial={{ opacity: 0 }}
    //       animate={inView ? { opacity: 1 } : {}}
    //       transition={{ delay: 0.65, duration: 0.5 }}
    //       className="text-center text-white/20 text-[0.78rem] mt-10"
    //     >
    //       No subscriptions. No auto-renewals. Pay once, use when you need it. &nbsp;·&nbsp; Stripe secured checkout.
    //     </motion.p>
    //   </div>
    // </section>



    <section className="bg-[#0c0c0e] py-28 px-6">

  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-16">

      <p className="text-sm font-bold tracking-[0.2em] uppercase text-orange-500 mb-3">
        Pricing
      </p>

      <h2 className="text-4xl font-bold text-white max-w-2xl mx-auto leading-tight mb-4">
        Pay per use.
        <span className="text-orange-500"> No subscriptions.</span>
      </h2>

      <p className="text-white/60 max-w-md mx-auto leading-relaxed">
        Buy a pack only when you need interview practice.
      </p>

    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {plans.map((plan) => (

        <div
          key={plan.name}
          className={`rounded-2xl border p-7 transition hover:-translate-y-1 duration-300
          
          ${plan.highlight
            ? "border-orange-500/40 bg-orange-500/5"
            : "border-white/10 bg-[#111114]"
          }
          
          `}
        >

          {/* TAG */}
          {plan.tag && (
            <div className="mb-5">
              <span className={`text-xs px-3 py-1 rounded-full font-semibold
              
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
          <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
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
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : "bg-white/10 hover:bg-white/15 text-white"
            }
              
            `}
          >
            {plan.cta}
          </button>

        </div>

      ))}

    </div>

  </div>

</section>
  );
}

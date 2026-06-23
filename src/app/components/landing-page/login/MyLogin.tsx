"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/src/app/assets/Logo";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

export function MyLoginDialog({
  open,
  onClose,
}: LoginDialogProps) {

  const socialButton =
    "w-full flex items-center justify-center gap-3 py-3 rounded-xl " +
    "bg-[#1a1a1e] border border-white/10 text-white text-sm font-medium " +
    "hover:bg-[#1f1f24] hover:border-white/20 transition-colors duration-200";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
              fixed inset-0 z-40
              bg-black/70
              backdrop-blur-sm
            "
          />

          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 12,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 12,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed inset-0 z-60
              flex items-center justify-center
              px-2
            "
          >
            {/* e.stopPropagation() significa: 
 "Quando clicarem aqui dentro, não deixes o clique subir para os elementos pai." */}
            <div
              // onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full max-w-[400px]
                rounded-2xl
                p-8
                bg-[#111114]
                border border-white/10

                shadow-[0_32px_80px_rgba(0,0,0,0.6)]
              "
            >
              {/* CLOSE */}
              <button
                onClick={onClose}
                className="
                  absolute top-4 right-4
                  w-8 h-8
                  rounded-lg

                  text-white/40
                  hover:text-white/80
                  hover:bg-white/5
                  transition
                "
              >
                ✕
              </button>

              {/* LOGO */}
              <div className="mb-6 flex justify-center">
                <Logo />
              </div>

              {/* HEADER */}
              <h2
                className="
                  text-center
                  text-white
                  text-2xl
                  font-bold
                  mb-2
                "
              >
                Log in or sign up
              </h2>

              <p
                className="
                  text-center
                  text-white/40
                  text-sm
                  mb-7
                "
              >
                Practice smarter. Land your dream job faster.
              </p>

              {/* SOCIAL */}
              <div className="space-y-3">
                <button className={socialButton}>
                    <FcGoogle size={18} />
                  Continue with Google
                </button>

                <button className={socialButton}>
                    <FaApple size={18} />
                  Continue with Apple
                </button>
              </div>

              {/* DIVIDER */}
              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-white/10" />

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-widest
                    text-white/30
                  "
                >
                  or
                </span>

                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* EMAIL */}
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    bg-[#1a1a1e]
                    border border-white/10
                    text-white text-sm
                    placeholder:text-white/25
                    focus:outline-none
                    focus:border-[#d97757]/50
                    transition
                  "
                />

                <button
                  className="
                    w-full
                    py-3

                    rounded-xl
                    bg-main-color
                   
                    text-white
                    font-semibold

                    hover:bg-[#f87144]
                    hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)]

                    transition
                  "
                >
                  Continue
                </button>
              </div>

              {/* FOOTER */}
              <p
                className="
                  mt-6
                  text-center
                  text-xs
                  text-white/25
                  leading-relaxed
                "
              >
                By continuing, you agree to our Terms and
                Privacy Policy.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { Logo } from "@/src/app/assets/Logo";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";

// interface LoginDialogProps {
//   open: boolean;
//   onClose: () => void;
// }

// const socialBtn =
//   "w-full flex items-center justify-center gap-3 py-3 rounded-xl " +
//   "bg-[#1a1a1e] border border-white/10 text-white text-sm font-medium " +
//   "hover:bg-[#1f1f24] hover:border-white/20 transition-all duration-200";

// export function MyLoginDialog({ open, onClose }: LoginDialogProps) {
//   return (
//     <AnimatePresence>
//       {open && (
//         <>
//           <motion.div
//             onClick={onClose}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
//           />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.96, y: 12 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.96, y: 12 }}
//             transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
//             className="fixed inset-0 z-50 flex items-center justify-center px-4"
//           >
//             <div
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-[400px] rounded-2xl p-8 bg-[#111114] border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
//             >
//               <button
//                 onClick={onClose}
//                 className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-white/35 hover:text-white/75 hover:bg-white/5 transition-all duration-200"
//               >
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
//                   <path d="M18 6L6 18M6 6l12 12" />
//                 </svg>
//               </button>

//               <div className="mb-6 flex justify-center">
//                 <Logo />
//               </div>

//               <h2 className="text-center text-white text-2xl font-bold mb-2">
//                 Log in or sign up
//               </h2>
//               <p className="text-center text-white/40 text-sm mb-7">
//                 Practice smarter. Land your dream job faster.
//               </p>

//               <div className="space-y-3">
//                 <button className={socialBtn}>
//                   <FcGoogle size={18} /> Continue with Google
//                 </button>
//                 <button className={socialBtn}>
//                   <FaApple size={18} /> Continue with Apple
//                 </button>
//               </div>

//               <div className="flex items-center gap-3 my-5">
//                 <div className="flex-1 h-px bg-white/10" />
//                 <span className="text-xs uppercase tracking-widest text-white/30">or</span>
//                 <div className="flex-1 h-px bg-white/10" />
//               </div>

//               <div className="space-y-3">
//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   className="w-full px-4 py-3 rounded-xl bg-[#1a1a1e] border border-white/10 text-white placeholder:text-white/25 focus:outline-none focus:border-[#f97316]/50 transition-all duration-200"
//                 />
//                 <button className="w-full py-3 rounded-xl bg-[#f97316] text-white font-semibold hover:bg-[#ea6c0a] hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 transition-all duration-200">
//                   Continue
//                 </button>
//               </div>

//               <p className="mt-6 text-center text-xs text-white/25 leading-relaxed">
//                 By continuing, you agree to our Terms and Privacy Policy.
//               </p>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }
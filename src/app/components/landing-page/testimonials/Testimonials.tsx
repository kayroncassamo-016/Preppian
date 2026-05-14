
"use client";

import { motion } from "framer-motion";
import { useEffect, useState,useRef } from "react";

const testimonials = [
  {
    user: {
      name: "Alice Johnson",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708a",
    },
    rating: 5,
    title: "Amazing Experience",
    content:
      "Prep AI helped me ace my interviews with confidence. The AI-powered questions were spot on!",
  },
  {
    user: {
      name: "Bob Smith",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708b",
    },
    rating: 4,
    title: "Very Helpful",
    content:
      "The practice sessions were very helpful. I felt well-prepared for my interviews.",
  },
  {
    user: {
      name: "Charlie Brown",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    },
    rating: 5,
    title: "Highly Recommend",
    content:
      "I highly recommend Prep AI to anyone preparing for interviews. The AI feedback was invaluable.",
  },
  {
    user: {
      name: "Diana Prince",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708d",
    },
    rating: 5,
    title: "Great Tool",
    content:
      "Prep AI is a great tool for interview preparation. The mock interviews were very realistic.",
  },
  {
    user: {
      name: "Ethan Hunt",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708e",
    },
    rating: 4,
    title: "Very Effective",
    content:
      "The AI-powered questions and feedback helped me improve my interview skills significantly.",
  },
  {
    user: {
      name: "Fiona Gallagher",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708f",
    },
    rating: 5,
    title: "Exceptional Service",
    content:
      "Prep AI provided exceptional service. The AI-driven feedback was incredibly accurate and helpful.",
  },
  {
    user: {
      name: "George Martin",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708g",
    },
    rating: 5,
    title: "Best Preparation Tool",
    content:
      "This is the best interview preparation tool I've ever used.",
  },
  {
    user: {
      name: "Hannah Lee",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708h",
    },
    rating: 4,
    title: "Very Useful",
    content:
      "Prep AI was very useful in preparing for my interviews.",
  },
];


export const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemsWidth, setItemsWidth] = useState(0);

  // Duplicamos para o efeito infinito
  const loopItems = [...testimonials, ...testimonials];

  useEffect(() => {
    if (trackRef.current) {
      // Largura real de apenas UMA cópia dos itens
      setItemsWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  return (

    <section id="testimonials">
    <div className="overflow-hidden w-full">
      <span className="block text-center tracking-widest 
      text-main-color font-bold  mb-5 text-sm">
        TESTIMONIALS
      </span>
      <div className="mb-5">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold text-white">
          They practiced. They got <span className="text-main-color">hired</span>
        </h1>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 pr-6"
        style={{
          width: "max-content",
          animation: itemsWidth
            ? `scroll-x ${20}s linear infinite`
            : "none",
          // A animação move exatamente 1 cópia para a esquerda,
          // aí o CSS reseta instantaneamente (sem stutter visual)
          ["--scroll-distance" as string]: `${itemsWidth}px`,
        }}
      >
        {loopItems.map((t, i) => (
          <div
            key={i}
            className="min-w-[320px] max-w-[320px] bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <img src={t.user.avatar} className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-semibold text-white">{t.user.name}</p>
                <p className="text-xs opacity-70 text-white/70">{t.title}</p>
              </div>
            </div>
            <div className="text-yellow-400 mb-2">
              {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
            </div>
            <p className="text-sm opacity-80 text-white/70">{t.content}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll-x {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-1 * var(--scroll-distance))); }
        }
      `}</style>
    </div>

    </section>
  );

};



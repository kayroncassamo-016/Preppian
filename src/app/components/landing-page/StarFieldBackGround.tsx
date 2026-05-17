"use client"

import { useEffect, useRef } from "react"

type Star = {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  a: number
  tw: number
}

export default function StarFieldBackGround() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const starsRef = useRef<Star[]>([])
  const sizeRef = useRef({ w: 0, h: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight

      sizeRef.current = { w, h }

      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      canvas.width = Math.floor(w * DPR)
      canvas.height = Math.floor(h * DPR)

      // desenhar em "CSS pixels"
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)

      const count = Math.floor((w * h) / 12000)
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.2,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        a: Math.random() * 0.6 + 0.2,
        tw: Math.random() * 0.02 + 0.005,
      }))
    }

    const step = () => {
      const { w, h } = sizeRef.current

      // fundo
      ctx.fillStyle = "rgba(0,0,0,1)"
      ctx.fillRect(0, 0, w, h)

      for (const s of starsRef.current) {
        s.x += s.vx
        s.y += s.vy

        if (s.x < 0) s.x = w
        if (s.x > w) s.x = 0
        if (s.y < 0) s.y = h
        if (s.y > h) s.y = 0

        s.a += (Math.random() - 0.5) * s.tw
        s.a = Math.max(0.08, Math.min(0.9, s.a))

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.a})`
        ctx.fill()
      }

      const grad = ctx.createRadialGradient(
        w * 0.7,
        h * 0.3,
        0,
        w * 0.7,
        h * 0.3,
        Math.min(w, h) * 0.7
      )
      grad.addColorStop(0, "rgba(59,130,246,0.10)")
      grad.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      rafRef.current = requestAnimationFrame(step)
    }

    resize()
    window.addEventListener("resize", resize)
    rafRef.current = requestAnimationFrame(step)

    return () => {
      window.removeEventListener("resize", resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}
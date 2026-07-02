"use client"

import { useEffect, useState } from "react"

const BIJAPUR_IMAGES = [
  "/bijapur/Gol Gumbaz HD.jpg",
  "/bijapur/ibrahim rauza HD.jpg",
  "/bijapur/bijapur Fort HD.jpg",
  "/bijapur/siddeshwara HD.jpg",
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BIJAPUR_IMAGES.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black z-0">
      {BIJAPUR_IMAGES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out z-10 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt="Bijapur Historical Place"
            className="w-full h-full object-cover object-[center_35%]"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 pointer-events-none"></div>
    </div>
  )
}

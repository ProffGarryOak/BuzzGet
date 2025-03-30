"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AnimatedNumbers({ value }) {
  const [counter, setCounter] = useState(0)
  
  useEffect(() => {
    const target = parseInt(value.replace(/[^0-9]/g, ''))
    const duration = 2000
    const increment = target / (duration / 16)
    
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCounter(target)
        clearInterval(timer)
      } else {
        setCounter(Math.floor(current))
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [value])

  return (
    <motion.span>
      {value.includes('+') ? `${counter.toLocaleString()}+` : 
       value.includes('/') ? value.replace(/\d+/, counter.toString()) : 
       counter.toLocaleString()}
    </motion.span>
  )
}
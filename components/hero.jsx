'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#228B22]/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#0C310C]/5 blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold pb-6">
            <span className="text-[#0C310C]">Manage Your Finances</span>{' '}
            <span className="text-[#228B22] gradient-title">with Artificial Intelligence</span>
          </h1>

          <motion.p 
            className="text-lg md:text-xl text-[#0C310C]/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            An AI-powered financial management platform that helps you track,
            analyze, and optimize your spending with real-time insights.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/dashboard">
              <Button 
                size="lg" 
                className="bg-[#228B22] hover:bg-[#1a6e1a] px-8 text-lg"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#features">
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#228B22] text-[#228B22] hover:bg-[#228B22]/10 px-8 text-lg"
              >
                See Features
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-24 max-w-5xl mx-auto"
          style={{ y, scale, opacity }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#228B22]/20 mb-8">
            <Image
              src="/banner.jpeg"
              width={1480}
              height={870}
              alt="Dashboard Preview"
              priority
              className="w-full h-auto"
            />
            
            <div className="absolute inset-0 bg-[#228B22]/5 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
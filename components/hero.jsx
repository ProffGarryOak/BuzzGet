'use client'

import Link from "next/link"
import { Button } from "./ui/button"
    import { testimonialsData } from "@/data/landing";


import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

const HeroSection = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 px-4 overflow-hidden">
      {/* Dynamic gradient background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C310C]/5 to-[#228B22]/5"></div>
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#228B22]/10 blur-[100px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#0C310C]/10 blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#228B22]/10 border border-[#228B22]/20"
            >
              <span className="h-2 w-2 rounded-full bg-[#228B22] animate-pulse"></span>
              <span className="text-[#228B22] font-medium">AI-Powered Finance</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#0C310C]">Smarter</span>{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Financial</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-3 bg-[#228B22]/30 -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                />
              </span>{' '}
              <span className="text-[#228B22]">Decisions</span>
            </h1>

            <motion.p 
              className="text-lg text-[#0C310C]/80 mb-10 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Harness AI to optimize your finances with predictive analytics, automated tracking, and personalized insights that grow with you.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-[#228B22] hover:bg-[#1a6e1a] px-8 text-lg shadow-lg shadow-[#228B22]/30 hover:shadow-[#1a6e1a]/40 transition-all"
                >
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#228B22] text-[#228B22] hover:bg-[#228B22]/10 px-8 text-lg group"
                >
                  Explore Features
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center gap-4"
            >
  {testimonialsData.map((testimonial, index) => (
    <div
      key={index}
      className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
    >
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="h-full w-full object-cover"
      />
    </div>
  ))}


              <div className="text-left">
                <p className="text-sm font-medium text-[#0C310C]">Trusted by 10,000+ users</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#228B22] fill-current" />
                  ))}
                  <span className="text-sm text-[#0C310C]/70 ml-1">4.9/5</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Dashboard preview */}
          <motion.div
            className="relative"
            style={{ y, scale, opacity }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#228B22]/20 transform transition-all hover:scale-[1.02]">
              <Image
                src="/image.png"
                width={1200}
                height={900}
                alt="Dashboard Preview"
                priority
                className="w-full h-auto"
              />
              
              {/* UI element overlays */}
              <div className="absolute top-4 left-4 right-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0C310C]/70 to-transparent flex items-end p-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#228B22] animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Live data updating</span>
                </div>
              </div>
            </div>

            {/* Floating card elements */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg border border-[#228B22]/10 z-10 w-48"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="text-[#0C310C] font-medium mb-2">+12.5% ROI</div>
              <div className="text-xs text-[#0C310C]/70">Last 30 days</div>
              <div className="absolute -top-2 -right-2 bg-[#228B22] text-white text-xs px-2 py-1 rounded-full">
                AI Suggestion
              </div>
            </motion.div>

            <motion.div 
              className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-lg border border-[#228B22]/10 z-10 w-56"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-3 w-3 rounded-full bg-[#228B22]"></div>
                <div className="text-[#0C310C] font-medium">Savings Goal</div>
              </div>
              <div className="w-full bg-[#228B22]/10 rounded-full h-2">
                <div className="bg-[#228B22] h-2 rounded-full w-3/4"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="text-sm text-[#0C310C]/60 mb-2">Explore more</div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-[#228B22]" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Simple star component for ratings
const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

export default HeroSection
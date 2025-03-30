"use client"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing"
import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero"
import AnimatedNumbers from "@/components/animated-numbers"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#e9f3e9]">
      <HeroSection />

      {/* Stats Section with Animated Numbers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {statsData.map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="text-4xl font-bold text-[#0C310C]">
                  <AnimatedNumbers value={stat.value} />
                </p>
                <p className="text-[#0C310C]/80">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#e9f3e9]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0C310C]">
              Financial Superpowers <span className="text-[#228B22]">for Everyone</span>
            </h2>
            <p className="text-[#0C310C]/80 mt-4 max-w-2xl mx-auto">
              AI-driven tools that transform how you interact with money
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
              >
                <Card className="h-full bg-white border-[#228B22]/20 hover:shadow-lg transition-shadow relative">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#228B22]/10 flex items-center justify-center text-[#228B22] mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#0C310C]">{feature.title}</h3>
                    <p className="text-[#0C310C]/80">{feature.description}</p>
                    <div className="pt-4">
                      {/* <Button variant="ghost" className="text-[#228B22] hover:bg-[#228B22]/10 p-0">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline Style */}
    {/* How It Works - Timeline Style */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-[#0C310C]">Start Smart in Minutes</h2>
      <p className="text-[#0C310C]/80 mt-4 max-w-2xl mx-auto">
        Three simple steps to financial clarity
      </p>
    </motion.div>

    <div className="relative max-w-3xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-1/2 h-full w-0.5 bg-[#228B22]/20 -translate-x-1/2 hidden md:block"></div>
      
      {howItWorksData.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.25, duration: 0.8 }}
          className="relative mb-20"  
        >
          {/* Green tick positioned above the card */}
          <div className="absolute left-1/2 -top-6 w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center -translate-x-1/2 z-10">
            <Check className="h-6 w-6 text-white" />
          </div>
          
          <div className="bg-[#e9f3e9] p-8 rounded-xl relative">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-[#228B22]/10 rounded-full flex items-center justify-center text-[#228B22]">
                {step.icon}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-[#0C310C] mb-2">{step.title}</h3>
                <p className="text-[#0C310C]/80">{step.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#e9f3e9]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0C310C]">Trusted by Financial Pioneers</h2>
            <p className="text-[#0C310C]/80 mt-4 max-w-2xl mx-auto">
              Join a community of forward-thinking money managers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className={`relative ${index === 1 ? 'md:top-8' : ''}`}
              >
                <Card className="bg-white border-[#228B22]/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-[#0C310C]">{testimonial.name}</div>
                        <div className="text-sm text-[#0C310C]/80">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="text-[#0C310C]/80 italic">"{testimonial.quote}"</p>
                    <div className="mt-4 flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < 4} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Changed background */}
      <section className="py-20 bg-[#fff]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#0C310C] mb-6">
              Ready for Smarter Money Management?
            </h2>
            <p className="text-[#000] mb-8 max-w-2xl mx-auto text-lg">
              Join thousands transforming their financial future with BuzzGet
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#228B22] hover:bg-[#1a6e1a] text-white px-8 py-6 text-lg"
                asChild
              >
                <Link href="/sign-up">
                  Start Free Trial <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className=" border-[#e9f3e9] hover:bg-[#e9f3e9]/90 hover:text-[#0c310c]/90 px-8 py-6 text-lg"
                asChild
              >
                
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function StarIcon({ filled }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "#228B22" : "none"}
      stroke="#228B22"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  )
}
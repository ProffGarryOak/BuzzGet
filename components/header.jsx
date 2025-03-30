'use client' // Add this since we're using useState now

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { LayoutDashboard, PenBox, BarChart2, Wallet, Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full ${isScrolled ? 'bg-[#0C310C]/95 backdrop-blur-sm' : 'bg-[#0C310C]'} text-[#e9f3e9] z-50 border-b border-[#228B22]/20 transition-all duration-300`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo and mobile menu button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.png"
              alt="BuzzGet Logo"
              width={240}
              height={240}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
            <span className="text-xl md:text-2xl font-bold text-[#e9f3e9]">BuzzGet</span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-[#e9f3e9] hover:text-[#8dce8d] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a href="#features" className="flex items-center gap-1 text-[#e9f3e9] hover:text-[#8dce8d] transition-colors">
              <BarChart2 size={18} />
              Features
            </a>
            <a href="#testimonials" className="flex items-center gap-1 text-[#e9f3e9] hover:text-[#8dce8d] transition-colors">
              <Wallet size={18} />
              Testimonials
            </a>
          </SignedOut>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button 
                variant="outline" 
                className="border-[#e9f3e9] text-[#0C310C] hover:bg-[#e9f3e9]/90 hover:text-[#0c310c]/90 gap-2"
              >
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button className="bg-[#228B22] hover:bg-[#1a6e1a] gap-2">
                <PenBox size={18} />
                <span>Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button 
                variant="outline" 
                className="border-[#e9f3e9] text-[#0C310C] hover:bg-[#e9f3e9]/90 hover:text-[#0c310c]/90"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9 border-2 border-[#228B22]/20",
                  userButtonPopoverCard: "shadow-lg rounded-xl bg-[#0C310C] border border-[#228B22]/20",
                },
              }}
            />
          </SignedIn>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0C310C] border-t border-[#228B22]/20 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <SignedOut>
                <a 
                  href="#features" 
                  className="flex items-center gap-2 text-[#e9f3e9] hover:text-[#8dce8d] py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <BarChart2 size={18} />
                  Features
                </a>
                <a 
                  href="#testimonials" 
                  className="flex items-center gap-2 text-[#e9f3e9] hover:text-[#8dce8d] py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Wallet size={18} />
                  Testimonials
                </a>
              </SignedOut>

              <SignedIn>
                <Link 
                  href="/dashboard" 
                  className="flex items-center gap-2 text-[#e9f3e9] hover:text-[#8dce8d] py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>
                <Link 
                  href="/transaction/create" 
                  className="flex items-center gap-2 text-[#e9f3e9] hover:text-[#8dce8d] py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <PenBox size={18} />
                  Add Transaction
                </Link>
              </SignedIn>

              <SignedOut>
                <SignInButton forceRedirectUrl="/dashboard">
                  <Button 
                    variant="outline" 
                    className="w-full border-[#e9f3e9] text-[#0C310C] hover:bg-[#e9f3e9]/90 hover:text-[#0c310c]/90"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
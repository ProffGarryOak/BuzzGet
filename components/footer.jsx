import Link from 'next/link'
import { Leaf, Mail, Twitter, Instagram, Linkedin, Globe } from 'lucide-react'

const SOCIAL_LINKS = [
  {
    name: 'Email',
    icon: <Mail className="h-5 w-5" />,
    href: 'mailto:adarshp.1133@gmail.com'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
    href: 'https://linkedin.com/in/adarshpandey1133'
  },
  {
    name: 'Twitter',
    icon: <Twitter className="h-5 w-5" />,
    href: 'https://twitter.com/proffgarryoak'
  },
  {
    name: 'Instagram',
    icon: <Instagram className="h-5 w-5" />,
    href: 'https://instagram.com/rnkpandey'
  },
  {
    name: 'Portfolio',
    icon: <Globe  className="h-5 w-5" />, // Using GitHub as portfolio icon
    href: 'https://adarshp1133.vercel.app'
  }
];

const BuzzGetFooter = () => {
  return (
    <footer className="bg-[#0C310C] text-[#e9f3e9] w-full py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo and name */}
        <div className="flex items-center gap-2 mb-6">
          <Leaf className="text-[#228B22]" size={24} />
          <span className="text-xl font-bold">BuzzGet</span>
        </div>

       
       <div className="flex space-x-6 mb-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e5e5e5] hover:text-[#b33a3a] transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[#e9f3e9]/60 text-sm">
          © {new Date().getFullYear()} BuzzGet. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default BuzzGetFooter
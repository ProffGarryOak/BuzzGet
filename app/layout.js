import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

import { Metadata } from 'next'


export const metadata = {
  title: "Buzzget",
  description: "One stop Finance Platform",
  icons: {
    icon: [
      { url: '/logo.ico' }, 
      { url: '/logo.png', type: 'image/png' }, 
    ],
    shortcut: ['/logo.ico'],
    apple: [
      { url: '/logo.ico' }, // For Apple devices
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header/>
        <main className="min-h-screen">{children}</main>
        <Toaster richColors />
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}

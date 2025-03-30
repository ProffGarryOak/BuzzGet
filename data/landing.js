import {
    BarChart3,
    Receipt,
    PieChart,
    CreditCard,
    Globe,
    Zap,
    ScanText,
    Wallet,
    User,
    Clock,
    Mail,
  } from "lucide-react";
  
  // Stats Data
  export const statsData = [
    {
      value: "1500+",
      label: "Active Users",
    },
    {
      value: "2000+",
      label: "Transactions Tracked",
    },
    {
      value: "99+",
      label: "Uptime",
    },
    {
      value: "4.9+",
      label: "User Rating",
    },
  ];
  
  // Features Data

export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-[#228B22]" />,
    title: "Advanced Analytics",
    description: "AI-powered insights into your spending patterns with customizable reports",
  },
  {
    icon: <ScanText className="h-8 w-8 text-[#228B22]" />,
    title: "Smart Receipt Scanner",
    description: "Automatically extract and categorize data from receipts using computer vision",
  },
  {
    icon: <Wallet className="h-8 w-8 text-[#228B22]" />,
    title: "Budget Planning",
    description: "Create smart budgets with AI recommendations tailored to your spending habits",
  },
  {
    icon: <User className="h-8 w-8 text-[#228B22]" />,
    title: "Multi-Account Dashboard",
    description: "Unified view of all accounts with individual and consolidated financial analytics",
  },
  {
    icon: <Clock className="h-8 w-8 text-[#228B22]" />,
    title: "Recurring Transactions",
    description: "Automatically track and manage subscriptions and recurring payments",
  },
  {
    icon: <Mail className="h-8 w-8 text-[#228B22]" />,
    title: "Smart Notifications",
    description: "Monthly reports + real-time alerts when approaching budget limits",
  },
];
  // How It Works Data
  export const howItWorksData = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "1. Create Your Account",
      description:
        "Get started in minutes with our simple and secure sign-up process",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "2. Track Your Spending",
      description:
        "Automatically categorize and track your transactions in real-time",
    },
    {
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      title: "3. Get Insights",
      description:
        "Receive AI-powered insights and recommendations to optimize your finances",
    },
  ];
  
  // Testimonials Data
  export const testimonialsData = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      quote:
        "Welth has transformed how I manage my business finances. The AI insights have helped me identify cost-saving opportunities I never knew existed.",
    },
    {
      name: "Michael Chen",
      role: "Freelancer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote:
        "The receipt scanning feature saves me hours each month. Now I can focus on my work instead of manual data entry and expense tracking.",
    },
    {
      name: "Emily Rodriguez",
      role: "Financial Advisor",
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      quote:
        "I recommend Welth to all my clients. The multi-currency support and detailed analytics make it perfect for international investors.",
    },
  ];
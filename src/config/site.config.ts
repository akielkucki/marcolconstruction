// Site Configuration - MARCOL Construction
// All variables defined here are used across the entire website

export const siteConfig = {
  // Company Information
  company: {
    name: "MARCOL Construction",
    tagline: "A results first construction company serving the Bucks County area.",
    fullName: "MARCOL Construction LLC",
    description: "Your premier partner for residential, commercial, and historic construction. We build, renovate, and restore spaces with an unwavering commitment to premium materials, structural integrity, and flawless execution.",
    foundedYear: 2005, // Placeholder - adjust as needed
    yearsExperience: 21, // Placeholder - adjust as needed
    projectsCompleted: 500,
    awardsWon: 5,
  },

  // Contact Information
  contact: {
    phone: "(888) 777-7496",
    email: "info@marcolconstruction.com", // Placeholder
    address: {
      street: "600 Swamp Rd",
      city: "Newtown",
      state: "PA",
      zip: "18940",
      full: "600 Swamp Rd, Newtown, PA 18940",
    },
    hours: "Mon–Fri · 8 AM–5 PM"
  },

  // Social Media Links
  social: {
    instagram: "https://instagram.com/marcolconstruction",
    facebook: "https://facebook.com/marcolconstruction",
    googleBusiness: "https://www.marcolconstruction.com",
  },

  // Navigation Links
  navigation: [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#portfolio" },
    { label: "Contact", href: "/#contact" },
  ],

  // Services Offered
  services: [
    {
      title: "Residential Construction",
      slug: "residential-construction",
      description: "Custom homes and renovations that bring your vision to life.",
      longDescription: "We deliver exceptional residential construction services, working closely with you from initial vision to final walkthrough to ensure a painless process.",
      icon: "home",
      features: [
        "Custom Home Design",
        "Kitchen & Bath Remodels",
        "Home Additions",
        "Outdoor Living Spaces",
      ],
    },
    {
      title: "Commercial Construction",
      slug: "commercial-construction",
      description: "Professional spaces designed for business success.",
      longDescription: "We provide comprehensive construction solutions for commercial clients, delivering rock-solid project delivery and finishing on time and on budget.",
      icon: "business",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Warehouses",
        "Healthcare Facilities",
      ],
    },
    {
      title: "Historic Restoration",
      slug: "historic-restoration",
      description: "Preserving local architectural heritage.",
      longDescription: "Our team expertly balances heritage preservation with modern integration, ensuring period-accurate restorations that protect historic integrity.",
      icon: "architecture",
      features: [
        "Period-Accurate Restoration",
        "Structural Reinforcement",
        "Heritage Preservation",
        "Modern Integration",
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: "Master Bath Revival",
      category: "Bathroom",
      image: "https://images.pexels.com/photos/7166635/pexels-photo-7166635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Complete master bathroom renovation featuring floor-to-ceiling marble, frameless glass enclosure, and brushed brass fixtures throughout.",
    },
    {
      title: "Kitchen Transformation",
      category: "Kitchen",
      image: "https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Full kitchen remodel with custom cabinetry, quartzite island countertop, and integrated smart appliances for modern living.",
    },
    {
      title: "Spa Bathroom Suite",
      category: "Bathroom",
      image: "https://images.pexels.com/photos/16249146/pexels-photo-16249146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Luxury spa-inspired bathroom with white marble tile, freestanding soaking tub, and custom floating vanity with LED accents.",
    },
    {
      title: "Modern Residence",
      category: "Residential",
      image: "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Custom-built contemporary home featuring panoramic glass facades, open-concept living, and seamless indoor-outdoor transitions.",
    },
    {
      title: "Heritage Façade Restoration",
      category: "Historic",
      image: "https://images.pexels.com/photos/8472257/pexels-photo-8472257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Meticulous restoration of a 19th-century brick façade, preserving architectural details while reinforcing structural integrity.",
    },
    {
      title: "Gourmet Kitchen Build",
      category: "Kitchen",
      image: "https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Chef-grade kitchen build featuring marble waterfall island, custom range hood, and handcrafted open shelving.",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "James L.",
      role: "Homeowner",
      quote: "The team at MARCOL Construction completely transformed our master bathroom. From the custom niche shelving to the flawless tile work, their attention to detail is unmatched. They kept the workspace clean and finished right on schedule.",
      rating: 5,
    },
    {
      name: "Rebecca T.",
      role: "Residential Client",
      quote: "We hired MARCOL to renovate our outdoor shed and add electrical and insulation. They took a dilapidated structure and turned it into a beautiful, functional workspace. Excellent communication throughout the entire project.",
      rating: 5,
    },
    {
      name: "Daniel M.",
      role: "Commercial Client",
      quote: "Finding a reliable contractor can be tough, but MARCOL Construction made the process completely painless. They provided transparent pricing, top-notch craftsmanship, and true to their word, they finished on time and on budget. Experience really does matter.",
      rating: 5,
    },
  ],

  // CTA Section
  cta: {
    headline: "Your Trusted Building Partner",
    subheadline: "Experience matters. Our years on the leading edge of building and renovation mean rock-solid project delivery and superior results.",
    buttonText: "Get a Free Quote",
    buttonLink: "#contact",
  },

  // Footer
  footer: {
    tagline: "Quality craftsmanship, integrity, and exceptional results.",
    copyright: `© ${new Date().getFullYear()} MARCOL Construction LLC. All rights reserved.`,
    certifications: [
      "Licensed & Insured",
      "Expert Craftsmen",
      "Quality Materials",
      "On-Time Completion"
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
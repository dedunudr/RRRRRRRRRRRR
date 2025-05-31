// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/sanidhyy/3d-portfolio/",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "SOLO LEVELING PROJECT",
    company_name: "Javascript",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2025 Janavari 30 - 2030 janaveri 30",
    points: [
      "Welcome to SOLO-LEVELING, Sri Lanka's most powerful, stylish, and intelligent WhatsApp bot — built for tech lovers, anime fans, and digital warriors.",
      "Powered by automation, AI, and attitude..",
      "Designed for everyone — from curious beginners to advanced hackers.",
      "Download videos, music, anime, tools & more",
      "Created by RED SAMURAY D.Rukshan — the mind behind the LOD team Helpr by - Dinu id",
      "> Fast. Fearless. Sinhala. SOLO-LEVELING Join the new era of WhatsApp bots",
    ],
  },
  {
    title: "Logo Designer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2025",
    points: [
      "I'm a passionate logo and photo designer who specializes in creating eye-catching,professional designs and high-quality edits.",
      "Whether it's a brand-new logo or a stunning photo transformation, I bring creativity, detail, and a personal touch to every project.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Let's bring your ideas to life with style and impact!",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Jan 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full st",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "SOLO LEVELING MULTI DEVICE",
    description:
      "SOLO-LEVELING, Sri Lanka's most powerful, stylish, and intelligent WhatsApp bot — built for tech lovers, anime fans, and digital warriors. Javascript simple whatsapp bot in LEGION OF DOOM [LOD] TEM",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "Jv",
        color: "pink-text-gradient",
      },
    ],    
    image: project1,
    source_code_link: "https://github.com/JAPANEES-TEM-BY-RUKA-LOD/SOLO-LEVELING",
    live_site_link: "https://github.com/JAPANEES-TEM-BY-RUKA-LOD/SOLO-LEVELING",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sany/admin-hboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },

  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/san-clone",
    live_site_link: "https://tiktok-clone-reacapp/",
  },
  {
    name: "SESSION SITE & QR",
    description:
      "SOLO LEVELING Whatsapp Bot Multi Device Whatsapp contacting to get session 🇯🇵┃🇰🇷 , Session 1 site mine and session  2 site simple erro, going to session mine site 🔥.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Jv",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://rukshan-whit-solo-leveling-session-2.onrender.com",
    live_site_link: "https://session-by-solo-leveling.onrender.com",
  },
  {
      name: "WEATHER DETAILS APP",
    description:
      "Welcome to our simple and lightweight weather web application! This site is designed to provide real-time weather updates in a fast and user-friendly way. Whether you’re planning your day or just curious about the current conditions, our app delivers accurate weather information right at your fingertips.Built with simplicity in mind, this project focuses on speed, clarity, and accessibility. We hope it helps you stay prepared for whatever the skies bring!",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://weather-io-by-rukshan.vercel.app/",
    live_site_link: "https://weather-io-by-rukshan.vercel.app/",
  },
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YOUTUBE",
    icon: youtube,
    link: "https://www.youtube.com/MER.",
  },
  {
    name: "TELEGRAM",
    icon: linkedin,
    link: "https://t.me/legion_of_doom_2050",
  },
  {
    name: "CHENNAL",
    icon: twitter,
    link: "https://whatsapp.com/channel/0029VbAWWH9BFLgRMCXVlU38",
  },
  {
    name: "OWNER",
    icon: github,
    link: "https://whatsapp.com/channel/0029VbAWWH9BFLgRMCXVlU38",
  },
] as const;

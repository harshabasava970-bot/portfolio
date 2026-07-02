// ============================================================
// portfolioData.js — Centralized configuration for Basava Harsha's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Basava Harsha",
  firstName: "Basava Harsha",
  brandName: "Harsha",
  title: "AI & ML Engineer",
  location: "Vuyyur, India",
  phone: "+91 9553576749",
  emails: {
    primary: "harshabasava970@gmail.com",
    secondary: "",
  },
  summary:
    "Motivated, enthusiastic and dedicated Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. Proficient in Python and Java with a solid understanding of programming fundamentals and problem-solving techniques. Eager to apply technical knowledge and AI concepts to develop innovative solutions for real-world challenges.",
  resumeUrl: "/Harsha_Basava_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/harshabasava970-bot",
  linkedin: "https://www.linkedin.com/in/basava-harsha-b256a7367",
  instagram: null,
};

export const heroContent = {
  greeting: "Hi, I'm Basava Harsha",
  titleHighlight: "AI & ML Engineer",
  subtitle:
    "I build intelligent systems using Python, FastAPI, computer vision, and modern full-stack technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:harshabasava970@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Basava Harsha,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Harsha_Basava_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Basava Harsha</span>, a CSE student specializing in Artificial Intelligence and Machine Learning, based in Vuyyur, India. I'm passionate about building intelligent, real-world applications that solve meaningful problems using Python, FastAPI, computer vision, and full-stack technologies.`,
  techStack: ["Python", "FastAPI", "React"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into intelligent applications",
  description:
    "I follow a structured, analytical, and highly technical approach to turn real-world problems into AI-powered solutions.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding the problem space, user requirements, and data characteristics to lay a rock-solid foundation for any AI or software project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean system architecture, intuitive interfaces, and scalable ML pipelines that ensure both performance and accessibility.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building intelligent backends with Python and FastAPI, and responsive frontends with React — integrating AI models with production-ready APIs.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure like Vercel and Render, followed by continuous improvement.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Prompt Engineering", level: 88 },
        { name: "Responsible AI", level: 82 },
        { name: "Vibe Coding", level: 78 },
        { name: "YOLOv8 / OpenCV", level: 85 },
        { name: "Whisper / edge-tts", level: 80 },
      ],
    },
    {
      title: "Full Stack",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Node.js", level: 82 },
        { name: "TypeScript", level: 78 },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "FastAPI", level: 88 },
        { name: "REST APIs", level: 90 },
        { name: "JWT Authentication", level: 82 },
      ],
    },
    {
      title: "Data & Databases",
      skills: [
        { name: "MongoDB", level: 82 },
        { name: "Power BI", level: 80 },
        { name: "Microsoft Tools", level: 85 },
      ],
    },
    {
      title: "Tools & Infrastructure",
      skills: [
        { name: "Docker", level: 78 },
        { name: "VM VirtualBox", level: 75 },
        { name: "Vercel / Render", level: 85 },
        { name: "Git & GitHub", level: 88 },
      ],
    },
  ],
};

export const contentCreation = {
  badge: "AI Focus Areas",
  heading: "Where I Apply AI to the Real World",
  description:
    "Beyond coursework, I build AI systems that solve real accessibility, lifestyle, and automation challenges.",
  categories: [
    {
      title: "Computer Vision",
      description:
        "Building real-time object detection and scene understanding systems using YOLOv8, OpenCV, and FastAPI for assistive technology and beyond.",
      stats: "YOLOv8 · OpenCV",
      icon: "👁️",
    },
    {
      title: "Voice & NLP",
      description:
        "Integrating Whisper ASR and edge-tts for multilingual voice interaction, enabling hands-free AI assistants and accessibility tools.",
      stats: "Whisper · edge-tts",
      icon: "🎙️",
    },
    {
      title: "AI-Powered Web Apps",
      description:
        "Full-stack applications fusing React, Node.js, and AI backends — from skin-tone color advisors to intelligent travel planners.",
      stats: "React · FastAPI · MongoDB",
      icon: "🧠",
    },
    {
      title: "Responsible AI",
      description:
        "Studying and applying ethical AI principles, bias mitigation, and responsible deployment practices in every project I build.",
      stats: "IBM · Google · Microsoft",
      icon: "⚖️",
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex AI and engineering challenges into clean, logical, and modular solutions.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Balancing B.Tech studies, personal projects, and certifications with disciplined scheduling.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Quick to learn new frameworks and tools — from YOLOv8 to FastAPI to cloud deployment.",
  },
  {
    name: "Analytical Thinking",
    icon: "📊",
    desc: "Applying structured reasoning to data analysis, model selection, and system design decisions.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Clear, concise, and structured interactions in both technical documentation and team collaboration.",
  },
  {
    name: "Continuous Learning",
    icon: "📚",
    desc: "Committed to staying current through certifications from Google, IBM, Microsoft, and AWS.",
  },
  {
    name: "Creativity",
    icon: "🎨",
    desc: "Designing innovative AI solutions — from emotion-aware music players to real-time vision assistants.",
  },
  {
    name: "Attention to Detail",
    icon: "🔍",
    desc: "Ensuring accuracy in model outputs, API design, and deployment configurations for production-ready systems.",
  },
];

export const projects = [
  {
    id: "visionmate-ai",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "VisionMate AI",
    description:
      "An AI-powered assistive web application designed for visually impaired individuals, leveraging real-time computer vision and voice interaction to enhance environmental awareness and navigation. Built with FastAPI and Next.js integrated with YOLOv8, OpenCV, Whisper, and edge-tts for live object detection, scene understanding, OCR-based text reading, and intelligent voice feedback. Features distance estimation, proximity alerts, crowd detection, directional guidance, emergency SOS alerts, and multilingual voice assistance. Frontend deployed on Vercel, backend on Render.",
    techTags: [
      "Python",
      "TypeScript",
      "FastAPI",
      "Next.js",
      "YOLOv8",
      "OpenCV",
      "Whisper",
      "edge-tts",
      "Vercel",
      "Render",
    ],
    links: {
      github: "https://github.com/harshabasava970-bot/visionmate-ai",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "travelwear-ai",
    number: "02",
    badge: null,
    title: "TravelWear AI",
    description:
      "A full-stack AI-powered travel fashion assistant that recommends clothing based on real-time weather conditions for any destination worldwide. Features a Smart Style Advisor using Canvas API color histogram analysis to detect skin tone from uploaded photos and generate personalized outfit color recommendations. Includes an AI chatbot for destination-specific advice, smart packing checklist generator with PDF export, 5-day weather forecast, and JWT-based authentication with saved outfits and travel history stored in MongoDB Atlas.",
    techTags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "TailwindCSS",
      "OpenWeatherMap API",
      "JWT",
      "Canvas API",
      "Vercel",
      "Render",
    ],
    links: {
      github: "https://github.com/harshabasava970-bot/travelwear-ai",
      frontendDemo: "https://travelwear-ai.vercel.app",
    },
    isFlagship: false,
  },
  {
    id: "emotion-music-player",
    number: "03",
    badge: null,
    title: "Emotion Based Automatic Music Player",
    description:
      "An intelligent music recommendation and playback system that automatically changes songs based on user emotions and mood detection. Integrates sensor-based input processing and emotion analysis techniques to identify user emotional states and personalize music playback in real time. Engineered with Python and embedded components to support automated song selection, responsive playback control, and adaptive user interaction.",
    techTags: ["Python", "Embedded Systems", "Sensors", "Emotion Detection", "IoT"],
    links: {
      github: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud",
      icon: "🤖",
      url: "https://drive.google.com/file/d/1xEzp-pFsH_VRSs2w7CgCHXlxkug1Z_8a/view",
    },
    {
      name: "AI Fundamentals",
      issuer: "IBM",
      icon: "💡",
      url: "https://www.credly.com/badges/91bb0dca-4dab-47e2-a22f-493859970b8c/public_url",
    },
    {
      name: "Introduction to AI in Azure",
      issuer: "Microsoft",
      icon: "☁️",
      url: "https://drive.google.com/drive/folders/18lMBEaza01E38bWuIwK-soDeEHHxHf0R",
    },
    {
      name: "Machine Learning Fundamentals",
      issuer: "AWS / Azure",
      icon: "📊",
      url: "https://drive.google.com/file/d/1M0YO3nFjocO_oYfZ9LVnUsaOPgjjW9qP/view",
    },
  ],
  viewAllUrl:
    "https://drive.google.com/drive/folders/18lMBEaza01E38bWuIwK-soDeEHHxHf0R",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering (AI & ML)",
  institution: "Kalasalingam Academy of Research & Education, Tamil Nadu",
  cgpa: "8.5",
  graduation: "2027",
  twelfth: "Intermediate – 10/10 (Sri Chaitanya Mahila Jr Kalasala)",
  tenth: "10th CBSE – 10/10 (Sri Chaithanya High School)",
};

export const footerContent = {
  taglines: [
    "Artificial Intelligence & Machine Learning",
    "Python · FastAPI · Computer Vision",
    "Full Stack AI Applications",
  ],
  credential: "B.Tech CSE (AI & ML) · CGPA 8.5",
  copyright: `© ${new Date().getFullYear()} Basava Harsha | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

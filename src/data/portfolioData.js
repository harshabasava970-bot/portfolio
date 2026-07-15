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
    "I build AI agents, cybersecurity platforms, and full-stack applications using Python, FastAPI, LangChain, and modern ML technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:harshabasava970@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Basava Harsha,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Harsha_Basava_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Basava Harsha</span>, a CSE student specializing in Artificial Intelligence and Machine Learning, based in Vuyyur, India. I'm passionate about building intelligent, real-world applications — from explainable AI cybersecurity platforms to LLM-powered agents — using Python, FastAPI, LangChain, and full-stack technologies.`,
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
        { name: "YOLOv8 / OpenCV", level: 85 },
        { name: "HuggingFace Transformers", level: 82 },
        { name: "SHAP / LIME (XAI)", level: 80 },
        { name: "XGBoost / Scikit-learn", level: 84 },
      ],
    },
    {
      title: "AI Agents & LLMs",
      skills: [
        { name: "LangChain", level: 83 },
        { name: "LangGraph", level: 80 },
        { name: "Groq API (Llama 3.3)", level: 85 },
        { name: "Whisper (Speech-to-Text)", level: 82 },
        { name: "Vibe Coding", level: 78 },
      ],
    },
    {
      title: "Full Stack",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Node.js", level: 82 },
        { name: "TypeScript", level: 78 },
        { name: "Streamlit", level: 88 },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "REST APIs", level: 90 },
        { name: "GitHub Webhooks", level: 82 },
        { name: "JWT Authentication", level: 84 },
      ],
    },
    {
      title: "Data, Tools & Infrastructure",
      skills: [
        { name: "MongoDB", level: 82 },
        { name: "Power BI", level: 80 },
        { name: "Docker", level: 80 },
        { name: "GitHub Actions (CI/CD)", level: 82 },
        { name: "Vercel / Render", level: 88 },
        { name: "VM VirtualBox", level: 75 },
      ],
    },
  ],
};

export const contentCreation = {
  badge: "AI Focus Areas",
  heading: "Where I Apply AI to the Real World",
  description:
    "Beyond coursework, I build AI systems that solve real cybersecurity, accessibility, and automation challenges.",
  categories: [
    {
      title: "Explainable AI & Cybersecurity",
      description:
        "Building production-grade threat detection platforms using DistilBERT, XGBoost, Isolation Forest, SHAP, and LIME — with full explainability for every prediction.",
      stats: "SHAP · LIME · XGBoost",
      icon: "🛡️",
    },
    {
      title: "AI Agents & LLMs",
      description:
        "Engineering LangGraph ReAct agents with persistent memory, voice interaction, and Groq's Llama 3.3 70B — enabling personalized multi-session AI assistants.",
      stats: "LangChain · LangGraph · Groq",
      icon: "🤖",
    },
    {
      title: "AI-Powered Web Apps",
      description:
        "Full-stack applications fusing React, Node.js, FastAPI, and AI backends — from smart outfit planners to automated GitHub PR code reviewers.",
      stats: "React · FastAPI · MongoDB",
      icon: "🧠",
    },
    {
      title: "Responsible AI",
      description:
        "Studying and applying ethical AI principles, bias mitigation, transparent predictions, and responsible deployment practices across every project I build.",
      stats: "IBM · Google · Microsoft · AWS",
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
    id: "adaptive-ai-cyber-threat",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Adaptive Explainable AI for Cyber Threat Detection",
    description:
      "A production-grade AI-powered cybersecurity platform that detects phishing emails, malicious URLs, suspicious login behavior, and network anomalies using Machine Learning, Deep Learning, and Explainable AI. Features a modular multi-model pipeline with DistilBERT/BERT for phishing detection, XGBoost for malicious URL and network intrusion detection, and Isolation Forest for behavioral anomaly detection. An Adaptive Threat Fusion Engine generates unified risk scores and actionable security insights. SHAP and LIME provide transparent model explanations and remediation recommendations. Includes a Streamlit SOC dashboard with real-time analytics, threat timelines, PDF/CSV reporting, Docker support, CI/CD via GitHub Actions, and cloud deployment on Render and Streamlit Community Cloud.",
    techTags: [
      "Python",
      "FastAPI",
      "Streamlit",
      "PyTorch",
      "HuggingFace Transformers",
      "XGBoost",
      "SHAP",
      "LIME",
      "SQLAlchemy",
      "Docker",
      "GitHub Actions",
    ],
    links: {
      github: "https://github.com/harshabasava970-bot/adaptive-ai-cyber-threat",
      frontendDemo: "https://cyber-threat-ai.streamlit.app",
    },
    isFlagship: true,
  },
  {
    id: "custom-ai-agent-memory",
    number: "02",
    badge: null,
    title: "Custom AI Agent with Memory",
    description:
      "A production-ready AI assistant with persistent long-term memory supporting both voice and text interactions. Remembers user preferences, facts, and goals across multiple sessions using a LangGraph ReAct agent integrated with LangChain and Groq's Llama 3.3 70B model. Features intelligent memory retrieval, automated memory storage, and contextual response generation. FastAPI backend exposes REST APIs for chat, memory management, and Whisper-based speech transcription. Streamlit frontend provides voice input, real-time conversations, and an interactive memory dashboard. Designed with isolated multi-user memory stores, Dockerized deployment, and cloud hosting on Render and Streamlit Community Cloud.",
    techTags: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Streamlit",
      "Groq API",
      "Whisper",
      "Docker",
      "Render",
    ],
    links: {
      github: "https://github.com/harshabasava970-bot/Custom-AI-agent-with-memory",
      frontendDemo: "https://harshabasava970-bot-custom-ai-agent-with-mem-frontendapp-dscod3.streamlit.app",
    },
    isFlagship: false,
  },
  {
    id: "ai-code-review-bot",
    number: "03",
    badge: null,
    title: "AI Code Review Bot – GitHub PR Auto-Reviewer",
    description:
      "An AI-powered GitHub Pull Request review automation system that performs intelligent code analysis and posts detailed review comments directly on GitHub using Groq's Llama 3.3 70B model. A FastAPI backend integrates with GitHub Webhooks and GitHub REST APIs to automatically retrieve PR diffs, analyze code quality, and generate actionable feedback for every submitted pull request. Automatically detects logic errors, security vulnerabilities, performance bottlenecks, coding standard violations, and best practice issues. Provides file-level review comments and overall approval or rejection verdicts. Deployed on Render using zero-cost cloud infrastructure.",
    techTags: [
      "Python",
      "FastAPI",
      "GitHub Webhooks",
      "GitHub REST API",
      "Groq API",
      "Llama 3.3 70B",
      "Render",
    ],
    links: {
      github: "https://github.com/harshabasava970-bot/AI-code-review-bot",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "travelwear-ai",
    number: "04",
    badge: null,
    title: "TravelWear AI – Smart Weather Based Outfit Planner",
    description:
      "A full-stack AI-powered travel fashion assistant that recommends clothing based on real-time weather conditions from OpenWeatherMap for any destination worldwide. Features a Smart Style Advisor using Canvas API color histogram analysis to detect skin tone from uploaded photos and generate personalized outfit color recommendations. Includes an AI chatbot for destination-specific clothing, food, and places-to-visit guidance, smart packing checklist with PDF export, 5-day weather forecast with travel date selection, and JWT-based authentication with saved outfits and travel history stored in MongoDB Atlas.",
    techTags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "OpenWeatherMap API",
      "Canvas API",
      "JWT",
      "TailwindCSS",
      "Vercel",
      "Render",
    ],
    links: {
      github: "https://github.com/harshabasava970-bot/travelwear-ai",
      frontendDemo: "https://travelwear-ai.vercel.app/try-on",
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
  cgpa: "8.71",
  graduation: "2027",
  twelfth: "Intermediate – 10/10 (Sri Chaitanya Mahila Jr Kalasala)",
  tenth: "10th CBSE – 10/10 (Sri Chaithanya High School)",
};

export const footerContent = {
  taglines: [
    "Artificial Intelligence & Machine Learning",
    "Python · FastAPI · LangChain · LangGraph",
    "AI Agents · Cybersecurity · Full Stack Apps",
  ],
  credential: "B.Tech CSE (AI & ML) · CGPA 8.71",
  copyright: `© ${new Date().getFullYear()} Basava Harsha | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

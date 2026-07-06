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
    "Motivated, enthusiastic and dedicated Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. Proficient in Python and Java with a solid understanding of programming fundamentals and problem-solving techniques. Demonstrates strong analytical thinking, adaptability, and a commitment to continuous learning. Eager to apply technical knowledge and AI concepts to develop innovative solutions for real-world challenges.",
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
    "I build intelligent systems using Python, FastAPI, LangGraph, and modern full-stack technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:harshabasava970@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Basava Harsha,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Harsha_Basava_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Basava Harsha</span>, a CSE student specializing in Artificial Intelligence and Machine Learning, based in Vuyyur, India. I'm passionate about building intelligent, real-world applications — from AI agents with long-term memory to automated code review bots — using Python, FastAPI, LangGraph, and full-stack technologies.`,
  techStack: ["Python", "FastAPI", "LangGraph", "React"],
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
      text: "Building intelligent backends with Python and FastAPI, and responsive frontends with React and Next.js — integrating AI models with production-ready APIs.",
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
        { name: "LangGraph / LangChain", level: 88 },
        { name: "Prompt Engineering", level: 88 },
        { name: "Responsible AI", level: 82 },
        { name: "Vibe Coding", level: 78 },
        { name: "Whisper / Groq API", level: 85 },
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
        { name: "FastAPI", level: 90 },
        { name: "REST APIs", level: 90 },
        { name: "GitHub Webhooks", level: 82 },
        { name: "Server-Sent Events", level: 78 },
      ],
    },
    {
      title: "Data & Databases",
      skills: [
        { name: "MongoDB", level: 82 },
        { name: "Power BI", level: 80 },
        { name: "Microsoft Tools", level: 85 },
        { name: "TF-IDF / PyPDF", level: 78 },
      ],
    },
    {
      title: "Tools & Infrastructure",
      skills: [
        { name: "Docker", level: 80 },
        { name: "VM VirtualBox", level: 75 },
        { name: "Vercel / Render", level: 88 },
        { name: "Git & GitHub", level: 90 },
      ],
    },
  ],
};

export const contentCreation = {
  badge: "AI Focus Areas",
  heading: "Where I Apply AI to the Real World",
  description:
    "Beyond coursework, I build production-ready AI systems that solve real automation, accessibility, and developer tooling challenges.",
  categories: [
    {
      title: "AI Agents with Memory",
      description:
        "Building LangGraph ReAct agents with persistent long-term memory, voice input, and multi-user support — deployed on free cloud infrastructure.",
      stats: "LangGraph · LangChain · Groq",
      icon: "🧠",
    },
    {
      title: "Developer Tooling",
      description:
        "Automating GitHub PR code reviews with AI — detecting bugs, security issues, and best practice violations using webhooks and Groq's Llama model.",
      stats: "GitHub API · FastAPI · Groq",
      icon: "🔧",
    },
    {
      title: "RAG & Document AI",
      description:
        "Full-stack RAG chatbots that let users chat with their PDFs using TF-IDF retrieval, streaming SSE responses, and source page attribution.",
      stats: "TF-IDF · Next.js · Groq",
      icon: "📄",
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
    desc: "Quick to learn new frameworks and tools — from LangGraph to GitHub Webhooks to cloud deployment.",
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
    desc: "Designing innovative AI solutions — from memory agents to AI-powered code review automation.",
  },
  {
    name: "Attention to Detail",
    icon: "🔍",
    desc: "Ensuring accuracy in model outputs, API design, and deployment configurations for production-ready systems.",
  },
];

export const projects = [
  {
    id: "custom-ai-agent-memory",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Custom AI Agent with Memory",
    description:
      "Developed a full-stack AI agent with persistent long-term memory supporting both voice and text interactions, enabling personalized conversations by remembering user preferences, facts and goals across multiple sessions. Engineered a LangGraph ReAct agent integrated with LangChain and Groq's Llama 3.3 70B model, implementing intelligent memory retrieval, automated memory storage and contextual response generation using scoped user memories. Built a FastAPI backend exposing REST APIs for chat, memory management and Whisper-based speech transcription, while developing a Streamlit frontend featuring voice input, real-time chat and an interactive memory dashboard. Designed a scalable multi-user architecture with isolated memory stores, Dockerized deployment and cloud hosting on Render and Streamlit Community Cloud, delivering a production-ready AI assistant supporting persistent conversations and 1000+ daily requests on free infrastructure.",
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
      demo: "https://harshabasava970-bot-custom-ai-agent-with-mem-frontendapp-dscod3.streamlit.app",
    },
    isFlagship: true,
  },
  {
    id: "ai-code-review-bot",
    number: "02",
    badge: null,
    title: "AI Code Review Bot – GitHub PR Auto-Reviewer",
    description:
      "Developed an AI-powered GitHub Pull Request review automation system that performs intelligent code analysis and posts detailed review comments directly on GitHub using Groq's Llama 3.3 70B model. Engineered a FastAPI backend integrated with GitHub Webhooks and GitHub REST APIs to automatically retrieve pull request diffs, analyze code quality and generate actionable feedback for every submitted PR. Implemented automated detection of logic errors, security vulnerabilities, performance bottlenecks, coding standard violations and best practice recommendations while providing overall approval or rejection verdicts with file-level review comments. Deployed the backend on Render with zero-cost cloud infrastructure, enabling scalable, production-ready continuous AI-assisted code review without relying on paid AI services.",
    techTags: [
      "Python",
      "FastAPI",
      "GitHub Webhooks",
      "GitHub REST API",
      "Groq API",
      "Render",
    ],
    links: {
      github: "https://github.com/harshabasava970-bot/ai-code-review-bot",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "rag-chatbot-pdf",
    number: "03",
    badge: null,
    title: "RAG Chatbot – Chat with your PDFs",
    description:
      "Developed a full-stack Retrieval-Augmented Generation (RAG) chatbot enabling users to upload PDF documents and interact with them through natural language conversations while generating responses strictly grounded in document content. Engineered a lightweight retrieval pipeline using TF-IDF indexing and PyPDF for document parsing, efficiently retrieving relevant text chunks which were processed by Groq's Llama 3.3 70B model to generate context-aware answers with exact source page references. Implemented real-time response streaming using Server-Sent Events (SSE), low-memory document indexing, document chunking and source attribution to improve transparency, accuracy and user trust. Built the frontend using Next.js and deployed the application on Vercel with a Dockerized FastAPI backend hosted on Render, delivering a scalable, production-ready AI document assistant without external vector databases or paid APIs.",
    techTags: [
      "Python",
      "FastAPI",
      "Next.js",
      "TF-IDF",
      "PyPDF",
      "Groq API",
      "SSE",
      "Docker",
      "Vercel",
      "Render",
    ],
    links: {
      github: "https://github.com/harshabasava970-bot/rag-chatbot-pdf",
      demo: "https://rag-chatbot-nu-blue.vercel.app",
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
      issuer: "AWS",
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
    "Python · FastAPI · LangGraph",
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

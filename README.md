# Basava Harsha — Portfolio

Personal portfolio website built with React + Vite + Tailwind CSS.

Live: [harshabasava970-bot.github.io/portfolio](https://github.com/harshabasava970-bot/portfolio) <!-- update with your live URL -->

---

## About

CSE student specializing in AI & ML at Kalasalingam Academy of Research & Education (CGPA 8.5/10, Expected 2027).
This portfolio showcases my projects, skills, certifications, and contact details.

---

## Projects

### 1. Custom AI Agent with Memory
Full-stack AI agent with persistent long-term memory supporting voice and text interactions.
Engineered a LangGraph ReAct agent with Groq's Llama 3.3 70B, FastAPI backend, and Streamlit frontend.
Deployed on Render + Streamlit Community Cloud — supports 1000+ daily requests on free infrastructure.

**Stack:** Python · FastAPI · LangGraph · LangChain · Streamlit · Groq API · Whisper · Docker · Render

**Repo:** https://github.com/harshabasava970-bot/Custom-AI-agent-with-memory

---

### 2. AI Code Review Bot — GitHub PR Auto-Reviewer
AI-powered GitHub PR review system that automatically posts detailed code review comments using Groq's Llama 3.3 70B.
Detects logic errors, security vulnerabilities, performance bottlenecks, and coding standard violations.
Deployed on Render with zero-cost infrastructure.

**Stack:** Python · FastAPI · GitHub Webhooks · GitHub REST API · Groq API · Render

**Repo:** https://github.com/harshabasava970-bot/ai-code-review-bot

---

### 3. RAG Chatbot — Chat with your PDFs
Full-stack RAG chatbot that lets users upload PDFs and have natural language conversations with them.
Uses TF-IDF indexing + PyPDF for retrieval, Groq Llama 3.3 70B for answers, and SSE for real-time streaming.
Frontend on Vercel, Dockerized FastAPI backend on Render.

**Stack:** Python · FastAPI · Next.js · TF-IDF · PyPDF · Groq API · SSE · Docker · Vercel · Render

**Repo:** https://github.com/harshabasava970-bot/rag-chatbot-pdf

---

## Tech Stack

| Category | Technologies |
|---|---|
| Languages | Python, Java |
| AI / ML | LangGraph, LangChain, Groq API, Whisper, Prompt Engineering |
| Backend | FastAPI, REST APIs, GitHub Webhooks, Server-Sent Events |
| Frontend | React.js, Next.js, Streamlit, Tailwind CSS |
| Databases | MongoDB, TF-IDF, Power BI |
| Tools | Docker, Git & GitHub, Vercel, Render, VM VirtualBox |

---

## Certifications

- Introduction to Generative AI — Google Cloud
- AI Fundamentals — IBM
- Introduction to AI in Azure — Microsoft
- Machine Learning Fundamentals — AWS

---

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Project Structure

```
portfolio/
├── public/
│   └── Harsha_Basava_Resume.pdf   ← Resume download
├── src/
│   ├── assets/
│   │   ├── about/                 ← Profile images
│   │   └── hero video/            ← Hero background video
│   ├── components/                ← React components
│   ├── data/
│   │   └── portfolioData.js       ← All content (projects, skills, etc.)
│   └── App.jsx
├── index.html
└── vite.config.js
```

To update any content (projects, skills, links), edit `src/data/portfolioData.js`.

---

## Contact

- Email: harshabasava970@gmail.com
- LinkedIn: https://www.linkedin.com/in/basava-harsha-b256a7367
- GitHub: https://github.com/harshabasava970-bot

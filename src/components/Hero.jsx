import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroPhoto from '../assets/about/harsha-avatar.jpg';
import { heroContent, socialLinks } from '../data/portfolioData';

const AnimatedBackground = () => (
  <>
    <style>{`
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.15; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(1.08); }
      }
      @keyframes pulse-slow2 {
        0%, 100% { opacity: 0.1; transform: scale(1.05); }
        50% { opacity: 0.25; transform: scale(0.95); }
      }
      @keyframes drift {
        0% { transform: translateY(0px) translateX(0px); }
        33% { transform: translateY(-30px) translateX(15px); }
        66% { transform: translateY(15px) translateX(-20px); }
        100% { transform: translateY(0px) translateX(0px); }
      }
      @keyframes drift2 {
        0% { transform: translateY(0px) translateX(0px); }
        33% { transform: translateY(20px) translateX(-25px); }
        66% { transform: translateY(-20px) translateX(10px); }
        100% { transform: translateY(0px) translateX(0px); }
      }
      @keyframes grid-move {
        0% { background-position: 0 0; }
        100% { background-position: 80px 80px; }
      }
      @keyframes node-pulse {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.6; }
      }
      @keyframes hero-float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-18px); }
      }
      .hero-grid-bg { animation: grid-move 8s linear infinite; }
      .hero-orb-1 { animation: pulse-slow 7s ease-in-out infinite, drift 18s ease-in-out infinite; }
      .hero-orb-2 { animation: pulse-slow2 9s ease-in-out infinite, drift2 22s ease-in-out infinite; }
      .hero-orb-3 { animation: pulse-slow 11s ease-in-out infinite 2s, drift 25s ease-in-out infinite 3s; }
      .node-dot { animation: node-pulse 3s ease-in-out infinite; }
      .node-dot:nth-child(2) { animation-delay: 0.5s; }
      .node-dot:nth-child(3) { animation-delay: 1s; }
      .node-dot:nth-child(4) { animation-delay: 1.5s; }
      .node-dot:nth-child(5) { animation-delay: 2s; }
      .node-dot:nth-child(6) { animation-delay: 2.5s; }
      .hero-photo-float { animation: hero-float 6s ease-in-out infinite; }
    `}</style>

    <div className="absolute inset-0 bg-[#030305]" />

    <div
      className="hero-grid-bg absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,42,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,42,42,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }}
    />

    <div className="hero-orb-1 absolute rounded-full pointer-events-none"
      style={{ width: '600px', height: '600px', top: '-100px', right: '-100px',
        background: 'radial-gradient(circle, rgba(255,42,42,0.18) 0%, transparent 70%)', filter: 'blur(60px)' }} />
    <div className="hero-orb-2 absolute rounded-full pointer-events-none"
      style={{ width: '500px', height: '500px', bottom: '-80px', left: '-80px',
        background: 'radial-gradient(circle, rgba(255,42,42,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
    <div className="hero-orb-3 absolute rounded-full pointer-events-none"
      style={{ width: '300px', height: '300px', top: '40%', left: '35%',
        background: 'radial-gradient(circle, rgba(180,30,30,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />

    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <line x1="75%" y1="20%" x2="85%" y2="45%" stroke="rgba(255,42,42,0.12)" strokeWidth="1" strokeDasharray="6 6">
        <animate attributeName="opacity" values="0.05;0.2;0.05" dur="4s" repeatCount="indefinite" />
      </line>
      <line x1="85%" y1="45%" x2="78%" y2="70%" stroke="rgba(255,42,42,0.12)" strokeWidth="1" strokeDasharray="6 6">
        <animate attributeName="opacity" values="0.05;0.18;0.05" dur="5s" begin="1s" repeatCount="indefinite" />
      </line>
      <line x1="75%" y1="20%" x2="65%" y2="55%" stroke="rgba(255,42,42,0.08)" strokeWidth="1" strokeDasharray="4 8">
        <animate attributeName="opacity" values="0.03;0.15;0.03" dur="6s" begin="2s" repeatCount="indefinite" />
      </line>
      <line x1="65%" y1="55%" x2="78%" y2="70%" stroke="rgba(255,42,42,0.08)" strokeWidth="1" strokeDasharray="4 8">
        <animate attributeName="opacity" values="0.03;0.12;0.03" dur="4.5s" begin="0.5s" repeatCount="indefinite" />
      </line>
      <circle className="node-dot" cx="75%" cy="20%" r="3" fill="rgba(255,42,42,0.5)" />
      <circle className="node-dot" cx="85%" cy="45%" r="2.5" fill="rgba(255,42,42,0.4)" />
      <circle className="node-dot" cx="78%" cy="70%" r="3" fill="rgba(255,42,42,0.5)" />
      <circle className="node-dot" cx="65%" cy="55%" r="2" fill="rgba(255,42,42,0.3)" />
    </svg>
  </>
);

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatedBackground />

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Left Floating Social Bar — desktop */}
      <div className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125" aria-label="GitHub">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125" aria-label="LinkedIn">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>

      {/* Main content — two column on desktop, stacked on mobile */}
      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-8 pt-20 md:pt-0">

        {/* LEFT — Text + Buttons */}
        <div className="flex flex-col items-start text-left w-full md:max-w-xl">

          {/* Mobile inline socials */}
          <div data-aos="fade-up" data-aos-delay="100" className="flex items-center gap-4 mb-4 lg:hidden">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
              className="text-white/60 hover:text-white" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-white/60 hover:text-white" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
          </div>

          {/* Heading */}
          <h1 data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            {heroContent.greeting}, <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_white]">
              {heroContent.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p data-aos="fade-up" data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md">
            {heroContent.subtitle}
          </p>

          {/* Buttons */}
          <div data-aos="fade-up" data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full">
            <a href={heroContent.ctaPrimary.href}
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md">
              {heroContent.ctaPrimary.text}
            </a>
            <a href={heroContent.ctaSecondary.href}
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md">
              {heroContent.ctaSecondary.text}
            </a>
            <a href={heroContent.ctaResume.href} download
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-transparent border border-white/50 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>
        </div>

        {/* RIGHT — Profile photo */}
        <div data-aos="zoom-in" data-aos-delay="500"
          className="hidden md:flex flex-col items-center justify-center shrink-0">
          <div className="hero-photo-float relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#ff2a2a]/20 blur-2xl scale-110 pointer-events-none" />
            {/* Red accent ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#ff2a2a]/60 via-transparent to-[#ff2a2a]/30 pointer-events-none" />
            {/* Photo */}
            <img
              src={heroPhoto}
              alt="Basava Harsha"
              className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover object-top border-2 border-white/20 shadow-[0_0_60px_rgba(255,42,42,0.3)]"
            />
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div data-aos="fade-up" data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/60 drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]"
            fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
            viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

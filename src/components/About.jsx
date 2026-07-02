import React from 'react';
import stackImage from '../assets/about/harsha-avatar.png';
import { aboutContent } from '../data/portfolioData';

const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <linearGradient id="python-grad1" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#5A9FD4"/>
        <stop offset="1" stopColor="#306998"/>
      </linearGradient>
      <linearGradient id="python-grad2" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFD43B"/>
        <stop offset="1" stopColor="#FFE873"/>
      </linearGradient>
      <path fill="url(#python-grad1)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
      <path fill="url(#python-grad2)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const FastAPIIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="60" fill="#009688"/>
      <path fill="#fff" d="M 68 24 L 44 72 L 64 72 L 60 104 L 84 56 L 64 56 Z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">FastAPI</span>
  </div>
);

const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <g fill="#00d8ff">
        <circle cx="64" cy="64" r="11.4"/>
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13-1.2-21.1-9.6-23.5-7.8-2.3-18.2 1.5-28.5 10.5-10.3-8.7-20.7-12.5-28.5-10.1-8.4 2.4-11.7 10.6-9.5 23.7.5 2.4 1 4.7 1.7 7-2.3.7-4.6 1.5-6.8 2.4-12.7 5.2-20.2 13.1-18.2 20.9 2 8.1 10.5 12.6 24.1 12.6 2.3 0 4.6-.2 6.9-.5 1 2.6 2.1 5.2 3.2 7.6 8.2 17.8 20.4 29.1 31.4 29.1 11 0 23.4-11.5 31.5-29.5 1-2.2 1.9-4.7 2.8-7.2 2.3.3 4.7.4 7 .4 13.6 0 22.1-4.4 24.1-12.5 2.1-7.8-5.3-15.8-18-21.1zm-37.8 33.8c-3.2.8-6.4 1.2-9.5 1.2-3.1 0-6.3-.4-9.5-1.2l-1.9-.5 1.2-1.6c3.2-4.2 7-8.1 11.2-11.3 4.2 3.2 8 7.1 11.2 11.3l1.2 1.6-3.9 1zm-1.9-11.3c-2.8-3.2-5.9-6.1-9.3-8.8-3.4 2.7-6.5 5.6-9.3 8.8-2.8-2.9-5.3-6.1-7.3-9.3 5.4-3.5 11.1-5.9 16.6-5.9s11.2 2.4 16.6 5.9c-2 3.2-4.5 6.4-7.3 9.3zm27.3-2.5c-3.4-1.2-7-2.2-10.7-3 .8-3.2 1.4-6.4 1.7-9.7 5.4 1.6 10.6 3.8 15.2 6.7-1.5 2.4-3.5 4.5-6.2 6zm-57.5-3c-3.7.8-7.2 1.8-10.6 3-2.6-1.5-4.6-3.6-6.2-6 4.6-2.9 9.8-5.2 15.2-6.7.3 3.3.9 6.5 1.6 9.7zm59.7-8.1c-4.8-2.9-10.1-5.2-15.7-6.8.3-3.6.4-7.2.1-10.8 5.9 2.2 11.5 5.2 16.4 9.1-.3 2.9-.6 5.5-1.2 8.1l.4.4zm-59.8-8.1c-.6-2.7-.9-5.4-1.2-8.1 4.9-3.9 10.5-6.9 16.4-9.1-.3 3.6-.1 7.2.1 10.8-5.6 1.6-10.9 3.9-15.3 6.4zm16.6-22.3c3.4-.3 7-.4 10.5-.4 3.5 0 7 .2 10.4.5 0 0 0 0 0 0-.2 4.2-.7 8.2-1.5 12.1-2.9-.5-5.9-.8-9-.8s-6.1.3-9 .8c-.8-3.9-1.3-7.9-1.4-12.2zm4.3-15.8c3.5-2.9 7.2-5.1 10.7-6.4 3.7-1.4 6.9-1.6 9.1-1 3.9 1.1 5.9 5.6 5.3 12.8-.2 2.4-.6 4.8-1.2 7.3-2.9-.9-5.9-1.7-9-2.2.3-3.5.4-7.2.3-10.8.4.1.7.2.9.3-2.5-1-4.9-.9-7 .3-1.7 1.1-3.2 2.4-4.3 3.9-.3-1.5-.4-2.9-.5-4.2h-.1l-.2-.1c.7-.7 1.4-1.3 2-1.9zm-23.8-.7c3.4-1 7.4.8 11.3 4.4.7.7 1.5 1.4 2.2 2.2.1 1.6.3 3.1.6 4.7-1.5-1.8-3.1-3.4-5.1-4.7-2.5-1.6-5.2-2-7.6-1.1-1.2 3.1-1.3 7.2-.6 12.1.2 1.6.5 3.3.9 5-3.1.6-6.2 1.3-9.1 2.2-.6-2.4-1-4.9-1.2-7.3-.8-7.1 1.1-11.7 5-12.7l3.6-4.8zm9.1 13.1c3.3 0 6.6.3 9.8.8-2.9.8-5.7 1.8-8.5 3-.8-1.3-1.3-2.6-1.3-3.8zm-2.4 0c0 1.2-.5 2.5-1.3 3.8-2.8-1.1-5.6-2.1-8.5-3 3.1-.5 6.4-.8 9.8-.8zm-14.1 5.9c2.9.8 5.8 1.7 8.7 2.8.8 3.4 1.4 6.9 1.6 10.4-3.5.9-6.9 2.1-10.2 3.5-.5-2.2-.9-4.4-1.1-6.6-.4-4.1 0-7.7 1-10.1zm12.4 1.5c2.4-.9 4.8-1.7 7.3-2.3 2.5.6 5 1.4 7.4 2.3.8 2.5 1.3 5.1 1.4 7.7-.8 0-1.7-.1-2.5-.1h-12.2c-.8 0-1.7.1-2.5.1.2-2.5.6-5.1 1.1-7.7z"/>
      </g>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">React</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img
                  src={stackImage}
                  alt="Basava Harsha — AI & ML Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <FastAPIIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;

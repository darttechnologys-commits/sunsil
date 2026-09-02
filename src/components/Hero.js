

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Custom Mouse Position Hook
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      
      rafId.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        setPosition({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return position;
};

// Optimized Floating Particles Component
const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 12 }, () => ({
      size: Math.random() * 4 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.2 + 0.05,
      delay: Math.random() * 4,
      duration: Math.random() * 6 + 6
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-bounce"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
            background: `rgba(179, 128, 56, ${p.opacity})`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`
          }}
        />
      ))}
    </div>
  );
};

// Interactive Ripple Button
const RippleButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);

  const createRipple = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y, size }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  const baseClasses = "px-8 py-3.5 font-semibold text-xs md:text-sm tracking-wider uppercase rounded-xl transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-[#94611B] via-[#805214] to-[#68410E] text-white shadow-lg hover:shadow-xl hover:shadow-[#94611B]/20 hover:-translate-y-0.5 focus:ring-[#B38038]",
    secondary: "border border-[#B38038]/50 text-[#8C5D1E] bg-white/40 backdrop-blur-sm hover:bg-[#B38038]/10 hover:border-[#B38038] hover:-translate-y-0.5 focus:ring-[#B38038] dark:text-[#D4A017] dark:bg-gray-800/40"
  };

  return (
    <button
      ref={buttonRef}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={createRipple}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </button>
  );
};

// Main Hero Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mousePosition = useMousePosition();
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isMobile) return 'none';
    return `perspective(1000px) rotateY(${mousePosition.x * 0.4}deg) rotateX(${-mousePosition.y * 0.4}deg)`;
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[680px] bg-gradient-to-br from-[#FDF5EB] via-[#FAF0E4] to-[#F3E5D8] rounded-3xl p-6 md:p-14 overflow-hidden flex flex-col md:flex-row items-center justify-between font-sans shadow-2xl dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-500"
      aria-label="Hero section - Skincare products"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-10 left-10 w-72 h-72 bg-[#B38038]/15 rounded-full blur-3xl transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        />
        <div 
          className="absolute bottom-10 right-10 w-96 h-96 bg-[#996515]/15 rounded-full blur-3xl transition-transform duration-700 ease-out"
          style={{ transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)` }}
        />
        <FloatingParticles />
      </div>

      {/* Left Text Content */}
      <div 
        className={`w-full md:w-[50%] z-10 flex flex-col items-start gap-6 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#B38038]/30 bg-white/70 text-[#8C5D1E] text-xs font-semibold tracking-wide backdrop-blur-md hover:bg-white transition-all shadow-sm dark:bg-gray-800/70 dark:text-[#D4A017]">
          <span className="animate-spin text-sm">✨</span> 
          <span>100% CLEAN & CRUELTY-FREE</span>
          <span className="w-2 h-2 rounded-full bg-[#B38038] animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="text-[clamp(2.2rem,5vw,4.2rem)] font-serif tracking-tight text-[#2B2825] leading-[1.1] dark:text-white">
          Unlock Your Most <br />
          <span className="bg-gradient-to-r from-[#996515] via-[#D4A017] to-[#6E470E] bg-clip-text text-transparent font-semibold">
            Radiant Complexion
          </span>
        </h1>

        {/* Description */}
        <p className="text-[#55504A] text-base md:text-lg max-w-lg leading-relaxed dark:text-gray-300">
          Experience targeted skincare formulations crafted with pure, natural botanicals designed to restore your skin's natural glow and vitality.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
          <RippleButton variant="primary">
            <span>Shop Best Sellers</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </RippleButton>
          
          <RippleButton variant="secondary">
            Take Skin Quiz
          </RippleButton>
        </div>

        {/* Social Proof */}
        <div className="flex flex-wrap items-center gap-6 pt-4 text-xs md:text-sm text-[#4A4540] dark:text-gray-400">
          <div className="flex items-center gap-2 font-medium">
            <div className="flex -space-x-2">
              <img className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/100?img=33" alt="User" />
              <img className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/100?img=47" alt="User" />
              <img className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/100?img=12" alt="User" />
            </div>
            <span><strong className="text-[#2B2825] dark:text-white">10K+</strong> Happy Skins</span>
          </div>

          <div className="h-4 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block" />

          <div className="flex items-center gap-1.5">
            <div className="flex text-[#D4A017]">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="font-bold text-[#2B2825] dark:text-white">4.9</span>
            <span className="text-gray-500">(2.3k reviews)</span>
          </div>
        </div>
      </div>

      {/* Right Product Showcase (3D Effect) */}
      <div 
        className={`w-full md:w-[45%] relative mt-12 md:mt-0 flex justify-center items-center transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        }`}
        style={{ transform: getTransform(), transformStyle: 'preserve-3d' }}
      >
        {/* Ambient Backlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#B38038]/20 to-[#996515]/20 rounded-full blur-2xl transform scale-110" />

        {/* Main Card Wrapper */}
        <div className="relative w-full max-w-[340px] h-[460px] rounded-[160px] border border-[#B38038]/30 p-2.5 bg-white/30 backdrop-blur-md shadow-2xl dark:bg-gray-800/30">
          <div className="w-full h-full rounded-[150px] overflow-hidden relative">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-[150px]" />
            )}
            
            <img 
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600" 
              alt="Skincare showcase" 
              className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Floating Glass Badges (3D Depth Effect) */}
          <div className="absolute -left-6 top-1/4 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
            <span className="text-xl">🌿</span>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">Ingredients</p>
              <p className="text-xs font-bold text-gray-800 dark:text-white">100% Organic</p>
            </div>
          </div>

          <div className="absolute -right-4 bottom-16 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 flex items-center gap-3 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
            <span className="text-xl">💧</span>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">Hydration</p>
              <p className="text-xs font-bold text-gray-800 dark:text-white">24h Moisture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



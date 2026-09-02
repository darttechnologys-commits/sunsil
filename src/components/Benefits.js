// const benefits = [
//   { icon: '🌿', title: '100% Natural', desc: 'Plant-based ingredients, no harmful chemicals' },
//   { icon: '🐰', title: 'Cruelty-Free', desc: 'Never tested on animals, PETA certified' },
//   { icon: '♻️', title: 'Eco-Friendly', desc: 'Sustainable packaging, zero waste' },
//   { icon: '🔬', title: 'Dermatologist Tested', desc: 'Clinically proven for all skin types' },
// ];

// export default function Benefits() {
//   return (
//     <section className="py-20 px-4 bg-skin-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {benefits.map((benefit) => (
//             <div key={benefit.title} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
//               <div className="text-4xl mb-3">{benefit.icon}</div>
//               <h3 className="font-semibold text-lg">{benefit.title}</h3>
//               <p className="text-gray-500 text-sm mt-1">{benefit.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Heart, Recycle, ShieldCheck } from 'lucide-react';

const benefits = [
  { 
    icon: Leaf, 
    title: '100% Natural', 
    desc: 'Plant-based ingredients, zero harmful chemicals or synthetic additives.',
    tag: 'Pure'
  },
  { 
    icon: Heart, 
    title: 'Cruelty-Free', 
    desc: 'Ethically crafted and never tested on animals. 100% PETA certified.',
    tag: 'Ethical'
  },
  { 
    icon: Recycle, 
    title: 'Eco-Friendly', 
    desc: 'Sustainable packaging designed for zero waste and lower footprint.',
    tag: 'Green'
  },
  { 
    icon: ShieldCheck, 
    title: 'Dermatologist Tested', 
    desc: 'Clinically proven and safe for all skin types, including sensitive skin.',
    tag: 'Safe'
  },
];

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-[#ffffff] to-[#fcfbfa] overflow-hidden"
    >
      {/* Gold Ambient Background Blobs matching BestSellers */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c59b27]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#c59b27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center max-w-2xl mx-auto mb-16 space-y-4 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c59b27]/10 text-[#c59b27] text-[11px] font-semibold tracking-widest uppercase">
            <span>✦</span> Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#191817] tracking-tight">
            Pure & <span className="bg-gradient-to-r from-[#c59b27] to-[#a67c1e] bg-clip-text text-transparent">Conscious</span> Care
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed font-light">
            We're committed to quality, sustainability, and your skin's health with luxury formulations.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`group relative p-8 rounded-2xl bg-white border border-[#f5f3f0] shadow-sm hover:shadow-xl hover:shadow-[#c59b27]/10 hover:-translate-y-2 transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Subtle Gold Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#c59b27]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon Box with Gold Gradient */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#191817] to-[#33312e] text-[#c59b27] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#c59b27] group-hover:text-white transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  {/* Category Tag */}
                  <span className="text-[10px] font-bold tracking-widest text-[#c59b27] uppercase mb-1">
                    {benefit.tag}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-semibold text-[#191817] mb-2 group-hover:text-[#c59b27] transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B6B6B] text-sm leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
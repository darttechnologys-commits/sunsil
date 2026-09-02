// const testimonials = [
//   { name: 'Priya S.', text: 'My skin has never looked better! The vitamin C serum is a game-changer.', rating: '⭐⭐⭐⭐⭐' },
//   { name: 'Amit R.', text: 'Finally found a brand that works for my sensitive skin. Love it!', rating: '⭐⭐⭐⭐⭐' },
//   { name: 'Sneha K.', text: 'The packaging is gorgeous and the products actually deliver results.', rating: '⭐⭐⭐⭐⭐' },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-20 px-4 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
//           What Our Customers Say
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {testimonials.map((t) => (
//             <div key={t.name} className="bg-skin-50 p-6 rounded-2xl">
//               <div className="text-2xl mb-2">{t.rating}</div>
//               <p className="text-gray-700 italic">"{t.text}"</p>
//               <p className="font-semibold mt-3 text-skin-700">— {t.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// const testimonials = [
//   { 
//     name: 'Priya S.', 
//     text: 'My skin has never looked better! The vitamin C serum is a game-changer.', 
//     rating: '⭐⭐⭐⭐⭐',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face'
//   },
//   { 
//     name: 'Amit R.', 
//     text: 'Finally found a brand that works for my sensitive skin. Love it!', 
//     rating: '⭐⭐⭐⭐⭐',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
//   },
//   { 
//     name: 'Sneha K.', 
//     text: 'The packaging is gorgeous and the products actually deliver results.', 
//     rating: '⭐⭐⭐⭐⭐',
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-20 px-4 bg-gradient-to-b from-white to-skin-50">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-serif font-bold text-center relative mb-12">
//           What Our Customers Say
//           <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-skin-400 to-skin-300 rounded-full" />
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {testimonials.map((t, index) => (
//             <div 
//               key={t.name} 
//               className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <img 
//                   src={t.image} 
//                   alt={t.name}
//                   className="w-12 h-12 rounded-full object-cover border-2 border-skin-200"
//                 />
//                 <div>
//                   <p className="font-semibold text-gray-800">{t.name}</p>
//                   <div className="text-sm">{t.rating}</div>
//                 </div>
//               </div>
//               <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// Testimonials.jsx - Complete Improved Version
import React, { useState, useEffect, useRef, useCallback } from 'react';

const testimonials = [
  { 
    id: 1,
    name: 'Priya S.', 
    text: 'My skin has never looked better! The vitamin C serum is a game-changer. I\'ve noticed visible results within just 2 weeks of use.', 
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    location: 'Mumbai, India',
    verified: true,
    date: '2 weeks ago'
  },
  { 
    id: 2,
    name: 'Amit R.', 
    text: 'Finally found a brand that works for my sensitive skin. No irritation, just pure hydration and glow. Absolutely love it!', 
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    location: 'Delhi, India',
    verified: true,
    date: '1 month ago'
  },
  { 
    id: 3,
    name: 'Sneha K.', 
    text: 'The packaging is gorgeous and the products actually deliver results. My friends keep asking about my skincare routine!', 
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    location: 'Bangalore, India',
    verified: true,
    date: '3 weeks ago'
  },
  {
    id: 4,
    name: 'Rahul M.',
    text: 'As someone with oily skin, finding the right products was tough. This range has transformed my skin completely.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    location: 'Pune, India',
    verified: false,
    date: '5 days ago'
  }
];

// Star Rating Component
const StarRating = ({ rating, size = 'sm' }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const starSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i}
          className={`${starSize} ${i < rating ? 'text-[#c59b27]' : 'text-gray-300'}`} 
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ))}
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`testimonial-card ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Quote Icon */}
      <div className="quote-icon" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#c59b27" stroke="none">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
        </svg>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-[#c59b27]/30"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name) + '&background=c59b27&color=fff';
            }}
          />
          {testimonial.verified && (
            <div className="absolute -bottom-1 -right-1 bg-[#2ECC71] rounded-full p-1 border-2 border-white">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
        
        <div>
          <p className="font-semibold text-gray-800 text-lg">{testimonial.name}</p>
          <div className="flex items-center gap-2">
            <StarRating rating={testimonial.rating} size="sm" />
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-400">{testimonial.location}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed text-base italic">
        "{testimonial.text}"
      </p>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-400">{testimonial.date}</span>
        {testimonial.verified && (
          <span className="text-xs text-[#2ECC71] font-medium flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Verified Review
          </span>
        )}
      </div>
    </div>
  );
};

// Main Testimonials Component
const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

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

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.rating >= 4);

  return (
    <section ref={sectionRef} className="testimonials-section" aria-label="Customer testimonials">
      {/* Background Decoration */}
      <div className="bg-decoration">
        <div className="decoration-circle decoration-circle-1" />
        <div className="decoration-circle decoration-circle-2" />
        <div className="decoration-circle decoration-circle-3" />
      </div>

      <div className="container">
        <div className={`header-section ${isVisible ? 'is-visible' : ''}`}>
          <span className="badge">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Real Stories
          </span>
          
          <h2 className="title">
            What Our <span className="highlight">Customers</span> Say
          </h2>
          
          <p className="subtitle">
            Join thousands of happy customers who've transformed their skin with our products
          </p>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Reviews
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'top' ? 'active' : ''}`}
              onClick={() => setActiveFilter('top')}
            >
              ⭐ Top Rated
            </button>
          </div>
        </div>

        <div className="testimonials-grid">
          {filteredTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

    
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 100px 20px;
          background: linear-gradient(180deg, #ffffff 0%, #fcf9f5 100%);
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .testimonials-section {
            padding: 120px 60px;
          }
        }

        .bg-decoration {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.04;
          background: #c59b27;
        }

        .decoration-circle-1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: -100px;
          animation: float 25s ease-in-out infinite;
        }

        .decoration-circle-2 {
          width: 300px;
          height: 300px;
          bottom: -50px;
          left: -50px;
          animation: float 30s ease-in-out infinite reverse;
        }

        .decoration-circle-3 {
          width: 200px;
          height: 200px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float 20s ease-in-out infinite 2s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, -40px); }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .header-section {
          text-align: center;
          margin-bottom: 60px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          background: rgba(197, 155, 39, 0.1);
          border-radius: 20px;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c59b27;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .title {
          font-family: 'Georgia', serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          color: #191817;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .highlight {
          background: linear-gradient(135deg, #c59b27, #a67c1e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: clamp(0.95rem, 1.2vw, 1.1rem);
          color: #6B6B6B;
          max-width: 500px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }

        /* Filter Tabs */
        .filter-tabs {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .filter-tab {
          padding: 8px 24px;
          border: 2px solid #e8e5e2;
          border-radius: 30px;
          background: transparent;
          font-size: 0.8rem;
          font-weight: 500;
          color: #6B6B6B;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-tab:hover {
          border-color: #c59b27;
          color: #191817;
        }

        .filter-tab.active {
          border-color: #c59b27;
          background: #c59b27;
          color: #ffffff;
        }

        /* Testimonials Grid */
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Testimonial Card */
        .testimonial-card {
          background: #ffffff;
          padding: 32px;
          border-radius: 20px;
          border: 1px solid rgba(197, 155, 39, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          position: relative;
        }

        .testimonial-card.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(197, 155, 39, 0.1);
          border-color: rgba(197, 155, 39, 0.2);
        }

        .quote-icon {
          position: absolute;
          top: 20px;
          right: 24px;
          opacity: 0.1;
        }

        /* Stats Banner */
        .stats-banner {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          background: linear-gradient(135deg, #191817, #2a2825);
          border-radius: 20px;
          padding: 40px 20px;
          margin-top: 60px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.3s;
        }

        .stats-banner.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-number {
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 700;
          color: #c59b27;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .stat-divider {
          width: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 640px) {
          .stats-banner {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 30px 20px;
          }
          
          .stat-divider {
            width: 100%;
            height: 1px;
          }

          .testimonial-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
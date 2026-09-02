
// // import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import BestSellers from './components/BestSellers';
// import Benefits from './components/Benefits';
// import Testimonials from './components/Testimonials';
// import Newsletter from './components/Newsletter';
// import Footer from './components/Footer';
// // import FloatingButton from './components/FloatingButton';
// // import ScrollToTop from './components/ScrollToTop';

// function App() {
//   return (
//     <div className="bg-skin-50">
//       {/* <Navbar /> */}
//       <Hero />
//       <BestSellers />
//       <Benefits />
//       <Testimonials />
//       <Newsletter />
//       {/* <Footer /> */}
//       {/* <FloatingButton /> */}
//       {/* <ScrollToTop /> */}
//     </div>
//   );
// }

// export default App;

















// import React, { useState, useEffect } from 'react';
// import { 
//   ShoppingBag, Search, User, Star, ArrowRight, ShieldCheck, 
//   Heart, Menu, X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, 
//   Truck, RefreshCw, Zap, Leaf, Clock, Percent, 
//   CircleCheckBig, MoveRight, Sun, Mail, Phone, CreditCard, Lock 
// } from 'lucide-react';

// export default function App() {
//   const [cartCount, setCartCount] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [wishlist, setWishlist] = useState([]);

//   const heroSlides = [
//     {
//       id: 1,
//       badge: "🌟 NEW LAUNCH",
//       title: "15% Vitamin C Serum",
//       highlight: "For Spot-Free Radiance",
//       desc: "Fades dark spots, prevents sun damage & boosts collagen in just 14 days.",
//       cta: "SHOP VITAMIN C",
//       bgColor: "bg-gradient-to-br from-[#FEEFE6] to-[#FFE4D6]",
//       image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
//       accentColor: "#F05030"
//     },
//     {
//       id: 2,
//       badge: "🏆 BESTSELLER",
//       title: "CoverUp Dewy Sunscreen",
//       highlight: "SPF 50 PA++++",
//       desc: "Zero white cast, ultra-lightweight & enriched with Niacinamide.",
//       cta: "EXPLORE SUNSCREENS",
//       bgColor: "bg-gradient-to-br from-[#FFF4EC] to-[#FFE8DC]",
//       image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800",
//       accentColor: "#E8A87C"
//     },
//     {
//       id: 3,
//       badge: "🎉 SPECIAL OFFER",
//       title: "Buy 2 Get 2 Free",
//       highlight: "Use Code: B2G2",
//       desc: "Mix and match your favorite targeted skincare solutions today.",
//       cta: "BUILD YOUR ROUTINE",
//       bgColor: "bg-gradient-to-br from-[#FDF0E6] to-[#FCE4D4]",
//       image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800",
//       accentColor: "#D4A574"
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [heroSlides.length]);

//   const toggleWishlist = (productId) => {
//     setWishlist(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const concerns = [
//     { 
//       title: "Pigmentation & Spots", 
//       img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=400", 
//       icon: <Sparkles size={20} />,
//       color: "from-purple-100 to-purple-50"
//     },
//     { 
//       title: "Acne & Breakouts", 
//       img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=300", 
//       icon: <Zap size={20} />,
//       color: "from-red-100 to-red-50"
//     },
//     { 
//       title: "Sun Damage & Tan", 
//       img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=300", 
//       icon: <Sun size={20} />,
//       color: "from-yellow-100 to-yellow-50"
//     },
//     { 
//       title: "Dry & Dull Skin", 
//       img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400", 
//       icon: <Leaf size={20} />,
//       color: "from-blue-100 to-blue-50"
//     },
//   ];

//   const products = [
//     {
//       id: 1,
//       name: "15% Vitamin C Serum with Vitamin E",
//       tagline: "Brightens Skin & Fades Dark Spots",
//       price: 595,
//       originalPrice: 699,
//       discount: "15% OFF",
//       rating: "4.9",
//       reviews: "2,410",
//       image1: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400",
//       image2: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=400",
//       badge: "⭐ BESTSELLER",
//       badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
//       brand: "SunSil"
//     },
//     {
//       id: 2,
//       name: "CoverUp Dewy Sunscreen SPF 50",
//       tagline: "No White Cast & Hydrating Formula",
//       price: 445,
//       originalPrice: 495,
//       discount: "10% OFF",
//       rating: "4.8",
//       reviews: "1,850",
//       image1: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=400",
//       image2: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400",
//       badge: "🔥 MUST HAVE",
//       badgeColor: "bg-gradient-to-r from-rose-500 to-pink-500",
//       brand: "SunSil"
//     },
//     {
//       id: 3,
//       name: "Rich Hydrating Ceramide Moisturizer",
//       tagline: "24-Hour Deep Moisture Lock",
//       price: 495,
//       originalPrice: 549,
//       discount: "10% OFF",
//       rating: "4.7",
//       reviews: "920",
//       image1: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=400",
//       image2: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400",
//       badge: "✨ NEW",
//       badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
//       brand: "SunSil"
//     },
//     {
//       id: 4,
//       name: "Acne Control Salicylic Cleanser",
//       tagline: "Unclogs Pores & Prevents Breakouts",
//       price: 345,
//       originalPrice: 399,
//       discount: "13% OFF",
//       rating: "4.8",
//       reviews: "1,200",
//       image1: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=400",
//       image2: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=400",
//       badge: "📈 TRENDING",
//       badgeColor: "bg-gradient-to-r from-violet-500 to-purple-500",
//       brand: "SunSil"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#FCF8F3] text-[#0E1A24] font-sans antialiased selection:bg-[#F05030] selection:text-white overflow-x-hidden">
      
//       {/* 1. TOP ANNOUNCEMENT TICKER */}
//       <div className="relative bg-gradient-to-r from-[#F05030] via-[#E84525] to-[#D84325] text-white text-xs font-bold py-3 px-4 text-center tracking-wider overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgNUwxMCAxMGwxMCAyMCAxMC01IDEwIDE1IDUgMTB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDYiLz48L3N2Zz4=')] opacity-50"></div>
//         <div className="relative flex flex-wrap items-center justify-center gap-2 sm:gap-4">
//           <span className="flex items-center gap-2">
//             <Percent size={14} className="text-white/80" />
//             BUY 2 GET 2 FREE
//           </span>
//           <span className="hidden sm:inline text-white/30">|</span>
//           <span className="flex items-center gap-2">
//             <Zap size={14} className="text-white/80" />
//             USE CODE: 
//             <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-0.5 rounded-full font-black tracking-normal border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
//               B2G2
//             </span>
//           </span>
//           <span className="hidden sm:inline text-white/30">|</span>
//           <span className="flex items-center gap-2">
//             <Clock size={14} className="text-white/80" />
//             Offer Ends Soon!
//           </span>
//         </div>
//       </div>

//       {/* 2. NAVBAR */}
//       <header className="sticky top-0 z-50 bg-[#FCF8F3]/80 backdrop-blur-xl border-b border-[#EFE7DE]/50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
//           <div className="flex items-center gap-6">
//             <button 
//               className="lg:hidden p-2 text-[#0E1A24] hover:text-[#F05030] transition-all hover:scale-110"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
            
//             <a href="#" className="flex items-center gap-1 group">
//               <span className="text-3xl font-black tracking-tighter text-[#F05030] font-serif relative">
//                 SunSil
              
//               </span>
//             </a>
//           </div>

//           <nav className="hidden lg:flex items-center gap-10 font-bold text-xs tracking-widest uppercase text-[#0E1A24]">
//             {['BESTSELLERS', 'SHOP BY CONCERN', 'CATEGORIES', 'BUILD ROUTINE'].map((item) => (
//               <a 
//                 key={item} 
//                 href="#" 
//                 className="relative hover:text-[#F05030] transition-all py-2 group"
//               >
//                 {item}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F05030] group-hover:w-full transition-all duration-300"></span>
//               </a>
//             ))}
//             <a href="#" className="text-[#F05030] font-extrabold flex items-center gap-1 py-2 bg-[#F05030]/10 px-4 rounded-full hover:bg-[#F05030]/20 transition-all">
//               OFFERS <Sparkles size={14} className="animate-pulse" />
//             </a>
//           </nav>

//           <div className="flex items-center gap-3 sm:gap-5">
//             <div className="hidden sm:flex items-center bg-white rounded-full px-4 py-2 border border-[#EFE7DE] w-48 lg:w-64 focus-within:ring-2 focus-within:ring-[#F05030]/30 focus-within:border-[#F05030] transition-all shadow-sm hover:shadow-md">
//               <Search size={16} className="text-gray-400 mr-2 shrink-0" />
//               <input 
//                 type="text" 
//                 placeholder="Search Serum, Sunscreen..." 
//                 className="bg-transparent text-xs outline-none w-full text-[#0E1A24] placeholder-gray-400 font-medium" 
//               />
//             </div>
            
//             <button className="p-2 text-[#0E1A24] hover:text-[#F05030] transition-all hover:scale-110 relative group">
//               <User size={22} />
//               <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#F05030] group-hover:w-full transition-all"></span>
//             </button>

//             <button 
//               className="relative p-2.5 bg-gradient-to-r from-[#F05030] to-[#D84325] text-white rounded-full hover:shadow-lg hover:shadow-[#F05030]/30 transition-all active:scale-95 shadow-md group"
//               onClick={() => setCartCount(cartCount + 1)}
//             >
//               <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-[#0E1A24] text-white text-[10px] font-black h-5 w-5 rounded-full flex items-center justify-center border-2 border-[#FCF8F3] animate-bounce">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="lg:hidden bg-[#FCF8F3] border-b border-[#EFE7DE] px-6 py-6 space-y-4 font-bold text-xs tracking-wider uppercase animate-slideDown">
//             <div className="flex items-center bg-white rounded-full px-4 py-2.5 border border-[#EFE7DE] mb-4 shadow-sm">
//               <Search size={16} className="text-gray-400 mr-2" />
//               <input type="text" placeholder="Search products..." className="bg-transparent text-xs outline-none w-full" />
//             </div>
//             {['BESTSELLERS', 'SHOP BY CONCERN', 'CATEGORIES', 'BUILD ROUTINE'].map((item) => (
//               <a key={item} href="#" className="block text-[#0E1A24] hover:text-[#F05030] hover:translate-x-2 transition-all">{item}</a>
//             ))}
//             <a href="#" className="block text-[#F05030] font-extrabold bg-[#F05030]/10 px-4 py-2 rounded-full text-center">✨ SPECIAL OFFERS</a>
//           </div>
//         )}
//       </header>

//       {/* 3. HERO CAROUSEL */}
//       <section className="relative overflow-hidden border-b border-[#EFE7DE]">
//         <div 
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {heroSlides.map((slide, index) => (
//             <div 
//               key={slide.id} 
//               className={`w-full shrink-0 ${slide.bgColor} py-12 lg:py-20 relative`}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center relative">
                
//                 <div className="space-y-5 text-center md:text-left animate-fadeInUp">
//                   <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm text-[#F05030] border border-[#F05030]/20 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
//                     <ShieldCheck size={15} /> {slide.badge}
//                   </span>

//                   <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#0E1A24] leading-tight font-serif">
//                     {slide.title} <br />
//                     <span className="text-[#F05030] relative">
//                       {slide.highlight}
//                       <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" fill="none">
//                         <path d="M0 4 Q25 0 50 4 Q75 8 100 4" stroke="#F05030" strokeWidth="2" strokeOpacity="0.3"/>
//                       </svg>
//                     </span>
//                   </h1>

//                   <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto md:mx-0 font-medium leading-relaxed">
//                     {slide.desc}
//                   </p>

//                   <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
//                     <button className="px-8 py-4 bg-gradient-to-r from-[#F05030] to-[#D84325] hover:shadow-xl hover:shadow-[#F05030]/30 text-white font-extrabold rounded-xl transition-all uppercase text-xs tracking-widest flex items-center gap-2 group">
//                       {slide.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                     </button>
//                     <button className="px-6 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-[#0E1A24] font-bold rounded-xl transition-all uppercase text-xs tracking-widest border border-[#EFE7DE] flex items-center gap-2">
//                       <Heart size={14} /> Wishlist
//                     </button>
//                   </div>

//                   <div className="flex items-center gap-4 justify-center md:justify-start text-xs text-gray-500">
//                     <span className="flex items-center gap-1"><CircleCheckBig size={14} className="text-green-500" /> Free Shipping</span>
//                     <span className="flex items-center gap-1"><CircleCheckBig size={14} className="text-green-500" /> 7 Days Return</span>
//                   </div>
//                 </div>

//                 <div className="relative flex justify-center">
//                   <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl max-w-md w-full h-[380px] sm:h-[440px] group">
//                     <img 
//                       src={slide.image} 
//                       alt={slide.title} 
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                     <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
//                       <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-[#0E1A24]">
//                         {index + 1}/{heroSlides.length}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>

//         <button 
//           onClick={() => setCurrentSlide(currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1)}
//           className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white text-[#0E1A24] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110"
//         >
//           <ChevronLeft size={20} />
//         </button>
//         <button 
//           onClick={() => setCurrentSlide(currentSlide === heroSlides.length - 1 ? 0 : currentSlide + 1)}
//           className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white text-[#0E1A24] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110"
//         >
//           <ChevronRight size={20} />
//         </button>

//         <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
//           {heroSlides.map((_, idx) => (
//             <button 
//               key={idx}
//               onClick={() => setCurrentSlide(idx)}
//               className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-10 bg-[#F05030] shadow-md shadow-[#F05030]/30' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* 4. SHOP BY CONCERN */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center mb-12">
//           <span className="text-[#F05030] text-xs font-black uppercase tracking-widest bg-[#F05030]/10 px-4 py-1.5 rounded-full inline-block">
//             TARGETED SOLUTIONS
//           </span>
//           <h2 className="text-4xl font-black text-[#0E1A24] font-serif mt-3">Shop By Concern</h2>
//           <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">Find the perfect product for your skin's unique needs</p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {concerns.map((item, index) => (
//             <div key={index} className="group relative rounded-2xl overflow-hidden border border-[#EFE7DE] bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2">
//               <div className={`w-full h-48 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
//                 <img 
//                   src={item.img} 
//                   alt={item.title} 
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = `https://via.placeholder.com/400x300/FEEFE6/333333?text=${item.title.replace(' & ', '+')}`;
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   {item.icon}
//                 </div>
//               </div>
//               <div className="p-4 text-center">
//                 <h3 className="font-extrabold text-sm text-[#0E1A24] group-hover:text-[#F05030] transition-colors">{item.title}</h3>
//                 <span className="text-[#F05030] font-bold text-xs flex items-center justify-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
//                   Shop Now <MoveRight size={14} />
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 5. BESTSELLERS PRODUCT GRID */}
//       <section className="bg-gradient-to-b from-[#FEEFE6]/40 to-[#FCF8F3] py-16 border-y border-[#EFE7DE]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="flex justify-between items-end mb-12">
//             <div>
//               <span className="text-[#F05030] text-xs font-black uppercase tracking-widest bg-[#F05030]/10 px-4 py-1.5 rounded-full inline-block">
//                 FORMULATED FOR RESULTS
//               </span>
//               <h2 className="text-4xl font-black text-[#0E1A24] font-serif mt-2">Our Bestsellers</h2>
//               <p className="text-gray-500 text-sm mt-1">Trusted by thousands for visible results</p>
//             </div>
//             <a href="#" className="hidden sm:flex items-center gap-2 font-extrabold text-xs text-[#F05030] hover:gap-3 transition-all uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md">
//               VIEW ALL <ArrowRight size={14} />
//             </a>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {products.map((product) => (
//               <div 
//                 key={product.id} 
//                 className="bg-white rounded-2xl border border-[#EFE7DE] p-5 flex flex-col hover:shadow-2xl transition-all duration-500 group relative hover:-translate-y-2"
//                 onMouseEnter={() => setHoveredProduct(product.id)}
//                 onMouseLeave={() => setHoveredProduct(null)}
//               >
//                 <div className="flex justify-between items-center absolute top-4 left-4 right-4 z-10">
//                   <span className={`${product.badgeColor} text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg`}>
//                     {product.badge}
//                   </span>
//                   <span className="bg-[#F05030] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
//                     {product.discount}
//                   </span>
//                 </div>

//                 <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#FEEFE6] to-[#F5E6DC] mb-4 h-64 w-full cursor-pointer">
//                   <img 
//                     src={product.image1} 
//                     alt={product.name} 
//                     className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500 absolute inset-0"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = `https://via.placeholder.com/400x400/FEEFE6/333333?text=${product.name.substring(0, 20)}`;
//                     }}
//                   />
//                   <img 
//                     src={product.image2} 
//                     alt={`${product.name} hover`} 
//                     className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = `https://via.placeholder.com/400x400/FEEFE6/333333?text=${product.name.substring(0, 20)}`;
//                     }}
//                   />
                  
//                   <button 
//                     onClick={() => toggleWishlist(product.id)}
//                     className="absolute bottom-3 right-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md transition-all hover:scale-110 z-10"
//                   >
//                     <Heart 
//                       size={16} 
//                       className={wishlist.includes(product.id) ? 'fill-[#F05030] text-[#F05030]' : 'text-gray-400 hover:text-[#F05030]'} 
//                     />
//                   </button>

//                   {hoveredProduct === product.id && (
//                     <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity">
//                       <button className="px-6 py-3 bg-white/90 backdrop-blur-sm text-[#0E1A24] font-bold rounded-full text-xs uppercase tracking-wider shadow-lg hover:bg-white transition-all">
//                         Quick View
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 <div>
//                   <div className="flex items-center gap-1 text-xs font-bold mb-1.5">
//                     <Star size={14} className="fill-[#FFC83B] text-[#FFC83B]" />
//                     <span className="text-[#0E1A24] font-black">{product.rating}</span>
//                     <span className="text-gray-400 font-normal text-[11px]">({product.reviews})</span>
//                     <span className="ml-auto text-[10px] text-green-600 font-bold flex items-center gap-1">
//                       <CircleCheckBig size={12} /> Verified
//                     </span>
//                   </div>

//                   <h3 className="font-extrabold text-[#0E1A24] text-sm leading-snug line-clamp-1 group-hover:text-[#F05030] transition-colors">
//                     {product.name}
//                   </h3>
//                   <p className="text-xs text-gray-500 mt-1 line-clamp-1">{product.tagline}</p>
//                   <p className="text-[10px] text-gray-400 mt-0.5">{product.brand}</p>
//                 </div>

//                 <div className="mt-4 pt-3 border-t border-[#EFE7DE] flex items-center justify-between">
//                   <div>
//                     <span className="text-xl font-black text-[#0E1A24]">₹{product.price}</span>
//                     <span className="text-xs text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
//                     <span className="block text-[9px] text-green-600 font-bold">Save ₹{product.originalPrice - product.price}</span>
//                   </div>

//                   <button 
//                     onClick={() => setCartCount(cartCount + 1)}
//                     className="px-4 py-2.5 bg-gradient-to-r from-[#F05030] to-[#D84325] hover:shadow-lg hover:shadow-[#F05030]/30 text-white text-xs font-black rounded-lg transition-all uppercase tracking-wider hover:scale-105"
//                   >
//                     ADD TO CART
//                   </button>
//                 </div>

//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* 6. TRUST BADGES */}
//       <section className="bg-white py-16 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIxIiBmaWxsPSIjZTBkY2Q2IiBmaWxsLW9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')] opacity-30"></div>
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
//           {[
//             { icon: <ShieldCheck size={36} />, title: "Dermatologist Tested", desc: "100% Safe For Indian Skin" },
//             { icon: <Leaf size={36} />, title: "Clean & Cruelty Free", desc: "No Toxin & Paraben Free" },
//             { icon: <Truck size={36} />, title: "Free Express Shipping", desc: "On All Orders Above ₹499" },
//             { icon: <RefreshCw size={36} />, title: "Easy Returns", desc: "Hassle-Free 7 Days Policy" },
//           ].map((item, index) => (
//             <div key={index} className="flex flex-col items-center group hover:scale-105 transition-all duration-300">
//               <div className="p-4 bg-[#F05030]/10 rounded-full text-[#F05030] group-hover:bg-[#F05030] group-hover:text-white transition-all duration-300">
//                 {item.icon}
//               </div>
//               <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#0E1A24] mt-3">{item.title}</h4>
//               <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 7. FOOTER - Fixed with correct icon names */}
//       <footer className="bg-gradient-to-b from-[#0E1A24] to-[#1a2a38] text-gray-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
//           {/* Main Footer Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-700/50">
            
//             {/* Brand Column */}
//             <div className="space-y-4">
//               <p className="font-serif text-3xl font-black text-[#F05030] lowercase tracking-tight">SunSil</p>
//               <p className="text-sm text-gray-400 max-w-xs">Skincare that works. Formulated with love for every skin type.</p>
//               <div className="flex gap-4 pt-2">
//                 <a href="#" className="p-2.5 bg-white/5 hover:bg-[#F05030]/20 rounded-full transition-all hover:scale-110">
//                   <span className="text-gray-400 hover:text-[#F05030] transition-colors text-sm font-bold">IG</span>
//                 </a>
//                 <a href="#" className="p-2.5 bg-white/5 hover:bg-[#F05030]/20 rounded-full transition-all hover:scale-110">
//                   <span className="text-gray-400 hover:text-[#F05030] transition-colors text-sm font-bold">YT</span>
//                 </a>
//                 <a href="#" className="p-2.5 bg-white/5 hover:bg-[#F05030]/20 rounded-full transition-all hover:scale-110">
//                   <span className="text-gray-400 hover:text-[#F05030] transition-colors text-sm font-bold">FB</span>
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4">Quick Links</h4>
//               <ul className="space-y-2.5 text-sm">
//                 <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">About Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Our Story</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Careers</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Blog</a></li>
//               </ul>
//             </div>

//             {/* Customer Service */}
//             <div>
//               <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4">Customer Service</h4>
//               <ul className="space-y-2.5 text-sm">
//                 <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Contact Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">FAQs</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Returns Policy</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Shipping Info</a></li>
//               </ul>
//             </div>

//             {/* Contact & Newsletter */}
//             <div>
//               <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4">Stay Connected</h4>
//               <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
//                 <Mail size={16} className="text-[#F05030]" />
//                 <span>hello@SunSil.com</span>
//               </div>
//               <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
//                 <Phone size={16} className="text-[#F05030]" />
//                 <span>+91 1800-123-4567</span>
//               </div>
//               <div className="flex mt-2">
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email" 
//                   className="flex-1 px-4 py-2.5 bg-white/5 border border-slate-700 rounded-l-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F05030] transition-colors"
//                 />
//                 <button className="px-4 py-2.5 bg-gradient-to-r from-[#F05030] to-[#D84325] text-white font-bold text-xs rounded-r-lg hover:shadow-lg hover:shadow-[#F05030]/30 transition-all">
//                   Subscribe
//                 </button>
//               </div>
//             </div>

//           </div>

//           {/* Bottom Footer */}
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-gray-500">
//             <div className="flex flex-wrap gap-6 justify-center">
//               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
//               <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="flex items-center gap-1">
//                 <CreditCard size={14} className="text-gray-400" />
//                 <span className="text-gray-400">Secure Payment</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Lock size={14} className="text-gray-400" />
//                 <span className="text-gray-400">SSL Encrypted</span>
//               </div>
//             </div>
//             <p className="text-center">© 2026 SunSil Official. All rights reserved.</p>
//           </div>

//         </div>
//       </footer>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slideDown {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-3px); }
//         }
//         .animate-fadeInUp {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }
//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out forwards;
//         }
//         .animate-bounce {
//           animation: bounce 1s infinite;
//         }
//       `}</style>
//     </div>
//   );
// }















import React, { useState, useEffect } from 'react';
// import { 
//   ShoppingBag, Search, User, Star, ArrowRight, ShieldCheck, 
//   Heart, Menu, X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, 
//   Truck, RefreshCw, Zap, Leaf, Clock, Percent, 
//   CircleCheckBig, MoveRight, Sun, Mail, Phone, Lock,
//   ChevronDown, Facebook, Instagram,
//   Youtube, Linkedin
// } from 'lucide-react';

import { 
  ShoppingBag, Search, User, Star, ArrowRight, ShieldCheck, 
  Heart, Menu, X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, 
  Truck, RefreshCw, Zap, Leaf, Clock, Percent, 
  CircleCheckBig, MoveRight, Sun, Mail, Phone, CreditCard, Lock,
  ChevronDown
} from 'lucide-react';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

// ============================================================
// DATA CONFIGURATION
// ============================================================

const BRAND = {
  name: "SunSil",
  tagline: "Skincare That Adapts",
  email: "hello@SunSil.com",
  phone: "+91 1800-123-4567",
  currency: "₹",
  freeShippingThreshold: 599,
  copyrightYear: new Date().getFullYear()
};

const NAVIGATION = {
  shop: {
    label: "SHOP",
    items: [
      { label: "SHOP ALL", href: "/shop" },
      { label: "CLEANSER", href: "/shop/cleanser", product: true },
      { label: "SERUM", href: "/shop/serum", product: true, hero: true },
      { label: "MOISTURIZER", href: "/shop/moisturizer", product: true },
      { label: "SUNSCREEN", href: "/shop/sunscreen", product: true },
      { label: "ROUTINES & BUNDLES", href: "/shop/routines-bundles" }
    ]
  },
  routineSystem: {
    label: "THE ROUTINE SYSTEM",
    items: [
      { label: "System Overview", href: "/routine-system" },
      { label: "01. RESET", href: "/routine-system/reset", step: 1, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=200&h=200" },
      { label: "02. DEFEND", href: "/routine-system/defend", step: 2, hero: true, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200&h=200" },
      { label: "03. ADAPT", href: "/routine-system/adapt", step: 3, image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=200&h=200" },
      { label: "04. PROTECT", href: "/routine-system/protect", step: 4, image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=200&h=200" },
      { label: "Complete Routine", href: "/routine-system/complete", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=200&h=200" }
    ]
  },
  aboutUs: {
    label: "ABOUT US",
    items: [
      { label: "WHY WE EXIST", href: "/about/why-we-exist" },
      { label: "OUR STORY", href: "/about/our-story" },
      { label: "FOUNDER'S NOTE", href: "/about/founders-note", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200" }
    ]
  },
  journal: {
    label: "JOURNAL",
    items: [
      { label: "SKIN SCHOOL", href: "/journal/skin-school" },
      { label: "CLIMATE & SKIN", href: "/journal/climate-skin" },
      { label: "ROUTINE GUIDE", href: "/journal/routine-guide" },
      { label: "ALL ARTICLES", href: "/journal/all-articles" }
    ]
  },
  results: {
    label: "RESULTS",
    href: "/results",
    enabled: false,
    items: [
      { label: "Customer Results", href: "/results/customers" },
      { label: "Results by Product", href: "/results/by-product" },
      { label: "Results by Concern", href: "/results/by-concern" },
      { label: "Reviews & Experiences", href: "/results/reviews" }
    ]
  }
};

// SKIN QUIZ QUESTIONS
const QUIZ_QUESTIONS = [
  {
    id: "skin-feel",
    question: "How does your skin typically feel after cleansing?",
    options: [
      { value: "tight", label: "Tight and dry" },
      { value: "balanced", label: "Balanced and comfortable" },
      { value: "oily", label: "Oily or greasy" }
    ]
  },
  {
    id: "priority",
    question: "What matters most to you in a skincare routine?",
    options: [
      { value: "protection", label: "Protecting my skin" },
      { value: "simplicity", label: "Keeping it simple" },
      { value: "results", label: "Visible results" }
    ]
  },
  {
    id: "environment",
    question: "What's your daily environment like?",
    options: [
      { value: "city", label: "City living with pollution" },
      { value: "humid", label: "Hot and humid climate" },
      { value: "dry", label: "Dry or air-conditioned spaces" },
      { value: "varied", label: "A mix of conditions" }
    ]
  },
  {
    id: "routine",
    question: "How consistent is your current routine?",
    options: [
      { value: "none", label: "I don't have a routine" },
      { value: "basic", label: "I do the basics sometimes" },
      { value: "consistent", label: "I'm fairly consistent" }
    ]
  },
  {
    id: "preference",
    question: "What's your approach to skincare?",
    options: [
      { value: "routine", label: "I want a complete routine" },
      { value: "targeted", label: "I prefer targeted products" }
    ]
  },
  {
    id: "timing",
    question: "When do you typically do your skincare?",
    options: [
      { value: "am", label: "Mostly in the morning" },
      { value: "pm", label: "Mostly at night" },
      { value: "both", label: "Both AM and PM" }
    ]
  }
];

// JOURNAL ARTICLES DATA
const JOURNAL_ARTICLES = {
  skinSchool: {
    title: "Skin School",
    description: "Learn the science behind healthy, resilient skin",
    featured: {
      title: "The Barrier-First Philosophy",
      description: "Why protecting your skin's natural barrier is the foundation of healthy skin.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800&h=400",
      href: "/journal/skin-school/barrier-first"
    },
    articles: [
      { title: "Understand Your Skin Type", description: "Learn how to identify your skin's unique needs.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/skin-school/understand-skin" },
      { title: "What's Your Skin's Real Age?", description: "The factors that affect skin aging — and what you can do about them.", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/skin-school/skin-age" },
      { title: "Why pH Balance Matters", description: "How pH affects your skin's health and comfort.", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/skin-school/ph-balance" },
      { title: "Is Your Skin Dehydrated?", description: "The difference between dry and dehydrated skin.", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/skin-school/dehydrated" },
      { title: "Build Your Routine", description: "Create a routine that works for your lifestyle.", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/skin-school/build-routine" },
      { title: "The 4-Step Routine Made Simple", description: "Everything you need for healthy skin in just 4 steps.", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/skin-school/4-step-routine" },
      { title: "Skincare for Sensitive Skin", description: "Gentle approaches for easily irritated skin.", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/skin-school/sensitive-skin" },
      { title: "The Ultimate Guide to Sunscreen", description: "Everything you need to know about SPF, explained simply.", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/skin-school/sunscreen-guide" },
      { title: "Common Skincare Mistakes", description: "Simple fixes for better skin health.", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/skin-school/skincare-mistakes" },
      { title: "Why Cleansing Comfort Matters", description: "The right cleanser makes all the difference.", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/skin-school/cleansing-comfort" },
      { title: "How to Read a Skincare Label", description: "Understanding ingredient lists without becoming a chemist.", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/skin-school/read-labels" },
      { title: "Why Trendy Skincare Isn't Always Better", description: "The case for simple, proven ingredients.", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/skin-school/trendy-skin" },
      { title: "The Truth About Skin Cycling", description: "What works and what doesn't.", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/skin-school/skin-cycling" }
    ],
    myths: [
      { title: "Myth: Oily Skin Doesn't Need Moisturizer", fact: "Even oily skin needs hydration to stay balanced." },
      { title: "Myth: Natural Ingredients Are Always Better", fact: "Some natural ingredients can irritate. Science-led formulations are often more effective." },
      { title: "Myth: You Only Need Sunscreen at the Beach", fact: "UV exposure happens daily, even through windows." },
      { title: "Myth: More Products = Better Results", fact: "A simple, consistent routine often works better than a complex one." },
      { title: "Myth: You Don't Need Cleanser in the Morning", fact: "Morning cleansing removes overnight buildup and preps skin for the day." }
    ],
    closingCta: {
      title: "Ready to Build Your Perfect Routine?",
      description: "Take the Skin Quiz and get personalized recommendations.",
      cta: "TAKE THE SKIN QUIZ",
      href: "/quiz"
    }
  },
  climateSkin: {
    title: "Climate & Skin",
    description: "How your environment affects your skin — and what to do about it",
    featured: {
      title: "Adapting Your Skincare to Every Climate",
      description: "Your skin needs change with the environment. Here's how to adapt.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800&h=400",
      href: "/journal/climate-skin/adapting"
    },
    articles: [
      { title: "Skincare in Heat", description: "How high temperatures affect your skin and what to use.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/climate-skin/heat" },
      { title: "Surviving Humidity", description: "Keep your skin comfortable even in the most humid conditions.", image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/climate-skin/humidity" },
      { title: "Protecting Skin from Pollution", description: "How to defend your skin from urban environmental stress.", image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/climate-skin/pollution" },
      { title: "UV Exposure and Your Skin", description: "Understanding UV damage and how sunscreen helps.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/climate-skin/uv-exposure" },
      { title: "Skincare in Air Conditioning", description: "How artificial climates affect your skin's moisture levels.", image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/climate-skin/ac" },
      { title: "Managing Changing Conditions", description: "How to adapt your routine when the weather changes.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/climate-skin/changing" },
      { title: "The Urban Commute", description: "Skincare tips for city commuters and travelers.", image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/climate-skin/urban" }
    ],
    closingCta: {
      title: "Find Your Perfect Climate-Adapted Routine",
      description: "Discover products that work with your environment, not against it.",
      cta: "EXPLORE THE ROUTINE SYSTEM",
      href: "/routine-system"
    }
  },
  routineGuide: {
    title: "Routine Guide",
    description: "Build a skincare routine that fits your life",
    featured: {
      title: "Your First Skincare Routine",
      description: "A simple guide to starting your skincare journey.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800&h=400",
      href: "/journal/routine-guide/first-routine"
    },
    articles: [
      { title: "Beginner's Routine", description: "Everything you need to start your skincare journey.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/routine-guide/beginner" },
      { title: "AM Routine", description: "Morning skincare made simple.", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/routine-guide/am-routine" },
      { title: "PM Routine", description: "Your evening ritual for healthy skin.", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/routine-guide/pm-routine" },
      { title: "How to Layer", description: "The right order for applying skincare products.", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/routine-guide/layering" },
      { title: "How Much Do I Need?", description: "Product quantities for maximum effect.", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=400&h=300", href: "/journal/routine-guide/how-much" }
    ],
    closingCta: {
      title: "Ready to Start Your Routine?",
      description: "Take the Skin Quiz and get a routine tailored to your needs.",
      cta: "TAKE THE SKIN QUIZ",
      href: "/quiz"
    }
  }
};

// PRODUCT DATA (expanded)
const PRODUCTS = [
  {
    id: 1,
    name: "15% Vitamin C Serum with Vitamin E",
    tagline: "Brightens Skin & Fades Dark Spots",
    price: 595,
    originalPrice: 699,
    discount: "15% OFF",
    rating: 4.9,
    reviews: 2410,
    image1: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400",
    image2: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=400",
    badge: "⭐ BESTSELLER",
    badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    brand: BRAND.name,
    category: "serum",
    routineStep: 2,
    inStock: true
  },
  {
    id: 2,
    name: "CoverUp Dewy Sunscreen SPF 50",
    tagline: "No White Cast & Hydrating Formula",
    price: 445,
    originalPrice: 495,
    discount: "10% OFF",
    rating: 4.8,
    reviews: 1850,
    image1: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=400",
    image2: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400",
    badge: "🔥 MUST HAVE",
    badgeColor: "bg-gradient-to-r from-rose-500 to-pink-500",
    brand: BRAND.name,
    category: "sunscreen",
    routineStep: 4,
    inStock: true
  },
  {
    id: 3,
    name: "Rich Hydrating Ceramide Moisturizer",
    tagline: "24-Hour Deep Moisture Lock",
    price: 495,
    originalPrice: 549,
    discount: "10% OFF",
    rating: 4.7,
    reviews: 920,
    image1: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=400",
    image2: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400",
    badge: "✨ NEW",
    badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
    brand: BRAND.name,
    category: "moisturizer",
    routineStep: 3,
    inStock: true
  },
  {
    id: 4,
    name: "Acne Control Salicylic Cleanser",
    tagline: "Unclogs Pores & Prevents Breakouts",
    price: 345,
    originalPrice: 399,
    discount: "13% OFF",
    rating: 4.8,
    reviews: 1200,
    image1: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=400",
    image2: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=400",
    badge: "📈 TRENDING",
    badgeColor: "bg-gradient-to-r from-violet-500 to-purple-500",
    brand: BRAND.name,
    category: "cleanser",
    routineStep: 1,
    inStock: true
  }
];

const CONCERNS = [
  { 
    title: "Pigmentation & Spots", 
    img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=400", 
    icon: <Sparkles size={20} />,
    color: "from-purple-100 to-purple-50"
  },
  { 
    title: "Acne & Breakouts", 
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=300", 
    icon: <Zap size={20} />,
    color: "from-red-100 to-red-50"
  },
  { 
    title: "Sun Damage & Tan", 
    img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=300", 
    icon: <Sun size={20} />,
    color: "from-yellow-100 to-yellow-50"
  },
  { 
    title: "Dry & Dull Skin", 
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400", 
    icon: <Leaf size={20} />,
    color: "from-blue-100 to-blue-50"
  }
];

const HERO_SLIDES = [
  {
    id: 1,
    badge: "🌟 NEW LAUNCH",
    title: "15% Vitamin C Serum",
    highlight: "For Spot-Free Radiance",
    desc: "Fades dark spots, prevents sun damage & boosts collagen in just 14 days.",
    cta: "SHOP VITAMIN C",
    bgColor: "bg-gradient-to-br from-[#FEEFE6] to-[#FFE4D6]",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    accentColor: "#F05030"
  },
  {
    id: 2,
    badge: "🏆 BESTSELLER",
    title: "CoverUp Dewy Sunscreen",
    highlight: "SPF 50 PA++++",
    desc: "Zero white cast, ultra-lightweight & enriched with Niacinamide.",
    cta: "EXPLORE SUNSCREENS",
    bgColor: "bg-gradient-to-br from-[#FFF4EC] to-[#FFE8DC]",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800",
    accentColor: "#E8A87C"
  },
  {
    id: 3,
    badge: "🎉 SPECIAL OFFER",
    title: "Buy 2 Get 2 Free",
    highlight: "Use Code: B2G2",
    desc: "Mix and match your favorite targeted skincare solutions today.",
    cta: "BUILD YOUR ROUTINE",
    bgColor: "bg-gradient-to-br from-[#FDF0E6] to-[#FCE4D4]",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800",
    accentColor: "#D4A574"
  }
];

const TRUST_BADGES = [
  { icon: <ShieldCheck size={36} />, title: "Dermatologist Tested", desc: "100% Safe For Indian Skin" },
  { icon: <Leaf size={36} />, title: "Clean & Cruelty Free", desc: "No Toxin & Paraben Free" },
  { icon: <Truck size={36} />, title: "Free Express Shipping", desc: `On All Orders Above ${BRAND.currency}${BRAND.freeShippingThreshold}` },
  { icon: <RefreshCw size={36} />, title: "Easy Returns", desc: "Hassle-Free 7 Days Policy" }
];

const FOOTER_QUICK_LINKS = [
  "Blogs",
  "Our Ingredients",
  "FAQs",
  "Track Your Order"
];

const FOOTER_POLICY_LINKS = [
  "Shipping & Returns Policy",
  "Privacy Policy",
  "Terms and Conditions"
];

// const SOCIAL_LINKS = [
//   { icon: <InstagramIcon size={20} />, href: "https://instagram.com", label: "Instagram" },
//   { icon: <FacebookIcon size={20} />, href: "https://facebook.com", label: "Facebook" },
//   { icon: <LinkedinIcon size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
//   { icon: <YoutubeIcon size={20} />, href: "https://youtube.com", label: "YouTube" }
// ];

// const PAYMENT_ICONS = [
//   "https://via.placeholder.com/40x28/EEEEEE/999999?text=Visa",
//   "https://via.placeholder.com/40x28/EEEEEE/999999?text=MC",
//   "https://via.placeholder.com/40x28/EEEEEE/999999?text=UPI",
//   "https://via.placeholder.com/40x28/EEEEEE/999999?text=GPay"
// ];


const SOCIAL_LINKS = [
  { icon: <FaInstagram size={20} />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FaFacebook size={20} />, href: "https://facebook.com", label: "Facebook" },
  { icon: <FaLinkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaYoutube size={20} />, href: "https://youtube.com", label: "YouTube" }
];

const PAYMENT_ICONS = [
  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visa.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mastercard.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlepay.svg"
];
// ============================================================
// MAIN APP COMPONENT
// ============================================================

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  // Hero carousel auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Cart functions
  const addToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (productId) => {
    const item = cartItems.find(i => i.id === productId);
    if (item.quantity > 1) {
      setCartItems(cartItems.map(i => 
        i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
      ));
    } else {
      setCartItems(cartItems.filter(i => i.id !== productId));
    }
    setCartCount(cartCount - 1);
  };

  const getCartTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Quiz functions
  const startQuiz = () => {
    setQuizStarted(true);
    setQuizStep(0);
    setQuizAnswers({});
    setQuizResult(null);
  };

  const handleQuizAnswer = (questionId, value) => {
    setQuizAnswers({ ...quizAnswers, [questionId]: value });
    if (quizStep < QUIZ_QUESTIONS.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      generateQuizResult();
    }
  };

  const generateQuizResult = () => {
    // Simple result generation logic
    const hasRoutine = quizAnswers.routine === "consistent" || quizAnswers.routine === "basic";
    const prefersComplete = quizAnswers.preference === "routine";
    const timing = quizAnswers.timing || "both";
    
    setQuizResult({
      intro: "Based on your responses, we've found the perfect routine for you.",
      recommendedProducts: PRODUCTS.map(p => ({
        ...p,
        role: p.routineStep === 1 ? "Reset & Refresh" :
              p.routineStep === 2 ? "Defend & Brighten" :
              p.routineStep === 3 ? "Adapt & Hydrate" :
              "Protect & Shield"
      })),
      whyThisRoutine: `We've selected products that match your ${quizAnswers.priority === "simplicity" ? "simple, effective" : "results-driven"} approach to skincare.`,
      primaryCta: "SHOP YOUR ROUTINE",
      secondaryCta: "LEARN ABOUT THE ROUTINE SYSTEM"
    });
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizStep(0);
    setQuizAnswers({});
    setQuizResult(null);
  };

  // Search function
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 1) {
      const productResults = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tagline.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      const articleResults = Object.values(JOURNAL_ARTICLES).flatMap(section => 
        section.articles?.filter(a => 
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.description.toLowerCase().includes(query.toLowerCase())
        ).map(a => ({ ...a, type: "article" })) || []
      );
      setSearchResults([...productResults.map(p => ({ ...p, type: "product" })), ...articleResults]);
    } else {
      setSearchResults([]);
    }
  };

  // Navigation dropdown components
  const NavDropdown = ({ label, items, isOpen, onToggle }) => {
    return (
      <div className="relative" onMouseEnter={() => onToggle(label)} onMouseLeave={() => onToggle(null)}>
        <button 
          className="flex items-center gap-1 hover:text-[#F05030] transition-all py-2 group font-bold text-xs tracking-widest uppercase"
        >
          {label}
          <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-[#EFE7DE] min-w-[240px] p-3 z-50">
            {items.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href} 
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-[#FEEFE6] transition-all text-sm font-medium text-[#0E1A24] ${item.hero ? 'bg-[#FEEFE6] border-l-4 border-[#F05030]' : ''}`}
              >
                {item.image && (
                  <img src={item.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                )}
                {item.step && (
                  <span className="text-[#F05030] font-black text-xs w-6">{String(item.step).padStart(2, '0')}</span>
                )}
                <span>{item.label}</span>
                {item.hero && <Sparkles size={12} className="text-[#F05030]" />}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Render quiz
  const renderQuiz = () => {
    if (!quizStarted) {
      return null;
    }

    if (quizResult) {
      return (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl animate-fadeInUp">
            <button onClick={resetQuiz} className="float-right p-2 hover:bg-gray-100 rounded-full transition-all">
              <X size={20} />
            </button>
            
            <div className="text-center mb-8">
              <span className="text-[#F05030] text-xs font-black uppercase tracking-widest bg-[#F05030]/10 px-4 py-1.5 rounded-full inline-block">
                YOUR PERSONALIZED ROUTINE
              </span>
              <h2 className="text-3xl font-black text-[#0E1A24] font-serif mt-3">{quizResult.intro}</h2>
            </div>

            <div className="space-y-4 mb-8">
              {quizResult.recommendedProducts.map(product => (
                <div key={product.id} className="flex items-center gap-4 p-4 bg-[#FCF8F3] rounded-xl border border-[#EFE7DE]">
                  <img src={product.image1} alt={product.name} className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-[#F05030] bg-[#F05030]/10 px-2 py-0.5 rounded-full">{product.role}</span>
                    </div>
                    <h4 className="font-bold text-sm">{product.name}</h4>
                    <p className="text-xs text-gray-500">{product.tagline}</p>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-gradient-to-r from-[#F05030] to-[#D84325] text-white text-xs font-black rounded-lg hover:shadow-lg transition-all"
                  >
                    ADD TO CART
                  </button>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 mb-6 text-center">{quizResult.whyThisRoutine}</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => window.location.href = '/shop'}
                className="px-8 py-4 bg-gradient-to-r from-[#F05030] to-[#D84325] text-white font-extrabold rounded-xl uppercase text-xs tracking-widest hover:shadow-xl transition-all"
              >
                {quizResult.primaryCta}
              </button>
              <button 
                onClick={() => window.location.href = '/routine-system'}
                className="px-8 py-4 bg-white border-2 border-[#F05030] text-[#F05030] font-extrabold rounded-xl uppercase text-xs tracking-widest hover:bg-[#F05030] hover:text-white transition-all"
              >
                {quizResult.secondaryCta}
              </button>
            </div>

            <button 
              onClick={resetQuiz}
              className="block mx-auto mt-6 text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      );
    }

    const currentQuestion = QUIZ_QUESTIONS[quizStep];
    const progress = ((quizStep) / QUIZ_QUESTIONS.length) * 100;

    return (
      <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl animate-fadeInUp">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-bold text-gray-400">Question {quizStep + 1} of {QUIZ_QUESTIONS.length}</span>
            <button onClick={resetQuiz} className="p-2 hover:bg-gray-100 rounded-full transition-all">
              <X size={20} />
            </button>
          </div>
          
          <div className="w-full h-1.5 bg-gray-100 rounded-full mb-6 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#F05030] to-[#D84325] rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>

          <h3 className="text-xl font-black text-[#0E1A24] mb-6">{currentQuestion.question}</h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleQuizAnswer(currentQuestion.id, option.value)}
                className="w-full text-left px-6 py-4 rounded-xl border-2 border-[#EFE7DE] hover:border-[#F05030] hover:bg-[#FEEFE6] transition-all font-medium text-[#0E1A24] flex items-center gap-3"
              >
                <span className="w-4 h-4 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-[#F05030]">
                  <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#F05030]"></span>
                </span>
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Render cart drawer
  const renderCart = () => {
    if (!cartOpen) return null;

    const total = getCartTotal();
    const freeShippingRemaining = BRAND.freeShippingThreshold - total;

    return (
      <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex justify-end">
        <div className="bg-white w-full max-w-md h-full p-6 overflow-y-auto animate-slideDown">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-black text-[#0E1A24] font-serif">Your Cart</h2>
            <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-all">
              <X size={24} />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <button 
                onClick={() => setCartOpen(false)}
                className="mt-4 text-[#F05030] font-bold hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 items-center p-3 bg-[#FCF8F3] rounded-xl border border-[#EFE7DE]">
                    <img src={item.image1} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.tagline}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-gray-400 hover:text-[#F05030]"
                        >
                          −
                        </button>
                        <span className="text-sm font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => addToCart(item)}
                          className="text-xs text-gray-400 hover:text-[#F05030]"
                        >
                          +
                        </button>
                        <span className="text-sm font-black ml-2">{BRAND.currency}{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {total < BRAND.freeShippingThreshold ? (
                <div className="bg-[#FEEFE6] p-3 rounded-xl text-sm mb-4">
                  <p className="text-[#0E1A24] font-medium">
                    Add <span className="font-black">{BRAND.currency}{freeShippingRemaining}</span> more to unlock 
                    <span className="font-black text-[#F05030]"> FREE SHIPPING</span>
                  </p>
                  <div className="w-full h-1.5 bg-[#EFE7DE] rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#F05030] to-[#D84325] rounded-full transition-all" 
                         style={{ width: `${(total / BRAND.freeShippingThreshold) * 100}%` }}></div>
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 p-3 rounded-xl text-sm mb-4 text-green-700 font-bold flex items-center gap-2">
                  <CheckCircle2 size={16} /> You've unlocked FREE SHIPPING!
                </div>
              )}

              <div className="border-t border-[#EFE7DE] pt-4">
                <div className="flex justify-between text-lg font-black">
                  <span>Subtotal</span>
                  <span>{BRAND.currency}{total}</span>
                </div>
                <button 
                  onClick={() => window.location.href = '/checkout'}
                  className="w-full mt-4 py-4 bg-gradient-to-r from-[#F05030] to-[#D84325] text-white font-extrabold rounded-xl uppercase text-sm tracking-widest hover:shadow-xl transition-all"
                >
                  Proceed to Checkout
                </button>
                <button 
                  onClick={() => setCartOpen(false)}
                  className="block mx-auto mt-3 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  // Render search
  const renderSearch = () => {
    if (!searchOpen) return null;

    return (
      <div className="fixed inset-0 z-[100] bg-white p-4 md:p-8 animate-slideDown">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => setSearchOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
              <X size={24} />
            </button>
            <div className="flex-1 flex items-center bg-[#FCF8F3] rounded-full px-6 py-3 border-2 border-[#EFE7DE] focus-within:border-[#F05030] transition-all">
              <Search size={20} className="text-gray-400 mr-3" />
              <input 
                type="text" 
                placeholder="Search products, ingredients, articles..." 
                className="bg-transparent outline-none w-full text-[#0E1A24] font-medium"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus
              />
            </div>
          </div>

          <div className="space-y-2">
            {searchResults.length > 0 ? (
              searchResults.map((result, idx) => (
                <a 
                  key={idx} 
                  href={result.href || `/shop/${result.id}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#FCF8F3] transition-all border border-transparent hover:border-[#EFE7DE]"
                >
                  {result.image && <img src={result.image} alt="" className="w-12 h-12 rounded-lg object-cover" />}
                  {result.image1 && <img src={result.image1} alt="" className="w-12 h-12 rounded-lg object-cover" />}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#F05030] uppercase">{result.type || 'product'}</span>
                    </div>
                    <h4 className="font-bold text-sm">{result.title || result.name}</h4>
                    <p className="text-xs text-gray-500">{result.description || result.tagline}</p>
                  </div>
                  {result.price && (
                    <span className="ml-auto font-black text-sm">{BRAND.currency}{result.price}</span>
                  )}
                </a>
              ))
            ) : searchQuery.length > 1 ? (
              <div className="text-center py-12">
                <p className="text-gray-400">No results found for "{searchQuery}"</p>
                <div className="flex gap-4 justify-center mt-4">
                  <a href="/shop" className="text-[#F05030] font-bold hover:underline">Browse Shop</a>
                  <a href="/journal/all-articles" className="text-[#F05030] font-bold hover:underline">Read Journal</a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FCF8F3] text-[#0E1A24] font-sans antialiased selection:bg-[#F05030] selection:text-white overflow-x-hidden">
      
      {/* TOP ANNOUNCEMENT TICKER */}
      <div className="relative bg-gradient-to-r from-[#F05030] via-[#E84525] to-[#D84325] text-white text-xs font-bold py-3 px-4 text-center tracking-wider overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgNUwxMCAxMGwxMCAyMCAxMC01IDEwIDE1IDUgMTB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDYiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="relative flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <span className="flex items-center gap-2">
            <Percent size={14} className="text-white/80" />
            BUY 2 GET 2 FREE
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="flex items-center gap-2">
            <Zap size={14} className="text-white/80" />
            USE CODE: 
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-0.5 rounded-full font-black tracking-normal border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
              B2G2
            </span>
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="flex items-center gap-2">
            <Clock size={14} className="text-white/80" />
            Offer Ends Soon!
          </span>
        </div>
      </div>

      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#FCF8F3]/80 backdrop-blur-xl border-b border-[#EFE7DE]/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo - Left */}
          <div className="flex items-center gap-6">
            <button 
              className="lg:hidden p-2 text-[#0E1A24] hover:text-[#F05030] transition-all hover:scale-110"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
            
            <a href="/" className="flex flex-col items-start group">
              <span className="text-3xl font-black tracking-tight text-[#F05030] font-serif leading-none">
                {BRAND.name}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E1A24]/60 group-hover:text-[#F05030] transition-colors">
                {BRAND.tagline}
              </span>
            </a>
          </div>

          {/* Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-6 font-bold text-xs tracking-widest uppercase text-[#0E1A24]">
            <NavDropdown 
              label={NAVIGATION.shop.label} 
              items={NAVIGATION.shop.items} 
              isOpen={activeDropdown === NAVIGATION.shop.label} 
              onToggle={setActiveDropdown} 
            />
            <NavDropdown 
              label={NAVIGATION.routineSystem.label} 
              items={NAVIGATION.routineSystem.items} 
              isOpen={activeDropdown === NAVIGATION.routineSystem.label} 
              onToggle={setActiveDropdown} 
            />
            <NavDropdown 
              label={NAVIGATION.aboutUs.label} 
              items={NAVIGATION.aboutUs.items} 
              isOpen={activeDropdown === NAVIGATION.aboutUs.label} 
              onToggle={setActiveDropdown} 
            />
            <NavDropdown 
              label={NAVIGATION.journal.label} 
              items={NAVIGATION.journal.items} 
              isOpen={activeDropdown === NAVIGATION.journal.label} 
              onToggle={setActiveDropdown} 
            />
            {NAVIGATION.results.enabled && (
              <NavDropdown 
                label={NAVIGATION.results.label} 
                items={NAVIGATION.results.items} 
                isOpen={activeDropdown === NAVIGATION.results.label} 
                onToggle={setActiveDropdown} 
              />
            )}
          </nav>

          {/* Header Utilities - Right */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* TAKE THE SKIN QUIZ - Prominent CTA */}
            <button 
              onClick={startQuiz}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F05030] to-[#D84325] text-white font-extrabold text-xs rounded-full hover:shadow-lg hover:shadow-[#F05030]/30 transition-all uppercase tracking-wider"
            >
              <Sparkles size={14} /> Take the Skin Quiz
            </button>

            {/* Search */}
            <button 
              onClick={() => setSearchOpen(true)}
              className="p-2 text-[#0E1A24] hover:text-[#F05030] transition-all hover:scale-110"
            >
              <Search size={20} />
            </button>

            {/* Account */}
            <button className="p-2 text-[#0E1A24] hover:text-[#F05030] transition-all hover:scale-110 relative group">
              <User size={22} />
            </button>

            {/* Cart */}
            <button 
              className="relative p-2.5 bg-gradient-to-r from-[#F05030] to-[#D84325] text-white rounded-full hover:shadow-lg hover:shadow-[#F05030]/30 transition-all active:scale-95 shadow-md group"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#0E1A24] text-white text-[10px] font-black h-5 w-5 rounded-full flex items-center justify-center border-2 border-[#FCF8F3] animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FCF8F3] border-b border-[#EFE7DE] px-6 py-6 space-y-4 font-bold text-xs tracking-wider uppercase animate-slideDown max-h-[80vh] overflow-y-auto">
            <button 
              onClick={startQuiz}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#F05030] to-[#D84325] text-white font-extrabold rounded-xl transition-all"
            >
              <Sparkles size={16} /> TAKE THE SKIN QUIZ
            </button>
            
            {/* Mobile Dropdown: SHOP */}
            <div>
              <button 
                onClick={() => setMobileDropdownOpen(mobileDropdownOpen === 'shop' ? null : 'shop')}
                className="w-full flex justify-between items-center py-2 text-[#0E1A24] hover:text-[#F05030] transition-all"
              >
                {NAVIGATION.shop.label}
                <ChevronDown size={16} className={`transition-transform ${mobileDropdownOpen === 'shop' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdownOpen === 'shop' && (
                <div className="pl-4 space-y-2 py-2">
                  {NAVIGATION.shop.items.map((item, idx) => (
                    <a key={idx} href={item.href} className="block py-1.5 text-gray-600 hover:text-[#F05030] transition-all text-xs">
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Dropdown: ROUTINE SYSTEM */}
            <div>
              <button 
                onClick={() => setMobileDropdownOpen(mobileDropdownOpen === 'routine' ? null : 'routine')}
                className="w-full flex justify-between items-center py-2 text-[#0E1A24] hover:text-[#F05030] transition-all"
              >
                {NAVIGATION.routineSystem.label}
                <ChevronDown size={16} className={`transition-transform ${mobileDropdownOpen === 'routine' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdownOpen === 'routine' && (
                <div className="pl-4 space-y-2 py-2">
                  {NAVIGATION.routineSystem.items.map((item, idx) => (
                    <a key={idx} href={item.href} className="flex items-center gap-2 py-1.5 text-gray-600 hover:text-[#F05030] transition-all text-xs">
                      {item.step && <span className="text-[#F05030] font-black">{String(item.step).padStart(2, '0')}</span>}
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Dropdown: ABOUT US */}
            <div>
              <button 
                onClick={() => setMobileDropdownOpen(mobileDropdownOpen === 'about' ? null : 'about')}
                className="w-full flex justify-between items-center py-2 text-[#0E1A24] hover:text-[#F05030] transition-all"
              >
                {NAVIGATION.aboutUs.label}
                <ChevronDown size={16} className={`transition-transform ${mobileDropdownOpen === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdownOpen === 'about' && (
                <div className="pl-4 space-y-2 py-2">
                  {NAVIGATION.aboutUs.items.map((item, idx) => (
                    <a key={idx} href={item.href} className="block py-1.5 text-gray-600 hover:text-[#F05030] transition-all text-xs">
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Dropdown: JOURNAL */}
            <div>
              <button 
                onClick={() => setMobileDropdownOpen(mobileDropdownOpen === 'journal' ? null : 'journal')}
                className="w-full flex justify-between items-center py-2 text-[#0E1A24] hover:text-[#F05030] transition-all"
              >
                {NAVIGATION.journal.label}
                <ChevronDown size={16} className={`transition-transform ${mobileDropdownOpen === 'journal' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdownOpen === 'journal' && (
                <div className="pl-4 space-y-2 py-2">
                  {NAVIGATION.journal.items.map((item, idx) => (
                    <a key={idx} href={item.href} className="block py-1.5 text-gray-600 hover:text-[#F05030] transition-all text-xs">
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="block text-[#F05030] font-extrabold bg-[#F05030]/10 px-4 py-2 rounded-full text-center">✨ SPECIAL OFFERS</a>
          </div>
        )}
      </header>

      {/* ============================================================ */}
      {/* QUIZ OVERLAY */}
      {renderQuiz()}

      {/* SEARCH OVERLAY */}
      {renderSearch()}

      {/* CART DRAWER */}
      {renderCart()}

      {/* ============================================================ */}
      {/* HERO CAROUSEL */}
      <section className="relative overflow-hidden border-b border-[#EFE7DE]">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {HERO_SLIDES.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`w-full shrink-0 ${slide.bgColor} py-12 lg:py-20 relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center relative">
                
                <div className="space-y-5 text-center md:text-left animate-fadeInUp">
                  <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm text-[#F05030] border border-[#F05030]/20 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    <ShieldCheck size={15} /> {slide.badge}
                  </span>

                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#0E1A24] leading-tight font-serif">
                    {slide.title} <br />
                    <span className="text-[#F05030] relative">
                      {slide.highlight}
                      <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" fill="none">
                        <path d="M0 4 Q25 0 50 4 Q75 8 100 4" stroke="#F05030" strokeWidth="2" strokeOpacity="0.3"/>
                      </svg>
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto md:mx-0 font-medium leading-relaxed">
                    {slide.desc}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
                    <button className="px-8 py-4 bg-gradient-to-r from-[#F05030] to-[#D84325] hover:shadow-xl hover:shadow-[#F05030]/30 text-white font-extrabold rounded-xl transition-all uppercase text-xs tracking-widest flex items-center gap-2 group">
                      {slide.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={startQuiz}
                      className="px-6 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-[#0E1A24] font-bold rounded-xl transition-all uppercase text-xs tracking-widest border border-[#EFE7DE] flex items-center gap-2"
                    >
                      <Sparkles size={14} /> Take the Quiz
                    </button>
                  </div>

                  <div className="flex items-center gap-4 justify-center md:justify-start text-xs text-gray-500">
                    <span className="flex items-center gap-1"><CircleCheckBig size={14} className="text-green-500" /> Free Shipping</span>
                    <span className="flex items-center gap-1"><CircleCheckBig size={14} className="text-green-500" /> 7 Days Return</span>
                  </div>
                </div>

                <div className="relative flex justify-center">
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl max-w-md w-full h-[380px] sm:h-[440px] group">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-[#0E1A24]">
                        {index + 1}/{HERO_SLIDES.length}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setCurrentSlide(currentSlide === 0 ? HERO_SLIDES.length - 1 : currentSlide - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white text-[#0E1A24] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => setCurrentSlide(currentSlide === HERO_SLIDES.length - 1 ? 0 : currentSlide + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white text-[#0E1A24] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-10 bg-[#F05030] shadow-md shadow-[#F05030]/30' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SHOP BY CONCERN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-[#F05030] text-xs font-black uppercase tracking-widest bg-[#F05030]/10 px-4 py-1.5 rounded-full inline-block">
            TARGETED SOLUTIONS
          </span>
          <h2 className="text-4xl font-black text-[#0E1A24] font-serif mt-3">Shop By Concern</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">Find the perfect product for your skin's unique needs</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CONCERNS.map((item, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden border border-[#EFE7DE] bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2">
              <div className={`w-full h-48 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/400x300/FEEFE6/333333?text=${item.title.replace(' & ', '+')}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.icon}
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-extrabold text-sm text-[#0E1A24] group-hover:text-[#F05030] transition-colors">{item.title}</h3>
                <span className="text-[#F05030] font-bold text-xs flex items-center justify-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
                  Shop Now <MoveRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* BESTSELLERS PRODUCT GRID */}
      <section className="bg-gradient-to-b from-[#FEEFE6]/40 to-[#FCF8F3] py-16 border-y border-[#EFE7DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#F05030] text-xs font-black uppercase tracking-widest bg-[#F05030]/10 px-4 py-1.5 rounded-full inline-block">
                FORMULATED FOR RESULTS
              </span>
              <h2 className="text-4xl font-black text-[#0E1A24] font-serif mt-2">Our Bestsellers</h2>
              <p className="text-gray-500 text-sm mt-1">Trusted by thousands for visible results</p>
            </div>
            <a href="/shop" className="hidden sm:flex items-center gap-2 font-extrabold text-xs text-[#F05030] hover:gap-3 transition-all uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md">
              VIEW ALL <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl border border-[#EFE7DE] p-5 flex flex-col hover:shadow-2xl transition-all duration-500 group relative hover:-translate-y-2"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="flex justify-between items-center absolute top-4 left-4 right-4 z-10">
                  <span className={`${product.badgeColor} text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg`}>
                    {product.badge}
                  </span>
                  <span className="bg-[#F05030] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {product.discount}
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#FEEFE6] to-[#F5E6DC] mb-4 h-64 w-full cursor-pointer">
                  <img 
                    src={product.image1} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500 absolute inset-0"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/400x400/FEEFE6/333333?text=${product.name.substring(0, 20)}`;
                    }}
                  />
                  <img 
                    src={product.image2} 
                    alt={`${product.name} hover`} 
                    className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/400x400/FEEFE6/333333?text=${product.name.substring(0, 20)}`;
                    }}
                  />
                  
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute bottom-3 right-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md transition-all hover:scale-110 z-10"
                  >
                    <Heart 
                      size={16} 
                      className={wishlist.includes(product.id) ? 'fill-[#F05030] text-[#F05030]' : 'text-gray-400 hover:text-[#F05030]'} 
                    />
                  </button>

                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity">
                      <button className="px-6 py-3 bg-white/90 backdrop-blur-sm text-[#0E1A24] font-bold rounded-full text-xs uppercase tracking-wider shadow-lg hover:bg-white transition-all">
                        Quick View
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-1 text-xs font-bold mb-1.5">
                    <Star size={14} className="fill-[#FFC83B] text-[#FFC83B]" />
                    <span className="text-[#0E1A24] font-black">{product.rating}</span>
                    <span className="text-gray-400 font-normal text-[11px]">({product.reviews})</span>
                    <span className="ml-auto text-[10px] text-green-600 font-bold flex items-center gap-1">
                      <CircleCheckBig size={12} /> Verified
                    </span>
                  </div>

                  <h3 className="font-extrabold text-[#0E1A24] text-sm leading-snug line-clamp-1 group-hover:text-[#F05030] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-1">{product.tagline}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{product.brand}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EFE7DE] flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black text-[#0E1A24]">{BRAND.currency}{product.price}</span>
                    <span className="text-xs text-gray-400 line-through ml-2">{BRAND.currency}{product.originalPrice}</span>
                    <span className="block text-[9px] text-green-600 font-bold">Save {BRAND.currency}{product.originalPrice - product.price}</span>
                  </div>

                  <button 
                    onClick={() => addToCart(product)}
                    className="px-4 py-2.5 bg-gradient-to-r from-[#F05030] to-[#D84325] hover:shadow-lg hover:shadow-[#F05030]/30 text-white text-xs font-black rounded-lg transition-all uppercase tracking-wider hover:scale-105"
                  >
                    ADD TO CART
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* JOURNAL PREVIEW - SKIN SCHOOL FEATURED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-[#F05030] text-xs font-black uppercase tracking-widest bg-[#F05030]/10 px-4 py-1.5 rounded-full inline-block">
              LEARN WITH US
            </span>
            <h2 className="text-4xl font-black text-[#0E1A24] font-serif mt-2">Skin School</h2>
            <p className="text-gray-500 text-sm mt-1">Understand your skin and build a routine that works</p>
          </div>
          <a href="/journal/skin-school" className="hidden sm:flex items-center gap-2 font-extrabold text-xs text-[#F05030] hover:gap-3 transition-all uppercase tracking-wider">
            VIEW ALL <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden group">
            <img 
              src={JOURNAL_ARTICLES.skinSchool.featured.image} 
              alt={JOURNAL_ARTICLES.skinSchool.featured.title}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="text-xs font-black uppercase tracking-wider bg-[#F05030] px-3 py-1 rounded-full inline-block">Featured</span>
              <h3 className="text-2xl font-black mt-2">{JOURNAL_ARTICLES.skinSchool.featured.title}</h3>
              <p className="text-white/80 text-sm mt-1">{JOURNAL_ARTICLES.skinSchool.featured.description}</p>
              <a href={JOURNAL_ARTICLES.skinSchool.featured.href} className="inline-flex items-center gap-2 font-bold text-sm mt-3 hover:gap-3 transition-all">
                Read More <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {JOURNAL_ARTICLES.skinSchool.articles.slice(0, 3).map((article, idx) => (
              <a key={idx} href={article.href} className="flex gap-3 p-3 rounded-xl hover:bg-[#FCF8F3] transition-all border border-transparent hover:border-[#EFE7DE] group">
                <img src={article.image} alt="" className="w-16 h-16 rounded-xl object-cover shrink-0" />
                <div>
                  <h4 className="font-bold text-sm group-hover:text-[#F05030] transition-colors line-clamp-2">{article.title}</h4>
                  <p className="text-xs text-gray-500 line-clamp-1">{article.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TRUST BADGES */}
      <section className="bg-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIxIiBmaWxsPSIjZTBkY2Q2IiBmaWxsLW9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
          {TRUST_BADGES.map((item, index) => (
            <div key={index} className="flex flex-col items-center group hover:scale-105 transition-all duration-300">
              <div className="p-4 bg-[#F05030]/10 rounded-full text-[#F05030] group-hover:bg-[#F05030] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#0E1A24] mt-3">{item.title}</h4>
              <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* JOURNAL - CLIMATE & SKIN PREVIEW */}
      <section className="bg-gradient-to-b from-[#FCF8F3] to-[#FEEFE6]/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-[#F05030] text-xs font-black uppercase tracking-widest bg-[#F05030]/10 px-4 py-1.5 rounded-full inline-block">
                ENVIRONMENT & SKIN
              </span>
              <h2 className="text-4xl font-black text-[#0E1A24] font-serif mt-2">Climate & Skin</h2>
              <p className="text-gray-500 text-sm mt-1">How your environment affects your skin</p>
            </div>
            <a href="/journal/climate-skin" className="hidden sm:flex items-center gap-2 font-extrabold text-xs text-[#F05030] hover:gap-3 transition-all uppercase tracking-wider">
              VIEW ALL <ArrowRight size={14} />
            </a>
          </div>

          <div className="relative rounded-3xl overflow-hidden group">
            <img 
              src={JOURNAL_ARTICLES.climateSkin.featured.image} 
              alt={JOURNAL_ARTICLES.climateSkin.featured.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="text-xs font-black uppercase tracking-wider bg-[#F05030] px-3 py-1 rounded-full inline-block">Featured</span>
              <h3 className="text-3xl font-black mt-2">{JOURNAL_ARTICLES.climateSkin.featured.title}</h3>
              <p className="text-white/80 text-sm mt-1 max-w-2xl">{JOURNAL_ARTICLES.climateSkin.featured.description}</p>
              <a href={JOURNAL_ARTICLES.climateSkin.featured.href} className="inline-flex items-center gap-2 font-bold text-sm mt-3 hover:gap-3 transition-all">
                Read More <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {JOURNAL_ARTICLES.climateSkin.articles.slice(0, 4).map((article, idx) => (
              <a key={idx} href={article.href} className="group">
                <div className="relative rounded-xl overflow-hidden h-40">
                  <img src={article.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h4 className="text-white font-bold text-sm group-hover:text-[#F05030] transition-colors">{article.title}</h4>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* JOURNAL - ROUTINE GUIDE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-[#F05030] text-xs font-black uppercase tracking-widest bg-[#F05030]/10 px-4 py-1.5 rounded-full inline-block">
              BUILD YOUR ROUTINE
            </span>
            <h2 className="text-4xl font-black text-[#0E1A24] font-serif mt-2">Routine Guide</h2>
            <p className="text-gray-500 text-sm mt-1">Simple, effective routines for every skin</p>
          </div>
          <a href="/journal/routine-guide" className="hidden sm:flex items-center gap-2 font-extrabold text-xs text-[#F05030] hover:gap-3 transition-all uppercase tracking-wider">
            VIEW ALL <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden group">
            <img 
              src={JOURNAL_ARTICLES.routineGuide.featured.image} 
              alt={JOURNAL_ARTICLES.routineGuide.featured.title}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="text-xs font-black uppercase tracking-wider bg-[#F05030] px-3 py-1 rounded-full inline-block">Start Here</span>
              <h3 className="text-2xl font-black mt-2">{JOURNAL_ARTICLES.routineGuide.featured.title}</h3>
              <p className="text-white/80 text-sm mt-1">{JOURNAL_ARTICLES.routineGuide.featured.description}</p>
              <a href={JOURNAL_ARTICLES.routineGuide.featured.href} className="inline-flex items-center gap-2 font-bold text-sm mt-3 hover:gap-3 transition-all">
                Read More <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {JOURNAL_ARTICLES.routineGuide.articles.slice(0, 3).map((article, idx) => (
              <a key={idx} href={article.href} className="flex gap-3 p-3 rounded-xl hover:bg-[#FCF8F3] transition-all border border-transparent hover:border-[#EFE7DE] group">
                <img src={article.image} alt="" className="w-16 h-16 rounded-xl object-cover shrink-0" />
                <div>
                  <h4 className="font-bold text-sm group-hover:text-[#F05030] transition-colors line-clamp-2">{article.title}</h4>
                  <p className="text-xs text-gray-500 line-clamp-1">{article.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ROUTINE SYSTEM PREVIEW */}
      <section className="bg-gradient-to-b from-[#FEEFE6]/40 to-[#FCF8F3] py-16 border-y border-[#EFE7DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F05030] text-xs font-black uppercase tracking-widest bg-[#F05030]/10 px-4 py-1.5 rounded-full inline-block">
              THE {BRAND.name.toUpperCase()} SYSTEM
            </span>
            <h2 className="text-4xl font-black text-[#0E1A24] font-serif mt-2">Your Complete Skincare Routine</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">Four simple steps. One complete system. Skincare that adapts to your life.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {NAVIGATION.routineSystem.items.filter(item => item.step).map((item) => (
              <a key={item.step} href={item.href} className={`group relative rounded-2xl overflow-hidden border ${item.hero ? 'border-[#F05030] shadow-lg shadow-[#F05030]/20' : 'border-[#EFE7DE]'} bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                {item.hero && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-[#F05030] text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">Hero</span>
                  </div>
                )}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#FEEFE6] to-[#F5E6DC]">
                  <img 
                    src={item.image} 
                    alt={item.label} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/200x200/FEEFE6/333333?text=${item.label}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                    <span className="text-white font-black text-lg">{String(item.step).padStart(2, '0')}</span>
                    <span className="text-white/80 text-xs font-bold uppercase tracking-wider">{item.label.split('. ')[1] || item.label}</span>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Step {String(item.step).padStart(2, '0')}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="/routine-system/complete" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#F05030] to-[#D84325] text-white font-extrabold rounded-xl hover:shadow-xl hover:shadow-[#F05030]/30 transition-all uppercase text-xs tracking-widest">
              Build Your Complete Routine <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* QUIZ CTA BANNER */}
      <section className="bg-gradient-to-r from-[#0E1A24] to-[#1a2a38] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Sparkles size={40} className="text-[#F05030] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-black text-white font-serif">Not Sure Where to Start?</h2>
          <p className="text-gray-400 mt-2 max-w-lg mx-auto">Take our 2-minute Skin Quiz and get personalized recommendations for your unique skin.</p>
          <button 
            onClick={startQuiz}
            className="mt-6 px-10 py-4 bg-gradient-to-r from-[#F05030] to-[#D84325] text-white font-extrabold rounded-xl hover:shadow-xl hover:shadow-[#F05030]/30 transition-all uppercase text-sm tracking-widest inline-flex items-center gap-3"
          >
            Take the Skin Quiz <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-[#0E1A24] to-[#1a2a38] text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-700/50">
            
            {/* Brand Column */}
            <div className="lg:col-span-1 space-y-4">
              <a href="/" className="flex flex-col items-start">
                <span className="font-serif text-3xl font-black text-[#F05030] lowercase tracking-tight">{BRAND.name}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">{BRAND.tagline}</span>
              </a>
              <p className="text-sm text-gray-400 max-w-xs">Skincare that works. Formulated with love for every skin type.</p>
              <div className="flex gap-3 pt-2">
                {SOCIAL_LINKS.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 hover:bg-[#F05030]/20 rounded-full transition-all hover:scale-110 text-gray-400 hover:text-[#F05030]"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                {FOOTER_QUICK_LINKS.map((link, idx) => (
                  <li key={idx}>
                    <a href={`/${link.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policy */}
            <div>
              <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4">Policy</h4>
              <ul className="space-y-2.5 text-sm">
                {FOOTER_POLICY_LINKS.map((link, idx) => (
                  <li key={idx}>
                    <a href={`/${link.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a href={`https://wa.me/${BRAND.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone size={16} className="text-[#F05030] shrink-0" />
                  <span>{BRAND.phone}</span>
                </a>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail size={16} className="text-[#F05030] shrink-0" />
                  <span>{BRAND.email}</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4">Subscribe</h4>
              <p className="text-sm text-gray-400 mb-3">Get skincare tips and exclusive offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-slate-700 rounded-l-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F05030] transition-colors"
                />
                <button className="px-4 py-2.5 bg-gradient-to-r from-[#F05030] to-[#D84325] text-white font-bold text-xs rounded-r-lg hover:shadow-lg hover:shadow-[#F05030]/30 transition-all">
                  Subscribe
                </button>
              </div>
            </div>

          </div>

          {/* Payment Options */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 pb-4 border-b border-slate-700/50">
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 uppercase tracking-wider">Secure Payment</span>
              <div className="flex gap-2">
                {PAYMENT_ICONS.map((icon, idx) => (
                  <img key={idx} src={icon} alt="Payment method" className="h-7 w-auto rounded" />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><Lock size={14} /> SSL Encrypted</span>
            </div>
          </div>

          {/* Bottom Legal Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-xs text-gray-500">
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="/shipping-returns" className="hover:text-white transition-colors">Shipping & Returns</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms and Conditions</a>
            </div>
            <p className="text-center">© {BRAND.copyrightYear} {BRAND.name} Official. All rights reserved.</p>
          </div>

        </div>
      </footer>

      {/* ============================================================ */}
      {/* STYLES */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
  );
}
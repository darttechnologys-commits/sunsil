
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
//   Heart, Menu, X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Truck, RefreshCw 
// } from 'lucide-react';

// export default function App() {
//   const [cartCount, setCartCount] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Exact Foxtale style Hero Banners
//   const heroSlides = [
//     {
//       id: 1,
//       badge: "NEW LAUNCH",
//       title: "15% Vitamin C Serum",
//       highlight: "For Spot-Free Radiance",
//       desc: "Fades dark spots, prevents sun damage & boosts collagen in just 14 days.",
//       cta: "SHOP VITAMIN C",
//       bgColor: "bg-[#FEEFE6]",
//       image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       id: 2,
//       badge: "BESTSELLER",
//       title: "CoverUp Dewy Sunscreen",
//       highlight: "SPF 50 PA++++",
//       desc: "Zero white cast, ultra-lightweight & enriched with Niacinamide.",
//       cta: "EXPLORE SUNSCREENS",
//       bgColor: "bg-[#FFF4EC]",
//       image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       id: 3,
//       badge: "SPECIAL OFFER",
//       title: "Buy 2 Get 2 Free",
//       highlight: "Use Code: B2G2",
//       desc: "Mix and match your favorite targeted skincare solutions today.",
//       cta: "BUILD YOUR ROUTINE",
//       bgColor: "bg-[#FDF0E6]",
//       image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800"
//     }
//   ];

//   // Auto-slide for Hero Section
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [heroSlides.length]);

//   const concerns = [
//     { title: "Pigmentation & Spots", img: "https://images.unsplash.com/photo-1512290900676-26c2762c85b1?auto=format&fit=crop&q=80&w=300" },
//     { title: "Acne & Breakouts", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=300" },
//     { title: "Sun Damage & Tan", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=300" },
//     { title: "Dry & Dull Skin", img: "https://images.unsplash.com/photo-1608248597262-838d72851480?auto=format&fit=crop&q=80&w=300" },
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
//       image1: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500",
//       image2: "https://images.unsplash.com/photo-1608248597262-838d72851480?auto=format&fit=crop&q=80&w=500",
//       badge: "BESTSELLER"
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
//       image1: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=500",
//       image2: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=500",
//       badge: "MUST HAVE"
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
//       image1: "https://images.unsplash.com/photo-1608248597262-838d72851480?auto=format&fit=crop&q=80&w=500",
//       image2: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500",
//       badge: "NEW"
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
//       image1: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=500",
//       image2: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=500",
//       badge: "TRENDING"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#FCF8F3] text-[#0E1A24] font-sans antialiased selection:bg-[#F05030] selection:text-white">
      
//       {/* 1. TOP ANNOUNCEMENT TICKER */}
//       <div className="bg-[#F05030] text-white text-xs font-bold py-2 px-4 text-center tracking-wider flex items-center justify-center gap-2">
//         <span>BUY 2 GET 2 FREE | USE CODE: <span className="bg-white text-[#F05030] px-2 py-0.5 rounded font-black tracking-normal">B2G2</span></span>
//       </div>

//       {/* 2. NAVBAR */}
//       <header className="sticky top-0 z-50 bg-[#FCF8F3]/95 backdrop-blur-md border-b border-[#EFE7DE]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
//           <div className="flex items-center gap-6">
//             <button 
//               className="lg:hidden p-2 text-[#0E1A24] hover:text-[#F05030]"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
            
//             <a href="#" className="flex items-center">
//               <span className="text-3xl font-black tracking-tighter text-[#F05030] lowercase font-serif">
//                 foxtale
//               </span>
//             </a>
//           </div>

//           <nav className="hidden lg:flex items-center gap-8 font-bold text-xs tracking-widest uppercase text-[#0E1A24]">
//             <a href="#" className="hover:text-[#F05030] transition-colors py-2">BESTSELLERS</a>
//             <a href="#" className="hover:text-[#F05030] transition-colors py-2">SHOP BY CONCERN</a>
//             <a href="#" className="hover:text-[#F05030] transition-colors py-2">CATEGORIES</a>
//             <a href="#" className="hover:text-[#F05030] transition-colors py-2">BUILD ROUTINE</a>
//             <a href="#" className="text-[#F05030] font-extrabold flex items-center gap-1 py-2">
//               OFFERS <Sparkles size={14} />
//             </a>
//           </nav>

//           <div className="flex items-center gap-3 sm:gap-5">
//             <div className="hidden sm:flex items-center bg-[#FEEFE6] rounded-full px-4 py-2 border border-[#EFE7DE] w-48 lg:w-60 focus-within:ring-2 focus-within:ring-[#F05030]/30 transition-all">
//               <Search size={16} className="text-gray-400 mr-2 shrink-0" />
//               <input 
//                 type="text" 
//                 placeholder="Search Serum, Sunscreen..." 
//                 className="bg-transparent text-xs outline-none w-full text-[#0E1A24] placeholder-gray-400 font-medium" 
//               />
//             </div>
            
//             <button className="p-2 text-[#0E1A24] hover:text-[#F05030] transition-colors">
//               <User size={22} />
//             </button>

//             <button 
//               className="relative p-2.5 bg-[#F05030] text-white rounded-full hover:bg-[#D84325] transition-transform active:scale-95 shadow-md"
//               onClick={() => setCartCount(cartCount + 1)}
//             >
//               <ShoppingBag size={18} />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-[#0E1A24] text-white text-[10px] font-black h-5 w-5 rounded-full flex items-center justify-center border-2 border-[#FCF8F3]">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="lg:hidden bg-[#FCF8F3] border-b border-[#EFE7DE] px-6 py-6 space-y-4 font-bold text-xs tracking-wider uppercase">
//             <div className="flex items-center bg-[#FEEFE6] rounded-full px-4 py-2.5 border border-[#EFE7DE] mb-4">
//               <Search size={16} className="text-gray-400 mr-2" />
//               <input type="text" placeholder="Search products..." className="bg-transparent text-xs outline-none w-full" />
//             </div>
//             <a href="#" className="block text-[#0E1A24] hover:text-[#F05030]">BESTSELLERS</a>
//             <a href="#" className="block text-[#0E1A24] hover:text-[#F05030]">SHOP BY CONCERN</a>
//             <a href="#" className="block text-[#0E1A24] hover:text-[#F05030]">CATEGORIES</a>
//             <a href="#" className="block text-[#0E1A24] hover:text-[#F05030]">BUILD ROUTINE</a>
//             <a href="#" className="block text-[#F05030] font-extrabold">SPECIAL OFFERS</a>
//           </div>
//         )}
//       </header>

//       {/* 3. HERO CAROUSEL */}
//       <section className="relative overflow-hidden border-b border-[#EFE7DE]">
//         <div 
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {heroSlides.map((slide) => (
//             <div 
//               key={slide.id} 
//               className={`w-full shrink-0 ${slide.bgColor} py-12 lg:py-20`}
//             >
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
                
//                 <div className="space-y-5 text-center md:text-left">
//                   <span className="inline-flex items-center gap-1.5 bg-[#F05030]/10 text-[#F05030] border border-[#F05030]/20 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
//                     <ShieldCheck size={15} /> {slide.badge}
//                   </span>

//                   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E1A24] leading-tight font-serif">
//                     {slide.title} <br />
//                     <span className="text-[#F05030]">{slide.highlight}</span>
//                   </h1>

//                   <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto md:mx-0 font-medium leading-relaxed">
//                     {slide.desc}
//                   </p>

//                   <div className="pt-2">
//                     <button className="px-8 py-4 bg-[#F05030] hover:bg-[#D84325] text-white font-extrabold rounded-xl shadow-lg shadow-[#F05030]/20 transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2 mx-auto md:mx-0">
//                       {slide.cta} <ArrowRight size={16} />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="relative flex justify-center">
//                   <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl max-w-md w-full h-[380px] sm:h-[440px]">
//                     <img 
//                       src={slide.image} 
//                       alt={slide.title} 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>

//         <button 
//           onClick={() => setCurrentSlide(currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1)}
//           className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/80 hover:bg-white text-[#0E1A24] rounded-full shadow-md backdrop-blur-sm transition-all"
//         >
//           <ChevronLeft size={20} />
//         </button>
//         <button 
//           onClick={() => setCurrentSlide(currentSlide === heroSlides.length - 1 ? 0 : currentSlide + 1)}
//           className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/80 hover:bg-white text-[#0E1A24] rounded-full shadow-md backdrop-blur-sm transition-all"
//         >
//           <ChevronRight size={20} />
//         </button>

//         <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
//           {heroSlides.map((_, idx) => (
//             <button 
//               key={idx}
//               onClick={() => setCurrentSlide(idx)}
//               className={`h-2.5 rounded-full transition-all ${currentSlide === idx ? 'w-8 bg-[#F05030]' : 'w-2.5 bg-gray-300'}`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* 4. SHOP BY CONCERN */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center mb-10">
//           <span className="text-[#F05030] text-xs font-black uppercase tracking-widest">TARGETED SOLUTIONS</span>
//           <h2 className="text-3xl font-black text-[#0E1A24] font-serif mt-1">Shop By Concern</h2>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {concerns.map((item, index) => (
//             <div key={index} className="group relative rounded-2xl overflow-hidden border border-[#EFE7DE] bg-white p-4 text-center hover:shadow-lg transition-all cursor-pointer">
//               <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-[#FEEFE6]">
//                 <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//               </div>
//               <h3 className="font-extrabold text-sm text-[#0E1A24]">{item.title}</h3>
//               <span className="text-[#F05030] font-bold text-xs flex items-center justify-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                 Shop Now <ChevronRight size={14} />
//               </span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 5. BESTSELLERS PRODUCT GRID */}
//       <section className="bg-[#FEEFE6]/40 py-16 border-y border-[#EFE7DE]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="flex justify-between items-end mb-10">
//             <div>
//               <span className="text-[#F05030] text-xs font-black uppercase tracking-widest">FORMULATED FOR RESULTS</span>
//               <h2 className="text-3xl font-black text-[#0E1A24] font-serif mt-1">Our Bestsellers</h2>
//             </div>
//             <a href="#" className="hidden sm:flex items-center gap-1 font-extrabold text-xs text-[#F05030] hover:underline uppercase tracking-wider">
//               VIEW ALL <ArrowRight size={14} />
//             </a>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {products.map((product) => (
//               <div 
//                 key={product.id} 
//                 className="bg-white rounded-2xl border border-[#EFE7DE] p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group relative"
//               >
//                 <div className="flex justify-between items-center absolute top-6 left-6 right-6 z-10">
//                   <span className="bg-[#0E1A24] text-white text-[9px] font-black px-2.5 py-1 rounded uppercase tracking-wider">
//                     {product.badge}
//                   </span>
//                   <span className="bg-[#F05030] text-white text-[9px] font-black px-2.5 py-1 rounded uppercase tracking-wider">
//                     {product.discount}
//                   </span>
//                 </div>

//                 <div className="relative rounded-xl overflow-hidden bg-[#FEEFE6] mb-4 h-60 w-full cursor-pointer">
//                   <img 
//                     src={product.image1} 
//                     alt={product.name} 
//                     className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500 absolute inset-0" 
//                   />
//                   <img 
//                     src={product.image2} 
//                     alt={`${product.name} hover`} 
//                     className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0" 
//                   />
                  
//                   <button className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md text-gray-400 hover:text-[#F05030] transition-colors z-10">
//                     <Heart size={16} />
//                   </button>
//                 </div>

//                 <div>
//                   <div className="flex items-center gap-1 text-xs font-bold mb-1.5">
//                     <Star size={14} className="fill-[#FFC83B] text-[#FFC83B]" />
//                     <span className="text-[#0E1A24] font-black">{product.rating}</span>
//                     <span className="text-gray-400 font-normal text-[11px]">({product.reviews})</span>
//                   </div>

//                   <h3 className="font-extrabold text-[#0E1A24] text-sm leading-snug line-clamp-1 group-hover:text-[#F05030] transition-colors">
//                     {product.name}
//                   </h3>
//                   <p className="text-xs text-gray-500 mt-1 line-clamp-1">{product.tagline}</p>
//                 </div>

//                 <div className="mt-4 pt-3 border-t border-[#EFE7DE] flex items-center justify-between">
//                   <div>
//                     <span className="text-lg font-black text-[#0E1A24]">₹{product.price}</span>
//                     <span className="text-xs text-gray-400 line-through ml-1.5">₹{product.originalPrice}</span>
//                   </div>

//                   <button 
//                     onClick={() => setCartCount(cartCount + 1)}
//                     className="px-4 py-2.5 bg-[#F05030] hover:bg-[#D84325] text-white text-xs font-black rounded-lg transition-colors uppercase tracking-wider shadow-sm"
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
//       <section className="bg-white py-12">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           <div className="flex flex-col items-center">
//             <ShieldCheck size={32} className="text-[#F05030] mb-2" />
//             <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#0E1A24]">Dermatologist Tested</h4>
//             <p className="text-xs text-gray-500 mt-0.5">100% Safe For Indian Skin</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <CheckCircle2 size={32} className="text-[#F05030] mb-2" />
//             <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#0E1A24]">Clean & Cruelty Free</h4>
//             <p className="text-xs text-gray-500 mt-0.5">No Toxin & Paraben Free</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <Truck size={32} className="text-[#F05030] mb-2" />
//             <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#0E1A24]">Free Express Shipping</h4>
//             <p className="text-xs text-gray-500 mt-0.5">On All Orders Above ₹499</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <RefreshCw size={32} className="text-[#F05030] mb-2" />
//             <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#0E1A24]">Easy Returns</h4>
//             <p className="text-xs text-gray-500 mt-0.5">Hassle-Free 7 Days Policy</p>
//           </div>
//         </div>
//       </section>

//       {/* 7. FOOTER */}
//       <footer className="bg-[#0E1A24] text-gray-300 py-10 text-center text-xs border-t border-slate-800">
//         <p className="font-serif text-3xl font-black text-[#F05030] lowercase mb-2">foxtale</p>
//         <p>© 2026 Foxtale Official Theme React Component.</p>
//       </footer>

//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, Search, User, Star, ArrowRight, ShieldCheck, 
  Heart, Menu, X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, 
  Truck, RefreshCw, Zap, Leaf, Clock, Percent, 
  CircleCheckBig, MoveRight, Sun, Mail, Phone, CreditCard, Lock 
} from 'lucide-react';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const heroSlides = [
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const concerns = [
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
    },
  ];

  const products = [
    {
      id: 1,
      name: "15% Vitamin C Serum with Vitamin E",
      tagline: "Brightens Skin & Fades Dark Spots",
      price: 595,
      originalPrice: 699,
      discount: "15% OFF",
      rating: "4.9",
      reviews: "2,410",
      image1: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400",
      image2: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=400",
      badge: "⭐ BESTSELLER",
      badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
      brand: "SunSil"
    },
    {
      id: 2,
      name: "CoverUp Dewy Sunscreen SPF 50",
      tagline: "No White Cast & Hydrating Formula",
      price: 445,
      originalPrice: 495,
      discount: "10% OFF",
      rating: "4.8",
      reviews: "1,850",
      image1: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=400",
      image2: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400",
      badge: "🔥 MUST HAVE",
      badgeColor: "bg-gradient-to-r from-rose-500 to-pink-500",
      brand: "SunSil"
    },
    {
      id: 3,
      name: "Rich Hydrating Ceramide Moisturizer",
      tagline: "24-Hour Deep Moisture Lock",
      price: 495,
      originalPrice: 549,
      discount: "10% OFF",
      rating: "4.7",
      reviews: "920",
      image1: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=400",
      image2: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400&h=400",
      badge: "✨ NEW",
      badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
      brand: "SunSil"
    },
    {
      id: 4,
      name: "Acne Control Salicylic Cleanser",
      tagline: "Unclogs Pores & Prevents Breakouts",
      price: 345,
      originalPrice: 399,
      discount: "13% OFF",
      rating: "4.8",
      reviews: "1,200",
      image1: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=400",
      image2: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400&h=400",
      badge: "📈 TRENDING",
      badgeColor: "bg-gradient-to-r from-violet-500 to-purple-500",
      brand: "SunSil"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCF8F3] text-[#0E1A24] font-sans antialiased selection:bg-[#F05030] selection:text-white overflow-x-hidden">
      
      {/* 1. TOP ANNOUNCEMENT TICKER */}
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

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#FCF8F3]/80 backdrop-blur-xl border-b border-[#EFE7DE]/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-6">
            <button 
              className="lg:hidden p-2 text-[#0E1A24] hover:text-[#F05030] transition-all hover:scale-110"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
            
            <a href="#" className="flex items-center gap-1 group">
              <span className="text-3xl font-black tracking-tighter text-[#F05030] font-serif relative">
                SunSil
              
              </span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-10 font-bold text-xs tracking-widest uppercase text-[#0E1A24]">
            {['BESTSELLERS', 'SHOP BY CONCERN', 'CATEGORIES', 'BUILD ROUTINE'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="relative hover:text-[#F05030] transition-all py-2 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F05030] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href="#" className="text-[#F05030] font-extrabold flex items-center gap-1 py-2 bg-[#F05030]/10 px-4 rounded-full hover:bg-[#F05030]/20 transition-all">
              OFFERS <Sparkles size={14} className="animate-pulse" />
            </a>
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden sm:flex items-center bg-white rounded-full px-4 py-2 border border-[#EFE7DE] w-48 lg:w-64 focus-within:ring-2 focus-within:ring-[#F05030]/30 focus-within:border-[#F05030] transition-all shadow-sm hover:shadow-md">
              <Search size={16} className="text-gray-400 mr-2 shrink-0" />
              <input 
                type="text" 
                placeholder="Search Serum, Sunscreen..." 
                className="bg-transparent text-xs outline-none w-full text-[#0E1A24] placeholder-gray-400 font-medium" 
              />
            </div>
            
            <button className="p-2 text-[#0E1A24] hover:text-[#F05030] transition-all hover:scale-110 relative group">
              <User size={22} />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#F05030] group-hover:w-full transition-all"></span>
            </button>

            <button 
              className="relative p-2.5 bg-gradient-to-r from-[#F05030] to-[#D84325] text-white rounded-full hover:shadow-lg hover:shadow-[#F05030]/30 transition-all active:scale-95 shadow-md group"
              onClick={() => setCartCount(cartCount + 1)}
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

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FCF8F3] border-b border-[#EFE7DE] px-6 py-6 space-y-4 font-bold text-xs tracking-wider uppercase animate-slideDown">
            <div className="flex items-center bg-white rounded-full px-4 py-2.5 border border-[#EFE7DE] mb-4 shadow-sm">
              <Search size={16} className="text-gray-400 mr-2" />
              <input type="text" placeholder="Search products..." className="bg-transparent text-xs outline-none w-full" />
            </div>
            {['BESTSELLERS', 'SHOP BY CONCERN', 'CATEGORIES', 'BUILD ROUTINE'].map((item) => (
              <a key={item} href="#" className="block text-[#0E1A24] hover:text-[#F05030] hover:translate-x-2 transition-all">{item}</a>
            ))}
            <a href="#" className="block text-[#F05030] font-extrabold bg-[#F05030]/10 px-4 py-2 rounded-full text-center">✨ SPECIAL OFFERS</a>
          </div>
        )}
      </header>

      {/* 3. HERO CAROUSEL */}
      <section className="relative overflow-hidden border-b border-[#EFE7DE]">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
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
                    <button className="px-6 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-[#0E1A24] font-bold rounded-xl transition-all uppercase text-xs tracking-widest border border-[#EFE7DE] flex items-center gap-2">
                      <Heart size={14} /> Wishlist
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
                        {index + 1}/{heroSlides.length}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setCurrentSlide(currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white text-[#0E1A24] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => setCurrentSlide(currentSlide === heroSlides.length - 1 ? 0 : currentSlide + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white text-[#0E1A24] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-10 bg-[#F05030] shadow-md shadow-[#F05030]/30' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </section>

      {/* 4. SHOP BY CONCERN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-[#F05030] text-xs font-black uppercase tracking-widest bg-[#F05030]/10 px-4 py-1.5 rounded-full inline-block">
            TARGETED SOLUTIONS
          </span>
          <h2 className="text-4xl font-black text-[#0E1A24] font-serif mt-3">Shop By Concern</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">Find the perfect product for your skin's unique needs</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {concerns.map((item, index) => (
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

      {/* 5. BESTSELLERS PRODUCT GRID */}
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
            <a href="#" className="hidden sm:flex items-center gap-2 font-extrabold text-xs text-[#F05030] hover:gap-3 transition-all uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md">
              VIEW ALL <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
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
                    <span className="text-xl font-black text-[#0E1A24]">₹{product.price}</span>
                    <span className="text-xs text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
                    <span className="block text-[9px] text-green-600 font-bold">Save ₹{product.originalPrice - product.price}</span>
                  </div>

                  <button 
                    onClick={() => setCartCount(cartCount + 1)}
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

      {/* 6. TRUST BADGES */}
      <section className="bg-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIxIiBmaWxsPSIjZTBkY2Q2IiBmaWxsLW9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
          {[
            { icon: <ShieldCheck size={36} />, title: "Dermatologist Tested", desc: "100% Safe For Indian Skin" },
            { icon: <Leaf size={36} />, title: "Clean & Cruelty Free", desc: "No Toxin & Paraben Free" },
            { icon: <Truck size={36} />, title: "Free Express Shipping", desc: "On All Orders Above ₹499" },
            { icon: <RefreshCw size={36} />, title: "Easy Returns", desc: "Hassle-Free 7 Days Policy" },
          ].map((item, index) => (
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

      {/* 7. FOOTER - Fixed with correct icon names */}
      <footer className="bg-gradient-to-b from-[#0E1A24] to-[#1a2a38] text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-700/50">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <p className="font-serif text-3xl font-black text-[#F05030] lowercase tracking-tight">SunSil</p>
              <p className="text-sm text-gray-400 max-w-xs">Skincare that works. Formulated with love for every skin type.</p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="p-2.5 bg-white/5 hover:bg-[#F05030]/20 rounded-full transition-all hover:scale-110">
                  <span className="text-gray-400 hover:text-[#F05030] transition-colors text-sm font-bold">IG</span>
                </a>
                <a href="#" className="p-2.5 bg-white/5 hover:bg-[#F05030]/20 rounded-full transition-all hover:scale-110">
                  <span className="text-gray-400 hover:text-[#F05030] transition-colors text-sm font-bold">YT</span>
                </a>
                <a href="#" className="p-2.5 bg-white/5 hover:bg-[#F05030]/20 rounded-full transition-all hover:scale-110">
                  <span className="text-gray-400 hover:text-[#F05030] transition-colors text-sm font-bold">FB</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Blog</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4">Customer Service</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Returns Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">Shipping Info</a></li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-4">Stay Connected</h4>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                <Mail size={16} className="text-[#F05030]" />
                <span>hello@SunSil.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Phone size={16} className="text-[#F05030]" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex mt-2">
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

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-gray-500">
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <CreditCard size={14} className="text-gray-400" />
                <span className="text-gray-400">Secure Payment</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock size={14} className="text-gray-400" />
                <span className="text-gray-400">SSL Encrypted</span>
              </div>
            </div>
            <p className="text-center">© 2026 SunSil Official. All rights reserved.</p>
          </div>

        </div>
      </footer>

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
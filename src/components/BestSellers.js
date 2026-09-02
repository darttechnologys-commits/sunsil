// // BestSellers.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import './BestSellers.css';

// const products = [
//   { 
//     id: 1,
//     name: 'Vitamin C Serum', 
//     price: '₹1,299', 
//     image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop',
//     badge: 'Bestseller',
//     rating: 4.9,
//     reviews: 128
//   },
//   { 
//     id: 2,
//     name: 'Hyaluronic Acid', 
//     price: '₹1,499', 
//     image: 'https://images.unsplash.com/photo-1620916566392-39f1143ab7be?w=400&h=400&fit=crop',
//     badge: 'Top Rated',
//     rating: 4.8,
//     reviews: 95
//   },
//   { 
//     id: 3,
//     name: 'Niacinamide Cream', 
//     price: '₹1,099', 
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
//     badge: 'New',
//     rating: 4.7,
//     reviews: 73
//   },
//   { 
//     id: 4,
//     name: 'Retinol Night Oil', 
//     price: '₹1,899', 
//     image: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=400&h=400&fit=crop',
//     badge: 'Limited',
//     rating: 4.9,
//     reviews: 56
//   },
// ];

// const BestSellers = () => {
//   const [visible, setVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="bestsellers">
//       <div className="container">
//         {/* Header */}
//         <div className={`header ${visible ? 'show' : ''}`}>
//           <span className="label">Shop Bestsellers</span>
//           <h2 className="title">Customer Favorites</h2>
//           <p className="desc">Our most-loved skincare essentials</p>
//         </div>

//         {/* Grid */}
//         <div className="grid">
//           {products.map((product, index) => (
//             <div 
//               key={product.id}
//               className={`card ${visible ? 'show' : ''}`}
//               style={{ transitionDelay: `${index * 80}ms` }}
//             >
//               <div className="image-wrap">
//                 <img src={product.image} alt={product.name} />
//                 <span className="badge">{product.badge}</span>
//               </div>
              
//               <div className="info">
//                 <h3 className="name">{product.name}</h3>
//                 <div className="rating">
//                   <span>★</span>
//                   <span>{product.rating}</span>
//                   <span className="reviews">({product.reviews})</span>
//                 </div>
//                 <div className="bottom">
//                   <span className="price">{product.price}</span>
//                   <button className="add-btn">Add</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className={`footer ${visible ? 'show' : ''}`}>
//           <button className="view-all">View All →</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSellers;



// import React, { useState, useEffect, useRef } from 'react';
// import './BestSellers.css';

// const products = [
//   { 
//     id: 1,
//     name: 'Glow Botanical Serum', 
//     price: '₹1,999', 
//     image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop',
//     tag: 'Best Seller'
//   },
//   { 
//     id: 2,
//     name: 'Hydra-Silk Cream', 
//     price: '₹2,299', 
//     image: 'https://images.unsplash.com/photo-1620916566392-39f1143ab7be?w=600&h=600&fit=crop',
//     tag: 'Top Rated'
//   },
//   { 
//     id: 3,
//     name: 'Radiance Elixir Oil', 
//     price: '₹1,799', 
//     image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop',
//     tag: 'New'
//   },
//   { 
//     id: 4,
//     name: 'Night Restoration Serum', 
//     price: '₹2,699', 
//     image: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=600&h=600&fit=crop',
//     tag: 'Limited'
//   },
// ];

// const BestSellers = () => {
//   const [visible, setVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="bestsellers-clean">
//       <div className="container-clean">
//         <div className={`header-clean ${visible ? 'is-visible' : ''}`}>
//           <span className="subtitle-clean">Curated Favorites</span>
//           <h2 className="title-clean">Our Iconic Products</h2>
//         </div>

//         <div className="product-grid">
//           {products.map((product, index) => (
//             <div 
//               key={product.id}
//               className={`product-card ${visible ? 'is-visible' : ''}`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               <div className="card-media">
//                 <img src={product.image} alt={product.name} />
//                 <span className="tag-pill">{product.tag}</span>
//                 <button className="add-to-cart-btn">+ Add to Bag</button>
//               </div>
              
//               <div className="card-info">
//                 <h3 className="product-name-clean">{product.name}</h3>
//                 <span className="product-price-clean">{product.price}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSellers;










// BestSellers.jsx - Complete Improved Version
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

const products = [
  { 
    id: 1,
    name: 'Glow Botanical Serum', 
    price: '₹1,999', 
    originalPrice: '₹2,499',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop',
    tag: 'Best Seller',
    tagColor: '#c59b27',
    rating: 4.9,
    reviews: 342,
    isNew: false,
    isLimited: false
  },
  { 
    id: 2,
    name: 'Hydra-Silk Cream', 
    price: '₹2,299', 
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1620916566392-39f1143ab7be?w=600&h=600&fit=crop',
    tag: 'Top Rated',
    tagColor: '#4A90D9',
    rating: 4.8,
    reviews: 281,
    isNew: false,
    isLimited: false
  },
  { 
    id: 3,
    name: 'Radiance Elixir Oil', 
    price: '₹1,799', 
    originalPrice: '₹2,199',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop',
    tag: 'New',
    tagColor: '#2ECC71',
    rating: 4.7,
    reviews: 156,
    isNew: true,
    isLimited: false
  },
  { 
    id: 4,
    name: 'Night Restoration Serum', 
    price: '₹2,699', 
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=600&h=600&fit=crop',
    tag: 'Limited',
    tagColor: '#E74C3C',
    rating: 4.9,
    reviews: 423,
    isNew: false,
    isLimited: true
  },
];

// Custom Hook for Intersection Observer
const useIntersectionObserver = (threshold = 0.15) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

// Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span 
          key={i} 
          className={`text-xs ${
            i < fullStars ? 'text-[#c59b27]' : 
            i === fullStars && hasHalfStar ? 'text-[#c59b27]' : 
            'text-gray-300'
          }`}
          aria-hidden="true"
        >
          {i < fullStars ? '★' : i === fullStars && hasHalfStar ? '★' : '☆'}
        </span>
      ))}
      <span className="text-xs font-medium text-gray-600 ml-1">({rating})</span>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = useCallback((e) => {
    e.stopPropagation();
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
    
    // Add to cart logic here
    console.log(`Added ${product.name} to cart`);
  }, [product]);

  return (
    <div 
      className={`product-card ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Product: ${product.name}`}
    >
      <div className="card-media">
        {/* Skeleton Loader */}
        {!imageLoaded && (
          <div className="skeleton-loader" />
        )}
        
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          className={`product-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop';
          }}
        />
        
        {/* Tags */}
        <div className="tag-container">
          <span 
            className="tag-pill"
            style={{ backgroundColor: product.tagColor }}
          >
            {product.tag}
          </span>
          
          {/* {product.isNew && (
            <span className="tag-pill tag-new">✨ New</span>
          )} */}
          
          {/* {product.isLimited && (
            <span className="tag-pill tag-limited">⚡ Limited</span>
          )} */}
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button 
            className="wishlist-btn"
            aria-label="Add to wishlist"
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          
          <button 
            className="quick-view-btn"
            aria-label="Quick view"
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>
        
        {/* Add to Cart Button */}
        <button 
          className={`add-to-cart-btn ${isAdded ? 'added' : ''} ${isHovered ? 'visible' : ''}`}
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
        >
          {isAdded ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Added!
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add to Bag
            </span>
          )}
        </button>
      </div>
      
      <div className="card-info">
        <div>
          <h3 className="product-name">{product.name}</h3>
          <StarRating rating={product.rating} />
        </div>
        <div className="price-container">
          <span className="product-price">{product.price}</span>
          {product.originalPrice && (
            <span className="original-price">{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

// Main BestSellers Component
const BestSellers = () => {
  const { ref, isVisible } = useIntersectionObserver(0.15);

  return (
    <section ref={ref} className="bestsellers-clean" aria-label="Best selling products">
      {/* Decorative Background Elements */}
      <div className="bg-decoration">
        <div className="circle circle-1" />
        <div className="circle circle-2" />
      </div>

      <div className="container-clean">
        {/* Header */}
        <div className={`header-clean ${isVisible ? 'is-visible' : ''}`}>
          <div className="header-badge">
            <span className="header-icon">✦</span>
            Curated Favorites
          </div>
          <h2 className="title-clean">
            Our <span className="highlight">Iconic</span> Products
          </h2>
          <p className="subtitle-clean">
            Discover our most loved skincare essentials, trusted by thousands for radiant results
          </p>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id}
              product={product}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className={`view-all-container ${isVisible ? 'is-visible' : ''}`}>
          <button className="view-all-btn">
            <span>View All Products</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        .bestsellers-clean {
          padding: 100px 20px;
          background: linear-gradient(180deg, #ffffff 0%, #fcfbfa 100%);
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .bestsellers-clean {
            padding: 100px 60px;
          }
        }

        .bg-decoration {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.05;
        }

        .circle-1 {
          width: 500px;
          height: 500px;
          background: #c59b27;
          top: -200px;
          right: -100px;
          animation: float 20s ease-in-out infinite;
        }

        .circle-2 {
          width: 300px;
          height: 300px;
          background: #c59b27;
          bottom: -100px;
          left: -50px;
          animation: float 25s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -30px); }
        }

        .container-clean {
          max-width: 1320px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header Styles */
        .header-clean {
          text-align: center;
          margin-bottom: 60px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header-clean.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(197, 155, 39, 0.1);
          border-radius: 20px;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c59b27;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .header-icon {
          animation: spin 4s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        .title-clean {
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

        .subtitle-clean {
          font-size: clamp(0.9rem, 1.2vw, 1.1rem);
          color: #6B6B6B;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Product Grid */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 30px;
        }

        @media (min-width: 640px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 35px;
          }
        }

        /* Product Card */
        .product-card {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .product-card:hover {
          transform: translateY(-8px);
        }

        .card-media {
          position: relative;
          aspect-ratio: 0.85;
          border-radius: 16px;
          overflow: hidden;
          background: #f5f3f0;
          cursor: pointer;
        }

        .skeleton-loader {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #f0edeb 25%, #e8e5e2 50%, #f0edeb 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
        }

        .product-image.loaded {
          opacity: 1;
        }

        .product-card:hover .product-image {
          transform: scale(1.08);
        }

        /* Tags */
        .tag-container {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .tag-pill {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.6rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
          color: #ffffff;
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          animation: fadeIn 0.5s ease-out;
        }

        .tag-new {
          background: #2ECC71;
        }

        .tag-limited {
          background: #E74C3C;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Quick Actions */
        .quick-actions {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
        }

        .product-card:hover .quick-actions {
          opacity: 1;
          transform: translateX(0);
        }

        .wishlist-btn,
        .quick-view-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #191817;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }

        .wishlist-btn:hover {
          background: #ffe8e8;
          color: #E74C3C;
          transform: scale(1.1);
        }

        .quick-view-btn:hover {
          background: #191817;
          color: #ffffff;
          transform: scale(1.1);
        }

        /* Add to Cart Button */
        .add-to-cart-btn {
          position: absolute;
          bottom: 14px;
          left: 14px;
          right: 14px;
          padding: 14px;
          background: #191817;
          color: #ffffff;
          border: none;
          border-radius: 30px;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          opacity: 0;
          transform: translateY(10px) scale(0.95);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 600;
        }

        .add-to-cart-btn.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .add-to-cart-btn:hover {
          background: #c59b27;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(197, 155, 39, 0.3);
        }

        .add-to-cart-btn.added {
          background: #2ECC71;
          transform: translateY(0) scale(1);
        }

        /* Card Info */
        .card-info {
          margin-top: 18px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .product-name {
          font-size: clamp(0.9rem, 1vw, 1rem);
          font-weight: 500;
          color: #191817;
          margin-bottom: 4px;
          transition: color 0.3s ease;
        }

        .product-card:hover .product-name {
          color: #c59b27;
        }

        .price-container {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
          flex-shrink: 0;
        }

        .product-price {
          font-size: clamp(0.9rem, 1vw, 1rem);
          font-weight: 700;
          color: #c59b27;
        }

        .original-price {
          font-size: 0.75rem;
          color: #999;
          text-decoration: line-through;
        }

        /* View All Button */
        .view-all-container {
          text-align: center;
          margin-top: 60px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.4s;
        }

        .view-all-container.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 40px;
          background: transparent;
          border: 2px solid #191817;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #191817;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-all-btn:hover {
          background: #191817;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(25, 24, 23, 0.15);
        }

        .view-all-btn:hover svg {
          transform: translateX(4px);
        }

        .view-all-btn svg {
          transition: transform 0.3s ease;
        }

        /* Responsive Adjustments */
        @media (max-width: 640px) {
          .bestsellers-clean {
            padding: 60px 16px;
          }

          .header-clean {
            margin-bottom: 40px;
          }

          .quick-actions {
            opacity: 1;
            transform: translateX(0);
          }

          .add-to-cart-btn {
            opacity: 1;
            transform: translateY(0);
            padding: 12px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default BestSellers;
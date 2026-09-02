// export default function Newsletter() {
//   return (
//     <section className="py-20 px-4 bg-gradient-to-r from-skin-100 to-skin-200">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-3xl font-serif font-bold">Get 15% Off Your First Order</h2>
//         <p className="text-gray-600 mt-2">Subscribe to receive skincare tips & exclusive offers</p>

//         <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="flex-1 px-5 py-3 rounded-full border-0 shadow-sm focus:ring-2 focus:ring-skin-400 outline-none"
//           />
//           <button className="bg-skin-500 hover:bg-skin-600 text-white px-6 py-3 rounded-full font-medium transition shadow-lg shadow-skin-500/30">
//             Subscribe
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-[#ffffff] to-[#fcfbfa] overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#c59b27]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#c59b27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Badge Background */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c59b27]/10 text-[#c59b27] text-[11px] font-semibold tracking-widest uppercase mb-6">
          <span>✦</span> Exclusive VIP Access
        </div>

        {/* Text Titles & Gradient Highlights */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#191817] tracking-tight mb-4">
          Get <span className="bg-gradient-to-r from-[#c59b27] to-[#a67c1e] bg-clip-text text-transparent">15% Off</span> Your First Order
        </h2>
        <p className="text-[#6B6B6B] text-base md:text-lg max-w-lg mx-auto font-light leading-relaxed mb-10">
          Subscribe to receive luxury skincare tips, early access to new launches, and secret offers directly to your inbox.
        </p>

        {/* Form Container */}
        <div className="max-w-md mx-auto">
          {isSubscribed ? (
            <div className="p-4 rounded-full bg-[#c59b27]/10 border border-[#c59b27]/30 text-[#c59b27] flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-medium">Thank you! Check your inbox for your 15% discount code.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-3 p-1.5 rounded-full bg-white border border-[#f5f3f0] shadow-xl shadow-[#191817]/5 focus-within:border-[#c59b27] transition-all duration-300">
              <div className="relative flex-1 flex items-center pl-5">
                <Mail className="w-5 h-5 text-[#c59b27] shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full bg-transparent px-3 py-3 text-sm text-[#191817] placeholder-gray-400 outline-none"
                />
              </div>

              {/* Hover State Button: Black (#191817) to Gold (#c59b27) Switch */}
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#191817] hover:bg-[#c59b27] text-white font-medium text-xs tracking-widest uppercase shadow-md hover:shadow-lg hover:shadow-[#c59b27]/30 transition-all duration-300"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          )}
        </div>

        <p className="text-xs text-[#999999] mt-4 font-light">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
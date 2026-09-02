import { ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-serif font-bold text-skin-700">
              Glow<span className="text-skin-400">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <a href="#" className="hover:text-skin-600 transition">Shop</a>
            <a href="#" className="hover:text-skin-600 transition">Collections</a>
            <a href="#" className="hover:text-skin-600 transition">Routine</a>
            <a href="#" className="hover:text-skin-600 transition">About</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-skin-600 transition">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="md:hidden text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
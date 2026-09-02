export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl">Glow.</h3>
            <p className="text-gray-400 text-sm mt-2">Premium skincare for your daily glow</p>
          </div>
          <div>
            <h4 className="font-semibold">Shop</h4>
            <ul className="mt-2 space-y-1 text-gray-400 text-sm">
              <li>Serums</li>
              <li>Moisturizers</li>
              <li>Cleansers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 space-y-1 text-gray-400 text-sm">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-2 space-y-1 text-gray-400 text-sm">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2026 Glow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
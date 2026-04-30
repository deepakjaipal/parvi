import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0045b1] text-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Branding & Description */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-1">
              <img src="./src/assets/logo-new-white-156w.webp" alt="RV Help Logo" className="w-26 h-26 " />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              The #1 platform for RV owners to find trusted, vetted technicians and inspectors across North America. Travel with confidence knowing help is just a click away.
            </p>
            <div className="flex gap-4 mt-2">
              {/* Social Media Placeholders */}
              <a href="#" className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0045b1] hover:bg-[#0045b1] hover:text-white transition-all">f</a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0045b1] hover:bg-[#0045b1] hover:text-white transition-all">𝕏</a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0045b1] hover:bg-[#0045b1] hover:text-white transition-all">ig</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-white">
              <li><Link to="/" className="hover:text-[#f3a847] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#f3a847] transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-[#f3a847] transition-colors">Latest News</Link></li>
              <li><Link to="/contact" className="hover:text-[#f3a847] transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-white mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-white">
              <li><Link to="/technicians" className="hover:text-[#f3a847] transition-colors">Find a Technician</Link></li>
              <li><Link to="/inspectors" className="hover:text-[#f3a847] transition-colors">Find an Inspector</Link></li>
              <li><Link to="/upgrade" className="hover:text-[#f3a847] transition-colors">RV Help Pro</Link></li>
              <li><Link to="/certification" className="hover:text-[#f3a847] transition-colors">Provider Certification</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-6">Stay Updated</h4>
            <p className="text-sm text-gray-300 mb-4">Get the latest RV maintenance tips delivered to your inbox.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#0045b1]"
              />
              <button className="bg-[#0045b1] text-white py-2 rounded-lg text-sm font-bold hover:bg-[#00368a] transition-all">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <p>© 2026 professionalassociationofrvinspectors.com. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gray-600">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-600">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-gray-600">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
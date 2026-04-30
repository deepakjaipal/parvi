import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full font-sans">
      {/* Top Announcement Bar - Hidden on extra small screens if text is too long */}
      <div className="bg-[#0045b1] text-white border-b py-2 px-4 flex flex-col sm:flex-row justify-center items-center gap-3 text-xs md:text-sm font-medium">
        <span className="text-center">Get RV tips, maintenance guides, and provider discounts in your inbox.</span>
        <div className="flex items-center gap-3">
          <button className="bg-white text-[#0045b1] px-3 py-1 rounded-md hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
          <button className="hover:opacity-80">✕</button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#0045b1] text-white border-b px-4 md:px-8 py-4 flex justify-between items-center relative">

        {/* Left Section: Logo & Desktop Nav */}
        <div className="flex items-center gap-4 lg:gap-8">
          <Link to="/" className="flex items-center gap-1 shrink-0">
            <img src="../assets/logo-new-white-156w.webp" alt="RV Help Logo" className="w-26 h-26 " />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-white font-medium text-sm">
            <Link to="/technicians" className="hover:text-[#ffffff80]">Find A Technician</Link>
            <Link to="/inspectors" className="hover:text-[#ffffff80]">Find An Inspector</Link>
            <Link
              to="/upgrade"
              className="bg-[#0045b1] text-white px-4 py-2 rounded-lg hover:bg-[#00368a]"
            >
              Upgrade To Pro
            </Link>
          </nav>
        </div>

        {/* Right Section: Desktop Auth & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:flex items-center gap-2 md:gap-4">
            <Link
              to="/register"
              className="text-[#0045b1] border border-[#0045b1] px-4 md:px-6 py-2 rounded-lg font-bold hover:bg-blue-50"
            >
              Register
            </Link>
            <Link
              to="/signin"
              className="bg-[#0045b1] text-white px-4 md:px-6 py-2 rounded-lg font-bold hover:bg-[#00368a]"
            >
              Sign in
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white rounded-md hover:bg-white/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-b lg:hidden z-50 flex flex-col p-4 gap-4 animate-in slide-in-from-top">
            <Link to="/technicians" className="text-gray-600 font-medium border-b pb-2">Find A Technician</Link>
            <Link to="/inspectors" className="text-gray-600 font-medium border-b pb-2">Find An Inspector</Link>
            <Link to="/upgrade" className="text-[#0045b1] font-bold">Upgrade To Pro</Link>
            <div className="flex flex-col gap-2 pt-2 sm:hidden">
              <Link to="/register" className="w-full text-center py-2 border border-[#0045b1] text-[#0045b1] rounded-lg">Register</Link>
              <Link to="/signin" className="w-full text-center py-2 bg-[#0045b1] text-white rounded-lg">Sign in</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
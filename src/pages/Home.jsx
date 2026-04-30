import { Link } from "react-router-dom";
import Services from "../components/Services";
import Spotlight from "../components/Spotlight";
import HomeSections from "../components/HomeSections";

export default function Home() {
  return (
    <>
    <section className="relative w-full min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('../assets/R(4)-1920w.webp')`, // Placeholder RV image
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">

        {/* Status Tag */}
        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-white/20 mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-medium uppercase tracking-wider">Nationwide Coverage</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-2xl">
          Launch Your Career as a <br />
          <span className="text-[#f3a847]">Certified RV Inspector.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
            Join the Professional Association of RV Inspectors (PARVI). Master the skills to conduct thorough, unbiased inspections.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/technicians"
            className="bg-[#f3a847] hover:bg-[#e29736] text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
          >
            <span className="text-xl"></span> Find a Technician
          </Link>
          <Link
            to="/inspectors"
            className="bg-[#0045b1] hover:bg-[#00368a] text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all border border-blue-400/30"
          >
            <span className="text-xl"></span> Find an Inspector
          </Link>
        </div>

        {/* Trust Pilot / Social Proof */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex -space-x-3">
             {[1,2,3,4].map((i) => (
               <img
                 key={i}
                 className="w-10 h-10 rounded-full border-2 border-white object-cover"
                 src={`https://i.pravatar.cc/100?u=${i}`}
                 alt="User"
               />
             ))}
          </div>
          <p className="text-sm text-gray-300 font-medium">
            <span className="text-white font-bold">2500+</span> vetted professionals nationwide
          </p>
        </div>
      </div>
    </section>

    <Services />
    <Spotlight />
    <HomeSections   />
    </>
  );
}
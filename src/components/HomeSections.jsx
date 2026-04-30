import { Link } from "react-router-dom";

export default function HomeSections() {
  return (
    <div className="flex flex-col w-full">

      {/* 1. Nationwide Coverage (Map Section) */}
      <section className="py-40 bg-white text-center">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-[#0045b1] mb-4">Nationwide Coverage</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our network of credential-vetted RV technicians and inspectors spans across North America,
            ensuring you can get help wherever your journey takes you.
          </p>
          <div className="relative rounded-3xl overflow-hidden border shadow-lg max-w-5xl mx-auto">
            <img src="https://images.unsplash.com/photo-1581922814484-0b48460b7010?auto=format&fit=crop&q=80&w=1200" alt="Map" className="w-full h-[400px] object-cover opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center gap-4">
              <button className="bg-[#f3a847] text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-[#e29736]">Find A Tech</button>
              <button className="bg-white text-[#0045b1] px-6 py-3 rounded-lg font-bold shadow-lg border border-[#0045b1] hover:bg-gray-50">Find An Inspector</button>
            </div>
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-md border text-left">
              <span className="text-2xl font-bold text-[#0045b1]">2,500+</span>
              <p className="text-xs text-gray-500">Certified Service Providers<br/>Across All States</p>
            </div>
          </div>
        </div>
      </section>
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0045b1] mb-6">
          Founded by Inspectors, <br/> For Inspectors.
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          PARVI prioritizes the unique needs of professional RV inspectors. Unlike other organizations, we ensure you maintain credentials without unnecessary expense or time spent on repair-focused workshops.
        </p>
        <ul className="space-y-4">
          {["Unbiased & Professional Standards", "Business Foundation Training", "Blended Online & Field Learning"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
              <span className="text-[#0045b1]">✔</span> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <h3 className="text-xl font-bold text-[#0045b1] mb-2">Phase 1</h3>
          <p className="text-sm text-gray-500">Online Home Study & Narrated Coursework</p>
        </div>
        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <h3 className="text-xl font-bold text-[#0045b1] mb-2">Phase 2</h3>
          <p className="text-sm text-gray-500">Field Practicum & Certification Exam</p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* 2. Why Choose RV Help */}
     <section className="py-20 bg-gray-50 text-center">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-[#0045b1] mb-16">The PARVI Advantage</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {[
        { title: "High Earning Potential", desc: "Inspectors typically charge $750–$1,500+ per unit.", icon: "💰" },
        { title: "Blended Learning", desc: "Online theory combined with vital field experience.", icon: "💻" },
        { title: "No Travel Required", desc: "Complete Phase 1 from home without taking time off.", icon: "🏠" },
        { title: "Business Support", desc: "Learn to build a sustainable independent career.", icon: "📈" }
      ].map((item, i) => (
        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <span className="text-4xl mb-4 block">{item.icon}</span>
          <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 3. Partnered Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl bg-[#0045b1] rounded-3xl p-10 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">RV Help is Partnered with NRVIA & RVTAA</h2>
          <p className="text-blue-100 mb-10 text-sm">We've partnered with the top RV technician and inspector associations in North America.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-left">
              <h4 className="font-bold text-xl mb-2">RV Technicians Association</h4>
              <p className="text-xs text-blue-50 leading-relaxed">RV Help is a proud partner of the RVTAA, America's largest hands-on training academy for technicians.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-left">
              <h4 className="font-bold text-xl mb-2">National RV Inspectors Association</h4>
              <p className="text-xs text-blue-50 leading-relaxed">Proud partnership with NRVIA.org, guaranteeing professional and thorough RV inspections.</p>
            </div>
          </div>
          <Link to="/certification" className="inline-block mt-8 text-sm underline hover:text-blue-200">Learn about certification levels &gt;</Link>
        </div>
      </section>

      {/* 4. Final CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <div className="bg-blue-50 inline-block px-4 py-1 rounded-full text-[#0045b1] text-xs font-bold mb-6">● 2500+ Vetted Providers</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get <span className="text-[#0045b1]">Started?</span></h2>
          <p className="text-gray-500 mb-10">Work with trusted RV service professionals today and travel with confidence.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#f3a847] text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2">
              🔍 Find a Technician
            </button>
            <button className="bg-[#4a7c59] text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2">
              🔧 Find an Inspector
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?u=${i+10}`} alt="user"/>)}
            </div>
            <p className="text-xs text-gray-400">Join 10,000+ RV owners who trust our service</p>
          </div>
        </div>
      </section>

    </div>
  );
}
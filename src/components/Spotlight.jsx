import { Link } from "react-router-dom";

export default function Spotlight() {
  return (
    <section className="bg-[#0045b1] py-16 px-6">
      <div className="container mx-auto max-w-5xl text-center text-white">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Member Success Spotlight</h2>
        <p className="text-blue-100 mb-12">
          Real stories from professionals who launched successful careers through PARVI certification.
        </p>

        {/* Spotlight Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 text-left shadow-2xl">

          {/* Left: Image Side */}
          <div className="relative w-full md:w-2/5">
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
                alt="Member Spotlight"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Badge Overlay */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#f3a847] text-white px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap shadow-lg">
              Certified RV Inspector (CRVI)
            </div>
          </div>

          {/* Right: Content Side */}
          <div className="w-full md:w-3/5 pt-6 md:pt-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Building a Six-Figure Inspection Business: How Mark Transformed His Career
            </h3>

            <div className="flex items-center gap-2 text-[#0045b1] font-medium my-4 text-sm">
              <span>🎓</span>
              <span>PARVI Class of 2024</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              After 15 years in corporate management, Mark sought a career with more freedom.
              Through PARVI’s blended learning program, he mastered technical systems and
              business foundations. Today, he runs a thriving independent inspection firm
              charging premium rates for his expert CRVI credentials.
            </p>

            <Link
              to="/stories/member-success"
              className="inline-block bg-[#0045b1] hover:bg-[#00368a] text-white px-8 py-3 rounded-lg font-bold transition-all shadow-md"
            >
              Read Mark's Journey
            </Link>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 text-blue-100">
          <p className="font-semibold mb-2 text-white">Are you ready to be our next success story?</p>
          <p className="text-sm">Join a community of elite inspectors and start your certification today.</p>
        </div>
      </div>
    </section>
  );
}
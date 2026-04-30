export default function Services() {
  const services = [
    {
      title: "Comprehensive Certification",
      desc: "Our two-phase program combines home-study theory with hands-on field practicums to award the CRVI credential.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Unbiased Standards",
      desc: "We teach inspectors to prioritize the client's needs by focusing solely on thorough, professional inspections.",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Business Foundations",
      desc: "Beyond technical skills, we provide the tools and training needed to launch and sustain a successful inspection business.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0045b1] leading-snug">
            Professional Certification and Support for the Next Generation of RV Inspectors.
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            PARVI provides the education and credentials necessary to excel in the growing RV inspection industry through flexible, expert-led training.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-[#0045b1]">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
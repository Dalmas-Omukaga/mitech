import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12 pb-20 bg-white text-gray-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <span>Center of Excellence in Home Efficiency</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 max-w-4xl mx-auto leading-tight">
            Tailored solutions that transform your living standards
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
            We examine, evaluate, and determine the challenges faced at home for better living. Operating across 9 counties with our HQ in Kakamega.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg transition-all duration-200"
            >
              Request Home Evaluation
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 border-2 border-gray-300 font-bold text-base px-8 py-4 rounded-full shadow-sm transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>

        </div>
      </section>

      {/* 2. CORE SERVICES GRID (4 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Core Services</h2>
          <p className="mt-4 text-gray-700 font-medium">
            Comprehensive, professional services designed to optimize your home ecosystem from every angle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aquaplus Solutions</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                Advanced water management and purification solutions ensuring clean, safe, and efficient water flow for your household.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link href="/services" className="text-sm font-bold text-blue-600 hover:underline">
                Learn more &rarr;
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Virtual Assistance</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                Reliable remote support and automated household management coordination to keep your daily routines running effortlessly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link href="/services" className="text-sm font-bold text-blue-600 hover:underline">
                Learn more &rarr;
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultancy</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                Expert advisory services evaluating home setups, efficiency audits, and customized improvement strategies.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link href="/services" className="text-sm font-bold text-blue-600 hover:underline">
                Learn more &rarr;
              </Link>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg mb-6">
                04
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tech Support</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                On-demand troubleshooting, smart home installations, networking setup, and hardware maintenance for modern residences.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link href="/services" className="text-sm font-bold text-blue-600 hover:underline">
                Learn more &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OPERATIONAL FOOTPRINT SECTION */}
      <section className="bg-gray-900 text-white py-16 my-10 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-white">Our Operational Footprint</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 font-medium">
            Headquartered in Kakamega Central CBD, we proudly deliver excellence across 9 counties in Kenya.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['Kakamega (HQ)', 'Bungoma', 'Kisumu', 'Busia', 'Eldoret', 'Kitale', 'Vihiga', 'Siaya', 'Nairobi'].map((county) => (
              <span key={county} className="bg-gray-800 text-gray-100 px-5 py-2.5 rounded-full text-sm font-semibold border border-gray-700 shadow-sm">
                {county}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-blue-50 rounded-3xl p-12 border border-blue-200 shadow-sm">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
          Ready to experience better living?
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8 font-medium">
          Let our experts examine and evaluate your home challenges today. Get in touch with our team or schedule an evaluation right now.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-10 py-4 rounded-full shadow-lg transition-all duration-200"
        >
          Get Started Now
        </Link>
      </section>

    </div>
  );
}
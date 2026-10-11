import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white py-16 space-y-20 text-gray-900">
      
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
          <span>About Mitech Home Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 max-w-3xl mx-auto leading-tight">
          Dedicated to a <span className="text-blue-600">better living standard</span> through expert analysis.
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
          Headquartered in Kakamega Central CBD, Mitech Home Solutions is driven by a deep commitment to identifying, evaluating, and resolving household challenges across Kenya.
        </p>
      </section>

      {/* 2. Vision & Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Vision Card */}
          <div className="bg-white border-2 border-gray-200 p-10 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl mb-6">
                V
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-800 text-lg leading-relaxed font-semibold">
                &ldquo;To be a center of excellence in providing tailored solutions to clients.&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600 font-medium">
              Setting the standard for modern home efficiency and professional reliability.
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gray-800 text-blue-400 flex items-center justify-center font-bold text-xl mb-6 border border-gray-700">
                M
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-200 text-lg leading-relaxed font-semibold">
                &ldquo;Examine, evaluate and determine the challenges faced at home for better living.&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-800 text-sm text-gray-400 font-medium">
              Guiding every assessment, technical setup, and client consultation we deliver.
            </div>
          </div>

        </div>
      </section>

      {/* 3. Operational Presence */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-3xl p-12 border border-gray-200 text-center shadow-sm">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Where We Operate</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8 font-medium">
          From our headquarters in Kakamega Central CBD, our technical teams coordinate across 9 counties to provide rapid, reliable service.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {['Kakamega (HQ)', 'Bungoma', 'Kisumu', 'Busia', 'Eldoret', 'Kitale', 'Vihiga', 'Siaya', 'Nairobi'].map((county) => (
            <span key={county} className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm border border-gray-300">
              {county}
            </span>
          ))}
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Experience the Mitech Difference</h2>
        <p className="text-gray-700 mb-8 font-medium">Let our specialists evaluate your home ecosystem today.</p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-10 py-4 rounded-full shadow-lg transition-all duration-200"
        >
          Request an Evaluation
        </Link>
      </section>

    </div>
  );
}
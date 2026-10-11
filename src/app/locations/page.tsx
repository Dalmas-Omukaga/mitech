import Link from 'next/link';

export default function LocationsPage() {
  const counties = [
    { name: 'Kakamega', role: 'Headquarters (Kakamega Central CBD)', highlight: true },
    { name: 'Bungoma', role: 'Regional Operation Hub', highlight: false },
    { name: 'Kisumu', role: 'Regional Operation Hub', highlight: false },
    { name: 'Busia', role: 'Regional Operation Hub', highlight: false },
    { name: 'Eldoret', role: 'Regional Operation Hub', highlight: false },
    { name: 'Kitale', role: 'Regional Operation Hub', highlight: false },
    { name: 'Vihiga', role: 'Regional Operation Hub', highlight: false },
    { name: 'Siaya', role: 'Regional Operation Hub', highlight: false },
    { name: 'Nairobi', role: 'Regional Operation Hub', highlight: false },
  ];

  return (
    <div className="bg-white py-16 space-y-16 text-gray-900">
      
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
          <span>Operational Footprint</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 max-w-3xl mx-auto leading-tight">
          Serving homes across <span className="text-blue-600">9 key counties</span> in Kenya.
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
          Driven from our central command in Kakamega, our technical teams and consultants are positioned to deliver prompt, reliable service across the region.
        </p>
      </section>

      {/* 2. Headquarters Highlight Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-lg border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <span className="bg-blue-600 text-white text-xs font-bold uppercase px-3.5 py-1.5 rounded-full tracking-wider shadow-sm">
              Main Headquarters
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Kakamega Central CBD</h2>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Kakamega Town — the central hub for our administrative management, consultancy coordination, and technical dispatch operations.
            </p>
            <div className="pt-2 text-sm">
              <p className="text-gray-400 font-medium">Direct Contact Line:</p>
              <p className="text-blue-400 font-bold text-lg mt-0.5">+254 797 345 930</p>
            </div>
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md transition-all duration-200"
            >
              Contact HQ Team
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Counties Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Counties in Operation</h2>
          <p className="mt-2 text-gray-700 font-medium">Where our home efficiency solutions are actively deployed.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {counties.map((county) => (
            <div 
              key={county.name}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between shadow-sm ${
                county.highlight 
                  ? 'bg-blue-50/70 border-blue-300' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{county.name}</h3>
                  {county.highlight && (
                    <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-bold shadow-sm">
                      HQ
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-700 font-medium">{county.role}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-600 font-semibold">
                <span>Status: Active</span>
                <Link href="/contact" className="text-blue-600 hover:underline">
                  Request service &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-50 rounded-3xl p-12 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Need assistance in your county?</h2>
        <p className="text-gray-700 mb-8 font-medium">Fill out our evaluation form to connect with our operations team near you.</p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-10 py-4 rounded-full shadow-lg transition-all duration-200"
        >
          Get Home Evaluation
        </Link>
      </section>

    </div>
  );
}
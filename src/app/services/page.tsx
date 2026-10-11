'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Service {
  title: string;
  slug: string;
  number: string;
  description: string;
  longDescription: string;
  features: string[];
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: 'Aquaplus Solutions',
      slug: 'aquaplus',
      number: '01',
      description: 'Advanced water management, filtration, and purification systems designed to ensure clean, safe, and efficient water flow throughout your home.',
      longDescription: 'Clean, safe, and efficient water management is essential for a healthy home. Our Aquaplus solutions focus on examining water quality, optimizing flow, and deploying advanced purification systems tailored specifically to your household needs.',
      features: ['Source & quality examination', 'Purification system installation', 'Pressure regulation & maintenance']
    },
    {
      title: 'Home Virtual Assistance',
      slug: 'virtual-assistance',
      number: '02',
      description: 'Reliable remote support and automated household management coordination to keep your daily family and residential routines running effortlessly.',
      longDescription: 'Manage your household effortlessly with professional remote coordination. We handle scheduling, home vendor management, and digital household organization so you can focus on what matters most.',
      features: ['Remote schedule coordination', 'Vendor & repair booking management', 'Family logistics & organization']
    },
    {
      title: 'Consultancy',
      slug: 'consultancy',
      number: '03',
      description: 'Expert advisory audits rooted in our mission to examine, evaluate, and determine home challenges, providing customized roadmaps for better living.',
      longDescription: 'Living up to our mission to examine, evaluate, and determine home challenges, our consultancy service provides expert advisory audits for home improvements, energy efficiency, and layout upgrades.',
      features: ['In-depth home efficiency audits', 'Customized improvement strategies', 'Professional diagnostic reports']
    },
    {
      title: 'Tech Support',
      slug: 'tech-support',
      number: '04',
      description: 'On-demand technical troubleshooting, robust Wi-Fi networking, smart home automation setups, and hardware maintenance for modern residences.',
      longDescription: 'Modern homes rely heavily on technology. From high-speed Wi-Fi networking and smart home automation to hardware troubleshooting, our technical team ensures your residential tech runs seamlessly.',
      features: ['Home Wi-Fi & network setup', 'Smart home device integration', 'On-demand hardware troubleshooting']
    },
  ];

  return (
    <div className="relative bg-white py-16 text-gray-900">
      
      {/* Main Content (Blurs when modal is open) */}
      <div className={`space-y-16 transition-all duration-300 ${selectedService ? 'filter blur-sm pointer-events-none select-none' : ''}`}>
        
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-mitech-blue text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <span>Our Expertise</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 max-w-3xl mx-auto leading-tight">
            Comprehensive Services for <span className="text-mitech-blue">Better Living</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We examine, evaluate, and determine the challenges faced at home through our four core pillars. Click any service card below to open its layered detail view.
          </p>
        </section>

        {/* Clickable Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.slug}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer bg-white border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-sm hover:border-mitech-blue hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-mitech-blue flex items-center justify-center font-bold text-lg group-hover:bg-mitech-blue group-hover:text-white transition-colors">
                      {service.number}
                    </div>
                    <span className="text-sm font-semibold text-mitech-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Quick View &rarr;
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-mitech-blue transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Key Focus Areas:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-mitech-blue"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 flex items-center justify-between text-xs text-gray-500 font-medium border-t border-gray-100">
                  <span>Available across 9 counties</span>
                  <span className="text-mitech-blue font-semibold">Click to expand</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-50 rounded-3xl p-12 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Unsure which service your home needs?</h2>
          <p className="text-gray-600 mb-8">Let our specialists examine and evaluate your specific challenge today.</p>
         <Link
              href="/contact"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg transition-all duration-200"
            >
              Request Home Evaluation
            </Link>
        </section>

      </div>

      {/* Layered Modal View */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 sm:p-10 shadow-2xl border border-gray-100 relative space-y-6 text-gray-900">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-mitech-blue bg-blue-50 px-3 py-1 rounded-full">
                Service {selectedService.number}
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-3">
                {selectedService.title}
              </h2>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              {selectedService.longDescription}
            </p>

            <div className="space-y-3 bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">What We Deliver:</h4>
              <ul className="space-y-2">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-mitech-blue"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto text-center bg-mitech-blue hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-full shadow-md transition-colors"
              >
                Request This Service
              </Link>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto text-center bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium px-6 py-3.5 rounded-full transition-colors"
              >
                Back to Services
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
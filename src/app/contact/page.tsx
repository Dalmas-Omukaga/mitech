'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meaekbel';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was a problem submitting the form. Please try again.');
      }
    } catch {
      alert('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white py-16 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Request a Home <span className="text-blue-600">Evaluation</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 font-medium">
            Fill out the form below or reach out instantly via WhatsApp, phone call, or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info Sidebar with Quick Actions */}
          <div className="lg:col-span-1 bg-gray-900 text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 font-medium">
                Connect with our Kakamega HQ team instantly using your preferred channel below.
              </p>

              <div className="space-y-6 text-sm">
                <div>
                  <p className="text-gray-400 font-semibold">Headquarters</p>
                  <p className="text-white font-bold mt-1">Kakamega Central CBD, Kakamega Town</p>
                </div>

                {/* Direct Action Links */}
                <div className="space-y-3 pt-2">
                  {/* Phone Call Link */}
                  <a 
                    href="tel:+254797345930" 
                    className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 p-3.5 rounded-xl transition-colors border border-gray-700 shadow-sm"
                  >
                    <span className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">📞</span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Call Us Directly</p>
                      <p className="text-white font-bold">+254 797 345 930</p>
                    </div>
                  </a>

                  {/* WhatsApp Link */}
                  <a 
                    href="https://wa.me/254797345930?text=Hello%20Mitech%20Home%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20services." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 p-3.5 rounded-xl transition-colors border border-gray-700 shadow-sm"
                  >
                    <span className="w-9 h-9 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center font-bold">💬</span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Chat on WhatsApp</p>
                      <p className="text-white font-bold">+254 797 345 930</p>
                    </div>
                  </a>

                  {/* Email Link */}
                  <a 
                    href="mailto:info@mitechsolutions.com?subject=Home%20Evaluation%20Inquiry" 
                    className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 p-3.5 rounded-xl transition-colors border border-gray-700 shadow-sm"
                  >
                    <span className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">✉️</span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Send an Email</p>
                      <p className="text-white font-bold truncate max-w-[180px]">info@mitechsolutions.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800 text-xs text-gray-400 font-medium">
              <p>Mission: Examine, evaluate and determine the challenges faced at home for better living.</p>
            </div>
          </div>

          {/* Form Container */}
          <div className="lg:col-span-2 bg-white border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-sm">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-sm">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Evaluation Request Received!</h3>
                <p className="text-gray-700 max-w-md mx-auto font-medium">
                  Thank you for reaching out. Our team will examine your submission and contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-full text-sm shadow-md hover:bg-blue-700 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none bg-white text-gray-900 font-medium text-sm shadow-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none bg-white text-gray-900 font-medium text-sm shadow-sm"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="county" className="block text-sm font-bold text-gray-900 mb-2">County *</label>
                    <select
                      id="county"
                      name="county"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none bg-white text-gray-900 font-medium text-sm shadow-sm"
                    >
                      <option value="">Select your county</option>
                      <option value="Kakamega">Kakamega (HQ)</option>
                      <option value="Bungoma">Bungoma</option>
                      <option value="Kisumu">Kisumu</option>
                      <option value="Busia">Busia</option>
                      <option value="Eldoret">Eldoret</option>
                      <option value="Kitale">Kitale</option>
                      <option value="Vihiga">Vihiga</option>
                      <option value="Siaya">Siaya</option>
                      <option value="Nairobi">Nairobi</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-gray-900 mb-2">Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none bg-white text-gray-900 font-medium text-sm shadow-sm"
                    >
                      <option value="">Select a core service</option>
                      <option value="Aquaplus Solutions">Aquaplus Solutions</option>
                      <option value="Home Virtual Assistance">Home Virtual Assistance</option>
                      <option value="Consultancy">Consultancy</option>
                      <option value="Tech Support">Tech Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">Describe Your Home Challenge *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none bg-white text-gray-900 font-medium text-sm shadow-sm"
                    placeholder="Tell us what you would like us to examine and evaluate..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-200 text-base disabled:opacity-50"
                >
                  {loading ? 'Submitting Request...' : 'Submit Evaluation Request'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
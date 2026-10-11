import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Mission */}
          <div className="space-y-2 md:col-span-1">
            <h3 className="text-lg font-extrabold tracking-wide text-white">
              MITECH <span className="text-blue-500">HOME SOLUTIONS</span>
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed font-medium">
              Examine, evaluate, and determine home challenges for better living.
            </p>
            <div className="text-xs text-gray-200 pt-1 space-y-0.5">
              <p><strong className="text-white">HQ:</strong> Kakamega Central CBD</p>
              <p><strong className="text-white">Contact:</strong> <span className="text-blue-400 font-semibold">+254 797 345 930</span></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Quick Links</h4>
            <ul className="space-y-1.5 text-xs font-medium text-gray-300">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Core Services</Link></li>
              <li><Link href="/locations" className="hover:text-blue-400 transition-colors">Counties Served</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Evaluation Form</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Our Services</h4>
            <ul className="space-y-1.5 text-xs font-medium text-gray-300">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Aquaplus Solutions</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Virtual Assistance</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Consultancy</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Tech Support</Link></li>
            </ul>
          </div>

          {/* Operational Footprint */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Counties in Operation</h4>
            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              Kakamega, Bungoma, Kisumu, Busia, Eldoret, Kitale, Vihiga, Siaya, and Nairobi.
            </p>
          </div>
        </div>

        {/* Bottom Bar with Synthropy Systems Credit */}
        <div className="border-t border-gray-800 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-medium">
          <p>&copy; 2026 Mitech Home Solutions. All rights reserved.</p>
          <p className="mt-1 sm:mt-0">
            Designed & Developed by <span className="text-gray-200 font-bold">Synthropy Systems</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
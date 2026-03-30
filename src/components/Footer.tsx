import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-serif font-bold mb-4">Dr. Patwa Skin Care & Hair Clinic</h3>
          <p className="text-sm opacity-90 leading-relaxed">
            Trusted dermatology clinic in Prayagraj offering advanced skin and hair treatments with 13+ years of medical expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              { to: '/about', label: 'About Dr. Patwa' },
              { to: '/services', label: 'Our Services' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/blog', label: 'Health Tips' },
              { to: '/contact', label: 'Book Appointment' },
            ].map(l => (
              <li key={l.to}>
                <Link to={l.to} className="hover:opacity-100 transition-opacity">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact – NAP */}
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>117/93-D/4, LIC Road, Near Kali Mandir, Tagore Town, Prayagraj, UP 211002</span>
            </li>
            <li className="flex gap-2 items-center">
              <Phone className="w-4 h-4 shrink-0" />
              <a href="tel:+919560294926" className="hover:underline">+91 95602 94926</a>
            </li>
            <li className="flex gap-2">
              <Clock className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p>Mon–Sat: 8:00–9:00 AM</p>
                <p>Mon–Sat: 3:30–9:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </li>
          </ul>
          <a
            href="https://maps.google.com/?q=Dr+Patwa+Skin+Care+Hair+Clinic+Prayagraj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-3 text-sm font-medium underline hover:opacity-80"
          >
            <ExternalLink className="w-3 h-3" /> Get Directions
          </a>
        </div>

        {/* Areas Served */}
        <div>
          <h4 className="font-semibold mb-4">Areas We Serve</h4>
          <p className="text-sm opacity-90 leading-relaxed">
            Serving patients in Prayagraj, Allahabad, Tagore Town, Naini, Jhunsi, Civil Lines, Mumfordganj, Georgetown, and surrounding areas.
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Dr. Patwa Skin Care & Hair Clinic, Prayagraj. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

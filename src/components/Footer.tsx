import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ExternalLink, Mail, Facebook } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const MAPS_DIRECTIONS = "https://www.google.com/maps/place/Dr.+Patwa+skin+hair+laser+and+aesthetic+clinic/@25.456863,81.86506,17z/data=!4m6!3m5!1s0x399acbf1512e89df:0x435589b29b444712!8m2!3d25.4565894!4d81.8661429!16s%2Fg%2F11gr3bvb2d";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Dr. Patwa Skin Hair Laser & Aesthetic Clinic</h3>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              {t('home.services.desc')}
            </p>
            <a
              href="https://www.facebook.com/groups/652098457544106"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium bg-primary-foreground/10 hover:bg-primary-foreground/20 px-4 py-2 rounded-lg transition-colors"
            >
              <Facebook className="w-4 h-4" /> {t('footer.joinFacebook')}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {[
                { to: '/about', key: 'nav.about' },
                { to: '/services', key: 'nav.services' },
                { to: '/gallery', key: 'nav.gallery' },
                { to: '/blog', key: 'nav.blog' },
                { to: '/contact', key: 'nav.bookAppointment' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:opacity-100 transition-opacity">{t(l.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact – NAP */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>117/93-D/4, LIC Rd, near Kundan Guest House, Tagore Town, Prayagraj, UP 211002</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 shrink-0" />
                <div>
                  <a href="tel:+918988555540" className="hover:underline block">+91 89885 55540</a>
                  <a href="tel:+919560294926" className="hover:underline block">+91 95602 94926</a>
                </div>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:drdkpatwa.dermatologist@gmail.com" className="hover:underline text-xs">drdkpatwa.dermatologist@gmail.com</a>
              </li>
              <li className="flex gap-2">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p>Mon–Sat: 8:00–9:00 AM</p>
                  <p>Mon–Sat: 3:30–9:00 PM</p>
                  <p>{t('contact.info.sunday')}</p>
                </div>
              </li>
            </ul>
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm font-medium underline hover:opacity-80"
            >
              <ExternalLink className="w-3 h-3" /> {t('footer.directions')}
            </a>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.areasServed')}</h4>
            <p className="text-sm opacity-90 leading-relaxed">
              Serving patients in Prayagraj, Allahabad, Tagore Town, Naini, Jhunsi, Civil Lines, Mumfordganj, Georgetown, and surrounding areas.
            </p>
            <div className="mt-4">
              <p className="text-sm font-medium">⭐ 4.7 Rated</p>
              <p className="text-xs opacity-80">Based on 426+ Google Reviews</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-xs opacity-70">
          © {new Date().getFullYear()} Dr. Patwa Skin Hair Laser and Aesthetic Clinic, Prayagraj. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

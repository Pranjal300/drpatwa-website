import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const MobileBookingBar = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary text-primary-foreground flex">
      <a
        href="tel:+919560294926"
        className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium border-r border-primary-foreground/20"
      >
        <Phone className="w-4 h-4" /> {t('mobile.callNow')}
      </a>
      <Link
        to="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium"
      >
        <Calendar className="w-4 h-4" /> {t('nav.bookAppointment')}
      </Link>
    </div>
  );
};

export default MobileBookingBar;

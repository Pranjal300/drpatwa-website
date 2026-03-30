import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-serif font-bold text-primary">Dr. Patwa</span>
          <span className="hidden sm:inline text-xs text-muted-foreground">Skin Care & Hair Clinic</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === l.to
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919560294926" className="flex items-center gap-1 text-sm text-primary font-medium">
            <Phone className="w-4 h-4" /> +91 95602 94926
          </a>
          <Button asChild size="sm">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map(l => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium ${
                    location.pathname === l.to
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4 flex flex-col gap-2">
            <a href="tel:+919560294926" className="flex items-center justify-center gap-2 py-2 text-primary font-medium">
              <Phone className="w-4 h-4" /> +91 95602 94926
            </a>
            <Button asChild className="w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>Book Appointment</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

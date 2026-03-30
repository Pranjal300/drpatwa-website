import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919560294926?text=Hello%20Dr.%20Patwa%2C%20I%20would%20like%20to%20book%20an%20appointment."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-20 md:bottom-6 right-4 z-50 bg-[#25D366] hover:bg-[#1fb855] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;

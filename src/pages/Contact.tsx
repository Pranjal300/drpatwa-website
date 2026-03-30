import { useState } from 'react';
import { Phone, MapPin, Clock, Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const serviceOptions = [
  'Acne Treatment', 'Hair Transplant', 'Hair Loss / PRP', 'Skin Allergy',
  'Anti-Aging', 'Chemical Peel', 'Vitiligo', 'Eczema / Psoriasis',
  'Fungal Infection', 'Wart Removal', 'Skin Tag Removal', 'Laser Treatment', 'General Consultation'
];

const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3602.4434796866726!2d81.86506!3d25.456863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acbf1512e89df%3A0x435589b29b444712!2sDr.%20Patwa%20skin%20hair%20laser%20and%20aesthetic%20clinic!5e0!3m2!1sen!2sin!4v1774899477479!5m2!1sen!2sin";
const MAPS_DIRECTIONS = "https://www.google.com/maps/place/Dr.+Patwa+skin+hair+laser+and+aesthetic+clinic/@25.456863,81.86506,17z/data=!4m6!3m5!1s0x399acbf1512e89df:0x435589b29b444712!8m2!3d25.4565894!4d81.8661429!16s%2Fg%2F11gr3bvb2d";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const formRef = useScrollReveal();
  const infoRef = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: 'Please fill in your name and phone number', variant: 'destructive' });
      return;
    }
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      toast({ title: 'Please enter a valid 10-digit phone number', variant: 'destructive' });
      return;
    }
    toast({ title: 'Appointment Request Sent!', description: 'We will confirm your appointment within 24 hours.' });
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <>
      <SEOHead
        title="Book Appointment – Dr. Patwa Skin Hair Laser Clinic | Prayagraj"
        description="Book your appointment with Dr. D.K. Patwa, dermatologist in Prayagraj. Call +91 89885 55540 or fill the online form. Clinic: Tagore Town, Prayagraj."
        canonical="https://drpatwa.com/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://drpatwa.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://drpatwa.com/contact" }
          ]
        }}
      />

      <section className="bg-secondary py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-3">{t('contact.title')}</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div ref={formRef}>
              <form onSubmit={handleSubmit} className="space-y-5 bg-card border rounded-xl p-6 lg:p-8">
                <h2 className="text-xl font-serif font-bold mb-2">{t('contact.form.title')}</h2>
                <div>
                  <label className="text-sm font-medium mb-1 block">{t('contact.form.name')}</label>
                  <Input placeholder={t('contact.form.namePlaceholder')} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} maxLength={100} required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">{t('contact.form.phone')}</label>
                  <Input placeholder={t('contact.form.phonePlaceholder')} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))} required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">{t('contact.form.email')}</label>
                  <Input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} maxLength={255} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">{t('contact.form.service')}</label>
                  <Select value={form.service} onValueChange={v => setForm(f => ({ ...f, service: v }))}>
                    <SelectTrigger><SelectValue placeholder={t('contact.form.selectService')} /></SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">{t('contact.form.message')}</label>
                  <Textarea placeholder={t('contact.form.messagePlaceholder')} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} maxLength={500} rows={3} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" /> {t('contact.form.submit')}
                </Button>
                <p className="text-xs text-muted-foreground text-center">{t('contact.form.confirmNote')}</p>
              </form>
            </div>

            {/* Info */}
            <div ref={infoRef} className="space-y-6">
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-serif font-bold text-lg mb-4">{t('contact.info.title')}</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">{t('contact.info.address')}</p>
                      <p className="text-sm text-muted-foreground">117/93-D/4, LIC Rd, near Kundan Guest House, Tagore Town, Prayagraj, UP 211002</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{t('contact.info.phone')}</p>
                      <a href="tel:+918988555540" className="text-sm text-primary hover:underline block">+91 89885 55540</a>
                      <a href="tel:+919560294926" className="text-sm text-primary hover:underline block">+91 95602 94926</a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{t('contact.info.email')}</p>
                      <a href="mailto:drdkpatwa.dermatologist@gmail.com" className="text-sm text-primary hover:underline">drdkpatwa.dermatologist@gmail.com</a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">{t('contact.info.timings')}</p>
                      <p className="text-sm text-muted-foreground">{t('contact.info.morning')}</p>
                      <p className="text-sm text-muted-foreground">{t('contact.info.evening')}</p>
                      <p className="text-sm text-muted-foreground">{t('contact.info.sunday')}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border">
                <iframe
                  title="Dr Patwa Skin Hair Laser and Aesthetic Clinic Map"
                  src={MAPS_EMBED}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full">
                  <MapPin className="w-4 h-4 mr-2" /> {t('contact.directions')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

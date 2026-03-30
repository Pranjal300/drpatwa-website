import { useState } from 'react';
import { Phone, MapPin, Clock, Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import SEOHead from '@/components/SEOHead';

const serviceOptions = [
  'Acne Treatment', 'Hair Transplant', 'Hair Loss / PRP', 'Skin Allergy',
  'Anti-Aging', 'Chemical Peel', 'Vitiligo', 'Eczema / Psoriasis',
  'Fungal Infection', 'Wart Removal', 'Skin Tag Removal', 'Laser Treatment', 'General Consultation'
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', message: '' });

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
    setForm({ name: '', phone: '', service: '', date: '', message: '' });
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
          <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-3">Book an Appointment</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Schedule your consultation with Dr. D.K. Patwa, the best dermatologist in Prayagraj. We confirm appointments within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-5 bg-card border rounded-xl p-6 lg:p-8">
                <h2 className="text-xl font-serif font-bold mb-2">Request Appointment</h2>
                <div>
                  <label className="text-sm font-medium mb-1 block">Full Name *</label>
                  <Input placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} maxLength={100} required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Phone Number *</label>
                  <Input placeholder="10-digit mobile number" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))} required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Service Required</label>
                  <Select value={form.service} onValueChange={v => setForm(f => ({ ...f, service: v }))}>
                    <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Preferred Date</label>
                  <Input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} min={new Date().toISOString().split('T')[0]} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message (Optional)</label>
                  <Textarea placeholder="Describe your concern briefly..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} maxLength={500} rows={3} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" /> Submit Appointment Request
                </Button>
                <p className="text-xs text-muted-foreground text-center">We confirm appointments within 24 hours via phone call.</p>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-serif font-bold text-lg mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Clinic Address</p>
                      <p className="text-sm text-muted-foreground">117/93-D/4, LIC Rd, near Kundan Guest House, Tagore Town, Prayagraj, UP 211002</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <a href="tel:+918988555540" className="text-sm text-primary hover:underline block">+91 89885 55540</a>
                      <a href="tel:+919560294926" className="text-sm text-primary hover:underline block">+91 95602 94926</a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <a href="mailto:drdkpatwa.dermatologist@gmail.com" className="text-sm text-primary hover:underline">drdkpatwa.dermatologist@gmail.com</a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Clinic Timings</p>
                      <p className="text-sm text-muted-foreground">Morning: 8:00 AM – 9:00 AM (Mon–Sat)</p>
                      <p className="text-sm text-muted-foreground">Evening: 3:30 PM – 9:00 PM (Mon–Sat)</p>
                      <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border">
                <iframe
                  title="Dr Patwa Skin Hair Laser and Aesthetic Clinic Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d81.86506!3d25.456863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985359fd2c6b88d%3A0x4351e3fa6e9aab12!2sDr.+Patwa+skin+hair+laser+and+aesthetic+clinic!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href="https://www.google.com/maps?ll=25.456863,81.86506&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=4851935573763704594"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full">
                  <MapPin className="w-4 h-4 mr-2" /> Get Directions on Google Maps
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

import { Link } from 'react-router-dom';
import { Star, Clock, Award, Users, Stethoscope, Scissors, Sparkles, Shield, Droplets, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEOHead from '@/components/SEOHead';
import doctorImg from '@/assets/doctor-1.png';

const services = [
  { icon: Sparkles, title: 'Acne & Pimple Treatment', desc: 'Advanced acne solutions for clear, healthy skin.' },
  { icon: Scissors, title: 'Hair Transplant Surgery', desc: 'FUE & FUT hair transplant for natural hair restoration.' },
  { icon: Droplets, title: 'Hair Loss Treatment', desc: 'PRP therapy, medications & advanced hair regrowth plans.' },
  { icon: Sun, title: 'Anti-Aging Treatment', desc: 'Botox, fillers & skin tightening for youthful appearance.' },
  { icon: Shield, title: 'Skin Allergy Treatment', desc: 'Expert diagnosis & treatment of eczema, psoriasis & rashes.' },
  { icon: Stethoscope, title: 'Vitiligo Treatment', desc: 'Comprehensive vitiligo management with latest therapies.' },
];

const testimonials = [
  { name: 'Rahul S.', text: 'Dr. Patwa completely cured my chronic acne. His approach is thorough and caring. Best dermatologist in Prayagraj!', rating: 5 },
  { name: 'Priya M.', text: 'Amazing results for my hair loss treatment. Very professional clinic with modern equipment. Highly recommended!', rating: 5 },
  { name: 'Amit K.', text: 'Got my hair transplant done here. The results are incredible and very natural-looking. Dr. Patwa is truly skilled.', rating: 5 },
  { name: 'Sunita D.', text: 'My skin allergy was treated within weeks. The staff is friendly and the clinic is very clean. Thank you Dr. Patwa!', rating: 4 },
];

const faqs = [
  { q: 'Who is the best dermatologist in Prayagraj?', a: 'Dr. D.K. Patwa is widely regarded as one of the best dermatologists in Prayagraj. With an MD in Dermatology from IMS-BHU, over 13 years of experience, and a 4.7-star rating from 426+ patients on Google, he provides expert care for all skin, hair, and cosmetic concerns at his clinic in Tagore Town.' },
  { q: 'What skin treatments are available at Dr. Patwa\'s clinic?', a: 'Dr. Patwa\'s clinic offers a comprehensive range of treatments including acne treatment, hair transplant surgery (FUE/FUT), hair loss/PRP therapy, skin allergy treatment, vitiligo management, anti-aging procedures, chemical peels, laser treatments, microdermabrasion, wart removal, fungal infection treatment, and eczema/psoriasis care.' },
  { q: 'How do I book an appointment with Dr. D.K. Patwa?', a: 'You can book an appointment by calling +91 89885 55540, messaging on WhatsApp, or filling out the online booking form on our Contact page. Walk-in consultations are also available during clinic hours (Mon–Sat: 8–9 AM & 3:30–9 PM).' },
  { q: 'What is the consultation fee at Dr. Patwa Skin Clinic?', a: 'Dr. Patwa offers affordable consultations. Please call the clinic at +91 89885 55540 for current consultation fees. The clinic provides quality dermatological care at reasonable prices for patients across Prayagraj and Allahabad.' },
  { q: 'Does Dr. Patwa do hair transplant surgery?', a: 'Yes, Dr. D.K. Patwa is an experienced hair transplant surgeon in Prayagraj. He performs both FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation) procedures, delivering natural-looking results with minimal downtime.' },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

const Index = () => (
  <>
    <SEOHead
      title="Dr. D.K. Patwa | Best Dermatologist in Prayagraj – Skin & Hair Specialist"
      description="Consult Dr. D.K. Patwa, top-rated dermatologist in Prayagraj. Expert treatments for acne, hair loss, skin allergy, vitiligo, hair transplant & more. Book now: +91 89885 55540"
      canonical="https://drpatwa.com/"
      schema={faqSchema}
    />

    {/* Hero */}
    <section className="relative overflow-hidden bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-3">
              Dermatologist • Venereologist • Hair Transplant Surgeon
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
              Best Dermatologist in Prayagraj – <span className="text-primary">Dr. D.K. Patwa</span>
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg mb-2">
              Expert Skin, Hair, Laser & Aesthetic Care You Can Trust
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              MBBS (AMU) • MD Dermatology (IMS-BHU) • 13+ Years Experience • ⭐ 4.7 Rated (426+ Reviews)
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <img
              src={doctorImg}
              alt="Dr DK Patwa dermatologist Prayagraj"
              className="w-72 lg:w-96 rounded-2xl shadow-xl"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Trust Bar */}
    <section className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Award, label: '13+ Years', sub: 'Experience' },
            { icon: Stethoscope, label: 'Advanced', sub: 'Technology' },
            { icon: Users, label: '426+', sub: 'Google Reviews' },
            { icon: Clock, label: 'Hindi & English', sub: 'Languages' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <item.icon className="w-6 h-6 mb-1" />
              <span className="font-bold text-lg">{item.label}</span>
              <span className="text-xs opacity-80">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-3">
            Skin Specialist in Tagore Town
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dermatology services for all your skin, hair, laser, and aesthetic needs in Prayagraj.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.06}s` }}>
              <Card className="h-full hover:shadow-md transition-shadow group">
                <CardContent className="p-6 flex flex-col items-start gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  <Link to="/services" className="text-sm text-primary font-medium hover:underline mt-auto">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About Teaser */}
    <section className="bg-secondary py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
              Hair Transplant Surgeon Prayagraj
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Dr. Dheeraj Kumar Patwa (D.K. Patwa) is a highly qualified dermatologist in Prayagraj with over 13 years of clinical experience. He completed his MBBS from Aligarh Muslim University (AMU) and MD in Dermatology from the prestigious Institute of Medical Sciences, BHU (IMS-BHU).
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As a member of the Cosmetic Dermatology Society of India (CDSI), Dr. Patwa stays at the forefront of dermatological advancements. He specializes in hair transplant surgery, acne treatment, laser procedures, anti-aging therapies, and comprehensive skin care for patients across Prayagraj and Allahabad.
            </p>
            <Button asChild variant="outline">
              <Link to="/about">Read Full Bio →</Link>
            </Button>
          </div>
          <blockquote className="bg-card p-8 rounded-xl border italic text-lg font-serif text-foreground leading-relaxed">
            "For me, my work is everything. My profession is my world."
            <footer className="mt-4 not-italic text-sm text-muted-foreground font-sans">— Dr. D.K. Patwa</footer>
          </blockquote>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-10">
          What Our Patients Say
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="h-full">
              <CardContent className="p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
                <p className="text-sm font-semibold">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-secondary py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h2 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border px-4">
              <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* Map & Contact Strip */}
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-3">
          Visit Our Clinic in Prayagraj
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
          Dr. Patwa Skin Hair Laser and Aesthetic Clinic — Tagore Town, Prayagraj
        </p>
        <div className="rounded-xl overflow-hidden border shadow-sm">
          <iframe
            title="Dr Patwa Skin Hair Laser and Aesthetic Clinic Prayagraj"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d81.86506!3d25.456863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985359fd2c6b88d%3A0x4351e3fa6e9aab12!2sDr.+Patwa+skin+hair+laser+and+aesthetic+clinic!5e0!3m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </>
);

export default Index;

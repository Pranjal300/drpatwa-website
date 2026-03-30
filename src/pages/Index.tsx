import { Link } from 'react-router-dom';
import { Star, Clock, Award, Users, Stethoscope, Scissors, Sparkles, Shield, Droplets, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/context/LanguageContext';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import { useScrollReveal, useScrollRevealList } from '@/hooks/useScrollReveal';
import doctorImg from '@/assets/doctor-1.png';

const Index = () => {
  const { t, lang } = useLanguage();
  const { data: settings } = useSiteSettings();
  const heroTextRef = useScrollReveal();
  const heroImgRef = useScrollReveal();
  const servicesTitleRef = useScrollReveal();
  const aboutRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const mapRef = useScrollReveal();

  const services = [
    { icon: Sparkles, title: t('service.acne'), desc: t('service.acne.desc') },
    { icon: Scissors, title: t('service.hairTransplant'), desc: t('service.hairTransplant.desc') },
    { icon: Droplets, title: t('service.hairLoss'), desc: t('service.hairLoss.desc') },
    { icon: Sun, title: t('service.antiAging'), desc: t('service.antiAging.desc') },
    { icon: Shield, title: t('service.allergy'), desc: t('service.allergy.desc') },
    { icon: Stethoscope, title: t('service.vitiligo'), desc: t('service.vitiligo.desc') },
  ];

  const setServiceRef = useScrollRevealList(services.length);

  const testimonials = [
    { name: 'Rahul S.', text: lang === 'hi' ? 'डॉ. पटवा ने मेरे पुराने मुंहासों को पूरी तरह ठीक किया। प्रयागराज के सबसे अच्छे त्वचा डॉक्टर!' : 'Dr. Patwa completely cured my chronic acne. His approach is thorough and caring. Best dermatologist in Prayagraj!', rating: 5 },
    { name: 'Priya M.', text: lang === 'hi' ? 'बालों के झड़ने के इलाज के शानदार परिणाम। बहुत पेशेवर क्लिनिक। अत्यधिक अनुशंसित!' : 'Amazing results for my hair loss treatment. Very professional clinic with modern equipment. Highly recommended!', rating: 5 },
    { name: 'Amit K.', text: lang === 'hi' ? 'यहां हेयर ट्रांसप्लांट कराया। परिणाम अद्भुत और प्राकृतिक हैं। डॉ. पटवा वास्तव में कुशल हैं।' : 'Got my hair transplant done here. The results are incredible and very natural-looking. Dr. Patwa is truly skilled.', rating: 5 },
    { name: 'Sunita D.', text: lang === 'hi' ? 'मेरी त्वचा एलर्जी कुछ ही हफ्तों में ठीक हो गई। स्टाफ मिलनसार है और क्लिनिक बहुत साफ है।' : 'My skin allergy was treated within weeks. The staff is friendly and the clinic is very clean. Thank you Dr. Patwa!', rating: 4 },
  ];

  const setTestimonialRef = useScrollRevealList(testimonials.length);

  const faqs = [
    { q: lang === 'hi' ? 'प्रयागराज में सबसे अच्छे त्वचा डॉक्टर कौन हैं?' : 'Who is the best dermatologist in Prayagraj?', a: lang === 'hi' ? 'डॉ. डी.के. पटवा प्रयागराज के सबसे प्रतिष्ठित त्वचा रोग विशेषज्ञों में से एक हैं। IMS-BHU से MD, 13+ वर्षों का अनुभव, और Google पर 426+ रोगियों से 4.7-स्टार रेटिंग।' : 'Dr. D.K. Patwa is widely regarded as one of the best dermatologists in Prayagraj. With an MD in Dermatology from IMS-BHU, over 13 years of experience, and a 4.7-star rating from 426+ patients on Google, he provides expert care for all skin, hair, and cosmetic concerns at his clinic in Tagore Town.' },
    { q: lang === 'hi' ? 'डॉ. पटवा के क्लिनिक में कौन-कौन से उपचार उपलब्ध हैं?' : 'What skin treatments are available at Dr. Patwa\'s clinic?', a: lang === 'hi' ? 'मुंहासे उपचार, हेयर ट्रांसप्लांट, PRP थेरेपी, त्वचा एलर्जी, सफेद दाग, एंटी-एजिंग, केमिकल पील्स, लेज़र, माइक्रोडर्माब्रेजन, मस्सा हटाना, फंगल संक्रमण, एक्जिमा/सोरायसिस उपचार।' : 'Dr. Patwa\'s clinic offers a comprehensive range of treatments including acne treatment, hair transplant surgery (FUE/FUT), hair loss/PRP therapy, skin allergy treatment, vitiligo management, anti-aging procedures, chemical peels, laser treatments, microdermabrasion, wart removal, fungal infection treatment, and eczema/psoriasis care.' },
    { q: lang === 'hi' ? 'डॉ. पटवा से अपॉइंटमेंट कैसे बुक करें?' : 'How do I book an appointment with Dr. D.K. Patwa?', a: lang === 'hi' ? '+91 89885 55540 पर कॉल करें, WhatsApp पर मैसेज करें, या हमारे संपर्क पेज पर ऑनलाइन फॉर्म भरें। वॉक-इन भी उपलब्ध है (सोम-शनि: 8-9 AM और 3:30-9 PM)।' : 'You can book an appointment by calling +91 89885 55540, messaging on WhatsApp, or filling out the online booking form on our Contact page. Walk-in consultations are also available during clinic hours (Mon–Sat: 8–9 AM & 3:30–9 PM).' },
    { q: lang === 'hi' ? 'डॉ. पटवा के क्लिनिक में परामर्श शुल्क क्या है?' : 'What is the consultation fee at Dr. Patwa Skin Clinic?', a: lang === 'hi' ? 'डॉ. पटवा किफायती परामर्श प्रदान करते हैं। वर्तमान शुल्क के लिए कृपया +91 89885 55540 पर कॉल करें।' : 'Dr. Patwa offers affordable consultations. Please call the clinic at +91 89885 55540 for current consultation fees. The clinic provides quality dermatological care at reasonable prices for patients across Prayagraj and Allahabad.' },
    { q: lang === 'hi' ? 'क्या डॉ. पटवा हेयर ट्रांसप्लांट सर्जरी करते हैं?' : 'Does Dr. Patwa do hair transplant surgery?', a: lang === 'hi' ? 'हां, डॉ. पटवा प्रयागराज में अनुभवी हेयर ट्रांसप्लांट सर्जन हैं। वे FUE और FUT दोनों तकनीकों से प्राकृतिक दिखने वाले परिणाम देते हैं।' : 'Yes, Dr. D.K. Patwa is an experienced hair transplant surgeon in Prayagraj. He performs both FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation) procedures, delivering natural-looking results with minimal downtime.' },
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

  return (
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
            <div ref={heroTextRef}>
              <p className="text-accent font-medium text-sm uppercase tracking-wider mb-3">
                {t('home.hero.subtitle')}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
                {t('home.hero.title')} – <span className="text-primary">Dr. D.K. Patwa</span>
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg mb-2">
                {t('home.hero.desc')}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                {t('home.hero.credentials')}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/contact">{t('nav.bookAppointment')}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">{t('home.viewServices')}</Link>
                </Button>
              </div>
            </div>

            <div ref={heroImgRef} className="flex justify-center">
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
              { icon: Award, label: t('home.trust.years'), sub: t('home.trust.experience') },
              { icon: Stethoscope, label: t('home.trust.advanced'), sub: t('home.trust.technology') },
              { icon: Users, label: settings?.google_review_count || t('home.trust.reviews'), sub: t('home.trust.googleReviews') },
              { icon: Clock, label: t('home.trust.languages'), sub: t('home.trust.languagesLabel') },
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
          <div ref={servicesTitleRef} className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-3">
              {t('home.services.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('home.services.desc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} ref={setServiceRef(i)}>
                <Card className="h-full hover:shadow-md transition-shadow group">
                  <CardContent className="p-6 flex flex-col items-start gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <s.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                    <Link to="/services" className="text-sm text-primary font-medium hover:underline mt-auto">
                      {t('home.services.learnMore')}
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
          <div ref={aboutRef} className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
                {t('home.about.title')}
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {lang === 'hi'
                  ? 'डॉ. धीरज कुमार पटवा (डी.के. पटवा) प्रयागराज में 13+ वर्षों के अनुभव के साथ एक उच्च योग्य त्वचा रोग विशेषज्ञ हैं। उन्होंने AMU से MBBS और IMS-BHU से MD त्वचा रोग विज्ञान पूरा किया।'
                  : 'Dr. Dheeraj Kumar Patwa (D.K. Patwa) is a highly qualified dermatologist in Prayagraj with over 13 years of clinical experience. He completed his MBBS from Aligarh Muslim University (AMU) and MD in Dermatology from the prestigious Institute of Medical Sciences, BHU (IMS-BHU).'}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {lang === 'hi'
                  ? 'CDSI के सदस्य के रूप में, डॉ. पटवा त्वचा विज्ञान की नवीनतम प्रगति से अपडेट रहते हैं। वे हेयर ट्रांसप्लांट, मुंहासे उपचार, लेज़र प्रक्रियाएं और एंटी-एजिंग थेरेपी में विशेषज्ञ हैं।'
                  : 'As a member of the Cosmetic Dermatology Society of India (CDSI), Dr. Patwa stays at the forefront of dermatological advancements. He specializes in hair transplant surgery, acne treatment, laser procedures, anti-aging therapies, and comprehensive skin care for patients across Prayagraj and Allahabad.'}
              </p>
              <Button asChild variant="outline">
                <Link to="/about">{t('home.about.readBio')}</Link>
              </Button>
            </div>
            <blockquote className="bg-card p-8 rounded-xl border italic text-lg font-serif text-foreground leading-relaxed">
              {t('home.about.quote')}
              <footer className="mt-4 not-italic text-sm text-muted-foreground font-sans">— Dr. D.K. Patwa</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={testimonialsRef}>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-10">
              {t('home.testimonials.title')}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((item, i) => (
              <div key={i} ref={setTestimonialRef(i)}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: item.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{item.text}"</p>
                    <p className="text-sm font-semibold">{item.name}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div ref={faqRef}>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-10">
              {t('home.faq.title')}
            </h2>
          </div>
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
          <div ref={mapRef}>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-3">
              {t('home.map.title')}
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
              {t('home.map.subtitle')}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border shadow-sm">
            <iframe
              title="Dr Patwa Skin Hair Laser and Aesthetic Clinic Prayagraj"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3602.4434796866726!2d81.86506!3d25.456863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acbf1512e89df%3A0x435589b29b444712!2sDr.%20Patwa%20skin%20hair%20laser%20and%20aesthetic%20clinic!5e0!3m2!1sen!2sin!4v1774899477479!5m2!1sen!2sin"
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
};

export default Index;

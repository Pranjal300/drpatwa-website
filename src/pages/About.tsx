import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Heart } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import doctorImg2 from '@/assets/doctor-2.png';
import doctorImg3 from '@/assets/doctor-3.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const timeline = [
  { year: '2012', title: 'MBBS – Aligarh Muslim University (AMU)', icon: GraduationCap, desc: 'Completed Bachelor of Medicine and Bachelor of Surgery from one of India\'s most prestigious medical institutions.' },
  { year: '2018', title: 'MD Dermatology – IMS-BHU, Varanasi', icon: GraduationCap, desc: 'Earned Doctor of Medicine in Dermatology, Venereology & Leprosy from the Institute of Medical Sciences, Banaras Hindu University.' },
  { year: '2018–2022', title: 'Ex-Registrar, Department of Skin & VD', icon: Briefcase, desc: 'Served as Registrar in the Department of Skin & Venereal Diseases, gaining extensive clinical experience in complex dermatological cases.' },
  { year: '2022', title: 'HOD & Assistant Professor – MA Vindhyavashni Medical College, Mirzapur', icon: Award, desc: 'Appointed Head of Department and Assistant Professor at the autonomous medical college, training the next generation of dermatologists.' },
  { year: 'Present', title: 'Dr. Patwa Skin Care & Hair Clinic, Prayagraj', icon: Heart, desc: 'Established his private practice in Tagore Town, Prayagraj, providing advanced dermatology care to patients across the region.' },
];

const About = () => (
  <>
    <SEOHead
      title="About Dr. D.K. Patwa – MD Dermatology, 13+ Years Experience | Prayagraj"
      description="Dr. Dheeraj Kumar Patwa is a top-rated dermatologist in Prayagraj with MBBS from AMU, MD from IMS-BHU, and 13+ years of experience in skin and hair treatments."
      canonical="https://drpatwa.com/about"
      schema={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://drpatwa.com/" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://drpatwa.com/about" }
        ]
      }}
    />

    {/* Hero */}
    <section className="bg-secondary py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} className="text-accent font-medium text-sm uppercase tracking-wider mb-2">About the Doctor</motion.p>
            <motion.h1 variants={fadeUp} className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Dr. Dheeraj Kumar Patwa (D.K. Patwa)
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
              Dr. D.K. Patwa is a renowned dermatologist, venereologist, and hair transplant surgeon based in Prayagraj (formerly Allahabad), Uttar Pradesh. With over 13 years of clinical expertise, he has helped thousands of patients achieve healthier skin and hair through evidence-based, patient-centric treatments.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
              His qualifications include MBBS from Aligarh Muslim University (AMU) — one of India's top medical schools — and an MD in Dermatology, Venereology & Leprosy from the Institute of Medical Sciences, BHU (IMS-BHU), Varanasi. This rigorous academic background, combined with hands-on experience across multiple hospitals, makes him one of the most sought-after skin specialists in Prayagraj and surrounding areas.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              Dr. Patwa is an active member of the Cosmetic Dermatology Society of India (CDSI) and keeps himself updated with the latest advances in medical and cosmetic dermatology. He is fluent in both Hindi and English, ensuring comfortable communication for all patients.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img src={doctorImg2} alt="Dr DK Patwa skin specialist Prayagraj" className="w-72 lg:w-96 rounded-2xl shadow-xl" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h2 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-14">
          Education &amp; Career
        </h2>
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                className="flex gap-5 relative group"
              >
                <div className="flex flex-col items-center z-10">
                  <div className="p-2.5 rounded-full bg-primary text-primary-foreground shadow-sm ring-4 ring-background">
                    <t.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="pb-2 bg-card rounded-xl border border-border/50 p-4 shadow-sm flex-1 hover:shadow-md hover:border-primary/20 transition-shadow duration-200">
                  <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{t.year}</span>
                  <h3 className="font-serif font-semibold text-lg mt-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Quote + Image */}
    <section className="bg-secondary py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img src={doctorImg3} alt="Dr Patwa at clinic Prayagraj" className="w-full max-w-md mx-auto rounded-2xl shadow-lg" loading="lazy" />
          <div>
            <h2 className="font-serif font-bold mb-4 text-3xl">Philosophy & Approach</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 border-2 font-medium text-2xl">
              Dr. Patwa believes in a holistic approach to dermatology — treating not just the symptoms but understanding the root cause of every skin and hair condition. He combines the latest medical research with personalized care plans tailored to each patient's unique needs.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-foreground font-sans font-semibold">
              "For me, my work is everything. My profession is my world."
            </blockquote>
            <p className="text-sm text-muted-foreground mt-4">
              — Dr. D.K. Patwa, MD (Dermatology), IMS-BHU
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;

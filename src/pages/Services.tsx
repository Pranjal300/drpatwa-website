import { motion } from 'framer-motion';
import { Plus, Sparkles, Scissors, Droplets, Sun, Shield, Stethoscope, Zap, Bug, Flame, Pill, Syringe, Eraser } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEOHead from '@/components/SEOHead';

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  desc: string;
  faq: { q: string; a: string }[];
}

const services: Service[] = [
  {
    id: 'acne',
    icon: Sparkles,
    title: 'Acne & Pimple Treatment',
    desc: 'Acne is one of the most common skin conditions affecting teenagers and adults in Prayagraj and across India. At Dr. Patwa Skin Hair Laser and Aesthetic Clinic, we provide comprehensive acne treatment plans that address the root causes — whether hormonal imbalances, bacterial infections, or clogged pores. Our treatments include topical and oral medications, chemical peels, comedone extraction, and advanced therapies like LED light therapy. Dr. D.K. Patwa creates personalized plans based on acne severity (mild, moderate, or severe cystic acne), skin type, and lifestyle factors. We also offer acne scar treatment using microdermabrasion and chemical peels for smoother, clearer skin.',
    faq: [
      { q: 'What is the best acne treatment in Prayagraj?', a: 'Dr. Patwa offers customized acne treatments including chemical peels, topical retinoids, antibiotics, and advanced laser therapy depending on acne severity and skin type.' },
      { q: 'How long does acne treatment take?', a: 'Mild acne may improve in 4-6 weeks, while moderate to severe cases may take 3-6 months of consistent treatment for optimal results.' },
    ]
  },
  {
    id: 'skin-allergy',
    icon: Shield,
    title: 'Skin Allergy Treatment',
    desc: 'Skin allergies can cause significant discomfort with symptoms like itching, redness, hives, and rashes. Dr. Patwa specializes in diagnosing and treating all types of allergic skin conditions including contact dermatitis, urticaria (hives), atopic dermatitis, and drug reactions. Using patch testing and detailed clinical evaluation, we identify the exact allergens causing your skin reactions. Our treatment approach combines antihistamines, topical corticosteroids, immunotherapy, and allergen avoidance strategies.',
    faq: [
      { q: 'What causes skin allergies?', a: 'Common causes include contact with chemicals, cosmetics, metals (nickel), plants, food allergens, medications, and environmental factors like dust and pollen.' },
    ]
  },
  {
    id: 'anti-aging',
    icon: Sun,
    title: 'Anti-Aging & Wrinkle Treatment',
    desc: 'Turn back the clock with advanced anti-aging treatments at Dr. Patwa\'s clinic in Tagore Town, Prayagraj. We offer a range of non-surgical rejuvenation procedures including Botox injections for dynamic wrinkles, dermal fillers for volume restoration, chemical peels for skin renewal, and microneedling for collagen stimulation. Our anti-aging protocols are designed to deliver natural-looking results that enhance your appearance without looking overdone.',
    faq: [
      { q: 'At what age should I start anti-aging treatments?', a: 'Preventive treatments like sunscreen and antioxidant serums can start in your 20s. Clinical treatments like Botox and fillers are typically recommended from the late 30s onwards.' },
    ]
  },
  {
    id: 'chemical-peel',
    icon: Zap,
    title: 'Chemical Peel Treatment',
    desc: 'Chemical peels are one of the most effective treatments for improving skin texture, reducing pigmentation, and achieving a radiant complexion. We offer superficial, medium, and deep chemical peels tailored to your specific skin concerns. Our peels use medical-grade solutions including glycolic acid, salicylic acid, lactic acid, and TCA to exfoliate damaged skin layers and promote new cell growth.',
    faq: [
      { q: 'How many chemical peel sessions are needed?', a: 'Most patients see significant improvement after 4-6 sessions spaced 2-4 weeks apart, though results vary based on the condition being treated.' },
    ]
  },
  {
    id: 'dermabrasion',
    icon: Eraser,
    title: 'Dermabrasion & Microdermabrasion',
    desc: 'Dermabrasion and microdermabrasion are skin resurfacing techniques that remove the outer layers of skin to reveal smoother, healthier skin underneath. Dr. Patwa uses advanced microdermabrasion equipment with diamond-tip technology for precise, controlled exfoliation. These treatments are ideal for acne scars, fine lines, enlarged pores, sun damage, and dull skin.',
    faq: [
      { q: 'Is microdermabrasion painful?', a: 'No, microdermabrasion is virtually painless. Most patients describe a mild scratching sensation. No anesthesia is required.' },
    ]
  },
  {
    id: 'skin-tag',
    icon: Pill,
    title: 'Skin Tag Removal',
    desc: 'Skin tags (acrochordons) are small, harmless growths that commonly appear on the neck, armpits, eyelids, and groin area. Dr. Patwa offers safe, quick, and painless skin tag removal using radiofrequency cautery, cryotherapy (liquid nitrogen), or surgical excision. The procedure takes just a few minutes with local anesthesia.',
    faq: [
      { q: 'Do skin tags grow back after removal?', a: 'Removed skin tags do not grow back, but new ones may develop in other areas, especially in patients who are overweight or have diabetes.' },
    ]
  },
  {
    id: 'hair-transplant',
    icon: Scissors,
    title: 'Hair Transplant Surgery',
    desc: 'Dr. D.K. Patwa is an experienced hair transplant surgeon in Prayagraj, offering both FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation) techniques. Hair transplant surgery is a permanent solution for male pattern baldness, receding hairline, and other forms of hair loss. Our clinic uses advanced micro-motor FUE technology for minimally invasive extraction.',
    faq: [
      { q: 'How much does hair transplant cost in Prayagraj?', a: 'Hair transplant costs depend on the number of grafts needed. Please schedule a consultation with Dr. Patwa for an accurate assessment and cost estimate.' },
      { q: 'Is hair transplant permanent?', a: 'Yes, transplanted hair follicles are taken from the permanent zone and continue to grow naturally for a lifetime.' },
    ]
  },
  {
    id: 'hair-loss',
    icon: Droplets,
    title: 'Hair Loss / Alopecia Treatment',
    desc: 'Hair loss affects millions of men and women in India, and Dr. Patwa\'s clinic offers comprehensive hair loss solutions. We diagnose the underlying cause — whether androgenetic alopecia, telogen effluvium, alopecia areata, nutritional deficiency, or hormonal imbalance — through detailed clinical examination and trichoscopy. Treatment options include PRP therapy, minoxidil, finasteride, hair growth supplements, mesotherapy, and low-level laser therapy.',
    faq: [
      { q: 'Does PRP therapy work for hair loss?', a: 'PRP therapy has shown excellent results for many patients, stimulating hair follicles and promoting new growth. Multiple sessions (4-6) spaced monthly are usually recommended.' },
    ]
  },
  {
    id: 'vitiligo',
    icon: Stethoscope,
    title: 'Vitiligo Treatment',
    desc: 'Vitiligo is an autoimmune condition causing white patches on the skin due to loss of melanocytes. Dr. Patwa provides comprehensive vitiligo management using the latest evidence-based treatments. Our protocols include targeted phototherapy (Narrow Band UVB), topical immunomodulators, topical and oral corticosteroids, and surgical options for stable vitiligo.',
    faq: [
      { q: 'Can vitiligo be completely cured?', a: 'While there is no guaranteed cure, many patients achieve significant repigmentation with consistent treatment. Early intervention gives the best results.' },
    ]
  },
  {
    id: 'eczema-psoriasis',
    icon: Flame,
    title: 'Eczema & Psoriasis Treatment',
    desc: 'Eczema (atopic dermatitis) and psoriasis are chronic inflammatory skin conditions requiring expert management. Dr. Patwa specializes in treating these complex conditions using topical therapies, systemic medications, phototherapy, and biologic agents when necessary. We create individualized treatment plans that focus on controlling flare-ups and maintaining long-term remission.',
    faq: [
      { q: 'What triggers eczema flare-ups?', a: 'Common triggers include stress, dry weather, certain soaps/detergents, food allergies, dust mites, and synthetic clothing.' },
    ]
  },
  {
    id: 'fungal-infection',
    icon: Bug,
    title: 'Fungal Skin Infection Treatment',
    desc: 'Fungal skin infections are extremely common in the hot and humid climate of Prayagraj and Uttar Pradesh. Dr. Patwa provides effective treatment for all types including tinea corporis, tinea cruris, tinea pedis, tinea versicolor, and nail fungus. We use a combination of topical antifungals, oral medications, and hygiene counseling.',
    faq: [
      { q: 'Why do fungal infections keep coming back?', a: 'Recurrence is often due to incomplete treatment, persistent moisture, tight clothing, or reinfection from contaminated surfaces. Complete the full course of medication.' },
    ]
  },
  {
    id: 'wart-removal',
    icon: Syringe,
    title: 'Wart Removal',
    desc: 'Warts are caused by the Human Papillomavirus (HPV) and can appear anywhere on the body. Dr. Patwa offers safe and effective wart removal using cryotherapy, electrocautery, radiofrequency ablation, chemical cauterization, and immunotherapy for resistant warts. Most warts can be treated in 1-3 sessions.',
    faq: [
      { q: 'Are warts contagious?', a: 'Yes, warts are contagious and can spread through direct skin contact or contaminated surfaces. Avoid picking or scratching warts to prevent spreading.' },
    ]
  },
];

const Services = () => (
  <>
    <SEOHead
      title="Skin & Hair Treatment Services | Dr. Patwa Clinic Prayagraj"
      description="Explore comprehensive skin and hair treatments at Dr. Patwa's clinic in Prayagraj. Acne, hair transplant, vitiligo, anti-aging, chemical peels, eczema & more."
      canonical="https://drpatwa.com/services"
      schema={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://drpatwa.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://drpatwa.com/services" }
        ]
      }}
    />

    <section className="bg-secondary py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl lg:text-4xl font-serif font-bold mb-3">
          Our Skin & Hair Treatment Services
        </motion.h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive dermatology services by Dr. D.K. Patwa — your trusted skin doctor in Prayagraj. Tap on any service to learn more.
        </p>
      </div>
    </section>

    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <Accordion type="single" collapsible className="space-y-3">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <AccordionItem value={s.id} className="bg-card border rounded-xl px-5 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="hover:no-underline py-5 gap-3">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif font-semibold text-base lg:text-lg">{s.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-muted-foreground leading-relaxed mb-4 pl-[52px]">{s.desc}</p>
                  {s.faq.length > 0 && (
                    <div className="pl-[52px] space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">Frequently Asked</p>
                      {s.faq.map((f, j) => (
                        <div key={j} className="bg-secondary/50 rounded-lg p-4">
                          <p className="text-sm font-semibold mb-1">{f.q}</p>
                          <p className="text-sm text-muted-foreground">{f.a}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default Services;

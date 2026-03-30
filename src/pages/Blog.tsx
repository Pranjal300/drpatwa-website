import { Link, useParams } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  date: string;
  tags: string[];
  content: string;
}

const posts: BlogPost[] = [
  {
    slug: 'best-acne-treatment-prayagraj',
    title: 'Best Acne Treatment in Prayagraj – What Works in 2025',
    metaTitle: 'Best Acne Treatment in Prayagraj 2025 | Dr. Patwa Skin Clinic',
    metaDesc: 'Discover the best acne treatments available in Prayagraj in 2025. Dr. D.K. Patwa explains effective solutions for pimples, acne scars, and hormonal acne.',
    date: '2025-01-15',
    tags: ['Acne', 'Skin Care', 'Prayagraj'],
    content: `
Acne is one of the most common skin conditions affecting people of all ages in Prayagraj and across India. Whether you're a teenager dealing with hormonal breakouts or an adult struggling with persistent acne, finding the right treatment is crucial for both your skin health and self-confidence.

## Understanding Acne: Why Does It Happen?

Acne occurs when hair follicles become clogged with oil (sebum) and dead skin cells. Several factors contribute to acne development:

- **Hormonal changes** during puberty, menstruation, or PCOS
- **Excess oil production** by the sebaceous glands
- **Bacterial infection** (Cutibacterium acnes)
- **Dietary factors** including high glycemic foods and dairy
- **Stress and lifestyle** factors common in today's fast-paced life
- **Environmental factors** like pollution and humidity in Prayagraj

## Best Acne Treatments Available in Prayagraj

### 1. Topical Medications
The first line of acne treatment typically includes topical retinoids (tretinoin, adapalene), benzoyl peroxide, and topical antibiotics (clindamycin). These medications work by unclogging pores, killing bacteria, and reducing inflammation. Dr. Patwa carefully selects the right combination based on your acne type and skin sensitivity.

### 2. Chemical Peels for Acne
Chemical peels using glycolic acid, salicylic acid, or mandelic acid are highly effective for treating active acne and preventing future breakouts. At [Dr. Patwa's clinic](/services#chemical-peel), we offer medical-grade chemical peels that exfoliate dead skin, unclog pores, and promote cell turnover. Most patients see noticeable improvement after 3-4 sessions.

### 3. Oral Medications
For moderate to severe acne, oral medications may be necessary. These include oral antibiotics (doxycycline, azithromycin), hormonal therapy (oral contraceptives for women), and in severe cases, isotretinoin (commonly known as Accutane). Dr. Patwa monitors patients closely during oral medication courses to ensure safety and efficacy.

### 4. Advanced Therapies
Our clinic in Tagore Town offers advanced acne treatments including:
- **Comedone extraction** for stubborn blackheads and whiteheads
- **Intralesional steroid injections** for large, painful cystic acne
- **LED light therapy** using blue and red light wavelengths
- **Microneedling** for acne scar treatment

## Acne Scar Treatment

Many patients visit our clinic for acne scar treatment after their active acne has been controlled. We offer multiple scar treatment options including [microdermabrasion](/services#dermabrasion), chemical peels, PRP therapy, and dermal fillers for deep ice-pick scars.

## When to See a Dermatologist for Acne

Don't wait until your acne becomes severe. Visit a skin specialist if:
- Over-the-counter products aren't working after 2-3 months
- You have painful, deep, or cystic acne
- Acne is leaving scars or dark spots
- Acne is affecting your self-esteem or mental health

## Book Your Acne Consultation in Prayagraj

If you're struggling with acne in Prayagraj, Allahabad, or surrounding areas, [book an appointment](/contact) with Dr. D.K. Patwa today. With over 13 years of dermatology experience and an MD from IMS-BHU, Dr. Patwa provides evidence-based acne treatments tailored to your unique skin needs.

*Dr. Patwa Skin Care & Hair Clinic, Tagore Town, Prayagraj — Your trusted skin specialist for clear, healthy skin.*
    `
  },
  {
    slug: 'hair-fall-causes-solutions',
    title: "Hair Fall Causes and Solutions – Dr. Patwa's Guide for Prayagraj Patients",
    metaTitle: 'Hair Fall Causes & Solutions in Prayagraj | Dr. D.K. Patwa',
    metaDesc: "Complete guide on hair fall causes and treatments by Dr. D.K. Patwa, hair specialist in Prayagraj. Learn about PRP, hair transplant, and effective solutions.",
    date: '2025-02-10',
    tags: ['Hair Loss', 'Hair Transplant', 'PRP'],
    content: `
Hair fall is a growing concern among both men and women in Prayagraj and across India. Losing 50-100 hair strands per day is normal, but when hair loss exceeds this, it's time to consult a hair specialist. As an experienced dermatologist and hair transplant surgeon in Prayagraj, Dr. D.K. Patwa shares his comprehensive guide on understanding and treating hair fall.

## Common Causes of Hair Fall

### 1. Androgenetic Alopecia (Male/Female Pattern Baldness)
This is the most common cause of hair loss, affecting approximately 50% of men by age 50 and about 40% of women by age 60. It's primarily genetic and driven by the hormone DHT (dihydrotestosterone), which miniaturizes hair follicles over time.

### 2. Nutritional Deficiencies
Iron deficiency anemia, vitamin D deficiency, zinc deficiency, and protein malnutrition are common causes of hair fall, especially among women in India. A balanced diet and supplementation can significantly improve hair health.

### 3. Telogen Effluvium
This condition causes sudden, diffuse hair shedding triggered by physical or emotional stress, surgery, illness, rapid weight loss, or hormonal changes (postpartum, thyroid disorders). The good news is that telogen effluvium is usually temporary and self-limiting.

### 4. Alopecia Areata
An autoimmune condition where the immune system attacks hair follicles, causing round patches of hair loss. This condition requires specialized treatment from a dermatologist. Visit [our hair loss treatment page](/services#hair-loss) for more information.

### 5. Lifestyle Factors
- **Stress** (very common in today's lifestyle)
- **Poor diet** lacking essential nutrients
- **Excessive heat styling** and chemical treatments
- **Tight hairstyles** causing traction alopecia
- **Smoking** which reduces blood flow to hair follicles

## Effective Hair Fall Solutions

### Medical Treatments
- **Minoxidil** (topical application) — FDA-approved for both men and women
- **Finasteride** (oral medication) — for male pattern baldness
- **Anti-androgen therapy** — for women with hormonal hair loss
- **Nutritional supplements** — iron, biotin, zinc, vitamin D

### Advanced Hair Restoration

#### PRP (Platelet-Rich Plasma) Therapy
PRP therapy is one of the most popular [hair loss treatments](/services#hair-loss) at our Prayagraj clinic. Your own blood is processed to concentrate growth factors, which are then injected into the scalp to stimulate hair follicles and promote new growth. Most patients need 4-6 sessions for optimal results.

#### Hair Transplant Surgery
For advanced hair loss, [hair transplant surgery](/services#hair-transplant) offers a permanent solution. Dr. Patwa performs both FUE and FUT techniques, carefully extracting healthy hair follicles from the donor area and transplanting them to thinning or bald areas.

### Home Care Tips
1. Use a gentle, sulfate-free shampoo
2. Avoid hot water — wash hair with lukewarm water
3. Don't brush wet hair vigorously
4. Include protein, iron, and omega-3 fatty acids in your diet
5. Manage stress through yoga, meditation, or exercise
6. Avoid tight hairstyles and excessive heat styling

## When to See a Hair Specialist

Consult Dr. Patwa if you notice:
- Sudden or excessive hair shedding
- Thinning at the crown or receding hairline
- Patchy bald spots
- Hair loss after illness, surgery, or medication change
- Family history of baldness

## Expert Hair Care in Prayagraj

Don't let hair fall diminish your confidence. [Book an appointment](/contact) with Dr. D.K. Patwa at our clinic in Tagore Town, Prayagraj, for a thorough scalp evaluation and personalized treatment plan.

*Dr. Patwa Skin Care & Hair Clinic — Your trusted hair transplant surgeon and hair loss specialist in Prayagraj.*
    `
  },
  {
    slug: 'when-to-see-skin-specialist',
    title: "When Should You See a Skin Specialist? Signs You Shouldn't Ignore",
    metaTitle: 'When to See a Skin Specialist – Warning Signs | Dr. Patwa Prayagraj',
    metaDesc: "Learn the warning signs that indicate you need to see a dermatologist. Dr. D.K. Patwa, skin specialist in Prayagraj, explains when to seek professional help.",
    date: '2025-03-05',
    tags: ['Skin Health', 'Dermatology', 'Health Tips'],
    content: `
Your skin is the largest organ of your body and often the first to show signs of internal health issues. While minor skin problems may resolve on their own, certain symptoms require professional attention from a qualified dermatologist. As a skin specialist in Prayagraj with over 13 years of experience, Dr. D.K. Patwa explains the key warning signs you should never ignore.

## 10 Signs You Need to See a Dermatologist

### 1. Persistent Acne That Won't Clear
If over-the-counter products haven't improved your acne after 2-3 months of consistent use, it's time to see a specialist. Severe or cystic acne needs prescription medications to prevent permanent scarring. Our [acne treatment services](/services#acne) offer comprehensive solutions.

### 2. Changing Moles or New Growths
Any mole that changes in size, shape, color, or texture should be examined immediately. The ABCDE rule helps identify suspicious moles: Asymmetry, Border irregularity, Color variation, Diameter >6mm, and Evolving changes. Early detection of skin cancer saves lives.

### 3. Chronic Itching Without Visible Cause
Persistent itching (pruritus) without an obvious rash could indicate underlying conditions like liver disease, kidney problems, thyroid disorders, or lymphoma. A dermatologist can perform the necessary tests to identify the cause.

### 4. Rashes That Spread or Don't Heal
A rash that continues to spread, doesn't respond to basic treatments, or is accompanied by fever requires medical evaluation. This could indicate [allergic reactions](/services#skin-allergy), autoimmune conditions, or infections.

### 5. Excessive Hair Loss
Losing more than 100 hair strands daily, noticing thinning patches, or seeing a receding hairline warrants a dermatologist visit. Our clinic offers comprehensive [hair loss evaluation and treatment](/services#hair-loss) including PRP therapy and hair transplant.

### 6. Nail Changes
Discoloration, thickening, crumbling, or separation of nails from the nail bed can indicate [fungal infections](/services#fungal-infection), psoriasis, thyroid disease, or nutritional deficiencies. Don't ignore persistent nail changes.

### 7. White Patches on Skin
White patches could indicate [vitiligo](/services#vitiligo), pityriasis versicolor (a fungal condition), or other pigmentation disorders. Early treatment of vitiligo significantly improves outcomes, so don't delay seeking help.

### 8. Recurring Skin Infections
Frequent boils, fungal infections, or bacterial skin infections may indicate underlying diabetes, immune deficiency, or other systemic conditions. A dermatologist can identify patterns and provide preventive strategies.

### 9. Skin Conditions Affecting Quality of Life
If any skin condition — be it [eczema](/services#eczema-psoriasis), psoriasis, acne, or any other issue — is causing embarrassment, anxiety, sleep disturbance, or affecting your daily activities, professional help is essential.

### 10. Sun Damage and Premature Aging
If you notice premature wrinkles, age spots, rough texture, or other signs of sun damage, a dermatologist can recommend protective measures and [anti-aging treatments](/services#anti-aging) to restore your skin's health.

## Why Choose a Qualified Dermatologist?

In India, many non-dermatologists offer skin treatments without proper training. It's crucial to consult a qualified MD (Dermatology) for skin issues because:
- Accurate diagnosis requires years of specialized training
- Wrong treatments can worsen conditions or cause side effects
- Certain skin conditions mimic each other and need expert differentiation
- Advanced procedures require trained hands and proper equipment

## Skin Care Tips for Prayagraj's Climate

The hot, humid climate of Prayagraj can exacerbate many skin conditions. Here are some tips:
1. Use broad-spectrum SPF 30+ sunscreen daily, even on cloudy days
2. Stay hydrated — drink at least 8 glasses of water daily
3. Wear loose, cotton clothing to prevent fungal infections
4. Moisturize regularly, especially during winter months
5. Avoid sharing towels, razors, and personal care items

## Consult Dr. D.K. Patwa in Prayagraj

If you're experiencing any of the warning signs mentioned above, don't wait for the condition to worsen. [Book an appointment](/contact) with Dr. D.K. Patwa at our clinic in Tagore Town, Prayagraj. With qualifications from AMU and IMS-BHU and over 13 years of experience, you're in expert hands.

*Dr. Patwa Skin Care & Hair Clinic, 117/93-D/4, LIC Road, Near Kali Mandir, Tagore Town, Prayagraj — Serving patients across Allahabad, Naini, Jhunsi, and Civil Lines.*
    `
  }
];

// Blog listing
const BlogList = () => (
  <>
    <SEOHead
      title="Health Tips & Blog | Dr. Patwa Skin Care & Hair Clinic Prayagraj"
      description="Read expert dermatology articles and health tips by Dr. D.K. Patwa, skin specialist in Prayagraj. Acne, hair loss, skin care advice and more."
      canonical="https://drpatwa.com/blog"
      schema={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://drpatwa.com/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://drpatwa.com/blog" }
        ]
      }}
    />

    <section className="bg-secondary py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-3">Health Tips & Blog</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Expert dermatology articles and skin care advice by Dr. D.K. Patwa, dermatologist in Prayagraj.
        </p>
      </div>
    </section>

    <section className="py-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="space-y-8">
          {posts.map(post => (
            <article
              key={post.slug}
              className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{t}</span>
                ))}
              </div>
              <h2 className="text-xl font-serif font-bold mb-2">
                <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
              </h2>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> Dr. D.K. Patwa</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3">{post.content.trim().substring(0, 200)}...</p>
              <Link to={`/blog/${post.slug}`} className="text-sm text-primary font-medium mt-3 inline-block hover:underline">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

// Single blog post
const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-serif font-bold mb-4">Post Not Found</h1>
        <Button asChild variant="outline"><Link to="/blog">← Back to Blog</Link></Button>
      </div>
    );
  }

  const renderContent = (text: string) => {
    return text
      .split('\n')
      .map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <br key={i} />;
        if (trimmed.startsWith('## ')) return <h2 key={i} className="text-xl font-serif font-bold mt-8 mb-3">{trimmed.replace('## ', '')}</h2>;
        if (trimmed.startsWith('### ')) return <h3 key={i} className="text-lg font-serif font-semibold mt-6 mb-2">{trimmed.replace('### ', '')}</h3>;
        if (trimmed.startsWith('#### ')) return <h4 key={i} className="font-semibold mt-4 mb-2">{trimmed.replace('#### ', '')}</h4>;
        if (trimmed.startsWith('- **')) {
          const match = trimmed.match(/^- \*\*(.+?)\*\*\s*(.*)$/);
          if (match) return <li key={i} className="ml-4 mb-1"><strong>{match[1]}</strong>{match[2]}</li>;
        }
        if (trimmed.startsWith('- ')) return <li key={i} className="ml-4 mb-1">{trimmed.replace('- ', '')}</li>;
        if (trimmed.match(/^\d+\./)) return <li key={i} className="ml-4 mb-1 list-decimal">{trimmed.replace(/^\d+\.\s*/, '')}</li>;
        if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
          return <p key={i} className="italic text-sm text-muted-foreground mt-4">{trimmed.replace(/^\*|\*$/g, '')}</p>;
        }
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts: React.ReactNode[] = [];
        let lastIndex = 0;
        let match;
        while ((match = linkRegex.exec(trimmed)) !== null) {
          if (match.index > lastIndex) parts.push(trimmed.substring(lastIndex, match.index));
          parts.push(<Link key={`${i}-${match.index}`} to={match[2]} className="text-primary hover:underline">{match[1]}</Link>);
          lastIndex = match.index + match[0].length;
        }
        if (lastIndex < trimmed.length) parts.push(trimmed.substring(lastIndex));
        return <p key={i} className="text-muted-foreground leading-relaxed mb-3">{parts.length > 0 ? parts : trimmed}</p>;
      });
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "author": { "@type": "Person", "name": "Dr. D.K. Patwa" },
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "Dr. Patwa Skin Hair Laser and Aesthetic Clinic"
    }
  };

  return (
    <>
      <SEOHead title={post.metaTitle} description={post.metaDesc} canonical={`https://drpatwa.com/blog/${post.slug}`} schema={articleSchema} />

      <section className="bg-secondary py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link to="/blog"><ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog</Link>
          </Button>
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map(t => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{t}</span>
            ))}
          </div>
          <h1 className="text-2xl lg:text-3xl font-serif font-bold mb-3">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Dr. D.K. Patwa</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </section>

      <article className="py-10 lg:py-14">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose-sm">
          {renderContent(post.content)}
        </div>
      </article>

      <section className="bg-secondary py-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <h2 className="text-xl font-serif font-bold mb-3">Need Expert Skin or Hair Care?</h2>
          <p className="text-muted-foreground mb-4">Book a consultation with Dr. D.K. Patwa in Prayagraj.</p>
          <Button asChild><Link to="/contact">Book Appointment</Link></Button>
        </div>
      </section>
    </>
  );
};

export { BlogList, BlogPostPage };

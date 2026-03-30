import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '@/components/SEOHead';

const categories = ['All', 'Acne', 'Hair', 'Skin', 'Anti-Aging'];

const galleryItems = [
  { id: 1, category: 'Acne', alt: 'Acne treatment before and after Prayagraj Dr Patwa' },
  { id: 2, category: 'Acne', alt: 'Pimple treatment results skin specialist Prayagraj' },
  { id: 3, category: 'Hair', alt: 'Hair transplant before after Dr Patwa Prayagraj' },
  { id: 4, category: 'Hair', alt: 'Hair loss treatment results Prayagraj clinic' },
  { id: 5, category: 'Skin', alt: 'Vitiligo treatment before after Prayagraj dermatologist' },
  { id: 6, category: 'Skin', alt: 'Skin allergy treatment Dr Patwa clinic' },
  { id: 7, category: 'Anti-Aging', alt: 'Anti aging treatment results Prayagraj' },
  { id: 8, category: 'Anti-Aging', alt: 'Chemical peel before after Dr Patwa Prayagraj' },
  { id: 9, category: 'Acne', alt: 'Acne scar treatment results dermatologist Allahabad' },
  { id: 10, category: 'Hair', alt: 'PRP hair therapy results Prayagraj' },
  { id: 11, category: 'Skin', alt: 'Eczema treatment before after Prayagraj' },
  { id: 12, category: 'Anti-Aging', alt: 'Wrinkle treatment results skin clinic Prayagraj' },
];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active);

  return (
    <>
      <SEOHead
        title="Treatment Gallery | Dr. Patwa Skin Care & Hair Clinic Prayagraj"
        description="View before & after results of skin and hair treatments at Dr. Patwa's clinic in Prayagraj. Acne, hair transplant, vitiligo, and anti-aging results."
        canonical="https://drpatwa.com/gallery"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://drpatwa.com/" },
            { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://drpatwa.com/gallery" }
          ]
        }}
      />

      <section className="bg-secondary py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-3">Treatment Results Gallery</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Before & after results showcasing Dr. Patwa's expertise in dermatology and hair transplant procedures in Prayagraj.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === c
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-primary/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filtered.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square rounded-lg overflow-hidden bg-muted border border-border"
                >
                  <div className="w-full h-full flex items-center justify-center p-4 text-center">
                    <div>
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-lg font-bold">{item.category[0]}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.category} Treatment</p>
                      <p className="text-[10px] text-muted-foreground/60 mt-1">Before & After</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Actual patient results. Individual outcomes may vary. Photos used with patient consent.
          </p>
        </div>
      </section>
    </>
  );
};

export default Gallery;

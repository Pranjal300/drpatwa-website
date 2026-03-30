import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '@/components/SEOHead';

import gallery1 from '@/assets/gallery/gallery-1.png';
import gallery2 from '@/assets/gallery/gallery-2.png';
import gallery3 from '@/assets/gallery/gallery-3.png';
import gallery4 from '@/assets/gallery/gallery-4.png';
import gallery5 from '@/assets/gallery/gallery-5.png';
import gallery6 from '@/assets/gallery/gallery-6.png';
import gallery7 from '@/assets/gallery/gallery-7.png';
import gallery8 from '@/assets/gallery/gallery-8.png';
import gallery9 from '@/assets/gallery/gallery-9.png';
import gallery10 from '@/assets/gallery/gallery-10.png';

const categories = ['All', 'Acne', 'Hair', 'Skin', 'Anti-Aging'];

const galleryItems = [
  { id: 1, src: gallery3, category: 'Hair', alt: 'Alopecia treatment before and after Dr Patwa Prayagraj' },
  { id: 2, src: gallery4, category: 'Acne', alt: 'Acne treatment before and after result Prayagraj' },
  { id: 3, src: gallery5, category: 'Skin', alt: 'Skin tag removal result Dr Patwa Prayagraj' },
  { id: 4, src: gallery6, category: 'Skin', alt: 'Mole removal before and after Prayagraj dermatologist' },
  { id: 5, src: gallery7, category: 'Anti-Aging', alt: 'Eyebrow cosmetic treatment result Prayagraj' },
  { id: 6, src: gallery8, category: 'Anti-Aging', alt: 'Lip treatment before after healed Dr Patwa' },
  { id: 7, src: gallery9, category: 'Hair', alt: 'Vitiligo hair treatment result Prayagraj clinic' },
  { id: 8, src: gallery10, category: 'Acne', alt: 'Acne treatment result skin specialist Prayagraj' },
  { id: 9, src: gallery1, category: 'Skin', alt: 'Skin treatment result Dr Patwa clinic Prayagraj' },
  
];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active);

  return (
    <>
      <SEOHead
        title="Treatment Gallery | Dr. Patwa Skin Hair Laser Clinic Prayagraj"
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
            Before & after results showcasing Dr. Patwa's expertise in dermatology and hair treatments in Prayagraj.
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
                  className="aspect-square rounded-lg overflow-hidden bg-muted border border-border cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setLightbox(item.id)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Actual patient results. Individual outcomes may vary. Photos used with patient consent.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={galleryItems.find(g => g.id === lightbox)?.src}
              alt={galleryItems.find(g => g.id === lightbox)?.alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;

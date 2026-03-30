

## Plan: Services Redesign, Color Scheme Update, Gallery Images & Map Fix

### 1. Services Page — Accordion-style layout

**Current problem**: Services are listed as long scrolling sections with a sticky horizontal nav bar. User wants a simpler, more user-friendly layout.

**New design**: 
- Remove the sticky scrolling nav bar entirely
- Show all 12 services as a clean list of clickable rows (like an accordion/expandable list)
- Each row shows: icon + service title + a "+" icon on the right
- Clicking expands to show the description and FAQ below that row
- Only one service open at a time (accordion behavior)
- Clean, compact, mobile-friendly — users can scan all services at a glance

### 2. Color Scheme — Switch to medical blue + white

Research confirms: **blue is the #1 color for medical/hospital websites** — it conveys trust, professionalism, and calm. Green is #2 but olive green specifically feels more spa/wellness than clinical.

**New palette**:
- **Primary**: Medical blue `#1A6FC4` (trust, professionalism)  
- **Accent**: Teal `#0D9488` (secondary actions)
- **Background**: Clean white `#FAFBFC` and light gray `#F1F5F9`
- **Text**: Dark navy `#1E293B`
- Keep warm cream for subtle card backgrounds: `#F8FAFC`

This matches what Apollo 247, Practo, Mayo Clinic, Cleveland Clinic, and most top medical sites use.

### 3. Gallery Page — Add uploaded patient photos

Copy the 10 uploaded patient images into `src/assets/gallery/` and map them to gallery items with proper categories:
- image-10.png → Alopecia treatment (Hair)
- image-11.png → Acne before/after (Acne)
- image-12.png → Skin tag removal (Skin)
- image-13.png → Mole removal before/after (Skin)
- image-14.png → Eyebrow cosmetic treatment (Anti-Aging)
- image-15.png → Lip treatment before/after/healed (Anti-Aging)
- image-16.png → Vitiligo/hair treatment (Hair)
- image-17.png → Acne treatment result (Acne)

Display as actual `<img>` tags with proper alt text and lazy loading.

### 4. Google Maps — Fix embed URL

Update the iframe embed across Contact page and any other map references to use the correct clinic CID:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d81.86506!3d25.456863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4354381b5b08f2e7%3A0x4351e3fa6e9aab12!2sDr.+Patwa+skin+hair+laser+and+aesthetic+clinic!5e0!3m2!1sen!2sin
```

Also update:
- Clinic name to "Dr. Patwa Skin Hair Laser and Aesthetic Clinic"
- Address: "117/93-D/4, LIC Rd, near Kundan Guest House, Tagore Town, Prayagraj, UP 211002"
- Add second phone: +91 89885 55540
- Add email: drdkpatwa.dermatologist@gmail.com
- Rating: 4.7 (426 reviews) instead of 4.5

### Files to modify:
- `src/index.css` — Update CSS custom properties to blue palette
- `tailwind.config.ts` — Update any custom color references
- `src/pages/Services.tsx` — Rewrite to accordion-style expandable list
- `src/pages/Gallery.tsx` — Add real patient images
- `src/pages/Contact.tsx` — Fix map embed, update contact details
- `src/pages/Index.tsx` — Update rating/review count, contact details, map embed
- `src/components/Footer.tsx` — Update clinic name, add email, second phone
- `index.html` — Update schema markup with correct details


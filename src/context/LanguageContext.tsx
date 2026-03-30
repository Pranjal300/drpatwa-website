import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  'nav.home': { en: 'Home', hi: 'होम' },
  'nav.about': { en: 'About', hi: 'हमारे बारे में' },
  'nav.services': { en: 'Services', hi: 'सेवाएं' },
  'nav.gallery': { en: 'Gallery', hi: 'गैलरी' },
  'nav.blog': { en: 'Blog', hi: 'ब्लॉग' },
  'nav.contact': { en: 'Contact', hi: 'संपर्क' },
  'nav.bookAppointment': { en: 'Book Appointment', hi: 'अपॉइंटमेंट बुक करें' },
  'nav.clinicName': { en: 'Skin Care & Hair Clinic', hi: 'स्किन केयर एंड हेयर क्लिनिक' },

  // Home Hero
  'home.hero.subtitle': { en: 'Dermatologist • Venereologist • Hair Transplant Surgeon', hi: 'त्वचा रोग विशेषज्ञ • वेनेरोलॉजिस्ट • हेयर ट्रांसप्लांट सर्जन' },
  'home.hero.title': { en: 'Best Dermatologist in Prayagraj', hi: 'प्रयागराज के सर्वश्रेष्ठ त्वचा रोग विशेषज्ञ' },
  'home.hero.desc': { en: 'Expert Skin, Hair, Laser & Aesthetic Care You Can Trust', hi: 'विश्वसनीय स्किन, हेयर, लेज़र और एस्थेटिक केयर' },
  'home.hero.credentials': { en: 'MBBS (AMU) • MD Dermatology (IMS-BHU) • 13+ Years Experience • ⭐ 4.7 Rated (426+ Reviews)', hi: 'MBBS (AMU) • MD त्वचा रोग (IMS-BHU) • 13+ वर्षों का अनुभव • ⭐ 4.7 रेटिंग (426+ समीक्षाएं)' },
  'home.viewServices': { en: 'View Services', hi: 'सेवाएं देखें' },

  // Trust Bar
  'home.trust.years': { en: '13+ Years', hi: '13+ वर्ष' },
  'home.trust.experience': { en: 'Experience', hi: 'अनुभव' },
  'home.trust.advanced': { en: 'Advanced', hi: 'आधुनिक' },
  'home.trust.technology': { en: 'Technology', hi: 'तकनीक' },
  'home.trust.reviews': { en: '426+', hi: '426+' },
  'home.trust.googleReviews': { en: 'Google Reviews', hi: 'गूगल समीक्षाएं' },
  'home.trust.languages': { en: 'Hindi & English', hi: 'हिंदी और अंग्रेज़ी' },
  'home.trust.languagesLabel': { en: 'Languages', hi: 'भाषाएं' },

  // Services section
  'home.services.title': { en: 'Skin Specialist in Tagore Town', hi: 'टैगोर टाउन में त्वचा विशेषज्ञ' },
  'home.services.desc': { en: 'Comprehensive dermatology services for all your skin, hair, laser, and aesthetic needs in Prayagraj.', hi: 'प्रयागराज में आपकी सभी त्वचा, बाल, लेज़र और सौंदर्य आवश्यकताओं के लिए व्यापक त्वचा रोग सेवाएं।' },
  'home.services.learnMore': { en: 'Learn more →', hi: 'और जानें →' },

  // Service names
  'service.acne': { en: 'Acne & Pimple Treatment', hi: 'मुंहासे उपचार' },
  'service.acne.desc': { en: 'Advanced acne solutions for clear, healthy skin.', hi: 'स्वस्थ और साफ त्वचा के लिए उन्नत मुंहासे समाधान।' },
  'service.hairTransplant': { en: 'Hair Transplant Surgery', hi: 'हेयर ट्रांसप्लांट सर्जरी' },
  'service.hairTransplant.desc': { en: 'FUE & FUT hair transplant for natural hair restoration.', hi: 'प्राकृतिक बालों की बहाली के लिए FUE और FUT हेयर ट्रांसप्लांट।' },
  'service.hairLoss': { en: 'Hair Loss Treatment', hi: 'बालों का झड़ना उपचार' },
  'service.hairLoss.desc': { en: 'PRP therapy, medications & advanced hair regrowth plans.', hi: 'PRP थेरेपी, दवाइयां और उन्नत बाल विकास योजनाएं।' },
  'service.antiAging': { en: 'Anti-Aging Treatment', hi: 'एंटी-एजिंग उपचार' },
  'service.antiAging.desc': { en: 'Botox, fillers & skin tightening for youthful appearance.', hi: 'युवा दिखने के लिए बोटॉक्स, फिलर्स और स्किन टाइटनिंग।' },
  'service.allergy': { en: 'Skin Allergy Treatment', hi: 'त्वचा एलर्जी उपचार' },
  'service.allergy.desc': { en: 'Expert diagnosis & treatment of eczema, psoriasis & rashes.', hi: 'एक्जिमा, सोरायसिस और चकत्ते का विशेषज्ञ निदान और उपचार।' },
  'service.vitiligo': { en: 'Vitiligo Treatment', hi: 'सफेद दाग उपचार' },
  'service.vitiligo.desc': { en: 'Comprehensive vitiligo management with latest therapies.', hi: 'नवीनतम उपचारों के साथ सफेद दाग का व्यापक प्रबंधन।' },

  // About teaser
  'home.about.title': { en: 'Hair Transplant Surgeon Prayagraj', hi: 'प्रयागराज में हेयर ट्रांसप्लांट सर्जन' },
  'home.about.readBio': { en: 'Read Full Bio →', hi: 'पूरा परिचय पढ़ें →' },
  'home.about.quote': { en: '"For me, my work is everything. My profession is my world."', hi: '"मेरे लिए मेरा काम ही सब कुछ है। मेरा पेशा मेरी दुनिया है।"' },

  // Testimonials
  'home.testimonials.title': { en: 'What Our Patients Say', hi: 'हमारे मरीज़ क्या कहते हैं' },

  // FAQ
  'home.faq.title': { en: 'Frequently Asked Questions', hi: 'अक्सर पूछे जाने वाले प्रश्न' },

  // Map
  'home.map.title': { en: 'Visit Our Clinic in Prayagraj', hi: 'प्रयागराज में हमारे क्लिनिक पर आएं' },
  'home.map.subtitle': { en: 'Dr. Patwa Skin Hair Laser and Aesthetic Clinic — Tagore Town, Prayagraj', hi: 'डॉ. पटवा स्किन हेयर लेज़र एंड एस्थेटिक क्लिनिक — टैगोर टाउन, प्रयागराज' },

  // Contact page
  'contact.title': { en: 'Book an Appointment', hi: 'अपॉइंटमेंट बुक करें' },
  'contact.subtitle': { en: 'Schedule your consultation with Dr. D.K. Patwa, the best dermatologist in Prayagraj. We confirm appointments within 24 hours.', hi: 'प्रयागराज के सर्वश्रेष्ठ त्वचा रोग विशेषज्ञ डॉ. डी.के. पटवा से परामर्श के लिए अपॉइंटमेंट लें। हम 24 घंटे के भीतर पुष्टि करते हैं।' },
  'contact.form.title': { en: 'Request Appointment', hi: 'अपॉइंटमेंट अनुरोध' },
  'contact.form.name': { en: 'Full Name *', hi: 'पूरा नाम *' },
  'contact.form.namePlaceholder': { en: 'Your name', hi: 'आपका नाम' },
  'contact.form.phone': { en: 'Phone Number *', hi: 'फ़ोन नंबर *' },
  'contact.form.phonePlaceholder': { en: '10-digit mobile number', hi: '10 अंकों का मोबाइल नंबर' },
  'contact.form.email': { en: 'Email Address', hi: 'ईमेल पता' },
  'contact.form.service': { en: 'Service Required', hi: 'आवश्यक सेवा' },
  'contact.form.selectService': { en: 'Select a service', hi: 'सेवा चुनें' },
  'contact.form.message': { en: 'Message (Optional)', hi: 'संदेश (वैकल्पिक)' },
  'contact.form.messagePlaceholder': { en: 'Describe your concern briefly...', hi: 'अपनी समस्या संक्षेप में बताएं...' },
  'contact.form.submit': { en: 'Submit Appointment Request', hi: 'अपॉइंटमेंट अनुरोध भेजें' },
  'contact.form.confirmNote': { en: 'We confirm appointments within 24 hours via phone call.', hi: 'हम 24 घंटे के भीतर फ़ोन कॉल द्वारा अपॉइंटमेंट की पुष्टि करते हैं।' },
  'contact.info.title': { en: 'Contact Information', hi: 'संपर्क जानकारी' },
  'contact.info.address': { en: 'Clinic Address', hi: 'क्लिनिक पता' },
  'contact.info.phone': { en: 'Phone', hi: 'फ़ोन' },
  'contact.info.email': { en: 'Email', hi: 'ईमेल' },
  'contact.info.timings': { en: 'Clinic Timings', hi: 'क्लिनिक समय' },
  'contact.info.morning': { en: 'Morning: 8:00 AM – 9:00 AM (Mon–Sat)', hi: 'सुबह: 8:00 – 9:00 (सोम–शनि)' },
  'contact.info.evening': { en: 'Evening: 3:30 PM – 9:00 PM (Mon–Sat)', hi: 'शाम: 3:30 – 9:00 (सोम–शनि)' },
  'contact.info.sunday': { en: 'Sunday: Closed', hi: 'रविवार: बंद' },
  'contact.directions': { en: 'Get Directions on Google Maps', hi: 'Google Maps पर दिशा-निर्देश' },

  // Services page
  'services.title': { en: 'Our Skin & Hair Treatment Services', hi: 'हमारी त्वचा एवं बाल उपचार सेवाएं' },
  'services.subtitle': { en: 'Comprehensive dermatology services by Dr. D.K. Patwa — your trusted skin doctor in Prayagraj. Tap on any service to learn more.', hi: 'डॉ. डी.के. पटवा द्वारा व्यापक त्वचा रोग सेवाएं — प्रयागराज में आपके विश्वसनीय त्वचा डॉक्टर। अधिक जानने के लिए किसी भी सेवा पर टैप करें।' },
  'services.faq': { en: 'Frequently Asked', hi: 'अक्सर पूछे जाने वाले' },

  // Footer
  'footer.joinFacebook': { en: 'Join Our Facebook Group', hi: 'हमारे Facebook ग्रुप से जुड़ें' },
  'footer.quickLinks': { en: 'Quick Links', hi: 'त्वरित लिंक' },
  'footer.contactInfo': { en: 'Contact Info', hi: 'संपर्क जानकारी' },
  'footer.areasServed': { en: 'Areas We Serve', hi: 'हम कहां सेवा देते हैं' },
  'footer.directions': { en: 'Get Directions', hi: 'दिशा-निर्देश' },
  'footer.rights': { en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।' },

  // Mobile bar
  'mobile.callNow': { en: 'Call Now', hi: 'अभी कॉल करें' },

  // Language
  'lang.en': { en: 'EN', hi: 'EN' },
  'lang.hi': { en: 'हिं', hi: 'हिं' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      return (localStorage.getItem('lang') as Language) || 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    try { localStorage.setItem('lang', newLang); } catch {}
  }, []);

  const t = useCallback((key: string): string => {
    return translations[key]?.[lang] || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

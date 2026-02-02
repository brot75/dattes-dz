'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useStore, InventoryItem } from '@/lib/store';
import { ProductCard } from '@/components/ProductCard';
import { ShoppingBag, Star, Info, Users, Leaf, Search } from 'lucide-react';

import { StickyCart } from '@/components/StickyCart';

export default function Home() {
  const { language, inventory, incrementVisits, settings, setReferralSource, fetchInventory, fetchOrders } = useStore();
  const isRtl = language === 'ar';

  useEffect(() => {
    incrementVisits();

    // Sync Data with Backend
    fetchInventory();
    fetchOrders();

    // Referral Tracking
    const params = new URLSearchParams(window.location.search);
    const source = params.get('ref') || params.get('source') || params.get('utm_source');
    if (source) {
      setReferralSource(source.toLowerCase());
    }
  }, []);

  /* eslint-disable react/no-unescaped-entities */
  const t = {
    heroTitle: language === 'en' ? 'From the Palms of Tolga, Straight to Your Table.' :
      language === 'ar' ? 'من نخيل طولقة، مباشرة إلى مائدتك.' :
        'Des Palmiers de Tolga, Directement à Votre Table.',
    heroSubtitle: language === 'en' ? '100% Organic. Direct from the Farmer. Experience the world’s finest dates, harvested by hand and delivered with no middlemen.' :
      language === 'ar' ? '100٪ عضوي. مباشرة من الفلاح. جرب أجود أنواع التمور، مقطوفة باليد وتصلك دون وسطاء.' :
        '100% Bio. Direct du Producteur. Découvrez les meilleures dattes du monde, récoltées à la main et livrées sans intermédiaire.',
    shopNow: language === 'en' ? 'Shop Now' : language === 'ar' ? 'تسوق الآن' : 'Commander Maintenant',
    ourProducts: language === 'en' ? 'Our Products' : language === 'ar' ? 'منتجاتنا' : 'Nos Produits',
    addToCart: language === 'en' ? 'Add to Cart' : language === 'ar' ? 'أضف للسلة' : 'Ajouter au Panier',
    perKg: language === 'en' ? 'DZD / Kg' : language === 'ar' ? 'دج / كغ' : 'DA / Kg',
    quality: language === 'en' ? 'Quality' : language === 'ar' ? 'الجودة' : 'Qualité',
    origin: language === 'en' ? 'Origin' : language === 'ar' ? 'المصدر' : 'Origine',
    added: language === 'en' ? '✓ Added' : language === 'ar' ? '✓ تمت الإضافة' : '✓ Ajouté',

    // Quality Section
    qualityTitle: language === 'en' ? 'The Gold Standard: Tolga Dattes' :
      language === 'ar' ? 'المعيار الذهبي: تمور طولقة' :
        'L\'Excellence : Dattes de Tolga',
    qualityText: language === 'en' ? 'There is a reason why Tolga is legendary. The unique microclimate of the Biskra region creates a date that is unmatched in texture, clarity, and honey-like sweetness.' :
      language === 'ar' ? 'هناك سبب يجعل طولقة أسطورية. يخلق المناخ الفريد لمنطقة بسكرة تمرًا لا مثيل له في الملمس والشفافية والحلاوة الشبيهة بالعسل.' :
        'Il y a une raison pour laquelle Tolga est légendaire. Le microclimat unique de la région de Biskra crée une datte inégalée en texture, clarté et douceur mielleuse.',

    // Why Us Section
    whyUsTitle: language === 'en' ? 'Why Buy From Us?' :
      language === 'ar' ? 'لماذا تشتري منا؟' :
        'Pourquoi Nous Choisir ?',

    whyUs1Title: language === 'en' ? 'Direct Source' : language === 'ar' ? 'مصدر مباشر' : 'Source Directe',
    whyUs1Text: language === 'en' ? 'By buying directly from the farmer, you ensure support for growers and receive the freshest harvest.' :
      language === 'ar' ? 'بالشراء مباشرة من الفلاح، تضمن دعم المزارعين وتحصل على أحدث محصول.' :
        'En achetant directement au producteur, vous soutenez les agriculteurs et recevez la récolte la plus fraîche.',

    whyUs2Title: language === 'en' ? 'Certified Bio' : language === 'ar' ? 'عضوي وطبيعي' : 'Naturel & Bio',
    whyUs2Text: language === 'en' ? 'Grown using traditional, organic methods. No harsh chemicals, just sun, water, and earth.' :
      language === 'ar' ? 'زرعت بطرق تقليدية وطبيعية. لا مواد كيميائية قاسية، فقط الشمس والماء والأرض.' :
        'Cultivé selon des méthodes traditionnelles. Sans produits chimiques agressifs, juste du soleil, de l\'eau et de la terre.',

    whyUs3Title: language === 'en' ? 'Transparency' : language === 'ar' ? 'شفافية تامة' : 'Transparence',
    whyUs3Text: language === 'en' ? 'Know exactly where your food comes from and that it was handled with care.' :
      language === 'ar' ? 'اعرف بالضبط من أين يأتي طعامك وأنه تم التعامل معه بعناية.' :
        'Sachez exactement d\'où vient votre nourriture et qu\'elle a été manipulée avec soin.',
  };

  // Safe Hero Image Access
  const heroImage = settings?.heroImage || '/hero-dates-v2.png';

  return (
    <div className={`min-h-screen bg-dattes-bg pb-24 font-sans ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full bg-dattes-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${heroImage}?t=${Date.now()}`}
            alt="Hero"
            className="w-full h-full object-cover transition-opacity duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/hero-dates-v2.png';
            }}
          />
        </div>
        {/* Gradient Removed per request */}

        <div className="relative z-10 container mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
          <div className="bg-black/40 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <span className="text-dattes-accent uppercase tracking-widest text-sm font-bold mb-4 animate-fade-in-up block">
              {language === 'en' ? 'Tolga’s Finest. Nature’s Sweetest.' : language === 'ar' ? 'أجود تمور طولقة. حلاوة الطبيعة.' : 'Le Meilleur de Tolga. La Douceur de la Nature.'}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 drop-shadow-xl text-white leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-medium drop-shadow-md">
              {t.heroSubtitle}
            </p>
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-dattes-accent text-dattes-primary font-bold px-8 py-3 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-xl"
            >
              {t.shopNow}
            </button>
          </div>
        </div>
      </div>

      {/* Quality Section - The Gold Standard */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dattes-primary mb-6">
            {t.qualityTitle}
          </h2>
          <div className="w-24 h-1 bg-dattes-accent mx-auto mb-8 rounded-full" />
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.qualityText}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-dattes-primary/20 w-16" />
          <h2 className="text-3xl font-display font-bold text-dattes-primary mx-4">{t.ourProducts}</h2>
          <div className="h-px bg-dattes-primary/20 w-16" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {inventory.map((product) => (
            <ProductCard key={product.id} product={product} t={t} />
          ))}
        </div>
      </section>

      <StickyCart />

      {/* Why Us / Value Props Section */}
      <section className="bg-dattes-bg py-20 border-t border-dattes-primary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center text-dattes-primary mb-12">
            {t.whyUsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-dattes-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-dattes-accent" />
              </div>
              <h3 className="font-bold text-xl text-dattes-primary mb-3">{t.whyUs1Title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.whyUs1Text}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-dattes-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-dattes-accent" />
              </div>
              <h3 className="font-bold text-xl text-dattes-primary mb-3">{t.whyUs2Title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.whyUs2Text}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-dattes-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-dattes-accent" />
              </div>
              <h3 className="font-bold text-xl text-dattes-primary mb-3">{t.whyUs3Title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.whyUs3Text}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

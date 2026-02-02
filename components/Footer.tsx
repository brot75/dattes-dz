'use client';

import Link from 'next/link';

import { useStore } from '@/lib/store';

export function Footer() {
    const { language } = useStore();
    const isRtl = language === 'ar';

    const t = {
        slogan: language === 'en' ? 'The authentic taste of the Sahara.' :
            language === 'ar' ? 'مذاق الصحراء الأصيل.' :
                'Le goût authentique du Sahara.',
        home: language === 'en' ? 'Home' : language === 'ar' ? 'الرئيسية' : 'Accueil',
        shop: language === 'en' ? 'Shop' : language === 'ar' ? 'المتجر' : 'Boutique',
        contact: language === 'en' ? 'Contact' : language === 'ar' ? 'اتصل بنا' : 'Contact',
        rights: language === 'en' ? 'All rights reserved.' : language === 'ar' ? 'جميع الحقوق محفوظة.' : 'Tous droits réservés.',
    };

    return (
        <footer className="bg-dattes-primary text-white py-12" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-display font-bold text-dattes-accent mb-2">ABdattes</h2>
                        <p className="text-white/60 text-sm">{t.slogan}</p>
                    </div>

                    <div className="flex gap-6 text-sm font-bold text-white/80">
                        <Link href="/" className="hover:text-dattes-accent transition-colors">{t.home}</Link>
                        <Link href="/product" className="hover:text-dattes-accent transition-colors">{t.shop}</Link>
                        <Link href="/contact" className="hover:text-dattes-accent transition-colors">{t.contact}</Link>
                    </div>

                    <div className="text-xs text-white/40">
                        &copy; {new Date().getFullYear()} ABdattes. {t.rights}
                    </div>
                </div>
            </div>
        </footer>
    );
}

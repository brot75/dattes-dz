'use client';

import Link from 'next/link';
import { useStore } from '@/lib/store';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
    const { language } = useStore();
    const isRtl = language === 'ar';

    const t = {
        slogan: language === 'en' ? 'The authentic taste of the Sahara.' :
            language === 'ar' ? 'مذاق الصحراء الأصيل.' :
                'Le goût authentique du Sahara.',
        quickLinks: language === 'en' ? 'Quick Links' : language === 'ar' ? 'روابط سريعة' : 'Liens Rapides',
        contactUs: language === 'en' ? 'Contact Us' : language === 'ar' ? 'اتصل بنا' : 'Contactez-nous',
        followUs: language === 'en' ? 'Follow Us' : language === 'ar' ? 'تابعنا' : 'Suivez-nous',
        home: language === 'en' ? 'Home' : language === 'ar' ? 'الرئيسية' : 'Accueil',
        shop: language === 'en' ? 'Shop' : language === 'ar' ? 'المتجر' : 'Boutique',
        contact: language === 'en' ? 'Contact' : language === 'ar' ? 'اتصل بنا' : 'Contact',
        rights: language === 'en' ? 'All rights reserved.' : language === 'ar' ? 'جميع الحقوق محفوظة.' : 'Tous droits réservés.',
        location: language === 'en' ? 'Tolga, Biskra, Algeria' : language === 'ar' ? 'طولقة، بسكرة، الجزائر' : 'Tolga, Biskra, Algérie'
    };

    return (
        <footer className="bg-dattes-primary text-white pt-16 pb-8" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-1 space-y-6">
                        <Link href="/" className="inline-block">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/logo-new.png"
                                alt="AB Dattes"
                                className="h-24 w-auto object-contain hover:scale-105 transition-transform"
                            />
                        </Link>
                        <p className="text-white/80 font-display text-lg leading-relaxed max-w-xs">
                            {t.slogan}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-display font-bold text-dattes-accent mb-6">{t.quickLinks}</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">
                                    {t.home}
                                </Link>
                            </li>
                            <li>
                                <Link href="/product" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">
                                    {t.shop}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">
                                    {t.contact}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-display font-bold text-dattes-accent mb-6">{t.contactUs}</h3>
                        <ul className="space-y-4 text-white/70">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-dattes-accent" />
                                <span>{t.location}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 flex-shrink-0 text-dattes-accent" />
                                <span dir="ltr">+213 661 123 456</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 flex-shrink-0 text-dattes-accent" />
                                <span>contact@abdattes.dz</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-xl font-display font-bold text-dattes-accent mb-6">{t.followUs}</h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dattes-accent hover:text-dattes-primary transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dattes-accent hover:text-dattes-primary transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-white/40 font-medium">
                        &copy; {new Date().getFullYear()} AB Dattes. {t.rights}
                    </p>
                    <p className="text-xs text-white/20 font-mono">
                        Designed by DevOps Solutions
                    </p>
                </div>
            </div>
        </footer>
    );
}

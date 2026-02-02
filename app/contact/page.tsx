'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useStore } from '@/lib/store';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
    const { language } = useStore();
    const isRtl = language === 'ar';

    const t = {
        title: language === 'en' ? 'Contact Us' : language === 'ar' ? 'اتصل بنا' : 'Contactez-nous',
        subtitle: language === 'en' ? 'We are here to answer all your questions.' :
            language === 'ar' ? 'نحن في الاستماع لجميع استفساراتكم.' :
                'Nous sommes à votre écoute pour toutes vos questions.',
        address: language === 'en' ? 'Address' : language === 'ar' ? 'العنوان' : 'Adresse',
        phone: language === 'en' ? 'Phone' : language === 'ar' ? 'الهاتف' : 'Téléphone',
        email: language === 'en' ? 'Email' : language === 'ar' ? 'البريد الإلكتروني' : 'Email',
        hours: language === 'en' ? 'Working Hours' : language === 'ar' ? 'ساعات العمل' : 'Horaires',
    };

    return (
        <div className={`min-h-screen bg-dattes-bg font-sans ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
            <Header />

            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-display font-bold text-dattes-primary mb-4">{t.title}</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-dattes-primary/5 space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-dattes-accent/10 rounded-full flex items-center justify-center shrink-0">
                                <MapPin className="text-dattes-primary w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-dattes-primary text-lg mb-1">{t.address}</h3>
                                <p className="text-gray-600">Tolga, Biskra<br />Algérie, 07000</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-dattes-accent/10 rounded-full flex items-center justify-center shrink-0">
                                <Phone className="text-dattes-primary w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-dattes-primary text-lg mb-1">{t.phone}</h3>
                                <p className="text-gray-600" dir="ltr">+213 5 62 76 06 54</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-dattes-accent/10 rounded-full flex items-center justify-center shrink-0">
                                <Mail className="text-dattes-primary w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-dattes-primary text-lg mb-1">{t.email}</h3>
                                <p className="text-gray-600">contact@dattes-dz.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-dattes-accent/10 rounded-full flex items-center justify-center shrink-0">
                                <Clock className="text-dattes-primary w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-dattes-primary text-lg mb-1">{t.hours}</h3>
                                <p className="text-gray-600">Samedi - Jeudi: 08:00 - 18:00<br />Vendredi: Fermé</p>
                            </div>
                        </div>
                    </div>

                    {/* Form (Visual only for now) */}
                    <form className="bg-white p-8 rounded-3xl shadow-sm border border-dattes-primary/5 space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Nom Complet</label>
                            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50" placeholder="Votre nom" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50" placeholder="votre@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                            <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50" placeholder="Comment pouvons-nous vous aider ?" />
                        </div>
                        <button type="button" className="w-full bg-dattes-primary text-white font-bold py-3 rounded-xl hover:bg-dattes-accent hover:text-dattes-primary transition-colors">
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
}

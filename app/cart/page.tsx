'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { ALGERIA_LOCATIONS } from '@/lib/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Trash2, ShoppingBag, ArrowRight, CheckCircle } from 'lucide-react';

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal, language, getDeliveryFee, currentUser, addOrder, clearCart, referralSource } = useStore();
    const isRtl = language === 'ar';
    const t = {
        title: language === 'en' ? 'Your Cart' : language === 'ar' ? 'سلة المشتريات' : 'Votre Panier',
        successTitle: language === 'en' ? 'Order Received Successfully!' : language === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Commande Reçue avec Succès !',
        successMsg: language === 'en' ? 'Thank you for your trust. Your order has been registered and is under review. Our team will contact you shortly to confirm.' :
            language === 'ar' ? 'شكرا لثقتك. لقد تم تسجيل طلبك وهو الآن قيد المراجعة. سيتصل بك فريقنا قريباً للتأكيد.' :
                "Merci pour votre confiance. Votre commande a été enregistrée avec succès et est en attente de validation. Un administrateur vous contactera par téléphone très prochainement pour confirmer l'offre et finaliser la livraison.",
        nextStep: language === 'en' ? 'Next Step:' : language === 'ar' ? 'الخطوة التالية:' : 'Prochaine étape :',
        nextStepDesc: language === 'en' ? 'Validation call within 24h.' : language === 'ar' ? 'اتصال تأكيد خلال 24 ساعة.' : 'Appel téléphonique de validation dans les 24h.',
        returnHome: language === 'en' ? 'Return Home' : language === 'ar' ? 'العودة للرئيسية' : 'Retour à l\'accueil',

        // Cart UI
        emptyCart: language === 'en' ? 'Your cart is empty.' : language === 'ar' ? 'سلة المشتريات فارغة.' : 'Votre panier est vide.',
        discoverProducts: language === 'en' ? 'Discover Products' : language === 'ar' ? 'اكتشف منتجاتنا' : 'Découvrir nos produits',
        remove: language === 'en' ? 'Remove' : language === 'ar' ? 'حذف' : 'Supprimer',
        deliveryInfo: language === 'en' ? 'Delivery Information' : language === 'ar' ? 'معلومات التوصيل' : 'Informations de Livraison',
        fullName: language === 'en' ? 'Full Name' : language === 'ar' ? 'الاسم الكامل' : 'Nom Complet',
        yourName: language === 'en' ? 'Your Name' : language === 'ar' ? 'اسمك' : 'Votre nom',
        phone: language === 'en' ? 'Phone Number *' : language === 'ar' ? 'رقم الهاتف *' : 'Numéro de Téléphone *',
        wilaya: language === 'en' ? 'Wilaya' : language === 'ar' ? 'الولاية' : 'Wilaya',
        select: language === 'en' ? 'Select' : language === 'ar' ? 'اختر' : 'Sélectionner',
        commune: language === 'en' ? 'Commune' : language === 'ar' ? 'البلدية' : 'Commune',
        subtotal: language === 'en' ? 'Subtotal' : language === 'ar' ? 'المجموع الفرعي' : 'Sous-total',
        delivery: language === 'en' ? 'Delivery' : language === 'ar' ? 'التوصيل' : 'Livraison',
        calculated: language === 'en' ? 'Calculated by Wilaya' : language === 'ar' ? 'يحسب حسب الولاية' : 'Calculé selon Wilaya',
        total: language === 'en' ? 'Total' : language === 'ar' ? 'المجموع' : 'Total',
        proceed: language === 'en' ? 'Proceed' : language === 'ar' ? 'إتمام الطلب' : 'Procéder',
    };

    // Hydration fix & Auto-fill
    const [isMounted, setIsMounted] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        wilaya: '',
        commune: '',
        deliveryMode: 'home' as 'home' | 'bureau'
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const itemsTotal = cartTotal();
    const deliveryFee = formData.wilaya ? getDeliveryFee(formData.wilaya, formData.deliveryMode) : 0;
    const finalTotal = itemsTotal + deliveryFee;

    const availableCommunes = formData.wilaya ? ALGERIA_LOCATIONS[formData.wilaya] || [] : [];

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Save Order to Store
        const newOrder = {
            id: crypto.randomUUID(),
            userId: currentUser?.id,
            customer: {
                name: formData.name,
                phone: formData.phone,
                wilaya: formData.wilaya,
                commune: formData.commune,
                address: `Mode de livraison: ${formData.deliveryMode === 'home' ? 'A Domicile' : 'Bureau/Stop Desk'}`
            },
            items: [...cart],
            total: finalTotal,
            status: 'pending' as const,
            date: new Date().toISOString(),
            source: referralSource || 'direct',
            deliveryMode: formData.deliveryMode
        };
        addOrder(newOrder);
        clearCart();
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });

    };

    return (
        <div className="min-h-screen bg-dattes-bg font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
            <Header />

            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-display font-bold text-dattes-primary mb-8 text-center">{t.title}</h1>

                {isSuccess ? (
                    <div className="max-w-2xl mx-auto text-center py-16 px-8 bg-white rounded-[2rem] shadow-xl border border-green-100 animate-in fade-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500 shadow-inner">
                            <CheckCircle className="w-12 h-12" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-dattes-primary mb-4">
                            {t.successTitle}
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            {t.successMsg}
                        </p>
                        <div className="bg-amber-50 rounded-2xl p-6 mb-10 border border-amber-100 flex items-center gap-4 text-left">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-amber-500 shadow-sm flex-shrink-0">
                                <ShoppingBag className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-dattes-primary text-sm">{t.nextStep}</p>
                                <p className="text-gray-600 text-sm">{t.nextStepDesc}</p>
                            </div>
                        </div>
                        <Link href="/" className="inline-flex items-center gap-2 bg-dattes-primary text-white px-10 py-4 rounded-full hover:bg-dattes-accent transition-all font-bold shadow-lg shadow-dattes-primary/20 hover:scale-105">
                            {t.returnHome}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                ) : cart.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-dattes-primary/5">
                        <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                        <p className="text-gray-500 mb-6">{t.emptyCart}</p>
                        <Link href="/" className="inline-block bg-dattes-primary text-white px-8 py-3 rounded-full hover:bg-dattes-accent transition-colors font-bold">
                            {t.discoverProducts}
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Cart Items */}
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-center border border-dattes-primary/5">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-gray-100" />

                                    <div className="flex-1">
                                        <h3 className="font-bold text-dattes-primary">{item.name} <span className="text-xs text-dattes-accent font-normal bg-dattes-accent/10 px-2 py-0.5 rounded-full">{item.quality}</span></h3>
                                        <p className="text-sm font-bold text-gray-500">{item.pricePerKg} DA / kg</p>
                                    </div>

                                    <div className="flex flex-col items-end gap-2">
                                        <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantityKg - 1))}
                                                className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-dattes-primary hover:bg-dattes-accent hover:text-white transition-colors"
                                            >-</button>
                                            <span className="text-sm font-bold w-8 text-center">{item.quantityKg} kg</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantityKg + 1)}
                                                className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-dattes-primary hover:bg-dattes-accent hover:text-white transition-colors"
                                            >+</button>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-500 text-xs flex items-center gap-1">
                                            <Trash2 className="w-3 h-3" /> {t.remove}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Checkout Form */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-dattes-accent/20 h-fit sticky top-24">
                            <h2 className="text-xl font-bold text-dattes-primary mb-6 flex items-center gap-2">
                                <span>📦</span> {t.deliveryInfo}
                            </h2>

                            <form onSubmit={handleCheckout} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t.fullName}</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50 transition-all"
                                        placeholder={t.yourName}
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t.phone}</label>
                                    <input
                                        required
                                        type="tel"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50 transition-all"
                                        placeholder="05 XX XX XX XX"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">{t.wilaya}</label>
                                        <select
                                            required
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50 transition-all appearance-none"
                                            value={formData.wilaya}
                                            onChange={e => {
                                                setFormData({ ...formData, wilaya: e.target.value, commune: '' });
                                            }}
                                        >
                                            <option value="">{t.select}</option>
                                            {Object.keys(ALGERIA_LOCATIONS).map((w, i) => (
                                                <option key={w} value={w}>{i + 1} - {w}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">{t.commune}</label>
                                        <select
                                            required
                                            disabled={!formData.wilaya}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50 transition-all appearance-none disabled:opacity-50"
                                            value={formData.commune}
                                            onChange={e => setFormData({ ...formData, commune: e.target.value })}
                                        >
                                            <option value="">{t.select}</option>
                                            {availableCommunes.map(c => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Delivery Mode Selection */}
                                <div className="mt-6 p-4 bg-gray-50 rounded-xl space-y-3">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        {language === 'en' ? 'Delivery Mode' : language === 'ar' ? 'طريقة التوصيل' : 'Mode de Livraison'}
                                    </label>

                                    <label className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${formData.deliveryMode === 'bureau' ? 'border-dattes-accent bg-white shadow-sm' : 'border-transparent hover:bg-gray-100'}`}>
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="radio"
                                                name="deliveryMode"
                                                value="bureau"
                                                checked={formData.deliveryMode === 'bureau'}
                                                onChange={() => setFormData({ ...formData, deliveryMode: 'bureau' })}
                                                className="w-5 h-5 text-dattes-accent"
                                            />
                                            <div>
                                                <div className="font-bold text-gray-800">
                                                    {language === 'en' ? 'Stop Desk (Bureau)' : language === 'ar' ? 'المكتب (Stop Desk)' : 'Bureau (Stop Desk)'}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {language === 'en' ? 'Pick up from Yalidine office' : language === 'ar' ? 'استلام من مكتب ياليدين' : 'Récupérer au bureau Yalidine'}
                                                </div>
                                            </div>
                                        </div>
                                        {formData.wilaya && (
                                            <div className="font-bold text-dattes-accent">
                                                {getDeliveryFee(formData.wilaya, 'bureau')} DA
                                            </div>
                                        )}
                                    </label>

                                    <label className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${formData.deliveryMode === 'home' ? 'border-dattes-accent bg-white shadow-sm' : 'border-transparent hover:bg-gray-100'}`}>
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="radio"
                                                name="deliveryMode"
                                                value="home"
                                                checked={formData.deliveryMode === 'home'}
                                                onChange={() => setFormData({ ...formData, deliveryMode: 'home' })}
                                                className="w-5 h-5 text-dattes-accent"
                                            />
                                            <div>
                                                <div className="font-bold text-gray-800">
                                                    {language === 'en' ? 'Home Delivery' : language === 'ar' ? 'توصيل للمنزل' : 'À Domicile'}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {language === 'en' ? 'Delivered to your door' : language === 'ar' ? 'توصيل حتى باب المنزل' : 'Livraison jusqu\'à la porte'}
                                                </div>
                                            </div>
                                        </div>
                                        {formData.wilaya && (
                                            <div className="font-bold text-dattes-accent">
                                                {getDeliveryFee(formData.wilaya, 'home')} DA
                                            </div>
                                        )}
                                    </label>
                                </div>

                                <div className="pt-4 border-t border-dashed border-gray-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-500">{t.subtotal}</span>
                                        <span className="font-bold text-dattes-primary">{itemsTotal.toLocaleString()} DA</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-gray-500">{t.delivery}</span>
                                        <span className="font-bold text-green-600">{deliveryFee > 0 ? `${deliveryFee} DA` : t.calculated}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xl font-bold text-dattes-primary">
                                        <span>{t.total}</span>
                                        <span>{finalTotal.toLocaleString()} DA</span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20 flex items-center justify-center gap-2"
                                >
                                    <span>{t.proceed}</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div >
    );
}

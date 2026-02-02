'use client';

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useStore } from '@/lib/store';
import { ShoppingBag, ChevronLeft, Truck, ShieldCheck, Leaf } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function ProductContent({ id }: { id: string }) {
    const { language, inventory, addToCart, incrementVisits } = useStore();
    const isRtl = language === 'ar';
    const [added, setAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        incrementVisits();
    }, [incrementVisits]);

    const product = inventory.find(p => p.id === id);

    if (!product) {
        notFound();
    }

    const displayType = (isRtl && product.typeAr) ? product.typeAr : product.type;
    const displayQuality = (isRtl && product.qualityAr) ? product.qualityAr : product.quality;
    const displayOrigin = (isRtl && product.originAr) ? product.originAr : (product.origin || 'Algérie');
    const displayDesc = (isRtl && product.descriptionAr) ? product.descriptionAr : (product.longDescription || product.description);

    const t = {
        back: isRtl ? 'عودة للمتجر' : 'Retour à la boutique',
        addToCart: isRtl ? 'أضف للسلة' : 'Ajouter au Panier',
        perKg: isRtl ? 'دج / كغ' : 'DA / Kg',
        description: isRtl ? 'الوصف' : 'Description',
        nutritional: isRtl ? 'القيمة الغذائية (لكل 100غ)' : 'Valeurs Nutritionnelles (pour 100g)',
        calories: isRtl ? 'سعرات حرارية' : 'Calories',
        carbs: isRtl ? 'كربوهيدرات' : 'Glucides',
        protein: isRtl ? 'بروتين' : 'Protéines',
        fiber: isRtl ? 'ألياف' : 'Fibres',
        origin: isRtl ? 'المصدر' : 'Origine',
        deliveryInfo: isRtl ? 'توصيل سريع 69 ولاية' : 'Livraison Rapide 69 Wilayas',
        organic: isRtl ? 'طبيعي 100٪' : '100% Naturel',
        guarantee: isRtl ? 'جودة مضمونة' : 'Qualité Garantie',
    };

    const handleAddToCart = () => {
        addToCart({
            id: crypto.randomUUID(),
            productId: product.id,
            name: displayType,
            quality: displayQuality,
            type: displayType,
            quantityKg: quantity,
            pricePerKg: product.pricePerKg,
            image: product.images?.[0] || '/products/deglet-nour.png'
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className={`min-h-screen bg-dattes-bg font-sans ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
            <Header />

            <div className="container mx-auto px-4 py-8">
                <Link href="/" className="inline-flex items-center text-gray-500 hover:text-dattes-primary mb-8 transition-colors">
                    <ChevronLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                    <span className="mx-2">{t.back}</span>
                </Link>

                <div className="bg-white rounded-3xl shadow-sm border border-dattes-primary/5 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
                        {/* Image Section */}
                        <div className="bg-gray-50 p-8 flex items-center justify-center">
                            <div className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden shadow-lg">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={product.images?.[0] || '/products/deglet-nour.png'}
                                    alt={displayType}
                                    className="w-full h-full object-cover"
                                />
                                <div className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold shadow-sm text-dattes-primary`}>
                                    {displayQuality}
                                </div>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="p-8 md:py-12 flex flex-col justify-center">
                            <div className="mb-6">
                                <p className="text-sm text-dattes-accent font-bold uppercase tracking-wider mb-2">{displayOrigin} - {isRtl ? 'الجزائر' : 'Algérie'}</p>
                                <h1 className="text-4xl font-display font-bold text-dattes-primary mb-2">{displayType}</h1>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold text-dattes-accent">{product.pricePerKg}</span>
                                    <span className="text-sm text-gray-500 font-bold uppercase">{t.perKg}</span>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                {displayDesc}
                            </p>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="flex flex-col items-center text-center p-3 bg-dattes-bg rounded-xl">
                                    <Leaf className="w-6 h-6 text-dattes-primary mb-2" />
                                    <span className="text-xs font-bold text-gray-600">{t.organic}</span>
                                </div>
                                <div className="flex flex-col items-center text-center p-3 bg-dattes-bg rounded-xl">
                                    <Truck className="w-6 h-6 text-dattes-primary mb-2" />
                                    <span className="text-xs font-bold text-gray-600">{t.deliveryInfo}</span>
                                </div>
                                <div className="flex flex-col items-center text-center p-3 bg-dattes-bg rounded-xl">
                                    <ShieldCheck className="w-6 h-6 text-dattes-primary mb-2" />
                                    <span className="text-xs font-bold text-gray-600">{t.guarantee}</span>
                                </div>
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8 border-b border-gray-100 pb-8">
                                <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 max-w-[150px]">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-12 h-12 flex items-center justify-center text-dattes-primary font-bold hover:bg-white rounded-l-xl transition-colors"
                                    >-</button>
                                    <div className="flex-1 text-center font-bold text-gray-800">{quantity} Kg</div>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-12 h-12 flex items-center justify-center text-dattes-primary font-bold hover:bg-white rounded-r-xl transition-colors"
                                    >+</button>
                                </div>
                                <button
                                    onClick={handleAddToCart}
                                    className={`flex-1 py-3 px-8 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-lg shadow-lg transform hover:-translate-y-0.5 ${added
                                        ? 'bg-green-600 text-white'
                                        : 'bg-dattes-primary text-white hover:bg-dattes-accent hover:text-dattes-primary'
                                        }`}
                                >
                                    {added ? <span>✓ Ajouté</span> : <><ShoppingBag className="w-5 h-5" /> {t.addToCart} - {product.pricePerKg * quantity} DA</>}
                                </button>
                            </div>

                            {/* Nutritional Info */}
                            {product.nutritionalInfo && (
                                <div>
                                    <h3 className="font-bold text-dattes-primary mb-4">{t.nutritional}</h3>
                                    <div className="grid grid-cols-4 gap-2 text-center">
                                        <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                                            <div className="text-dattes-accent font-bold text-lg">{product.nutritionalInfo.calories}</div>
                                            <div className="text-[10px] text-gray-500 uppercase">{t.calories}</div>
                                        </div>
                                        <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                                            <div className="text-gray-800 font-bold text-lg">{product.nutritionalInfo.carbs}g</div>
                                            <div className="text-[10px] text-gray-500 uppercase">{t.carbs}</div>
                                        </div>
                                        <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                                            <div className="text-gray-800 font-bold text-lg">{product.nutritionalInfo.protein}g</div>
                                            <div className="text-[10px] text-gray-500 uppercase">{t.protein}</div>
                                        </div>
                                        <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                                            <div className="text-gray-800 font-bold text-lg">{product.nutritionalInfo.fiber}g</div>
                                            <div className="text-[10px] text-gray-500 uppercase">{t.fiber}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useStore, InventoryItem } from '@/lib/store';
import { ShoppingBag, Info } from 'lucide-react';

export default function ProductPage() {
    const { language, inventory, addToCart } = useStore();
    const isRtl = language === 'ar';
    const t = {
        ourProducts: isRtl ? 'منتجاتنا' : 'Nos Produits',
        addToCart: isRtl ? 'أضف للسلة (1 كغ)' : 'Ajouter (1 kg)',
        perKg: isRtl ? 'دج / كغ' : 'DA / Kg',
        origin: isRtl ? 'المصدر' : 'Origine',
    };

    const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

    const handleAddToCart = (product: InventoryItem) => {
        addToCart({
            id: crypto.randomUUID(),
            productId: product.id,
            name: product.type,
            quality: product.quality,
            type: product.type,
            quantityKg: 1,
            pricePerKg: product.pricePerKg,
            image: product.images[0]
        });
        setAddedItems(prev => ({ ...prev, [product.id]: true }));
        setTimeout(() => setAddedItems(prev => ({ ...prev, [product.id]: false })), 2000);
    };

    return (
        <div className={`min-h-screen bg-dattes-bg pb-24 font-sans ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
            <Header />
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-display font-bold text-dattes-primary mb-8 text-center">{t.ourProducts}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {inventory.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-dattes-primary/5 group">
                            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={product.images[0]}
                                    alt={product.type}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-bold shadow-sm text-dattes-primary">
                                    {product.quality}
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-lg text-dattes-primary">{product.type}</h3>
                                        <p className="text-xs text-gray-500 flex items-center gap-1">
                                            <Info className="w-3 h-3" /> {t.origin}: {product.origin || 'Algérie'}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-xl text-dattes-accent">{product.pricePerKg}</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">{t.perKg}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5em]">{product.description}</p>
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${addedItems[product.id]
                                            ? 'bg-green-600 text-white'
                                            : 'bg-dattes-primary text-white hover:bg-dattes-accent hover:text-dattes-primary'
                                        }`}
                                >
                                    {addedItems[product.id] ? <span>✓ Ajouté</span> : <><ShoppingBag className="w-4 h-4" /> {t.addToCart}</>}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

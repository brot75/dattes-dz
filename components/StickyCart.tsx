'use client';

import { useStore } from '@/lib/store';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function StickyCart() {
    const { cart, language, calculateTotal } = useStore();
    const pathname = usePathname();
    const [animate, setAnimate] = useState(false);

    // Trigger animation when cart changes
    useEffect(() => {
        if (cart.length > 0) {
            setAnimate(true);
            const timer = setTimeout(() => setAnimate(false), 300);
            return () => clearTimeout(timer);
        }
    }, [cart.length]);

    // Don't show if empty
    if (cart.length === 0) return null;

    const total = calculateTotal();
    const isRtl = language === 'ar';

    return (
        <div className={`mt-8 mb-8 container mx-auto px-4 flex justify-center transition-transform duration-200 ${animate ? 'scale-105' : 'scale-100'}`}>
            <Link
                href="/cart"
                className="bg-dattes-primary text-white py-3 px-8 rounded-full shadow-lg flex items-center gap-4 hover:bg-dattes-dark transition-all border border-dattes-accent/20 backdrop-blur-sm group"
            >
                <div className="bg-white/20 p-2 rounded-full relative">
                    <ShoppingBag className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 bg-dattes-accent text-dattes-primary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                        {cart.length}
                    </span>
                </div>

                <div className="flex flex-col text-left">
                    <span className="text-[10px] text-white/80 uppercase font-bold tracking-wider leading-none mb-1">
                        {language === 'en' ? 'Total' : language === 'ar' ? 'الإجمالي' : 'Total'}
                    </span>
                    <span className="font-bold text-sm font-mono leading-none">
                        {total.toLocaleString()} DA
                    </span>
                </div>

                <div className="w-px h-8 bg-white/20 mx-2" />

                <div className="flex items-center gap-2 font-bold group-hover:translate-x-1 transition-transform">
                    <span>{language === 'en' ? 'Checkout' : language === 'ar' ? 'إتمام الطلب' : 'Commander'}</span>
                    {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </div>
            </Link>
        </div>
    );
}

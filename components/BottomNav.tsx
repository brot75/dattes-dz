'use client';
import { Home, ShoppingBag, Shirt } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@/lib/store';

export function BottomNav() {
    const { cart, language } = useStore();
    const pathname = usePathname();
    const cartCount = cart.reduce((acc, item) => acc + item.quantityKg, 0);
    const isRtl = language === 'ar';

    const t = {
        home: isRtl ? 'الرئيسية' : 'Accueil',
        models: isRtl ? 'المنتجات' : 'Produits',
        cart: isRtl ? 'السلة' : 'Panier'
    };

    const NavItem = ({ icon: Icon, label, href, active }: { icon: any, label: string, href: string, active: boolean }) => (
        <Link href={href} className={`flex flex-col items-center justify-center w-full py-2 ${active ? 'text-dattes-accent' : 'text-gray-400'}`}>
            <div className="relative">
                <Icon className={`w-6 h-6 mb-1 ${active ? 'fill-current' : ''}`} />
                {label === t.cart && cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                        {cartCount}
                    </span>
                )}
            </div>
            <span className="text-[10px] font-medium tracking-wide">{label}</span>
        </Link>
    );

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-5px_10px_rgba(0,0,0,0.02)] z-50 flex justify-around items-center h-16 pb-safe">
            <NavItem icon={Home} label={t.home} href="/" active={pathname === '/'} />
            <NavItem icon={Shirt} label={t.models} href="/product" active={pathname === '/product'} />
            <NavItem icon={ShoppingBag} label={t.cart} href="/cart" active={pathname === '/cart'} />
        </nav>
    );
}

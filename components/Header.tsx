'use client';
import Link from 'next/link';
import { Globe, ShoppingCart } from 'lucide-react';
import { useStore } from '@/lib/store';
import { useState, useRef, useEffect } from 'react';

export function Header() {
    const { language, setLanguage, cart } = useStore();
    const isRtl = language === 'ar';
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const totalItems = cart.reduce((acc, item) => acc + item.quantityKg, 0);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const languages = [
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'ar', label: 'العربية', flag: '🇩🇿' },
        { code: 'en', label: 'English', flag: '🇺🇸' }
    ] as const;

    const currentLang = languages.find(l => l.code === language) || languages[0];

    return (
        <header dir="ltr" className="flex items-center justify-between p-4 bg-dattes-bg sticky top-0 z-40 shadow-sm/50 backdrop-blur-md bg-opacity-95 h-20 md:h-28 transition-all">
            {/* Left: Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 text-xs font-bold border border-dattes-accent/50 rounded-full px-3 py-1.5 text-dattes-primary hover:bg-dattes-accent/10 transition-colors bg-white/50 backdrop-blur-sm"
                >
                    <Globe className="w-3.5 h-3.5" />
                    <span>{currentLang.label}</span>
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-dattes-primary/5 py-1 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code as any);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-xs font-bold flex items-center gap-3 hover:bg-dattes-accent/10 transition-colors ${language === lang.code ? 'text-dattes-primary bg-dattes-accent/5' : 'text-gray-600'
                                    }`}
                            >
                                <span className="text-base">{lang.flag}</span>
                                {lang.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Center: Title / Logo */}
            <Link href="/" className="flex items-center group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-new.png" alt="AB Dattes" className="h-20 md:h-24 w-auto object-contain transition-transform group-hover:scale-105" />
            </Link>

            {/* Right: Auth & Cart */}
            <div className="flex items-center gap-4">
                {/* Auth Controls */}
                <AuthControls />

                <Link href="/cart" className="relative p-2 hover:bg-dattes-accent/10 rounded-full transition-colors text-dattes-primary group">
                    <span className="sr-only">Panier</span>
                    <ShoppingCart className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    {totalItems > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white min-w-[20px] text-center">
                            {totalItems}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
}

function AuthControls() {
    const { currentUser, logout, language } = useStore();
    const isRtl = language === 'ar';
    const t = {
        login: isRtl ? 'دخول' : 'Connexion',
        admin: isRtl ? 'لوحة التحكم' : 'Admin',
        logout: isRtl ? 'خروج' : 'Déconnexion'
    };

    if (currentUser) {
        return (
            <div className="flex items-center gap-3">
                {(currentUser.role === 'admin' || currentUser.email === 'admin@dattes.dz') && (
                    <Link href="/admin" className="text-xs font-bold text-white bg-dattes-primary border border-dattes-accent px-4 py-2 rounded-full hover:bg-black transition-colors shadow-md">
                        {t.admin}
                    </Link>
                )}
                <div className="flex items-center gap-2">
                    <Link
                        href={(currentUser.role === 'admin' || currentUser.email === 'admin@dattes.dz') ? "/admin" : "/profile"}
                        className="hidden md:block text-xs font-bold text-gray-600 hover:text-dattes-primary transition-colors"
                    >
                        {currentUser.name}
                    </Link>
                    <button onClick={() => {
                        if (confirm(t.logout + ' ?')) logout();
                    }} className="text-xs text-red-500 hover:underline font-bold">
                        {t.logout}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <Link href="/login" className="flex items-center gap-1.5 text-xs font-bold text-dattes-primary hover:text-dattes-accent transition-colors">
            {t.login}
        </Link>
    );
}

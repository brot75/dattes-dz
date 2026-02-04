'use client';

import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    BarChart3,
    ShoppingBag,
    Package,
    Users,
    LogOut,
    Menu,
    X,
    ChevronRight,
    Store
} from 'lucide-react';
import { useStore } from '@/lib/store';

const SIDEBAR_ITEMS = [
    { title: 'Tableau de bord', icon: LayoutDashboard, href: '/admin' },
    { title: 'Analytiques', icon: BarChart3, href: '/admin/analytics' },
    { title: 'Commandes', icon: ShoppingBag, href: '/admin/orders' },
    { title: 'Produits', icon: Package, href: '/admin/products' },
    { title: 'Utilisateurs', icon: Users, href: '/admin/users' },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { logout, currentUser, _hasHydrated } = useStore();

    // Prevent hydration mismatch
    if (!_hasHydrated) {
        return <div className="min-h-screen flex items-center justify-center text-dattes-primary font-bold">Chargement...</div>;
    }

    if (!currentUser || currentUser.role !== 'admin') {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4">
                <h1 className="text-2xl font-bold text-dattes-primary mb-4">Accès Refusé</h1>
                <p className="text-gray-500 mb-6">Vous devez être administrateur pour accéder à cette page.</p>
                <Link href="/login" className="bg-dattes-primary text-white px-6 py-2 rounded-xl font-bold hover:bg-dattes-accent transition-colors">
                    Se Connecter
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FDFCFB] flex">
            {/* Sidebar */}
            <aside
                className={`
                    ${isSidebarOpen ? 'w-64' : 'w-20'} 
                    bg-white border-r border-gray-100 
                    transition-all duration-300 
                    flex flex-col 
                    fixed lg:sticky top-0 h-screen z-50
                `}
            >
                <div className="p-6 flex items-center justify-between">
                    <div className={`flex items-center gap-2 font-display font-bold text-dattes-primary transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo-new.png" alt="Admin" className="h-8 w-auto object-contain" />
                        <span>Admin</span>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        {isSidebarOpen ? <X className="w-5 h-5 text-gray-400" /> : <Menu className="w-5 h-5 text-gray-400" />}
                    </button>
                </div>

                <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                    {SIDEBAR_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        // Calculate badge for orders
                        const pendingCount = item.href === '/admin/orders'
                            ? (useStore.getState().orders?.filter(o => o.status === 'pending').length || 0)
                            : 0;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all group
                                    ${isActive
                                        ? 'bg-dattes-primary text-white shadow-lg shadow-dattes-primary/20'
                                        : 'text-gray-500 hover:bg-gray-50'
                                    }
                                `}
                            >
                                <div className="relative">
                                    <item.icon className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                                    {/* Badge for collapsed state optional, but let's keep it simple for now or adding a dot? */}
                                </div>

                                {isSidebarOpen && (
                                    <div className="flex flex-1 items-center justify-between min-w-0">
                                        <span className="font-bold text-sm tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
                                            {item.title}
                                        </span>
                                        {pendingCount > 0 && (
                                            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm ml-2 animate-pulse">
                                                {pendingCount}
                                            </span>
                                        )}
                                    </div>
                                )}
                                {isActive && isSidebarOpen && <ChevronRight className="w-4 h-4 ml-auto opacity-50 flex-shrink-0" />}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 mt-auto border-t border-gray-50 space-y-2 bg-white">
                    <button
                        onClick={logout}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all font-bold text-sm"
                    >
                        <LogOut className="w-5 h-5 flex-shrink-0" />
                        {isSidebarOpen && <span>Déconnexion</span>}
                    </button>

                    {isSidebarOpen && currentUser && (
                        <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-dattes-accent/20 flex items-center justify-center text-dattes-primary font-bold text-xs">
                                {currentUser.name?.[0] || 'A'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-gray-800 truncate">{currentUser.name}</p>
                                <p className="text-[10px] text-gray-400 truncate">{currentUser.email}</p>
                            </div>
                        </div>
                    )}
                </div>
            </aside>

            {/* Main Content */}
            <main className={`
                flex-1 
                transition-all duration-300
                ${isSidebarOpen ? 'lg:ml-0' : 'lg:ml-0'} 
                ${isSidebarOpen ? 'ml-64' : 'ml-20'} 
                /* Mobile: Sidebar is fixed, so main needs padding. 
                   But wait, isSidebarOpen logic above toggles width. 
                   If fixed, main content stays under. 
                   We need to push main content on desktop, and maybe overlay on mobile? */
                   lg:ml-0 /* Reset for flex behavior */
            `}>
                <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
                    {children}
                </div>
            </main>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
}

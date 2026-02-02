'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';
import { TrendingUp, Eye, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
    const [isLoading, setIsLoading] = useState(true);

    const { orders, users, totalVisits, settings, updateSettings, inventory } = useStore();

    const handleUploadHero = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Resize and Encode to Base64 (Bypass Storage Requirements)
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 1200;
                let width = img.width;
                let height = img.height;

                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0, width, height);

                // Compress to JPEG 0.8 to ensure < 500KB for Firestore
                const dataUrl = canvas.toDataURL('image/jpeg', 0.8);

                updateSettings({ heroImage: dataUrl });
                alert("Image mise à jour avec succès ! (Mode Base64)");
            };
            img.src = event.target?.result as string;
        };
        reader.readAsDataURL(file);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const user = useStore.getState().currentUser;
            if (!user || (user.role !== 'admin' && user.email !== 'admin@dattes.dz')) {
                window.location.href = '/login';
            } else {
                setIsLoading(false);
            }
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-dattes-bg">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dattes-primary"></div>
            </div>
        );
    }

    const totalSales = orders.reduce((acc, order) => acc + order.total, 0);
    // Note: Inventory stats are now on the products page, but we can keep basic counters if needed.
    // However, for consistency, we'll focus on Sales/Orders/Visits here.

    return (
        <div className="space-y-8 pb-20">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Tableau de Bord</h1>
                <div className="flex items-center gap-4">
                    <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-bold text-gray-800">{totalVisits} <span className="text-gray-400 font-normal">Visites</span></span>
                    </div>
                </div>
            </div>

            {/* VERCEL WARNING BANNER */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex items-start gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                    <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-yellow-800">Mode Démonstration (Vercel)</h3>
                    <p className="text-sm text-yellow-700 mt-1">
                        Vous êtes sur un serveur "Read-Only". Les modifications (images, prix) ne sont <strong>pas sauvegardées définitivement</strong>.
                        Si vous rechargez la page, les valeurs par défaut (Audi RS6) reviendront.
                        <br />
                        Pour activer la sauvegarde permanente, une base de données est requise.
                    </p>
                </div>
            </div>

            {/* Analytics Summary */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-50 rounded-xl">
                            <BarChart3 className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">Analytiques En Direct</h2>
                            <p className="text-sm text-gray-400">Performances globales de votre boutique.</p>
                        </div>
                    </div>
                    <Link
                        href="/admin/analytics"
                        className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 hover:bg-dattes-primary hover:text-white text-gray-600 rounded-2xl text-sm font-bold transition-all shadow-sm border border-gray-100"
                    >
                        Explorer en détail <TrendingUp className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="group relative">
                        <div className="absolute inset-0 bg-purple-50 rounded-3xl scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
                        <div className="relative p-2">
                            <div className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-widest pl-1">Utilisateurs</div>
                            <div className="text-4xl font-bold text-gray-800">{users.length}</div>
                            <div className="mt-3 text-[10px] font-bold text-purple-500 bg-purple-50 w-fit px-2 py-1 rounded-lg">
                                +12% ce mois
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="absolute inset-0 bg-orange-50 rounded-3xl scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
                        <div className="relative p-2">
                            <div className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-widest pl-1">Valeur Stock</div>
                            <div className="text-4xl font-bold text-gray-800">
                                {inventory.reduce((acc, item) => acc + (item.pricePerKg * item.stockKg), 0).toLocaleString()} <span className="text-xl">DA</span>
                            </div>
                            <div className="mt-3 text-[10px] font-bold text-orange-500 bg-orange-50 w-fit px-2 py-1 rounded-lg">
                                Stable
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="absolute inset-0 bg-indigo-50 rounded-3xl scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
                        <div className="relative p-2">
                            <div className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-widest pl-1">Visiteurs</div>
                            <div className="text-4xl font-bold text-gray-800">{totalVisits}</div>
                            <div className="mt-3 text-[10px] font-bold text-indigo-500 bg-indigo-50 w-fit px-2 py-1 rounded-lg">
                                En direct
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="absolute inset-0 bg-blue-50 rounded-3xl scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
                        <div className="relative p-2">
                            <div className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-widest pl-1">Sources Trafic</div>
                            <div className="space-y-1">
                                {['instagram', 'facebook', 'whatsapp', 'direct'].map(source => {
                                    const count = orders.filter(o => (o.source || 'direct') === source).length;
                                    if (count === 0) return null;
                                    return (
                                        <div key={source} className="flex justify-between text-xs font-bold">
                                            <span className="capitalize text-gray-500">{source}</span>
                                            <span className="text-dattes-primary">{count}</span>
                                        </div>
                                    );
                                })}
                                {orders.length === 0 && <div className="text-xs text-gray-400 italic">Aucune donnée</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Site Settings Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                    <TrendingUp className="w-5 h-5 text-dattes-accent" />
                    <h2 className="text-lg font-bold text-dattes-primary">Personnalisation</h2>
                </div>
                <div className="flex items-start gap-6">
                    <div className="w-48 h-32 bg-gray-100 rounded-xl overflow-hidden relative shadow-md group border border-gray-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={settings?.heroImage || '/hero-dates-v2.png'} alt="Hero" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white text-xs font-bold">Changer Image</span>
                        </div>
                        <input
                            type="file"
                            onChange={handleUploadHero}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            accept="image/*"
                        />
                    </div>
                    <div>
                        <h3 className="font-bold text-dattes-primary mb-1">Image d'accueil</h3>
                        <p className="text-sm text-gray-500 mb-4">Image principale affichée sur la page d'accueil.</p>
                        <div className="relative inline-block">
                            <input
                                type="file"
                                onChange={handleUploadHero}
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                accept="image/*"
                            />
                            <button className="bg-dattes-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-black transition-colors">
                                📸 Changer l'image
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards - Matched Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Total Sales */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                    <div>
                        <div className="text-sm font-bold text-gray-500 mb-1">Total Ventes</div>
                        <div className="text-3xl font-bold text-gray-800 mb-2">{totalSales.toLocaleString()} DA</div>
                        <div className="text-xs font-medium text-gray-400 px-2 py-1 bg-gray-50 rounded-full inline-block">
                            {orders.length} commandes
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-green-50 text-green-600">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/icons/coin.png" alt="Sales" className="w-10 h-10 object-contain" />
                    </div>
                </div>

                {/* Active Orders */}
                <Link href="/admin/orders?status=pending" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center hover:border-dattes-accent transition-colors group">
                    <div>
                        <div className="text-sm font-bold text-gray-500 mb-1">Commandes Actives</div>
                        <div className="text-3xl font-bold text-gray-800 mb-2">{orders.filter(o => o.status === 'pending').length}</div>
                        <div className="text-xs font-medium text-gray-400 px-2 py-1 bg-gray-50 rounded-full inline-block">
                            En attente
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/notification.png" alt="Orders" className="w-10 h-10 object-contain" />
                    </div>
                </Link>

                {/* Stock Alert */}
                <Link href="/admin/products" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center hover:border-red-500 transition-colors group">
                    <div>
                        <div className="text-sm font-bold text-gray-500 mb-1">Alertes Stock</div>
                        <div className="text-3xl font-bold text-gray-800 mb-2">{useStore.getState().inventory.filter(i => i.stockKg < 50).length}</div>
                        <div className="text-xs font-medium text-gray-400 px-2 py-1 bg-gray-50 rounded-full inline-block">
                            Stock faible
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-red-50 text-red-600 group-hover:scale-110 transition-transform">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/alert.png" alt="Stock" className="w-10 h-10 object-contain" />
                    </div>
                </Link>
            </div>

            {/* Delivery Fees Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <h2 className="text-lg font-bold text-dattes-primary">Tarifs de Livraison (DA)</h2>
                    </div>
                </div>
                <div className="overflow-x-auto border border-gray-50 rounded-xl">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-3 text-xs font-bold text-gray-400 uppercase">Wilaya</th>
                                <th className="p-3 text-xs font-bold text-gray-400 uppercase">Domicile (DA)</th>
                                <th className="p-3 text-xs font-bold text-gray-400 uppercase">Bureau (DA)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {Object.entries(settings?.deliveryFees || {}).map(([wilaya, fees]) => {
                                const homeFee = typeof fees === 'object' ? fees.home : fees;
                                const bureauFee = typeof fees === 'object' ? fees.bureau : (fees - 200 > 0 ? fees - 200 : 0); // Fallback estimate

                                return (
                                    <tr key={wilaya} className="group hover:bg-gray-50/50 transition-colors">
                                        <td className="p-3 text-sm font-bold text-gray-800">{wilaya}</td>
                                        <td className="p-3">
                                            <input
                                                type="number"
                                                name={`fee-home-${wilaya}`}
                                                className="w-24 p-2 bg-white border border-gray-200 rounded-lg text-xs font-bold focus:border-dattes-accent outline-none"
                                                value={homeFee}
                                                onChange={(e) => {
                                                    const val = Number(e.target.value);
                                                    const current = typeof settings.deliveryFees[wilaya] === 'object'
                                                        ? settings.deliveryFees[wilaya]
                                                        : { home: val, bureau: val - 200 };

                                                    const newFees = {
                                                        ...settings.deliveryFees,
                                                        [wilaya]: { ...current, home: val }
                                                    };
                                                    updateSettings({ deliveryFees: newFees });
                                                }}
                                            />
                                        </td>
                                        <td className="p-3">
                                            <input
                                                type="number"
                                                name={`fee-bureau-${wilaya}`}
                                                id={`fee-bureau-${wilaya}`}
                                                className="w-24 p-2 bg-white border border-gray-200 rounded-lg text-xs font-bold focus:border-dattes-accent outline-none"
                                                value={bureauFee}
                                                onChange={(e) => {
                                                    const val = Number(e.target.value);
                                                    const current = typeof settings.deliveryFees[wilaya] === 'object'
                                                        ? settings.deliveryFees[wilaya]
                                                        : { home: homeFee, bureau: val };

                                                    const newFees = {
                                                        ...settings.deliveryFees,
                                                        [wilaya]: { ...current, bureau: val }
                                                    };
                                                    updateSettings({ deliveryFees: newFees });
                                                }}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-xs text-gray-400 italic">Les modifications sont enregistrées automatiquement dans les paramètres du site.</p>
            </div>
        </div>
    );
}

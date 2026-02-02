'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';
import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import {
    TrendingUp, Users, ShoppingBag, AlertCircle, RefreshCcw, MousePointerClick,
    Edit3, X, Save, Calendar as CalendarIcon, Info, Globe, Instagram, ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

// Design Constants - Adapted for DattesDZ
const COLORS = {
    dattes: ['#432818', '#99582A', '#BB9457', '#FFE6A7'],
    accent: '#BB9457',
    primary: '#432818',
    glass: 'rgba(255, 255, 255, 0.7)',
    glassBorder: 'rgba(255, 255, 255, 0.5)'
};

const FacebookIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.405 0 3.07.123 3.07.123v3.36h-1.921c-2.191 0-2.384 1.378-2.384 2.721v1.353h3.957l-.467 3.667h-3.49v7.98h-4.624z" />
    </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

export default function AnalyticsPage() {
    const { analyticsData, updateAnalyticsData, orders, totalVisits, inventory } = useStore();
    const [timeRange, setTimeRange] = useState<'7d' | '30d' | '3m' | '1y'>('30d');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    // -- AUTOMATED METRICS & CHART DATA --
    const stats = useMemo(() => {
        const now = new Date();
        const cutoff = new Date();
        if (timeRange === '7d') cutoff.setDate(now.getDate() - 7);
        if (timeRange === '30d') cutoff.setDate(now.getDate() - 30);
        if (timeRange === '3m') cutoff.setMonth(now.getMonth() - 3);
        if (timeRange === '1y') cutoff.setFullYear(now.getFullYear() - 1);

        const filteredOrders = orders.filter(o => new Date(o.date) >= cutoff);

        const totalRevenue = filteredOrders.reduce((sum, o) => sum + o.total, 0);
        const totalOrders = filteredOrders.length;

        // Profit Calculation
        let totalProfit = 0;
        const varietyProfits: Record<string, number> = {};

        filteredOrders.forEach(order => {
            order.items.forEach(item => {
                const invItem = inventory.find(i => i.id === item.productId);
                const cost = invItem?.purchasePrice || (item.pricePerKg * 0.7);
                const profit = (item.pricePerKg - cost) * item.quantityKg;

                if (order.status !== 'cancelled' && order.status !== 'returned') {
                    totalProfit += profit;
                    varietyProfits[item.type] = (varietyProfits[item.type] || 0) + profit;
                }
            });
        });

        const bestVariety = Object.entries(varietyProfits).sort((a, b) => b[1] - a[1])[0] || ['N/A', 0];

        // Stock Value
        const stockValue = inventory.reduce((sum, item) => sum + (item.stockKg * (item.purchasePrice || item.pricePerKg * 0.7)), 0);

        // Returns Logic
        const returnedOrders = filteredOrders.filter(o => o.status === 'returned');
        const returnRate = totalOrders > 0 ? (returnedOrders.length / totalOrders) * 100 : 0;

        // Return Reasons Aggregation
        const reasonCounts: Record<string, number> = {};
        returnedOrders.forEach(o => {
            const reason = o.returnReason || 'Autre';
            reasonCounts[reason] = (reasonCounts[reason] || 0) + 1;
        });
        const returnReasonsData = Object.entries(reasonCounts).map(([name, value]) => ({ name, value }));
        const finalReturnsData = returnReasonsData.length > 0 ? returnReasonsData : [{ name: 'Aucun retour', value: 1 }];

        // Conversion Logic
        const conversionRate = totalVisits > 0 ? (orders.length / totalVisits) * 100 : 0;

        // Group by Date for Chart
        const chartMap = new Map<string, number>();
        let current = new Date(cutoff);
        while (current <= now) {
            const dateStr = current.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
            chartMap.set(dateStr, 0);
            current.setDate(current.getDate() + 1);
        }

        filteredOrders.forEach(o => {
            const dateStr = new Date(o.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
            chartMap.set(dateStr, (chartMap.get(dateStr) || 0) + o.total);
        });

        const chartData = Array.from(chartMap.entries()).map(([name, rev]) => ({ name, rev }));

        return {
            totalRevenue,
            totalProfit,
            bestVariety,
            stockValue,
            returnRate: returnRate.toFixed(1),
            conversionRate: conversionRate.toFixed(2),
            chartData,
            totalOrders,
            returnReasonsData: finalReturnsData
        };
    }, [orders, timeRange, totalVisits, inventory]);

    // -- AUTOMATED TRAFFIC DATA --
    const trafficSources = useMemo(() => {
        const counts: Record<string, number> = {
            instagram: 0,
            facebook: 0,
            tiktok: 0,
            direct: 0
        };

        orders.forEach(o => {
            const src = (o.source || 'direct').toLowerCase();
            if (counts[src] !== undefined) counts[src]++;
            else counts[src] = (counts[src] || 0) + 1;
        });

        const total = Object.values(counts).reduce((a, b) => a + b, 0);
        return Object.entries(counts).map(([name, count]) => ({
            name: name.charAt(0).toUpperCase() + name.slice(1),
            value: total > 0 ? Math.round((count / total) * 100) : (name === 'direct' ? 100 : 0)
        })).sort((a, b) => b.value - a.value);
    }, [orders]);

    const handleSave = () => {
        // Now automated, but we could keep manual overrides for specific markers if needed
        setIsEditModalOpen(false);
    };

    const Card = ({ title, children, className = '' }: any) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            className={`rounded-3xl p-6 backdrop-blur-md border border-white/50 shadow-sm transition-all duration-300 ${className}`}
            style={{ background: COLORS.glass }}
        >
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4 flex items-center justify-between">
                {title}
            </h3>
            {children}
        </motion.div>
    );

    const Metric = ({ value, trend, sub, help }: any) => (
        <div className="relative group/metric">
            <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
            <div className={`text-xs font-bold flex items-center gap-1 ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
                <span className="text-gray-400 font-medium ml-1">{sub}</span>
            </div>
            {help && (
                <div className="absolute -top-8 left-0 opacity-0 group-hover/metric:opacity-100 transition-opacity bg-black/80 text-white text-[10px] p-2 rounded pointer-events-none w-48 z-10">
                    {help}
                </div>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50/50 p-4 md:p-8 space-y-8 relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-dattes-accent/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-dattes-primary/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4">
                    <Link href="/admin" className="p-2 hover:bg-white/80 rounded-full shadow-sm border border-white transition-colors">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Analytiques Abdattes</h1>
                        <p className="text-sm text-gray-500">Aperçu approfondi des performances de votre boutique.</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="bg-white/70 backdrop-blur-md p-1 rounded-2xl border border-white/50 shadow-sm flex">
                        {(['7d', '30d', '3m', '1y'] as const).map(range => (
                            <button
                                key={range}
                                onClick={() => setTimeRange(range)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${timeRange === range ? 'bg-dattes-primary text-white shadow-lg' : 'text-gray-500 hover:bg-white'}`}
                            >
                                {range === '7d' ? '7 Jours' : range === '30d' ? '30 Jours' : range === '3m' ? '3 Mois' : '1 An'}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setIsEditModalOpen(true)}
                        className="p-3 bg-white/70 backdrop-blur-md hover:bg-white rounded-2xl border border-white/50 shadow-sm text-gray-600 transition-all hover:scale-105"
                    >
                        <Edit3 className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-dattes-accent text-white rounded-2xl shadow-lg shadow-dattes-accent/20 hover:scale-105 transition-all">
                        <RefreshCcw className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                <Card title="Valeur de Stock">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-3xl font-bold text-gray-800 mb-1">{stats.stockValue.toLocaleString('fr-FR')} DA</div>
                            <div className="text-xs font-bold text-gray-400">{inventory.reduce((s, i) => s + i.stockKg, 0)} kg total</div>
                        </div>
                        <div className="w-20 h-20 relative bg-transparent">
                            <img src="/images/icons/coin.png" alt="Stock" className="w-full h-full object-contain drop-shadow-lg" />
                        </div>
                    </div>
                </Card>

                <Card title="Bénéfice Net">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-3xl font-bold text-dattes-primary mb-1">{stats.totalProfit.toLocaleString('fr-FR')} DA</div>
                            <div className="text-xs font-bold text-green-500 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" /> Top: {stats.bestVariety[0]}
                            </div>
                        </div>
                        <div className="w-20 h-20 relative opacity-40 grayscale hover:grayscale-0 transition-grayscale">
                            <img src="/images/icons/coin.png" alt="Stock" className="w-full h-full object-contain drop-shadow-lg" />
                        </div>
                    </div>
                </Card>

                <Card title="Taux de Retour">
                    <Metric
                        value={`${stats.returnRate}%`}
                        trend={-1.2}
                        sub={`${stats.totalOrders} commandes`}
                        help="Commandes marquées 'retournées' par rapport au total."
                    />
                </Card>

                <Card title="Conversion">
                    <Metric
                        value={`${stats.conversionRate}%`}
                        trend={0.15}
                        sub={`${totalVisits} visites`}
                        help="Commandes divisées par le nombre total de visites."
                    />
                </Card>
            </div>

            {/* Main Charts Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <Card title="Évolution du Chiffre d'Affaires">
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%" minWidth={100} minHeight={100}>
                            <AreaChart data={stats.chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor={COLORS.accent} stopOpacity={0.3} />
                                        <stop offset="95%" stopColor={COLORS.accent} stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#9CA3AF' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#9CA3AF' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                                    formatter={(value: any) => [`${value.toLocaleString()} DA`, 'Revenu']}
                                />
                                <Area type="monotone" dataKey="rev" stroke={COLORS.accent} strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <Card title="Distribution des Variétés (Ventes)">
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%" minWidth={100} minHeight={100}>
                            <BarChart data={inventory.map(i => ({ name: i.type, sales: orders.filter(o => o.items.some(it => it.productId === i.id)).length }))}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#9CA3AF' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#9CA3AF' }} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="sales" fill={COLORS.primary} radius={[10, 10, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>

            {/* Bottom Row: Returns & Traffic */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <Card title="Raisons des Retours">
                    <div className="h-64 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={stats.returnReasonsData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {stats.returnReasonsData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS.dattes[index % 4]} stroke="none" />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                            <span className="text-3xl font-bold text-gray-800">{stats.returnRate}%</span>
                            <span className="text-[10px] text-gray-400 font-bold uppercase">Taux</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {stats.returnReasonsData.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-500 font-bold">
                                <div className="w-2 h-2 rounded-full" style={{ background: COLORS.dattes[idx % 4] }} />
                                {item.name} ({item.value})
                            </div>
                        ))}
                    </div>
                </Card>

                <Card title="Sources de Trafic">
                    <div className="space-y-6 mt-4">
                        {trafficSources.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 group">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"
                                    style={{
                                        background: item.name === 'Instagram' ? 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
                                            : item.name === 'TikTok' ? '#000000'
                                                : item.name === 'Facebook' ? '#1877F2'
                                                    : '#3b5998'
                                    }}
                                >
                                    {item.name === 'Instagram' && <Instagram className="w-6 h-6" />}
                                    {item.name === 'TikTok' && <TikTokIcon className="w-5 h-5" />}
                                    {item.name === 'Facebook' && <FacebookIcon className="w-6 h-6" />}
                                    {item.name === 'Direct' && <Globe className="w-6 h-6" />}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between text-sm font-bold mb-2">
                                        <span className="text-gray-700">{item.name}</span>
                                        <span className="text-gray-900">{item.value}%</span>
                                    </div>
                                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.value}%` }}
                                            style={{
                                                background: item.name === 'Instagram' ? '#E1306C'
                                                    : item.name === 'TikTok' ? '#000000'
                                                        : item.name === 'Facebook' ? '#1877F2'
                                                            : '#3b82f6'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card title="Santé des Stocks">
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
                                <span>Taux d'écoulement</span>
                                <span className="text-green-500">85% Excellent</span>
                            </div>
                            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
                                <span>Alerte Ruptures</span>
                                <span className="text-orange-500">{inventory.filter(i => i.stockKg < 100).length} incidents</span>
                            </div>
                            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[20%] rounded-full" />
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-orange-50 border border-orange-100 flex gap-3 text-orange-700">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <div className="text-xs">
                                <span className="font-bold">Action:</span> La variété "Deglet Beida" est en stock faible. Prévoir un réapprovisionnement sous 7 jours.
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Edit Modal */}
            <AnimatePresence>
                {isEditModalOpen && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
                        >
                            <div className="p-6 border-b flex justify-between items-center">
                                <h3 className="text-xl font-bold text-gray-800">Données Manuelles</h3>
                                <button onClick={() => setIsEditModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
                            </div>
                            <div className="p-6 space-y-6">
                                <section>
                                    <h4 className="text-sm font-bold text-dattes-primary mb-3">Données Manuelles</h4>
                                    <p className="text-xs text-gray-500">Les données de trafic social sont désormais calculées automatiquement à partir de l'origine de vos commandes.</p>
                                </section>
                            </div>
                            <div className="p-6 bg-gray-50 border-t flex gap-3">
                                <button onClick={() => setIsEditModalOpen(false)} className="flex-1 py-3 font-bold text-gray-500 hover:text-gray-700">Annuler</button>
                                <button onClick={handleSave} className="flex-1 py-3 bg-dattes-primary text-white font-bold rounded-xl shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2">
                                    <Save className="w-4 h-4" /> Sauvegarder
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

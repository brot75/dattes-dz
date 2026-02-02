'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';
import { ALGERIA_LOCATIONS } from '@/lib/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { User as UserIcon, Package, Clock, CheckCircle, XCircle, LogOut, MapPin } from 'lucide-react';

export default function ProfilePage() {
    const { currentUser, orders, logout, updateUser } = useStore();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({ name: '', phone: '', wilaya: '', commune: '' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (currentUser) {
            setEditData({
                name: currentUser.name,
                phone: currentUser.phone || '',
                wilaya: currentUser.wilaya || '',
                commune: currentUser.commune || ''
            });
        }
    }, [currentUser]);

    useEffect(() => {
        if (isMounted) {
            if (!currentUser) {
                router.push('/login');
            } else if (currentUser.role === 'admin' || currentUser.email === 'admin@dattes.dz') {
                router.push('/admin');
            }
        }
    }, [isMounted, currentUser, router]);

    if (!isMounted || !currentUser) {
        return (
            <div className="flex h-screen items-center justify-center bg-dattes-bg">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dattes-primary"></div>
            </div>
        );
    }

    const myOrders = orders.filter(order => order.userId === currentUser.id);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        updateUser(editData);
        setMessage('Profil mis à jour avec succès !');
        setTimeout(() => {
            setMessage('');
            setIsEditing(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-dattes-bg font-sans">
            <Header />

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* User Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-dattes-primary/5">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-dattes-primary/10 rounded-full flex items-center justify-center text-dattes-primary mb-4">
                                    <UserIcon className="w-12 h-12" />
                                </div>

                                {isEditing ? (
                                    <form onSubmit={handleUpdate} className="w-full space-y-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 uppercase text-left mb-1">Nom</label>
                                            <input
                                                required
                                                className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                                                value={editData.name}
                                                onChange={e => setEditData({ ...editData, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 uppercase text-left mb-1">Téléphone</label>
                                            <input
                                                className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                                                value={editData.phone}
                                                onChange={e => setEditData({ ...editData, phone: e.target.value })}
                                                placeholder="05 XX XX XX XX"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-left">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Wilaya</label>
                                                <select
                                                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm appearance-none"
                                                    value={editData.wilaya}
                                                    onChange={e => setEditData({ ...editData, wilaya: e.target.value, commune: '' })}
                                                >
                                                    <option value="">Sélectionner</option>
                                                    {Object.keys(ALGERIA_LOCATIONS).map(w => (
                                                        <option key={w} value={w}>{w}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Commune</label>
                                                <select
                                                    disabled={!editData.wilaya}
                                                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm appearance-none disabled:opacity-50"
                                                    value={editData.commune}
                                                    onChange={e => setEditData({ ...editData, commune: e.target.value })}
                                                >
                                                    <option value="">Sélectionner</option>
                                                    {(ALGERIA_LOCATIONS[editData.wilaya] || []).map(c => (
                                                        <option key={c} value={c}>{c}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        {message && <p className="text-xs font-bold text-green-600">{message}</p>}
                                        <div className="flex gap-2">
                                            <button type="submit" className="flex-1 bg-dattes-primary text-white py-2 rounded-lg text-xs font-bold">Sauvegarder</button>
                                            <button type="button" onClick={() => setIsEditing(false)} className="flex-1 bg-gray-100 text-gray-600 py-2 rounded-lg text-xs font-bold">Annuler</button>
                                        </div>
                                    </form>
                                ) : (
                                    <>
                                        <h1 className="text-2xl font-bold text-dattes-primary">{currentUser.name}</h1>
                                        <p className="text-gray-500 font-medium">{currentUser.email}</p>
                                        <div className="mt-2 space-y-1">
                                            {currentUser.phone && <p className="text-gray-500 text-sm flex items-center justify-center gap-1">📞 {currentUser.phone}</p>}
                                            {currentUser.wilaya && (
                                                <p className="text-gray-400 text-xs flex items-center justify-center gap-1">
                                                    <MapPin className="w-3 h-3 text-dattes-accent" /> {currentUser.commune}, {currentUser.wilaya}
                                                </p>
                                            )}
                                        </div>

                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className="mt-4 text-xs font-bold text-dattes-accent border border-dattes-accent px-4 py-1 rounded-full hover:bg-dattes-accent hover:text-white transition-all mb-6"
                                        >
                                            Modifier Profil
                                        </button>
                                    </>
                                )}

                                <button
                                    onClick={() => {
                                        if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
                                            logout();
                                            router.push('/');
                                        }
                                    }}
                                    className="flex items-center gap-2 text-red-500 hover:text-red-600 font-bold transition-colors mt-4"
                                >
                                    <LogOut className="w-5 h-5" /> Déconnexion
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Order History */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-dattes-primary mb-6 flex items-center gap-2">
                            <Package className="w-6 h-6" /> Historique des Commandes
                        </h2>

                        {myOrders.length === 0 ? (
                            <div className="bg-white p-12 rounded-2xl shadow-sm border border-dattes-primary/5 text-center">
                                <p className="text-gray-500 mb-4">Vous n'avez pas encore passé de commande.</p>
                                <Link href="/" className="inline-block bg-dattes-primary text-white px-6 py-2 rounded-full hover:bg-dattes-accent transition-colors font-bold text-sm">
                                    Commencer mes achats
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {myOrders.map(order => (
                                    <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-dattes-primary/5 overflow-hidden">
                                        <div className="bg-gray-50 p-4 border-b border-gray-100 flex justify-between items-center flex-wrap gap-2">
                                            <div>
                                                <p className="font-bold text-gray-800">Commande #{order.id.slice(0, 8)}</p>
                                                <p className="text-xs text-gray-500">{new Date(order.date).toLocaleDateString()} à {new Date(order.date).toLocaleTimeString()}</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="text-right">
                                                    <p className="text-xs text-gray-400 font-bold uppercase">Statut</p>
                                                    <div className="flex items-center gap-1 mt-0.5">
                                                        {order.status === 'completed' && <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full"><CheckCircle className="w-3 h-3" /> Livré</span>}
                                                        {order.status === 'pending' && <span className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full"><Clock className="w-3 h-3" /> En attente</span>}
                                                        {order.status === 'cancelled' && <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full"><XCircle className="w-3 h-3" /> Annulé</span>}
                                                        {order.status === 'returned' && <span className="flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-50 px-3 py-1 rounded-full"><XCircle className="w-3 h-3" /> Retourné</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="space-y-4">
                                                {order.items.map((item, idx) => (
                                                    <div key={idx} className="flex justify-between text-sm items-center">
                                                        <div className="flex items-center gap-3">
                                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                                            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover bg-gray-100 border border-gray-50" />
                                                            <div>
                                                                <p className="font-bold text-gray-800">{item.name}</p>
                                                                <p className="text-xs text-dattes-accent font-bold">{item.quality}</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <span className="font-bold text-gray-800">{item.quantityKg} kg</span>
                                                            <p className="text-xs text-gray-500">{item.pricePerKg} DA/kg</p>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="border-t border-gray-100 pt-4 mt-4 flex justify-between items-center bg-gray-50/50 -mx-6 px-6 py-3">
                                                    <div>
                                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Montant Total</p>
                                                        <span className="text-2xl font-bold text-dattes-primary">{order.total} <span className="text-sm">DA</span></span>
                                                    </div>
                                                    <Link
                                                        href={`/product/${order.items[0]?.productId}`}
                                                        className="text-xs font-bold text-dattes-accent hover:underline flex items-center gap-2"
                                                    >
                                                        Recommander <Package className="w-3 h-3" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

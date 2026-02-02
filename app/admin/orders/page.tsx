'use client';

import { useState } from 'react';
import { useStore, Order } from '@/lib/store';
import { Clock, CheckCircle, XCircle, Search, Eye, X, AlertTriangle } from 'lucide-react';

export default function AdminOrdersPage() {
    const { orders, updateOrderStatus, updateOrderReturn } = useStore();
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [returnModalOpen, setReturnModalOpen] = useState(false);
    const [returnReason, setReturnReason] = useState<string>('Qualité');

    const handleReturnSubmit = () => {
        if (selectedOrder) {
            updateOrderReturn(selectedOrder.id, returnReason);
            setSelectedOrder({ ...selectedOrder, status: 'returned' as any, returnReason: returnReason });
            setReturnModalOpen(false);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'text-green-600 bg-green-100 border-green-200';
            case 'shipped': return 'text-blue-600 bg-blue-100 border-blue-200';
            case 'cancelled': return 'text-red-600 bg-red-100 border-red-200';
            case 'returned': return 'text-orange-600 bg-orange-100 border-orange-200';
            default: return 'text-yellow-700 bg-yellow-100 border-yellow-200';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'completed': return 'Terminée';
            case 'shipped': return 'En livraison';
            case 'cancelled': return 'Annulée';
            case 'returned': return 'Retournée';
            default: return 'En attente';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-dattes-primary">Gestion des Commandes</h2>
                    <p className="text-sm text-gray-400">Voir et gérer les commandes clients</p>
                </div>
                <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <input className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-dattes-accent" placeholder="Rechercher..." />
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50 text-xs uppercase text-gray-400 font-extrabold tracking-wider border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4">Réf</th>
                            <th className="px-6 py-4">Client</th>
                            <th className="px-6 py-4">Articles</th>
                            <th className="px-6 py-4">Total</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Statut</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {orders.map(order => (
                            <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-mono text-xs text-gray-500">#{order.id.slice(0, 8)}</td>
                                <td className="px-6 py-4">
                                    <div className="font-bold text-dattes-primary">{order.customer.name}</div>
                                    <div className="text-xs text-gray-400">{order.customer.phone} - {order.customer.wilaya}</div>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    {order.items.slice(0, 2).map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 mb-1">
                                            <span className="font-bold text-gray-600">{item.quantityKg}kg</span>
                                            <span>{item.type || item.name}</span>
                                        </div>
                                    ))}
                                    {order.items.length > 2 && <span className="text-xs text-gray-400">+{order.items.length - 2} autres</span>}
                                </td>
                                <td className="px-6 py-4 font-bold text-dattes-primary">{order.total} DA</td>
                                <td className="px-6 py-4 text-xs text-gray-400">
                                    {new Date(order.date).toLocaleDateString('fr-FR')}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}>
                                        {getStatusLabel(order.status)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => setSelectedOrder(order)}
                                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-dattes-primary transition-colors"
                                        title="Voir détails"
                                    >
                                        <Eye className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Order Details Modal */}
            {selectedOrder && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                            <div>
                                <div className="flex items-center gap-3">
                                    <h3 className="text-xl font-bold text-dattes-primary">Commande #{selectedOrder.id.slice(0, 8)}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(selectedOrder.status)}`}>
                                        {getStatusLabel(selectedOrder.status)}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 mt-1">{new Date(selectedOrder.date).toLocaleString('fr-FR')}</p>
                            </div>
                            <button onClick={() => setSelectedOrder(null)} className="p-2 hover:bg-gray-100 rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-8">
                            {/* Return Info if Returned */}
                            {selectedOrder.status === 'returned' && (
                                <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-orange-800">Commande Retournée</div>
                                        <p className="text-sm text-orange-600 mt-1">Motif: <span className="font-bold">{selectedOrder.returnReason || 'Non spécifié'}</span></p>
                                    </div>
                                </div>
                            )}

                            {/* Customer Info */}
                            <div className="grid grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Client</label>
                                    <div className="font-bold text-gray-800">{selectedOrder.customer.name}</div>
                                    <div className="text-sm text-gray-500">{selectedOrder.customer.phone}</div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Livraison</label>
                                    <div className="font-bold text-gray-800">{selectedOrder.customer.wilaya}</div>
                                    <div className="text-sm text-gray-500">{selectedOrder.customer.commune}</div>
                                </div>
                            </div>

                            {/* Items List */}
                            <div>
                                <h4 className="font-bold text-dattes-primary mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-dattes-accent rounded-full"></span>
                                    Articles Commandés
                                </h4>
                                <div className="border border-gray-100 rounded-xl overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-gray-50 text-xs font-bold text-gray-400 uppercase">
                                            <tr>
                                                <th className="px-4 py-3 text-left">Produit</th>
                                                <th className="px-4 py-3 text-center">Qté</th>
                                                <th className="px-4 py-3 text-right">Prix</th>
                                                <th className="px-4 py-3 text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {selectedOrder.items.map((item, i) => (
                                                <tr key={i}>
                                                    <td className="px-4 py-3">
                                                        <div className="font-medium text-gray-900">{item.name}</div>
                                                        <div className="text-xs text-gray-500">{item.quality}</div>
                                                    </td>
                                                    <td className="px-4 py-3 text-center font-bold">{item.quantityKg} kg</td>
                                                    <td className="px-4 py-3 text-right text-gray-500">{item.pricePerKg} DA</td>
                                                    <td className="px-4 py-3 text-right font-bold">{item.pricePerKg * item.quantityKg} DA</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot className="bg-gray-50 font-bold">
                                            <tr>
                                                <td colSpan={3} className="px-4 py-3 text-right text-gray-600">Total Commande</td>
                                                <td className="px-4 py-3 text-right text-dattes-primary text-lg">{selectedOrder.total} DA</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            <button
                                onClick={() => setSelectedOrder(null)}
                                className="px-4 py-2 font-bold text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                Fermer
                            </button>

                            {selectedOrder.status !== 'returned' && selectedOrder.status !== 'cancelled' && (
                                <>
                                    <button
                                        onClick={() => setReturnModalOpen(true)}
                                        className="px-4 py-2 font-bold text-orange-600 bg-orange-100 hover:bg-orange-200 border border-orange-200 rounded-lg transition-colors"
                                    >
                                        Signaler Retour
                                    </button>
                                    {selectedOrder.status === 'pending' && (
                                        <button
                                            onClick={() => {
                                                const nextStatus = 'shipped';
                                                updateOrderStatus(selectedOrder.id, nextStatus);
                                                setSelectedOrder({ ...selectedOrder, status: nextStatus });
                                            }}
                                            className="px-6 py-2 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
                                        >
                                            En Livraison
                                        </button>
                                    )}

                                    {selectedOrder.status === 'shipped' && (
                                        <button
                                            onClick={() => {
                                                const nextStatus = 'completed';
                                                updateOrderStatus(selectedOrder.id, nextStatus);
                                                setSelectedOrder({ ...selectedOrder, status: nextStatus });
                                            }}
                                            className="px-6 py-2 font-bold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-lg shadow-green-600/20"
                                        >
                                            Marquer Terminée
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Return Reason Modal */}
            {returnModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-in slide-in-from-bottom-4 fade-in duration-300">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Motif du Retour</h3>
                        <p className="text-sm text-gray-500 mb-4">Pourquoi cette commande est-elle retournée ?</p>

                        <div className="space-y-2">
                            {['Qualité', 'Erreur Poids', 'Annulation Client', 'Autre'].map((reason) => (
                                <label key={reason} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all">
                                    <input
                                        type="radio"
                                        name="returnReason"
                                        value={reason}
                                        checked={returnReason === reason}
                                        onChange={(e) => setReturnReason(e.target.value)}
                                        className="w-4 h-4 text-dattes-primary focus:ring-dattes-primary"
                                    />
                                    <span className="font-bold text-sm text-gray-700">{reason}</span>
                                </label>
                            ))}
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={() => setReturnModalOpen(false)}
                                className="flex-1 py-2 font-bold text-gray-500 hover:bg-gray-100 rounded-lg"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleReturnSubmit}
                                className="flex-1 py-2 font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-lg shadow-orange-500/20"
                            >
                                Confirmer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

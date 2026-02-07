'use client';

import { useState } from 'react';
import { useStore, InventoryItem } from '@/lib/store';
import { Package, Plus, MoreHorizontal, X, Search } from 'lucide-react';

export default function AdminProductsPage() {
    const { inventory, updateInventory } = useStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'fr' | 'ar'>('fr');
    const [newItem, setNewItem] = useState<Partial<InventoryItem>>({
        type: 'Deglet Nour',
        quality: 'Premium',
        pricePerKg: 1000,
        stockKg: 100,
        origin: 'Biskra',
        description: '',
        unit: 'kg',
        packaging: 'standard',
        images: ['/products/deglet-nour.png']
    });

    const handleSaveItem = (e: React.FormEvent) => {
        e.preventDefault();

        let updatedInventory = [...inventory];

        if (editingId) {
            // Update
            updatedInventory = updatedInventory.map(item =>
                item.id === editingId ? { ...item, ...newItem } as InventoryItem : item
            );
        } else {
            // Create
            updatedInventory.push({
                ...newItem,
                id: crypto.randomUUID(),
                images: newItem.images || ['/products/deglet-nour.png']
            } as InventoryItem);
        }

        updateInventory(updatedInventory);
        setIsModalOpen(false);
        setEditingId(null);
        setNewItem({
            type: 'Deglet Nour',
            quality: 'Premium',
            pricePerKg: 1000,
            stockKg: 100,
            origin: 'Biskra',
            description: '',
            unit: 'kg',
            packaging: 'standard',
            images: ['/products/deglet-nour.png']
        });
    };

    const handleDelete = (id: string) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
            updateInventory(inventory.filter(i => i.id !== id));
        }
    };

    const openEditModal = (item: InventoryItem) => {
        setNewItem(item);
        setEditingId(item.id);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-dattes-primary">Gestion des Produits</h2>
                    <p className="text-sm text-gray-400">Gérer l'inventaire et les prix</p>
                </div>
                <button
                    onClick={() => {
                        setEditingId(null);
                        setNewItem({
                            type: 'Deglet Nour',
                            quality: 'Premium',
                            pricePerKg: 1000,
                            stockKg: 100,
                            origin: 'Biskra',
                            description: '',
                            unit: 'kg',
                            packaging: 'standard',
                            images: ['/products/deglet-nour.png']
                        });
                        setIsModalOpen(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-dattes-primary text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-dattes-primary/20"
                >
                    <Plus className="w-4 h-4" /> Ajouter Produit
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50/50 text-xs uppercase text-gray-400 font-extrabold tracking-wider border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4">Produit</th>
                                <th className="px-6 py-4">Origine</th>
                                <th className="px-6 py-4">Prix (DA/Kg)</th>
                                <th className="px-6 py-4">Stock (Kg)</th>
                                <th className="px-6 py-4">Détails</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {inventory.map(item => (
                                <tr key={item.id} className={`group hover:bg-gray-50 transition-colors ${item.stockKg < 50 ? 'bg-red-50/30' : ''}`}>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={item.images[0]} alt={item.type} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-dattes-primary">{item.type}</div>
                                                <div className="text-xs text-dattes-accent font-bold px-2 py-0.5 bg-dattes-accent/10 rounded-full w-fit mt-1">{item.quality}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-600">{item.origin || '-'}</td>
                                    <td className="px-6 py-4 font-bold text-dattes-primary">{item.pricePerKg}</td>
                                    <td className="px-6 py-4">
                                        <span className={`font-bold ${item.stockKg < 50 ? 'text-red-500' : 'text-gray-700'}`}>
                                            {item.stockKg}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-xs text-gray-500 max-w-xs truncate">
                                        {item.description}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                onClick={() => openEditModal(item)}
                                                className="p-2 hover:bg-blue-50 rounded-lg text-blue-500 hover:text-blue-700 transition-colors"
                                                title="Modifier"
                                            >
                                                <MoreHorizontal className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="p-2 hover:bg-red-50 rounded-lg text-red-400 hover:text-red-600 transition-colors"
                                                title="Supprimer"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add/Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-dattes-primary">
                                {editingId ? 'Modifier Produit' : 'Ajouter Produit'}
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSaveItem} className="space-y-6">

                            {/* Language Tabs */}
                            <div className="flex bg-gray-100 p-1 rounded-xl w-fit">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('fr')}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'fr' ? 'bg-white shadow text-dattes-primary' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    Français
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('ar')}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'ar' ? 'bg-white shadow text-dattes-primary' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    العربية
                                </button>
                            </div>

                            {/* Image Upload */}
                            <div className="md:col-span-1">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Images du Produit</label>
                                <div className="space-y-4">
                                    {/* Image Gallery Grid */}
                                    <div className="grid grid-cols-3 gap-2">
                                        {newItem.images && newItem.images.map((img, idx) => (
                                            <div key={idx} className="relative aspect-square group">
                                                <img src={img} alt={`Preview ${idx}`} className="w-full h-full object-cover rounded-lg border border-gray-200" />
                                                <button
                                                    onClick={() => {
                                                        const newImages = [...(newItem.images || [])];
                                                        newImages.splice(idx, 1);
                                                        setNewItem({ ...newItem, images: newImages });
                                                    }}
                                                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                                                    type="button"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </div>
                                        ))}
                                        {/* Upload Button Placeholder if empty or to add more */}
                                        <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                            <Plus className="w-6 h-6 text-gray-400" />
                                            <span className="text-[10px] text-gray-500 font-bold mt-1">Ajouter</span>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
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

                                                                const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
                                                                setNewItem({ ...newItem, images: [...(newItem.images || []), dataUrl] });
                                                            };
                                                            img.src = event.target?.result as string;
                                                        };
                                                        reader.readAsDataURL(file);
                                                    }
                                                }}
                                            />
                                        </label>
                                    </div>

                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Ou URL directe..."
                                            className="flex-1 p-2 text-xs bg-gray-50 rounded-lg border border-gray-200"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    e.preventDefault();
                                                    const val = e.currentTarget.value;
                                                    if (val) {
                                                        setNewItem({ ...newItem, images: [...(newItem.images || []), val] });
                                                        e.currentTarget.value = '';
                                                    }
                                                }
                                            }}
                                        />
                                        <button type="button" className="text-xs font-bold text-dattes-primary" onClick={() => {/* handler for button click if needed, or just rely on Enter */ }}>
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                                        Type (Variété) {activeTab === 'ar' ? '(Arabe)' : ''}
                                    </label>
                                    <input
                                        required={activeTab === 'fr'}
                                        className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-dattes-accent"
                                        value={activeTab === 'fr' ? newItem.type : (newItem.typeAr || '')}
                                        onChange={e => activeTab === 'fr' ? setNewItem({ ...newItem, type: e.target.value }) : setNewItem({ ...newItem, typeAr: e.target.value })}
                                        placeholder={activeTab === 'fr' ? "ex: Deglet Nour" : "مثال: دقلة نور"}
                                        dir={activeTab === 'ar' ? 'rtl' : 'ltr'}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                                        Qualité {activeTab === 'ar' ? '(Arabe)' : ''}
                                    </label>
                                    <div className="space-y-2">
                                        <input
                                            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-dattes-accent"
                                            value={activeTab === 'fr' ? newItem.quality : (newItem.qualityAr || '')}
                                            onChange={e => activeTab === 'fr' ? setNewItem({ ...newItem, quality: e.target.value }) : setNewItem({ ...newItem, qualityAr: e.target.value })}
                                            placeholder={activeTab === 'fr' ? "ex: Premium" : "مثال: ممتاز"}
                                            dir={activeTab === 'ar' ? 'rtl' : 'ltr'}
                                        />
                                        <div className="flex flex-wrap gap-2">
                                            {(activeTab === 'fr' ? ['Premium', 'Standard', 'Ravier', 'Vrac'] : ['ممتاز', 'عادي', 'عليون', 'فراكة']).map((q) => (
                                                <button
                                                    key={q}
                                                    type="button"
                                                    onClick={() => activeTab === 'fr' ? setNewItem({ ...newItem, quality: q }) : setNewItem({ ...newItem, qualityAr: q })}
                                                    className="px-3 py-1 text-xs font-bold bg-dattes-primary/5 text-dattes-primary rounded-full hover:bg-dattes-primary hover:text-white transition-colors"
                                                >
                                                    {q}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Prix (DA/Kg)</label>
                                    <input
                                        type="number"
                                        required
                                        className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-dattes-accent"
                                        value={newItem.pricePerKg}
                                        onChange={e => setNewItem({ ...newItem, pricePerKg: Number(e.target.value) })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Stock ({newItem.unit || 'Kg'})</label>
                                    <input
                                        type="number"
                                        value={newItem.stockKg}
                                        onChange={(e) => setNewItem({ ...newItem, stockKg: Number(e.target.value) })}
                                        className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-dattes-accent font-bold"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                                        Origine {activeTab === 'ar' ? '(Arabe)' : ''}
                                    </label>
                                    <input
                                        className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-dattes-accent"
                                        value={activeTab === 'fr' ? newItem.origin : (newItem.originAr || '')}
                                        onChange={e => activeTab === 'fr' ? setNewItem({ ...newItem, origin: e.target.value }) : setNewItem({ ...newItem, originAr: e.target.value })}
                                        placeholder={activeTab === 'fr' ? "ex: Tolga" : "مثال: طولقة"}
                                        dir={activeTab === 'ar' ? 'rtl' : 'ltr'}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Unité</label>
                                    <select
                                        value={newItem.unit || 'kg'}
                                        onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
                                        className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-dattes-accent font-bold"
                                    >
                                        <option value="kg">Kg</option>
                                        <option value="liter">Litre</option>
                                        <option value="piece">Pièce</option>
                                        <option value="box">Boîte</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Conditionnement</label>
                                    <select
                                        value={newItem.packaging || 'standard'}
                                        onChange={(e) => setNewItem({ ...newItem, packaging: e.target.value })}
                                        className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-dattes-accent font-bold"
                                    >
                                        <option value="standard">Standard (Vrac)</option>
                                        <option value="arjoun">Arjoun (Régime)</option>
                                        <option value="messier">Messier (Empilé)</option>
                                        <option value="box">Carton (Boîte)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                                    Description Courte {activeTab === 'ar' ? '(Arabe)' : ''}
                                </label>
                                <textarea
                                    className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-dattes-accent h-24"
                                    value={activeTab === 'fr' ? newItem.description : (newItem.descriptionAr || '')}
                                    onChange={e => activeTab === 'fr' ? setNewItem({ ...newItem, description: e.target.value }) : setNewItem({ ...newItem, descriptionAr: e.target.value })}
                                    dir={activeTab === 'ar' ? 'rtl' : 'ltr'}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Image du Produit</label>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={newItem.images?.[0] || '/products/deglet-nour.png'} alt="Preview" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="relative flex-1">
                                        <input
                                            type="file"
                                            onChange={async (e) => {
                                                const file = e.target.files?.[0];
                                                if (!file) return;

                                                const formData = new FormData();
                                                formData.append('file', file);

                                                try {
                                                    const res = await fetch('/api/upload', {
                                                        method: 'POST',
                                                        body: formData
                                                    });

                                                    if (!res.ok) throw new Error('Upload failed');

                                                    const data = await res.json();
                                                    setNewItem({ ...newItem, images: [data.url] });
                                                } catch (error) {
                                                    console.error('Error uploading image:', error);
                                                    alert("Erreur lors de l'upload de l'image. Veuillez réessayer.");
                                                }
                                            }}
                                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                            accept="image/*"
                                        />
                                        <div className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-400 text-sm font-bold flex items-center justify-between">
                                            <span>📷 Cliquer pour uploader une image</span>
                                            <Plus className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-dattes-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-black transition-colors"
                            >
                                {editingId ? 'Sauvegarder modifications' : 'Créer Produit'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

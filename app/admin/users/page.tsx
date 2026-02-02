'use client';

import { useStore } from '@/lib/store';
import { User, Shield, ShieldAlert, Mail, Phone, Hash } from 'lucide-react';

export default function AdminUsersPage() {
    const { users } = useStore();

    // Safety check just in case
    const safeUsers = Array.isArray(users) ? users : [];

    return (
        <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Gestion des Utilisateurs</h1>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="p-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Utilisateur</th>
                                <th className="p-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Contact</th>
                                <th className="p-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Rôle</th>
                                <th className="p-4 font-bold text-gray-500 text-xs uppercase tracking-wider text-right">ID</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {safeUsers.length > 0 ? (
                                safeUsers.map(user => (
                                    <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-dattes-primary/5 flex items-center justify-center text-dattes-primary">
                                                    <User className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-800 text-sm">{user.name}</div>
                                                    <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                                                        <Mail className="w-3 h-3" /> {user.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            {user.phone ? (
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Phone className="w-4 h-4 text-gray-400" />
                                                    {user.phone}
                                                </div>
                                            ) : (
                                                <span className="text-gray-300 text-sm italic">-</span>
                                            )}
                                        </td>
                                        <td className="p-4">
                                            {user.role === 'admin' ? (
                                                <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-bold border border-purple-200">
                                                    <ShieldAlert className="w-3.5 h-3.5" /> Admin
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold border border-blue-200">
                                                    <Shield className="w-3.5 h-3.5" /> Client
                                                </span>
                                            )}
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                                <Hash className="w-3 h-3" />
                                                {user.id.slice(0, 8)}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-gray-400">
                                        Aucun utilisateur trouvé.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

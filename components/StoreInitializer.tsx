'use client';

import { useEffect } from 'react';
import { useStore } from '@/lib/store';

export function StoreSync() {
    const { fetchInventory, fetchOrders, fetchSettings } = useStore();

    useEffect(() => {
        // Fetch data immediately on mount
        fetchInventory();
        fetchOrders();
        fetchSettings();
    }, [fetchInventory, fetchOrders, fetchSettings]);

    return null; // This component renders nothing
}

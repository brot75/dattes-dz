'use client';

import { useEffect } from 'react';
import { useStore } from '@/lib/store';

export function StoreSync() {
    const { fetchInventory, fetchOrders } = useStore();

    useEffect(() => {
        // Fetch data immediately on mount
        fetchInventory();
        fetchOrders();
    }, [fetchInventory, fetchOrders]);

    return null; // This component renders nothing
}

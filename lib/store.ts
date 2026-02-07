import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Language = 'fr' | 'ar' | 'en';

export interface CartItem {
    id: string;
    productId: string;
    name: string;
    quality: string;
    type: string;
    quantityKg: number;
    pricePerKg: number;
    image: string;
    unit?: string; // kg, liter, piece, box
    packaging?: string; // arjoun, messier, standard
}

export interface InventoryItem {
    id: string;
    type: string;
    quality: string;
    pricePerKg: number;
    purchasePrice?: number; // For Profit Calculation
    stockKg: number;
    unit?: string; // Default 'kg'
    packaging?: string; // Default 'standard'
    images: string[];
    description: string;
    origin?: string;
    longDescription?: string;

    // Arabic Translations
    typeAr?: string;
    qualityAr?: string;
    originAr?: string;
    descriptionAr?: string;
    longDescriptionAr?: string;

    // English
    nameEn?: string;
    typeEn?: string;
    qualityEn?: string;
    originEn?: string;
    descriptionEn?: string;
    longDescriptionEn?: string;

    nutritionalInfo?: {
        calories: number;
        carbs: number;
        protein: number;
        fiber: number;
    };
}

export interface Order {
    id: string;
    userId?: string;
    customer: {
        name: string;
        phone: string;
        wilaya: string;
        commune: string;
        address?: string;
    };
    items: CartItem[];
    total: number;
    status: 'pending' | 'shipped' | 'completed' | 'cancelled' | 'returned';
    date: string;
    returnReason?: string;
    source?: string; // 'instagram', 'facebook', 'tiktok', 'direct', etc.
}

export interface SiteSettings {
    heroImage: string;
    heroImageDesktop?: string;
    deliveryFees: Record<string, { home: number, bureau: number }>; // Wilaya name -> Price
}

export interface User {
    id: string;
    email: string;
    password?: string;
    role: 'admin' | 'customer';
    name: string;
    phone?: string;
    wilaya?: string;
    commune?: string;
}

export const WILAYAS = [
    "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Bechar", "Blida", "Bouira",
    "Tamanrasset", "Tbessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Se9tif", "Saefda",
    "Skikda", "Sidi Bel Abbes", "Annaba", "Guelma", "Constantine", "Medea", "Mostaganem", "M'Sila", "Mascara",
    "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arreridj", "Boumerdes", "El Tarf", "Tindouf", "Tissemsilt",
    "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Ain Defla", "Naama", "Ain Temouchent", "Ghardaefa",
    "Relizane", "El M'ghair", "El Menia", "Ouled Djellal", "Bordj Baji Mokhtar", "Béni Abbès", "Timimoun",
    "Touggourt", "Djanet", "In Salah", "In Guezzam", "Aflou", "El Abiodh Sidi Cheikh", "El Aricha", "El Kantara",
    "Barika", "Bou Saada", "Bir El Ater", "Ksar El Boukhari", "Ksar Chellala", "Ain Oussara", "Messaad"
];

const DEFAULT_DELIVERY_FEES: Record<string, { home: number, bureau: number }> = WILAYAS.reduce((acc, w) => {
    const northWilayas = ['Alger', 'Blida', 'Boumerdès', 'Tipaza', 'Oran', 'Constantine', 'Annaba', 'Sétif'];
    const southWilayas = ['Adrar', 'Tamanrasset', 'Illizi', 'Tindouf', 'Béchar', 'Ouargla', 'Ghardaïa'];

    if (northWilayas.includes(w)) {
        acc[w] = { home: 600, bureau: 350 };
    } else if (southWilayas.includes(w)) {
        acc[w] = { home: 1000, bureau: 600 };
    } else {
        acc[w] = { home: 800, bureau: 500 };
    }
    return acc;
}, {} as Record<string, { home: number, bureau: number }>);

// Default Admin for First Deployment
const INITIAL_USERS: User[] = [
    {
        id: 'admin-default',
        email: 'admin@dattes.dz',
        password: 'admin', // CHANGE THIS AFTER FIRST LOGIN
        role: 'admin',
        name: 'Administrateur',
        wilaya: 'Biskra',
        phone: '0000000000'
    }
];

interface StoreState {
    language: Language;
    setLanguage: (lang: Language) => void;
    _hasHydrated: boolean;
    setHasHydrated: (state: boolean) => void;

    settings: SiteSettings;
    updateSettings: (settings: Partial<SiteSettings>) => void;
    fetchSettings: () => Promise<void>;

    currentUser: User | null;
    users: User[];
    login: (email: string, password: string) => boolean;
    logout: () => void;
    register: (user: User) => boolean;

    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantityKg: number) => void;
    clearCart: () => void;
    cartTotal: () => number;
    calculateTotal: () => number;

    inventory: InventoryItem[];
    updateInventory: (items: InventoryItem[]) => void;
    fetchInventory: () => Promise<void>; // New Sync Method

    orders: Order[];
    addOrder: (order: Order) => void;
    updateOrderStatus: (id: string, status: Order['status']) => void;
    updateOrderReturn: (id: string, reason: string) => void;
    fetchOrders: () => Promise<void>; // New Sync Method

    updateUser: (userData: Partial<User>) => void;
    fetchUsers: () => Promise<void>;

    // Analytics Data
    totalVisits: number;
    incrementVisits: () => void;
    analyticsData: {
        traffic: { name: string; value: number }[];
        conversion: { name: string; value: number }[];
    };
    updateAnalyticsData: (data: Partial<StoreState['analyticsData']>) => void;

    referralSource: string;
    setReferralSource: (source: string) => void;

    // Updated to accept mode
    getDeliveryFee: (wilaya: string, mode: 'home' | 'bureau') => number;
}

const calculateDeliveryFee = (wilaya: string, mode: 'home' | 'bureau'): number => {
    if (!wilaya) return 0;
    const northWilayas = ['Alger', 'Blida', 'Boumerdès', 'Tipaza', 'Oran', 'Constantine', 'Annaba', 'Sétif'];
    const southWilayas = ['Adrar', 'Tamanrasset', 'Illizi', 'Tindouf', 'Béchar', 'Ouargla', 'Ghardaïa'];

    const isNorth = northWilayas.includes(wilaya);
    const isSouth = southWilayas.includes(wilaya);

    if (mode === 'home') {
        if (isNorth) return 600;
        if (isSouth) return 1000;
        return 800;
    } else {
        // Bureau is cheaper
        if (isNorth) return 350;
        if (isSouth) return 600;
        return 500;
    }
};

const INITIAL_INVENTORY_FINAL: InventoryItem[] = [];

export const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            _hasHydrated: false,
            setHasHydrated: (state) => set({ _hasHydrated: state }),

            language: 'fr',
            setLanguage: (lang) => set({ language: lang }),

            settings: {
                heroImage: '/hero-dates-v2.png',
                heroImageDesktop: '/hero-dates-desktop.jpg',
                deliveryFees: DEFAULT_DELIVERY_FEES
            },
            fetchSettings: async () => {
                try {
                    const res = await fetch('/api/settings');
                    if (res.ok) {
                        const data = await res.json();
                        set((state) => ({ settings: { ...state.settings, ...data } }));
                    }
                } catch (e) {
                    console.error('Failed to fetch settings:', e);
                }
            },
            updateSettings: (newSettings) => {
                set((state) => {
                    const updated = { ...state.settings, ...newSettings };

                    // Sync to Server
                    fetch('/api/settings', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(newSettings)
                    }).catch(err => console.error('Settings sync failed', err));

                    return { settings: updated };
                });
            },

            currentUser: null,
            users: INITIAL_USERS,
            login: (email, password) => {
                // 1. Check Registered Users
                const users = get().users;

                // Find user in registered list
                const user = users.find(u => u.email === email && u.password === password);

                if (user) {
                    set({ currentUser: user });
                    return true;
                }

                return false;
            },


            logout: () => set({ currentUser: null }),
            register: (newUser) => {
                const exists = get().users.some(u => u.email === newUser.email);
                if (exists) return false;
                set(state => ({
                    users: [...state.users, { ...newUser, id: crypto.randomUUID(), role: 'customer' }]
                }));
                return true;
            },

            cart: [],
            addToCart: (item) => set((state) => {
                const existing = state.cart.find(
                    (i) => i.productId === item.productId && i.quality === item.quality && i.unit === item.unit && i.packaging === item.packaging
                );
                if (existing) {
                    return {
                        cart: state.cart.map((i) =>
                            i.id === existing.id ? { ...i, quantityKg: i.quantityKg + item.quantityKg } : i
                        ),
                    };
                }
                return { cart: [...state.cart, item] };
            }),
            removeFromCart: (id) =>
                set((state) => ({ cart: state.cart.filter((i) => i.id !== id) })),
            updateQuantity: (id, q) =>
                set((state) => ({
                    cart: state.cart.map((i) => (i.id === id ? { ...i, quantityKg: q } : i)),
                })),
            clearCart: () => set({ cart: [] }),
            cartTotal: () => {
                const state = get();
                return state.cart.reduce((acc, item) => acc + (item.pricePerKg * item.quantityKg), 0);
            },
            calculateTotal: () => {
                const total = get().cartTotal();
                // Default to 'home' for total calculation if mode isn't specified in state yet
                // Ideally we should add 'deliveryMode' to the store state, but for now this fixes the build
                const delivery = calculateDeliveryFee(get().currentUser?.wilaya || '', 'home');
                return total + delivery;
            },

            // --- INVENTORY WITH API SYNC ---
            inventory: INITIAL_INVENTORY_FINAL,
            fetchInventory: async () => {
                try {
                    const res = await fetch('/api/products');
                    if (res.ok) {
                        const data = await res.json();
                        set({ inventory: data });
                    }
                } catch (e) {
                    console.error('Failed to fetch inventory:', e);
                }
            },
            updateInventory: (items) => {
                set({ inventory: items });
                // Sync to API
                fetch('/api/products', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(items)
                }).catch(err => console.error('Sync failed', err));
            },

            // --- ORDERS WITH API SYNC ---
            orders: [],
            fetchOrders: async () => {
                try {
                    const res = await fetch('/api/orders');
                    if (res.ok) {
                        const data = await res.json();
                        set({ orders: data });
                    }
                } catch (e) {
                    console.error('Failed to fetch orders:', e);
                }
            },
            addOrder: (order) => {
                const newOrders = [order, ...get().orders];
                set({ orders: newOrders });

                // 1. Sync Single Order to API
                fetch('/api/orders', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(order)
                }).catch(err => console.error('Order sync failed', err));

                // 2. Sync Stock Deduction
                const currentInventory = [...get().inventory];
                order.items.forEach(cartItem => {
                    const productIndex = currentInventory.findIndex(p => p.id === cartItem.productId);
                    if (productIndex !== -1) {
                        currentInventory[productIndex] = {
                            ...currentInventory[productIndex],
                            stockKg: Math.max(0, currentInventory[productIndex].stockKg - cartItem.quantityKg)
                        };
                    }
                });
                get().updateInventory(currentInventory);
            },
            updateOrderStatus: (id, status) => {
                const state = get();
                const order = state.orders.find(o => o.id === id);
                if (order) {
                    const updatedOrder = { ...order, status };
                    // Optimistic Update
                    set((state) => ({
                        orders: state.orders.map((o) => (o.id === id ? updatedOrder : o))
                    }));

                    // Sync to Backend
                    fetch('/api/orders', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(updatedOrder)
                    }).catch(err => console.error('Failed to sync order status:', err));
                }
            },
            updateOrderReturn: (id, reason) => {
                const state = get();
                const order = state.orders.find(o => o.id === id);
                if (order) {
                    const updatedOrder = { ...order, status: 'returned' as const, returnReason: reason };
                    // Optimistic Update
                    set((state) => ({
                        orders: state.orders.map(o => o.id === id ? updatedOrder : o)
                    }));

                    // Sync to Backend
                    fetch('/api/orders', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(updatedOrder)
                    }).catch(err => console.error('Failed to sync order return:', err));
                }
            },

            updateUser: (userData) => {
                const state = get();
                const currentUser = state.currentUser;

                if (currentUser) {
                    const updatedUser = { ...currentUser, ...userData };

                    // Optimistic update
                    set((state) => ({
                        currentUser: updatedUser,
                        users: state.users.map(u => u.id === currentUser.id ? updatedUser : u)
                    }));

                    // Sync to Backend
                    fetch('/api/users', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(updatedUser)
                    }).catch(err => console.error('Failed to sync user update:', err));
                }
            },

            fetchUsers: async () => {
                try {
                    const res = await fetch('/api/users');
                    if (res.ok) {
                        const data = await res.json();
                        if (Array.isArray(data) && data.length > 0) {
                            set({ users: data });
                        } else {
                            // Initial Seed if Empty
                            console.log('Seeding initial users to Firestore...');
                            await fetch('/api/users', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(INITIAL_USERS)
                            });
                            set({ users: INITIAL_USERS });
                        }
                    }
                } catch (e) {
                    console.error('Failed to fetch users:', e);
                }
            },

            // Analytics
            totalVisits: 0,
            incrementVisits: () => set((state) => ({ totalVisits: state.totalVisits + 1 })),
            analyticsData: {
                traffic: [
                    { name: 'Lun', value: 400 },
                    { name: 'Mar', value: 300 },
                    { name: 'Mer', value: 550 },
                    { name: 'Jeu', value: 450 },
                    { name: 'Ven', value: 600 },
                    { name: 'Sam', value: 700 },
                    { name: 'Dim', value: 500 },
                ],
                conversion: [
                    { name: 'Lun', value: 24 },
                    { name: 'Mar', value: 18 },
                    { name: 'Mer', value: 35 },
                    { name: 'Jeu', value: 28 },
                    { name: 'Ven', value: 42 },
                    { name: 'Sam', value: 48 },
                    { name: 'Dim', value: 38 },
                ],
            },
            updateAnalyticsData: (data) => set((state) => ({
                analyticsData: { ...state.analyticsData, ...data }
            })),

            referralSource: '',
            setReferralSource: (source) => set({ referralSource: source }),

            getDeliveryFee: (wilaya, mode) => {
                const fees = get().settings.deliveryFees;
                if (fees[wilaya]) {
                    return fees[wilaya][mode];
                }
                return calculateDeliveryFee(wilaya, mode);
            }
        }),
        {
            name: 'dattes-storage-v5',
            storage: createJSONStorage(() => localStorage),
            version: 5,
            migrate: (persistedState: any, version) => {
                if (version < 5) {
                    // Smart Merge: Update text/translations from code, but KEEP user's stock/prices/images
                    const oldInventory = persistedState.inventory || [];
                    const mergedInventory = INITIAL_INVENTORY_FINAL.map(initialItem => {
                        const existingItem = oldInventory.find((i: any) => i.id === initialItem.id);

                        if (existingItem) {
                            // Merge logic:
                            // 1. Keep user-mutable fields from storage (Stock, Price, Images)
                            // 2. Force-update static text fields from code (Descriptions, Translations)
                            return {
                                ...initialItem, // Start with fresh code data (fixes typos/translations)
                                stockKg: existingItem.stockKg, // Restore user stock
                                pricePerKg: existingItem.pricePerKg, // Restore user price
                                images: existingItem.images, // Restore user images
                            };
                        }
                        return initialItem; // New item found in code? Add it.
                    });

                    return {
                        ...persistedState,
                        inventory: mergedInventory,
                    };
                }
                return persistedState as StoreState;
            },
            partialize: (state) => ({
                // Persist ONLY user-local settings.
                // DATA (Inventory/Orders) must come from Server (JSON API).
                language: state.language,
                cart: state.cart,
                settings: state.settings,
                currentUser: state.currentUser,
                users: state.users, // Persist users for login session
                totalVisits: state.totalVisits,
                analyticsData: state.analyticsData
            }),
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
);

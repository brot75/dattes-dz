module.exports = [
"[project]/lib/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WILAYAS",
    ()=>WILAYAS,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const WILAYAS = [
    "Adrar",
    "Chlef",
    "Laghouat",
    "Oum El Bouaghi",
    "Batna",
    "Béjaïa",
    "Biskra",
    "Bechar",
    "Blida",
    "Bouira",
    "Tamanrasset",
    "Tbessa",
    "Tlemcen",
    "Tiaret",
    "Tizi Ouzou",
    "Alger",
    "Djelfa",
    "Jijel",
    "Se9tif",
    "Saefda",
    "Skikda",
    "Sidi Bel Abbes",
    "Annaba",
    "Guelma",
    "Constantine",
    "Medea",
    "Mostaganem",
    "M'Sila",
    "Mascara",
    "Ouargla",
    "Oran",
    "El Bayadh",
    "Illizi",
    "Bordj Bou Arreridj",
    "Boumerdes",
    "El Tarf",
    "Tindouf",
    "Tissemsilt",
    "El Oued",
    "Khenchela",
    "Souk Ahras",
    "Tipaza",
    "Mila",
    "Ain Defla",
    "Naama",
    "Ain Temouchent",
    "Ghardaefa",
    "Relizane",
    "El M'ghair",
    "El Menia",
    "Ouled Djellal",
    "Bordj Baji Mokhtar",
    "Béni Abbès",
    "Timimoun",
    "Touggourt",
    "Djanet",
    "In Salah",
    "In Guezzam",
    "Aflou",
    "El Abiodh Sidi Cheikh",
    "El Aricha",
    "El Kantara",
    "Barika",
    "Bou Saada",
    "Bir El Ater",
    "Ksar El Boukhari",
    "Ksar Chellala",
    "Ain Oussara",
    "Messaad"
];
const DEFAULT_DELIVERY_FEES = WILAYAS.reduce((acc, w)=>{
    const northWilayas = [
        'Alger',
        'Blida',
        'Boumerdès',
        'Tipaza',
        'Oran',
        'Constantine',
        'Annaba',
        'Sétif'
    ];
    const southWilayas = [
        'Adrar',
        'Tamanrasset',
        'Illizi',
        'Tindouf',
        'Béchar',
        'Ouargla',
        'Ghardaïa'
    ];
    if (northWilayas.includes(w)) {
        acc[w] = {
            home: 600,
            bureau: 350
        };
    } else if (southWilayas.includes(w)) {
        acc[w] = {
            home: 1000,
            bureau: 600
        };
    } else {
        acc[w] = {
            home: 800,
            bureau: 500
        };
    }
    return acc;
}, {});
// Hardcoded users removed for security.
// Use the registration form to create users.
const INITIAL_USERS = [];
const calculateDeliveryFee = (wilaya, mode)=>{
    if (!wilaya) return 0;
    const northWilayas = [
        'Alger',
        'Blida',
        'Boumerdès',
        'Tipaza',
        'Oran',
        'Constantine',
        'Annaba',
        'Sétif'
    ];
    const southWilayas = [
        'Adrar',
        'Tamanrasset',
        'Illizi',
        'Tindouf',
        'Béchar',
        'Ouargla',
        'Ghardaïa'
    ];
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
const INITIAL_INVENTORY_FINAL = [
    {
        id: '1',
        type: 'Deglet Nour',
        quality: 'Premium',
        pricePerKg: 1200,
        stockKg: 500,
        unit: 'kg',
        packaging: 'standard',
        images: [
            '/products/deglet-nour.png'
        ],
        description: 'Dattes Deglet Nour de qualité supérieure, transparentes et mielleuses.',
        origin: 'Tolga',
        longDescription: 'La Deglet Nour ("Doigt de lumière") est la reine des dattes. Cette sélection Premium provient des meilleures palmeraies de Tolga. Sa texture est moelleuse, sa couleur translucide laisse apparaître le noyau, et son goût de miel est incomparable.',
        nutritionalInfo: {
            calories: 282,
            carbs: 75,
            protein: 2.5,
            fiber: 8
        },
        typeAr: 'دقلة نور',
        qualityAr: 'ممتاز',
        originAr: 'طولقة',
        descriptionAr: 'تمور دقلة نور عالية الجودة، شفافة ومعسلة.'
    },
    {
        id: '2',
        type: 'Deglet Nour',
        quality: 'Standard',
        pricePerKg: 850,
        stockKg: 1000,
        images: [
            '/products/deglet-nour.png'
        ],
        description: 'Dattes Deglet Nour idéales pour la consommation quotidienne.',
        origin: 'Biskra',
        longDescription: 'Une Deglet Nour authentique, idéale pour le quotidien. Moins translucide que la Premium mais tout aussi savoureuse, elle offre un excellent rapport qualité-prix.',
        nutritionalInfo: {
            calories: 280,
            carbs: 74,
            protein: 2.4,
            fiber: 7.5
        },
        typeAr: 'دقلة نور',
        qualityAr: 'عادي',
        originAr: 'بسكرة',
        descriptionAr: 'تمور دقلة نور مثالية للاستهلاك اليومي.'
    },
    {
        id: '3',
        type: 'Ghars',
        quality: 'Premium',
        pricePerKg: 450,
        stockKg: 300,
        images: [
            '/products/ghars.png'
        ],
        description: 'Dattes écrasées (Ghars/Btana), parfaites pour la pâtisserie (Makroud, Bradj).',
        origin: 'Oued Souf',
        longDescription: 'Le Ghars est une datte moelleuse écrasée, formant une pâte naturelle riche et sucrée. Indispensable pour la préparation des gâteaux traditionnels algériens comme le Makroud et le Bradj.',
        typeAr: 'غرس (بطانة)',
        qualityAr: 'ممتاز',
        originAr: 'الوادي',
        descriptionAr: 'تمر مهروس (غرس/بطانة)، مثالي للحلويات (المقروط، البراج).',
        nutritionalInfo: {
            calories: 300,
            carbs: 80,
            protein: 2.2,
            fiber: 9
        }
    },
    {
        id: '4',
        type: 'Deglet Beida',
        quality: 'Standard',
        pricePerKg: 600,
        stockKg: 200,
        images: [
            '/products/deglet-nour.png'
        ],
        description: 'Dattes sèches et croquantes, riches en fibres.',
        origin: 'Tolga',
        longDescription: 'La Deglet Beida est une datte sèche, très appréciée pour sa texture croquante et sa longue conservation.',
        typeAr: 'دقلة بيضاء',
        qualityAr: 'عادي',
        originAr: 'طولقة',
        descriptionAr: 'تمور دقلة بيضاء جافة ومقرمشة، غنية بالألياف.',
        nutritionalInfo: {
            calories: 280,
            carbs: 75,
            protein: 2.5,
            fiber: 8
        }
    },
    {
        id: '5',
        type: 'Roub',
        quality: 'Premium',
        pricePerKg: 300,
        stockKg: 100,
        images: [
            '/products/roub.png'
        ],
        description: 'Dattes fraîches (Roub), très sucrées et fondantes.',
        origin: 'Tolga',
        longDescription: 'Le Roub est une datte fraîche, cueillie à mi-maturité. Elle est incroyablement fondante et sucrée, un véritable délice saisonnier.',
        typeAr: 'رطب',
        qualityAr: 'ممتاز',
        originAr: 'طولقة',
        descriptionAr: 'تمور رطب طازجة، حلوة جداً وتذوب في الفم.',
        unit: 'kg',
        packaging: 'standard',
        nutritionalInfo: {
            calories: 260,
            carbs: 65,
            protein: 1.8,
            fiber: 6
        }
    }
];
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        _hasHydrated: false,
        setHasHydrated: (state)=>set({
                _hasHydrated: state
            }),
        language: 'fr',
        setLanguage: (lang)=>set({
                language: lang
            }),
        settings: {
            heroImage: '/hero-dates-v2.png',
            heroImageDesktop: '/hero-dates-desktop.jpg',
            deliveryFees: DEFAULT_DELIVERY_FEES
        },
        updateSettings: (newSettings)=>set((state)=>({
                    settings: {
                        ...state.settings,
                        ...newSettings
                    }
                })),
        currentUser: null,
        users: INITIAL_USERS,
        login: (email, password)=>{
            // 1. HARDCODED USERS CHECK (Admin & Seed Data)
            // Always allow INITIAL_USERS to login regardless of local storage state
            const seedUser = INITIAL_USERS.find((u)=>u.email === email && u.password === password);
            if (seedUser) {
                set((state)=>{
                    // FORCE UPDATE: Replace any existing user in the list with the Seed User
                    // This ensures ID '3' is used instead of a random UUID if they previously registered manually
                    const otherUsers = state.users.filter((u)=>u.email !== seedUser.email);
                    return {
                        currentUser: seedUser,
                        users: [
                            ...otherUsers,
                            seedUser
                        ]
                    };
                });
                return true;
            }
            // 2. Registered User Lookup (from Local Storage)
            const user = get().users.find((u)=>u.email === email && u.password === password);
            if (user) {
                set({
                    currentUser: user
                });
                return true;
            }
            return false;
        },
        logout: ()=>set({
                currentUser: null
            }),
        register: (newUser)=>{
            const exists = get().users.some((u)=>u.email === newUser.email);
            if (exists) return false;
            set((state)=>({
                    users: [
                        ...state.users,
                        {
                            ...newUser,
                            id: crypto.randomUUID(),
                            role: 'customer'
                        }
                    ]
                }));
            return true;
        },
        cart: [],
        addToCart: (item)=>set((state)=>{
                const existing = state.cart.find((i)=>i.productId === item.productId && i.quality === item.quality && i.unit === item.unit && i.packaging === item.packaging);
                if (existing) {
                    return {
                        cart: state.cart.map((i)=>i.id === existing.id ? {
                                ...i,
                                quantityKg: i.quantityKg + item.quantityKg
                            } : i)
                    };
                }
                return {
                    cart: [
                        ...state.cart,
                        item
                    ]
                };
            }),
        removeFromCart: (id)=>set((state)=>({
                    cart: state.cart.filter((i)=>i.id !== id)
                })),
        updateQuantity: (id, q)=>set((state)=>({
                    cart: state.cart.map((i)=>i.id === id ? {
                            ...i,
                            quantityKg: q
                        } : i)
                })),
        clearCart: ()=>set({
                cart: []
            }),
        cartTotal: ()=>{
            const state = get();
            return state.cart.reduce((acc, item)=>acc + item.pricePerKg * item.quantityKg, 0);
        },
        calculateTotal: ()=>{
            const total = get().cartTotal();
            const delivery = calculateDeliveryFee(get().currentUser?.wilaya || '');
            return total + delivery;
        },
        // --- INVENTORY WITH API SYNC ---
        inventory: INITIAL_INVENTORY_FINAL,
        fetchInventory: async ()=>{
            try {
                const res = await fetch('/api/products');
                if (res.ok) {
                    const data = await res.json();
                    set({
                        inventory: data
                    });
                }
            } catch (e) {
                console.error('Failed to fetch inventory:', e);
            }
        },
        updateInventory: (items)=>{
            set({
                inventory: items
            });
            // Sync to API
            fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(items)
            }).catch((err)=>console.error('Sync failed', err));
        },
        // --- ORDERS WITH API SYNC ---
        orders: [],
        fetchOrders: async ()=>{
            try {
                const res = await fetch('/api/orders');
                if (res.ok) {
                    const data = await res.json();
                    set({
                        orders: data
                    });
                }
            } catch (e) {
                console.error('Failed to fetch orders:', e);
            }
        },
        addOrder: (order)=>{
            const newOrders = [
                order,
                ...get().orders
            ];
            set({
                orders: newOrders
            });
            // 1. Sync Orders
            fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newOrders)
            });
            // 2. Sync Stock Deduction
            const currentInventory = [
                ...get().inventory
            ];
            order.items.forEach((cartItem)=>{
                const productIndex = currentInventory.findIndex((p)=>p.id === cartItem.productId);
                if (productIndex !== -1) {
                    currentInventory[productIndex] = {
                        ...currentInventory[productIndex],
                        stockKg: Math.max(0, currentInventory[productIndex].stockKg - cartItem.quantityKg)
                    };
                }
            });
            get().updateInventory(currentInventory);
        },
        updateOrderStatus: (id, status)=>set((state)=>({
                    orders: state.orders.map((o)=>o.id === id ? {
                            ...o,
                            status
                        } : o)
                })),
        updateOrderReturn: (id, reason)=>set((state)=>({
                    orders: state.orders.map((o)=>o.id === id ? {
                            ...o,
                            status: 'returned',
                            returnReason: reason
                        } : o)
                })),
        updateUser: (userData)=>set((state)=>({
                    currentUser: state.currentUser ? {
                        ...state.currentUser,
                        ...userData
                    } : null,
                    users: state.users.map((u)=>u.id === state.currentUser?.id ? {
                            ...u,
                            ...userData
                        } : u)
                })),
        // Analytics
        totalVisits: 0,
        incrementVisits: ()=>set((state)=>({
                    totalVisits: state.totalVisits + 1
                })),
        analyticsData: {
            traffic: [
                {
                    name: 'Lun',
                    value: 400
                },
                {
                    name: 'Mar',
                    value: 300
                },
                {
                    name: 'Mer',
                    value: 550
                },
                {
                    name: 'Jeu',
                    value: 450
                },
                {
                    name: 'Ven',
                    value: 600
                },
                {
                    name: 'Sam',
                    value: 700
                },
                {
                    name: 'Dim',
                    value: 500
                }
            ],
            conversion: [
                {
                    name: 'Lun',
                    value: 24
                },
                {
                    name: 'Mar',
                    value: 18
                },
                {
                    name: 'Mer',
                    value: 35
                },
                {
                    name: 'Jeu',
                    value: 28
                },
                {
                    name: 'Ven',
                    value: 42
                },
                {
                    name: 'Sam',
                    value: 48
                },
                {
                    name: 'Dim',
                    value: 38
                }
            ]
        },
        updateAnalyticsData: (data)=>set((state)=>({
                    analyticsData: {
                        ...state.analyticsData,
                        ...data
                    }
                })),
        referralSource: '',
        setReferralSource: (source)=>set({
                referralSource: source
            }),
        getDeliveryFee: (wilaya, mode)=>{
            const fees = get().settings.deliveryFees;
            if (fees[wilaya]) {
                return fees[wilaya][mode];
            }
            return calculateDeliveryFee(wilaya, mode);
        }
    }), {
    name: 'dattes-storage-v5',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    version: 5,
    migrate: (persistedState, version)=>{
        if (version < 5) {
            // Smart Merge: Update text/translations from code, but KEEP user's stock/prices/images
            const oldInventory = persistedState.inventory || [];
            const mergedInventory = INITIAL_INVENTORY_FINAL.map((initialItem)=>{
                const existingItem = oldInventory.find((i)=>i.id === initialItem.id);
                if (existingItem) {
                    // Merge logic:
                    // 1. Keep user-mutable fields from storage (Stock, Price, Images)
                    // 2. Force-update static text fields from code (Descriptions, Translations)
                    return {
                        ...initialItem,
                        stockKg: existingItem.stockKg,
                        pricePerKg: existingItem.pricePerKg,
                        images: existingItem.images
                    };
                }
                return initialItem; // New item found in code? Add it.
            });
            return {
                ...persistedState,
                inventory: mergedInventory
            };
        }
        return persistedState;
    },
    partialize: (state)=>({
            // Persist ONLY user-local settings.
            // DATA (Inventory/Orders) must come from Server (JSON API).
            language: state.language,
            cart: state.cart,
            settings: state.settings,
            currentUser: state.currentUser,
            users: state.users,
            totalVisits: state.totalVisits,
            analyticsData: state.analyticsData
        }),
    onRehydrateStorage: ()=>(state)=>{
            state?.setHasHydrated(true);
        }
}));
}),
"[project]/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Header() {
    const { language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])();
    const isRtl = language === 'ar';
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const languages = [
        {
            code: 'fr',
            label: 'Français',
            flag: '🇫🇷'
        },
        {
            code: 'ar',
            label: 'العربية',
            flag: '🇩🇿'
        },
        {
            code: 'en',
            label: 'English',
            flag: '🇺🇸'
        }
    ];
    const currentLang = languages.find((l)=>l.code === language) || languages[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        dir: "ltr",
        className: "flex items-center justify-between p-4 bg-dattes-bg sticky top-0 z-40 shadow-sm/50 backdrop-blur-md bg-opacity-95 h-20 md:h-28 transition-all",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                ref: dropdownRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "flex items-center gap-2 text-xs font-bold border border-dattes-accent/50 rounded-full px-3 py-1.5 text-dattes-primary hover:bg-dattes-accent/10 transition-colors bg-white/50 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: currentLang.label
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-full left-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-dattes-primary/5 py-1 animate-in fade-in zoom-in-95 duration-200 overflow-hidden",
                        children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                },
                                className: `w-full text-left px-4 py-3 text-xs font-bold flex items-center gap-3 hover:bg-dattes-accent/10 transition-colors ${language === lang.code ? 'text-dattes-primary bg-dattes-accent/5' : 'text-gray-600'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base",
                                        children: lang.flag
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 56,
                                        columnNumber: 33
                                    }, this),
                                    lang.label
                                ]
                            }, lang.code, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 47,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 45,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "font-display font-bold text-2xl md:text-3xl text-dattes-primary tracking-wide hover:text-dattes-accent transition-colors",
                children: [
                    "AB",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-dattes-accent",
                        children: "dattes"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 66,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthControls, {}, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/cart",
                        className: "relative p-2 hover:bg-dattes-accent/10 rounded-full transition-colors text-dattes-primary font-bold text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Panier"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "lucide lucide-shopping-bag w-5 h-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 76,
                                        columnNumber: 246
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 6h18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 76,
                                        columnNumber: 309
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M16 10a4 4 0 0 1-8 0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 76,
                                        columnNumber: 329
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 76,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
function AuthControls() {
    const { currentUser, logout, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])();
    const isRtl = language === 'ar';
    const t = {
        login: isRtl ? 'دخول' : 'Connexion',
        admin: isRtl ? 'لوحة التحكم' : 'Admin',
        logout: isRtl ? 'خروج' : 'Déconnexion'
    };
    if (currentUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                (currentUser.role === 'admin' || currentUser.email === 'admin@dattes.dz') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/admin",
                    className: "text-xs font-bold text-white bg-dattes-primary border border-dattes-accent px-4 py-2 rounded-full hover:bg-black transition-colors shadow-md",
                    children: t.admin
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 96,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: currentUser.role === 'admin' || currentUser.email === 'admin@dattes.dz' ? "/admin" : "/profile",
                            className: "hidden md:block text-xs font-bold text-gray-600 hover:text-dattes-primary transition-colors",
                            children: currentUser.name
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 101,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (confirm(t.logout + ' ?')) logout();
                            },
                            className: "text-xs text-red-500 hover:underline font-bold",
                            children: t.logout
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 107,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 100,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 94,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/login",
        className: "flex items-center gap-1.5 text-xs font-bold text-dattes-primary hover:text-dattes-accent transition-colors",
        children: t.login
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 118,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Footer() {
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])();
    const isRtl = language === 'ar';
    const t = {
        slogan: language === 'en' ? 'The authentic taste of the Sahara.' : language === 'ar' ? 'مذاق الصحراء الأصيل.' : 'Le goût authentique du Sahara.',
        home: language === 'en' ? 'Home' : language === 'ar' ? 'الرئيسية' : 'Accueil',
        shop: language === 'en' ? 'Shop' : language === 'ar' ? 'المتجر' : 'Boutique',
        contact: language === 'en' ? 'Contact' : language === 'ar' ? 'اتصل بنا' : 'Contact',
        rights: language === 'en' ? 'All rights reserved.' : language === 'ar' ? 'جميع الحقوق محفوظة.' : 'Tous droits réservés.'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-dattes-primary text-white py-12",
        dir: isRtl ? 'rtl' : 'ltr',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-display font-bold text-dattes-accent mb-2",
                                children: "ABdattes"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 26,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/60 text-sm",
                                children: t.slogan
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6 text-sm font-bold text-white/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-dattes-accent transition-colors",
                                children: t.home
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/product",
                                className: "hover:text-dattes-accent transition-colors",
                                children: t.shop
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "hover:text-dattes-accent transition-colors",
                                children: t.contact
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 33,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-white/40",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " ABdattes. ",
                            t.rights
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 36,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 24,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/product/[id]/ProductContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-ssr] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function ProductContent({ id }) {
    const { language, inventory, addToCart, incrementVisits } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])();
    const isRtl = language === 'ar';
    const [added, setAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        incrementVisits();
    }, [
        incrementVisits
    ]);
    const product = inventory.find((p)=>p.id === id);
    if (!product) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const displayType = isRtl && product.typeAr ? product.typeAr : product.type;
    const displayQuality = isRtl && product.qualityAr ? product.qualityAr : product.quality;
    const displayOrigin = isRtl && product.originAr ? product.originAr : product.origin || 'Algérie';
    const displayDesc = isRtl && product.descriptionAr ? product.descriptionAr : product.longDescription || product.description;
    const t = {
        back: isRtl ? 'عودة للمتجر' : 'Retour à la boutique',
        addToCart: isRtl ? 'أضف للسلة' : 'Ajouter au Panier',
        perKg: isRtl ? 'دج / كغ' : 'DA / Kg',
        description: isRtl ? 'الوصف' : 'Description',
        nutritional: isRtl ? 'القيمة الغذائية (لكل 100غ)' : 'Valeurs Nutritionnelles (pour 100g)',
        calories: isRtl ? 'سعرات حرارية' : 'Calories',
        carbs: isRtl ? 'كربوهيدرات' : 'Glucides',
        protein: isRtl ? 'بروتين' : 'Protéines',
        fiber: isRtl ? 'ألياف' : 'Fibres',
        origin: isRtl ? 'المصدر' : 'Origine',
        deliveryInfo: isRtl ? 'توصيل سريع 69 ولاية' : 'Livraison Rapide 69 Wilayas',
        organic: isRtl ? 'طبيعي 100٪' : '100% Naturel',
        guarantee: isRtl ? 'جودة مضمونة' : 'Qualité Garantie'
    };
    const handleAddToCart = ()=>{
        addToCart({
            id: crypto.randomUUID(),
            productId: product.id,
            name: displayType,
            quality: displayQuality,
            type: displayType,
            quantityKg: quantity,
            pricePerKg: product.pricePerKg,
            image: product.images?.[0] || '/products/deglet-nour.png'
        });
        setAdded(true);
        setTimeout(()=>setAdded(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen bg-dattes-bg font-sans ${isRtl ? 'rtl' : 'ltr'}`,
        dir: isRtl ? 'rtl' : 'ltr',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/app/product/[id]/ProductContent.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center text-gray-500 hover:text-dattes-primary mb-8 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: `w-5 h-5 ${isRtl ? 'rotate-180' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mx-2",
                                children: t.back
                            }, void 0, false, {
                                fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/product/[id]/ProductContent.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-3xl shadow-sm border border-dattes-primary/5 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-8 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full aspect-square max-w-md rounded-2xl overflow-hidden shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: product.images?.[0] || '/products/deglet-nour.png',
                                                alt: displayType,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                lineNumber: 79,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute top-4 ${isRtl ? 'left-4' : 'right-4'} bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold shadow-sm text-dattes-primary`,
                                                children: displayQuality
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                lineNumber: 84,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 md:py-12 flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-dattes-accent font-bold uppercase tracking-wider mb-2",
                                                    children: [
                                                        displayOrigin,
                                                        " - ",
                                                        isRtl ? 'الجزائر' : 'Algérie'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-4xl font-display font-bold text-dattes-primary mb-2",
                                                    children: displayType
                                                }, void 0, false, {
                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-baseline gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-3xl font-bold text-dattes-accent",
                                                            children: product.pricePerKg
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500 font-bold uppercase",
                                                            children: t.perKg
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                            lineNumber: 92,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-8 leading-relaxed text-lg",
                                            children: displayDesc
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                            lineNumber: 101,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-4 mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center text-center p-3 bg-dattes-bg rounded-xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                                            className: "w-6 h-6 text-dattes-primary mb-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-gray-600",
                                                            children: t.organic
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center text-center p-3 bg-dattes-bg rounded-xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                            className: "w-6 h-6 text-dattes-primary mb-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-gray-600",
                                                            children: t.deliveryInfo
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center text-center p-3 bg-dattes-bg rounded-xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            className: "w-6 h-6 text-dattes-primary mb-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-gray-600",
                                                            children: t.guarantee
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                            lineNumber: 106,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-4 mb-8 border-b border-gray-100 pb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center border border-gray-200 rounded-xl bg-gray-50 max-w-[150px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setQuantity(Math.max(1, quantity - 1)),
                                                            className: "w-12 h-12 flex items-center justify-center text-dattes-primary font-bold hover:bg-white rounded-l-xl transition-colors",
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 text-center font-bold text-gray-800",
                                                            children: [
                                                                quantity,
                                                                " Kg"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setQuantity(quantity + 1),
                                                            className: "w-12 h-12 flex items-center justify-center text-dattes-primary font-bold hover:bg-white rounded-r-xl transition-colors",
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleAddToCart,
                                                    className: `flex-1 py-3 px-8 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-lg shadow-lg transform hover:-translate-y-0.5 ${added ? 'bg-green-600 text-white' : 'bg-dattes-primary text-white hover:bg-dattes-accent hover:text-dattes-primary'}`,
                                                    children: added ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "✓ Ajouté"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 46
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 72
                                                            }, this),
                                                            " ",
                                                            t.addToCart,
                                                            " - ",
                                                            product.pricePerKg * quantity,
                                                            " DA"
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                            lineNumber: 122,
                                            columnNumber: 29
                                        }, this),
                                        product.nutritionalInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-dattes-primary mb-4",
                                                    children: t.nutritional
                                                }, void 0, false, {
                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-4 gap-2 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white border border-gray-100 p-3 rounded-lg shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-dattes-accent font-bold text-lg",
                                                                    children: product.nutritionalInfo.calories
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                                    lineNumber: 151,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-gray-500 uppercase",
                                                                    children: t.calories
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                                    lineNumber: 152,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white border border-gray-100 p-3 rounded-lg shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-800 font-bold text-lg",
                                                                    children: [
                                                                        product.nutritionalInfo.carbs,
                                                                        "g"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-gray-500 uppercase",
                                                                    children: t.carbs
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white border border-gray-100 p-3 rounded-lg shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-800 font-bold text-lg",
                                                                    children: [
                                                                        product.nutritionalInfo.protein,
                                                                        "g"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-gray-500 uppercase",
                                                                    children: t.protein
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white border border-gray-100 p-3 rounded-lg shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-800 font-bold text-lg",
                                                                    children: [
                                                                        product.nutritionalInfo.fiber,
                                                                        "g"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-gray-500 uppercase",
                                                                    children: t.fiber
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                            lineNumber: 147,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/product/[id]/ProductContent.tsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/product/[id]/ProductContent.tsx",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/product/[id]/ProductContent.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/product/[id]/ProductContent.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/app/product/[id]/ProductContent.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/product/[id]/ProductContent.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7cd00880._.js.map
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
const INITIAL_USERS = [
    {
        id: '1',
        email: 'admin@dattes.dz',
        password: 'admin',
        role: 'admin',
        name: 'Admin',
        phone: '0562760654'
    },
    {
        id: '2',
        email: 'client@dattes.dz',
        password: 'client',
        role: 'customer',
        name: 'Client Demo',
        phone: '0555555555'
    },
    {
        id: '3',
        email: 'lamine@gmail.com',
        password: '123',
        role: 'customer',
        name: 'Lamine',
        phone: '0550505050',
        wilaya: 'Biskra',
        commune: 'El Haouch'
    }
];
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
            // Persist everything except transient UI states if any
            language: state.language,
            cart: state.cart,
            settings: state.settings,
            currentUser: state.currentUser,
            users: state.users,
            orders: state.orders,
            inventory: state.inventory,
            totalVisits: state.totalVisits,
            analyticsData: state.analyticsData
        }),
    onRehydrateStorage: ()=>(state)=>{
            state?.setHasHydrated(true);
        }
}));
}),
"[project]/lib/locations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALGERIA_LOCATIONS",
    ()=>ALGERIA_LOCATIONS
]);
const ALGERIA_LOCATIONS = {
    "Adrar": [
        "Adrar",
        "Akabli",
        "Aougrout",
        "Aoulef",
        "Bordj Badji Mokhtar",
        "Bouda",
        "Charouine",
        "Deldoul",
        "Fenoughil",
        "In Zghmir",
        "Ksar Kaddour",
        "Metarfa",
        "Ouled Ahmed Tammi",
        "Ouled Aissa",
        "Ouled Said",
        "Reggane",
        "Sali",
        "Sbaa",
        "Talmine",
        "Tamentit",
        "Tamest",
        "Timiaouine",
        "Timimoun",
        "Timokten",
        "Tinerkouk",
        "Tit",
        "Tsabit",
        "Zaouiet Kounta"
    ],
    "Chlef": [
        "Abou El Hassen",
        "Ain Merane",
        "Benairia",
        "Beni Bouateb",
        "Beni Haoua",
        "Beni Rached",
        "Boukadir",
        "Bouzghaia",
        "Breira",
        "Chettia",
        "Chlef",
        "Dahra",
        "El Hadjadj",
        "El Karimia",
        "El Marsa",
        "Harchoun",
        "Herenfa",
        "Labiod Medjadja",
        "Moussadek",
        "Oued Fodda",
        "Oued Goussine",
        "Oued Sly",
        "Ouled Abbes",
        "Ouled Ben Abdelkader",
        "Ouled Fares",
        "Oum Drou",
        "Sendjas",
        "Sidi Abderrahmane",
        "Sidi Akacha",
        "Sobha",
        "Tadjna",
        "Talassa",
        "Taougrite",
        "Tenes",
        "Zeboudja"
    ],
    "Laghouat": [
        "Ain Mahdi",
        "Ain Sidi Ali",
        "Beidha",
        "Benacer Ben Chohra",
        "Brida",
        "El Assafia",
        "El Ghicha",
        "El Haouaita",
        "El Kheneg",
        "Gueltat Sidi Saad",
        "Hadj Mechri",
        "Hassi Delaa",
        "Hassi R'Mel",
        "Ksar El Hirane",
        "Laghouat",
        "Oued M'Zi",
        "Oued Morra",
        "Sebgag",
        "Sidi Bouzid",
        "Sidi Makhlouf",
        "Tadjmout",
        "Tadjrouna",
        "Taouiala"
    ],
    "Oum El Bouaghi": [
        "Ain Babouche",
        "Ain Beida",
        "Ain Diss",
        "Ain Fekroune",
        "Ain Kercha",
        "Ain M'lila",
        "Ain Zitoun",
        "Behir Chergui",
        "Berriche",
        "Bir Chouhada",
        "Dhala",
        "El Amiria",
        "El Belala",
        "El Djazia",
        "El Fedjoudj Boughrara Saoudi",
        "El Harmilia",
        "Fkirina",
        "Hanchir Toumghani",
        "Ksar Sbahi",
        "Meskiana",
        "Oued Nini",
        "Ouled Gacem",
        "Ouled Hamla",
        "Ouled Zouai",
        "Oum El Bouaghi",
        "Rahia",
        "Sigus",
        "Souk Naamane",
        "Zorg"
    ],
    "Batna": [
        "Ain Djasser",
        "Ain Touta",
        "Ain Yagout",
        "Arris",
        "Batna",
        "Beni Foudhala El Hakania",
        "Boulhilat",
        "Boumagueur",
        "Boumia",
        "Bouzina",
        "Chemora",
        "Chir",
        "Djerma",
        "El Hassi",
        "El Madher",
        "Fesdis",
        "Foum Toub",
        "Ghassira",
        "Gosbat",
        "Guigba",
        "Hidoussa",
        "Ichmoul",
        "Inoughissen",
        "Kimmel",
        "Ksar Belezma",
        "Larbaa",
        "Lazrou",
        "Lemsane",
        "Maafa",
        "Menaa",
        "Merouana",
        "Ngaous",
        "Oued Chaaba",
        "Oued El Ma",
        "Oued Taga",
        "Ouled Aouf",
        "Ouled Fadel",
        "Ouled Selam",
        "Ouled Si Slimane",
        "Ouyoun El Assafir",
        "Rahbat",
        "Ras El Aioun",
        "Sefiane",
        "Seriana",
        "Talkhamt",
        "Taxlent",
        "Tazoult",
        "Teniet El Abed",
        "Tighanimine",
        "Tigherghar",
        "Timgad",
        "Tkout",
        "Zanat El Beida"
    ],
    "Béjaïa": [
        "Adekar",
        "Ait Djellil",
        "Ait R'zine",
        "Ait Smail",
        "Akbou",
        "Akfadou",
        "Amalou",
        "Amizour",
        "Aokas",
        "Barbacha",
        "Bejaia",
        "Beni Ksila",
        "Beni Maouch",
        "Beni Melikeche",
        "Boudjellil",
        "Bouhamza",
        "Boukhelifa",
        "Chelata",
        "Chemini",
        "Darguina",
        "Draa Kaid",
        "El Kseur",
        "Ferraoun",
        "Ifelain Ilmathen",
        "Ighil Ali",
        "Ighram",
        "Kendira",
        "Kherrata",
        "Leflaye",
        "M'cisna",
        "Melbou",
        "Oued Ghir",
        "Ouzallaguen",
        "Seddouk",
        "Semaoun",
        "Sidi Aich",
        "Sidi Ayad",
        "Souk El Thenine",
        "Souk Oufella",
        "Tala Hamza",
        "Tamokra",
        "Tamridjet",
        "Taourirt Ighil",
        "Taskriout",
        "Tazmalt",
        "Thinabdher",
        "Tibane",
        "Tichi",
        "Tifra",
        "Timzrit",
        "Tizi N'berber",
        "Toudja"
    ],
    "Biskra": [
        "Ain Naga",
        "Besbes",
        "Biskra",
        "Bordj Ben Azzouz",
        "Bouchagroun",
        "Chetma",
        "Doucen",
        "Ech Chaiba",
        "El Feidh",
        "El Ghrous",
        "El Hadjab",
        "El Haouch",
        "Foughala",
        "Khanguet Sidinadji",
        "Lichana",
        "Lioua",
        "M'lili",
        "M'ziraa",
        "Mchouneche",
        "Mekhadma",
        "Ouled Djellal",
        "Oumache",
        "Ourlal",
        "Ras El Miaad",
        "Sidi Khaled",
        "Sidi Okba",
        "Tolga",
        "Zeribet El Oued"
    ],
    "Bechar": [
        "Abadla",
        "Bechar",
        "Beni Abbes",
        "Beni Ikhlef",
        "Beni Ounif",
        "Boukais",
        "El Ouata",
        "Erg Ferradj",
        "Igli",
        "Kenedsa",
        "Kerzaz",
        "Ksabi",
        "Lahmar",
        "Mechraa Houari Boumedienne",
        "Meridja",
        "Mogheul",
        "Ouled Khoudir",
        "Tabalbala",
        "Taghit",
        "Tamtert",
        "Timoudi"
    ],
    "Blida": [
        "Ain Romana",
        "Ben Khlil",
        "Beni Mered",
        "Beni Tamou",
        "Blida",
        "Bouarfa",
        "Boufarik",
        "Bouinan",
        "Chebli",
        "Chiffa",
        "Chrea",
        "Djebabra",
        "El Affroun",
        "Guerrouaou",
        "Hammam Melouane",
        "Larbaa",
        "Meftah",
        "Mouzaia",
        "Oued Djer",
        "Oued El Alleug",
        "Ouled Selama",
        "Ouled Yaich",
        "Souhane",
        "Soumaa"
    ],
    "Bouira": [
        "Aghbalou",
        "Ahl El Ksar",
        "Ain Bessam",
        "Ain El Hadjar",
        "Ain Laloui",
        "Ain Turk",
        "Ait Laaziz",
        "Aomar",
        "Ath Mansour",
        "Bechloul",
        "Bir Ghbalou",
        "Bordj Oukhriss",
        "Bouderbala",
        "Bouira",
        "Boukram",
        "Chorfa",
        "Dechmia",
        "Dirah",
        "Djebahia",
        "El Adjiba",
        "El Asnam",
        "El Hachimia",
        "El Hakimia",
        "El Khebouzia",
        "El Mokrani",
        "Guerrouma",
        "Hadjera Zerga",
        "Haizer",
        "Hanif",
        "Kadiria",
        "Lakhdaria",
        "Maala",
        "Maamora",
        "Mchedallah",
        "Mezdour",
        "Oued El Berdi",
        "Ouled Rached",
        "Raouraoua",
        "Ridane",
        "Saharidj",
        "Souk El Khemis",
        "Sour El Ghozlane",
        "Taghzout",
        "Taguedit",
        "Zbarbar"
    ],
    "Tamanrasset": [
        "Abalessa",
        "Foggaret Ezzaouia",
        "Idles",
        "In Amguel",
        "In Ghar",
        "In Guezzam",
        "In Salah",
        "Tamanghasset",
        "Tazouk",
        "Tinzaouatine"
    ],
    "Tbessa": [
        "Ain Zerga",
        "Bedjene",
        "Bekkaria",
        "Bir Dheb",
        "Bir El Mokadem",
        "Boukhadra",
        "Boulhaf Dyr",
        "Cheria",
        "El Aouinet",
        "El Kouif",
        "El Ma El Biodh",
        "El Mazeraa",
        "El Meridj",
        "El Ogla",
        "Gorriguer",
        "Hammamet",
        "Lahouidjbet",
        "Morsott",
        "Ouenza",
        "Oum Ali",
        "Safsaf El Ouesra",
        "Stah Guentis",
        "Tebessa",
        "Tlidjene"
    ],
    "Tlemcen": [
        "Ain Fetah",
        "Ain Fezza",
        "Ain Ghoraba",
        "Ain Kebira",
        "Ain Nehala",
        "Ain Tallout",
        "Ain Youcef",
        "Amieur",
        "Azails",
        "Bab El Assa",
        "Beni Bahdel",
        "Beni Boussaid",
        "Beni Mester",
        "Beni Ouarsous",
        "Beni Semiel",
        "Beni Snous",
        "Bensekrane",
        "Bouhlou",
        "Chetouane",
        "Dar Yaghmouracene",
        "Djebala",
        "El Fehoul",
        "Fellaoucene",
        "Ghazaouet",
        "Hammam Boughrara",
        "Hennaya",
        "Honaine",
        "Maghnia",
        "Mansourah",
        "Marsa Ben Mhidi",
        "Msirda Fouaga",
        "Nedroma",
        "Oued Chouly",
        "Ouled Mimoun",
        "Ouled Riyah",
        "Remchi",
        "Sabra",
        "Sebbaa Chioukh",
        "Sebdou",
        "Sidi Abdelli",
        "Sidi Medjahed",
        "Souahlia",
        "Souani",
        "Souk El Khemis",
        "Souk Thlata",
        "Terni Beni Hediel",
        "Tianet",
        "Tlemcen",
        "Zenata"
    ],
    "Tiaret": [
        "Ain Bouchekif",
        "Ain Deheb",
        "Ain El Hadid",
        "Ain Kermes",
        "Ain Zarit",
        "Chehaima",
        "Dahmouni",
        "Djillali Ben Amar",
        "Faidja",
        "Frenda",
        "Guertoufa",
        "Madna",
        "Mahdia",
        "Mechraa Safa",
        "Medrissa",
        "Medroussa",
        "Meghila",
        "Mellakou",
        "Nadorah",
        "Naima",
        "Oued Lilli",
        "Ouled Djerad",
        "Rahouia",
        "Sebaine",
        "Sebt",
        "Sidi Abdelghani",
        "Sidi Abderrahmane",
        "Sidi Ali Mellal",
        "Sidi Bakhti",
        "Sidi Hosni",
        "Sougueur",
        "Tagdemt",
        "Takhemaret",
        "Tiaret",
        "Tidda",
        "Tousnina"
    ],
    "Tizi Ouzou": [
        "Abi Youcef",
        "Aghrib",
        "Agouni Gueghrane",
        "Ain El Hammam",
        "Ain Zaouia",
        "Ait Aggouacha",
        "Ait Aissa Mimoun",
        "Ait Bouadou",
        "Ait Boumehdi",
        "Ait Chaffaa",
        "Ait Khelil",
        "Ait Mahmoud",
        "Ait Oumalou",
        "Ait Toudert",
        "Ait Yahia",
        "Ait Yahia Moussa",
        "Akbil",
        "Akerrou",
        "Assi Youcef",
        "Azazga",
        "Azzefoun",
        "Beni Aissi",
        "Beni Douala",
        "Beni Yenni",
        "Beni Ziki",
        "Beni Zmenzer",
        "Boghni",
        "Boudjima",
        "Bounouh",
        "Bouzguen",
        "Draa Ben Khedda",
        "Draa El Mizan",
        "Freha",
        "Frikat",
        "Iboudraren",
        "Idjeur",
        "Iferhounene",
        "Ifigha",
        "Iflissen",
        "Illilten",
        "Iloula Oumalou",
        "Imsouhal",
        "Irdjen",
        "Larba Nait Irathen",
        "Maatka",
        "Makouda",
        "Mechtrass",
        "Mekla",
        "Mizrana",
        "Mkira",
        "Ouacif",
        "Ouadhia",
        "Ouaguenoun",
        "Sidi Naamane",
        "Souamaa",
        "Souk El Thenine",
        "Tadmait",
        "Tigzirt",
        "Timizart",
        "Tirmitine",
        "Tizi Ghenif",
        "Tizi Nthlata",
        "Tizi Ouzou",
        "Tizi Rached",
        "Yakouren",
        "Yatafen",
        "Zekri"
    ],
    "Alger": [
        "Ain Benian",
        "Ain Taya",
        "Alger Centre",
        "Bab Azzouar",
        "Bab El Oued",
        "Baba Hassen",
        "Bachedjerah",
        "Baraki",
        "Belouizdad",
        "Ben Aknoun",
        "Beni Messous",
        "Bir Mourad Rais",
        "Birkhadem",
        "Birtouta",
        "Bologhine",
        "Bordj El Bahri",
        "Bordj El Kiffan",
        "Bourouba",
        "Bouzareah",
        "Casbah",
        "Cheraga",
        "Dar El Beida",
        "Dely Ibrahim",
        "Djasr Kasentina",
        "Douera",
        "Draria",
        "El Achour",
        "El Biar",
        "El Hammamet",
        "El Harrach",
        "El Madania",
        "El Magharia",
        "El Mouradia",
        "Haraoua",
        "Hussein Dey",
        "Hydra",
        "Khracia",
        "Kouba",
        "Les Eucalyptus",
        "Mahelma",
        "Marsa",
        "Mohammadia",
        "Oued Koriche",
        "Oued Smar",
        "Ouled Chebel",
        "Ouled Fayet",
        "Rahmania",
        "Rais Hamidou",
        "Reghaia",
        "Rouiba",
        "Saoula",
        "Sidi Mhamed",
        "Sidi Moussa",
        "Souidania",
        "Staoueli",
        "Tassala El Merdja",
        "Zeralda"
    ],
    "Djelfa": [
        "Ain Chouhada",
        "Ain El Ibel",
        "Ain Maabed",
        "Amourah",
        "Beni Yacoub",
        "Charef",
        "Dar Chouikh",
        "Deldoul",
        "Djelfa",
        "Douis",
        "El Guedid",
        "El Idrissia",
        "Feidh El Botma",
        "Guettara",
        "Hassi Bahbah",
        "Hassi El Euch",
        "M'Liliha",
        "Moudjebara",
        "Oum Laadham",
        "Selmana",
        "Sidi Baizid",
        "Tadmit",
        "Zaafrane",
        "Zaccar"
    ],
    "Jijel": [
        "Bordj T'her",
        "Boudria Beni Yadjis",
        "Bouraoui Belhadef",
        "Boussif Ouled Askeur",
        "Chahna",
        "Chekfa",
        "Djemaa Beni Habibi",
        "Djmila",
        "El Ancer",
        "El Aouana",
        "El Kennar Nouchfi",
        "El Milia",
        "Emir Abdelkader",
        "Erraguene",
        "Ghebala",
        "Jijel",
        "Kaous",
        "Kemir Oued Adjoul",
        "Ouadjana",
        "Ouled Rabah",
        "Ouled Yahia Khadrouch",
        "Selma Benziada",
        "Settara",
        "Sidi Abdelaziz",
        "Sidi Maarouf",
        "Taher",
        "Texena",
        "Ziamma Mansouriah"
    ],
    "Se9tif": [
        "Ain Abessa",
        "Ain Arnat",
        "Ain Azal",
        "Ain El Kebira",
        "Ain Lahdjar",
        "Ain Legraj",
        "Ain Oulmane",
        "Ain Roua",
        "Ain Sebt",
        "Ait Naoual Mezada",
        "Ait Tizi",
        "Amoucha",
        "Babor",
        "Bazer Sakhra",
        "Beidha Bordj",
        "Belaa",
        "Beni Aziz",
        "Beni Chebana",
        "Beni Fouda",
        "Beni Hocine",
        "Beni Mouhli",
        "Beni Ouartilane",
        "Bir El Arch",
        "Bir Haddada",
        "Bouandas",
        "Bougaa",
        "Bousselam",
        "Boutaleb",
        "Dehamcha",
        "Djemila",
        "Draa Kebila",
        "El Eulma",
        "El Ouldja",
        "El Ouricia",
        "Guellal",
        "Guelta Zerka",
        "Guenzet",
        "Guidjel",
        "Hamma",
        "Hammam Essokhna",
        "Hammam Guergour",
        "Harbil",
        "Ksar El Abtal",
        "Maaouia",
        "Maouklane",
        "Mezloug",
        "Oued El Barad",
        "Ouled Addouane",
        "Ouled Sabor",
        "Ouled Sidi Ahmed",
        "Ouled Tebben",
        "Rosfa",
        "Salah Bey",
        "Serdj El Ghoul",
        "Setif",
        "Tachouda",
        "Talaifacene",
        "Taya",
        "Tella",
        "Tizi Nbechar"
    ],
    "Saefda": [
        "Ain El Hadjar",
        "Ain Sekhouna",
        "Ain Soltane",
        "Doui Thabet",
        "El Hassasna",
        "Hounet",
        "Maamora",
        "Moulay Larbi",
        "Ouled Brahim",
        "Ouled Khaled",
        "Saida",
        "Sidi Ahmed",
        "Sidi Amar",
        "Sidi Boubekeur",
        "Tircine",
        "Youb"
    ],
    "Skikda": [
        "Ain Bouziane",
        "Ain Cherchar",
        "Ain Kechra",
        "Ain Zouit",
        "Azzaba",
        "Bein El Ouiden",
        "Bekkouche Lakhdar",
        "Ben Azzouz",
        "Beni Bachir",
        "Beni Oulbane",
        "Beni Zid",
        "Bouchtata",
        "Cheraia",
        "Collo",
        "Djendel",
        "El Ghedir",
        "El Hadaik",
        "El Harrouch",
        "El Marsa",
        "Emdjez Edchich",
        "Es Sebt",
        "Filfila",
        "Hamadi Krouma",
        "Kanoua",
        "Kerkera",
        "Kheneg Mayoum",
        "Oued Zehour",
        "Ouldja Boulbalout",
        "Ouled Attia",
        "Ouled Hebaba",
        "Oum Toub",
        "Ramdane Djamel",
        "Salah Bouchaour",
        "Sidi Mezghiche",
        "Skikda",
        "Tamalous",
        "Zerdazas",
        "Zitouna"
    ],
    "Sidi Bel Abbes": [
        "Ain Adden",
        "Ain El Berd",
        "Ain Kada",
        "Ain Thrid",
        "Ain Tindamine",
        "Amarnas",
        "Badredine El Mokrani",
        "Belarbi",
        "Ben Badis",
        "Benachiba Chelia",
        "Bir El Hammam",
        "Boudjebaa El Bordj",
        "Boukhanafis",
        "Chetouane Belaila",
        "Dhaya",
        "El Hacaiba",
        "Hassi Dahou",
        "Hassi Zehana",
        "Lamtar",
        "Makedra",
        "Marhoum",
        "Mcid",
        "Merine",
        "Mezaourou",
        "Mostefa Ben Brahim",
        "Moulay Slissen",
        "Oued Sbaa",
        "Oued Sefioun",
        "Oued Taourira",
        "Ras El Ma",
        "Redjem Demouche",
        "Sehala Thaoura",
        "Sfissef",
        "Sidi Ali Benyoub",
        "Sidi Ali Boussidi",
        "Sidi Bel Abbes",
        "Sidi Brahim",
        "Sidi Chaib",
        "Sidi Dahou",
        "Sidi Hamadouche",
        "Sidi Khaled",
        "Sidi Lahcene",
        "Sidi Yacoub",
        "Tabia",
        "Tafissour",
        "Taoudmout",
        "Teghalimet",
        "Telagh",
        "Tenira",
        "Tessala",
        "Tilmouni",
        "Zerouala"
    ],
    "Annaba": [
        "Ain Berda",
        "Annaba",
        "Berrahel",
        "Chetaibi",
        "Cheurfa",
        "El Bouni",
        "El Hadjar",
        "Eulma",
        "Oued El Aneb",
        "Seraidi",
        "Sidi Amer",
        "Treat"
    ],
    "Guelma": [
        "Ain Ben Beida",
        "Ain Larbi",
        "Ain Makhlouf",
        "Ain Reggada",
        "Ain Sandel",
        "Belkhir",
        "Ben Djarah",
        "Beni Mezline",
        "Bordj Sabat",
        "Bou Hachana",
        "Bou Hamdane",
        "Bouati Mahmoud",
        "Bouchegouf",
        "Boumahra Ahmed",
        "Dahouara",
        "Djeballah Khemissi",
        "El Fedjoudj",
        "Guelaat Bou Sbaa",
        "Guelma",
        "Hammam Maskhoutine",
        "Hamman Nbail",
        "Heliopolis",
        "Houari Boumediene",
        "Khezara",
        "Medjez Amar",
        "Medjez Sfa",
        "Nechmaya",
        "Oued Cheham",
        "Oued Fragha",
        "Oued Zenati",
        "Ras El Agba",
        "Roknia",
        "Salaoua Announa",
        "Tamlouka"
    ],
    "Constantine": [
        "Ain Abid",
        "Ain Smara",
        "Beni Hamiden",
        "Constantine",
        "Didouche Mourad",
        "El Khroub",
        "Hamma Bouziane",
        "Ibn Badis",
        "Ibn Ziad",
        "Mesaoud Boudjeriou",
        "Ouled Rahmoune",
        "Zighoud Youcef"
    ],
    "Medea": [
        "Ain Boucif",
        "Ain Ouksir",
        "Aissaouia",
        "Aziz",
        "Baata",
        "Benchicao",
        "Beni Slimane",
        "Berrouaghia",
        "Bir Ben Laabed",
        "Boghar",
        "Bouaiche",
        "Bouaichoune",
        "Bouchrahil",
        "Boughezoul",
        "Bouskene",
        "Chahbounia",
        "Chelalet El Adhaoura",
        "Cheniguel",
        "Derrag",
        "Deux Bassins",
        "Djouab",
        "Draa Essamar",
        "El Azizia",
        "El Guelbelkebir",
        "El Hamdania",
        "El Omaria",
        "El Ouinet",
        "Hannacha",
        "Kef Lakhdar",
        "Khams Djouamaa",
        "Medea",
        "Medjebar",
        "Meftaha",
        "Meghraoua",
        "Mezerena",
        "Mihoub",
        "Ouamri",
        "Oued Harbil",
        "Ouled Antar",
        "Ouled Bouachra",
        "Ouled Brahim",
        "Ouled Deide",
        "Ouled Hellal",
        "Ouled Maaref",
        "Oum El Djalil",
        "Ouzera",
        "Rebaia",
        "Saneg",
        "Sedraia",
        "Seghouane",
        "Si Mahdjoub",
        "Sidi Damed",
        "Sidi Errabia",
        "Sidi Naamane",
        "Sidi Zahar",
        "Sidi Ziane",
        "Souagui",
        "Tablat",
        "Tafraout",
        "Tamesguida",
        "Tizi Mahdi",
        "Tlatet Eddouair",
        "Zoubiria"
    ],
    "Mostaganem": [
        "Abdelmalek Ramdane",
        "Achaacha",
        "Ain Boudinar",
        "Ain Nouissy",
        "Ain Sidi Cherif",
        "Ain Tadles",
        "Bouguirat",
        "El Hassiane",
        "Fornaka",
        "Hadjadj",
        "Hassi Maameche",
        "Khadra",
        "Kheiredine",
        "Mansourah",
        "Mesra",
        "Mezghrane",
        "Mostaganem",
        "Nekmaria",
        "Oued El Kheir",
        "Ouled Boughalem",
        "Ouled Maallah",
        "Safsaf",
        "Sayada",
        "Sidi Ali",
        "Sidi Bellater",
        "Sidi Lakhdar",
        "Sirat",
        "Souaflia",
        "Sour",
        "Stidia",
        "Tazgait",
        "Touahria"
    ],
    "M'Sila": [
        "Ain El Hadjel",
        "Ain El Melh",
        "Ain Errich",
        "Ain Fares",
        "Ain Khadra",
        "Belaiba",
        "Ben Srour",
        "Beni Ilmane",
        "Benzouh",
        "Berhoum",
        "Bir Foda",
        "Bouti Sayah",
        "Chellal",
        "Dehahna",
        "Djebel Messaad",
        "El Hamel",
        "El Houamed",
        "Hammam Dhalaa",
        "Khettouti Sed Djir",
        "Khoubana",
        "M'cif",
        "Maadid",
        "Maarif",
        "Magra",
        "Medjedel",
        "Msila",
        "Mtarfa",
        "Ouanougha",
        "Oued Chair",
        "Ouled Addi Guebala",
        "Ouled Atia",
        "Ouled Derradj",
        "Ouled Madhi",
        "Ouled Mansour",
        "Ouled Sidi Brahim",
        "Ouled Slimane",
        "Oultene",
        "Sidi Aissa",
        "Sidi Ameur",
        "Sidi Hadjeres",
        "Sidi Mhamed",
        "Slim",
        "Souamaa",
        "Tamsa",
        "Tarmount",
        "Zarzour"
    ],
    "Mascara": [
        "Ain Fares",
        "Ain Fekan",
        "Ain Ferah",
        "Ain Frass",
        "Alaimia",
        "Aouf",
        "Benian",
        "Bou Hanifia",
        "Bou Henni",
        "Chorfa",
        "El Bordj",
        "El Gaada",
        "El Ghomri",
        "El Hachem",
        "El Keurt",
        "El Mamounia",
        "El Menaouer",
        "Ferraguig",
        "Froha",
        "Gharrous",
        "Gherdjoum",
        "Ghriss",
        "Guettena",
        "Hacine",
        "Khalouia",
        "Makdha",
        "Maoussa",
        "Mascara",
        "Matemore",
        "Moctadouz",
        "Mohammadia",
        "Nesmot",
        "Oggaz",
        "Oued El Abtal",
        "Oued Taria",
        "Ras Ain Amirouche",
        "Sedjerara",
        "Sehailia",
        "Sidi Abdeldjebar",
        "Sidi Abdelmoumene",
        "Sidi Boussaid",
        "Sidi Kada",
        "Sig",
        "Teghennif",
        "Tizi",
        "Zahana",
        "Zelmata"
    ],
    "Ouargla": [
        "Ain Beida",
        "Balidat Ameur",
        "Benaceur",
        "El Allia",
        "El Borma",
        "El Hadjira",
        "Hassi Ben Abdellah",
        "Hassi Messaoud",
        "Megarine",
        "Mnaguer",
        "Nezla",
        "Ngoussa",
        "Ouargla",
        "Rouissat",
        "Sidi Khouiled",
        "Sidi Slimane",
        "Taibet",
        "Tamacine",
        "Tebesbest",
        "Touggourt",
        "Zaouia El Abidia"
    ],
    "Oran": [
        "Ain Biya",
        "Ain Kerma",
        "Ain Turk",
        "Arzew",
        "Ben Freha",
        "Bethioua",
        "Bir El Djir",
        "Boufatis",
        "Bousfer",
        "Boutlelis",
        "El Ancar",
        "El Braya",
        "El Karma",
        "Es Senia",
        "Gdyel",
        "Hassi Ben Okba",
        "Hassi Bounif",
        "Hassi Mefsoukh",
        "Marsat El Hadjadj",
        "Mers El Kebir",
        "Messerghin",
        "Oran",
        "Oued Tlelat",
        "Sidi Ben Yabka",
        "Sidi Chami",
        "Tafraoui"
    ],
    "El Bayadh": [
        "Ain El Orak",
        "Arbaouat",
        "Boualem",
        "Bougtoub",
        "Boussemghoun",
        "Brezina",
        "Cheguig",
        "Chellala",
        "El Bayadh",
        "El Bnoud",
        "El Kheither",
        "El Mehara",
        "Ghassoul",
        "Kef El Ahmar",
        "Krakda",
        "Rogassa",
        "Sidi Ameur",
        "Sidi Slimane",
        "Sidi Tifour",
        "Stitten",
        "Tousmouline"
    ],
    "Illizi": [
        "Bordj El Haouasse",
        "Bordj Omar Driss",
        "Debdeb",
        "Djanet",
        "Illizi",
        "In Amenas"
    ],
    "Bordj Bou Arreridj": [
        "Ain Taghrout",
        "Ain Tesra",
        "Belimour",
        "Ben Daoud",
        "Bir Kasdali",
        "Bordj Bou Arreridj",
        "Bordj Ghdir",
        "Bordj Zemoura",
        "Colla",
        "Djaafra",
        "El Ach",
        "El Achir",
        "El Anseur",
        "El Hamadia",
        "El Main",
        "El Mhir",
        "Ghilassa",
        "Haraza",
        "Hasnaoua",
        "Khelil",
        "Ksour",
        "Mansoura",
        "Medjana",
        "Ouled Brahem",
        "Ouled Dahmane",
        "Ouled Sidi Brahim",
        "Rabta",
        "Ras El Oued",
        "Sidi Embarek",
        "Tafreg",
        "Taglait",
        "Teniet En Nasr",
        "Tesmart",
        "Tixter"
    ],
    "Boumerdes": [
        "Afir",
        "Ammal",
        "Baghlia",
        "Ben Choud",
        "Beni Amrane",
        "Bordj Menaiel",
        "Boudouaou",
        "Boudouaou El Bahri",
        "Boumerdes",
        "Bouzegza Keddara",
        "Chabet El Ameur",
        "Corso",
        "Dellys",
        "Djinet",
        "El Kharrouba",
        "Hammedi",
        "Isser",
        "Khemis El Khechna",
        "Laghata",
        "Larbatache",
        "Naciria",
        "Ouled Aissa",
        "Ouled Hedadj",
        "Ouled Moussa",
        "Si Mustapha",
        "Sidi Daoud",
        "Souk El Had",
        "Taourga",
        "Thenia",
        "Tidjelabine",
        "Timezrit",
        "Zemmouri"
    ],
    "El Tarf": [
        "Ain El Assel",
        "Ain Kerma",
        "Asfour",
        "Ben Mhidi",
        "Berrihane",
        "Besbes",
        "Bougous",
        "Bouhadjar",
        "Bouteldja",
        "Chebaita Mokhtar",
        "Chefia",
        "Chihani",
        "Drean",
        "Echatt",
        "El Aioun",
        "El Kala",
        "El Tarf",
        "Hammam Beni Salah",
        "Lac Des Oiseaux",
        "Oued Zitoun",
        "Raml Souk",
        "Souarekh",
        "Zerizer",
        "Zitouna"
    ],
    "Tindouf": [
        "Oum El Assel",
        "Tindouf"
    ],
    "Tissemsilt": [
        "Ammari",
        "Beni Chaib",
        "Beni Lahcene",
        "Bordj Bou Naama",
        "Bordj El Emir Abdelkader",
        "Boucaid",
        "Khemisti",
        "Larbaa",
        "Lardjem",
        "Layoune",
        "Lazharia",
        "Maasem",
        "Melaab",
        "Ouled Bessem",
        "Sidi Abed",
        "Sidi Boutouchent",
        "Sidi Lantri",
        "Sidi Slimane",
        "Tamalaht",
        "Theniet El Had",
        "Tissemsilt",
        "Youssoufia"
    ],
    "El Oued": [
        "Bayadha",
        "Beni Guecha",
        "Debila",
        "Djamaa",
        "Douar El Ma",
        "El Mghair",
        "El Ogla",
        "El Oued",
        "Guemar",
        "Hamraia",
        "Hassani Abdelkrim",
        "Hassi Khelifa",
        "Kouinine",
        "Magrane",
        "Mih Ouansa",
        "Mrara",
        "Nakhla",
        "Oued El Alenda",
        "Oum Touyour",
        "Ourmas",
        "Reguiba",
        "Robbah",
        "Sidi Amrane",
        "Sidi Aoun",
        "Sidi Khellil",
        "Still",
        "Taghzout",
        "Taleb Larbi",
        "Tendla",
        "Trifaoui"
    ],
    "Khenchela": [
        "Ain Touila",
        "Babar",
        "Baghai",
        "Bouhmama",
        "Chelia",
        "Cherchar",
        "Djellal",
        "El Hamma",
        "El Mahmal",
        "El Oueldja",
        "Ensigha",
        "Kais",
        "Khenchela",
        "Khirane",
        "Msara",
        "Mtoussa",
        "Ouled Rechache",
        "Remila",
        "Tamza",
        "Taouzianat",
        "Yabous"
    ],
    "Souk Ahras": [
        "Ain Soltane",
        "Ain Zana",
        "Bir Bouhouche",
        "Drea",
        "Haddada",
        "Hanancha",
        "Khedara",
        "Khemissa",
        "Mdaourouche",
        "Mechroha",
        "Merahna",
        "Oued Keberit",
        "Ouled Driss",
        "Ouled Moumen",
        "Oum El Adhaim",
        "Quillen",
        "Ragouba",
        "Safel El Ouiden",
        "Sedrata",
        "Sidi Fredj",
        "Souk Ahras",
        "Taoura",
        "Terraguelt",
        "Tiffech",
        "Zaarouria",
        "Zouabi"
    ],
    "Tipaza": [
        "Aghabal",
        "Ahmer El Ain",
        "Ain Tagourait",
        "Attatba",
        "Beni Milleuk",
        "Bou Haroun",
        "Bou Ismail",
        "Bourkika",
        "Chaiba",
        "Cherchel",
        "Damous",
        "Douaouda",
        "Fouka",
        "Gouraya",
        "Hadjerat Ennous",
        "Hadjout",
        "Khemisti",
        "Kolea",
        "Larhat",
        "Menaceur",
        "Messelmoun",
        "Meurad",
        "Nodor",
        "Sidi Amar",
        "Sidi Ghiles",
        "Sidi Rached",
        "Sidi Semiane",
        "Tipaza"
    ],
    "Mila": [
        "Ahmed Rachedi",
        "Ain Beida Harriche",
        "Ain Mellouk",
        "Ain Tine",
        "Amira Arras",
        "Benyahia Abderrahmane",
        "Bouhatem",
        "Chelghoum Laid",
        "Chigara",
        "Derradji Bousselah",
        "El Mechira",
        "Elayadi Barbes",
        "Ferdjioua",
        "Grarem Gouga",
        "Hamala",
        "Mila",
        "Minar Zarza",
        "Oued Athmenia",
        "Oued Endja",
        "Oued Seguen",
        "Ouled Khalouf",
        "Rouached",
        "Sidi Khelifa",
        "Sidi Merouane",
        "Tadjenanet",
        "Tassadane Haddada",
        "Telerghma",
        "Terrai Bainen",
        "Tessala Lamatai",
        "Tiberguent",
        "Yahia Beniguecha",
        "Zeghaia"
    ],
    "Ain Defla": [
        "Ain Benian",
        "Ain Bouyahia",
        "Ain Defla",
        "Ain Lechiakh",
        "Ain Soltane",
        "Ain Torki",
        "Arib",
        "Barbouche",
        "Bathia",
        "Belaas",
        "Ben Allal",
        "Bir Ouled Khelifa",
        "Bordj Emir Khaled",
        "Boumedfaa",
        "Bourached",
        "Djelida",
        "Djemaa Ouled Chikh",
        "Djendel",
        "El Abadia",
        "El Amra",
        "El Attaf",
        "El Hassania",
        "El Maine",
        "Hammam Righa",
        "Hoceinia",
        "Khemis Miliana",
        "Mekhatria",
        "Miliana",
        "Oued Chorfa",
        "Oued Djemaa",
        "Rouina",
        "Sidi Lakhdar",
        "Tachta Zegagha",
        "Tarik Ibn Ziad",
        "Tiberkanine",
        "Zeddine"
    ],
    "Naama": [
        "Ain Ben Khelil",
        "Ain Sefra",
        "Assela",
        "Djeniane Bourzeg",
        "El Biod",
        "Kasdir",
        "Makman Ben Amer",
        "Mechria",
        "Moghrar",
        "Naama",
        "Sfissifa",
        "Tiout"
    ],
    "Ain Temouchent": [
        "Aghlal",
        "Ain El Arbaa",
        "Ain Kihal",
        "Ain Temouchent",
        "Ain Tolba",
        "Aoubellil",
        "Beni Saf",
        "Bou Zedjar",
        "Chaabet El Ham",
        "Chentouf",
        "El Amria",
        "El Emir Abdelkader",
        "El Malah",
        "El Messaid",
        "Hammam Bouhadjar",
        "Hassasna",
        "Hassi El Ghella",
        "Oued Berkeche",
        "Oued Sabah",
        "Ouled Boudjemaa",
        "Ouled Kihal",
        "Oulhaca El Gheraba",
        "Sidi Ben Adda",
        "Sidi Boumediene",
        "Sidi Ouriache",
        "Sidi Safi",
        "Tamzoura",
        "Terga"
    ],
    "Ghardaefa": [
        "Berriane",
        "Bounoura",
        "Dhayet Bendhahoua",
        "El Atteuf",
        "El Guerrara",
        "El Meniaa",
        "Ghardaia",
        "Hassi Fehal",
        "Hassi Gara",
        "Mansoura",
        "Metlili",
        "Sebseb",
        "Zelfana"
    ],
    "Relizane": [
        "Ain Rahma",
        "Ain Tarek",
        "Ammi Moussa",
        "Belaassel Bouzegza",
        "Bendaoud",
        "Beni Dergoun",
        "Beni Zentis",
        "Dar Ben Abdellah",
        "Djidiouia",
        "El Guettar",
        "El Hamadna",
        "El Hassi",
        "El Matmar",
        "El Ouldja",
        "Had Echkalla",
        "Hamri",
        "Kalaa",
        "Lahlef",
        "Mazouna",
        "Mediouna",
        "Mendes",
        "Merdja Sidi Abed",
        "Ouarizane",
        "Oued El Djemaa",
        "Oued Essalem",
        "Oued Rhiou",
        "Ouled Aiche",
        "Ouled Sidi Mihoub",
        "Ramka",
        "Relizane",
        "Sidi Khettab",
        "Sidi Lazreg",
        "Sidi Mhamed Ben Ali",
        "Sidi Mhamed Ben Aouda",
        "Sidi Saada",
        "Souk El Haad",
        "Yellel",
        "Zemmoura"
    ],
    "El M'ghair": [],
    "El Menia": [],
    "Ouled Djellal": [],
    "Bordj Baji Mokhtar": [],
    "Béni Abbès": [],
    "Timimoun": [],
    "Touggourt": [],
    "Djanet": [],
    "In Salah": [],
    "In Guezzam": [],
    "Aflou": [
        "Aflou"
    ],
    "El Abiodh Sidi Cheikh": [
        "El Abiodh Sidi Cheikh"
    ],
    "El Aricha": [
        "El Aricha",
        "El Bouihi",
        "El Gor",
        "Sidi Djillali"
    ],
    "El Kantara": [
        "Ain Zaatout",
        "Branis",
        "Djemorah",
        "El Kantara",
        "El Outaya"
    ],
    "Barika": [
        "Barika",
        "Bitam",
        "Djezzar",
        "M'doukel",
        "Metkaouak",
        "Ouled Ammar",
        "Seggana",
        "Tilatou"
    ],
    "Bou Saada": [
        "Bou Saada"
    ],
    "Bir El Ater": [
        "Bir El Ater",
        "Ferkane",
        "Negrine"
    ],
    "Ksar El Boukhari": [
        "Ksar El Boukhari"
    ],
    "Ksar Chellala": [
        "Bougara",
        "Hamadia",
        "Ksar Chellala",
        "Rechaiga",
        "Serghine",
        "Zmalet El Emir Aek"
    ],
    "Ain Oussara": [
        "Ain Fekka",
        "Ain Oussera",
        "Benhar",
        "Birine",
        "Bouira Lahdeb",
        "El Khemis",
        "Guernini",
        "Had Sahary",
        "Hassi Fedoul",
        "Sidi Ladjel"
    ],
    "Messaad": [
        "Messaad",
        "Sed Rahal"
    ]
};
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
"[project]/app/cart/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
'use client';
;
;
;
;
;
;
;
;
function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal, language, getDeliveryFee, currentUser, addOrder, clearCart, referralSource } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])();
    const isRtl = language === 'ar';
    const t = {
        title: language === 'en' ? 'Your Cart' : language === 'ar' ? 'سلة المشتريات' : 'Votre Panier',
        successTitle: language === 'en' ? 'Order Received Successfully!' : language === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Commande Reçue avec Succès !',
        successMsg: language === 'en' ? 'Thank you for your trust. Your order has been registered and is under review. Our team will contact you shortly to confirm.' : language === 'ar' ? 'شكرا لثقتك. لقد تم تسجيل طلبك وهو الآن قيد المراجعة. سيتصل بك فريقنا قريباً للتأكيد.' : "Merci pour votre confiance. Votre commande a été enregistrée avec succès et est en attente de validation. Un administrateur vous contactera par téléphone très prochainement pour confirmer l'offre et finaliser la livraison.",
        nextStep: language === 'en' ? 'Next Step:' : language === 'ar' ? 'الخطوة التالية:' : 'Prochaine étape :',
        nextStepDesc: language === 'en' ? 'Validation call within 24h.' : language === 'ar' ? 'اتصال تأكيد خلال 24 ساعة.' : 'Appel téléphonique de validation dans les 24h.',
        returnHome: language === 'en' ? 'Return Home' : language === 'ar' ? 'العودة للرئيسية' : 'Retour à l\'accueil',
        // Cart UI
        emptyCart: language === 'en' ? 'Your cart is empty.' : language === 'ar' ? 'سلة المشتريات فارغة.' : 'Votre panier est vide.',
        discoverProducts: language === 'en' ? 'Discover Products' : language === 'ar' ? 'اكتشف منتجاتنا' : 'Découvrir nos produits',
        remove: language === 'en' ? 'Remove' : language === 'ar' ? 'حذف' : 'Supprimer',
        deliveryInfo: language === 'en' ? 'Delivery Information' : language === 'ar' ? 'معلومات التوصيل' : 'Informations de Livraison',
        fullName: language === 'en' ? 'Full Name' : language === 'ar' ? 'الاسم الكامل' : 'Nom Complet',
        yourName: language === 'en' ? 'Your Name' : language === 'ar' ? 'اسمك' : 'Votre nom',
        phone: language === 'en' ? 'Phone Number *' : language === 'ar' ? 'رقم الهاتف *' : 'Numéro de Téléphone *',
        wilaya: language === 'en' ? 'Wilaya' : language === 'ar' ? 'الولاية' : 'Wilaya',
        select: language === 'en' ? 'Select' : language === 'ar' ? 'اختر' : 'Sélectionner',
        commune: language === 'en' ? 'Commune' : language === 'ar' ? 'البلدية' : 'Commune',
        subtotal: language === 'en' ? 'Subtotal' : language === 'ar' ? 'المجموع الفرعي' : 'Sous-total',
        delivery: language === 'en' ? 'Delivery' : language === 'ar' ? 'التوصيل' : 'Livraison',
        calculated: language === 'en' ? 'Calculated by Wilaya' : language === 'ar' ? 'يحسب حسب الولاية' : 'Calculé selon Wilaya',
        total: language === 'en' ? 'Total' : language === 'ar' ? 'المجموع' : 'Total',
        proceed: language === 'en' ? 'Proceed' : language === 'ar' ? 'إتمام الطلب' : 'Procéder'
    };
    // Hydration fix & Auto-fill
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        phone: '',
        wilaya: '',
        commune: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;
    const itemsTotal = cartTotal();
    const deliveryFee = formData.wilaya ? getDeliveryFee(formData.wilaya, deliveryMode) : 0;
    const finalTotal = itemsTotal + deliveryFee;
    const availableCommunes = formData.wilaya ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALGERIA_LOCATIONS"][formData.wilaya] || [] : [];
    const handleCheckout = (e)=>{
        e.preventDefault();
        // 1. Save Order to Store
        const newOrder = {
            id: crypto.randomUUID(),
            userId: currentUser?.id,
            customer: {
                name: formData.name,
                phone: formData.phone,
                wilaya: formData.wilaya,
                commune: formData.commune
            },
            items: [
                ...cart
            ],
            total: finalTotal,
            status: 'pending',
            date: new Date().toISOString(),
            source: referralSource || 'direct',
            deliveryMode: deliveryMode // Save chosen mode
        };
        addOrder(newOrder);
        clearCart();
        setIsSuccess(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-dattes-bg font-sans",
        dir: isRtl ? 'rtl' : 'ltr',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/app/cart/page.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-display font-bold text-dattes-primary mb-8 text-center",
                        children: t.title
                    }, void 0, false, {
                        fileName: "[project]/app/cart/page.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this),
                    isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto text-center py-16 px-8 bg-white rounded-[2rem] shadow-xl border border-green-100 animate-in fade-in zoom-in duration-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500 shadow-inner",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-12 h-12"
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cart/page.tsx",
                                lineNumber: 100,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-display font-bold text-dattes-primary mb-4",
                                children: t.successTitle
                            }, void 0, false, {
                                fileName: "[project]/app/cart/page.tsx",
                                lineNumber: 103,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-8 text-lg leading-relaxed",
                                children: t.successMsg
                            }, void 0, false, {
                                fileName: "[project]/app/cart/page.tsx",
                                lineNumber: 106,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-amber-50 rounded-2xl p-6 mb-10 border border-amber-100 flex items-center gap-4 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-white rounded-xl flex items-center justify-center text-amber-500 shadow-sm flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cart/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-dattes-primary text-sm",
                                                children: t.nextStep
                                            }, void 0, false, {
                                                fileName: "[project]/app/cart/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 text-sm",
                                                children: t.nextStepDesc
                                            }, void 0, false, {
                                                fileName: "[project]/app/cart/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cart/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cart/page.tsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "inline-flex items-center gap-2 bg-dattes-primary text-white px-10 py-4 rounded-full hover:bg-dattes-accent transition-all font-bold shadow-lg shadow-dattes-primary/20 hover:scale-105",
                                children: [
                                    t.returnHome,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cart/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cart/page.tsx",
                                lineNumber: 118,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cart/page.tsx",
                        lineNumber: 99,
                        columnNumber: 21
                    }, this) : cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20 bg-white rounded-3xl shadow-sm border border-dattes-primary/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                className: "w-16 h-16 mx-auto text-gray-300 mb-4"
                            }, void 0, false, {
                                fileName: "[project]/app/cart/page.tsx",
                                lineNumber: 125,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 mb-6",
                                children: t.emptyCart
                            }, void 0, false, {
                                fileName: "[project]/app/cart/page.tsx",
                                lineNumber: 126,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "inline-block bg-dattes-primary text-white px-8 py-3 rounded-full hover:bg-dattes-accent transition-colors font-bold",
                                children: t.discoverProducts
                            }, void 0, false, {
                                fileName: "[project]/app/cart/page.tsx",
                                lineNumber: 127,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cart/page.tsx",
                        lineNumber: 124,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: cart.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-4 rounded-xl shadow-sm flex gap-4 items-center border border-dattes-primary/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.image,
                                                alt: item.name,
                                                className: "w-20 h-20 object-cover rounded-lg bg-gray-100"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cart/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-dattes-primary",
                                                        children: [
                                                            item.name,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-dattes-accent font-normal bg-dattes-accent/10 px-2 py-0.5 rounded-full",
                                                                children: item.quality
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 99
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-gray-500",
                                                        children: [
                                                            item.pricePerKg,
                                                            " DA / kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cart/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-end gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 bg-gray-50 rounded-lg p-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>updateQuantity(item.id, Math.max(1, item.quantityKg - 1)),
                                                                className: "w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-dattes-primary hover:bg-dattes-accent hover:text-white transition-colors",
                                                                children: "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold w-8 text-center",
                                                                children: [
                                                                    item.quantityKg,
                                                                    " kg"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>updateQuantity(item.id, item.quantityKg + 1),
                                                                className: "w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-dattes-primary hover:bg-dattes-accent hover:text-white transition-colors",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeFromCart(item.id),
                                                        className: "text-red-400 hover:text-red-500 text-xs flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 45
                                                            }, this),
                                                            " ",
                                                            t.remove
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cart/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/app/cart/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/cart/page.tsx",
                                lineNumber: 134,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-8 rounded-3xl shadow-lg border border-dattes-accent/20 h-fit sticky top-24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-dattes-primary mb-6 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "📦"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cart/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 33
                                            }, this),
                                            " ",
                                            t.deliveryInfo
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cart/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleCheckout,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-bold text-gray-700 mb-1",
                                                        children: t.fullName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "text",
                                                        className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50 transition-all",
                                                        placeholder: t.yourName,
                                                        value: formData.name,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                name: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cart/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-bold text-gray-700 mb-1",
                                                        children: t.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "tel",
                                                        className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50 transition-all",
                                                        placeholder: "05 XX XX XX XX",
                                                        value: formData.phone,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                phone: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cart/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-bold text-gray-700 mb-1",
                                                                children: t.wilaya
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                required: true,
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50 transition-all appearance-none",
                                                                value: formData.wilaya,
                                                                onChange: (e)=>{
                                                                    setFormData({
                                                                        ...formData,
                                                                        wilaya: e.target.value,
                                                                        commune: ''
                                                                    });
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: t.select
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cart/page.tsx",
                                                                        lineNumber: 205,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALGERIA_LOCATIONS"]).map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: w,
                                                                            children: [
                                                                                i + 1,
                                                                                " - ",
                                                                                w
                                                                            ]
                                                                        }, w, true, {
                                                                            fileName: "[project]/app/cart/page.tsx",
                                                                            lineNumber: 207,
                                                                            columnNumber: 49
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-bold text-gray-700 mb-1",
                                                                children: t.commune
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                required: true,
                                                                disabled: !formData.wilaya,
                                                                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dattes-accent/50 transition-all appearance-none disabled:opacity-50",
                                                                value: formData.commune,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        commune: e.target.value
                                                                    }),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: t.select
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cart/page.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    availableCommunes.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: c,
                                                                            children: c
                                                                        }, c, false, {
                                                                            fileName: "[project]/app/cart/page.tsx",
                                                                            lineNumber: 222,
                                                                            columnNumber: 49
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cart/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 p-4 bg-gray-50 rounded-xl space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                        children: language === 'en' ? 'Delivery Mode' : language === 'ar' ? 'طريقة التوصيل' : 'Mode de Livraison'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${deliveryMode === 'bureau' ? 'border-dattes-accent bg-white shadow-sm' : 'border-transparent hover:bg-gray-100'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        name: "deliveryMode",
                                                                        value: "bureau",
                                                                        checked: deliveryMode === 'bureau',
                                                                        onChange: ()=>setDeliveryMode('bureau'),
                                                                        className: "w-5 h-5 text-dattes-accent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cart/page.tsx",
                                                                        lineNumber: 236,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-bold text-gray-800",
                                                                                children: language === 'en' ? 'Stop Desk (Bureau)' : language === 'ar' ? 'المكتب (Stop Desk)' : 'Bureau (Stop Desk)'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cart/page.tsx",
                                                                                lineNumber: 245,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-500",
                                                                                children: language === 'en' ? 'Pick up from Yalidine office' : language === 'ar' ? 'استلام من مكتب ياليدين' : 'Récupérer au bureau Yalidine'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cart/page.tsx",
                                                                                lineNumber: 248,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cart/page.tsx",
                                                                        lineNumber: 244,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 41
                                                            }, this),
                                                            formData.wilaya && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-dattes-accent",
                                                                children: [
                                                                    getDeliveryFee(formData.wilaya, 'bureau'),
                                                                    " DA"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${deliveryMode === 'home' ? 'border-dattes-accent bg-white shadow-sm' : 'border-transparent hover:bg-gray-100'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        name: "deliveryMode",
                                                                        value: "home",
                                                                        checked: deliveryMode === 'home',
                                                                        onChange: ()=>setDeliveryMode('home'),
                                                                        className: "w-5 h-5 text-dattes-accent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/cart/page.tsx",
                                                                        lineNumber: 262,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-bold text-gray-800",
                                                                                children: language === 'en' ? 'Home Delivery' : language === 'ar' ? 'توصيل للمنزل' : 'À Domicile'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cart/page.tsx",
                                                                                lineNumber: 271,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-500",
                                                                                children: language === 'en' ? 'Delivered to your door' : language === 'ar' ? 'توصيل حتى باب المنزل' : 'Livraison jusqu\'à la porte'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cart/page.tsx",
                                                                                lineNumber: 274,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/cart/page.tsx",
                                                                        lineNumber: 270,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 41
                                                            }, this),
                                                            formData.wilaya && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-dattes-accent",
                                                                children: [
                                                                    getDeliveryFee(formData.wilaya, 'home'),
                                                                    " DA"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 280,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cart/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-4 border-t border-dashed border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500",
                                                                children: t.subtotal
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-dattes-primary",
                                                                children: [
                                                                    itemsTotal.toLocaleString(),
                                                                    " DA"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500",
                                                                children: t.delivery
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-green-600",
                                                                children: deliveryFee > 0 ? `${deliveryFee} DA` : t.calculated
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center text-xl font-bold text-dattes-primary",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: t.total
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    finalTotal.toLocaleString(),
                                                                    " DA"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/cart/page.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cart/page.tsx",
                                                lineNumber: 287,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20 flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t.proceed
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cart/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cart/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cart/page.tsx",
                                lineNumber: 166,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cart/page.tsx",
                        lineNumber: 132,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cart/page.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/app/cart/page.tsx",
                lineNumber: 315,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cart/page.tsx",
        lineNumber: 92,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_0c6a484f._.js.map
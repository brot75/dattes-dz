module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/CookieConsent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CookieConsent",
    ()=>CookieConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cookie.js [app-ssr] (ecmascript) <export default as Cookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
'use client';
;
;
;
;
function CookieConsent() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if user has already consented
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Delay slightly for better UX
            const timer = setTimeout(()=>setIsVisible(true), 1500);
            return ()=>clearTimeout(timer);
        }
    }, []);
    const handleAccept = ()=>{
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
        // Here we would technically enable real tracking scripts
        console.log('Cookies accepted - Tracking enabled');
    };
    const handleDecline = ()=>{
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                y: 100,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            exit: {
                y: 100,
                opacity: 0
            },
            className: "fixed bottom-24 left-4 right-4 md:bottom-4 md:left-4 md:right-auto md:w-96 z-50 pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-100 pointer-events-auto relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 p-4 opacity-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"], {
                            className: "w-24 h-24 rotate-12"
                        }, void 0, false, {
                            fileName: "[project]/components/CookieConsent.tsx",
                            lineNumber: 45,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CookieConsent.tsx",
                        lineNumber: 44,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-dattes-primary/10 rounded-full text-dattes-primary",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CookieConsent.tsx",
                                            lineNumber: 51,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CookieConsent.tsx",
                                        lineNumber: 50,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-gray-900",
                                                children: "Cookies & Confidentialité"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CookieConsent.tsx",
                                                lineNumber: 54,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-1 leading-relaxed",
                                                children: "Nous utilisons des cookies pour récupérer les données de trafic (Facebook, TikTok, Instagram) et améliorer votre expérience."
                                            }, void 0, false, {
                                                fileName: "[project]/components/CookieConsent.tsx",
                                                lineNumber: 55,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CookieConsent.tsx",
                                        lineNumber: 53,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CookieConsent.tsx",
                                lineNumber: 49,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDecline,
                                        className: "flex-1 py-2 px-4 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-100 transition-colors",
                                        children: "Refuser"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CookieConsent.tsx",
                                        lineNumber: 62,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleAccept,
                                        className: "flex-1 py-2 px-4 rounded-xl text-xs font-bold text-white bg-dattes-primary hover:bg-black transition-colors shadow-lg shadow-dattes-primary/20 flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CookieConsent.tsx",
                                                lineNumber: 72,
                                                columnNumber: 37
                                            }, this),
                                            "Accepter"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CookieConsent.tsx",
                                        lineNumber: 68,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CookieConsent.tsx",
                                lineNumber: 61,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CookieConsent.tsx",
                        lineNumber: 48,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CookieConsent.tsx",
                lineNumber: 42,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/CookieConsent.tsx",
            lineNumber: 36,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CookieConsent.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
}),
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
    if (northWilayas.includes(w)) acc[w] = 400;
    else if (southWilayas.includes(w)) acc[w] = 900;
    else acc[w] = 600;
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
    }
];
const calculateDeliveryFee = (wilaya)=>{
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
    if (northWilayas.includes(wilaya)) return 400;
    if (southWilayas.includes(wilaya)) return 900;
    return 600;
};
const INITIAL_INVENTORY_FINAL = [
    {
        id: '1',
        type: 'Deglet Nour',
        quality: 'Premium',
        pricePerKg: 1200,
        stockKg: 500,
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
            // 1. MASTER KEY CHECK: Always allow hardcoded admin to login regardless of state
            const adminUser = INITIAL_USERS.find((u)=>u.role === 'admin');
            if (adminUser && email === adminUser.email && password === adminUser.password) {
                set((state)=>{
                    // Ensure admin exists in users list if missing
                    const exists = state.users.some((u)=>u.email === adminUser.email);
                    return {
                        currentUser: adminUser,
                        users: exists ? state.users : [
                            ...state.users,
                            adminUser
                        ]
                    };
                });
                return true;
            }
            // 2. Standard User Lookup
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
                const existing = state.cart.find((i)=>i.productId === item.productId && i.quality === item.quality);
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
            return state.cart.reduce((total, item)=>total + item.pricePerKg * item.quantityKg, 0);
        },
        calculateTotal: ()=>get().cartTotal(),
        inventory: INITIAL_INVENTORY_FINAL,
        updateInventory: (inventory)=>set({
                inventory
            }),
        orders: [],
        addOrder: (order)=>set((state)=>({
                    orders: [
                        order,
                        ...state.orders
                    ]
                })),
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
        getDeliveryFee: (wilaya)=>{
            const fees = get().settings.deliveryFees;
            return fees[wilaya] || calculateDeliveryFee(wilaya);
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
        })
}));
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
"[project]/components/StickyCart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StickyCart",
    ()=>StickyCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function StickyCart() {
    const { cart, language, calculateTotal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [animate, setAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Trigger animation when cart changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (cart.length > 0) {
            setAnimate(true);
            const timer = setTimeout(()=>setAnimate(false), 300);
            return ()=>clearTimeout(timer);
        }
    }, [
        cart.length
    ]);
    // Don't show on cart page, admin pages, or if empty
    if (cart.length === 0 || pathname === '/cart' || pathname.startsWith('/admin')) return null;
    const total = calculateTotal();
    const isRtl = language === 'ar';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed bottom-4 left-4 right-4 z-50 transition-transform duration-200 ${animate ? 'scale-105' : 'scale-100'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: "/cart",
            className: "bg-dattes-primary text-white p-4 rounded-xl shadow-xl flex items-center justify-between hover:bg-dattes-dark transition-colors border border-dattes-accent/20 backdrop-blur-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/20 p-2 rounded-lg relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/StickyCart.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-1 -right-1 bg-dattes-accent text-dattes-primary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center",
                                    children: cart.length
                                }, void 0, false, {
                                    fileName: "[project]/components/StickyCart.tsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StickyCart.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-white/80 uppercase font-bold tracking-wider",
                                    children: isRtl ? 'الإجمالي' : 'Total'
                                }, void 0, false, {
                                    fileName: "[project]/components/StickyCart.tsx",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-lg font-mono",
                                    children: [
                                        total.toLocaleString(),
                                        " DA"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/StickyCart.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StickyCart.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/StickyCart.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 font-bold bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: isRtl ? 'عرض السلة' : 'Voir le Panier'
                        }, void 0, false, {
                            fileName: "[project]/components/StickyCart.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this),
                        isRtl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/StickyCart.tsx",
                            lineNumber: 54,
                            columnNumber: 30
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/StickyCart.tsx",
                            lineNumber: 54,
                            columnNumber: 66
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/StickyCart.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/StickyCart.tsx",
            lineNumber: 31,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/StickyCart.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6b07507f._.js.map
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InventoryItem, useStore } from '@/lib/store';
import { ShoppingBag, Info, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCardProps {
    product: InventoryItem;
    t: any;
}

export function ProductCard({ product, t }: ProductCardProps) {
    const { addToCart, language } = useStore();
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const isRtl = language === 'ar';
    const isEn = language === 'en';

    const displayType = (isRtl && product.typeAr) ? product.typeAr : (isEn && product.typeEn) ? product.typeEn : product.type;
    const displayQuality = (isRtl && product.qualityAr) ? product.qualityAr : (isEn && product.qualityEn) ? product.qualityEn : product.quality;
    const displayOrigin = (isRtl && product.originAr) ? product.originAr : (isEn && product.originEn) ? product.originEn : (product.origin || 'Algérie');
    const displayDesc = (isRtl && product.descriptionAr) ? product.descriptionAr : (isEn && product.descriptionEn) ? product.descriptionEn : product.description;

    const currentImage = product.images && product.images.length > 0 ? product.images[currentImageIndex] : '/products/deglet-nour.png';

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (product.images && product.images.length > 1) {
            setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (product.images && product.images.length > 1) {
            setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
        }
    };

    const handleAddToCart = () => {
        addToCart({
            id: crypto.randomUUID(),
            productId: product.id,
            name: displayType,
            quality: displayQuality,
            type: displayType,
            quantityKg: quantity,
            pricePerKg: product.pricePerKg,
            image: currentImage
        });
        router.push('/cart');
    };

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => Math.max(1, q - 1));

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-dattes-primary/5 group flex flex-col h-full">
            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden group/image">
                <Link href={`/product/${product.id}`} className="block w-full h-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={currentImage}
                        alt={displayType}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </Link>

                <div className={`absolute top-2 ${isRtl ? 'left-2' : 'right-2'} bg-blue-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm text-white pointer-events-none`}>
                    {displayQuality}
                </div>

                {product.images && product.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dattes-primary rounded-full p-2 md:p-1 shadow-md opacity-100 md:opacity-0 md:group-hover/image:opacity-100 transition-opacity z-10"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dattes-primary rounded-full p-2 md:p-1 shadow-md opacity-100 md:opacity-0 md:group-hover/image:opacity-100 transition-opacity z-10"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {product.images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full shadow-sm ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <Link href={`/product/${product.id}`} className="hover:underline">
                            <h3 className="font-bold text-lg text-dattes-primary">{displayType}</h3>
                        </Link>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Info className="w-3 h-3" /> {t.origin}: {displayOrigin}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-xl text-dattes-accent">{product.pricePerKg}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">{t.perKg}</p>
                    </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5em]">
                    {displayDesc}
                </p>

                <div className="mt-auto space-y-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between bg-gray-50 rounded-xl p-1 border border-gray-100">
                        <button
                            onClick={decrement}
                            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-dattes-primary hover:bg-dattes-primary hover:text-white transition-colors"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-bold text-dattes-primary w-12 text-center">{quantity} kg</span>
                        <button
                            onClick={increment}
                            className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-dattes-primary hover:bg-dattes-primary hover:text-white transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 bg-dattes-primary text-white hover:bg-dattes-accent active:scale-95 shadow-md hover:shadow-lg"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        {t.addToCart}
                    </button>
                </div>
            </div>
        </div>
    );
}

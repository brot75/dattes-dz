import { use } from 'react';
import ProductContent from './ProductContent';

export async function generateStaticParams() {
    // We provide the default hydration IDs for static export
    return [
        { id: '1' },
        { id: '2' }
    ];
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    return <ProductContent id={id} />;
}

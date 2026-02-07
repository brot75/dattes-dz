import { use } from 'react';
import ProductContent from './ProductContent';

// Force dynamic rendering for this route segment
export const dynamic = 'force-dynamic';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    return <ProductContent id={id} />;
}

import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, doc, setDoc, orderBy, query } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const q = query(collection(db, 'orders'), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        const orders = querySnapshot.docs.map(doc => doc.data());
        return NextResponse.json(orders);
    } catch (error) {
        console.error('Firestore get orders error:', error);
        return NextResponse.json([]);
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Scenario 1: New Single Order (Client Checkout) or Status Update (Admin)
        if (typeof body === 'object' && body.id && !Array.isArray(body)) {
            await setDoc(doc(db, 'orders', body.id), body, { merge: true });
            return NextResponse.json({ success: true, message: 'Order saved', data: body });
        }

        // Scenario 2: Full Sync (Legacy/Dev) - Handle bulk array
        else if (Array.isArray(body)) {
            const batchPromises = body.map(order =>
                setDoc(doc(db, 'orders', order.id), order, { merge: true })
            );
            await Promise.all(batchPromises);
            return NextResponse.json({ success: true, message: 'Orders synced', data: body });
        }

        return NextResponse.json({ success: false, message: 'Invalid format' }, { status: 400 });
    } catch (error) {
        console.error('Firestore save order error:', error);
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
}

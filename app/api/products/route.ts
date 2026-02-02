import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

const INVENTORY_DOC = 'main';

export async function GET() {
    try {
        const docRef = doc(db, 'inventory', INVENTORY_DOC);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return NextResponse.json(docSnap.data().items || []);
        }
        return NextResponse.json([]);
    } catch (error) {
        console.error('Firestore get error:', error);
        return NextResponse.json([]);
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (Array.isArray(body)) {
            const docRef = doc(db, 'inventory', INVENTORY_DOC);
            // Save the array inside an object key 'items'
            await setDoc(docRef, { items: body });
            return NextResponse.json({ success: true, message: 'Inventory updated', data: body });
        }
        return NextResponse.json({ success: false, message: 'Invalid format' }, { status: 400 });
    } catch (error) {
        console.error('Firestore save error:', error);
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
}

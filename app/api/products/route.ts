import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const INVENTORY_DOC = 'main';
const DATA_FILE = path.join(process.cwd(), 'data', 'products.json');

// Helper to read local backup (Migration source)
const readLocalData = () => {
    try {
        if (!fs.existsSync(DATA_FILE)) return [];
        const fileData = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(fileData);
    } catch (error) {
        return [];
    }
};

export async function GET() {
    try {
        const docRef = doc(db, 'inventory', INVENTORY_DOC);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().items?.length > 0) {
            return NextResponse.json(docSnap.data().items);
        }

        // --- AUTO-MIGRATION ---
        // If Firestore is empty, seed it with local data
        console.log('Firestore inventory empty. Migrating from local JSON...');
        const localProducts = readLocalData();

        if (localProducts.length > 0) {
            await setDoc(docRef, { items: localProducts });
        }

        return NextResponse.json(localProducts);

    } catch (error) {
        console.error('Firestore get error:', error);
        // Fallback to local if Cloud fails completely
        return NextResponse.json(readLocalData());
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (Array.isArray(body)) {
            const docRef = doc(db, 'inventory', INVENTORY_DOC);
            await setDoc(docRef, { items: body });
            return NextResponse.json({ success: true, message: 'Inventory updated', data: body });
        }
        return NextResponse.json({ success: false, message: 'Invalid format' }, { status: 400 });
    } catch (error) {
        console.error('Firestore save error:', error);
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
}

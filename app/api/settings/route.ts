import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// Force dynamic to ensure we always read the file
export const dynamic = 'force-dynamic';

const DEFAULT_SETTINGS = {
    heroImage: '/hero-dates-v2.png',
    deliveryFees: {}
};

export async function GET() {
    try {
        const docRef = doc(db, 'settings', 'global');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return NextResponse.json(docSnap.data());
        } else {
            // Document doesn't exist, return defaults (and maybe initialize it)
            return NextResponse.json(DEFAULT_SETTINGS);
        }
    } catch (error) {
        console.error('Error reading settings from Firestore:', error);
        // Fallback to default if Firestore fails (e.g. not enabled)
        return NextResponse.json(DEFAULT_SETTINGS);
    }
}

export async function POST(request: Request) {
    try {
        const newSettings = await request.json();
        const docRef = doc(db, 'settings', 'global');

        // Save to Firestore (Merge with existing)
        await setDoc(docRef, newSettings, { merge: true });

        // Fetch back to confirm full state or just return merged
        return NextResponse.json({ success: true, settings: newSettings });

    } catch (error) {
        console.error('Error saving settings to Firestore:', error);
        return NextResponse.json({
            error: 'Failed to save settings',
            details: (error as any).message
        }, { status: 500 });
    }
}

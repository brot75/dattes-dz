import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, doc, setDoc, query } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const q = query(collection(db, 'users'));
        const querySnapshot = await getDocs(q);
        const users = querySnapshot.docs.map(doc => doc.data());
        return NextResponse.json(users);
    } catch (error) {
        console.error('Firestore get users error:', error);
        return NextResponse.json([]);
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Scenario 1: Update/Create Single User
        if (typeof body === 'object' && body.id && !Array.isArray(body)) {
            await setDoc(doc(db, 'users', body.id), body, { merge: true });
            return NextResponse.json({ success: true, message: 'User saved', data: body });
        }

        // Scenario 2: Sync Multiple Users (e.g. initial seed)
        else if (Array.isArray(body)) {
            const batchPromises = body.map(user =>
                setDoc(doc(db, 'users', user.id), user, { merge: true })
            );
            await Promise.all(batchPromises);
            return NextResponse.json({ success: true, message: 'Users synced', data: body });
        }

        return NextResponse.json({ success: false, message: 'Invalid format' }, { status: 400 });
    } catch (error) {
        console.error('Firestore save user error:', error);
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
}

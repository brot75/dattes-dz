import { NextResponse } from 'next/server';
import { storage } from '@/lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        // Validate Image Type (Wildcard image/*)
        if (!file.type.startsWith('image/')) {
            return NextResponse.json({ error: 'File must be an image' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = new Uint8Array(bytes);

        // Create unique filename for Firebase
        const filename = `${Date.now()}-${file.name.replace(/\s/g, '-')}`;
        const storageRef = ref(storage, `uploads/${filename}`);

        // Upload to Firebase Storage
        const snapshot = await uploadBytes(storageRef, buffer, {
            contentType: file.type
        });

        // Get Public URL
        const downloadURL = await getDownloadURL(snapshot.ref);

        return NextResponse.json({ url: downloadURL });

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}

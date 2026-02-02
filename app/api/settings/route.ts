import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Force dynamic to ensure we always read the file
export const dynamic = 'force-dynamic';

const dataFilePath = path.join(process.cwd(), 'data/settings.json');

// Helper to ensure data directory exists (Safe for Read-Only envs)
const ensureDataDir = () => {
    try {
        const dir = path.dirname(dataFilePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        if (!fs.existsSync(dataFilePath)) {
            fs.writeFileSync(dataFilePath, JSON.stringify({
                heroImage: '/hero-dates-v2.png',
                deliveryFees: {}
            }, null, 2));
        }
    } catch (e) {
        console.warn('Filesystem is read-only. Skiping ensureDataDir.', e);
    }
};

export async function GET() {
    try {
        ensureDataDir();
        const fileData = fs.readFileSync(dataFilePath, 'utf8');
        const settings = JSON.parse(fileData);
        return NextResponse.json(settings);
    } catch (error) {
        console.error('Error reading settings:', error);
        return NextResponse.json({ error: 'Failed to load settings' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const newSettings = await request.json();

        // Try to read existing
        let existing = {};
        try {
            if (fs.existsSync(dataFilePath)) {
                existing = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
            }
        } catch (e) { console.warn('Read failed', e); }

        const merged = { ...existing, ...newSettings }; // Shallow merge

        // Try to save (might fail on Vercel)
        try {
            ensureDataDir();
            fs.writeFileSync(dataFilePath, JSON.stringify(merged, null, 2));
        } catch (e) {
            console.warn('Save failed (ReadOnly FS). Changes will not persist.', e);
            // Return success anyway so UI doesn't break. 
            // The user will see their change in the current session (via Store state), 
            // but it will revert on reload for OTHERS.
            return NextResponse.json({ success: true, settings: merged, warning: 'Persistence requires DB' });
        }

        return NextResponse.json({ success: true, settings: merged });
    } catch (error) {
        console.error('Error saving settings:', error);
        return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
    }
}

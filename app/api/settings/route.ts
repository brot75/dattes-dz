import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Force dynamic to ensure we always read the file
export const dynamic = 'force-dynamic';

const dataFilePath = path.join(process.cwd(), 'data/settings.json');

// Helper to ensure data directory exists
const ensureDataDir = () => {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(dataFilePath)) {
        // Create default if missing
        fs.writeFileSync(dataFilePath, JSON.stringify({
            heroImage: '/hero-dates-v2.png',
            deliveryFees: {}
        }, null, 2));
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
        ensureDataDir();

        // Read existing to merge (don't overwrite deep keys if not needed, but here simple replace/merge is fine)
        let existing = {};
        try {
            existing = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
        } catch (e) {
            // ignore
        }

        const merged = { ...existing, ...newSettings }; // Shallow merge

        fs.writeFileSync(dataFilePath, JSON.stringify(merged, null, 2));

        return NextResponse.json({ success: true, settings: merged });
    } catch (error) {
        console.error('Error saving settings:', error);
        return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
    }
}

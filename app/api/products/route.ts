
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const DATA_FILE = path.join(process.cwd(), 'data', 'products.json');

// Helper to read data
const readData = () => {
    try {
        if (!fs.existsSync(DATA_FILE)) return [];
        const fileData = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(fileData);
    } catch (error) {
        return [];
    }
};

// Helper to write data
const writeData = (data: any) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 4));
        return true;
    } catch (error) {
        return false;
    }
};

export async function GET() {
    const products = readData();
    return NextResponse.json(products);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Body should be the FULL new inventory array to completely replace it
        // Or we could handle partial updates, but for simplicity of syncing with store, we replace.
        if (Array.isArray(body)) {
            writeData(body);
            return NextResponse.json({ success: true, message: 'Inventory updated', data: body });
        }
        return NextResponse.json({ success: false, message: 'Invalid format' }, { status: 400 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
}

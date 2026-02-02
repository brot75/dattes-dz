
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const DATA_FILE = path.join(process.cwd(), 'data', 'orders.json');

const readData = () => {
    try {
        if (!fs.existsSync(DATA_FILE)) return [];
        const fileData = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(fileData);
    } catch (error) {
        return [];
    }
};

const writeData = (data: any) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 4));
        return true;
    } catch (error) {
        return false;
    }
};

export async function GET() {
    const orders = readData();
    return NextResponse.json(orders);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // If array, replace all (sync full state)
        if (Array.isArray(body)) {
            writeData(body);
            return NextResponse.json({ success: true, message: 'Orders synced', data: body });
        }
        // If object, append (new order)
        else if (typeof body === 'object' && body.id) {
            const current = readData();
            const updated = [body, ...current];
            writeData(updated);
            return NextResponse.json({ success: true, message: 'Order added', data: updated });
        }
        return NextResponse.json({ success: false, message: 'Invalid format' }, { status: 400 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
}

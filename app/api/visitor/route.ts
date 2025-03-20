import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Visitor } from '@/lib/models/Visitor';

export const dynamic = "force-dynamic"; // ✅ Keep this to make it a dynamic API route

// Handle GET request (Fetch visitor count)
export async function GET() {
    await connectDB();

    try {
        const visitorData = await Visitor.findOne({ name: 'siteVisitors' });
        return NextResponse.json({ count: visitorData?.count || 0 });
    } catch (error) {
        console.error("❌ Error fetching visitor count:", error);
        return NextResponse.json({ error: 'Failed to fetch visitor count' }, { status: 500 });
    }
}

// Handle POST request (Increment visitor count)
export async function POST() {
    await connectDB();

    try {
        const result = await Visitor.findOneAndUpdate(
            { name: 'siteVisitors' },
            { $inc: { count: 1 } },
            { upsert: true, new: true }
        );

        return NextResponse.json({ count: result.count });
    } catch (error) {
        console.error("❌ Error updating visitor count:", error);
        return NextResponse.json({ error: 'Failed to update visitor count' }, { status: 500 });
    }
}

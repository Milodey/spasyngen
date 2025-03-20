import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Visitor } from '@/lib/models/Visitor';

// ✅ Dynamic API Route
export const dynamic = "force-dynamic";

// ⏳ Get today's date as YYYY-MM-DD (for tracking unique visits)
const getTodayDate = () => new Date().toISOString().split('T')[0];

// 🟢 GET: Fetch total unique visitor count
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

// 🟠 POST: Track a unique visitor
export async function POST(req: Request) {
    await connectDB();

    try {
        const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown_ip"; // Get client IP
        const today = getTodayDate();

        // 🔍 Check if IP already visited today
        const existingVisitor = await Visitor.findOne({ name: 'siteVisitors', "uniqueVisitors.ip": ip, "uniqueVisitors.date": today });

        if (!existingVisitor) {
            // ✅ First visit today -> Increment counter
            const result = await Visitor.findOneAndUpdate(
                { name: 'siteVisitors' },
                {
                    $inc: { count: 1 },
                    $push: { uniqueVisitors: { ip, date: today } }
                },
                { upsert: true, new: true }
            );

            return NextResponse.json({ count: result.count, message: "New unique visitor recorded" });
        } else {
            // ❌ Already visited -> Don't increment
            return NextResponse.json({ count: existingVisitor.count, message: "Already counted today" });
        }

    } catch (error) {
        console.error("❌ Error updating visitor count:", error);
        return NextResponse.json({ error: 'Failed to update visitor count' }, { status: 500 });
    }
}

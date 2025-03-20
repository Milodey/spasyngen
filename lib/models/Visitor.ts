import mongoose from 'mongoose';

const VisitorSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    count: { type: Number, default: 0 },
    uniqueVisitors: [
        {
            ip: String,
            date: String, // Store visit date as "YYYY-MM-DD"
        }
    ]
});

export const Visitor = mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema);

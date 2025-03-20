import { Schema, model, models } from 'mongoose';

// Define Visitor Schema
const VisitorSchema = new Schema({
    name: { type: String, required: true, unique: true, default: 'siteVisitors' },
    count: { type: Number, default: 0 }
});

// Export the Mongoose model (re-use if already defined)
export const Visitor = models.Visitor || model('Visitor', VisitorSchema);

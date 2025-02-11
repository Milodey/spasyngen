// components/NewsletterForm.tsx
'use client';

import { useState } from 'react';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            if (res.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col space-y-4">
            <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Subscribe
            </button>
            {status === 'loading' && <p className="text-center text-gray-600">Subscribing...</p>}
            {status === 'success' && <p className="text-center text-green-600">Subscribed successfully!</p>}
            {status === 'error' && <p className="text-center text-red-600">Subscription failed. Try again.</p>}
        </form>
    );
}

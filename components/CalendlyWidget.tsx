// components/CalendlyWidget.tsx
'use client';

import { useEffect } from 'react';

export default function CalendlyWidget() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="calendly-inline-widget mx-auto"
            data-url="https://calendly.com/your-calendly-link"
            style={{ minWidth: '320px', height: '630px' }}
        ></div>
    );
}

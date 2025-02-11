// components/LiveChat.tsx
'use client';

import { useEffect } from 'react';

export default function LiveChat() {
    useEffect(() => {
        // Tawk.to Live Chat integration script
        (function () {
            const s1 = document.createElement('script'),
                s0 = document.getElementsByTagName('script')[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/your_tawk_to_property_id/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode?.insertBefore(s1, s0);
        })();
    }, []);

    return null;
}

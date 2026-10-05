// Configuration Tailwind du portfolio, chargee apres le CDN.
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#ec4899',
                secondary: '#3b82f6',
                darkbg: '#07070a',
                carddark: '#101017',
                cardlight: '#ffffff',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace']
            },
            boxShadow: {
                'glow-magenta': '0 0 40px -5px rgba(236, 72, 153, 0.45)',
                'glow-blue': '0 0 40px -5px rgba(59, 130, 246, 0.45)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }
        }
    }
};

// Configuration Tailwind du portfolio, chargee apres le CDN.
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#d946ef',
                secondary: '#168bff',
                darkbg: '#030817',
                carddark: '#0a1124',
                cardlight: '#ffffff',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace']
            },
            boxShadow: {
                'glow-magenta': '0 0 40px -5px rgba(217, 70, 239, 0.45)',
                'glow-blue': '0 0 40px -5px rgba(22, 139, 255, 0.45)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }
        }
    }
};

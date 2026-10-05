// Gere le theme sombre/clair et memorise le choix du visiteur.
document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const themeButtons = [
        document.getElementById('themeToggle'),
        document.getElementById('themeToggleMobile')
    ].filter(Boolean);

    function applyTheme(theme) {
        htmlElement.classList.toggle('dark', theme === 'dark');
        htmlElement.classList.toggle('light', theme === 'light');
    }

    applyTheme(localStorage.getItem('theme') || 'dark');

    themeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const nextTheme = htmlElement.classList.contains('dark') ? 'light' : 'dark';
            applyTheme(nextTheme);
            localStorage.setItem('theme', nextTheme);
        });
    });
});

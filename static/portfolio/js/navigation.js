// Gere l'ouverture du menu mobile et sa fermeture apres navigation.
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    document.querySelectorAll('[data-language]').forEach((button) => {
        button.addEventListener('click', () => {
            const selectedLanguage = button.dataset.language;

            document.querySelectorAll('[data-language]').forEach((languageButton) => {
                const isSelected = languageButton.dataset.language === selectedLanguage;
                languageButton.setAttribute('aria-pressed', String(isSelected));
                languageButton.classList.toggle('bg-white/10', isSelected);
                languageButton.classList.toggle('text-white', isSelected);
                languageButton.classList.toggle('text-slate-400', !isSelected);
            });
        });
    });

    if (!menuButton || !mobileMenu) return;

    function setMenuOpen(isOpen) {
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
        mobileMenu.setAttribute('aria-hidden', String(!isOpen));
        mobileMenu.inert = !isOpen;
        mobileMenu.classList.toggle('is-open', isOpen);
    }

    menuButton.addEventListener('click', () => {
        setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    document.querySelectorAll('.mobile-link').forEach((link) => {
        link.addEventListener('click', () => {
            setMenuOpen(false);
        });
    });
});

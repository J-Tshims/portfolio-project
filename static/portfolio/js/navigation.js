// Gere l'ouverture du menu mobile et sa fermeture apres navigation.
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuButton || !mobileMenu) return;

    function setMenuOpen(isOpen) {
        const isEnglish = document.documentElement.lang === 'en';
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen
            ? (isEnglish ? 'Close menu' : 'Fermer le menu')
            : (isEnglish ? 'Open menu' : 'Ouvrir le menu'));
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

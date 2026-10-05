// Gere l'ouverture du menu mobile et sa fermeture apres navigation.
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuButton || !mobileMenu) return;

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-link').forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});

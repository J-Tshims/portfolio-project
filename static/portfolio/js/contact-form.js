// Affiche le toast de confirmation pour le formulaire de contact.
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    if (!contactForm || !toast) return;

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        toast.classList.remove('translate-y-32', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');
        contactForm.reset();

        setTimeout(() => {
            toast.classList.remove('translate-y-0', 'opacity-100');
            toast.classList.add('translate-y-32', 'opacity-0');
        }, 4000);
    });
});

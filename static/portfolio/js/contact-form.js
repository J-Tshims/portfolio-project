// Envoie le formulaire à Django et affiche le résultat sans recharger la page.
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const contactStatus = document.getElementById('contactStatus');

    if (!contactForm || !contactStatus) return;

    const messages = {
        fr: {
            success: 'Merci, ton message a bien été envoyé.',
            invalid: 'Vérifie les champs du formulaire puis réessaie.',
            failed: 'Le message n’a pas pu être envoyé. Réessaie plus tard.'
        },
        en: {
            success: 'Thanks, your message was sent.',
            invalid: 'Check the form fields and try again.',
            failed: 'Your message could not be sent. Please try again later.'
        }
    };

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const language = document.documentElement.lang === 'en' ? 'en' : 'fr';
        contactStatus.classList.add('hidden');
        submitButton.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                credentials: 'same-origin'
            });
            const result = await response.json();

            if (!response.ok || !result.ok) {
                contactStatus.textContent = result.error === 'invalid_form'
                    ? messages[language].invalid
                    : messages[language].failed;
            } else {
                contactForm.reset();
                contactStatus.textContent = messages[language].success;
            }
        } catch (error) {
            contactStatus.textContent = messages[language].failed;
        } finally {
            contactStatus.classList.remove('hidden');
            submitButton.disabled = false;
        }
    });
});

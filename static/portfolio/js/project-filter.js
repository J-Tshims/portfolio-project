// Filtre les cartes de projets selon la categorie selectionnee.
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            filterButtons.forEach((filterButton) => {
                filterButton.classList.remove(
                    'bg-gradient-to-r', 'from-primary', 'to-secondary', 'text-white',
                    'shadow-lg', 'shadow-pink-500/20'
                );
                filterButton.classList.add('glass-panel', 'text-slate-700', 'dark:text-slate-300');
            });

            button.classList.add(
                'bg-gradient-to-r', 'from-primary', 'to-secondary', 'text-white',
                'shadow-lg', 'shadow-pink-500/20'
            );
            button.classList.remove('glass-panel', 'text-slate-700', 'dark:text-slate-300');

            const selectedCategory = button.getAttribute('data-filter');
            projectCards.forEach((card) => {
                const matches = selectedCategory === 'all'
                    || card.getAttribute('data-category') === selectedCategory;
                card.style.display = matches ? 'flex' : 'none';
            });
        });
    });
});

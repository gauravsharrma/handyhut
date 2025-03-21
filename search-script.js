document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const toolCards = document.querySelectorAll('.tool-card');

    toolCards.forEach(card => {
        const title = card.querySelector('.tool-title').textContent.toLowerCase();
        const description = card.querySelector('.tool-description').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
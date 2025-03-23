document.addEventListener('DOMContentLoaded', function() {
    const toolSearchInput = document.getElementById('toolSearch');
    const toolCards = document.querySelectorAll('.tool-card');

    toolSearchInput.addEventListener('input', function() {
        const searchTerm = toolSearchInput.value.toLowerCase();

        toolCards.forEach(card => {
            const toolName = card.dataset.toolName.toLowerCase();
            if (toolName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
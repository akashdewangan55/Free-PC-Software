function filterSoftware() {
    // Get input element and filter value
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();

    // Get the grid and all software cards
    const grid = document.getElementById('software-grid');
    const cards = grid.getElementsByClassName('software-card');

    // Loop through all cards, and hide those who don't match the search query
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        // Check in heading, paragraph, and data-tags
        const title = card.querySelector('h3');
        const paragraph = card.querySelector('p');
        const tags = card.getAttribute('data-tags');
        
        if (title || paragraph) {
            const textContent = (title.textContent || title.innerText) + 
                                (paragraph.textContent || paragraph.innerText) +
                                (tags || '');
                                
            if (textContent.toUpperCase().indexOf(filter) > -1) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        }
    }
}
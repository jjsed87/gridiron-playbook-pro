export default function Index() {
    const container = document.createElement('div');
    container.className = 'container';

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Cox Mill Offensive Line Playbook';
    container.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-3';

    const cards = [
        { title: 'Run Plays', description: 'Explore power, zone, and option run plays.' },
        { title: 'Pass Plays', description: 'Discover passing concepts and protection schemes.' },
        { title: 'Special Teams', description: 'Learn about kickoffs, punts, and field goals.' },
    ];

    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        const cardTitle = document.createElement('h2');
        cardTitle.textContent = card.title;
        cardDiv.appendChild(cardTitle);

        const cardDescription = document.createElement('p');
        cardDescription.textContent = card.description;
        cardDiv.appendChild(cardDescription);

        grid.appendChild(cardDiv);
    });

    container.appendChild(grid);
    return container;
}
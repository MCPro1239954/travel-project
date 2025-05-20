const destinations = [
  {
    day: "Day 1",
    title: "Lagos",
    description: "test.",
    apConnection: "test",
    image: "images/lagos.jpg",
    map: "images/lagos-map.png"
  }
  // Add more destinations here...
];

function createDestinationCard(dest) {
  const container = document.createElement('div');
  container.className = 'destination-flex';

  container.innerHTML = `
    <img src="${dest.image}" alt="${dest.title}" />
    <div>
      <h3>${dest.day}: ${dest.title}</h3>
      <p>${dest.description}</p>
      <p><strong>APHG Connection:</strong> ${dest.apConnection}</p>
      <img src="${dest.map}" alt="Map of ${dest.title}" style="width: 100%; max-width: 300px; margin-top: 0.5rem;" />
    </div>
  `;

  return container;
}

const contentDiv = document.querySelector('.content');
destinations.forEach(dest => {
  const card = createDestinationCard(dest);
  contentDiv.appendChild(card);
});

const destinations = [
  {
    day: "Day 1-3",
    title: "Lagos",
    description: "Explore Nigeria’s megacity and economic capital. From high-rise hotels in Victoria Island to the floating slum of Makoko, you'll witness rapid urbanization, massive inequality, and vibrant street life.",
    apConnection: "Unit 6 – Cities and Urban Land-use: Lagos shows urban sprawl, primate city theory, and informal economies in action.",
    image: "images/lagos.png",
    map: "images/lagos_map.png"
  },
  {
    day: "Day 4-5",
    title: "Kaduna",
    description: "Head north to experience the agricultural heart of Nigeria. Meet Fulani pastoralists and tour Zaria farms to learn about rural land use and nomadic herding practices.",
    apConnection: "Unit 5 – Agriculture and Rural Land Use: Explore subsistence farming, pastoral nomadism, and shifting land conflicts.",
    image: "images/kaduna.png",
    map: "images/kaduna_map.png"
  },
  {
    day: "Day 6-7",
    title: "Kano",
    description: "Step into one of West Africa’s oldest cities and explore its Islamic heritage. From dye pits to ancient mosques, you'll see cultural traditions thrive.",
    apConnection: "Unit 3 – Cultural Patterns and Processes: Kano showcases folk culture, religious identity, and linguistic geography.",
    image: "images/kano.png",
    map: "images/kano_map.png"
  },
  {
    day: "Day 8-9",
    title: "Port Harcourt",
    description: "Travel to Nigeria’s oil-rich Niger Delta and witness the country’s industrial engine — and its environmental and economic consequences.",
    apConnection: "Unit 7 – Industrial and Economic Patterns: Port Harcourt highlights uneven development, core-periphery dynamics, and the resource curse.",
    image: "images/pharcourt.png",
    map: "images/pharcourt_map.png"
  },
  {
    day: "Day 10-11",
    title: "Abuja",
    description: "End your journey in Nigeria’s capital city — a centrally located, purpose-built city symbolizing national unity and political control.",
    apConnection: "Unit 4 – Political Patterns and Processes: Abuja is a forward capital and a centripetal force in Nigeria’s diverse political landscape.",
    image: "images/abuja.png",
    map: "images/abuja_map.png"
  }
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

document.addEventListener("keydown", function(event) {
  if (event.key.toLowerCase() === "z" || event.key.toLowerCase() === "b") {
    window.alert("You pressed the secret key!");
  }
});

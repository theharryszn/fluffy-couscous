const countries = [
    {
        name: "Belgium",
        capital: "Brussel",
        population: "11.56M",
        photo: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVsZ2l1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
    },
    {
        name: "China",
        capital: "Beijing",
        population: "1.402B",
        photo: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
    },
    {
        name: "France",
        capital: "Paris",
        population: "67.39M",
        photo: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyYW5jZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500"
    },
    {
        name: "Ukraine",
        capital: "Kyiv",
        population: "44.13M",
        photo: "https://images.unsplash.com/photo-1560418750-173783cf0dc1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVrcmFpbmV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500"
    },
    {
        name: "Italy",
        capital: "Rome",
        population: "59.55M",
        photo: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXRhbHl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500"
    },
    {
        name: "Nigeria",
        capital: "Abuja",
        population: "206M",
        photo: "https://images.unsplash.com/photo-1572816225927-d08fb138f2b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnZXJpYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500"
    },
    {
        name: "Cote d' Ivorie",
        capital: "Yammoussoukro",
        population: "26.8M",
        photo: "https://images.unsplash.com/photo-1538586001504-b79341b88ebe?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y290ZSUyMGQlMjBpdm9yaWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500"
    },
    {
        name: "Libya",
        capital: "Tripoli",
        population: "6.8M",
        photo: "https://images.unsplash.com/photo-1588889802078-67ce0634a6a3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlieWF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500"
    },
    {
        name: "South Africa",
        capital: "Cape Town",
        population: "50M",
        photo: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c291dGglMjBhZnJpY2F8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500"
    },
    {
        name: "Rwanda",
        capital: "Kigali",
        population: "12.95M",
        photo: "https://images.unsplash.com/flagged/photo-1579210504658-94fcc9cfa42f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cndhbmRhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500"
    }
]

// Selecting the container
const container = document.querySelector(".container");

// Looping through countries array
for (let country of countries) { 
    // creating country el
    const countryEl = document.createElement("div");
    countryEl.classList.add("country")

    // creating img el
    const img = document.createElement("img");
    img.src = country.photo;
    img.alt = country.name;

    // creating details el
    const details = document.createElement("div");
    details.classList.add("details")

    // Creating name
    const name = document.createElement("div");
    name.classList.add("name")
    name.innerHTML = country.name;

    // Creating the capital
    const capital = document.createElement("div");
    capital.classList.add("capital")
    capital.innerHTML = "Capital: " + country.capital;

    // Creating population
    const population = document.createElement("div");
    population.innerHTML = "Population: " + country.population;
    population.classList.add("population")


    countryEl.appendChild(img);
    details.appendChild(name);
    details.appendChild(capital);
    details.appendChild(population);

    countryEl.appendChild(details);

    container.appendChild(countryEl)
}
const formEl = document.querySelector(".search-container");
const loadingEl = document.querySelector("#loading");
const imagesContainer = document.querySelector(".images")

formEl.addEventListener("submit", submitHandler)

const CLIENT_ID = "q9r30XlNvXKKWh5kQWqIxyQROonLoqQTJwCiOGEj-vo"

function submitHandler(e) {
    e.preventDefault()
    loadingEl.style.display = "block"
    window.scrollTo({
        top: window.innerHeight * 0.6,
        behavior: "smooth",
        left: 0
    })
    
    search(document.getElementById("searchText").value)
    console.log(document.getElementById("searchText").value);
}

function search(text) {
    fetch(`https://api.unsplash.com/photos?client_id=${CLIENT_ID}&query=${text}&page=1`).then(async res => {
        const data = await res.json();
        loadingEl.style.display = "none"
        render(data)
    }).catch(err => {
        console.log("err", err);
    })
}

function render(data) {
    imagesContainer.innerHTML = ""
    const row1 = data.slice(0, 3)
    const row2 = data.slice(3, 6)
    const row3 = data.slice(7, 10)

    loopRow(row1)
    loopRow(row2)
    loopRow(row3)

}

function loopRow(data) {
    const row = document.createElement("div")
    row.classList.add("row")

    for (let photo of data) {
        const image = document.createElement("img")
        image.src = photo.urls.regular
        image.alt = photo.description
        image.title = photo.description
        row.appendChild(image)
    }

    imagesContainer.appendChild(row)
}

fetch(`https://api.unsplash.com/photos?client_id=${CLIENT_ID}`).then(async res => {
    const data = await res.json();
    loadingEl.style.display = "none"
    render(data)
}).catch(err => {
    console.log("err", err);
})
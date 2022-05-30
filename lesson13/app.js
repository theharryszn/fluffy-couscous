const container = document.querySelector(".container");
const loader = document.querySelector(".loader");

console.log("scrollHeight: ", container.scrollHeight);

container.addEventListener("scroll", (evt) => {
    loader.style.width = `${((container.scrollTop / (container.scrollHeight- window.innerHeight)) * 100)}%`
    console.log("scrollTop: ", container.scrollTop);
})
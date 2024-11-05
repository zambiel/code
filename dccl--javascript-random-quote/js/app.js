const contentHTML = document.querySelector("#content");
const authorHTML = document.querySelector("#author");

const groupRandom = document.querySelector("#group");
const copy = document.querySelector("#link");
const alertHTML = document.querySelector(".alert");
const quitHTML = document.querySelector(".quit"); 

const alertas = document.querySelector(".alertas");

fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        contentHTML.innerHTML = `"${data.content}"`;
        authorHTML.innerHTML = data.author;

    })
    .catch(error => {
    console.log(error)
})

groupRandom.addEventListener("click", () => {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        contentHTML.innerHTML = `"${data.content}"`;
        authorHTML.innerHTML = data.author;

    })
    .catch(error => {
    console.log(error)
})
})



copy.addEventListener("click", () => {
    navigator.clipboard.writeText(contentHTML.textContent);
    
    quitHTML.textContent = "X";
    quitHTML.classList.add("quit-content");
    alertHTML.textContent = "Content Copied!";
    alertHTML.classList.add("alert-content");

    alertHTML.style.display = "block";
    quitHTML.style.display = "block";

    quitHTML.addEventListener("click", () => {
        alertHTML.style.display = "none";
        quitHTML.style.display = "none";
    })


    
})
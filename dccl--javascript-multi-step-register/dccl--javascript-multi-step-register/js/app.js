const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
const continueBtn = document.querySelector("#step");
const continueBtn2 = document.querySelector("#step2");
const checked = document.querySelector(".checked-point");
const unchecked = document.querySelector(".unchecked-point");

const nombreRes = document.querySelector("#nombre-res");
const emailRes = document.querySelector("#email-res");

const point1 = document.querySelector("#point1");
const point2 = document.querySelector("#point2");
const point3 = document.querySelector("#point3");

const pages = document.querySelector(".pages");

const h1 = document.querySelector(".h1");

const topic1 = document.querySelector("#topic1");
const topic2 = document.querySelector("#topic2");
const topic3 = document.querySelector("#topic3");

const formulario = document.querySelector("#form");
const topics = document.querySelector(".topics");
const summary = document.querySelector("#summary");

const list = document.querySelector("#list");

const element1 = document.querySelector("#element1");
const element2 = document.querySelector("#element2");
const element3 = document.querySelector("#element3");

const container = document.querySelector(".containerList");



document.addEventListener("DOMContentLoaded", () => {
    point1.classList.add("checked");
    point1.classList.remove("unchecked");
    pages.innerHTML = "Step 1 of 3";

    formPage();

})

let t1 = 0;
let t2 = 0;
let t3 = 0;


topic1.addEventListener("click", () => {
    topic1.classList.toggle("selected");

    t1 = 1;
})

topic2.addEventListener("click", () => {
    topic2.classList.toggle("selected");
    t2 = 1;
})

topic3.addEventListener("click", () => {
    topic3.classList.toggle("selected");
    t3 = 1;
})

point1.addEventListener("click", () => {
    point1.classList.add("checked");
    point1.classList.remove("unchecked");
    point2.classList.remove("checked");
    point2.classList.add("unchecked");
    pages.innerHTML = "Step 1 of 3";

    formPage();
})

continueBtn.addEventListener("click", (e) => {

    e.preventDefault();

    if(nombre.value === "" && email.value === "") {
        alert("Please, enter your name and email address.");
    } else if(email.value === "") {
        alert("Please, enter your email address.");
    } else {
        point2.classList.add("checked");
        point2.classList.remove("unchecked");
        point1.classList.remove("checked");
        point1.classList.add("unchecked");
        point3.classList.remove("checked");
        point3.classList.add("unchecked");
    
        pages.innerHTML = "Step 2 of 3";
        
        topicsPage();
    }
})
continueBtn2.addEventListener("click", (e) => {

    e.preventDefault();

    point3.classList.add("checked");
    point2.classList.remove("checked");
    point2.classList.add("unchecked");
    point3.classList.remove("unchecked");
    pages.innerHTML = "Step 3 of 3";

    summaryPage();
    
})

function formPage() {
    h1.innerHTML = "Register";
    formulario.style.display = "block";
    topics.style.display = "none";
    summary.style.display = "none";

}


function topicsPage() {
    h1.innerHTML = "Which topics you are interested in?";
    topics.style.display = "block";
    formulario.style.display = "none";
    summary.style.display = "none";
    continueBtn2.classList.remove("hidden");
    continueBtn.style.display = "none"; 
}

function summaryPage() {
    h1.innerHTML = "Summary";
    summary.style.display = "block";
    topics.style.display = "none";
    formulario.style.display = "none";

    continueBtn2.innerHTML = "Confirm";

    continueBtn2.addEventListener("click", () => {
        if(continueBtn2.innerHTML = "Confirm") {
            alert("All the data has been saved in our database!");
        }
    })

    nombreRes.innerHTML = nombre.textContent = nombre.value;
    emailRes.innerHTML = email.textContent = email.value;

    if(t1 === 1 && t2 === 1 && t3 === 1) {
        element1.innerHTML = topic1.textContent;
        element2.innerHTML = topic2.textContent;
        element3.innerHTML = topic3.textContent;
    } else if(t1 === 1 && t2 === 1) {
        element1.innerHTML = topic1.textContent;
        element2.innerHTML = topic2.textContent;
    } else if(t1 === 1 && t3 === 1) {
        element1.innerHTML = topic1.textContent;
        element3.innerHTML = topic3.textContent;
    } else if(t2 === 1 && t3 === 1) {
        element2.innerHTML = topic2.textContent;
        element3.innerHTML = topic3.textContent;
    } else if(t1 === 1) {
        element1.innerHTML = topic1.textContent;
    } else if(t2 === 1) {
        element2.innerHTML = topic2.textContent;
    } else if(t3 === 1) {
        element3.innerHTML = topic3.textContent;
    } else {
        console.log("other error");
    }

    if(t1 === 0 && t2 === 0 && t3 === 0) {
        list.style.display = "none";
        const title = document.createElement("h3");
        title.innerHTML = "No Topics";
        title.classList.add("title-class");
        title.style.color = "#fff";

        container.appendChild(title);

    } else if(t1 === 0 && t2 === 0) {
        element1.style.listStyleType = "none";
        element2.style.listStyleType = "none";
    } else if(t2 === 0 && t3 === 0) {
        element2.style.listStyleType = "none";
        element3.style.listStyleType = "none";
    } else if(t1 === 0 && t3 === 0) {
        element1.style.listStyleType = "none";
        element3.style.listStyleType = "none";
    } else if(t1 === 0) {
        element1.style.listStyleType = "none";
    } else if(t2 === 0) {
        element2.style.listStyleType = "none";
    } else if(t3 === 0) {
        element3.style.listStyleType = "none";
    } 

}
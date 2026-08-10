let words = document.querySelector('#word');
words.innerHTML = words.textContent.split(" ").map((word) => `<span class="text">${word}</span>`).join(" ")

let text = document.querySelectorAll(".text");

let i = 0;

setInterval(() => { 
    text.forEach((span) => span.classList.remove("active"));
    text[i].classList.add("active");
    i++;
    if (i === text.length) {
    i = 0;
    }
},500)

let items = document.querySelectorAll(".items p")

let g = 0
setInterval(()=> {
    items.forEach((item) => item.classList.remove("show"))
    items[g].classList.add("show")
    g++
    if(g === items.length) {
        g = 0;
    }
},2000)

const phone = document.querySelector(".phone")
const email = document.querySelector(".email")

setInterval(()=> {
    phone.classList.toggle("hide")
    email.classList.toggle("hide")
},5000)
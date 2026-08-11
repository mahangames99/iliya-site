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
const copy = document.querySelector("#copy")

setInterval(()=> {
    phone.classList.toggle("hide")
    email.classList.toggle("hide")
},5000)

email.addEventListener("click",(event) => {
    if(window.innerWidth > 700) {
        event.preventDefault();
        navigator.clipboard.writeText("andishepodcast@gmail.com")
        .then(() => {
            copy.classList.add("copy-show")
            setTimeout(() => {
                copy.classList.remove("copy-show")
            },2000)
        })
        .catch(() => {
            alert("کپی نشد")
        })
    }
})
phone.addEventListener("click",(event) => {
    if(window.innerWidth > 700) {
        event.preventDefault();
        navigator.clipboard.writeText("09020306043")
        .then(() => {
            copy.classList.add("copy-show")
            setTimeout(() => {
                copy.classList.remove("copy-show")
            },2000)
        })
        .catch(() => {
            alert("کپی نشد")
        })
    }
})
if(window.innerWidth > 700){
    email.addEventListener("mouseenter",()=> {
    email.innerHTML = '<i class="fa-solid fa-envelope-open"></i>'
    setTimeout(() => {
        email.innerHTML = '<i class="fa-solid fa-envelope"></i>'
        },2000)
    })
    email.addEventListener("mouseleave",()=>{
    email.innerHTML = '<i class="fa-solid fa-envelope"></i>'
})
}

if(window.innerWidth > 700){
    phone.addEventListener("mouseenter",()=> {
        phone.innerHTML = '<i class="fa-solid fa-phone-volume"></i>'
        setTimeout(() => {
            phone.innerHTML = '<i class="fa-solid fa-phone"></i>'
        },2000)
    })
    phone.addEventListener("mouseleave",()=>{
        phone.innerHTML = '<i class="fa-solid fa-phone"></i>'
    })
}

for(let i = 0; i < 40; i++){
        const dot = document.createElement("div");
        document.body.appendChild(dot);
        dot.classList.add("dot");
        dot.style.left = Math.random() * 100 + "vw";
        dot.style.setProperty("--height",Math.random() * 100 + "vh");
}

window.addEventListener("offline",()=>{
    let offline = document.createElement("div");
    document.body.appendChild(offline);
    offline.innerHTML = "<p>به نظر میاد مشکل اینترنت داری</p><p>لطفا روشن بودن اینترنت رو بررسی کن</p>"
    offline.classList.add("offline-show");
    setTimeout(() => {
        offline.remove()
    }, 4000);
})

const botMessage = document.querySelector("#bot-message")
const bot = document.querySelector(".bot")
botMessage.classList.add("bot-animation");
setInterval(() => {
    if(bot.getAttribute("src") === "bot1.png"){
      bot.setAttribute("src","bot2.png")
    }else {
        bot.setAttribute("src","bot1.png")
    }
},2000)
setInterval(() => {
    botMessage.classList.remove("bot-animation");
    void botMessage.offsetWidth;
    botMessage.classList.add("bot-animation");
},20000)

const textBot = document.querySelector("#bot-message p")
tx = ['به سایت ایلیا تحویلی خوش آمدید'
    ,'برای تبلیغات به ایمیل پیام بدهید'
    ,'با جدیدترین پادکست ها همراه  باشید']
let t = 0
textBot.textContent = tx[t]
setInterval(() => {
    textBot.textContent = tx[t]
    t++
    if(t >= tx.length) {
        t = 0;
    }
},5000)



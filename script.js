const words = [
"Web Developer",
"Mobile Application Developer",
"Frontend Developer",
"Problem Solver",
"Technical Support",
"Tech Enthusiast"
];

let i = 0;
let j = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function type(){

let current = words[i];

if(!deleting){

typing.textContent = current.substring(0,j++);

if(j>current.length){

deleting = true;

setTimeout(type,1200);

return;

}

}else{

typing.textContent = current.substring(0,j--);

if(j<0){

deleting = false;

i++;

if(i==words.length){

i=0;

}

}

}

setTimeout(type,deleting?50:120);

}

type();

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    // Change icon
    const icon = menuBtn.querySelector("i");

    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Close menu when a link is clicked
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.querySelector("i").classList.remove("fa-xmark");
        menuBtn.querySelector("i").classList.add("fa-bars");
    });
});

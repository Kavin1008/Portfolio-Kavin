


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval1 = null;

document.getElementById("nav-1").onmouseover = event => {  
let iteration = 0;
console.log("hi");
clearInterval(interval1);

interval1 = setInterval(() => {
  event.target.innerText = event.target.innerText
    .split("")
    .map((letter, index) => {
      if(index < iteration) {
        return event.target.dataset.value[index];
      }
    
      return letters[Math.floor(Math.random() * 26)]
    })
    .join("");
  
  if(iteration >= event.target.dataset.value.length){ 
    clearInterval(interval1);
  }
  
  iteration += 1 / 3;
}, 30);
}


let interval2 = null;

document.getElementById("nav-2").onmouseover = event => {  
let iteration = 0;

clearInterval(interval2);

interval2 = setInterval(() => {
  event.target.innerText = event.target.innerText
    .split("")
    .map((letter, index) => {
      if(index < iteration) {
        return event.target.dataset.value[index];
      }
    
      return letters[Math.floor(Math.random() * 26)]
    })
    .join("");
  
  if(iteration >= event.target.dataset.value.length){ 
    clearInterval(interval2);
  }
  
  iteration += 1 / 3;
}, 30);
}


let interval3 = null;

document.getElementById("nav-3").onmouseover = event => {  
let iteration = 0;

clearInterval(interval3);

interval3 = setInterval(() => {
  event.target.innerText = event.target.innerText
    .split("")
    .map((letter, index) => {
      if(index < iteration) {
        return event.target.dataset.value[index];
      }
    
      return letters[Math.floor(Math.random() * 26)]
    })
    .join("");
  
  if(iteration >= event.target.dataset.value.length){ 
    clearInterval(interval3);
  }
  
  iteration += 1 / 3;
}, 30);
}


let interval4 = null;

document.getElementById("nav-4").onmouseover = event => {  
let iteration = 0;

clearInterval(interval4);

interval4 = setInterval(() => {
  event.target.innerText = event.target.innerText
    .split("")
    .map((letter, index) => {
      if(index < iteration) {
        return event.target.dataset.value[index];
      }
    
      return letters[Math.floor(Math.random() * 26)]
    })
    .join("");
  
  if(iteration >= event.target.dataset.value.length){ 
    clearInterval(interval4);
  }
  
  iteration += 1 / 3;
}, 30);
}


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
nav1.classList.toggle("active");
nav2.classList.toggle("active");
nav3.classList.toggle("active");
nav4.classList.toggle("active");
navLink.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
nav1.classList.remove("active");
nav2.classList.remove("active");
nav3.classList.remove("active");
nav4.classList.remove("active");
navLink.classList.remove("active");
}))

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

const rating = document.getElementsByClassName('rating')[0];
const block = document.getElementsByClassName('block');

for(var i = 1 ; i < 100 ; i++)
{
  rating.innerHTML += "<div class='block'></div>";
  block[i].style.transform = "rotate("+ 3.6 * i +"deg)";
}

const rating2 = document.getElementsByClassName('rating2')[0];
const block2 = document.getElementsByClassName('block2');

for(var i = 1 ; i < 100 ; i++)
{
  rating2.innerHTML += "<div class='block2'></div>";
  block2[i].style.transform = "rotate("+ 3.6 * i +"deg)";
}

const rating3 = document.getElementsByClassName('rating3')[0];
const block3 = document.getElementsByClassName('block3');

for(var i = 1 ; i < 100 ; i++)
{
  rating3.innerHTML += "<div class='block3'></div>";
  block3[i].style.transform = "rotate("+ 3.6 * i +"deg)";
}

const rating4 = document.getElementsByClassName('rating4')[0];
const block4 = document.getElementsByClassName('block4');

for(var i = 1 ; i < 100 ; i++)
{
  rating4.innerHTML += "<div class='block4'></div>";
  block4[i].style.transform = "rotate("+ 3.6 * i +"deg)";
}

const rating5 = document.getElementsByClassName('rating5')[0];
const block5 = document.getElementsByClassName('block5');

for(var i = 1 ; i < 100 ; i++)
{
  rating5.innerHTML += "<div class='block5'></div>";
  block5[i].style.transform = "rotate("+ 3.6 * i +"deg)";
}

const rating6 = document.getElementsByClassName('rating6')[0];
const block6 = document.getElementsByClassName('block6');

for(var i = 1 ; i < 100 ; i++)
{
  rating6.innerHTML += "<div class='block6'></div>";
  block6[i].style.transform = "rotate("+ 3.6 * i +"deg)";
}



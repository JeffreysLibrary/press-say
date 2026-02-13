let a =document.getElementById("thankyou");
let b =document.getElementById("hello");
let c =document.getElementById("howAreYou");
let d =document.getElementById("youreWelcome");
let e =document.getElementById("coldOut");
let f =document.getElementById("rainyOut");
let g =document.getElementById("niceOut");

a.addEventListener("click", thankyouGo);
b.addEventListener("click", helloGo);
c.addEventListener("click", howAreYouGo);
d.addEventListener("click", youreWelcomeGo)
e.addEventListener("click", coldOutGo);
f.addEventListener("click", rainyOutGo);
g.addEventListener("click", niceOutGo);


function play(file) { 
const audio = new Audio(file); audio.currentTime = 0; audio.play(); 
}



function thankyouGo() {
play("thankyou.m4a");		
}

function helloGo() {
play("hello.m4a");		
}

function howAreYouGo() {
play("howAreYou.m4a");		
}

function youreWelcomeGo() {
play("youreWelcome.m4a");	
}

function coldOutGo() {
play("coldOut.m4a");	
}

function rainyOutGo() {
play("rainyOut.m4a");	
}

function niceOutGo() {
play("niceOut.m4a");	
}
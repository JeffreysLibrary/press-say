let a = document.getElementById("happy");
let b = document.getElementById("sad");
let c = document.getElementById("angry");
let d = document.getElementById("tired");
let e = document.getElementById("excited");
let f = document.getElementById("nervous");
let g = document.getElementById("bored");

a.addEventListener("click", happyGo);
b.addEventListener("click", sadGo);
c.addEventListener("click", angryGo);
d.addEventListener("click", tiredGo);
e.addEventListener("click", excitedGo);
f.addEventListener("click", nervousGo);
g.addEventListener("click", boredGo);

function play(file) { 
const audio = new Audio(file); audio.currentTime = 0; audio.play(); 
}


function happyGo() {
play("happy.m4a");	
}


function sadGo() {
play("sad.m4a");	
}

function angryGo() {
play("angry.m4a");	
}


function tiredGo() {
play("tired.m4a");	
}

function excitedGo() {
play("excited.m4a");	
}

function nervousGo() {
play("nervous.m4a");	
}

function boredGo() {
play("bored.m4a");	
}
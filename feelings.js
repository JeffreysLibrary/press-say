let a 	=document.getElementById("happy");
let b =document.getElementById("sad");
let c =document.getElementById("angry");


a.addEventListener("click", happyGo);
b.addEventListener("click", sadGo);
c.addEventListener("click", angryGo);


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
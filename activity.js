let a = document.getElementById("walk");
let b = document.getElementById("tv");
let c = document.getElementById("boardgame");
let d = document.getElementById("eatOut");
let e = document.getElementById("work");
let f = document.getElementById("break");
let g = document.getElementById("chores");
let h = document.getElementById("movies");
let i = document.getElementById("park");


a.addEventListener("click", walkGo);
b.addEventListener("click", tvGo);
c.addEventListener("click", boardgameGo);
d.addEventListener("click", eatOutGo);
e.addEventListener("click", workGo);
f.addEventListener("click", breakGo);
g.addEventListener("click", choresGo);
h.addEventListener("click", moviesGo);
i.addEventListener("click", parkGo);


function play(file) { 
const audio = new Audio(file); audio.currentTime = 0; audio.play(); 
}

function parkGo() {
play("park.m4a");	
}

function moviesGo() {
play("movies.m4a");	
}

function choresGo() {
play("chores.m4a");	
}

function breakGo() {
play("break.m4a");	
}

function workGo() {
play("work.m4a");	
}


function eatOutGo() {
play("eatOut.m4a");	
}


function boardgameGo() {
play("boardgame.m4a");	
}


function tvGo() {
play("tv.m4a");	
}


function walkGo() {
play("walk.m4a");	
}
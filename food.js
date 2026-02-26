let a = document.getElementById("letsEat");
let b = document.getElementById("water");
let c = document.getElementById("snack");
let d = document.getElementById("dietSoda");
let e = document.getElementById("hamburger");
let f = document.getElementById("regularSoda");
let g = document.getElementById("pizza");
let h = document.getElementById("milk");
let i = document.getElementById("pancakes");
let j = document.getElementById("juice");


a.addEventListener("click", letsEatGo);
b.addEventListener("click", waterGo);	
c.addEventListener("click", snackGo);
d.addEventListener("click", dietSodaGo);	
e.addEventListener("click", hamburgerGo);
f.addEventListener("click", regularSodaGo);
g.addEventListener("click", pizzaGo);	
h.addEventListener("click", milkGo);
i.addEventListener("click", pancakesGo);
j.addEventListener("click", juiceGo);


function play(file) { 
const audio = new Audio(file); audio.currentTime = 0; audio.play(); 
}

function juiceGo() {
play("juice.m4a");	
}

function pancakesGo() {
play("pancakes.m4a");	
}

function milkGo() {
play("milk.m4a");	
}

function pizzaGo() {
play("pizza.m4a");	
}

function regularSodaGo() {
play("regularSoda.m4a");	
}

function hamburgerGo() {
play("hamburger.m4a");	
}

function dietSodaGo() {
play("dietSoda.m4a");	
}

function snackGo() {
play("snack.m4a");	
}

function letsEatGo() {
play("letsEat.m4a");		
}


function waterGo() {
play("water.m4a");		
}

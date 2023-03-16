

let navBurger = document.querySelector(".navBurger");
let burgerButton = document.querySelector(".burgerButton")
burgerButton.onclick = function toggleBurger() {
    navBurger.classList.toggle("burgerOn");
    
}



function topnav(){

if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
console.log("baby")
nav.classList.add("navon")
}else{
nav.classList.remove("navon")

}

}

window.onscroll = function(){topnav()};


let nav = document.querySelector(".topnav")
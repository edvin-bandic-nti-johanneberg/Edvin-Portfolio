

let navBurger = document.querySelector(".navBurger");
let burgerButton = document.querySelector(".burgerButton")
burgerButton.onclick = function toggleBurger() {
    navBurger.classList.toggle("burgerOn");
    
}



function topnav(){

if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
console.log("baby")
nav.classList.add("navon")
}else{
nav.classList.remove("navon")

}

}

window.onscroll = function(){topnav()};


let nav = document.querySelector(".topnav")


function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
const MAIN = document.querySelector(".burger_main");
const NAVIGATION = document.querySelector("nav");
const FIRST = document.querySelector(".first");
const SECOND = document.querySelector(".second");
const THIRD = document.querySelector(".third");

MAIN.addEventListener("click", function(){
    NAVIGATION.classList.toggle("nav_on");
    FIRST.classList.toggle("first_on");
    SECOND.classList.toggle("second_on");
    THIRD.classList.toggle("third_on");
    MAIN.classList.toggle("burger_main_on")
});



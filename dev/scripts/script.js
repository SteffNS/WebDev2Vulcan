// Write your JavaScript here...
var toggle = document.querySelector(".toggle"); //search the document for all elements with the class name .toggle and assign it to the variable toggle
var menu = document.querySelector(".menu");

function toggleMenu() {
    if (menu.classList.contains("active")) { //if the element menu has the class name "active", first remove that class and set the toggle icon to bars
        menu.classList.remove("active");

        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></li>";
    } else { // if the element does not have the active class, add it and set the toggle icon to an x 
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></li>";
    }
}

toggle.addEventListener("click", toggleMenu);
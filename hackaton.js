//  navbar toggle code here

var mToggle = document.getElementById("big-bar")
var menu = document.getElementById("menu")

const active = () => {
    menu.classList.toggle("big-bar")

}

mToggle.addEventListener("click", active)

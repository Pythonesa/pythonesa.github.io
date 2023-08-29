import { typewriter } from "./typewriter.js"

let show = false
const mobileButton = document.querySelector("#hamburguesa")
const mobileMenu = document.querySelector("#mobile")
const mobileMenuLinks = document.querySelectorAll(".mobileNav-link")

const toggleButton = () => {
    show = !show
    mobileMenu.className = show ? "mobile-show" : "mobile-noShow"
}
const onBurgerClick = () => {
    toggleButton()
}

mobileButton.addEventListener('click', onBurgerClick)
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleButton()
    })
})

typewriter(".textAbout span")

let show = false
const mobileButton = document.querySelector("#hamburguesa")
const mobileMenu = document.querySelector("#mobile")

const toggleButton = ()=>{
    show = !show
    mobileMenu.className = show ? "mobile-show" : "mobile-noShow" 
} 
const onBurgerClick = ()=>{
    toggleButton()
}
mobileButton.addEventListener('click',onBurgerClick)


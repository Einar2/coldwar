let modal = document.querySelector('.block_mobile')
let burger = document.querySelector('.burger')
let menu_click = false
let header = document.querySelector('header')


burger.addEventListener("click", () => {
     if (menu_click == false) {
          modal.style = "transform: translateX(0%);"
          menu_click = true
     }
     else if (menu_click == true) {
          
          modal.style = "transform: translateX(100%);"
          menu_click = false
     }
})
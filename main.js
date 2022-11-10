const menu = document.querySelector('#menu')
const btnMenu = document.querySelector('#menu-btn')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('invisible')
})
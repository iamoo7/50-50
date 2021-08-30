const toggle = document.querySelector('#toggle')
const active = document.querySelector('.active')

toggle.addEventListener('click', () =>{
    active.classList.toggle('active')
})
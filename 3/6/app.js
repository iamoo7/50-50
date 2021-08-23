const expand = document.querySelector('.search')
const btn = document.querySelector("button")
const input = document.querySelector('input')

btn.addEventListener('click', () => {
expand.classList.toggle('active')
input.focus()
})
const hover = document.querySelector('#first')
const first = document.querySelector('#first_q')
const paraF = document.querySelector('#first_para')

hover.addEventListener('click', () =>{
    first.classList.toggle('highlight')
    paraF.classList.toggle('show')
})
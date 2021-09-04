const card = document.querySelectorAll('.card')
const panel = document.querySelector('.feedback-container')
const close = document.querySelector('.close')
const skip = document.querySelector('.btn_sec')
const submit = document.querySelector('.btn_prim')
const result = document.querySelector('#submitted')
let rating = 'Satisfied'

card.forEach((el) => {
    el.addEventListener('click', () =>{
        removeActiveClass()
        el.classList.add('active')
        rating = el.innerText
        console.log(rating)
    })
});

function removeActiveClass(){
    card.forEach(panel => {
        panel.classList.remove('active');
    })

    
}

submit.addEventListener('click', () =>{
    result.style.display = 'flex'
    panel.style.display = 'none'
})

const card = document.querySelectorAll('.card')
const close = document.querySelector('.close')
const skip = document.querySelector('.btn_sec')
const submit = document.querySelector('.btn_prim')
let rating = 'Satisfied'

card.forEach((el) => {
    el.addEventListener('click', () =>{
        removeActiveClass()
        el.classList.add('active')
        console.log(el)
        rating = el.nextElementSibling.innerHTML
        console.log(rating)
    })
});

function removeActiveClass(){
    card.forEach(panel => {
        panel.classList.remove('active');
    })

    
}


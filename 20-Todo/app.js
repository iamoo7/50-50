const navs = document.querySelectorAll('.navs')
const active = document.querySelector('#active')
const completed = document.querySelector('#completed')

console.log(active)
console.log(completed)

navs.forEach((el, idx) =>{
    el.addEventListener('click', () => {
        removeActiveClass()
        el.lastChild.classList.add('active')
        if(idx === 0){
            active.classList.add('active')
            completed.classList.add('active')
        } else if(idx ===1){
            active.classList.add('active')
            completed.classList.remove('active')
        }else{
            active.classList.remove('active')
            completed.classList.add('active')
        }

        console.log(el.firstChild)
        
    })
})

function removeActiveClass(){
    navs.forEach(el =>{
el.lastChild.classList.remove('active')
    })
}




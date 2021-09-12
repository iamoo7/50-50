const navs = document.querySelectorAll('.navs')
const active = document.querySelector('#active')
const completed = document.querySelector('#completed')
const addBtn = document.querySelector('.btn_primary')
let myAudio = document.querySelector('#audio')
const addTaskActive = document.querySelector('#active')
const checked = document.querySelectorAll('.box')


console.log(checked)

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


addBtn.addEventListener('click', ()=> {
    addTaskActive.innerHTML += `<div class="task">
    <input type="checkbox" class="box" />
    <span>Active</span>
  </div>`
  console.log(checked)
})

function updateList(){
    task.forEach((el) =>{
console.log(el)
    })
}

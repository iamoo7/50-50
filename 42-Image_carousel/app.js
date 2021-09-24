const imgs = document.querySelector('.image')
const leftBtn =document.querySelector('#prev')
const rightBtn =document.querySelector('#next')


const img = document.querySelectorAll('.image img')

let idx = 0

let interval = setInterval(run, 5000)

function run(){
    idx++
    changeImage()
}

function changeImage(){
    if(idx>img.length - 1){
idx = 0

    }else if(idx<0){
        idx = img.length -1
    }else{
        imgs.style.transform = `translateX(${-idx*400}px)`
    }
}

leftBtn.addEventListener('click', ()=>{
    idx--

    changeImage()

})

rightBtn.addEventListener('click', ()=>{
    idx++

    changeImage()

})
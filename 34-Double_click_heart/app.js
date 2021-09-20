const loveMe = document.querySelector(".loveMe")
const times = document.querySelector('#times')

let timesClicked = 0

loveMe.addEventListener('dblclick', (e) =>{
    createHeart(e)
})


function createHeart(e){
    const heart = document.createElement('i')
    heart.classList.add('uis')
    heart.classList.add('uis-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    

    loveMe.appendChild(heart)

times.innerHTML =  ++timesClicked 

setTimeout(() => heart.remove(), 11000);

}
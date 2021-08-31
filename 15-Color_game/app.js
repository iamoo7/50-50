const container = document.querySelector('#container')
const colors =['#e74c3c', '#8e55ad', '#3498db', '#e67e22', '#2ecc71']

const SQUARES = 2000-5

for(let i= 0; i< SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(ele){
    const color = getRandomColor()
    ele.style.background = color
    ele.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `
}

function removeColor(ele){
    ele.style.background = `#1d1d1d`
    ele.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}
const nav = document.querySelectorAll('nav ul li')
const content = document.querySelectorAll('.content')


nav.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContent()
        hideAllNavs()

        item.classList.add('active')
        content[idx].classList.add('show')
    })
})

function hideAllContent(){
    content.forEach(content => content.classList.remove('show'))
}

function hideAllNavs(){
    nav.forEach(content => content.classList.remove('active'))
}
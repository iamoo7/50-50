const toggle = document.querySelectorAll('.question')


toggle.forEach(toggle => {
    toggle.addEventListener('click', () =>{
        toggle.classList.toggle('highlight')
        console.log(toggle)
    })
}
    

)
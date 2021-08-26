const jokeEl = document.querySelector('.joke')
const jokeBtn = document.querySelector('.joke_btn')
let myAudio = document.querySelector('#audio')


generatejoke()

jokeBtn.addEventListener('click', generatejoke)


function generatejoke() {
  myAudio.play()
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', config).then((res) => res.json()).then((data) => {
        jokeEl.innerHTML = data.joke
    })

}

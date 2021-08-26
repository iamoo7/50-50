const jokeEl = document.querySelector('.joke')
const jokeBtn = document.querySelector('.joke_btn')


generatejoke()

jokeBtn.addEventListener('click', generatejoke)


function generatejoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', config).then((res) => res.json()).then((data) => {
        jokeEl.innerHTML = data.joke
    })

}
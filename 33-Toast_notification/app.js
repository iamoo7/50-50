const button = document.querySelector('#button')
const toast = document.querySelector('#toast')

const messages = [ 
    'Message One', 
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())


function createNotification(message = null, type = null){
    const notif = document.createElement('div')
    notif.classList.add('tst')
    notif.classList.add(type?type:getRandomType())
    notif.innerText = message ? message: getRandomMessage()

    toast.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000);
}


function getRandomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
}

function getRandomType(){
    return types[Math.floor(Math.random()*types.length)]
}
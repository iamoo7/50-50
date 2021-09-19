const APIURL = 'https://api.github.com/users/'
const form = document.querySelector('#form')
const search = document.querySelector('#search')
const main = document.querySelector('#main')


/* function to get userdata */ 

async function getUser(username){
    try{
        const {data} = await axios(APIURL + username)
    createUserCard(data)
getRepos(username)
 }
 catch(err){
    if(err.response.status == 404){
 createErrorCard('No profile with this username')
          }
        }
    }

/*function to get repos */

async function getRepos(username){
    try{
        const {data} = await axios(APIURL + username + '/repos?sort=created')
 addReposToCard(data)
    }
    catch(err){
            createErrorCard('Problem fetching repos')
        }
  }


/* function to create user card */

function createUserCard(user){
    const cardHTML = ` <div class="card">
    <div class="user-image">
      <div class="background-circle">
        <img
          src="${user.avatar_url}"
          alt="${user.name}"
        />
      </div>
      <div class="bio">
        <p></p>
      </div>
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>
        ${user.bio}
      </p>
      <ul>
        <li>${user.followers} Followrs</li>
        <li>${user.following} Following</li>
        <li>${user.public_repos} Repos</li>
      </ul>

      <div id="repos">

      </div>
    </div>
  </div>`


  main.innerHTML = cardHTML
}


/* function to create error card */

function createErrorCard(msg){
    const cardHTML = `<div class='card'>
    <h1>${msg}</h1>
    </div>`

    main.innerHTML = cardHTML
}

/* fucntiont to add repos */

function addReposToCard(repos){
    const reposEl = document.querySelector('#repos')
    repos
    .slice(0,4)
    .forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'

        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
        
    });
}

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const user = search.value

        if(user){
            getUser(user)

            search.value = ''
        }
    })
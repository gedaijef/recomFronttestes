const url = "https://gedaijef.github.io/recomendacao_midiateca/json/dados.json"

const postsContainer = document.querySelector("#posts-container");
postsContainer.style.display = 'none'

async function filtro() {
    postsContainer.innerHTML = "";
    const filtro = document.getElementById("input").value.trim()

    const response = await fetch(url);
    const data = await response.json(); //recebendo tudo em array

    data.map((post) => {
        const cards = document.querySelectorAll(".card")
        const genero = post.genero

        if (filtro == genero) {
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.display = 'none'
            }

            postsContainer.style.display = 'flex'

            const article = document.createElement("article")
            article.setAttribute("id", "cards")

            const articleCard = document.createElement("article")
            articleCard.classList.add("card")

            const divContainer = document.createElement("div")
            divContainer.classList.add("container")

            const divImg = document.createElement("div")
            divImg.classList.add("img")

            const tagImg = document.createElement("img")
            tagImg.setAttribute("src", "../img/Livro.png")
            tagImg.classList.add("banner")

            const h2 = document.createElement("h2")
            h2.innerHTML = filtro
            
            divImg.appendChild(tagImg)
            divContainer.appendChild(divImg)
            divContainer.appendChild(h2)
            articleCard.appendChild(divContainer)
            article.appendChild(articleCard)
            postsContainer.appendChild(article);
        }
        else if (filtro == "") {
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.display = 'block'
                postsContainer.style.display = 'none'
            }
        }
    });
}

const card = document.querySelectorAll(".card")
for (let i=0; i < card.length; i++) {
    card[i].addEventListener('click', ()=>{
        window.open('recomendados.html', '_self')
    })
}

'use strict'

const routes = {
    '/' : '/pages/home.html',
    '/vermelho' : '/pages/vermelho.html',
    '/azul' : '/pages/azul.html',
    '/verde' : '/pages/verde.html',
    '/amarelo' : '/pages/amarelo.html'
}
const route = async () => {

    //Ao clique ele continua na mesma pagina, porem sem mudar a url e continuar os conteudos
    window.event.preventDefault()

    //Ao clique ele continua na mesma pagina, porem mudando a url e os conteudos
    window.history.pushState({},"",window.event.target.href)

    //Pega a url do que clicamos, exmeplo: /vermlho, /azul
    const path = window.location.pathname

    const response = await fetch(routes[path])

    const html = await response.text()

    document.getElementById('root').innerHTML = html
}

window.route = route
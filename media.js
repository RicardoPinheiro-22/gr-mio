function voto(){
    var page = document.querySelector('.container')
    var carregar = document.querySelector('.load')
    var mensagem = document.querySelector('.alerta')

    page.style.display = "none"
    carregar.style.display = "block"
    mensagem.style.display = "block"
    
    setTimeout(() => {
        location.href="https://ricardopinheiro-22.github.io/log-in/";
    }, "4000")
}

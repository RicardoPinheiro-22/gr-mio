const currentTime = () =>{
    const horario = document.querySelector('.horario')

    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    hh = hh < 10 ? `0${hh}`:hh
    mm = mm < 10 ? `0${mm}`:mm
    ss = ss < 10 ? `0${ss}`:ss

    let time = `${hh}:${mm}:${ss}`
    horario.innerText = time;
}

currentTime()
setInterval(currentTime, 1000)

function voto(){
    var page = document.querySelector('.c_main')
    var carregar = document.querySelector('.carregar')

    page.style.display = "none"
    carregar.style.display = "flex"
    
    setTimeout(() => {
        location.href="https://ricardopinheiro-22.github.io/log-in/";
    }, "4000")
}

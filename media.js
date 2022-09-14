function calcular(){
    var number1 = document.querySelector('#n1')
    var number2 = document.querySelector('#n2')
    var number3 = document.querySelector('#n3')
    var calcular = document.querySelector('#calcular')
    var resultado = document.querySelector('#result')
    
    a = Number(number1.value)
    b = Number(number2.value)
    c = Number(number3.value)
    
    media = (a + b + c)/3

    if(media >= 6){
        resultado.innerHTML = `Sua média é ${media}
        e você foi aprovado.`
    }else{
        resultado.innerHTML = `Sua média é ${media}
        e você não foi aprovado.`
    }
}
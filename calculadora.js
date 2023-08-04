const n1 = document.getElementById("number1")
const n2 = document.getElementById("number2")
const result = document.getElementById("resultado")

function somar() {
    resultado.textContent = Number(n1.value) + Number(n2.value)
}

function subtrair() {
    resultado.textContent = Number(n1.value) - Number(n2.value)
}

function dividir() {
    resultado.textContent = Number(n1.value) / Number(n2.value)
}

function multiplicar() {
    resultado.textContent = Number(n1.value) * Number(n2.value)
}

//Forma diferente de fazer
/* function calculo(params){
    if(params === 'somar'){
        resultado.textContent = Number(n1.value) + Number(n2.value)
    } else if(params === 'subtrair'){
        resultado.textContent = Number(n1.value) - Number(n2.value)
    }else if(params === 'dividir'){
        resultado.textContent = Number(n1.value) / Number(n2.value)
    }else if(params === 'multiplicar'){
        resultado.textContent = Number(n1.value) * Number(n2.value)
    }else{
        alert("Não reconheço esta operação!")
    }
} */
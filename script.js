/* Criar váriaveis */

/* let nome = "Arthur Cuidado" */
let idade = 37
let idadeEsposa = "37"
const anoNascimento = 1879

/* decisão */

if (idade === idadeEsposa) {
    /* alert("igual....") */
} else {
    /* alert("renato augusto") */
}

/* Lendo informações do HTML */

const titulo = document.getElementById("titulo")
const nome = document.getElementById("nome")
const email = document.getElementById("email")

titulo.textContent = "Mudei o Titulo!!"

titulo.style.color = "orange"
titulo.style.backgroundColor = "black"
titulo.style.borderRadius = "10px"
titulo.style.padding = "10px"
titulo.style.textAlign = "center"

body.style.textAlign = "center"

function mostrarResultado() {
    mostrarResultado.textContent = nome.value + " " + email.value
}
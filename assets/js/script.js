/* 
    JAVA X JAVASCRIPT = NÃO SÃO IGUAIS
    CASE SENSITIVE
    Fracamente tipada

    FORMAS DE INICIAR VARIÁVEL

    var = escopo global funciona no código todo e pode ser modificada
    let = escopo local permite/pode ser modificada
    const = não pode ser modificada

    No Javascript não precisa declarar o tipo da variável
    
    Exemplos:
    let nome = "Michelle" - aqui ele já vai reconhecer que é uma String
    let age = 19 - aqui ele já reconhece que é um int
    let money = 53.6 - aqui ele já reconhece que é um float

    **Outras formas de acessar o DOM**

    por Tag: getElementByTagName()
    por Id: getElementById()
    por Nome: getElementsByName()
    por Classe: getElementsByClassName()
    por Seleto: querySelector()
*/

/*let campoNome = window.document.getElementById("nome");
let campoEmail = document.getElementById("email")

campoNome.style.color = "pink"
campoEmail.style.fontSize = "24px"

function confirmarEnvio (){
    const name = campoNome.value
    const email = campoEmail.value

    if (name.length != 0 && email.length != 0){
        alert("Olá " + name + ". Foi enviado um email para "+ email + "para completar o cadastro!")
    } else {
        alert ("Preencha os campos")
    }
}*/
 /*Se não colocar o # no querySelector não funciona */

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3 ) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail (){
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto (){
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto muito grande. Limite de 100 caracteres!"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOK = true
    }
}

function enviar (){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ("Formuláro enviado com sucesso!")
    } else {
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom (){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal (){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}
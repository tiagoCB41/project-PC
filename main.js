//RAZÃO SOCIAL
let corporateName

function getCorporateName() {
    corporateName = document.getElementById("insertRazãoSocial").value
    console.log(corporateName)
}


//ENDEREÇO
let adress

function getAdress() {
    adress = document.getElementById("insertAdress").value
    console.log(adress)
}


//BAIRRO
let district

function getBairro() {
    district = document.getElementById("insertBairro").value
    console.log(district)
}





//DATA
let date

function getDate() {

    let dateValue = document.getElementById("insertDate").value

    data = new Date(dateValue);
    dataFormatada = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    date = dataFormatada
    console.log(date)
}


let city

function getCity() {
    city = document.getElementById("insertCity").value
    console.log(city)
}


let nfNumber

function getNfNumber() {
    nfNumber = document.getElementById("insertNfNumber").value
    console.log(nfNumber)
}

/*  NF VALOR */

let nfValor

function getNfValor() {
    nfValor = document.getElementById("insertNfValor").value
    nfValor = parseInt(nfValor)
    console.log(nfValor)
    calcularFrete()
}


/* VALOR DO FRETE */

let valorDoFrete

function calcularFrete() {
    valorDoFrete = nfValor * 0.03
    valorDoFreteReal = valorDoFrete.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    console.log("valor do frete " + valorDoFreteReal)

}


// OBSERVAÇÕES

let observações

function getObservações() {
    observações = document.getElementById("insertObservações").value
    console.log(observações)
}



function fazerRequisição() {
    sessionStorage.setItem("data", (date))
    sessionStorage.setItem("razão-social", (corporateName))
    sessionStorage.setItem("endereço", (adress))
    sessionStorage.setItem("bairro", district)
    sessionStorage.setItem("cidade", (city))
    sessionStorage.setItem("numeroNF", (nfNumber))
    sessionStorage.setItem("valorNF", (nfValor))
    sessionStorage.setItem("valorFrete", valorDoFreteReal)
    sessionStorage.setItem("observações", (observações))
    if (date == undefined || corporateName == undefined || adress == undefined || district == undefined || city == undefined || nfNumber == undefined || nfValor == undefined) {} else {
        window.location.href = "../PrintScreen/PrintScreen.html";
    }

}
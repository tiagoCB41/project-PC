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
let nfValor2
let ValorImpresso

function getNfValor() {
    nfValor = document.getElementById("insertNfValor").value
    nfValor = parseFloat(nfValor)
    sessionStorage.setItem("valorComparate", (nfValor))
    nfValor2 = nfValor.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    console.log(nfValor2)
   
    calcularFrete()
}


/* VALOR DO FRETE */

let valorDoFrete
let valorFreteFinal

function calcularFrete() {  
valorDoFrete = nfValor * 0.03
    valorDoFreteReal = valorDoFrete.toLocaleString('pt-br', { minimumFractionDigits: 2 });
function formatMoney(n, c, d, t) {
  c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}    

valorFreteFinal = formatMoney(valorDoFrete)
console.log(valorFreteFinal)
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
    sessionStorage.setItem("valorNF", (nfValor2))
    sessionStorage.setItem("valorFrete", valorFreteFinal)
    sessionStorage.setItem("observações", (observações))
    if (date == undefined || corporateName == undefined || adress == undefined || district == undefined || city == undefined || nfNumber == undefined || nfValor == undefined) {} else {
        window.location.href = "../PrintScreen/PrintScreen.html";
    }

}

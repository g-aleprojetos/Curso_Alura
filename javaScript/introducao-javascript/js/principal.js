
//alert("Olá Mundo!");
var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);

titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var imc = paciente.querySelector(".info-imc");

var validacaoIMC = true;

if(peso <= 0 || peso >= 1000){
    var st = "Peso inválido";
    console.log(st);
    validacaoIMC = false;
    imc.textContent = st;
}

if(altura <= 0 || altura >= 3.0){
    var st = "Altura inválido";
    console.log(st);
    validacaoIMC = false;
    imc.textContent = st;
}

if(validacaoIMC){
    imc.textContent = peso / (altura * altura);
}











//alert("Olá Mundo!");
var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

//console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = paciente.querySelector(".info-imc");

    var validacaoIMC = true;

    if (peso <= 0 || peso >= 1000) {
        var st = "Peso inválido";
        console.log(st);
        validacaoIMC = false;
        imc.textContent = st;
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.0) {
        var st = "Altura inválido";
        console.log(st);
        validacaoIMC = false;
        imc.textContent = st;
        paciente.classList.add("paciente-invalido");

    }

    if (validacaoIMC) {
        var arr = peso / (altura * altura);
        imc.textContent = arr.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    console.log("botao clicado");
});











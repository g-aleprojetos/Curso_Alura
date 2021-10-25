
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

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if (!pesoEhValido) {
        var st = "Peso inválido";
        console.log(st);
        pesoEhValido = false;
        imc.textContent = st;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValido) {
        var st = "Altura inválido";
        console.log(st);
        alturaEhValido = false;
        imc.textContent = st;
        paciente.classList.add("paciente-invalido");

    }

    if (validacaoIMC) {
        var arr = calculaImc(peso, altura);
        imc.textContent = arr;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && peso < 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}











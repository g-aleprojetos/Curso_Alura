
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
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTd = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    pacienteTd.appendChild(nomeTd);
    pacienteTd.appendChild(pesoTd);
    pacienteTd.appendChild(alturaTd);
    pacienteTd.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTd);

});











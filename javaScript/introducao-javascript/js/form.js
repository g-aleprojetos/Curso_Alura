var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
 
    //cria a tr a td do paciente
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
    imcTd.textContent = calculaImc(peso,altura);
    
    pacienteTd.appendChild(nomeTd);
    pacienteTd.appendChild(pesoTd);
    pacienteTd.appendChild(alturaTd);
    pacienteTd.appendChild(gorduraTd);
    pacienteTd.appendChild(imcTd);
    
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTd);

});

function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}
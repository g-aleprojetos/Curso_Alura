var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(function(paciente) {
        var tdNome = paciente.querySelector(".info-nome");
        var nome = paciente.textContent;
        console.log(tdNome);
    });
})
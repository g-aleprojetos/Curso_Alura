var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");

    if (campoFiltro.value.length > 0) {
        console.log("entrou");
        pacientes.forEach(function (paciente) {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
              if (nome != campoFiltro.value) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        });
    } else {
        console.log("saiu");

        pacientes.forEach(function(paciente) {
            paciente.classList.remove("invisivel");
        });
    }
})
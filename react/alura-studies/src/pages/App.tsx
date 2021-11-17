import React, { useState } from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import Cronometro from "../components/Cronometro";
import style from "./App.module.scss";
import { ITarefa } from "../Types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
      tarefas={tarefas} 
      selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
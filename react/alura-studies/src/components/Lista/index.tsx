import style from "./Lista.module.scss";
import {ITarefa} from "../../Types/tarefa";
import Item from "./Item";

interface Props{
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas,selecionaTarefa  }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudo do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item 
          selecionaTarefa={selecionaTarefa}
          key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;

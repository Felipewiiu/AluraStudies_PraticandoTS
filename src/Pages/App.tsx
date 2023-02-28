import Cronometro from "../Components/Cronometro";
import Formulario from "../Components/Formulario";
import Lista from "../Components/Lista";
import style from './App.module.scss'
import React, {useState} from "react";
import ITarefas from "../types/ITarefa";


function App() {

  const [tarefas, setTarefas] = useState<ITarefas[] | []>([])

  const [selecionado, setSelecionado] = useState<ITarefas>();

  function selecionaTarefa(tarefaSelecionada: ITarefas){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
    <Formulario setTarefas={setTarefas} />
    <Lista 
    tarefas={tarefas} 
    selecionaTarefa = {selecionaTarefa}
    />
    <Cronometro/>
    
    </div>
  );
}

export default App;

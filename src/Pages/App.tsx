import Cronometro from "../Components/Cronometro";
import Formulario from "../Components/Formulario";
import Lista from "../Components/Lista";
import style from './App.module.scss'
import React, {useState} from "react";
import ITarefas from "../types/ITarefa";


function App() {

  const [tarefas, setTarefas] = useState<ITarefas[] | []>([])

  return (
    <div className={style.AppStyle}>
    <Formulario setTarefas={setTarefas} />
    <Lista tarefas={tarefas} />
    <Cronometro/>
    
    </div>
  );
}

export default App;

import ITarefas from '../../types/ITarefa'
import Item from './Item'
import style from './Lista.module.scss'

interface Props{
  tarefas: ITarefas[]
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}


export default function Lista({ tarefas, selecionaTarefa } : Props) {


  return (
    <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
          {tarefas.map((item, index) =>(
              <Item
              selecionaTarefa={selecionaTarefa}
              key={item.id}
                {...item}
              />
          ))}
        </ul>
    </aside>
  )
}

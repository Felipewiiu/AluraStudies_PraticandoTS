import ITarefas from '../../types/ITarefa'
import Item from './Item'
import style from './Lista.module.scss'




export default function Lista({ tarefas } : { tarefas: ITarefas[] }) {


  return (
    <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
          {tarefas.map((item, index) =>(
              <Item
              key={index}
                {...item}
              />
          ))}
        </ul>
    </aside>
  )
}

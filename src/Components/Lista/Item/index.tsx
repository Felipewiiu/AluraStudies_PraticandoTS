import ITarefas from '../../../types/ITarefa'
import style from './Item.module.scss'

interface Props extends ITarefas {
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

export default function Item(
  {
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa
  }: Props) {

  // console.log('item atual: ', {
  //   tarefa, tempo, selecionado, completado, id
  // })
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado: ''} ${ completado ? style.itemCompletado: ''}`}
      onClick={() => !completado && selecionaTarefa({
        tarefa,
        tempo,
        selecionado,
        completado,
        id
      })}>
      <h3>
        {tarefa}
      </h3>
      <span>
        {tempo}
      </span>
      {completado && <span className={style.concluido} aria-label='Tarefa completada'></span>}
    </li>
  )
}

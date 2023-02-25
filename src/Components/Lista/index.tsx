import './style.scss'

export default function Lista() {

    const Tarefa =[{
        tarefa: "React",
        tempo: "02:00:00",
        id: 1
      },
      {
        tarefa: "JavaScript",
        tempo: "01:00:00",
        id: 2
        
      },
      {
        tarefa: "Typescript",
        tempo: "03:00:00",
        id: 3
      }
    
    ]
    
    
  return (
    <aside className='listaTarefas'>
        <h2>Estudo do dia</h2>
        <ul>
          {Tarefa.map(tarefa =>(
              <li key={tarefa.id} className='item'>
              <h3>
                  {tarefa.tarefa}
              </h3>
              <span>
                  {tarefa.tempo}
              </span>
            </li>
          ))}
        </ul>
    </aside>
  )
}

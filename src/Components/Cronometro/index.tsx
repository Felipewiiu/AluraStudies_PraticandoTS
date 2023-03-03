import { useState } from 'react'
import Botao from '../Botao'
import Relogio from './Relogio'
import styles from './Cronometro.module.scss'
import { TempoParaSegundos } from '../../Common/Utils/Time'
import ITarefas from '../../types/ITarefa'

interface Props {
  selecionado: ITarefas | undefined
}

export default function Cronometro({selecionado}: Props ) {

  const [tempo, setTempo] = useState<Number>()

  if(selecionado?.tempo){
    
    setTempo(TempoParaSegundos(selecionado.tempo))
  }



  
  return (
    <div className={styles.cronometro}>
        <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
        time: {tempo}
        <div className={styles.relogioWrapper}>
            <Relogio/>
        </div>
        <Botao>
            Começar
        </Botao>
    </div>
  )
}
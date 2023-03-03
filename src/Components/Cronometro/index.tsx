import { useEffect, useState } from 'react'
import Botao from '../Botao'
import Relogio from './Relogio'
import styles from './Cronometro.module.scss'
import { TempoParaSegundos } from '../../Common/Utils/Time'
import ITarefas from '../../types/ITarefa'

interface Props {
  selecionado: ITarefas | undefined
}

export default function Cronometro({selecionado}: Props ) {

  const [tempo, setTempo] = useState<number>()

  useEffect(() =>{
    if(selecionado?.tempo){
      setTempo(TempoParaSegundos(selecionado.tempo))
    }

  }, [selecionado])



  
  return (
    <div className={styles.cronometro}>
        <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
        Tempo: {tempo}
        <div className={styles.relogioWrapper}>
            <Relogio/>
        </div>
        <Botao>
            Começar
        </Botao>
    </div>
  )
}
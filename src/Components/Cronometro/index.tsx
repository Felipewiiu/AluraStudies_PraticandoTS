import { useEffect, useState } from 'react'
import Botao from '../Botao'
import Relogio from './Relogio'
import styles from './Cronometro.module.scss'
import { TempoParaSegundos } from '../../Common/Utils/Time'
import ITarefas from '../../types/ITarefa'

interface Props {
  selecionado: ITarefas | undefined
  finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props ) {

  const [tempo, setTempo] = useState<number>()

  useEffect(() =>{
    if(selecionado?.tempo){
      setTempo(TempoParaSegundos(selecionado.tempo))
    }

  }, [selecionado])

  function regressiva (contador: number = 0){ // aqui se usa a recursividade
    setTimeout(() =>{
      if(contador > 0){
        setTempo(contador - 1)
        return regressiva(contador - 1)
      }
      finalizarTarefa()
    }, 1000)
  }



  
  return (
    <div className={styles.cronometro}>
        <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
        
        <div className={styles.relogioWrapper}>
            <Relogio tempo={tempo}/>
        </div>
        <Botao onClick={() => regressiva(tempo)}>
            Começar
        </Botao>
    </div>
  )
}
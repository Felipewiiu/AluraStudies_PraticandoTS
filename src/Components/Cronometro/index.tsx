import React from 'react'
import Botao from '../Botao'
import Relogio from './Relogio'
import styles from './Cronometro.module.scss'
import { TempoParaSegundos } from '../../Common/Utils/Time'

export default function Cronometro() {

  console.log('conversao: ', TempoParaSegundos('01:01:01'))
  return (
    <div className={styles.cronometro}>
        <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={styles.relogioWrapper}>
            <Relogio/>
        </div>
        <Botao>
            Começar
        </Botao>
    </div>
  )
}

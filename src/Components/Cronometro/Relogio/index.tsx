
import styles from './Relogio.module.scss'

interface Props {
  tempo: number | undefined
}

export default function Relogio({tempo = 0}: Props) {
  const minutos = Math.floor(tempo / 60)
  const segundos = tempo % 60
  const [minutosDezena, minutosUnidade] = String(minutos).padStart(2, '0') // aqui foi usado a desetruturação do array de string
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0')
  return (
   <>
    <span className={styles.relogioNumero}>{minutosDezena}</span>
    <span className={styles.relogioNumero}>{minutosUnidade}</span>
    <span className={styles.relogioDivisao}>:</span>
    <span className={styles.relogioNumero}>{segundoDezena}</span>
    <span className={styles.relogioNumero}>{segundoUnidade}</span>
   </>
  )
}

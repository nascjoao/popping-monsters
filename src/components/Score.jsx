import styles from '../styles/Score.module.css'

export default function Score({children}) {
  return (
    <div className={styles.score}>
      <p>{children}</p>
      <span aria-hidden="true" className={styles.stroke}>{children}</span>
      <span aria-hidden="true" className={styles.shadow}>{children}</span>
    </div>
  )
}

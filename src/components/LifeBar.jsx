import styles from '../styles/LifeBar.module.css'

export default function LifeBar({ consumedValue }) {
  let width = 100 - (consumedValue * 10);
  if (width < 0) width = 0;

  return (
    <div className={styles.lifeBar}>
      <div className={styles.progress} style={{ width: `${width}%` }}></div>
    </div>
  )
}

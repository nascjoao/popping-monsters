import styles from '../styles/Text.module.css'

export default function Text({children, accent, fontSize}) {
  return (
    <div className={ accent ? styles.accentText : styles.text }>
      <p style={{
        fontSize: fontSize || '1rem'
      }}>{children}</p>
      { accent && (
        <span aria-hidden="true" className={styles.stroke} style={{
          fontSize: fontSize || '1rem'
        }}>{children}</span>
      ) }
      <span aria-hidden="true" className={styles.shadow} style={{
        fontSize: fontSize || '1rem'
      }}>{children}</span>
    </div>
  )
}

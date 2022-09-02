import Link from 'next/link'
import styles from '../styles/Button.module.css'

export default function Button({href, children}) {
  return (
    <div className={styles.button}>
      <p>{children}</p>
      <Link href={href}>{children}</Link>
    </div>
  )
}

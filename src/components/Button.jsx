import Link from 'next/link'
import styles from '../styles/Button.module.css'

export default function Button({href, children, fontSize, ...props}) {
  return (
    <div className={styles.button} {...props}>
      <p style={{ fontSize: fontSize || '1.375rem' }}>{children}</p>
      { href ? (
        <Link href={href}>
          <a style={{ fontSize: fontSize || '1.375rem' }}>
            {children}
          </a>
        </Link>
      ) : (
        <a style={{ fontSize: fontSize || '1.375rem' }}>
          {children}
        </a>
      ) }
    </div>
  )
}

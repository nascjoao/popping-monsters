import Link from "next/link"
import Button from "../components/Button"
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <main className={styles.home}>
      <header className={styles.header}>
        <div className={styles.brand}>
            <img src="./images/monster_2.gif" />
            <img src="./images/logo.png" alt="Popping Monsters" />
        </div>
        <Button href="/play" fontSize="3rem">Jogar</Button>
        <span>desenvolvido com diversão<br /> por <a href="https://joaonasc.dev" target="_blank">João Nasc</a></span>
      </header>
      <div className={styles.bestScore}></div>

      <div className="install-app">
          <img src="./images/icons/icon-192.png" />
          <p>Adicione o app à tela inicial para jogar.</p>
      </div>
    </main>
  )
}

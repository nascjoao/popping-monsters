import styles from '../styles/GameOver.module.css'
import Text from './Text'
import Button from './Button'
import { useEffect, useState } from 'react'

export default function GameOver({ score, restartGame }) {
  const [newBest, setNewBest] = useState(false)
  const best = localStorage.getItem('best')
  
  useEffect(() => {
    console.log(best);
    if (!best || score > best) {
      setNewBest(true)
      localStorage.setItem('best', score)
    }
  }, [score])

  return (
    <div className={styles.gameOver}>
      <img src="./images/gameover.png" alt="Game Over" />
      <div className={styles.result}>
        <div className={styles.best}>
          <img src="./images/medal/star.png" alt="Estrela" width={ newBest ? '70rem' : '50rem' } />
          <Text fontSize={ newBest ? '2rem' : '1rem' }>
            { newBest ? 'Novo melhor!' : `Melhor pontuação: ${best}` }
          </Text>
        </div>
        <div className={styles.score}>
          { score ? (
            <>
              <Text fontSize="2rem">Você fez</Text>
              <Text accent fontSize="2rem">{score}</Text>
              <Text fontSize="2rem">{ score > 1 ? 'pontos' : 'ponto' }</Text>
            </>
          ) : (
            <Text fontSize="2rem">Você não fez pontos</Text>
          ) }
        </div>
        <div className={styles.buttons}>
          <Button onClick={restartGame}>Jogar novamente</Button>
          <Button href="/" fontSize="0.75rem">Voltar para o início</Button>
        </div>
      </div>
    </div>
  )
}

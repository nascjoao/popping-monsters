import React, { useEffect, useState } from 'react'
import useMonsters from '../hooks/useMonsters'
import styles from '../styles/game.module.css'

export default function Play() {
  const {
    monsters,
    spawnMonsters,
    hitMonster,
    survivingMonsters,
    killedMonsters,
    spawningMonsters
  } = useMonsters()
  const [gameOver, setGameOver] = useState(false)
  
  useEffect(() => {
    if (!gameOver) {
      spawnMonsters(1200)
    }
  }, [spawningMonsters, gameOver])

  useEffect(() => {
    if (survivingMonsters.length === 10) setGameOver(true)
  }, [survivingMonsters])

  if (gameOver) return (
    <h1>Game Over</h1>
  )

  return (
    <div className={styles.game}>
      <div className={styles.score}>
        <div>Pontuação: {killedMonsters.length}</div>
        <div>Monstros sobreviventes: {survivingMonsters.length}</div>
      </div>
      { monsters.map((monster) => (
        <img key={monster.id} src={monster.src} alt="monster" style={{
          position: 'absolute',
          top: `${monster.y}px`,
          left: `${monster.x}px`,
          width: '3rem',
          zIndex: '2'
        }}
        onMouseOver={() => hitMonster(monster.id)}
        />
      )) }
    </div>
  )
}

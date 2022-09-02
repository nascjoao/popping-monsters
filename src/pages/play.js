import React, { useEffect, useState } from 'react'
import LifeBar from '../components/LifeBar'
import Score from '../components/Score'
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
      const reachedLimit = 1200 - (spawningMonsters.length * 15) < 300
      spawnMonsters(reachedLimit ? 300 : 1200 - (spawningMonsters.length * 15))
    }
  }, [spawningMonsters, gameOver])

  useEffect(() => {
    if (survivingMonsters.length === 10) {
      setTimeout(() => {
        setGameOver(true)
      }, 1000)
    }
  }, [survivingMonsters])

  if (gameOver) return (
    <h1>Game Over</h1>
  )

  return (
    <div className={styles.game}>
      <div className={styles.hit} style={{
        opacity: 0 + (survivingMonsters.length / 9) 
      }}></div>
      <div className={styles.score}>
        <Score>{killedMonsters.length}</Score>
        <LifeBar consumedValue={survivingMonsters.length} />
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

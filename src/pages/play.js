import React, { useEffect } from 'react'
import useMonsters from '../hooks/useMonsters'
import styles from '../styles/game.module.css'

export default function Play() {
  const { monsters, spawnMonsters, hitMonster, survivingMonsters, killedMonsters } = useMonsters()

  useEffect(() => {
    spawnMonsters(1200, 5)
  }, [])

  return (
    <>
      <div className={styles.score}>
        <div>Pontuação: {killedMonsters.length}</div>
        <div>Monstros sobreviventes: {survivingMonsters.length}</div>
      </div>
      { monsters.map((monster) => (
        <img key={monster.id} src={monster.src} alt="monster" style={{
          position: 'absolute',
          top: `${monster.y}px`,
          left: `${monster.x}px`,
          width: '4rem',
          zIndex: '2'
        }}
        onMouseOver={() => hitMonster(monster.id)}
        />
      )) }
    </>
  )
}

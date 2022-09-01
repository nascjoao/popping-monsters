import React, { useEffect } from 'react'
import useMonsters from '../hooks/useMonsters'

export default function Play() {
  const { monsters, spawnMonsters, hitMonster, survivingMonsters, killedMonsters } = useMonsters()

  useEffect(() => {
    spawnMonsters(1200, 5)
  }, [])

  return (
    <>
      <h1>Monstros eliminados: {killedMonsters.length}</h1>
      <h1>Monstros sobreviventes: {survivingMonsters.length}</h1>
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

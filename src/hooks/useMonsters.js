import { useEffect, useState } from "react";
import { v4 as generateUuid } from 'uuid'

export default function useMonsters() {
  const [monsters, setMonsters] = useState([])
  const [killedMonsters, setKilledMonsters] = useState([])
  const [survivorMonster, setSurvivorMonster] = useState({})
  const [survivingMonsters, setSurvivingMonsters] = useState([])

  useEffect(() => {
    if (survivorMonster.id) {
      const foundKilledMonster = killedMonsters.find((monster) => monster.id === survivorMonster.id);
      if (!foundKilledMonster) {
        setSurvivingMonsters((current) => [...current, survivorMonster])
      }
      setSurvivorMonster({})
    }
  }, [survivorMonster])

  function spawnMonsters(interval, limit) {
    const intervalToSpawn = setInterval(() => {
      setMonsters((current) => {
        if (current.length === limit) {
          clearInterval(intervalToSpawn)
          return current
        }

        const newMonster = {
          id: generateUuid(),
          x: Math.abs(Math.floor(Math.random() * window.innerWidth - 100)),
          y: Math.abs(Math.floor(Math.random() * window.innerHeight - 100)),
          src: '/images/monster.gif',
        }

        setTimeout(() => {
          setMonsters((current) => current.filter((monster) => monster.id !== newMonster.id))
          setSurvivorMonster(newMonster)
        }, 2000)

        return [
          ...current,
          newMonster
        ]
      })
    }, interval)

  }

  function hitMonster(id) {
    if (!killedMonsters.find((monster) => monster.id === id)) {
      let foundMonster = null;
      const monstersUpdated = monsters.map((monster) => {
        if (monster.id === id) {
          const updatedMonster = {
            ...monster,
            src: '/images/blood.gif',
          }
  
          foundMonster = updatedMonster;
  
          return updatedMonster;
        }
        return monster;
      })
      setMonsters(monstersUpdated)
      setKilledMonsters((current) => [...current, foundMonster])
  
      setTimeout(() => {
        if (foundMonster) {
          setMonsters((current) => current.filter((monster) => monster.id !== foundMonster.id))
        }
      }, 500)
    }
  }

  return {
    monsters,
    spawnMonsters,
    hitMonster,
    survivingMonsters,
    killedMonsters
  }
}

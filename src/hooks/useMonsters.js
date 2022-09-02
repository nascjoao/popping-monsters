import { useEffect, useState } from "react";
import { v4 as generateUuid } from 'uuid'

export default function useMonsters() {
  const [monsters, setMonsters] = useState([])
  const [killedMonsters, setKilledMonsters] = useState([])
  const [survivorMonster, setSurvivorMonster] = useState({})
  const [survivingMonsters, setSurvivingMonsters] = useState([])
  const [spawningMonsters, setSpawningMonsters] = useState([])

  useEffect(() => {
    if (survivorMonster.id) {
      const foundKilledMonster = killedMonsters.find((monster) => monster.id === survivorMonster.id);
      if (!foundKilledMonster) {
        setSurvivingMonsters((current) => [...current, survivorMonster])
      }
      setSurvivorMonster({})
    }
  }, [survivorMonster])

  function spawnMonsters(interval) {
    setTimeout(() => {
      const newMonster = {
        id: generateUuid(),
        x: Math.floor(Math.random() * ((window.innerWidth - 100) - 1) + 1),
        y: Math.floor(Math.random() * ((window.innerHeight - 100) - 100) + 100),
        src: '/images/monster_2.gif',
      }
      setMonsters((current) => {
        setTimeout(() => {
          setMonsters((current) => current.filter((monster) => monster.id !== newMonster.id))
          setSurvivorMonster(newMonster)
        }, 2000)

        return [
          ...current,
          newMonster
        ]
      })
      setSpawningMonsters((current) => [...current, newMonster])
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
    killedMonsters,
    spawningMonsters
  }
}

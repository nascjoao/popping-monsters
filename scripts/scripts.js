const monsters = ['./images/monster.gif']

const scoreElement = document.getElementById('score')
let score = 0
scoreElement.style.position = 'absolute'
scoreElement.style.top = '10px'
scoreElement.style.left = '10px'
scoreElement.style.color = '#156E09'
scoreElement.append(`Pontuação: ${score}`)

const survivorsElement = document.getElementById('survivors')
survivorsElement.style.position = 'absolute'
let storageSurvivors = []

let spawn = 300

setInterval(() => {
    const monster = document.createElement('img')
    monster.src = monsters[parseInt(Math.random() * monsters.length)]
    monster.classList.add('monster')
    monster.style.position = 'absolute'
    monster.style.top = parseInt((Math.random() * window.screen.height) / 1.4) + 'px'
    monster.style.left = parseInt((Math.random() * window.screen.width) / 1.4) + 'px'
    monster.style.cursor = 'crosshair'
    monster.style.opacity = 1
    monster.style.transition = '1000ms'

    const survivors = document.querySelectorAll('.survivor')
    survivors.forEach(survivor => {
        if (storageSurvivors.length < 10) storageSurvivors.push(survivor)
    })

    if (storageSurvivors.length < 10) {
        document.body.appendChild(monster)
    }

    setTimeout(() => {
        monster.classList.add('survivor')
        monster.classList.remove('monster')
        monster.style.display = 'none'
    }, 3000)

    monster.addEventListener('mouseenter', () => {
        const audio = document.createElement('audio')
        audio.src = '../sounds/splat.mp3'
        audio.volume = .5
        audio.play()

        monster.src = './images/blood.gif'

        score = score + 1
        scoreElement.innerHTML = `Pontuação: ${score}`
        monster.style.opacity = 0
        setTimeout(() => {
            monster.remove()
        }, 2000)
    })
    

    survivorsElement.innerHTML = `Monstros perdidos: ${storageSurvivors.length}`
    survivorsElement.style.color = '#156E09'
    
    if (storageSurvivors.length > 0) {
        survivorsElement.style.color = 'red'
        survivorsElement.style.color = '#FF3318'
    } 

    if (storageSurvivors.length == 10) {
        scoreElement.innerHTML = 'Fim de jogo'
        const monsters = document.querySelectorAll('.monster')
        survivorsElement.style.display = 'none'
        monsters.forEach(monster => {
            monster.remove()
        })

        if (!document.querySelector('.final-result')) {
            const bestScore = document.createElement('h3')
            const star = document.createElement('i')
            star.classList.add('material-icons')
            star.append('military_tech')
            star.style.color = '#0054D1'
            bestScore.style.color = '#0054D1'
            
            const finalResult = document.createElement('h1')
            finalResult.append(`Você fez ${score} pontos. Recomeçar?`)
            finalResult.classList.add('final-result')
            finalResult.style.cursor = 'pointer'
            finalResult.style.color = '#156E09'

            const back = document.createElement('a')
            back.href = './index.html'
            const leave = document.createElement('button')
            back.appendChild(leave)
            leave.classList.add('secondary')
            leave.style.marginTop = '10px'
            leave.append('Sair')


            const oldScore = localStorage.getItem('best-score')
            
            if (!localStorage.getItem('best-score')) {
                localStorage.setItem('best-score', score)
            } 
            else {
                if (score > localStorage.getItem('best-score')) {
                    localStorage.setItem('best-score', score)
                }
            }

            if (localStorage.getItem('best-score') && localStorage.getItem('best-score') != 0) {
                document.body.appendChild(star)
                if (score > oldScore) {
                    bestScore.append(`NOVO MELHOR: ${localStorage.getItem('best-score')}`)
                    star.style.color = '##B900D1'
                    bestScore.style.color = '##B900D1'
                } else {
                    bestScore.append(`Melhor pontuação: ${localStorage.getItem('best-score')}`)
                }
                document.body.appendChild(bestScore)
            }
            document.body.appendChild(finalResult)
            document.body.appendChild(back)
            
            finalResult.addEventListener('click', () => {
                location.reload()
            })
        }
    } 

}, spawn)
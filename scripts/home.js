const bestScore = document.querySelector('.best-score')
const star = document.createElement('i')
star.classList.add('material-icons')
star.append('military_tech')
star.style.color = '#0054D1'
bestScore.style.color = '#0054D1'
if (localStorage.getItem('best-score') && localStorage.getItem('best-score') != 0) {
    bestScore.appendChild(star)
    bestScore.append(`Melhor pontuação: ${localStorage.getItem('best-score')}`)
}

// BACKGROUND ANIMATION
const bg = document.querySelector('body')
let bgX = 0
setInterval(()=> {
    if (window.screen.width <= 812) bgX = bgX - 2
    else bgX = bgX - .1
    bg.style.backgroundPositionX = bgX + '%'
}, 100)
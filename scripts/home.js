const bestScore = document.querySelector('.best-score')
const star = document.createElement('i')
star.classList.add('material-icons')
star.append('military_tech')
star.style.color = '#0054D1'
bestScore.style.color = '#0054D1'
bestScore.appendChild(star)
bestScore.append(`Melhor pontuação: ${localStorage.getItem('best-score')}`)
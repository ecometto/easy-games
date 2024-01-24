// DOM ELEMENTS 
const ballContainer = document.querySelector('.ball-container')
const ball = document.querySelector('.ball')
var ballTimerElement = document.getElementById('ballTimer')
var ballClicksElement = document.getElementById('ballClicks')

// VARIABLES 
var startRandom;
var clicks = 0
var limiteTime = 30




// ADD EVENT LISTENERS 
ball.addEventListener('click', () => {
    if (clicks === 0) {
        let left = Math.random() * (ballContainer.clientWidth - 50)
        let top = Math.random() * (500 - 50)
        ball.style.marginLeft = `${left}px`
        ball.style.marginTop = `${top}px`
        randomPosition()
        startBallTimer()
        clicks = 1
        ballClicksElement.innerText = clicks
    }
    else {
        clearInterval(startRandom)
        let left = Math.random() * (ballContainer.clientWidth - 50)
        let top = Math.random() * (500 - 50)
        ball.style.marginLeft = `${left}px`
        ball.style.marginTop = `${top}px`
        randomPosition()
        clicks = clicks + 1
        ballClicksElement.innerText = clicks
        // console.log(clicks);
    }

})



function randomPosition() {
    startRandom = setInterval(() => {
        let left = Math.random() * (ballContainer.clientWidth - 50)
        let top = Math.random() * (500 - 50)
        ball.style.marginLeft = `${left}px`
        ball.style.marginTop = `${top}px`

    }, 1000)
}

function startBallTimer() {
    ballTimer = setInterval(() => {
        seg = seg + 0.01
        ballTimerElement.innerText = seg.toFixed(2)
        if (seg >= limiteTime) {
            clearInterval(startRandom)
            clearInterval(ballTimer)
            alert('Juego finalizado. Hiciste: \n' + clicks)
            clicks = 0
            seg = 0
            ballClicksElement.innerText = clicks
            ballTimerElement.innerText = seg.toFixed(2)
            ball.style.marginLeft = `50%`
            ball.style.marginTop = `250px`

        }
    }, 10)

}



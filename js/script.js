//Puxar Elementos
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')

document.addEventListener('keydown', jump)

// Chama a Função Loop 
loop();

// Função do Pulo do Mario
function jump() {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

// Função do Pulo do Mario
function loop() {
    setInterval(() => {

        const pipePosition = pipe.offsetLeft
        const cloudsPosition = clouds.offsetLeft
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

        if (pipePosition <= 85 && pipePosition > 0 && marioPosition < 75) {

            // Código para Parar as Animações
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`

            clouds.style.animation = 'none'
            clouds.style.left = `${cloudsPosition}px`

            mario.src = './images/game-over.png'
            mario.style.width = '50px'
            mario.style.marginLeft = '30px'

            clearInterval(loop)
        }

    }, 10)
}

// Chama a Função Loop 
loop();
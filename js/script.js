//Puxar Elementos
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

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


function loop() {
    setInterval(() => {
        const pipePosition = pipe.offsetLeft
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

        if (pipePosition <= 85 && pipePosition > 0 && marioPosition < 75) {

            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`
        }

    }, 10)
}

// Chama a Função Loop 
loop();
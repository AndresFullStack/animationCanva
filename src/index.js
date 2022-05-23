const frame = requestAnimationFrame
let numero = 0
let animation
let ubix = 0

const lienzo = document.querySelector('#lienzo')
const ctx = lienzo.getContext('2d')
console.log(ctx)

const sprite = new Image()
sprite.src = './img/sonic-sprite.jpg'

// sprite.onload = () => {
//     ctx.drawImage(sprite, 450, 0, 100, 100, 0, 100, 100, 100)
// }

const tiempo = () => {
    numero = (numero >= 600) ? 0 : numero += 20
    for (let index = 0; index < numero; index += 90) {
        if (numero >= index) ubix = index
    }
    ctx.clearRect(0, 0, lienzo.width, lienzo.height)
    ctx.drawImage(sprite, ubix, 0, 100, 100, 100, 103, 100, 100)
    animation = frame(tiempo)
}

tiempo()
setTimeout(() => {
    cancelAnimationFrame(animation)
}, 4000)
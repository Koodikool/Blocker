var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
canvas.width = document.body.offsetWidth
canvas.height = 500

var playerX = 0
var playerY = 0
var playerSpeed = 3
var blocks = []

setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "rgb(50, 210, 0)";
    ctx.fillRect(playerX, playerY, 20, 20);
}, 1000 / 25)

document.onkeydown = function(event) {
    var key = event.key
    if (key === 'ArrowDown') {
        playerY += playerSpeed
    }
    if (key === 'ArrowUp') {
        playerY -= playerSpeed
    }
    if (key === 'ArrowRight') {
        playerX += playerSpeed
    }
    if (key === 'ArrowLeft') {
        playerX -= playerSpeed
    }
    if (key === ' ') {
        var newBlock = {locationX: playerX, locationY: playerY}
        blocks.push(newBlock)
    }
}

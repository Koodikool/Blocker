var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
canvas.width = document.body.offsetWidth
canvas.height = 500

var playerX = 0
setInterval(function () {
    ctx.fillStyle = "rgb(50, 210, 0)";
    ctx.fillRect(playerX, 50, 20, 20);
    playerX += 1
}, 1000 / 25)

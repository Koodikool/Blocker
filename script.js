var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
canvas.width = document.body.offsetWidth
canvas.height = 500

var playerX = 0
var playerY = 0
var playerSpeed = 3
var blocks = []
var serverData = []
var myName = "Krister"

setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const item of serverData) {
        ctx.fillStyle = "rgb(135, 30, 30)";
        if (item.type === 'player') {
            ctx.fillStyle = "blue";
        }
        ctx.fillRect(item.x, item.y, 20, 20);
    }

    ctx.fillStyle = "brown";
    for (const block of blocks) {
        ctx.fillRect(block.locationX, block.locationY, 20, 20);
    }

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

setInterval(async function(){
    serverData = await fetchGET('https://app.koodikool.ee/sdb/blockers')
    fetchPOST('https://app.koodikool.ee/sdb/blockers', {type: 'player', x: playerX, y: playerY, name: myName})
}, 2000)

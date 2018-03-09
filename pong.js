"use strict";

var c = document.getElementById("game");
var ctx = c.getContext("2d");
ctx.rect(20, 20, 700, 500);
ctx.fillStyle = "#111111";

var c = document.getElementById("game");
var ctx = c.getContext("2d");
const HEIGHT = c.height;
const WIDTH = c.width;

var bg = new Background();

var j1 = new Rectangle("white", 20, (HEIGHT - 60) / 2, 20, 60);
var j2 = new Rectangle("blue", WIDTH - 20 * 2, (HEIGHT - 60) / 2, 20, 60);
var ball = new Ball("red", 50, 50, 20, 20);

function refresh(delta) {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    bg.draw();
    ball.move(delta);
    ball.draw();
    j1.draw();
    j2.draw();
    requestAnimationFrame(refresh);
}
requestAnimationFrame(refresh);

document.body.addEventListener('keydown', function (e) {
    if (e.keyCode == 38) // up
    {
			this.y += 5;
    } else if (e.keyCode == 40) // down
    {
			this.y -= 5;

    }
});
/*
document.body.addEventListener('keyup', function(e) {
    msg.textContent = 'keyup:' + e.keyCode;
});

document.body.addEventListener('keypress', function(e) {
    msg.textContent += 'keypress:' + e.keyCode;
});*/
/*

function draw()
{
ctx.rect(20,20,700,500);
ctx.fillStyle="#111111";

>>>>>>> 68b0b9dc90a98a6b07d65300237bd8b00193fde8
ctx.strokeStyle="green";

ctx.strokeStyle="lime";

ctx.fill();
ctx.lineWidth="5";
ctx.stroke();

var ctx = document.getElementById('game').getContext('2d');
var lineCap = ['round'];

ctx.strokeStyle = 'blue';
for (var i = 0; i < lineCap.length; i++)
{
    ctx.lineWidth = 10;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(30 + i * 25, 30);
    ctx.lineTo(30 + i * 25, 100);
    ctx.stroke();
}
ctx.strokeStyle = 'violet';
for (var i = 0; i < lineCap.length; i++)
{
    ctx.lineWidth = 10;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(710 + i * 25, 30);
    ctx.lineTo(710 + i * 25, 100);
    ctx.stroke();
}


var ctx = document.getElementById('game').getContext("2d");
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(75, 75, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
}

var msg = document.getElementById('state-msg');
<<<<<<< HEAD
document.body.addEventListener('keydown', function(e) {
    msg.textContent = 'keydown:' + e.keyCode;
});

document.body.addEventListener('keyup', function(e) {
    msg.textContent = 'keyup:' + e.keyCode;
});

document.body.addEventListener('keypress', function(e) {
    msg.textContent += 'keypress:' + e.keyCode;
});

=======
*/

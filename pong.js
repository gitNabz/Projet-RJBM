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

document.body.addEventListener('keydown', function (e)
{
    if (e.keyCode == 38) // up
    {
        j2.moveUp();
    }
    else if (e.keyCode == 40) // down
    {
        j2.moveDown();
    }
    if (e.keyCode == 65) // up
    {
        j1.moveUp();
    }
    else if (e.keyCode == 81) // down
    {
        j1.moveDown();
    }
});

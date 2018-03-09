"use strict";

var c=document.getElementById("game");
var ctx=c.getContext("2d");
ctx.rect(20,20,700,500);
ctx.fillStyle="#111111";
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
ctx.fillStyle = "red"
ctx.beginPath();
ctx.arc(75, 75, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();

var msg = document.getElementById('state-msg');
document.body.addEventListener('keydown', function(e) {
    msg.textContent = 'keydown:' + e.keyCode;
});

document.body.addEventListener('keyup', function(e) {
    msg.textContent = 'keyup:' + e.keyCode;
});

document.body.addEventListener('keypress', function(e) {
    msg.textContent += 'keypress:' + e.keyCode;
});
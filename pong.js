"use strict";

var c=document.getElementById("game");
var ctx=c.getContext("2d");
ctx.rect(20,20,700,500);
ctx.fillStyle="#111111";
ctx.strokeStyle="green";
ctx.fill();
ctx.lineWidth="5";
ctx.lineCap = "round";
ctx.stroke();
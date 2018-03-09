class Ball
{
	constructor(color, x, y, radius, speed)
	{
		this.speed = speed;
		this.delta = 0;
		this.color = color;
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.direction = Math.PI;
		document.body.onclick = () =>
		{
			this.direction += Math.PI / 32;
		};
	}
	draw()
	{
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fill();
		this.drawDirection();
	}
	drawDirection()
	{
		var r = this.radius;
		var x = r * Math.cos(this.direction);
		var y = r * Math.sin(this.direction);
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x + x, this.y + y);
		ctx.stroke();
		//ctx.arc(this.x, this.y, this.radius, this.direction - Math.PI / 8, this.direction + Math.PI / 8);
		//ctx.stroke();
	}
	move(delta)
	{
		var diff = delta - this.delta;
		var r = this.speed * diff / 100;
		var x = r * Math.cos(this.direction);
		var y = r * Math.sin(this.direction);
		this.x += x;
		this.y += y;

		console.log(j1.collision("droite"));
		if (this.x + this.radius > WIDTH)
		{
			//depasse le cadran a droite
			// +1 point pour J1
			this.x = (WIDTH - this.radius) / 2;
			this.y = (HEIGHT - this.radius) / 2;
		}
		else if (this.y - this.radius / 2 < 25)
		{
			this.direction += Math.PI / 2;
		}
		else if (this.y + this.radius / 2 > HEIGHT - 25)
		{
			this.direction += Math.PI / 2;
		}
		else if (j1.collision("droite"))
		{
			this.direction = 0;
		}
		else if (j2.collision("gauche"))
		{
			this.direction = Math.PI;
		}
		//this.direction += Math.PI / 16 * diff / 100;
		this.delta = delta;	
	}
}
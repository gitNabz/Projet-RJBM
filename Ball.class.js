class Ball
{
	constructor(color, x, y, radius)
	{
		this.speed = 50;
		this.delta = 0;
		this.color = color;
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.direction = 0;
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
		if (this.x + this.radius > WIDTH)
			this.direction = Math.random() * Math.PI * 2;
		else if (this.x - this.radius < 0)
			this.direction = Math.random() * Math.PI * 2;
		else if (this.y + this.radius > HEIGHT)
			this.direction = Math.random() * Math.PI * 2;
		else if (this.y - this.radius < 0)
			this.direction = Math.random() * Math.PI * 2;
		//this.direction += Math.PI / 16 * diff / 100;
		this.delta = delta;
	}
}
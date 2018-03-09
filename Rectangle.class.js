class Rectangle
{
	constructor(color, x, y, width, height)
	{
		this.color = color;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.draw();
	}
	draw()
	{
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
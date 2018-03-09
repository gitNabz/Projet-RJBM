class Background
{
	constructor()
	{
		this.background = new Rectangle("tomato", 0, 0, WIDTH, HEIGHT);
		this.top = new Rectangle("white", 0, 5, WIDTH, 20);
		this.bottom = new Rectangle("white", 0, HEIGHT - 25, WIDTH, 20);
		this.middle = new Rectangle("white", (WIDTH - 0) / 2, , 20, HEIGHT);
		this.draw();
	}
	draw()
	{
		this.background.draw();
		this.top.draw();
		this.bottom.draw();
		this.middle.draw();
	}
}
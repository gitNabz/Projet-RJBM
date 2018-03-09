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
	collision(position)
	{
		var x_ball = ball.x;
		var y_ball = ball.y;
		if (position == "droite")
		{
			x_ball = x_ball - this.width;
			var x1_rectangle = this.x + this.width;
			var y1_rectangle = this.y;
			var x2_rectangle = this.x + this.width;
			var y2_rectangle = this.y + this.height;
			if (x1_rectangle > x_ball && x2_rectangle > x_ball &&
				y1_rectangle < y_ball && y2_rectangle > y_ball)
			{
				return true;
			}
		}
		if (position == "gauche")
		{
			x_ball = x_ball + this.width;
			var x1_rectangle = this.x;
			var y1_rectangle = this.y;
			var x2_rectangle = this.x;
			var y2_rectangle = this.y + this.height;
			if (x1_rectangle < x_ball && x2_rectangle < x_ball &&
				y1_rectangle < y_ball && y2_rectangle > y_ball)
			{
				return true;
			}
		}
		// x;y			x+with;y
		// x;y+height	x+with;y+height
	}
    moveUp()
    {
        if (this.y > 25)
            this.y -= 10;
    }
    moveDown()
    {
        if (this.y < 715)
            this.y += 10;
    }
}
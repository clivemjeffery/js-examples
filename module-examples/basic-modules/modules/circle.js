const name = 'circle';

function draw(ctx, radius, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);
  ctx.stroke();

  return {
    radius: radius,
    x: x,
    y: y,
    color: color
  };
}

export { name, draw };
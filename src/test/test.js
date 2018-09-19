function getLine(x1, y1, x2, y2) {
  let dx = x2 - x1
  let dy = y2 - y1
  let points = [[x1, y1]]
  let xstep = x2 > x1 ? 1 : -1
  let ystep = y2 > y1 ? 1 : -1
  if (Math.abs(dy) <= Math.abs(dx)) {
    console.log('k<=1')
    let p = -dx
    for (let i = 0; i < Math.abs(dx) + 1; i++) {
      console.log(p, x1, y1)
      if (p < 0) {
        p = p + 2 * dy
      } else {
        p = p + 2 * dy - 2 * dx
      }
      if (p >= 0)
        y1 += ystep
      x1 += xstep
      points.push([x1, y1])
    }
  } else {
    console.log('k>1')
    let p = -dy
    for (let i = 0; i < Math.abs(dy) + 1; i++) {
      console.log(p, x1, y1)
      if (p < 0) {
        p = p + 2 * dy
      } else {
        p = p + 2 * dy - 2 * dx
      }
      if (p >= 0)
        x1 += xstep
      y1 += ystep
      points.push([x1, y1])
    }
  }

  return points
}

function getLine2(x0, y0, x1, y1) {
  dx = Math.abs(x1 - x0)
  sx = x0 < x1 ? 1 : -1
  dy = Math.abs(y1 - y0)
  sy = y0 < y1 ? 1 : -1
  err = (dx > dy ? dx : -dy) / 2
  points = [[x0, y0]]
  for (; ;) {
    if (x0 == x1 && y0 == y1) break;
    e2 = err;
    console.log(e2, err, x0, y0)
    if (e2 > -dx) {
      err -= dy;
      x0 += sx;
    }
    if (e2 <= dy) {
      err += dx;
      y0 += sy;
    }
    points.push([x0, y0])
  }
  return points
}

// p = getLine(-20, -30, 8, -19)
p2 = getLine2(-20, -30, 8, -19)
// console.table(p, p2)
console.log(p2)

// for(let i of p)
//   console.log(i)

// p = getLine(10, 20, 30, 25)
// p = getLine(-25, 20, -10, 10)
// p = getLine2(20, -25, 10, -10)
// for (let i of p)
//   console.log(i)



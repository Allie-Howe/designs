import P5 from 'p5';

let distance = 0
let rotation = 0
let count = 0
let range = 0
let len = 0
const numTri = 6, maxDist = 150;

const col1 = 0;
const col2 = 255;

// TODO: I don't like how this looks on mobile. Also the vars should be responsive
export const rotatingTriangles = (p5: P5) => {
  const draw = () => {
    p5.rectMode(p5.CENTER);
    p5.background(col1);
    p5.fill(col2);
    p5.translate(p5.width/2, p5.height/2);
    p5.rotate(rotation);

    len = bounce();
    for (let i = 0; i < numTri; i++) {
      p5.push();
      p5.rotate(i*(p5.TWO_PI/numTri));
      p5.translate(0, len);
      p5.rotate(5*rotation);
      p5.triangle(0, 0, 100, 100, -100, 0);
      p5.pop();
    }

    rotation+=p5.HALF_PI/200;
  }

  const bounce = () => {
    distance = count + (maxDist - (count++ % maxDist));

    if ((distance/maxDist)%2 == 0) return --range;
    else return ++range;
  }

  return draw;
}

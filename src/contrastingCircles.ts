import P5 from 'p5';

let count = 0;
const col1 = 0;
const col2 = 255;

export const contrastingCircles = (p5: P5) => {
  const drawArcs = (radius: number) => { //draws two quarter-circles
    p5.arc(0, 0, radius, radius, 0, p5.HALF_PI);
    p5.arc(0, 0, radius, radius, p5.PI, p5.HALF_PI+p5.PI);
  }

  const draw = () => {
    p5.background(col2);
    p5.translate(p5.width/2, p5.height/2);
    p5.strokeWeight(4);

    //draws black rectangle on left side of screen
    p5.fill(col1);
    p5.rectMode(p5.CORNERS)
    p5.rect(0, -p5.height, -p5.width/2, p5.height);
    p5.stroke(col2);

    const minSize = Math.min(p5.width, p5.height);

    //draws two sets of two quarter-circles, rotating in opposite directions
    p5.rotate(count);
    drawArcs(minSize);
    p5.noStroke();
    p5.fill(col2);
    p5.rotate(-2*count);
    drawArcs(minSize/2);

    count+=p5.QUARTER_PI/50;
  }

  return draw;
}

import P5 from 'p5';

let squareSize: number;
let timing: number;

const NUM_SQUARES = 10;

const col1 = 0;
const col2 = 255;
const speed = 0.0002;

export const checkers = (p5: P5) => {
  const draw = () => {
    p5.rectMode(p5.CENTER);
    const maxSize = Math.max(p5.width, p5.height);
    squareSize = maxSize/NUM_SQUARES;
    timing = (speed*p5.millis())%1;

    go(timing >= 0.5)
  }

  const go = (first: boolean) => {
    p5.fill(first ? col1 : col2);
    p5.background(first ? col2 : col1);

    for (let i = -1; i < NUM_SQUARES+2; i++) {
      for (let j = -1; j < NUM_SQUARES+2; j++) {
        p5.push();
        p5.translate(i*squareSize, j*squareSize);
        p5.rotate(timing*p5.PI);
        if ((i+j) % 2 == 0 && first) p5.rect(0, 0, squareSize, squareSize);
        if ((i+j) % 2 == 1 && !first) p5.rect(0, 0, squareSize, squareSize);
        p5.pop();
      }
    }
  }

  return draw;
}

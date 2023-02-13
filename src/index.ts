import P5 from 'p5'
import { love } from './love';
import { rotatingPlus } from './rotatingPlus';

let animIndex = 0;
const drawFnArray: ((p5: P5) => (() => void))[] = [
  love,
  rotatingPlus,
];

const sketch = (p5: P5) => {
  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight)
  }

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.frameRate(60)

    p5.rectMode(p5.CENTER)
    p5.ellipseMode(p5.CENTER);
    p5.noStroke();
  }

  p5.draw = () => drawFnArray[animIndex % drawFnArray.length](p5)();
  p5.mousePressed = () => animIndex++;
}

new P5(sketch)

import P5 from 'p5'
import { checkers } from './checkers';
import { circlesAndLines } from './circlesAndLines';
import { contrastingCircles } from './contrastingCircles';
import { love } from './love';
import { rotatingPlus } from './rotatingPlus';
import { rotatingTriangles } from './rotatingTriangles';

let animIndex = 0;
const drawFnArray: ((p5: P5) => (() => void))[] = [
  circlesAndLines,
  rotatingTriangles,
  contrastingCircles,
  love,
  rotatingPlus,
  checkers,
];

const sketch = (p5: P5) => {
  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight)
  }

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.frameRate(60)
    p5.pixelDensity(2)

    p5.rectMode(p5.CENTER)
    p5.ellipseMode(p5.CENTER);
    p5.noStroke();
  }

  p5.draw = () => drawFnArray[animIndex % drawFnArray.length](p5)();
}

window.addEventListener('click', () => {
  animIndex++;
});

new P5(sketch)

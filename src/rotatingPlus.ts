import P5 from 'p5';

const NUM_TILE_WIDTH = 10
const TIMING_SPEED = 0.0002;
const PLUS_THICKNESS = 8

const clrs: number[] = [0, 255]
let time = 0;
let rotation = 0;
let windowMin: number;
let tileSize: number;
export const rotatingPlus = (p5: P5) => {

  const draw = () => {
    p5.noStroke();
    p5.rectMode(p5.CENTER);
    p5.translate(tileSize/2, tileSize/2)

    windowMin = Math.max(p5.windowHeight, p5.windowWidth);
    windowMin = windowMin % 2 ? windowMin - 1 : windowMin;
    tileSize = windowMin/NUM_TILE_WIDTH;

    time = (TIMING_SPEED*p5.millis())%1;
    rotation = p5.map(time, 0, 1, -.5, .5)

    time > 0.5 ? doPlusses() : doSquares();
  }

  function doPlusses() {
    p5.background(clrs[0]);
    p5.fill(clrs[1]);

    doGrid(0, drawPlus);
  }

  function doSquares() {
    p5.background(clrs[1]);
    p5.fill(clrs[0]);

    doGrid(.5, drawSquare);
  }

  function doGrid(offset: number, drawItem: () => void) {
    for (let i = 0-offset; i < NUM_TILE_WIDTH; i++) {
      for (let j = 0-offset; j < NUM_TILE_WIDTH; j++) {
        p5.push();
        p5.translate(i*tileSize, j*tileSize)
        p5.rotate(p5.PI * time)
        drawItem();
        p5.pop();
      }
    }
  }

  function drawPlus() {
    p5.rect(0,0,tileSize/PLUS_THICKNESS, tileSize);
    p5.rect(0,0,tileSize, tileSize/PLUS_THICKNESS);
  }

  function drawSquare() {
    p5.square(0,0,tileSize*((PLUS_THICKNESS-1)/PLUS_THICKNESS));
  }
  return draw;
}

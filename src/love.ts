import P5 from 'p5';

const col1 = 0, col2 = 255
let back = col1, fore = col2;

const speed = 0.001;
let timing: number;
const smallRatio = 0.85

export const love = (p5: P5) => {
  const drawMain = () => p5.rect(0, 0, 1, 1);
  const drawLeft = () => p5.ellipse(-0.5, 0, 1, 1);
  const drawRight = () => p5.ellipse(0, -0.5, 1, 1);

  const drawHeart = () => {
    drawMain();
    drawLeft();
    drawRight();
  }

  const draw = () => {
    p5.translate(p5.width/2, p5.height/2);
    timing = speed * p5.millis();

    const scale = timing % 1 > smallRatio ? 1.25 : 1;
    const shouldHeartBeBlack = Math.round(timing + smallRatio-0.2) % 2;

    p5.rotate(p5.QUARTER_PI);
    p5.scale(scale*(p5.height/5));

    p5.fill(shouldHeartBeBlack ? fore : back);
    p5.background(shouldHeartBeBlack ? back : fore);

    drawHeart();
  }

  return draw;
}

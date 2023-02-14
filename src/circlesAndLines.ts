import P5 from 'p5';

let angle1 = 0;
let angle2 = Math.PI;

// TODO: Make this not horrific
export const circlesAndLines = (p5: P5) => {
  const drawCircleOutlines = (size: number, diagonalLength: number) => {
    p5.ellipse(-2*size, 0,size,size);
    p5.ellipse(2*size, 0,size,size);

    p5.ellipse(-size, diagonalLength,size,size);
    p5.ellipse(size, -diagonalLength,size,size);

    p5.ellipse(size, diagonalLength, size, size);
    p5.ellipse(-size,-diagonalLength, size, size);

  }

  const draw = () => {
    p5.translate(p5.width/2, p5.height/2);
    p5.strokeWeight(2);
    p5.stroke(255, 255, 255);
    p5.noFill();
    p5.background(0, 0, 0);

    const minSize = Math.min(p5.width, p5.height);

    const size = minSize/6;
    const radius = size/2;

    const diagonalLength = size*Math.sqrt(3);

    angle1 += 0.05;
    angle2 += 0.05;

    // drawCircleOutlines(size, diagonalLength);

    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2));

    p5.line(radius * p5.sin(angle2) - size, radius * p5.cos(angle2) + diagonalLength, radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);
    p5.line(radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength, radius * p5.sin(angle2) - size, radius * p5.cos(angle2) - diagonalLength);

    p5.line(radius * p5.sin(angle2) - size, radius * p5.cos(angle2) + diagonalLength, radius * p5.sin(angle2) -size, radius * p5.cos(angle2) - diagonalLength);
    p5.line(radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength, radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);

    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);
    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength);

    p5.line(radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2), radius * p5.sin(angle2) - size, radius * p5.cos(angle2) + diagonalLength);
    p5.line(radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2), radius * p5.sin(angle2) - size, radius * p5.cos(angle2) - diagonalLength);

    //Adjacents
    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle2) - size, radius * p5.cos(angle2) - diagonalLength);
    p5.line(radius * p5.sin(angle1) - 2*size, radius * p5.cos(angle1), radius * p5.sin(angle2) - size, radius * p5.cos(angle2) + diagonalLength);

    p5.line(radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2), radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);
    p5.line(radius * p5.sin(angle2) + 2*size, radius * p5.cos(angle2), radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength);

    p5.line(radius * p5.sin(angle2) -size, radius * p5.cos(angle2) + diagonalLength, radius * p5.sin(angle1) + size, radius * p5.cos(angle1) + diagonalLength);
    p5.line(radius * p5.sin(angle2) -size, radius * p5.cos(angle2) - diagonalLength, radius * p5.sin(angle1) + size, radius * p5.cos(angle1) - diagonalLength);
  }
return draw;
}

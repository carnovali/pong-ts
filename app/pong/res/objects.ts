export class Ball {
  public x: number;
  public y: number;
  public radius: number;
  public dx: number;
  public dy: number;

  constructor(canvas: HTMLCanvasElement) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.radius = 10;
    this.dx = 7;
    this.dy = 7;
  }
}

export class Paddle {
  public static height: number;
  public static width: number;
  public x: number;
  public y: number;
  public dy: number;

  constructor(canvas: HTMLCanvasElement, x: number = 0) {
    Paddle.height = 80;
    Paddle.width = 10;
    this.x = x;
    this.y = canvas.height / 2 - Paddle.height / 2;
    this.dy = 0;
  }
}

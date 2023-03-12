import { COLORS } from "../../model/colors"
import { Ball, Paddle } from "../res/objects"

export class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private ball: Ball;
  public leftPaddle: Paddle;
  public rightPaddle: Paddle;

  public whoScored: number;

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");

    this.ball = new Ball(this.canvas);
    this.leftPaddle = new Paddle(this.canvas);
    this.rightPaddle = new Paddle(
      this.canvas,
      this.canvas.width - Paddle.width
    );

    this.whoScored = 0;
  }

  private drawCanvas() {
    this.ctx.fillStyle = COLORS.BLACK;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private drawMiddle() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = COLORS.GRAY;
    this.ctx.lineWidth = 10;
    this.ctx.moveTo(this.canvas.width / 2, 0);
    this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
    this.ctx.stroke();
  }

  private drawBall(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = COLORS.WHITE;
    this.ctx.fill();
    this.ctx.closePath();
  }

  private drawPaddles(): void {
    this.ctx.fillStyle = COLORS.WHITE;
    this.ctx.fillRect(
      this.leftPaddle.x,
      this.leftPaddle.y,
      Paddle.width,
      Paddle.height
    );
    this.ctx.fillRect(
      this.rightPaddle.x,
      this.rightPaddle.y,
      Paddle.width,
      Paddle.height
    );
  }

  private movePaddles(): void {
    this.leftPaddle.y += this.leftPaddle.dy;
    this.rightPaddle.y += this.rightPaddle.dy;

    if (this.leftPaddle.y < 0) {
      this.leftPaddle.y = 0;
    } else if (this.leftPaddle.y > this.canvas.height - Paddle.height) {
      this.leftPaddle.y = this.canvas.height - Paddle.height;
    }

    if (this.rightPaddle.y < 0) {
      this.rightPaddle.y = 0;
    } else if (this.rightPaddle.y > this.canvas.height - Paddle.height) {
      this.rightPaddle.y = this.canvas.height - Paddle.height;
    }
  }

  private resetBall(): void {
    this.ball.x = this.canvas.width / 2;
    this.ball.y = this.canvas.height / 2;
    this.ball.dx = -this.ball.dx;
    this.ball.dy = -this.ball.dy;
  }

  private detectCollision(): void {
    if (
      this.ball.x - this.ball.radius < this.leftPaddle.x + Paddle.width &&
      this.ball.y + this.ball.radius > this.leftPaddle.y &&
      this.ball.y - this.ball.radius < this.leftPaddle.y + Paddle.height
    ) {
      this.ball.dx = -this.ball.dx;
    }

    if (
      this.ball.x + this.ball.radius > this.rightPaddle.x &&
      this.ball.y + this.ball.radius > this.rightPaddle.y &&
      this.ball.y - this.ball.radius < this.rightPaddle.y + Paddle.height
    ) {
      this.ball.dx = -this.ball.dx;
    }
  }

  public update(): void {
    this.ball.x += this.ball.dx;
    this.ball.y += this.ball.dy;

    if (
      this.ball.y - this.ball.radius < 0 ||
      this.ball.y + this.ball.radius > this.canvas.height
    ) {
      this.ball.dy = -this.ball.dy;
    }

    if (this.ball.x - this.ball.radius < 0) {
      this.whoScored = 1;
      this.resetBall();
    } else if (this.ball.x + this.ball.radius > this.canvas.width) {
      this.whoScored = 2;
      this.resetBall();
    }

    this.movePaddles();
    this.detectCollision();
  }

  public draw(): void {
    this.drawCanvas();
    this.drawMiddle();
    this.drawBall();
    this.drawPaddles();
  }

  public clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

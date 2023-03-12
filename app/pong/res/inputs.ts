import { Paddle } from "../res/objects"

export class Inputs {
  private p1UpKey: string;
  private p1DownKey: string;
  private p2UpKey: string;
  private p2DownKey: string;

  constructor(
    p1UpKey: string = "KeyW",
    p1DownKey: string = "KeyS",
    p2UpKey: string = "ArrowUp",
    p2DownKey: string = "ArrowDown"
  ) {
    this.p1UpKey = p1UpKey;
    this.p1DownKey = p1DownKey;
    this.p2UpKey = p2UpKey;
    this.p2DownKey = p2DownKey;
  }

  public manageKeyDown(
    event: KeyboardEvent,
    leftPaddle: Paddle,
    rightPaddle: Paddle
  ) {
    if (event.code === this.p1UpKey) {
      leftPaddle.dy = -5;
    } else if (event.code === this.p1DownKey) {
      leftPaddle.dy = 5;
    }

    if (event.code === this.p2UpKey) {
      rightPaddle.dy = -5;
    } else if (event.code === this.p2DownKey) {
      rightPaddle.dy = 5;
    }
  }

  public manageKeyUp(
    event: KeyboardEvent,
    leftPaddle: Paddle,
    rightPaddle: Paddle
  ) {
    if (event.code === this.p1UpKey || event.code === this.p1DownKey) {
      leftPaddle.dy = 0;
    }

    if (event.code === this.p2UpKey || event.code === this.p2DownKey) {
      rightPaddle.dy = 0;
    }
  }
}

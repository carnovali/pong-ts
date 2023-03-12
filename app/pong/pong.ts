import { Game } from "./res/game"
import { Inputs } from "./res/inputs"
import { UI } from "./res/ui"

export class Pong {
  private game: Game;
  private UI: UI;
  private inputs: Inputs;

  private p1score: number;
  private p2score: number;

  public isPaused: boolean;

  constructor() {
    this.game = new Game();
    this.UI = new UI();
    this.inputs = new Inputs();
    this.p1score = 0;
    this.p2score = 0;
    this.isPaused = false;

    document.addEventListener("keydown", (event) =>
      this.inputs.manageKeyDown(
        event,
        this.game.leftPaddle,
        this.game.rightPaddle
      )
    );
    document.addEventListener("keyup", (event) =>
      this.inputs.manageKeyUp(
        event,
        this.game.leftPaddle,
        this.game.rightPaddle
      )
    );

    this.UI.startButton.addEventListener("click", () => {
      this.isPaused = !this.isPaused;
      if (this.isPaused) {
        this.UI.isPaused();
      } else {
        this.UI.isPlaying();
      }
      this.loop();
    });
    this.initializeGame();
  }

  private initializeGame() {
    this.loop();
    this.isPaused = true;
  }

  private noticeScore(whoScored: number) {
    if (whoScored === 1) {
      this.p2score++;
      this.UI.updateScore(2, this.p2score);
    }
    if (whoScored === 2) {
      this.p1score++;
      this.UI.updateScore(1, this.p1score);
    }
    this.game.whoScored = 0;
  }

  private loop() {
    this.noticeScore(this.game.whoScored);
    if (!this.isPaused) {
      this.game.clearCanvas();
      this.game.update();
      this.game.draw();
      requestAnimationFrame(() => this.loop());
    }
  }
}

export class UI {
  public startButton: HTMLButtonElement;
  private p1score: HTMLParagraphElement;
  private p2score: HTMLParagraphElement;

  constructor() {
    this.startButton = <HTMLButtonElement>document.querySelector("#start");
    this.p1score = <HTMLParagraphElement>document.querySelector("#p1score");
    this.p2score = <HTMLParagraphElement>document.querySelector("#p2score");
  }

  public isPaused() {
    this.startButton.innerHTML = "Resume";
  }

  public isPlaying() {
    this.startButton.innerHTML = "Pause";
  }

  public updateScore(player: number, playerScore: number) {
    if (player === 1) {
      this.p1score.innerHTML = playerScore.toString();
    }
    if (player === 2) {
      this.p2score.innerHTML = playerScore.toString();
    }
  }
}

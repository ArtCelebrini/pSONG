import Phaser from 'phaser';
import { BACKGROUND_COLOUR_MATCH } from '../constants';
import { Player } from '../objects/Player';
import { LocalInputController } from '../input/LocalInputController';

export default class MainScene extends Phaser.Scene {
  private player: Player | undefined;
  private inputController: LocalInputController | undefined;

  constructor() {
    super('MainScene');
  }

  preload(): void {
    if (!this.textures.exists('player')) {
      this.textures.generate('player', {
        data: ['████', '████', '████', '████'],
        pixelWidth: 8,
      });
    }
  }

  create(): void {
    this.cameras.main.setBackgroundColor(BACKGROUND_COLOUR_MATCH);
    this.player = new Player(this, 100, 300);
    this.inputController = new LocalInputController(this);
  }

  update(_: number, delta: number): void {
    if (!this.player || !this.inputController) return;

    const input = this.inputController.getInput();
    this.player.update(delta, input);
  }
}

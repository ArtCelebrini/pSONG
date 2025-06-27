export class LocalInputController {
  private readonly keys: {
    up: Phaser.Input.Keyboard.Key;
    down: Phaser.Input.Keyboard.Key;
  };

  constructor(scene: Phaser.Scene) {
    if (!scene.input.keyboard) {
      throw new Error('Input system not available in the scene');
    }

    this.keys = {
      up: scene.input.keyboard.addKey('W'),
      down: scene.input.keyboard.addKey('S'),
    };
  }

  getInput(): { up: boolean; down: boolean } {
    return {
      up: this.keys.up.isDown,
      down: this.keys.down.isDown,
    };
  }
}

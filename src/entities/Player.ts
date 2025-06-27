import Phaser from 'phaser';

export class Player extends Phaser.Physics.Arcade.Sprite {
  private readonly speed: number = 300;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setImmovable(true);
    this.setCollideWorldBounds(true);
  }

  update(delta: number, input: { up: boolean; down: boolean }) {
    if (input.up) {
      this.setVelocityY(-this.speed);
    } else if (input.down) {
      this.setVelocityY(this.speed);
    } else {
      this.setVelocityY(0);
    }
  }
}

import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT } from './pSONG/constants';
import MainScene from './pSONG/scenes/MainScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  parent: 'game-container',
  scene: [MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  fps: {
    target: 60,
    forceSetTimeOut: true,
  },
};

new Phaser.Game(config);

# pSONG

Pong but it's music themed, get it? Pronounced like the 'ps' in psalm. Get it?

## The stack

- [Phaser](https://phaser.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [VSCode](https://code.visualstudio.com/)

## The Structure

- `src/scenes/` – Scenes
- `src/entities/` – Game objects
- `src/core/` – Constants, config
- `public/assets/` – Images, audio

## The Environment

tbd

## The Setup

    git clone https://github.com/[me]/psong.git
    cd psong
    npm install - install dependencies
    npm run dev - run the server

## The Future

### ☑ Phase 1: hello world

- set up environment
- set up git

### ☑ Phase 2: Paddle

- set up input handling class
- set up Player class
- displays paddle and moves with W/S!

### ☐ Phase 3: Ball & Collision

- ball bounces and collides with paddle/walls

### ☐ Phase 4: Offline 2 player & AI Opponent

- simple opponent that follows the ball

### ☐ Phase 5: UI & Scoring & Game Loop

- track score
- win/loss screen
- reset game

### ☐ Phase 6: Mobile Compatability

- responsive canvas
- responsive ui
- 16:9 aspect ratio
- fullscreen toggle for PC
- touch controls

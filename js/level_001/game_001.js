/**
 * Função chamada antes do create, onde indicamos os recursos
 * que iremos utilizar e suas 'keys', as quais serão usadas para
 * resgastar estes recursos posteriormente na função create.
 */
function preload() {
  this.load.audio("audioBackground", "audio/background.wav");
  this.load.audio("audioCoin", "audio/coin.wav");
  this.load.audio("audioJump", "audio/jump.wav");
  this.load.image("imageBackgroundSky", "img/sky.png");
  this.load.image("imagePlatform", "img/platform.png");
  this.load.spritesheet("spriteDude", "img/dude.png", 32, 48);
  this.load.spritesheet("spriteCoin", "img/coin_sheet.png", 24, 24);
}

/**
 * Aqui é a função chamada antes de entrar no game loop (função update)
 */
function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  configSound("audioBackground");
  configKeys();
  configSprites();
  configPlayerHUD();
}

/**
 * Game loop.
 */
function update() {
  enableCollision();
  enablePlayerMovement();
}


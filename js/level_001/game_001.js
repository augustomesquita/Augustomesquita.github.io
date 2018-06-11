/**
 * Função chamada antes do create, onde indicamos os recursos
 * que iremos utilizar e suas 'keys', as quais serão usadas para
 * resgastar estes recursos posteriormente na função create.
 */
function preload() {
  game.load.audio("audioBackground", "audio/background.wav");
  game.load.image("imageBackgroundSky", "img/sky.png");
  game.load.image("imagePlatform", "img/platform.png");
  commomPreload(); // preload comum, deve ser colocado no final.
}

/**
 * Aqui é a função chamada antes de entrar no game loop (função update)
 */
function create() {
  configSprites();
  configBackgroundSound("audioBackground");
  commomCreate(50, 450); // create comum, deve ser colocado no final.
}

/**
 * Game loop.
 */
function update() {
  commomUpdate(); // update comum, deve ser colocado no final.
}


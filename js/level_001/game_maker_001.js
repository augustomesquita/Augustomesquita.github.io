function createSprites() {
  createBackground();
  createPlataforms();
  createCoins();
}

function createBackground() {
  game.add.sprite(0, 0, "imageBackgroundSky");
}

function createPlataforms() {
  // Define física das plataformas.
  platforms = game.add.group();
  platforms.enableBody = true;

  // Cria plataformas.
  platforms.create(0, 568, "imagePlatform").body.immovable = true;
  platforms.create(400, 568, "imagePlatform").body.immovable = true;
  platforms.create(400, 400, "imagePlatform").body.immovable = true;
  platforms.create(-150, 250, "imagePlatform").body.immovable = true;
}

function createCoins() {
  coins = game.add.group();
  coins.enableBody = true;
  for (var i = 0; i < 12; i++) {
    var coin = coins.create(i * 70, 0, "spriteCoin");
    coin.body.gravity.y = 300;
    coin.body.bounce.y = 0.7 + Math.random() * 0.2;
    coin.animations.add("animationCoin", [0, 1, 2, 3], 10, true);
    coin.animations.play("animationCoin");
  }
}

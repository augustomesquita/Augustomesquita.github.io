function createBackground() {
  game.add.sprite(0, game.world.height - 980, "imageBackgroundSky");
  game.add.sprite(1400, game.world.height - 980, "imageBackgroundSky");
}

function createPlataforms() {
  // Shortcut
  var height = game.world.height;

  // Habilita corpo para as
  // plataformas.
  platforms = game.add.group();
  platforms.enableBody = true;

  // Cria plataformas.
  // Chão
  var allPlatforms = [];
  allPlatforms.push(platforms.create(0, height - 32, "imagePlatform"));
  allPlatforms.push(platforms.create(400, height - 32, "imagePlatform"));
  allPlatforms.push(platforms.create(800, height - 32, "imagePlatform"));

  // Flutuante
  allPlatforms.push(platforms.create(400, height - 200, "imagePlatform"));
  allPlatforms.push(platforms.create(-150, height - 350, "imagePlatform"));

  // Habilita característica de não mover o corpo
  // para todas as plataformas.
  allPlatforms.forEach(plataform => (plataform.body.immovable = true));
}

function createCoins() {
  coins = game.add.group();
  coins.enableBody = true;
  for (var i = 0; i < 12; i++) {
    var coin = coins.create(i * 70, game.world.height - 800, "spriteCoin");
    coin.body.gravity.y = 300;
    coin.body.bounce.y = 0.7 + Math.random() * 0.2;
    coin.animations.add("animationCoin", [0, 1, 2, 3], 10, true);
    coin.animations.play("animationCoin");
  }
}

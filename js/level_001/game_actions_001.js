function configImagesAndSprites() {
  createBackground();
  createPlataforms();

  function createBackground() {
    game.add.sprite(0, 0, "imageBackgroundSky");
  }

  function createPlataforms() {
    // Define física das plataformas.
    platforms = game.add.group();
    platforms.enableBody = true;

    // Cria plataformas.
    platforms.create(
      0,
      game.world.height - 32,
      "imagePlatform"
    ).body.immovable = true;
    platforms.create(
      400,
      game.world.height - 32,
      "imagePlatform"
    ).body.immovable = true;
    platforms.create(400, 400, "imagePlatform").body.immovable = true;
    platforms.create(-150, 250, "imagePlatform").body.immovable = true;
  }
}

function configSound() {
  // Música de fundo.
  audioBackground = new Phaser.Sound(game, "audioBackground", 1, true);
  setTimeout(function() {
    audioBackground.play();
  }, 100);

  // Áudios diversos.
  audioCoin = game.add.audio("audioCoin");
  audioJump = game.add.audio("audioJump");
}

function configKeys() {
  keys = game.input.keyboard.createCursorKeys();
  keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
  keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
  keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
}

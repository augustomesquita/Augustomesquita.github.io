/**
 * Variáveis comuns ao projeto.
 */
var platforms,
  player,
  keys,
  coins,
  audioBackground,
  audioCoin,
  audioJump,
  txtScore,
  score = 0;

var keySpaceBar, keyW, keyA, keyD;

/**
 * Classe para criação de fases no jogo
 */
class GameLevel {
  constructor(newLevel) {
    this.preload = function() {
      newLevel.preload();
      game.load.audio("audioCoin", "audio/coin.wav");
      game.load.audio("audioJump", "audio/jump.wav");
      game.load.spritesheet("spriteDude", "img/dude.png", 40, 50);
      game.load.spritesheet("spriteCoin", "img/coin_sheet.png", 24, 24);
    };

    this.create = function() {
      newLevel.create();
      game.physics.startSystem(Phaser.Physics.ARCADE);

      audioCoin = game.add.audio("audioCoin");
      audioJump = game.add.audio("audioJump");

      enableKeys();
      enablePlayerHUD(50, 450);
    };

    this.update = function() {
      newLevel.update();
      enableCollision();
      enablePlayerMovement();
    };
  }
}

/**
 * Habilita colisões.
 */
function enableCollision() {
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.collide(coins, platforms);
  game.physics.arcade.overlap(player, coins, collectCoin);
}

/**
 * Realiza coleta de moeda.
 * @param {object} player
 * @param {object} coin
 */
function collectCoin(player, coin) {
  audioCoin.play();
  coin.kill();
  score += 10;
  txtScore.text = "SCORE: " + score;
}

/**
 * Habilita movimentação do jogador.
 */
function enablePlayerMovement() {
  player.body.velocity.x = 0;
  if (keys.left.isDown) {
    player.body.velocity.x = -150;
    player.animations.play("left");
  } else if (keys.right.isDown) {
    player.body.velocity.x = 150;
    player.animations.play("right");
  } else {
    player.animations.stop();
    player.frame = 4;
  }

  if (keySpaceBar.isDown && player.body.touching.down) {
    player.body.velocity.y = -580;
    audioJump.play();
  }
}

/**
 * Recebe string do nome da música de fundo que deverá ser tocada
 * pelo jogo na fase.
 * @param {string} backgroundSoundKey
 */
function enableBackgroundSound(backgroundSoundKey) {
  audioBackground = new Phaser.Sound(game, backgroundSoundKey, 1, true);
  setTimeout(function() {
    audioBackground.play();
  }, 100);
}

/**
 * Habilita teclas para jogar armazenando-as em variáveis.
 */
function enableKeys() {
  keys = game.input.keyboard.createCursorKeys();
  keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
  keySpaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

/**
 * Habilita HUD do jogador com informações como score.
 * e direitos autorais presentes nas fases.
 */
function enablePlayerHUD(playerPositionX, playerPositionY) {
  player = game.add.sprite(playerPositionX, playerPositionY, "spriteDude");
  game.physics.arcade.enable(player);
  player.body.gravity.y = 1000;
  player.body.bounce.y = 0.2;
  player.body.collideWorldBounds = true;
  player.animations.add("left", [0, 1, 2, 3], 10, true);
  player.animations.add("right", [5, 6, 7, 8], 10, true);
  txtScore = game.add.text(16, 24, "SCORE: 0", {
    fontSize: "32px",
    fill: "#fff"
  });
  game.add.text(250, 580, "Augusto Mesquita - Javascript Game", {
    fontSize: "16px",
    fill: "#FFF"
  });
}

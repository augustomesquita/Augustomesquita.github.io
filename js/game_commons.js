/**
 * Variáveis comuns ao projeto.
 */
var invisibleBoundGroup,
  platforms,
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
    // Define dimensões do mundo caso não exista.
    newLevel.bound_x = newLevel.bound_x || 800;
    newLevel.bound_y = newLevel.bound_y || 600;

    this.preload = function() {
      game.world.setBounds(0, 0, newLevel.bound_x, newLevel.bound_y);
      newLevel.preload();
      game.load.image("invisibleBound", "img/invisible_bound.png");
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

      enableHorizontalBoundColision(newLevel);
      enableKeys();
      enablePlayer(50, newLevel.bound_y - 150);
      enableHUD();
    };

    this.update = function() {
      newLevel.update();
      enableCollision();
      enablePlayerMovement(newLevel);
    };
  }
}

/**
 * Habilita colisão horizontal do mapa.
 */
function enableHorizontalBoundColision(level) {
  invisibleBoundGroup = game.add.group();
  invisibleBoundGroup.enableBody = true;
  var invisibleBound = invisibleBoundGroup.create(0, 0, "invisibleBound");
  invisibleBound.body.immovable = true;
  invisibleBound.height = level.bound_y;
  invisibleBound = invisibleBoundGroup.create(
    level.bound_x,
    0,
    "invisibleBound"
  );
  invisibleBound.body.immovable = true;
  invisibleBound.height = level.bound_y;
}

/**
 * Habilita colisões.
 */
function enableCollision() {
  game.physics.arcade.collide(player, invisibleBoundGroup);
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
function enablePlayerMovement(level) {
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

  // Checa se personagem está foram da fase (verticalmente).
  // Em caso positivo realiza a ação dentro da verificação.
  if (player.body.y > level.bound_y) {
    player.reset(50, level.bound_y - 150);
  }

  // Camera segue o personagem.
  game.camera.follow(player, null, 0.1, 0.1);
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
 * Habilita personagem, com todas suas características
 * fisica e de animações, especificando posição inicial
 * do mesmo na tela.
 * @param {number} playerPositionX
 * @param {number} playerPositionY
 */
function enablePlayer(playerPositionX, playerPositionY) {
  player = game.add.sprite(playerPositionX, playerPositionY, "spriteDude");
  game.physics.arcade.enable(player);
  player.body.gravity.y = 1000;
  player.body.bounce.y = 0.2;
  player.body.collideWorldBounds = false;
  player.animations.add("left", [0, 1, 2, 3], 10, true);
  player.animations.add("right", [5, 6, 7, 8], 10, true);
}

/**
 * Habilita HUD do jogador com informações como score.
 * e direitos autorais presentes nas fases.
 */
function enableHUD() {
  txtScore = game.add.text(16, 24, "SCORE: 0", {
    fontSize: "32px",
    fill: "#fff"
  });
  game.add.text(250, 580, "Augusto Mesquita - Javascript Game", {
    fontSize: "16px",
    fill: "#FFF"
  });
}

/**
 * Modifica posição inicial da câmera.
 */
function setInitialCameraPosition(x, y) {
  game.camera.y = x;
  game.camera.x = y;
}

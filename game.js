console.log("[BrazilianBeast] FlappyBird");

const sprites = new Image();
sprites.src = "./sprites.png";

const canvas = document.querySelector("#game-canvas");
const context = canvas.getContext("2d");

// [Plano de Fundo]
const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha() {
    context.fillStyle = "#70c5ce";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.drawImage(
      sprites,
      planoDeFundo.spriteX,
      planoDeFundo.spriteY,
      planoDeFundo.largura,
      planoDeFundo.altura,
      planoDeFundo.x,
      planoDeFundo.y,
      planoDeFundo.largura,
      planoDeFundo.altura
    );

    context.drawImage(
      sprites,
      planoDeFundo.spriteX,
      planoDeFundo.spriteY,
      planoDeFundo.largura,
      planoDeFundo.altura,
      planoDeFundo.x + planoDeFundo.largura,
      planoDeFundo.y,
      planoDeFundo.largura,
      planoDeFundo.altura
    );
  },
};

// [Chao]
const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
  desenha() {
    context.drawImage(
      sprites,
      chao.spriteX,
      chao.spriteY,
      chao.largura,
      chao.altura,
      chao.x,
      chao.y,
      chao.largura,
      chao.altura
    );

    context.drawImage(
      sprites,
      chao.spriteX,
      chao.spriteY,
      chao.largura,
      chao.altura,
      chao.x + chao.largura,
      chao.y,
      chao.largura,
      chao.altura
    );
  },
};

const flappyBird = {
  spriteX: 0,
  spriteY: 0,
  largura: 34,
  altura: 24,
  x: 10,
  y: 280,
  desenha() {
    context.drawImage(
      sprites,
      flappyBird.spriteX,
      flappyBird.spriteY, //Sprite X, Sprite Y
      flappyBird.largura,
      flappyBird.altura, //Tamanho do recorte na sprite
      flappyBird.x,
      flappyBird.y,
      flappyBird.largura,
      flappyBird.altura // dx, dy
    );
  },
};

function loop() {
  planoDeFundo.desenha();
  chao.desenha();
  flappyBird.desenha();
  requestAnimationFrame(loop);

  if (flappyBird.y == 480) {
    flappyBird.y = 0 - 24;
  } else {
    flappyBird.y = flappyBird.y + 1;
  }

  //   if (flappyBird.x >= 320) {
  //     flappyBird.x = 0;
  //   } else {
  //     flappyBird.x = flappyBird.x + 1;
  //     console.log(flappyBird.x);
  //   }
}

loop();

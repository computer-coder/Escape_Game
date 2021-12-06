var wallimg,
  waterimg,
  lavaimg,
  lava1img,
  water2img,
  water1img,
  magmaimg,
  pantherimg;
var water,
  water1,
  water2,
  lava,
  lava1,
  lava2,
  key1,
  key2,
  key3,
  key4,
  key5,
  magma,
  panther;
var wall1;
var human;
var gameState = "play";
var treasure, treasureimg;

function preload() {
  wallimg = loadImage("wall.jpeg");
  pantherimg = loadImage("panther.png");
  water1img = loadImage("waterfall.png");
  waterimg = loadImage("water.jpeg");
  water2img = loadImage("water2.png");
  lavaimg = loadImage("lava.png");
  lava2img = loadImage("lava2.png");
  lava1img = loadImage("lava1.png");
  a = loadAnimation("a.png");
  magmaimg = loadImage("magma.png");
  motion = loadAnimation("a.png", "b.png", "c.png", "d.png");
  treasureimg = loadImage("treasure.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  water = createSprite(width / 2, height - 690, 160, 150);
  water.addImage(waterimg);
  water.scale = 0.53;
  panther = createSprite(width / 2, height - 50);
  panther.addImage(pantherimg);
  panther.scale = 0.5;
  lava = createSprite(width / 2, height - 550, 160, 150);
  lava.addImage(lavaimg);
  lava.scale = 0.13;
  lava1 = createSprite(width / 2, height / 2 + 50, 160, 150);
  lava1.addImage(lava1img);
  lava1.visible = false;
  water1 = createSprite(width / 2, height / 2 + 50, 160, 150);
  water1.addImage(water1img);
  water1.visible = false;
  water1.scale = 0.8;
  magma = createSprite(width / 2, height / 2 + 280, 160, 150);
  magma.addImage(magmaimg);
  magma.visible = false;
  key1 = createSprite(width / 2 - 300, height - 75, 10, 650);
  key2 = createSprite(width / 2 + 300, height - 75, 10, 650);
  key3 = createSprite(width / 2, height - 620, 360, 10);
  key4 = createSprite(width / 2, height - 420, 160, 10);
  key5 = createSprite(width / 2 + 10 + 300, height - 25, 100, 650);
  key5.visible = false;
  human = createSprite(275, height - 75);
  human.addAnimation("standing", a);
  human.addAnimation("motion", motion);
  lava2 = createSprite(width / 2, height - 150, 160, 150);
  treasure = createSprite(width / 2 + 400, height - 60, 160, 150);
  treasure.addImage(treasureimg);
  treasure.scale = 0.3;
  lava2.addImage(lava2img);
  lava2.scale = 0.17;
  lava2.visible = false;
  imageMode(CENTER);
}

function draw() {
  if (gameState == "play") {
    background(255, 255, 255);
    if (human.isTouching(key5)) {
      human.changeAnimation("motion", motion);
      human.velocityX = 2;
      console.log("touch");
    }
    if (human.isTouching(key2)) {
      human.velocityX = 0;
      human.changeAnimation("standing", a);
    }
    if (mousePressedOver(key2)) {
      key2.y = height - 700;
    }
    if (mousePressedOver(key1)) {
      key1.y = height - 700;
      human.changeAnimation("motion", motion);
      human.velocityX = 2;
    }

    if (human.isTouching(lava2)) {
      gameState = "end";
    }
    if (mousePressedOver(key4)) {
      key4.x = width / 2 + 200;
      lava1.visible = true;
      setTimeout(lava_fun, 2000);
      panther.visible = false;
      lava.visible = false;
      lava2.visible = true;
      lava2.scale = 0.27;
    }

    if (mousePressedOver(key3)) {
      water1.visible = true;
      setTimeout(water_fun, 1000);
      key3.x = width / 2 + 400;
      water2 = createSprite(width / 2, height - 150, 160, 150);
      water2.scale = 0.27;
      if (water2.isTouching(lava2)) {
        lava2.destroy();
        water2.visible = false;
        panther.visible = false;
        magma.visible = true;
      }
      water.visible = false;
    }

    if (treasure.isTouching(human)) {
      gameState = "Won";
    }

    image(wallimg, width / 2 - 500, height - 75, 10, 600);
    image(wallimg, width / 2 + 500, height - 75, 10, 600);
    image(wallimg, width / 2 - 270, height - 370, 450, 10);
    image(wallimg, width / 2 + 270, height - 370, 450, 10);
    image(wallimg, width / 2 - 50, height - 420, 10, 100);
    image(wallimg, width / 2 + 50, height - 420, 10, 100);
    image(wallimg, width / 2 - 95, height - 470, 100, 10);
    image(wallimg, width / 2 + 95, height - 470, 100, 10);
    image(wallimg, width / 2 - 150, height - 615, 10, 300);
    image(wallimg, width / 2 + 150, height - 615, 10, 300);
    image(wallimg, width / 2, height - 770, 310, 10);
    drawSprites();
  } else if (gameState == "end") {
    background("blue");
    textSize(50);
    text("The game has ended !!!", width / 2 - 200, height / 2);
    human.velocityX = 0;
    human.changeAnimation("standing", a);
  } else if ((gameState = "Won")) {
    textSize(50);
    background("blue");
    text("You have won !!!", width / 2 - 200, height / 2);
    human.velocityX = 0;
    human.changeAnimation("standing", a);
  }
}

function lava_fun() {
  lava1.visible = false;
}
function water_fun() {
  water1.visible = false;
}

const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.pageX -= canvas.offsetLeft;
  mouse.y = event.pageY -= canvas.offsetTop;
});

const ball = new Ball(10, "aqua");
let angle = 0;
let centerY = canvas.height / 2;
let range = randomFromTo(50, 300);
let xspeed = 1.5;
let yspeed = 0.01;
ball.x = 0;

const ball2 = new Ball(10, "red");
let angle2 = 0;
let centerY2 = canvas.height / 2;
let range2 = randomFromTo(50, 300);
let xspeed2 = 2;
let yspeed2 = 0.05;
ball2.x = -canvas.width / 2;

const ball3 = new Ball(10, "black");
let angle3 = 0;
let centerY3 = canvas.height / 2;
let range3 = randomFromTo(50, 300);
let xspeed3 = 1;
let yspeed3 = 0.05;
ball3.x = 0;

const ball4 = new Ball(10, "royalblue");
let angle4 = 0;
let centerY4 = canvas.height / 2;
let range4 = randomFromTo(50, 300);
let xspeed4 = 1;
let yspeed4 = 0.01;
ball4.x = -canvas.width / 2;

const ball5 = new Ball(50, "plum");
let angle5 = 0;
let centerScale5 = 1;
let range5 = 6.655;
let speed5 = 0.01075;
ball5.x = 96;
ball5.y = 96;

const ball6 = new Ball(50, "rebeccapurple");
let angle6 = 0;
let centerScale6 = 1;
let range6 = 6.655;
let speed6 = 0.01075;
ball6.x = 576;
ball6.y = 576;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBalls();
  requestAnimationFrame(animate);
}
animate();

function randomFromTo(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawBalls() {
  // ball 5
  ball5.scaleX = ball5.scaleY = centerScale5 + Math.sin(angle5) * -range5;
  angle5 += speed5;
  ball5.draw(ctx);

  // ball 6
  ball6.scaleX = ball6.scaleY = centerScale6 + Math.sin(angle6) * range6;
  angle6 += speed6;
  ball6.draw(ctx);

  // ball 2
  if (ball2.x > canvas.width) {
    ball2.x = 0;
  } else {
    ball2.x += xspeed2;
  }
  ball2.y = centerY2 + Math.sin(angle2) * range2;
  angle2 += yspeed2;
  ball2.draw(ctx);

  // ball 3
  if (ball3.x > canvas.width) {
    ball3.x = 0;
  } else {
    ball3.x += xspeed3;
  }
  ball3.y = centerY3 + Math.sin(angle3) * range3;
  angle3 += yspeed3;
  ball3.draw(ctx);

  // ball 4
  if (ball4.x > canvas.width) {
    ball4.x = -canvas.width / 2;
  } else {
    ball4.x += xspeed4;
  }
  ball4.y = centerY4 + Math.sin(angle4) * range4;
  angle4 += yspeed4;
  ball4.draw(ctx);

  // ball 1
  if (ball.x > canvas.width) {
    ball.x = 0;
  } else {
    ball.x += xspeed;
  }
  ball.y = centerY + Math.sin(angle) * range;
  angle += yspeed;
  ball.draw(ctx);
}

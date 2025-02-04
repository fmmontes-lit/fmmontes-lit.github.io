/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const canvas = document.getElementById("canvas");
//drawGrid(canvas);
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
const myParticles = [];
let hue = 0;

const mouse = {
  x: undefined,
  y: undefined,
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

canvas.addEventListener("click", function (event) {
  mouse.x = event.offsetX;
  mouse.y = event.offsetY;
  for (let i = 0; i < 100; i++) myParticles.push(new Particle());
});
canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.offsetX;
  mouse.y = event.offsetY;
  for (let i = 0; i < 1; i++) myParticles.push(new Particle());
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

class Particle {
  constructor() {
    this.id = generateId(myParticles.length);
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 15 + 1; // from 1 to 16
    this.speedX = Math.random() * 3 - 1.5; // from -1.5 to +1.5
    this.speedY = Math.random() * 3 - 1.5; // from -1.5 to +1.5
    this.color = "hsl(" + hue + ", 100%, 50%)";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1; // shrink size
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
function drawParticles() {
  for (let i = 0; i < myParticles.length; i++) {
    // update particle data and draw it
    myParticles[i].update();
    myParticles[i].draw();

    // loop through remaining particles, comparing their distances
    for (let j = i; j < myParticles.length; j++) {
      const dx = myParticles[i].x - myParticles[j].x;
      const dy = myParticles[i].y - myParticles[j].y;
      const dh = Math.sqrt(dx * dx + dy * dy);

      // draw line from i to j
      if (dh < 100) {
        ctx.beginPath();
        ctx.strokeStyle = myParticles[i].color;
        ctx.lineWidth = 0.2;
        ctx.moveTo(myParticles[i].x, myParticles[i].y);
        ctx.lineTo(myParticles[j].x, myParticles[j].y);
        ctx.stroke();
        ctx.closePath();
      }
    }

    // remove particle as it becomes very small
    if (myParticles[i].size <= 0.3) {
      myParticles.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0,0.02)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawParticles();
  hue += 10;
  requestAnimationFrame(animate);
}
animate();

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  const slider = document.getElementById("slider");

  /** @type {CanvasRenderingContext2D} */
  const context = canvas.getContext("2d");

  const photos = [];
  let x = 0;
  let indexToBlit = 0;
  let offset = 0;

  canvas.width = 800; //window.innerWidth - 70;
  canvas.height = 532;

  for (let i = 1; i <= 19; i++) {
    const img = new Image();
    img.src = "static/images/career-services/p" + i + ".png";
    photos.push(img);
  }

  function draw() {
    x += (slider.value - x) * 0.1;
    indexToBlit = Math.floor(x / canvas.width);
    offset = x % canvas.width;
    context.drawImage(
      photos[indexToBlit],
      offset,
      0,
      canvas.width - offset,
      canvas.height,
      0,
      0,
      canvas.width - offset,
      canvas.height
    );
    context.drawImage(
      photos[indexToBlit + 1],
      0,
      0,
      canvas.width,
      canvas.height,
      canvas.width - offset,
      0,
      canvas.width,
      canvas.height
    );
  }
  setInterval(draw, 16); // ~60fps
});

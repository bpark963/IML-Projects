let walkingSound, walkingAudio, button, timer;

function setup() {
  // walkingAudio = loadSound(
  //   "https://cdn.glitch.global/5521f153-9f5a-4a1f-90af-6e7adf9ceb23/walking%20sound%20effect.mp3?v=1678337570670"
  // );
  // walkingSound = select("#soundLink");
  // walkingSound.mouseOver(playSound);
  button = select("#btn");
  button.mouseOver(moveButton);

  timer = setTimeout(function () {
    window.location.href = "index.html";
  }, 10000);

  let currentPage = window.location.pathname;
  if (currentPage.includes("page-8.html")) {
    setTimeout(function () {
      clearTimeout(timer);
      window.location.href = "page-9.html";
    }, 10000);
  }
}

function playSound() {
  walkingAudio.play();
}

function moveButton() {
  x = random(windowWidth);
  y = random(windowHeight);
  button.position(x, y);
}

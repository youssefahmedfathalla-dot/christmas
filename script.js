const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg"
];

let i = 0;
const slide = document.getElementById("slide");
const music = document.getElementById("bg-music");

setInterval(() => {
  i = (i + 1) % images.length;
  slide.src = images[i];
}, 4000);

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

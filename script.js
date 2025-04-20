const card = document.querySelector('.profile-card');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  const rotateX = (0.5 - y) * 40; // más rotación aún
  const rotateY = (x - 0.5) * 40;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

const audio = document.getElementById("audio");
const playPause = document.getElementById("playPause");
const progressBar = document.getElementById("progressBar");

playPause.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPause.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    playPause.innerHTML = '<i class="fas fa-play"></i>';
  }
});

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${percent}%`;
});

audio.addEventListener("ended", () => {
  playPause.innerHTML = '<i class="fas fa-play"></i>';
});

const entryOverlay = document.getElementById("entryOverlay");

entryOverlay.addEventListener("click", () => {
  audio.play();
  playPause.innerHTML = '<i class="fas fa-pause"></i>';
  entryOverlay.style.opacity = 0;
  setTimeout(() => entryOverlay.style.display = "none", 500);
});


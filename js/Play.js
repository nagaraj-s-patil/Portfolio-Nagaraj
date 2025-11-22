const btn = document.getElementById("playBtn");
const song = document.getElementById("mySong");

// Set full volume (1.0 = 100%)
song.volume = 0.2;

btn.addEventListener("click", () => {
    song.play();
    btn.disabled = true;
    btn.innerText = "Playing... 🎧";
});

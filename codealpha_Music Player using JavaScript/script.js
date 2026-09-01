const songs = [
  {
    title: "Summer Walk",
    artist: "Demo Artist",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "Morning Energy",
    artist: "Demo Artist",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "Relaxing Evening",
    artist: "Demo Artist",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
];

const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const duration = document.getElementById("duration");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playlist = document.getElementById("playlist");
const autoplay = document.getElementById("autoplay");

let currentSong = 0;

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function loadSong(index, shouldPlay = false) {
  currentSong = (index + songs.length) % songs.length;
  const song = songs[currentSong];

  songTitle.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
  progress.value = 0;
  currentTime.textContent = "00:00";
  totalTime.textContent = "00:00";
  duration.textContent = "00:00 / 00:00";

  renderPlaylist();

  if (shouldPlay) {
    audio.play()
      .then(() => updatePlayButton())
      .catch(() => {
        alert("The demo audio could not be played. Check your internet connection or replace the audio URL with a local MP3 file.");
      });
  }
}

function renderPlaylist() {
  playlist.innerHTML = "";

  songs.forEach((song, index) => {
    const item = document.createElement("div");
    item.className = "song-item" + (index === currentSong ? " active" : "");
    item.innerHTML = `<strong>${song.title}</strong><small>${song.artist}</small>`;

    item.addEventListener("click", () => {
      loadSong(index, true);
    });

    playlist.appendChild(item);
  });
}

function togglePlay() {
  if (audio.paused) {
    audio.play().then(updatePlayButton).catch(() => {
      alert("Audio could not be played. Check the audio URL.");
    });
  } else {
    audio.pause();
    updatePlayButton();
  }
}

function updatePlayButton() {
  playBtn.textContent = audio.paused ? "▶" : "⏸";
}

function nextSong(shouldPlay = true) {
  loadSong(currentSong + 1, shouldPlay);
}

function previousSong() {
  loadSong(currentSong - 1, true);
}

playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", () => nextSong(true));
prevBtn.addEventListener("click", previousSong);

audio.addEventListener("loadedmetadata", () => {
  totalTime.textContent = formatTime(audio.duration);
  duration.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
});

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }

  currentTime.textContent = formatTime(audio.currentTime);
  totalTime.textContent = formatTime(audio.duration);
  duration.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
});

progress.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
});

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

audio.addEventListener("play", updatePlayButton);
audio.addEventListener("pause", updatePlayButton);

audio.addEventListener("ended", () => {
  if (autoplay.checked) {
    nextSong(true);
  } else {
    updatePlayButton();
  }
});

// Initial setup
audio.volume = volume.value;
loadSong(0, false);

# 🎵 Music Player using JavaScript

A simple and responsive **Music Player** created using **HTML, CSS, and JavaScript**.

## Features

- ▶️ Play and pause music
- ⏮ Previous song
- ⏭ Next song
- 🎵 Shows song title and artist
- ⏱ Shows current time and total duration
- 📊 Interactive progress bar
- 🔊 Volume control
- 📋 Playlist
- 🔁 Optional autoplay for the next song
- 📱 Responsive design

## Project Structure

```text
music-player-javascript/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download or extract the project.
2. Open the `index.html` file in a web browser.
3. Select a song from the playlist.
4. Use the Play, Previous, Next, Progress, and Volume controls.

The demo uses online SoundHelix MP3 files, so an internet connection is needed for the included demo songs.

## How to Add Your Own Songs

For local MP3 files, create a folder called `songs`:

```text
music-player-javascript/
├── index.html
├── style.css
├── script.js
├── README.md
└── songs/
    ├── song1.mp3
    ├── song2.mp3
    └── song3.mp3
```

Then change the `src` values in `script.js`:

```javascript
const songs = [
  {
    title: "My Song",
    artist: "My Artist",
    src: "songs/song1.mp3"
  },
  {
    title: "My Song 2",
    artist: "My Artist",
    src: "songs/song2.mp3"
  }
];
```

## Technologies Used

- **HTML5** – page structure and audio element
- **CSS3** – styling and responsive layout
- **JavaScript** – music controls, playlist, progress bar, volume, and autoplay

## Assignment Requirements

This project covers the requested Task 4 requirements:

- Create a music player interface using HTML and CSS.
- Use JavaScript for play, pause, next, and previous controls.
- Display song title, artist, and duration.
- Include a progress bar and volume control.
- Bonus: playlist and autoplay features.

## Author

**Shaik Sameer**

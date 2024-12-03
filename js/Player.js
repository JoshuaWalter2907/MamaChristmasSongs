// Song-URLs (dies sind Beispiele, ändern Sie die Pfade entsprechend)
const songs = {
  1: { title: "Jingle Bells", url: "audio/JingleBells.mp3", image: "img/jingle.jpg" },
  2: { title: "O Tannenbaum", url: "audio/O Tannenbaum.mp3", image: "img/o-tannenbaum.jpg" },
  3: { title: "Drummer Boy", url: "audio/Drummer Boy.mp3", image: "img/drummer.jpg" },
  4: { title: "Come all Ye Faithful", url: "audio/Come all Ye Faithful.mp3", image: "img/Faithful.jpg" },
  5: { title: "Feliz Navidad Normal", url: "audio/Feliz Navidad V1.mp3", image: "img/1.jpg" },
  6: { title: "Feliz Navidad Lustig", url: "audio/Feliz Navidad V2.mp3", image: "img/2.jpg" },
  7: { title: "Fröhliche Weihnacht", url: "audio/Fröhliche Weihnacht.mp3", image: "img/3.jpg" },
  8: { title: "Joy to the world", url: "audio/JoyToTheWorld.mp3", image: "img/5.jpg" },
  9: { title: "Kommet ihr Hirten", url: "audio/Kommet ihr Hirten.mp3", image: "img/6.jpg" },
  10: { title: "Morgen kommt der Nikolaus", url: "audio/Lustig Lustig tralalalala.mp3", image: "img/4.jpg" },
  11: { title: "Nun singet und seid froh", url: "audio/Nun singet und seid froh.mp3", image: "img/7.jpg" },
  12: {title: "O du fröhliche", url: "audio/O du fröhliche.mp3", image: "img/8.jpg" },
  13: {title: "O Tannenbaum", url: "audio/O Tannenbaum.mp3", image: "img/9.jpg" },
  14: {title: "Rudolph", url: "audio/Rudolph.mp3", image: "img/10.jpg" },
  15: {title: "Es ist ein Ros entsprungen", url: "audio/Röslein.mp3", image: "img/11.jpeg" },
  16: {title: "Süßer die Glocken nie klingen", url: "audio/Süßer die Glocken nie klingen.mp3", image: "img/12.jpg" },
  17: {title: "We wish you a merry christmas", url: "audio/We wish you a merry christmas.mp3", image: "img/13.jpg" },
  18: {title: "Winter wonderland", url: "audio/Winter Wonderland.mp3", image: "img/14.jpg" },
};
const urlParams = new URLSearchParams(window.location.search);
const songId = parseInt(urlParams.get('song'));

// Elemente der Player-Seite
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const songTitle = document.getElementById('song-title');
const songCoverImage = document.getElementById('song-cover-img'); // Das Cover-Bild
const volumeControl = document.getElementById('volume');

// Den Song anzeigen und laden
if (songs[songId]) {
  songTitle.innerText = songs[songId].title;
  audioSource.src = songs[songId].url;
  songCoverImage.src = songs[songId].image; // Bild setzen
  audioPlayer.load();
}

// Funktion, um zum nächsten Song zu wechseln
function nextSong() {
  let nextSongId = songId + 1;
  if (nextSongId > Object.keys(songs).length) {
    nextSongId = 1; // Gehe zum ersten Song zurück, wenn wir am Ende angekommen sind
  }
  window.location.href = `player.html?song=${nextSongId}`; // Lade die Seite mit dem nächsten Song
}

// Funktion, um zum vorherigen Song zu wechseln
function prevSong() {
  let prevSongId = songId - 1;
  if (prevSongId < 1) {
    prevSongId = Object.keys(songs).length; // Gehe zum letzten Song zurück, wenn wir am Anfang sind
  }
  window.location.href = `player.html?song=${prevSongId}`; // Lade die Seite mit dem vorherigen Song
}

volumeControl.addEventListener('input', function() {
  audioPlayer.volume = volumeControl.value;  // Lautstärke des Audio-Players ändern
});

// Swipe-Gesten erkennen
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
  if (touchEndX < touchStartX) {
    // Swipe nach links, nächster Song
    nextSong();
  }
  if (touchEndX > touchStartX) {
    // Swipe nach rechts, vorheriger Song
    prevSong();
  }
}

// Event-Listener für Swipe-Gesten
audioPlayer.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

audioPlayer.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});


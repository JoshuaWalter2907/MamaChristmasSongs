

// Schneeflocken animieren
let snowflakes = document.querySelectorAll('.snowflake');
snowflakes.forEach(snowflake => {
  snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
  snowflake.style.animationDelay = Math.random() * 5 + 's';
});

var audio = document.getElementById("backgroundMusic");

// Lautstärke anpassen (Wert von 0.0 bis 1.0, z.B. 0.5 für 50% Lautstärke)
audio.volume = 0.2;  // Setzt die Lautstärke auf 50%

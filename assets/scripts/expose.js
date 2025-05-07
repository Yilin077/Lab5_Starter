// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#horn-image");
  const hornAudio = document.querySelector("#horn-sound");
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");

  // Setup confetti
  const jsConfetti = new JSConfetti();

  // Handle horn selection change
  hornSelect.addEventListener("change", () => {
    const horn = hornSelect.value;

    // Set horn image and audio
    if (horn === "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      hornAudio.src = "assets/audio/air-horn.mp3";
    } else if (horn === "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      hornAudio.src = "assets/audio/car-horn.mp3";
    } else if (horn === "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      hornAudio.src = "assets/audio/party-horn.mp3";
    }
    hornImage.alt = horn;
  });

  // Handle volume change
  volumeSlider.addEventListener("input", () => {
    const volumeValue = volumeSlider.value;
    hornAudio.volume = volumeValue / 100;

    if (volumeValue == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      volumeIcon.alt = "Volume level 0";
    } else if (volumeValue < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      volumeIcon.alt = "Volume level 1";
    } else if (volumeValue < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volumeIcon.alt = "Volume level 3";
    }
  });

  // Handle play button click
  playButton.addEventListener("click", () => {
    hornAudio.play();

    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}

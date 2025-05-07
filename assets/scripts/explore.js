// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");
  const textInput = document.getElementById("text-to-speak");
  const faceImage = document.querySelector("#explore img");

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    if (voices.length === 0) return;
    voiceSelect.innerHTML = ""; // Clear any existing options

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }
  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = () => {
      populateVoices(); // Now voices will be available
    };
  }

  // Some browsers load voices async
  //if (speechSynthesis.onvoiceschanged !== undefined) {
    //speechSynthesis.onvoiceschanged = populateVoices;
  //}

  talkButton.addEventListener("click", () => {
    const text = textInput.value;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices[voiceSelect.value];
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // Open mouth while speaking
    utterance.onstart = () => {
      faceImage.src = "assets/images/smiling-open.png";
    };

    // Close mouth when done
    utterance.onend = () => {
      faceImage.src = "assets/images/smiling.png";
    };

    synth.speak(utterance);
  });
}

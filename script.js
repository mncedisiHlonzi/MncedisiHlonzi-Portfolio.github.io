const words = ["Software Developer", "Website Developer", "System Designer", "Technician"];
const typingSpan = document.getElementById("typing-span");
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    typingSpan.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 110); // Adjust typing speed here
  } else {
    setTimeout(erase, 1000); // Time before erasing starts
  }
}

function erase() {
  if (charIndex > 0) {
    typingSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); // Adjust erasing speed here
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500); // Time before typing starts again
  }
}

type(); // Start the typing animation

var sidemeu = document.getElementById("sidemenu");
function openmenu(){
  sidemeu.style.right = "0";
}
function closemenu(){
  sidemeu.style.right = "-400px";
}
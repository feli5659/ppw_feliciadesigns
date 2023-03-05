"use strict;";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));

// CHANGE PICTURE ON MOUSEOVER (Figure out how to make smoother transition between the two)

function displaySpeechBubble() {
  document.getElementById("black-grafic").src = "black_grafic2.png";
  typewriter.classList.remove("hide");

  initLoop();
}

function displayDefaultImg() {
  document.getElementById("black-grafic").src = "black_grafic_1-1.png";
}

// animation iterator on speechbubble text

// let iterator = 0;

// let letter;
// const typewriter = document.querySelector("#typewriter");
// let typewriterText = typewriter.textContent;
// const maxNumberOfItems = typewriterText.length;
// // empties #typewriter content before the loop
// typewriter.textContent = "";

// function initLoop() {
//   loop();
// }

// function loop() {
//   iterator++;
//   letter = "";

//   if (iterator <= maxNumberOfItems) {
//     setTimeout(loop, 200);
//     letter = typewriterText[iterator - 1];
//     typewriter.textContent += letter;
//   }
// }

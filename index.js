let len = document.querySelectorAll("button").length;
for (let i = 0; i < len; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let char = this.textContent;
    let key = char.trim();
    makeSound(key);
  });
}

document.addEventListener("keypress" , function(event){
    makeSound(event.key);
});

function makeSound(key) {
  if (key == "w") {
    console.log("ok");
    let audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
  } else if (key == "a") {
    let audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
  } else if (key == "s") {
    let audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
  } else if (key == "d") {
    let audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
  } else if (key == "j") {
    let audio = new Audio("./sounds/snare.mp3");
    audio.play();
  } else if (key == "k") {
    let audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
  } else if (key == "l") {
    let audio = new Audio("./sounds/crash.mp3");
    audio.play();
  }
}

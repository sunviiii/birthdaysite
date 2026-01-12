let attempts = 0;
const correctKey = "011405";

function checkKey() {
  const input = document.getElementById("keyInput").value;
  const message = document.getElementById("message");

  if (input === correctKey) {
    if (attempts === 0) {
      message.innerText = "woah, that was quick 😳";
    } else if (attempts === 1) {
      message.innerText = "took you long enough 😌";
    }
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  } else {
    attempts++;
    if (attempts === 1) {
      message.innerText = "babyy, think well na baby po, its your birthday after all 🥺";
    } else if (attempts === 2) {
      message.innerText = "nah nah yar babyy po 😅";
    } else if (attempts === 3) {
      message.innerText = "haha pretty, cmonnn 😏";
    }
    setTimeout(() => {
      message.innerText = "";
    }, 2000);
  }
}
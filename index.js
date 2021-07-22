// TIMER
const startTiming = 6;
let time = startTiming * 60 * 60;

const count = document.querySelector(".countdownTimer");
setInterval(updateTimer, 1000);
function updateTimer() {
  let Hour = Math.floor(time / 60 / 60);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);
  //   console.log(`${Hour}:${minutes}:${seconds}`);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  count.innerHTML = `${Hour}:${minutes}:${seconds}`;
  time--;
}

// COUNTER
let btnAdd = document.querySelector("#add");
let btnSubtract = document.querySelector("#subtract");
let input = document.querySelector("input");
let value = 0;

btnAdd.addEventListener("click", function () {
  input.value = value++;
});

btnSubtract.addEventListener("click", function () {
  if (value > 0) {
    input.value = value--;
  } else {
    input.value = 0;
  }
});

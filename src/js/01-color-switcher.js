const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId = null;
btnStop.disabled = true;

btnStart.setAttribute(
    "style",
    "position: absolute; top: 45%; right: 50%; width: 100px; height: 50px; font-size: 25px;"
  );
  btnStop.setAttribute(
    "style",
    "position: absolute; top: 51%; right: 50%; width: 100px; height: 50px; font-size: 25px;"
  );

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }


  btnStart.addEventListener("click", () => {
    timerId = setInterval(() => {
        let hexColor = getRandomHexColor();
        document.body.style.backgroundColor = hexColor;;
    }, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
  });

  btnStop.addEventListener("click", () => {
    clearInterval(timerId);
    btnStart.disabled = false;
    btnStop.disabled = true;
  });

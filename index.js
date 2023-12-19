const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];
input.addEventListener("keydown", function (event) {
  event.preventDefault();
  if (allowedKeys.includes(event.key)) {
    input.value += event.key;
    return;
  }
  if (event.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (event.key === "=") {
    calculate();
  }
});
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});
document.getElementById("equal").addEventListener("click", calculate);
function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}
document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "copied";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });
document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#98b4b4");
    root.style.setProperty("--border-color", "#291358");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#2711ba");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#060c09");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#2711ba");
    main.dataset.theme = "dark";
  }
});

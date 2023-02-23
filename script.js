const lightModeButton = document.getElementById("light-mode-btn");
const body = document.querySelector("body");

let settings = JSON.parse(window.localStorage.getItem("Settings") ?? "{}");
if (settings.light_mode) {
    body.classList.add('light-mode');
}

lightModeButton.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  settings.light_mode = body.classList.contains("light-mode");
});

window.addEventListener("unload", () => {
  window.localStorage.setItem("Settings", JSON.stringify(settings));
});

const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text"),
  switch1 = body.querySelector(".switch"),
  home = body.querySelector(".home"),
  closed = body.querySelector(".closed"); 
  dropbtn = body.querySelector(".dropbtn")


let settings = JSON.parse(window.localStorage.getItem("Settings") ?? "{}");
if (settings.light_mode) {
  modeText.innerText = "Dark Mode";
} else {
  body.classList.add("dark");
  modeText.innerText = "Light Mode";
}
if (!settings.status) {
  sidebar.classList.add("close");
}
else {
    sidebar.classList.remove("close")
}

sidebar.classList.add("sidebar-transitions")
switch1.classList.add("switch-tran")
home.classList.add("home-tran")
window.addEventListener("unload", () => {
  window.localStorage.setItem("Settings", JSON.stringify(settings));
});

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  settings.status = !settings.status;
  console.log(settings)
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
  settings.status = true;
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  settings.light_mode = !settings.light_mode;
  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  body.getElementsByClassName("dropbtn")[0].classList.toggle("closed");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




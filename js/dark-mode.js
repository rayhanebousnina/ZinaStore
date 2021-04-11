var icon = document.getElementById("icon-dark-mode");
var logo = document.getElementById("logo");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
    logo.src = "images/logo-bg-noir.png";
  } else {
    icon.src = "images/moon.png";
    logo.src = "images/logo-bg-blanc.png";
  }
};
 
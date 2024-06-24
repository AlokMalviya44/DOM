var btn = document.querySelector("button");
var growth = document.querySelector(".growth");
var timer = document.querySelector("p");
var grow = 0;

btn.addEventListener("click", function () {
  var interval = setInterval(function () {
    grow++;
    timer.innerHTML = grow + "%";
    growth.style.width = grow + "%";
  }, 100);
  btn.disabled = true;
  setTimeout(function () {
    clearInterval(interval);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.7;
    
  }, 10000);
});

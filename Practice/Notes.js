var cursor = document.querySelector(".cursor");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");

body.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});

h1.addEventListener("mousemove", function () {
  cursor.style.width = 50 + "px";
  cursor.style.height = + "px";
});

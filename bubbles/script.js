function makeBubbles() {
  var container = "";

  for (var i = 1; i < 501; i++) {
    var num = Math.floor(Math.random() * 100);

    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    container += `<div style="background-color: rgb(${red},${blue},${green})" class = "circle w-20 h-20 rounded-full flex items-center justify-center bg-green-400 gap-2">${num}</div>`;
  }
  document.querySelector(".bubbles").innerHTML = container;
}
makeBubbles();
setInterval(function () {
  makeBubbles();
}, 1000);

// another Method
// iss method k karan we can apply event listener to the bubbles and we cant apply this using above method
// for (var i = 1; i < 151; i++) {
//   var a = document.createElement("div");
//   a.textContent = Math.floor(Math.random() * 100);
//   a.classList.add(
//     "w-20",
//     "h-20",
//     "rounded-full",
//     "flex",
//     "items-center",
//     "justify-center",
//     "bg-green-400",
//     "gap-2"
//   );
//   document.querySelector(".bubbles").appendChild(a);
// }

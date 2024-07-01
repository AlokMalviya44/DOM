var menu = document.querySelector(".menu");
var h3 = document.querySelector("#nav .links h3");
var flag = 0;
h3.addEventListener("click", function () {
  if (flag == 0) {
    menu.style.top = 0;
    h3.style.color = "black";
    h3.innerHTML = `<i class="ri-close-line"></i>`;
    flag = 1;
  }else{
    menu.style.top = -300 + "px"
    h3.style.color = "white"
    h3.innerHTML = `<i class="ri-menu-3-line"></i>`
    flag = 0;
  }
});

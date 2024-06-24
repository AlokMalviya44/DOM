var image = document.querySelector("img");
var moveX = 0;
var moveY = 0;
// getAttribute sirf reading k kaam ata hai aur fir
// setAttribute se attributes change kr skte hai jaise ki image ka src and etc
document.addEventListener("keydown", function (dets) {
    if(dets.keyCode == 39){
        moveX += 10;
        image.style.left = moveX + "px";
    }
    if(dets.keyCode == 37){
        moveX -= 10;
        image.style.left = moveX + "px";
    }
    if(dets.keyCode == 38){
        moveY -= 10;
        image.style.top = moveY + "px";
    }
    if(dets.keyCode == 40){
        moveY += 10;
        image.style.top = moveY + "px";
    }
});

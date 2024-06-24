var main = document.querySelector(".main");
var elemImage = document.querySelector(".main img");

main.addEventListener("mouseenter",function(){
    elemImage.style.tranform = `translate(-50%,-50%) scale(1)`;
})
main.addEventListener("mouseleave",function(){
    elemImage.style.tranform = `translate(-50%,-50%) scale(0)`;
})
main.addEventListener("mousemove",function(dets){
    elemImage.style.left = dets.x + "px"
    elemImage.style.top = dets.y + "px"
})
// we can create any tag using this line 
// isme innerHTML se nhi insert hota 
var img = document.createElement("img");
img.src = ""
document.querySelector("body").appendChild(img);

// jo bhi function k ander likhenge vo given time k baad chal jaega and time milisec and diya jjata hai 
// 1 sec = 1000 millisec 
//setTimeout - delay 
setTimeout(() => {
    
}, timeout);
// setInterval - loop har ek sec ya utne time m vo func chalega
var interval =  setInterval(() => {
    
}, 5000);
// to stop the interval we use clearInterval();or to kill the interval 
clearInterval(interval);

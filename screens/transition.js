window.addEventListener('load', function () {
//   this.alert(document.body.innerHTML);
var frame = document.createElement("iframe");
frame.src="screen_02.html";
frame.style.position = "absolute";
frame.style.width = "100%";
frame.style.height = "100%";
frame.style.margin = "0";
frame.style.top = "0";
frame.style.left = "0";
frame.style.border = "0";
frame.style.zIndex = "99";
frame.style.opacity = "0";
frame.style.pointerEvents = "none";
frame.style.transition = "all 300ms linear";
frame.id = "nextFrame";
this.document.body.appendChild(frame);
})

function openLink(x){
    // window.loaction = x;
    document.getElementById("nextFrame").style.opacity = "1";
    setTimeout(function(){ window.location = x; }, 300);
}
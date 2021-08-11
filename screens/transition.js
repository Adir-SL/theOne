window.addEventListener('load', function () {
    var x = document.getElementsByTagName("a");
    var i;
    for (i = 0; i < x.length; i++) {
        var frame = document.createElement("iframe");
        frame.src = x[i].href;
        frame.style.position = "absolute";
        frame.style.width = "100%";
        frame.style.height = "100%";
        frame.style.margin = "0";
        frame.style.top = "0";
        frame.style.left = "0";
        frame.style.border = "0";
        frame.style.zIndex = 99 + i;
        frame.style.opacity = "0";
        frame.style.pointerEvents = "none";
        frame.style.transition = "all 300ms linear";
        frame.id = "nextFrame_" + i;
        this.document.body.appendChild(frame);

        x[i].addEventListener("load", function() {
            openLink(x[i].href);
          });
        x[i].href="";
        
    }
})

function openLink(x){
    // window.loaction = x;
    document.getElementById("nextFrame_").style.opacity = "1";
    setTimeout(function(){ window.location = x; }, 300);
}
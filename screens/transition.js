window.addEventListener('load', function () {
    var x = document.getElementsByClassName("transjs");
    var i;
    for (i = 0; i < x.length; i++) {
        var frame = document.createElement("iframe");
        frameTest = x[i].onclick.toString();
        frame.src = frameTest = frameTest.slice(frameTest.lastIndexOf("(")+2, frameTest.lastIndexOf(",")-1);
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

        // x[i].setAttribute("onclick","openLink('screen_02.html', event);");
        x[i].id = "linkNum_" + i;
        
    }
})

function openLink(x,e){
    // window.loaction = x;
    tempTest = e.target.id;
    tempTest = tempTest.slice(tempTest.lastIndexOf("_")+1);
    document.getElementById("nextFrame_"+tempTest).style.opacity = "1";
    setTimeout(function(){ 
        document.getElementById("nextFrame_"+tempTest).style.pointerEvents = "all";
        document.getElementById("nextFrame_"+tempTest).style.overflow = "auto";
        alert("Y")
    }, 300);
    // setTimeout(function(){ window.location = x; }, 300);
    
    // document.getElementById("nextFrame_").style.opacity = "1";
    // setTimeout(function(){ window.location = x; }, 300);
}
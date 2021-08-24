function buttonSelect(e){
    var x = document.getElementsByClassName("footer")[0].querySelectorAll("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("blackText");
    }
    e.target.classList.add("blackText");
}

function resetMenu(){
    document.getElementById('storyMenu').style.transform='translateY(120%)';
    document.getElementById('dataMenu').style.transform='translateY(120%)';
    // document.getElementById('firstMenuButton').classList.remove("blackText");
    // document.getElementById('secondMenuButton').classList.remove("blackText");
}

function addCross(){
    document.getElementById('moreData').style.opacity = '1';
    document.getElementById('moreData').style.pointerEvents = 'all';
}
function crossClick(){
    document.getElementById('moreData').classList.toggle("openCross");
    whatPageSlice = whatPage.slice(whatPage.indexOf("_"), whatPage.indexOf("."));
    if(document.getElementById('moreData').className == "openCross"){
        // document.getElementsByClassName("flexDiv")[0].style.backgroundImage = "url(story"+whatPageSlice+".png)";
        document.getElementById("svgLayer").data = "story"+whatPageSlice+".svg";
        document.getElementById("svgLayer").style.opacity = "1";
        document.getElementsByClassName("storyDiv")[0].style.opacity = ".6";
        // document.getElementById("svgLayer").style.opacity = "1";
        // document.getElementById("svgLayer").style.pointerEvents = "all";
        // alert("url(story"+whatPageSlice+".svg)")
    }else{
        // document.getElementsByClassName("flexDiv")[0].style.backgroundImage = "";
        document.getElementById("svgLayer").style.opacity = "0";
        document.getElementsByClassName("storyDiv")[0].style.opacity = "1";
        setTimeout(function(){
            document.getElementById("svgLayer").data = "";
        }, 300);
        // document.getElementById("svgLayer").style.opacity = "0";
        // document.getElementById("svgLayer").style.pointerEvents = "none";
    }
}
function crossReset(){
    document.getElementById('moreData').classList.remove("openCross");
}
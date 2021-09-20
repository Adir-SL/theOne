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
}

function addCross(){
    document.getElementById('moreData').style.opacity = '1';
    document.getElementById('moreData').style.pointerEvents = 'all';
}
function crossClick(){
    document.getElementById('moreData').classList.toggle("openCross");
    whatPageSlice = whatPage.slice(whatPage.indexOf("_"), whatPage.indexOf("."));
    if(document.getElementById('moreData').className == "openCross"){
        document.getElementById("svgLayer").style.opacity = "1";
        document.getElementById("svgLayer").style.pointerEvents = "all";
        // document.getElementsByClassName("storyDiv")[0].style.opacity = ".6";
    }else{
        document.getElementById("svgLayer").style.opacity = "0";
        document.getElementById("svgLayer").style.pointerEvents = "none";
        document.getElementsByClassName("storyDiv")[0].style.opacity = "1";
    }
}
function crossReset(){
    document.getElementById('moreData').classList.remove("openCross");
    setTimeout(function(){
        if(document.getElementsByClassName("wrapper")[1].getElementsByTagName("object")[0].id == "dataLayer"){
            document.getElementById('moreData').style.opacity = "0";
            document.getElementsByClassName("footer")[0].querySelectorAll("button")[0].classList.remove("blackText");
            document.getElementsByClassName("footer")[0].querySelectorAll("button")[1].classList.add("blackText");
        }else{
            document.getElementById('moreData').style.opacity = "1";
            document.getElementsByClassName("footer")[0].querySelectorAll("button")[0].classList.add("blackText");
            document.getElementsByClassName("footer")[0].querySelectorAll("button")[1].classList.remove("blackText");
        }
    }, 30);
}
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
    document.getElementById('firstMenuButton').classList.remove("blackText");
    document.getElementById('secondMenuButton').classList.remove("blackText");
}
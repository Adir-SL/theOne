function buttonSelect(e){
    var x = document.getElementsByClassName("footer")[0].querySelectorAll("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("blackText");
    }
    e.target.classList.add("blackText");
}
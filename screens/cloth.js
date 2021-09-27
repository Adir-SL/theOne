function openCard(e){
    resetCards();
    e.target.getElementsByClassName("clothCard")[0].style.opacity = "1";
}

function resetCards(){
    var x = document.getElementsByClassName("clothCard");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
    }
}
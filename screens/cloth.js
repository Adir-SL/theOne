function openCard(e){
    resetCards();
    e.target.getElementByClassName("clothCard")[0].style.opacity = "1";
}
function fadeLink(url){
    document.getElementsByClassName("wrapper")[0].classList.add("fadeMeOut");
    setTimeout(function(){ window.location.href = url; }, 300);
}

setTimeout(function(){ document.getElementsByClassName("wrapper")[0].style.opacity = 1; }, 10);
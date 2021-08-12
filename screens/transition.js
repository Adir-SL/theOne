function fadeLink(url){
    // document.getElementsByClassName("wrapper")[0].classList.add("fadeMeOut");
    // document.getElementsByClassName("wrapper")[0].style.opacity = "0";
    setTimeout(function(){ window.location.href = url; }, 300);
}

// setTimeout(function(){ document.getElementsByClassName("wrapper")[0].style.opacity = 1; }, 100);

window.addEventListener("beforeunload", function(event) { document.getElementsByClassName("wrapper")[0].style.opacity = "0";});
window.addEventListener("load", function(event) { document.getElementsByClassName("wrapper")[0].style.opacity = "1";});
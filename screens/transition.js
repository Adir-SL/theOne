/*function fadeLink(url){
    setTimeout(function(){ window.location.href = url; }, 300);
}

window.addEventListener("beforeunload", function(event) { document.getElementsByClassName("wrapper")[0].style.opacity = "0";});
window.addEventListener("load", function(event) { document.getElementsByClassName("wrapper")[0].style.opacity = "1";});
*/

function openLink (e, url) {
    (e || window.event).preventDefault();

    document.getElementsByClassName("wrapper")[0].style.opacity = "0";
    setTimeout(function(){
        fetch(url)
        .then((response) => response.text())
        .then((html) => {
            document.getElementsByClassName("wrapper")[0].innerHTML = html;
        })
        .catch((error) => {
            console.warn(error);
        });

        document.getElementsByClassName("footer")[0].style.opacity = "1";
        document.getElementsByClassName("footer")[0].style.pointerEvents = "all";

        window.scrollTo(0,0);
    }, 300);
}
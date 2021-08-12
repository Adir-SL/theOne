// function openLink(frame, url) {
//     fetch("screen_02.html" /*, options */)
//     .then((response) => response.text())
//     .then((html) => {
//         frame.innerHTML = html;
//     })
//     .catch((error) => {
//         console.warn(error);
//     });
// } 

function fadeLink(url){
    document.getElementsByClassName("wrapper")[0].style.opacity = 0;
    setTimeout(function(){ window.location = url; }, 300);
}

setTimeout(function(){ document.getElementsByClassName("wrapper")[0].style.opacity = 1; }, 100);
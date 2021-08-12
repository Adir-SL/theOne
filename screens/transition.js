function openLink(url) {
    fetch("screen_02.html" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.body.innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
} 
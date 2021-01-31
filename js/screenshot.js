function screenshot() {
    let screenshotarea = document.getElementById("lineup");
    html2canvas(screenshotarea).then(canvas => {
        document.body.appendChild(canvas)
    });
};
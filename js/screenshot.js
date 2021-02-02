function screenshot() {
    let lineupImage = document.querySelector('#lineupImage');
    let screenshotarea = document.getElementById("lineup");
    html2canvas(screenshotarea).then(function(canvas) {
        if (lineupImage.hasChildNodes()) {
            lineupImage.replaceChild(canvas, lineupImage.childNodes[0]);
        } else {
        lineupImage.appendChild(canvas);
        };
    });
    document.getElementById("screenshotContainer").style.display = "block";
};

function closeScreenshot() {
    document.getElementById("screenshotContainer").style.display = "none";
}
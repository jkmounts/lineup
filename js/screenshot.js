function screenshot() {
    let lineupImage = document.querySelector('#lineupImage');
    let screenshotarea = document.querySelector('#lineup');
    html2canvas(screenshotarea, {
        windowWidth: 1200,
        scrollX: -window.scrollX,
        scrollY: -window.scrollY}).then((canvas) => {
                if (lineupImage.hasChildNodes()) {
                    lineupImage.replaceChild(canvas, lineupImage.childNodes[0]);
                } else {
                    lineupImage.appendChild(canvas);
                };
            });
    document.querySelector('#screenshotContainer').style.display = "block";
};

function closeScreenshot() {
    document.querySelector('#screenshotContainer').style.display = "none";
}
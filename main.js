function progressBar() {
    var emptyProgressBar = document.querySelector('.progress-bar');
    var filledProgressBar = document.querySelector('.progress-bar-fill');

    var filledProgressBarWidth = 0;

    filledProgressBar.style.width = `${filledProgressBarWidth}%`;

    var progressBar = setInterval(progressBar, 10);

    function progressBar() {
        if (filledProgressBarWidth >= 100) {
            clearInterval(progressBar);
            emptyProgressBar.style.opacity = 0;
        } else {
            filledProgressBarWidth++;
            filledProgressBar.style.width = `${filledProgressBarWidth}%`;
        }
    }
}
// function start() {
//     var fillProgressBar = document.querySelector('.progress-bar-fill');
//     var progressbarWidth = 0;
//     var progressBar = setInterval(progressBar, 10);

//     function progressBar() {
//         if (progressbarWidth == 100) {
//             clearInterval(progressBar);

//         } else {
//             progressbarWidth++;
//             fillProgressBar.style.width = progressbarWidth + '%';
//         }
//     }
// }

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
let currentProgress = 0;

function updateProgressBar() {
    // Simulate a donation increase
    const donationIncrement = Math.floor(Math.random() * 10) + 1; // Random increment between 1 and 10
    currentProgress += donationIncrement;

    if (currentProgress > 100) {
        currentProgress = 100; // Cap progress at 100%
    }

    // Update the progress bar
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = currentProgress + '%';
    progressBar.setAttribute('aria-valuenow', currentProgress);
    progressBar.textContent = currentProgress + '%';
}

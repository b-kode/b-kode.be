const scrollBanner = document.getElementById('scrollBanner'); // Get scrollable banner

function scrollLeftContent() {
    // Scroll 300px left
    scrollBanner.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRightContent() {
    // Scroll 300px right
    scrollBanner.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

// Optional: Add boundary check to disable the left arrow if at the beginning
scrollBanner.addEventListener('scroll', function () {
    const leftArrow = document.querySelector('.left-arrow');
    if (scrollBanner.scrollLeft === 0) {
        leftArrow.style.display = 'none'; // Hide the left arrow if at the beginning
    } else {
        leftArrow.style.display = 'block'; // Show the left arrow if not at the beginning
    }
});
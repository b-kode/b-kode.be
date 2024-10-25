window.onload = function() {
    const scrollBanner = document.getElementById('scrollBanner');
    const dotsContainer = document.getElementById('dotsContainer');
    const bannerContent = document.querySelector('.scroll-banner-content');

    // Variables for banner paging
    const bannerWidth = scrollBanner.offsetWidth;
    const contentWidth = bannerContent.scrollWidth;
    const numPages = Math.ceil(contentWidth / bannerWidth); // Calculate number of "pages"
    let currentPage = 0;

    // Function to create dots based on the number of pages
    function createDots() {
        for (let i = 0; i < numPages; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => goToPage(i)); // Scroll to specific page when dot is clicked
            dotsContainer.appendChild(dot);
        }
        updateDots();
    }

    // Scroll to a specific page
    function goToPage(page) {
        const position = page * bannerWidth;
        scrollBanner.scrollTo({ left: position, behavior: 'smooth' });
        currentPage = page;
        updateDots();
    }

    // Update dot appearance based on current page
    function updateDots() {
        const dots = dotsContainer.children;
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.toggle('active', i === currentPage); // Highlight the active dot
        }
    }

    // Update current page on scroll to adjust the active dot
    scrollBanner.addEventListener('scroll', () => {
        const scrollLeft = scrollBanner.scrollLeft;
        currentPage = Math.round(scrollLeft / bannerWidth);
        updateDots();
    });

    // Initialize dots when the page loads
    createDots();
};

const artworkLink = document.querySelector('.artwork-link');
const hoverImage = document.querySelector('#hover-image');

artworkLink.addEventListener('mousemove', (e) => {
    hoverImage.style.display = 'block';
    hoverImage.style.left = `${e.pageX + 10}px`; // Positioning to the right of the cursor
    hoverImage.style.top = `${e.pageY - hoverImage.height - +370}px`; // Positioning above the cursor
});

artworkLink.addEventListener('mouseleave', () => {
    hoverImage.style.display = 'none';
});
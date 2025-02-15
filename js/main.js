
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container img');
    
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('fade-in');
        }, index * 400); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cornerImage = document.querySelector('.corner-image');
    
    /* tiempo en el que aparece */
    setTimeout(function() {
        cornerImage.classList.add('show');
    }, 2500);
});
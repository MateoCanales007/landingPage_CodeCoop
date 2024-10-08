const colors = ['#6c8af1', '#4ad2f6', '#1cff00', '#f645ff'];

function getRandomSpecificColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setupMenuHoverColors() {
    const links = document.querySelectorAll('.nav');
    
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = getRandomSpecificColor();
        });
        
        link.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });
}

// Configurar los colores al cargar la página
document.addEventListener('DOMContentLoaded', setupMenuHoverColors);


document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    // Cambiar el tema cuando se cambia el interruptor
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});
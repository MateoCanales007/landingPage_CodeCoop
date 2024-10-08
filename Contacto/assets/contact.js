const colors = ['#6c8af1', '#4ad2f6', '#1cff00', '#f645ff'];

        function getRandomSpecificColor() {
            return colors[Math.floor(Math.random() * colors.length)];
        }

        const links = document.querySelectorAll('.nav');
        links.forEach(link => {
            link.addEventListener('mouseover', function() {
                this.style.color = getRandomSpecificColor();
            });
            link.addEventListener('mouseout', function() {
                this.style.color = '#ffffff'; 
            });
        });

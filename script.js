document.addEventListener('DOMContentLoaded', function() {
    const problemContent = {
        'Air Pollution': {
            image: 'assets/clouds.png',
            text: 'Wood waste releases CO2 & methane, the same gases trees are meant to store.'
        },
        'Landfills Overflowing': {
            image: 'assets/landfill.png',
            text: 'Wood is the largest material in Canadian landfills—yet only 0.3% is recycled!'
        },
        'Soil & Water Contamination': {
            image: 'assets/forestWater.jpg',
            text: 'Toxic leachate from decomposing wood seeps into our environment.'
        }
    };

    const infoCardImage = document.querySelector('.card-image img');
    const infoCardText = document.querySelector('.card-text p');

    const problemItems = document.querySelectorAll('.problem-item');
    problemItems.forEach(item => {
        item.addEventListener('click', function() {
            const problemTitle = this.querySelector('h3').textContent;

            infoCardImage.src = problemContent[problemTitle].image;
            infoCardImage.alt = problemTitle;
            infoCardText.textContent = problemContent[problemTitle].text;

            problemItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    problemItems[0].classList.add('active');
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        mobileMenuBtn.classList.toggle('active');
    });
    
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('show');
            mobileMenuBtn.classList.remove('active');
        });
    });
});
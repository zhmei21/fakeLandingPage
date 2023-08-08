function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
        menuToggle.style.color = '#8CCB9B';
    } else {
        sidebar.style.left = '-250px';
        menuToggle.style.color = '';
    }
}
function showInfo(paragraph) {
    const infoCard = paragraph.nextElementSibling;
    infoCard.style.display = 'block';
}

function hideInfo() {
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.style.display = 'none';
    });
}

function zoomIn(image){
    image.style.transform = 'scale(1.3)';
    image.style.transition = 'transform 0.3s ease';
}
function zoomOut(image){
    image.style.transform = 'scale(1)';
}

const button = document.querySelector('.click-me')

button.addEventListener('click', () =>{
    alert('I got pressed! Please wait for 5min');
})
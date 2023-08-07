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

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const menuItems = document.querySelectorAll('.menu-item');

    menu.addEventListener('mouseenter', () => {
        menu.style.width = '200px';
    });

    menu.addEventListener('mouseleave', () => {
        menu.style.width = '60px';
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
        });
    });
});

const itemsNav = document.querySelectorAll('header li:not(:first-of-type)');
const burgerMenu = document.querySelector('header button');

burgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    itemsNav.forEach(item => {
        item.classList.contains('hidden')
        ? item.classList.replace('hidden', 'flex')
        : item.classList.replace('flex', 'hidden')
    })
})
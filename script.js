function handleHamburguerButton() {
    const hamburguerBtn = document.getElementById('hamburguerMenuBtn')
    hamburguerBtn.addEventListener('click', () => toggleHambuguerMenu())
    handleNavList();
}

function handleNavList() {
    const navList = document.getElementById('headingList');   
    navList.addEventListener('click', () => toggleHambuguerMenu())
}

function toggleHambuguerMenu() {
    const navList = document.getElementById('headingList');   

    navList.classList.toggle('header__nav__list--mobile--open');
    navList.classList.toggle('header__nav__list--mobile--close');
}

handleHamburguerButton();

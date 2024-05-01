const navlink = document.querySelector('.navlinks');
const body = document.querySelector('body');

const handleShowSidebar = ()=>{
    navlink.classList.add('navlinksShown');
    body.classList.add('bodyUnscroll');
}

const handleRemoveSidebar = ()=>{
    body.classList.remove('bodyUnscroll');
    const navlink = document.querySelector('.navlinks');
    navlink.classList.remove('navlinksShown');
}


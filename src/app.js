import header from './scripts/header';
import about from './scripts/about';
export default () => {
    const sections = document.getElementsByTagName('section');
    const navMenu = document.getElementsByClassName('navmenu')[0];
    const navScrollbar = document.getElementsByClassName('scrollbar')[0];
    const scrollHandler = () => {
        if(window.scrollY > window.innerHeight/2) {
            navMenu.classList.add('inverse');
            for(let i=0;i<sections.length;i++) {
                sections[i].classList.add('inverse');
            }
        } else {
            navMenu.classList.remove('inverse');
            for(let i=0;i<sections.length;i++) {
                sections[i].classList.remove('inverse');
            }
        }
        //navmenu
        if(window.scrollY > window.innerHeight) {
            navMenu.style.top = window.scrollY + 'px';
        } else {
            navMenu.style.top = '100vh';
        }
        navScrollbar.style.height = window.innerHeight/(sections.length -1 ) + 'px';
        navScrollbar.style.top = (window.scrollY-window.innerHeight)/(sections.length-1) + 'px';
    };
    document.addEventListener('scroll', scrollHandler);
    scrollHandler();
    header();
    about();
}

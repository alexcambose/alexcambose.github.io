import {percentFrom, sliceFromPercent} from "./scripts/utils";

import header from './scripts/header';
import about from './scripts/about';
export default () => {
    const sections = document.getElementsByTagName('section');
    const navMenu = document.getElementsByClassName('navmenu')[0];
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

        let cs = null;
        const menuElements = document.querySelectorAll('.navmenu li');
        let i;
        for(i=2;i<=sections.length-1 && sections[i].offsetTop < window.scrollY + window.innerHeight/2;i++);
        for(let j = 0;j<menuElements.length;j++) {
            menuElements[i].classList.remove('active');
            if(j === i-1) menuElements[i].classList.add('active');
        }
        //console.log(sections[i-1].classList[0])
        // navScrollbar.style.top = sliceFromPercent(percentFrom(sections[1].offsetTop, window.scrollY), window.innerHeight/(sections.length-1)) + 'px';
    };
    document.addEventListener('scroll', scrollHandler);
    scrollHandler();
    header();
    about();
}

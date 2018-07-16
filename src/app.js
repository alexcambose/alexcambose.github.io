import {percentFrom, sliceFromPercent} from "./scripts/utils";

import header from './scripts/header';
import about from './scripts/about';
import projects from './scripts/projects';

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
            // for the projects section
            const projectsSection = [...sections].find(e => e.classList.contains('projects'));
            if(window.scrollY + window.innerHeight > projectsSection.offsetTop && window.scrollY + window.innerHeight < projectsSection.offsetTop + projectsSection.offsetHeight) {
                navMenu.style.position = 'absolute';
                navMenu.style.top = window.scrollY - (window.scrollY + window.innerHeight - projectsSection.offsetTop) / 2 + 'px';
            } else {
                navMenu.style.top = '0px';
                navMenu.style.position = 'fixed';
            }

        } else {
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100vh';
        }

        const menuElements = document.querySelectorAll('.navmenu li');
        let i;
        for (i=2;i<=sections.length-1 && sections[i].offsetTop < window.scrollY + window.innerHeight/2;i++);
        for(let j = 0;j<menuElements.length;j++) {

            if(j === i-2) menuElements[j].classList.add('active');
            else menuElements[j].classList.remove('active');
        }
        // menuElements[i].classList.add('active')
        // console.log(sections[i-1].classList[0])
        // navScrollbar.style.top = sliceFromPercent(percentFrom(sections[1].offsetTop, window.scrollY), window.innerHeight/(sections.length-1)) + 'px';
    };
    document.addEventListener('scroll', scrollHandler);
    scrollHandler();
    header();
    about();
    projects();
}

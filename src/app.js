
import header from './scripts/header';
import about from './scripts/about';
import projects from './scripts/projects';
import life from './scripts/life';
import {switchTimer} from "./config";
import {inViewport, randomFromInterval} from "./scripts/utils";

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

    };
    document.addEventListener('scroll', scrollHandler);


    //SWITCHER
    const switches = document.getElementsByClassName('switcher');
    for(let i = 0; i<switches.length;i++) {
        const children = switches[i].children;
        if(children.length > 1) {
            children[0].classList.add('active');
            setInterval(() => {
                if(inViewport(children[0])) {
                    const activeElementIndex = [...children].findIndex(e => e.classList && e.classList.value.indexOf('active') !== -1);
                    if(activeElementIndex === -1) children[0].classList.add('active');
                    else if(activeElementIndex === children.length-1) {
                        children[0].classList.add('active');
                        children[children.length-1].classList.remove('active');
                    } else {
                        children[activeElementIndex].classList.remove('active');
                        children[activeElementIndex+1].classList.add('active');
                    }
                }
            }, switchTimer + randomFromInterval(0, 500));
        }
    }
    scrollHandler();
    header();
    about();
    projects();
    life();
}

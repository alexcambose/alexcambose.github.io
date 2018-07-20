import Motus from 'motus';
import {inViewport} from "./utils";
Motus = new Motus();
export default () => {
    const projectsSection = document.querySelector('section.projects');
    const projectsContainer = document.querySelector('section.projects .projects-container');
    const projects = document.querySelectorAll('.projects-container .project');
    const projectImages = document.querySelectorAll('section.projects .project-image-container');
    const scrollHandler = () => {
        const {scrollY} = window;

        if (scrollY > projectsSection.offsetTop) {
            projectsSection.classList.remove('inverse');
        } else {
            projectsSection.classList.add('inverse');
        }
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].getBoundingClientRect().y < window.innerHeight/2) projects[i].classList.add('active');
            else projects[i].classList.remove('active');
        }
    };
    const myAnimation = new Motus.Animation(
        new Motus.Point(projectsSection.offsetTop),
        new Motus.Point(projectsSection.offsetTop + 100),
        document.querySelector('section.projects .standalone-line-center'),
        {
            0: {width: 100},
            100: {width: window.innerWidth}
        }
    );
    Motus.addAnimation(myAnimation);
    const myAnimation2 = new Motus.Animation(
        new Motus.Point(projectsSection.offsetTop - window.innerHeight/.8),
        new Motus.Point(projectsSection.offsetTop + projectsSection.offsetHeight),
        document.querySelector('#number'),
        {
            0: {marginLeft: -1000},
            30: {marginLeft: 0},
            70: {marginLeft: 0},
            100: {marginLeft: -1000},

        }
    );
    Motus.addAnimation(myAnimation2);

    //PROJECT IMAGE MOUSE PERSPECTIVE
    const perspectivize = element => {
        document.addEventListener('mousemove', e => {
            if(inViewport(element)) {
                const rotateX = e.clientX - window.innerWidth / 2;
                const rotateY = e.clientY - window.innerHeight / 2;
                element.style.transform = `rotateX(${(-rotateY * 0.02).toFixed(1)}deg) rotateY(${(rotateX * 0.02).toFixed(1)}deg)`;
            }
        });
    };
    for(let i=0;i<projectImages.length;i++) perspectivize(projectImages[i]);

    // const document.querySelector('.projects-repeating');
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
}
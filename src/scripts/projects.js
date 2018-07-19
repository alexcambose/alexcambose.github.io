import { projects as portfolioProjects } from '../config';
import Motus from 'motus';
import {beautifyGithubRepoName} from "./utils";
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
            if (projects[i].getBoundingClientRect().y < 300) projects[i].classList.add('active');
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

    //PROJECT IMAGE MOUSE PERSPECTIVE
    const perspectivize = element => {
        document.addEventListener('mousemove', e => {
            const rotateX = e.clientX - window.innerWidth / 2;
            const rotateY = e.clientY - window.innerHeight / 2;
            element.style.transform = `rotateX(${(-rotateY * 0.02).toFixed(1)}deg) rotateY(${(rotateX * 0.02).toFixed(1)}deg)`;
            // projectImages[i].style.boxShadow = `0px 33px 25px -25px #777`;
        });
    };
    // for(let i=0;i<projectImages.length;i++) perspectivize(projectImages[i]);

    // const document.querySelector('.projects-repeating');
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();


    //PROJECTS FETCH AND RENDER ON PAGE
    const getProjectInfo = async (repoName) => {
        const apiUrl = `https://api.github.com/repos/alexcambose/${repoName}`;
        let info = await fetch(apiUrl);
        info = await info.json();
        return info;
    };

    // for(let project of portfolioProjects) {
    //     const { name, image, technologies } = project;
    //     getProjectInfo(project.name).then(info => {
    //         addProject(beautifyGithubRepoName(name), image, name, info.description, technologies, info.stargazers);
    //     });
    // }
}
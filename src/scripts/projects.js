import Motus from 'motus';
import {inViewport} from "./utils";
import {otherProjects} from "../config";
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

    //OTHER PROJECTS
    const otherProjectsContainer = document.getElementById('other-projects');
    const getRepoInfo = async repoName => {
        let res = await fetch(`https://api.github.com/repos/alexcambose/${repoName}`);
        res = await res.json();
        return res;
    };
    for(let project of otherProjects) {
        getRepoInfo(project).then(info => {
            const html = `
                <div class="w-md-${12/otherProjects.length}">
                <div class="project-box">
                <div class="project-title">${info.name}</div>
                    <div class="project-description">${info.description}</div>
                    <div class="project-footer">
                        <span class="project-stars">
                        <a target="_blank" href="https://github.com/alexcambose/${project}/stargazers">
     <i class="fa fa-star"></i> ${info.stargazers_count}                   
</a>
</span>
                        <span class="project-forks">
                        <a target="_blank" href="https://github.com/alexcambose/${project}/network">
     <i class="fa fa-code-branch"></i> ${info.forks_count}                   
</a>
</span>
                        <span class="project-watchers">
                        <a target="_blank" href="https://github.com/alexcambose/${project}/watchers">
     <i class="fa fa-eye"></i> ${info.subscribers_count}                   
</a>
</span>
                        <div class="project-link">
<a target="_blank" href="${info.html_url}"><i class="fab fa-github"></i></a></div>
                    </div>
</div>
                    
                </div>
            `;
            otherProjectsContainer.innerHTML += html;
        });
    }
}
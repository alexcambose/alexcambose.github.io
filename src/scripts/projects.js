import Motus from 'motus';
Motus = new Motus();
export default () => {
    const projectsSection = document.querySelector('section.projects');
    const projectsContainer = document.querySelector('section.projects .projects-container');
    const projects = document.querySelectorAll('.projects-container .project');
    const projectImages = document.querySelectorAll('section.projects .project-image-container');
    const scrollHandler = () => {
        const { scrollY } = window;

        if(scrollY > projectsSection.offsetTop) {
            projectsSection.classList.remove('inverse');
        } else {
            projectsSection.classList.add('inverse');
        }
        console.log(projects);
        for (let i=0;i<projects.length; i++) {
            if(projects[i].getBoundingClientRect().y < 300) projects[i].classList.add('active');
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
    for (let i=0;i<projectImages.length; i++) {
        document.addEventListener('mousemove', e => {
            const rotateX = e.clientX - window.innerWidth/2;
            const rotateY = e.clientY - window.innerHeight/2;
            projectImages[i].style.transform = `rotateX(${-rotateY*0.02}deg) rotateY(${rotateX*0.02}deg)`;
            // projectImages[i].style.boxShadow = `0px 33px 25px -25px #777`;
        });
        projectImages[i].addEventListener('mouseleave', e => {
            console.log(':(');
            e.target.style.transform = `rotateX(0deg) rotateY(0deg)`;
        })
    }

    // const document.querySelector('.projects-repeating');
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
}
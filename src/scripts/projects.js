export default () => {
    const projectsSection = document.querySelector('section.projects');
    const projectsContainer = document.querySelector('section.projects .projects-container');
    const scrollHandler = () => {
        const { scrollY } = window;
        if(scrollY > projectsSection.offsetTop) {
            projectsContainer.style.position = 'fixed';
        } else {
            projectsContainer.style.position = 'relative';
        }
    };
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
}
export default () => {
    window.addEventListener('scroll', () => {
        const meSvg = document.getElementById('me');
        if(window.scrollY > meSvg.getBoundingClientRect().y){
            meSvg.classList.add('animate')
        }
    });
}